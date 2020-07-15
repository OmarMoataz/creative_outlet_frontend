// this configures the _static file for netlify.

const fs = require('fs');

fs.writeFile("dist/_redirects", '/* /index.html 200', (err) => {
  if (err) {
    console.log(`Error writing to _static file: ${err}`);
  } else {
    console.log('_redirects file created successfully');
  }
})
