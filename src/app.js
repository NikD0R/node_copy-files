'use strict';

const fs = require('fs');
const path = require('path');

if (process.argv.slice(2).length !== 2) {
  /* eslint-disable-next-line no-console */
  console.error('Provide source and destination');
  return;
}

const [file, dest] = process.argv.slice(2);

if (path.resolve(file) !== path.resolve(dest)) {
  fs.stat(file, (error, stats) => {
    if (error) {
      /* eslint-disable-next-line no-console */
      console.error(error);

      return;
    }

    if (!stats.isFile()) {
      /* eslint-disable-next-line no-console */
      console.error('Source is not a file');

      return;
    }

    fs.cp(file, dest, (err) => {
      if (err) {
        /* eslint-disable-next-line no-console */
        console.error(err);
      }
    });
  });
}
