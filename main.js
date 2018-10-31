
//Here i have function that prints how many crows left on the wall

var message =  "1 fell down and became a wight.";
//when one crow left on the wall
var zero = "1 crow on the wall. 1 single crow.<br>It fell down and became a wight.<br>There's no one left to defend Westeros now.";
//when no crow is left on the wall

for(var i = 3; i>0; i--){
let word = i + " crows on the wall. "+ i +" crows."; //99 crows on the wall. 99 crows.

  if(i==1){
      printMessage(zero);     //print value in var zero
  }else{
      printMessage(word);     //print value in var word
      printMessage(message); //print value in var message
    if((i-1)==1){
      printMessage((i-1) +" crow on the wall");
    }else{
      printMessage((i-1) +" crows on the wall");
    }
  }
  printMessage("<br>");
}

function printMessage(printThis){
  document.open();
  document.write("<div class=\"main_div\"><div class=\"printcrow\">"+printThis+"</div></div>");
}
// Do not change or reassign these variables.
const sentence = "I am going to get better at coding with practice.";

const paragraph = "A good mentor of mine told me if you want to create a flying car, then start with making some wheels into a skateboard, enjoy the skateboard and turn that into a bike and so on.";

// Your code under here.

// #1 - console.log the sentence in reverse using a loop. (Do not use String.reverse)

printMessage2("1.Reverse");
var size = sentence.length;
var name = [];
name.length = size;
var ecnetnes = "";

for(var i=0; i<size; i++){
  let end = size;
   ecnetnes += sentence[end-(i+1)];//end-(3-1)
}

printMessage2(ecnetnes);


// #2 console.log how many letter Es are in the paragraph using a loop.
printMessage2("2.Counting all the \'E\'");

var sizeE = paragraph.length;
var countE = 0;
for(j =0; j<sizeE; j++){
  if(paragraph[j]==="e"||paragraph[j]==="E"){
  countE++;
  }
}
printMessage2("  There are "+ countE + " E's." );



// #3 console.log how many words are in the paragraph using a loop. [HARD]
printMessage2("3.Counting all the word");
// You are not allowed to use the split() method.

var countspaceS = 0; // counting space in sentence
for(var k=0; k<sizeE; k++){
  if(sentence[k]==" "){
    countspaceS++;
  }
}
printMessage2("  There are "+(countspaceS+1)+" words in the sentence.");

var countspaceP = 0; // counting space in paragraph
for(var k=0; k<sizeE; k++){
  if(paragraph[k]==" "){
    countspaceP++;
  }
}
printMessage2("  There are "+(countspaceP+1)+" words in the paragraph.\n");

function printMessage2(printThis){
  document.open();
  document.write("<div class=\"main_div\"><div class=\"jackal\">"+printThis+"</div></div>");
}
