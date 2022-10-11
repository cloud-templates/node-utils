import fs from 'fs';
import path from 'path';

export function writeFile(
  filename: string,
  content: string | Uint8Array
): void {
  const dir = path.dirname(filename)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  fs.writeFileSync(filename, content)
}
