'use strict';

const fs = require('fs/promises');
const path = require('path');

const [file, dest] = process.argv.slice(2);

if (process.argv.slice(2).length !== 2) {
  /* eslint-disable-next-line no-console */
  console.error('Provide source and destination');
  process.exit(0);
}

async function main() {
  if (path.resolve(file) !== path.resolve(dest)) {
    try {
      const stats = await fs.stat(file);

      if (!stats.isFile()) {
        /* eslint-disable-next-line no-console */
        console.error('Source is not a file');

        return;
      }
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.error(error);

      return;
    }

    try {
      await fs.cp(file, dest);
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.error(error);
    }
  }
}

main();
