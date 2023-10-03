let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");

// smallimg[0].onclick = () => {
//   MainImg.src = smallimg[0].src;
// };
// for (let i = 0; i < smallimg.length; i++) {
//   smallimg[i].onclick = function () {
//     MainImg.src = this.src; // "this" refers to the current element in the loop
//   };

if (MainImg && smallimg.length > 0) {
  for (let i = 0; i < smallimg.length; i++) {
    // Check if the current smallimg element has a src property before setting onclick
    if (smallimg[i].src) {
      smallimg[i].onclick = function () {
        MainImg.src = this.src;
      };
    } else {
      console.error("smallimg[" + i + "] does not have a src property.");
    }
  }
} else {
  console.error("MainImg or smallimg elements not found.");
}

// smallimg[1].onclick = () => {
//   MainImg.src = smallimg[1].src;
// };
// smallimg[2].onclick = () => {
//   MainImg.src = smallimg[2].src;
// };
// smallimg[3].onclick = () => {
//   MainImg.src = smallimg[3].src;
// };
