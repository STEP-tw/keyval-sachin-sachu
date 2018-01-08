const Parser=require("./keyValueParser.js");
const strictParseInfoCreator=require("./parseInfoCreator.js").strict;

var StrictParser=function(listOfKeys, caseSensitiveStatus=true) {
  Parser.call(this);
  let sanitisedListOfKeys=listOfKeys||[];
  if(!caseSensitiveStatus) this.setToCaseSensitive();
  this.parseInfoCreator=strictParseInfoCreator(sanitisedListOfKeys,caseSensitiveStatus);
}

StrictParser.prototype=Object.create(Parser.prototype);

module.exports=StrictParser;
