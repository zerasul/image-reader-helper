
/**
 * Image Model 
 */
export class ImageModel{

    /**
     * Image Model Constructor
     * @param width Image width
     * @param hegiht Image height
     * @param palette Image Palette
     * @param data  Image Buffer data
     */
    public constructor(public width:number,public hegiht:number,public palette?: Array<ImageColor>, public data?:ArrayBuffer){

    }
}

/**
 * Image Color Model
 */
export class ImageColor{

    /**
     * 
     * @param r red value (0-255)
     * @param g green value (0-255)
     * @param b blue value (0-255)
     * @param a alpha value (0-255)
     */
    public constructor(public r:number, private g:number, private b:number, private a:number){

    }

    public equals(another:ImageColor):boolean{
        return this.r===another.r && this.g===another.g && this.b===another.b && this.a===another.a;
    }
}