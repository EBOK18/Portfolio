$(document).ready(function() {
  let str_text1 = "Hi! I am Kobe Tuazon!";
  let i_index = 0;

  function typeText() {
    if(i_index < str_text1.length) {
      $(".greet1").append(str_text1.charAt(i_index));
      i_index++;
      setTimeout(typeText, 150);
    }
  }

  typeText();
});