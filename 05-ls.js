const fs = require("fs");

const dirPath = process.argv[2];
const ext = process.argv[3];

fs.readdir(dirPath, (err, list) => {
  if (err) console.log(err);
  list.forEach((file) => {
    const idx = file.lastIndexOf(".");

    if (idx !== -1 && file.slice(idx + 1) === ext) console.log(file);
  });
});

//공식 해답이 더 괜찮아 보인다.
