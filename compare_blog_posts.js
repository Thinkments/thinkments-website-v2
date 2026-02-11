const fs = require('fs');
const path = require('path');

const blogPostsPath = 'src/data/blogPosts.ts';
const blogPostPagePath = 'src/components/pages/BlogPostPage.tsx';

try {
    console.log('Reading files...');
    if (!fs.existsSync(blogPostsPath)) {
        console.error(`File not found: ${blogPostsPath}`);
    }
    if (!fs.existsSync(blogPostPagePath)) {
        console.error(`File not found: ${blogPostPagePath}`);
    }

    const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');
    console.log(`Read blogPosts.ts: ${blogPostsContent.length} bytes`);

    const blogPostPageContent = fs.readFileSync(blogPostPagePath, 'utf8');
    console.log(`Read BlogPostPage.tsx: ${blogPostPageContent.length} bytes`);

    const extractKeys = (content, objectName) => {
        const keys = [];
        const lines = content.split('\n');
        let insideObject = false;

        for (const line of lines) {
            // naive start check
            if (line.includes(`const ${objectName}`)) {
                insideObject = true;
                continue;
            }

            if (!insideObject) continue;

            // Check for end of object - heuristic
            if (line.trim() === '};') {
                insideObject = false;
                break;
            }

            const keyMatch = line.match(/^\s*(['"]?)([\w-]+)\1:\s*\{/);
            if (keyMatch) {
                keys.push(keyMatch[2]);
            }
        }
        return keys;
    };

    const getTsKeysAndMeta = (content) => {
        const postMap = {};
        const lines = content.split('\n');
        let insideObject = false;
        let currentKey = null;

        for (const line of lines) {
            if (line.includes('export const blogPosts')) {
                insideObject = true;
                continue;
            }
            if (!insideObject) continue;

            if (line.trim() === '};') break;

            const keyMatch = line.match(/^\s*(['"]?)([\w-]+)\1:\s*\{/);
            if (keyMatch) {
                currentKey = keyMatch[2];
                postMap[currentKey] = { metaTitle: false, metaDescription: false };
            }

            if (currentKey) {
                if (line.includes('metaTitle:')) postMap[currentKey].metaTitle = true;
                if (line.includes('metaDescription:')) postMap[currentKey].metaDescription = true;
            }
        }
        return postMap;
    };

    const tsPosts = getTsKeysAndMeta(blogPostsContent);
    const tsKeys = Object.keys(tsPosts);
    console.log(`Extracted keys from blogPosts.ts: ${tsKeys.length}`);

    const basicKeys = extractKeys(blogPostPageContent, 'basicBlogPosts');
    console.log(`Extracted keys from BlogPostPage.tsx: ${basicKeys.length}`);

    const missingInTs = basicKeys.filter(key => !tsKeys.includes(key));

    if (missingInTs.length > 0) {
        console.log('MISSING in blogPosts.ts:', missingInTs);
    } else {
        console.log('All posts from component are present in blogPosts.ts');
    }

    const incompleteMeta = tsKeys.filter(key => !tsPosts[key].metaTitle || !tsPosts[key].metaDescription);
    if (incompleteMeta.length > 0) {
        console.log('Posts missing metaTitle or metaDescription in blogPosts.ts:', incompleteMeta);
    } else {
        console.log('All posts in blogPosts.ts have metaTitle and metaDescription');
    }

} catch (err) {
    console.error('Error:', err);
}
