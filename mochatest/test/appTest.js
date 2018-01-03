const assert = require('chai').assert;
const expect = require('chai').expect;
var should = require('chai').should();
const app = require('../app');


const sayHelloResult = app.sayHello();

describe('App', function(){
  describe('sayHello function',function(){
    it('sayHello should equal hello',function(){
      assert.equal(app.sayHello(), 'hello');
    })
    it('sayHello function should return a string',function(){
      assert.typeOf(sayHelloResult, 'string')
    })
    it('sayHello function should return a string',function(){
      expect(sayHelloResult).to.be.a('string');
    })
    it('sayHello function should return a string',function(){
      sayHelloResult.should.be.a('string');
    })
    it('sayHello function should equal hello',function(){
      sayHelloResult.should.equal('hello');
    })
    it('sayHello function should NOT equal Hello',function(){
      sayHelloResult.should.not.equal('Hello');
    })
  })
})


// const assert = require('chai').assert;
// //const sayHello = require('../app').sayHello;
// //const addNumbers = require('../app').addNumbers;
// const app = require('../app');

// // Results
// sayHelloResult = app.sayHello();
// addNumbersResult = app.addNumbers(5,5);

// describe('App', function(){
//   describe('sayHello()', function(){
//     it('sayHello should return hello', function(){
//       //let result = app.sayHello();
//       assert.equal(sayHelloResult, 'hello');
//     });

//     it('sayHello should return type string', function(){
//       //let result = app.sayHello();
//       assert.typeOf(sayHelloResult, 'string');
//     });
//   });

//   describe('addNumbers()', function(){
//     it('addNumbers should be above 5', function(){
//       //let result = app.addNumbers(5,5);
//       assert.isAbove(addNumbersResult, 5);
//     });

//     it('addNumbers should return type number', function(){
//       //let result = app.addNumbers(5,5);
//       assert.typeOf(addNumbersResult, 'number');
//     });
//   });
// });
