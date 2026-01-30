try {
  console.log('Attempting to run generateStaticPages.js');
  const result = require('./src/scripts/generateStaticPages.js');
  console.log('Completed require');
} catch (e) {
  console.error('CAUGHT ERROR:');
  console.error(e);
}
