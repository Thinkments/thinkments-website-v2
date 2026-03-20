const { spawnSync } = require('child_process');
const fs = require('fs');

try {
  const result = spawnSync('npx', ['tsc', '--noEmit', '-p', 'tsconfig.app.json'], { encoding: 'utf-8', shell: true });
  fs.writeFileSync('true_errors.txt', 'STDOUT:\n' + result.stdout + '\nSTDERR:\n' + result.stderr + '\nSTATUS: ' + result.status);
} catch (e) {
  fs.writeFileSync('true_errors.txt', 'CRASH:\n' + e.message);
}
