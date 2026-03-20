import ts from 'typescript';
import fs from 'fs';

try {
  const configPath = ts.findConfigFile('./', ts.sys.fileExists, 'tsconfig.app.json');
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, './');
  const program = ts.createProgram(parsed.fileNames, parsed.options);
  const emitResult = program.emit();
  const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
  
  let out = '';
  allDiagnostics.forEach(diagnostic => {
    if (diagnostic.file) {
      const { line, character } = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start);
      const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
      out += `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}\n`;
    } else {
      out += ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n') + '\n';
    }
  });
  
  out += `\nTotal errors: ${allDiagnostics.length}\n`;
  fs.writeFileSync('ts-errs.txt', out);
} catch (e) {
  fs.writeFileSync('ts-errs.txt', 'CRASH: ' + e.message + '\n' + e.stack);
}
