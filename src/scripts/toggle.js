const toggle = () => {
  const allCross = document.querySelectorAll(".tab img");
  console.log(allCross);

  allCross.forEach((element) => {
    element.addEventListener("click", function () {
      const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
      const currentChoice = this.parentNode.parentNode.childNodes[3];

      //console.log(this.src);
      if (this.src.includes("plus")) {
        this.src = "./style/img/minus.png";
        gsap.to(currentChoice, {
          duration: 0.2,
          height: height + 40,
          opacity: 1,
          padding: "20px 35px",
        });
      } else if (this.src.includes("minus")) {
        this.src = "./style/img/plus.png";
        gsap.to(currentChoice, {
          duration: 0.2,
          height: 0,
          opacity: 0,
          padding: "15px 35px",
        });
      }
    });
  });
};

export default toggle;
