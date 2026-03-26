import { readFile, writeFile, stat, open, watch, readdir } from 'node:fs/promises';

// const watcher = watch('./');

// for await (const event of watcher){
//     console.log(event);
// };

// async function readDir(){

//     const files = await readdir('./', {withFileTypes: true});
//     for (const file of files){
//         const fileSize = await stat(file.name);
//         if (file.isDirectory() === true){
//             console.log(`D - ${file.name}`);
//         }else{
//             console.log(`F - ${file.name} - ${fileSize.size}o`);
//         }
//     }
// };

// readDir();

// console.time('test');
// const files = await readdir('./', { withFileTypes: true });
// await Promise.allSettled(files.map(async (file) => {
//     const parts = [
//         file.isDirectory() ? 'D' : 'F',
//         file.name
//     ];
//     if (!file.isDirectory()) {
//         const { size } = await stat(file.name);
//         parts.push(`${size / 1000}ko`)
//     };
//     console.log(parts.join(' - '));
// }));
// console.timeEnd('test');




// const file = await open('demo.txt', 'a');
// file.write('hello');
// file.close();

// await writeFile('demo.txt', 'bonjour les gens', {encoding: 'utf8', flag: 'a'});
// const info = await stat('demo.txt');
// console.log(info);

// const content = await Promise.all([
//     readFile('demo.txt', {encoding: 'utf8'}),
//     readFile('app.js', {encoding: 'utf8'})
// ]);

// console.log(content);

