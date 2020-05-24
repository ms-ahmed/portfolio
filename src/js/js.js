//Store in varibles the dom elements
const cursor = document.querySelector(".cursor");
const nav = document.querySelector("nav");
const allLi = document.querySelectorAll(".li");
const rotateDiv = document.querySelector(".rotate-div");
const logo = document.querySelector(".logo");
const leftFixedDiv = document.querySelector(".left-fixed-div");
const textLeftDiv = document.querySelector(".text-left-div");
const itemDiv = document.querySelector(".item-div");
const roundText = document.querySelector(".round-text");
const welcomeText = document.querySelector("#welcome-text");
const beforeElement = document.createElement("div");
const afterElement = document.createElement("div");
const blackDiv = document.querySelector(".black-div");
const imageRightFix = document.querySelector(".image-right-fix");
const slideOrangeDiv = document.querySelector(".slide-orange-div");
/* const allSpan = document.querySelectorAll(".span"); */
const allSpan = [...document.querySelectorAll("span")];
////Dom manipulation
//Make letters move on mousemove in textLeftDiv

/*leftFixedDiv.addEventListener("mousemove", (e) => {
   let cursorX = e.pageX;
  let cursorY = e.pageY;
  // cursor.setAttribute("style", `top :${cursorY}px; left:${cursorX}px`);
  var test = [...document.querySelectorAll("span")];
  test.forEach((e) => {
    let dx = `${cursorX - Math.floor(e.getBoundingClientRect().x)}px`;
    let dy = `${cursorY - Math.floor(e.getBoundingClientRect().y)}px`;
    //console.log(dx + " " + dy);
    let array = [];
    array.push(e);
    //  console.log(array);
    array.forEach((element) => {
      leftFixedDiv.addEventListener("mousemove", (event) => {
        //  element.style.cssText = `display:`;
        if (dx < "70px") {
          element.style.cssText = `display:none`;
        } else {
          //  element.style.cssText = `display:block`;
        }
      });
      element.addEventListener("mouseout", (event) => {});
    });
  }); 
});*/

allSpan.forEach((letters) => {
  letters.addEventListener("mouseover", (e) => {
    letters.animate(
      [{ transform: "scale(0.5)" }, { transform: "scale(1.5)" }],
      { duration: 1000 }
    );
  });
});

textLeftDiv.addEventListener("mouseout", (e) => {
  cursor.style.display = "none";
});
///Logo disapear
logo.addEventListener("click", dropDown, true);
var rocket = document.querySelector(".image-right-fix");
var btn = document.querySelector(".slide-orange-div");

function dropDown() {
  scaleAnimation();
  function scaleAnimation() {
    logo.style.display = "block";
    rotateDiv.style.cssText = `width:100%; height:1px; display:block`;
  }
  motionLeftDiv();
  function motionLeftDiv() {
    blackDiv.style.display = "none";
    slideOrangeDiv.style.display = "none";
    logo.style.display = "none";
    nav.style.display = "none";
    textLeftDiv.style.cssText = "display:none;";
    leftFixedDiv.style.cssText = "display:none";
    imageRightFix.style.display = "none";
    var pxTranslate = "50vh";
    var parentDivBefore = itemDiv.parentNode;
    var parentDivAfter = itemDiv.parentNode;
    parentDivBefore.insertBefore(beforeElement, itemDiv);
    parentDivAfter.insertBefore(afterElement, itemDiv);
    beforeElement.style.cssText =
      "height:3000px; width:100vw;bottom:200%; background-color:#f56156; position:absolute; display:block";
    rotateDiv.animate(
      [
        { transform: "translateY(0px)" },
        { transform: `translateY(${pxTranslate})` },
      ],

      {
        duration: 900,
        fill: "forwards",
      }
    );
    setTimeout(rotationAnimation, 1000);
    function rotationAnimation() {
      beforeElement.style.cssText =
        "height:300%; width:100vw;top:0%; left:100%; background-color:#f56156;";
      afterElement.style.cssText =
        "height:300%; width:100vw;  position: absolute; right: 100%;top:0%;background-color:#fff";
      rotateDiv.style.cssText = `display: block; position: absolute; top: 0px; left:50%;transform-origin: center; height:300%;bottom:25%`;
      rotateDiv.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(180deg)" }],

        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }
  }
  fadeOutEffect();
  function fadeOutEffect() {
    var fadeEffect = setInterval(function() {
      if (!beforeElement.style.opacity) {
        beforeElement.style.opacity = 1;
      }
      if (beforeElement.style.opacity > 0) {
        beforeElement.style.opacity -= 0.3;
      } else {
        clearInterval(fadeEffect);
      }
      leftFixedDiv.style.cssText = "display:block";
      setTimeout(reload, 500);
      function reload() {
        document.location.reload(true);
      }
    }, 1700);
  }
}

blackDivMoving();
function blackDivMoving() {
  Array.from(allLi).forEach((ele) => {
    // console.log(ele.classList.value);
    ele.addEventListener("mouseover", function(event) {
      blackDiv.classList.toggle("open");
      applyStyle();
      function applyStyle(classList) {
        classList = ele.classList.value;
        switch (classList) {
          case "li project":
            //  blackDiv.style.cssText = "background-color:red";
            break;
          case "li credentials":
            //   blackDiv.style.cssText = "background-color:blue";
            break;
          case "li cv":
            //    blackDiv.style.cssText = "background-color:green";
            break;
          case "li about-me":
            //   blackDiv.style.cssText = "background-color:gray";
            break;
          default:
          //  blackDiv.style.cssText = "background-color:orange";
        }
      }
      //  setTimeout()
    });

    blackDiv.addEventListener("mouseout", () => {
      blackDiv.classList.remove("open");
    });
  });
}
contentAppear();
function contentAppear() {
  Array.from(allLi).forEach((ele) => {
    ele.addEventListener("click", (event) => {
      alert("test");
    });
  });
}

draggableDiv();
function draggableDiv() {
  function getOffsetX(e) {
    textLeftDiv.style.zIndex = "2";
    allSpan.forEach((letters) => {
      letters.style.zIndex = "2";
      letters.style.color = "#f56156";
    });

    e.stopPropagation();
    if (e) {
      slideOrangeDiv.isDown = true;
      slideOrangeDiv.offset = [slideOrangeDiv.offsetLeft - e.clientX];
    }
  }
  const roundDivJs = document.createElement("div");
  function checkEvent(e) {
    roundText.appendChild(roundDivJs);
    textLeftDiv.style.zIndex = "3";
    allSpan.forEach((letters) => {
      letters.style.zIndex = "3";
      letters.style.color = "#fff";
    });
    setTimeout(showWelcome, 500);
    function showWelcome() {
      const message = "Welcome :)";
      const textWelcome = document.querySelector(".welcome-text");

      const typingPromises = (message, timeout) =>
        [...message].map(
          (ch, i) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(message.substring(0, i + 1));
              }, timeout * i);
            })
        );

      typingPromises(message, 60).forEach((promise) => {
        promise.then((portion) => {
          welcomeText.innerHTML = portion;
        });
      });

      setTimeout(showText, 1000);
      function showText() {
        textWelcome.style.display = "block";
      }
    }
    roundDivJs.setAttribute("class", "round-div-created-div-two");
    round();
    function round() {
      roundDivJs.style.display = "block";
      roundDivJs.animate(
        [{ transform: "translateX(0px)" }, { transform: "translateX(-159px)" }],
        { duration: 1000, fill: "forwards" }
      );
      setTimeout(showRoundDiv, 1000);
      function showRoundDiv() {
        let a = roundDivJs.style.display;
        if (a == "block") {
          roundDivJs.style.display = "none";
        }
      }
    }
    slideOrangeDiv.isDown = false;
    slideOrangeDiv.addEventListener("mouseout", (event) => {
      event.preventDefault();
      slideOrangeDiv.isDown = false;
      ///
    });
  }
  function moveDiv(event) {
    event.stopPropagation();
    if (slideOrangeDiv.isDown) {
      slideOrangeDiv.mousePosition = {
        x: event.clientX,
      };
      slideOrangeDiv.style.left =
        slideOrangeDiv.mousePosition.x + slideOrangeDiv.offset[0] + "px";
    }
  }

  slideOrangeDiv.addEventListener("mousedown", getOffsetX, true);
  slideOrangeDiv.addEventListener("mouseup", checkEvent, true);
  slideOrangeDiv.addEventListener("mousemove", moveDiv, true);
}

function getInitialPos(event) {
  event.stopPropagation();

  if (slideOrangeDiv.isDown) {
    slideOrangeDiv.mousePosition = {
      x: event.clientX,
    };
    slideOrangeDiv.style.left =
      slideOrangeDiv.mousePosition.x + slideOrangeDiv.offset[0] + "px";
    var initialPosition = slideOrangeDiv.style.left;
  }
}
function animateDiv(event) {
  slideOrangeDiv.style.left = "-50%";
}
slideOrangeDiv.addEventListener("mousedown", getInitialPos, true);
slideOrangeDiv.addEventListener("mouseout", animateDiv, true);
slideOrangeDiv.addEventListener("mouseup", animateDiv, true);
