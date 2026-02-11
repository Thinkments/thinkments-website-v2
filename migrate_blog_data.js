const fs = require('fs');
const path = require('path');

const blogPostsPath = 'src/data/blogPosts.ts';
const blogPostPagePath = 'src/components/pages/BlogPostPage.tsx';

try {
    const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');
    const blogPostPageContent = fs.readFileSync(blogPostPagePath, 'utf8');

    // 1. Extract basicBlogPosts string
    // It starts with `const basicBlogPosts = {` and ends with `};`
    const startMarker = 'const basicBlogPosts = {';
    const endMarker = '};'; // this might be ambiguous if nested.
    // Better: loop line by line to extract the block, respecting braces.

    const extractObjectLiteral = (content, marker) => {
        const lines = content.split('\n');
        let startLine = -1;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(marker)) {
                startLine = i;
                break;
            }
        }

        if (startLine === -1) throw new Error(`Could not find ${marker}`);

        let braceCount = 0;
        let objectLines = [];
        let inside = false;

        // We start processing from the line where the marker is found
        // We need to count braces to find the matching closing brace
        const layout = lines[startLine];
        // Assuming 'const basicBlogPosts = {' is on one line or starts there.
        // We'll treat the text from `{` onwards.

        // Simpler approach: grab from startMarker until a line that is just `};` or close to it?
        // Brute force brace counting is best.

        let buffer = content.substring(content.indexOf(marker));
        // Find the first `{`
        const openBraceIndex = buffer.indexOf('{');
        buffer = buffer.substring(openBraceIndex);

        let depth = 0;
        let endIndex = 0;
        for (let i = 0; i < buffer.length; i++) {
            if (buffer[i] === '{') depth++;
            if (buffer[i] === '}') depth--;

            if (depth === 0) {
                endIndex = i + 1;
                break;
            }
        }

        const objectString = buffer.substring(0, endIndex);
        // This string is `{ ... }`
        // We want to parse it. 
        // Since it's raw JS code (with backticks), we can try to evaluate it if we stub variables?
        // basicBlogPosts doesn't seem to use external variables.
        return objectString;
    };

    console.log("Extracting basicBlogPosts from BlogPostPage.tsx...");
    const basicBlogPostsString = extractObjectLiteral(blogPostPageContent, 'const basicBlogPosts = {');

    // To parse this safely without eval-ing the whole file, we can format it as a module export and require it
    // ignoring typescript typings if any.
    // But wait, the content inside might use TS syntax? 'id: 1' is fine.
    // It's just an object literal.

    const tempFileName = 'temp_posts_extract.js';
    fs.writeFileSync(tempFileName, `module.exports = ${basicBlogPostsString};`);

    console.log("Requiring extracted posts...");
    const basicBlogPosts = require('./' + tempFileName);

    // 2. Extract existing keys from blogPosts.ts
    // We can't easily require this because it is TS.
    // But we can parse regex keys.
    const extractKeys = (content) => {
        const keys = [];
        const lines = content.split('\n');
        let inside = false;
        for (const line of lines) {
            if (line.includes('export const blogPosts')) inside = true;
            if (!inside) continue;
            if (line.trim() === '};') inside = false;

            const match = line.match(/^\s*(['"]?)([\w-]+)\1:\s*\{/);
            if (match) keys.push(match[2]);
        }
        return keys;
    };

    const existingKeys = extractKeys(blogPostsContent);
    console.log(`Found ${existingKeys.length} existing keys in blogPosts.ts`);

    // 3. Find missing
    const newPosts = [];
    let newPostsStringString = "";

    for (const [slug, post] of Object.entries(basicBlogPosts)) {
        if (!existingKeys.includes(slug)) {
            // Prepare new post object
            // We need to preserve the formatting/backticks if possible, but requiring it turned it into strings.
            // Re-serializing it might lose formatting (like newlines in content).
            // JSON.stringify will escape newlines which is ugly but valid.
            // Better: construct string manually or use JSON.stringify and then post-process?

            // Actually, if we just use JSON.stringify, it's valid JS/TS content.
            // We just need to make sure we add metaTitle/metaDescription.

            const newPost = { ...post };
            if (!newPost.metaTitle) newPost.metaTitle = newPost.title;
            if (!newPost.metaDescription) newPost.metaDescription = newPost.excerpt;

            // Construct the string entry
            // slug: { ... }
            const jsonStr = JSON.stringify(newPost, null, 2);
            // JSON keys are quoted "key": value. 
            // TS keys can be unquoted if simple identifiers.
            // We can remove quotes from keys to make it look nicer, but it's not strictly necessary.

            newPostsStringString += `  '${slug}': ${jsonStr},\n`;
        }
    }

    if (newPostsStringString.length === 0) {
        console.log("No new posts to merge.");
    } else {
        console.log("Merging new posts...");
        // find the last closing brace of the object in blogPosts.ts
        const insertionPoint = blogPostsContent.lastIndexOf('};');
        if (insertionPoint === -1) throw new Error("Could not find closing brace in blogPosts.ts");

        const newContent = blogPostsContent.substring(0, insertionPoint) +
            "\n  // Migrated Posts\n" +
            newPostsStringString +
            blogPostsContent.substring(insertionPoint);

        fs.writeFileSync(blogPostsPath, newContent);
        console.log("Successfully merged posts!");
    }

    // Cleanup
    fs.unlinkSync(tempFileName);

} catch (err) {
    console.error("Migration failed:", err);
}
