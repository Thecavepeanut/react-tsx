var fs = require("fs");

const ofHTML = "output/react-tsx-html-attrs.txt";
const ofSVG = "output/react-tsx-svg-attrs.txt";

function printEl(el) {
  return `
  export var ${el}: El = (props, ...children) => {
    return expand("${el}", props, children);
  };
  `
}
//TODO make it so we can actually do new line and not a single line csv
function readAttrCsv(path, outfile){
  fs.readFile(path, function(err, data) {
    if (!err) {
      var dataStr = data.toString();
      var attrs = data.toString().split(","),
      attrBuffer = "";
      attrs[attrs.length - 1] = attrs[attrs.length - 1].replace("\n", "");
      attrs.forEach(function(el) {
        attrBuffer += printEl(el)
      })
      fs.writeFile(outfile, attrBuffer, function(err){
        if(err){
          console.log(err);
        }else {
          console.log(`${outfile} is done!`);
        }
      })
    }
  });
}
// DROP THE NUKE!!! who cares if it fails or not, as long as the file is gone!
fs.unlink(ofHTML, function(err) {
  readAttrCsv("csvs/html-attrs.csv", ofHTML);
});
fs.unlink(ofSVG, function(err){
  readAttrCsv("csvs/svg-attrs.csv", ofSVG);
});
