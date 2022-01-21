window.onload = function () {
  let name = ["Mona Liza", "Girl with a Pearl Earring"];
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
    // alert(name[i]);
    function question() {
      let q = prompt("input name of painting");
      if (q == name[i]) {
        alert("Right!");
        if (i == 0) {
          return showAnswer1(one);
        } else if (i == 1) {
          return showAnswer1(two);
        }
      } else {
        alert("Try again!");
      }
    }
    function showAnswer(event) {
      let image = event.target;
      let name = image.id;
      name = name + ".jpg";
      image.src = "img/" + name;
      setTimeout(blurAnswer, 2000, image);
      setTimeout(question, 2100, image);
    }
    function blurAnswer(image) {
      let name = image.id;
      name = name + "blur" + ".jpg";
      image.src = "img/" + name;
    }
    function showAnswer1(image) {
      let name = image.id;
      name = name + ".jpg";
      image.src = "img/" + name;
    }
  }
};
// function question() {
//   let q = prompt("input name of painting");
//   let name = ["Mona Liza", "Girl with a Pearl Earring"];
//   for (let j = 0; j < name.length; j++) {
//     if (q == name[j]) {
//       alert("Right!");
//       return showAnswer();
//     } else {
//       // alert("Try again!");
//       return blurAnswer();
//     }
//   }
// }
