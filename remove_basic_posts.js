const fs = require('fs');
const filePath = 'src/components/pages/BlogPostPage.tsx';

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    // Lines are 1-indexed in view, so 0-indexed in array.
    // Removal range: Line 23 to 3531 inclusive.

    const startLine = 23;
    const endLine = 3531;
    const startIndex = startLine - 1;
    const endIndex = endLine - 1;

    // Verification checks using includes to be safe against minor whitespace
    const startCheck = lines[startIndex].includes('// Basic blog post data');
    const endCheck = lines[endIndex].includes('};');

    if (startCheck && endCheck) {
        console.log('Markers confirmed. Deleting lines ' + startLine + ' to ' + endLine);
        lines.splice(startIndex, (endIndex - startIndex + 1));

        const newContent = lines.join('\n');
        fs.writeFileSync(filePath, newContent);
        console.log('Successfully removed basicBlogPosts block.');
    } else {
        console.error('Markers NOT found at expected lines. Aborting.');
        if (!startCheck) console.log('Line ' + startLine + ': expect // Basic blog post data..., got: ' + lines[startIndex]);
        if (!endCheck) console.log('Line ' + endLine + ': expect };, got: ' + lines[endIndex]);
    }

} catch (err) {
    console.error(err);
}
