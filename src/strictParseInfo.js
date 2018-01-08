const Parsed=require("./parsed.js");
const ParseInfo=require("./parseInfo.js");
const InvalidKeyError=require("./errors/invalidKeyError.js");

const contains=function(list,key) {
  return list.find(function(validKey){
    return key==validKey;
  });
}

const isKeySame=function(key1, key2){
  return key1.toLowerCase() == key2.toLowerCase();
}

const isAnyKeySame=function(list,key) {
  return list.some((validKey)=>{isKeySame(validKey,key)})
};

var StrictParseInfo=function(initialParsingFunction,validKeys,caseSensitivity=true) {
  ParseInfo.call(this,initialParsingFunction);
  this.validKeys=validKeys;
  this.caseSensitivity=caseSensitivity;
}

StrictParseInfo.prototype=Object.create(ParseInfo.prototype);

StrictParseInfo.prototype.pushKeyValuePair=function() {
  if(this.validKeys.some((validKey)=>{
    if(this.currentKey.toLowerCase()==validKey.toLowerCase()){
      this.validKeys[this.validKeys.indexOf(validKey)]=this.currentKey;
    }
  }));

  if(!contains(this.validKeys,this.currentKey))
  throw new InvalidKeyError("invalid key",this.currentKey,this.currentPos);
  this.parsedKeys[this.currentKey]=this.currentValue;
  this.resetKeysAndValues();
}

module.exports=StrictParseInfo;
