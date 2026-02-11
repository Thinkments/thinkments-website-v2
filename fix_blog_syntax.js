const fs = require('fs');
const filePath = 'src/data/blogPosts.ts';

try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    let breakStart = -1;
    let breakEnd = -1;

    // Find where the object originally closed
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '};') {
            // Check upcoming lines for the export functions we want to remove
            // Look ahead up to 10 lines
            let foundExport = false;
            for (let j = 1; j < 10 && i + j < lines.length; j++) {
                if (lines[i + j].includes('export const getBlogPostBySlug')) {
                    foundExport = true;
                    break;
                }
            }
            if (foundExport) {
                breakStart = i;
                break;
            }
        }
    }

    // Find start of migrated posts
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('// Migrated Posts')) {
            breakEnd = i - 1;
            break;
        }
    }

    if (breakStart !== -1 && breakEnd !== -1) {
        console.log(`Removing lines ${breakStart + 1} to ${breakEnd + 1}`);
        lines.splice(breakStart, (breakEnd - breakStart + 1));

        // Clean up end of file
        while (lines.length > 0 && lines[lines.length - 1].trim() === '') {
            lines.pop();
        }

        let lastLine = lines[lines.length - 1];
        console.log('Last line:', lastLine);

        if (!lastLine.trim().endsWith('};')) {
            console.log('Appending closure.');
            // Simple heuristic for the last item closure based on indentation
            if (lastLine.trim().endsWith('"') || lastLine.trim().endsWith('",')) {
                lines.push('  },');
            } else if (!lastLine.trim().endsWith('},')) {
                // If not ending in }, and not string property, what is it?
                // Maybe it ends with } but not comma?
                if (lastLine.trim().endsWith('}')) {
                    lines[lines.length - 1] += ',';
                } else {
                    lines.push('  },');
                }
            }
            lines.push('};');
        }

        fs.writeFileSync(filePath, lines.join('\n'));
        console.log('Fixed blogPosts.ts syntax.');

    } else {
        console.error('Could not find markers. breakStart:', breakStart, 'breakEnd:', breakEnd);
    }

} catch (err) {
    console.error(err);
}
