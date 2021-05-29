import {readFileSync} from 'fs';
import { ImageColor, ImageModel } from './Image';

let imagedecoder = require("image-decode")

/**
 * Image Reader Class. Allow to read image and get the data
 */
export class ImageReader{
    

    /**
     * Read an Image
     * @param path Image File Path or Buffer with the image data
     * @returns ImageModel Object
     */
    public static read(path:String|ArrayBuffer):ImageModel {
        let buffer = path;
        if(buffer instanceof String || typeof buffer==='string'){
            buffer= readFileSync(path.toString());
        }
        let {data, width, height}= imagedecoder(buffer);

       let image = new ImageModel(width,height, this.getPalette(data),data);
       
        return image
    }

    /**
     * Get the current Image Palette. Select all the disticnt colors of an image
     * @param imageBuffer Image Buffer with the data
     * @returns Array of ImageColor
     */
   private static getPalette(imageBuffer:any):Array<ImageColor>{
       let colors = new Array<ImageColor>();
       for (let index = 0; index < imageBuffer.length; index+=4) {
           let color = new ImageColor(imageBuffer[index],imageBuffer[index+1],imageBuffer[index+2], imageBuffer[index+3]);
           const colorcheck =colors.filter(c => color.equals(c))
           if(colorcheck && colorcheck.length===0){
               colors.push(color);
           }
       }
       return colors;
   }
}