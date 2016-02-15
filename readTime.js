function timeToRead() {
  var words = document.getElementsByTagName('p');
  // var pTags = Array.prototype.slice.call(words);
  var wordSum = 0;
  for (var i = 0; i < words.length; i++) {
      wordSum += words[i].textContent;
  }
  var total = wordSum.split(" ");
  var totalReadTime = Math.round(total.length/230); //total words / 230 words per minute ==> 5.7 minutes
  return totalReadTime + " min read";
  // console.log(totalReadTime);
}
//
var time = timeToRead();

var bodyTime = document.getElementsByTagName('body')[0];
var myFirstP = document.createElement('p');
myFirstP.textContent = time;
myFirstP.className = "timeCounter";
bodyTime.appendChild(myFirstP);
