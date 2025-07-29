let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let reset = document.querySelectorAll(".reset")

let count = 1;



function filldata(event) {
  let win = "";
  console.log(count) 
  if (count <= 9) {
    if (count % 2 != 0) {
      event.target.innerHTML = "X"
      event.target.style.color="red"
      
      event.target.style.pointerEvents="none";
      
    } else {
      event.target.innerHTML = "O";
      event.target.style.color="blue"
      event.target.style.pointerEvents="none";


    }
    count++;
    // console.log(event.target.innerText);
    win = event.target.innerText ;


    if (checkwin(event)) {
      // console.log(event)
      setTimeout(() => {
        console.log(win);
        alert("winner "+win);
        count=0;
        resetdata();


      })

    }
  } else {
    alert("game over!");
    resetdata();

  }

}


let arr = "";
console.log(reset)
function resetdata() {
  for (i = 0; i <= 8; i++) {
    reset[i].innerHTML = "";
    reset[i].style.pointerEvents="auto"
    
    // console.log(arr);
  }
}
function Ddata(div) {
  return document.getElementsByClassName(reset).innerHTML;
}

function checkwin(event) {
  if (checkcondition(one, two, three) || checkcondition(one, five, nine) || checkcondition(one, four, seven) || checkcondition(three, five, seven) || checkcondition(four, five, six) || checkcondition(three, six, nine) || checkcondition(seven, eight, nine) || checkcondition(two, five, eight)) {
    // console.log(event)
    return true;
  }
}


function checkcondition(one, two, three) {
  if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && one.innerHTML == two.innerHTML && two.innerHTML == three.innerHTML) {
    return true;
  }
}