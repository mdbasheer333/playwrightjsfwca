import fs from 'fs';
import path from 'path';

export default async function createJsonObjectFromFolder(folderPath) {
    const jsonObject = {};

    // Read all files in the folder
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const fullPath = path.join(folderPath, file);

        // Check if the file is a JSON file
        if (path.extname(file) === '.json') {
            const fileNameWithoutExt = path.basename(file, '.json');

            // Read and parse the JSON file
            const fileData = fs.readFileSync(fullPath, 'utf-8');
            jsonObject[fileNameWithoutExt] = JSON.parse(fileData);
        }
    }

    return jsonObject;
}
