// this configures the _static file for netlify.

const fs = require('fs');

fs.writeFile("dist/_static", '/* /index.html 200', (err) => {
  if (err) {
    console.log(`Error writing to _static file: ${err}`);
  } else {
    console.log('_static file created successfully');
  }
})
