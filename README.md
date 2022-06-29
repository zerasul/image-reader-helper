# Image Read Helper


[![Test](https://github.com/zerasul/image-reader-helper/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/zerasul/image-reader-helper/actions/workflows/main.yml) [![npm](https://img.shields.io/npm/v/@zerasul/image-read-helper?color=green)](https://www.npmjs.com/package/@zerasul/image-read-helper) ![npm](https://img.shields.io/npm/dt/@zerasul/image-read-helper?style=flat)

This library allows you to get some information about images; reading and getting information like width, height and the palette colour.

## Instalation

To install this library, use ```npm install```.

```bash
npm install image-reader-helper
```

This library is created with TypeScript and compiled for ES6. Here is an example of use:

You can read a file using his path.

```typescript
import {ImageReader,ImageModel} from 'image-reader-helper';

let model:ImageModel=ImageReader.read('path to your file'); 
```

Or using a Buffer:

```typescript
let buffer = fs.readFileSync('path to your file');

let model:ImageModel=ImageReader.read(buffer);
```

The ImageModel class have this Properties:

* ```width```: Image Width in pixels.
* ```height```: Image Height in pixels.
* ```plaette```: Array of ImageColor with all the disctint colours of the image.(Palette Color).
* ```data```: Array with all the pixels of the image. each pixel is 4 bytes in the array ```[r,g,b,a,r,g,b,a...]```.


The Image Color class have this properties:

* ```r```: Red value (0-255).
* ```g```: Green value (0-255).
* ```b```: Blue value (0-255).
* ```a```: Alpha value (0-255).
