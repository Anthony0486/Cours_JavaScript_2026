import {readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';


const dir = dirname(fileURLToPath(import.meta.url));
const filename = join(dir, 'demo-deep.txt');
await writeFile(filename, 'bonjour les gens', {encoding: 'utf8'});
console.log(await readFile(filename, {encoding: 'utf-8'}));
// console.log(await readFile('demo-deep.txt'));