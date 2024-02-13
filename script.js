let num = 0;
const slideImage = (indx) => {
  const images = document.getElementsByClassName("slide");

  if (indx == images.length) {
    indx = 0;
    num = 0;
  }
  if (indx < 0) {
    indx = images.length - 1;
    num = images.length - 1;
  }

  for (let index = 0; index < images.length; index++) {
    images[index].style.display = "none";
  }
  images[indx].style.display = "block";
  // console.log(images);
};
const controller = (val) => {
  num = num + val;
  slideImage(num);
};
slideImage(num);
