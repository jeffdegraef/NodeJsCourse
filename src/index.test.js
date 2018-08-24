import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', function () {
    it('should pass', function () {
        expect(true).to.equal(true);
    });
});

describe('index.html', function () {
    it('should h1 that says users', function (done) {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        //create a virtual DOM and pull you index.html into it, now via object window you have access as if you are in browser
        jsdom.env(index,function (err,window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();

        })
    });
});

//expect(h1.innerHTML).to.equal("Users");