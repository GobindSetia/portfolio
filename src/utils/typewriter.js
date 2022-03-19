var i = 0;
var txt = 'Gobind Setia Full Stack Web Developer';
export function typeWriter() {
  if (i < 13) {
    document.getElementById("myName").innerHTML += txt[i];
    i++;   
  }
  if (i >= 13 && i<txt.length) {
    document.getElementById("designation").innerHTML += txt[i];
    i++;   
  }
  if(i>=txt.length && i<=txt.length+20){
    i++;
  }
  if(i==txt.length+20){
    i=0;
    document.getElementById("myName").innerHTML = "";
    document.getElementById("designation").innerHTML = "";
  }
}
