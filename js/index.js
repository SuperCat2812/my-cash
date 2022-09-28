let n1 = document.getElementById("n1");
let p = document.getElementById("p");
let b = document.getElementById("b");
b.onclick = function () {
  let premia = 0.15;
  let premiap = +n1.value * premia;
  let nalog = 0.1;
  let nalogp = (+n1.value + premiap) * nalog;
  let balans = (+n1.value + premiap) - nalogp;
  let shop = 190;
  let ost = balans - shop;
  let prochend = ost / 2;


  p.textContent = "Остаток денег у пользователя" + prochend;
}

let v = 6;
for (let i = 0; i <= v; i++) {
  let ter = [];
  for (let g = 0; g <= i; g++) {
    ter.push("#");

  }
  let n = ter.join("")
  console.log(n);
}