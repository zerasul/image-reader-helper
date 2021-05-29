import * as path from 'path';
import * as fs from 'fs';
import {ImageReader} from '../Reader'


let assert = require("assert")
describe('Image Read', function () {

    it('should read png Image from path', function () {
       let model =ImageReader.read(path.join(__dirname,'test1.png'));
       assert.equal(320,model.width);
       assert.equal(16,model.palette.length);
    });
    it('should read png image from Buffer', function(){
        let buffer = fs.readFileSync(path.join(__dirname,'test1.png'));
        let model = ImageReader.read(buffer);
        assert.equal(320, model.width);
        assert.equal(16, model.palette.length);
    });
    it('should read bmp image from path', function(){
        let model = ImageReader.read(path.join(__dirname,'VARA.bmp'));
        assert.equal(320, model.width);
        assert.equal(3,model.palette.length);
    });
    it('should read bmp image from buffer', function(){
        let buffer = fs.readFileSync(path.join(__dirname,'VARA.bmp'));
        let model = ImageReader.read(buffer);
        assert.equal(320, model.width);
        assert.equal(3, model.palette.length);
    });
    it('should read JPG image from Path', function(){
        let model = ImageReader.read(path.join(__dirname,'merge.jpg'));
        this.timeout(4000);
        assert.equal(945, model.width);
        assert.equal(3871, model.palette.length);
    });
    it('should read JPG image from Path', function(){
        let model = ImageReader.read(fs.readFileSync(path.join(__dirname,'merge.jpg')));
        this.timeout(4000);
        assert.equal(945, model.width);
        assert.equal(3871, model.palette.length);
    });
});