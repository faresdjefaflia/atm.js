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
  console.log('hi im fun')
}
pull.addEventListener("click", () => {
  let amountNum = Number(amount.value)
  if(amountNum > 10000 || amountNum == 0 || isNaN(amountNum) === true){
    console.log("please 10000")
  } else if(amountNum <= 10000){
    console.log("amount is good")
    pullMoney()
  };
  // var b = a2 / 500; //عدد اوراق 500
  // var b2 = a2 - Math.trunc(a) * 500; //بتقي المبلغ
});