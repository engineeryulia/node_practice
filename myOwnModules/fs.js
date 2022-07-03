const fs = require('fs');
const path = require('path');
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if(err){
//     throw err
//   }
//   console.log('Dirrectory was created');
// });
const filePath = path.join(__dirname, 'test', 'hello.txt');
// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('File Hello was created');
// });

// fs.appendFile(filePath, '\nGoodbye NodeJS', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('File Goodbye was created');
// });
// fs.readFile(filePath, (err, content) => {
//   if (err) {
//     throw err;
//   }
//   console.log('content:', content);
// });
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }
  // const data = Buffer.from(content);
  // console.log('content:', data.toString);
  console.log(content);
});
