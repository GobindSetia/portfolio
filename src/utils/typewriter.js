var i = 0;
var txt = 'Gobind Setia Full Stack Web Developer';
console.log(txt);
export function typeWriter() {
  if (i < 13) {
    document.getElementById("myName").innerHTML += txt[i];
    i++;   
  }
  if (i >= 13 && i<txt.length) {
    document.getElementById("designation").innerHTML += txt[i];
    i++;   
  }
}
