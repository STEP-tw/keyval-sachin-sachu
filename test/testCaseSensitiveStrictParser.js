const src=function(filePath){return "../src/"+filePath};

const assert=require('chai').assert;
const Parsed=require(src('parsed.js'));
const StrictParser=require(src('index.js')).StrictParser;

describe("strict parser that is case insensitive",function(){
  it("should parse when specified keys are in lower case and actual is not",function(){
    let kvParser=new StrictParser(["Name"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NAME"]="jayanth";
    let parsed=kvParser.parse("NAME=jayanth");
    console.log(parsed);
    console.log(expected);
    assert.deepEqual(parsed,expected);
  });
});

describe("strict parser that is case insensitive",function(){
  it("should parse when specified keys are in lower case and actual is not",function(){
    let kvParser=new StrictParser(["Name","Age"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NAME"]="jayanth";
    expected["AGE"]='38';
    let parsed=kvParser.parse("NAME=jayanth AGE=38");
    console.log(parsed);
    console.log(expected);
    assert.deepEqual(Object.entries(parsed),Object.entries(expected));
  });
});

describe.skip("strict parser that is case sensitive",function(){
  it("should throw error when specified keys are in lower case and actual is not",function(){
    let kvParser=new StrictParser(["name"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("NAME=jayanth");
    })
  });
});
