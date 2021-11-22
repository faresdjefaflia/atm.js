let m1000 = `
  <div class="m-1000">
  <div>
    <h1>1000$</h1>
  </div>
  <div class="m-bx">
    <h1>$</h1>
    <div></div>
  </div>
  </div>
`;

let m500 = `
  <div class="m-500">
  <div>
    <h1>500$</h1>
  </div>
  <div class="m-bx">
    <h1>$</h1>
    <div></div>
  </div>
  </div>
`;

let m100 = `
  <div class="m-100">
  <div>
    <h1>100$</h1>
  </div>
  <div class="m-bx">
    <h1>$</h1>
    <div></div>
  </div>
  </div>
`;

let m10 = `
  <div class="m-10">
  <div>
    <h1>50$</h1>
  </div>
  <div class="m-bx">
    <h1>$</h1>
    <div></div>
  </div>
  </div>
`;
let m1 = `
  <div class="m-1">
  <div>
    <h1>1$</h1>
  </div>
  <div class="m-bx">
    <h1>$</h1>
    <div></div>
  </div>
  </div>
`;

let amount = document.querySelector('.amount input');
let pull = document.querySelector('.pull input');
let boxPull = document.querySelector('.box-pull');

function pullMoney(){
  //START - FOR 1000
  let q1000 = Math.trunc(amount.value / 1000);
  let rest1000 = amount.value - q1000 * 1000;
  if(rest1000 === 0){
    for(loopA = 0; loopA < q1000; loopA++){
      boxPull.innerHTML += m1000
    }
    console.log("end");
  } 
  
  else if(rest1000 > 0){
    for(loopA = 0; loopA < q1000; loopA++){
      boxPull.innerHTML += m1000
    }
    console.log(q1000);
    console.log(rest1000);
    //START - FOR 500
    let q500 = Math.trunc(rest1000 / 500);
    let rest500 = rest1000 - q500 * 50;
    console.log(q500);
    console.log(rest500);
  }
}
pull.addEventListener("click", () => {
  let amountNum = Number(amount.value)
  if(amountNum > 10000 || amountNum == 0 || isNaN(amountNum) === true){
    console.log("please 10000")
  } else if(amountNum <= 10000){
    pullMoney()
  };
});