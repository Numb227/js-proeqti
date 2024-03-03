const i = Number(prompt("შეიყვანეთ რიცხვი"));
const o = prompt("შეიყვანე ოპერატორი");
const a = Number(prompt("შეიყვანეთ რიცხვი"));
let r = 0;
switch (o) {
  case "+":
    r = i + a;
    console.log(`${i} ${o} ${a} = ${r}`);
    break;
  case "-":
    r = i - a;
    console.log(`${i} ${o} ${a} = ${r}`);
    break;
  case "*":
    r = i * a;
    console.log(`${i} ${o} ${a} = ${r}`);
    break;
  case "/":
    if (a === 0) {
      console.log("გაყოფა ვერ მოხერხდეა");
    } else {
      r = i / a;
      console.log(`${i} ${o} ${a} = ${r}`);
      break;
    }
  case "%":
    r = (i * a) / 100;
    console.log(`${i} ${o} ${a} = ${r}`);
    break;
  case "**":
    r = i ** a;
    console.log(`${i} ${o} ${a} = ${r}`);
    break;
  default:
    console.log("შეცდომა");
}
