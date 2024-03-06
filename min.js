const mnisvneloba1 = Number(prompt("შეიყვანეთ რიცხვი"));
const operatori = prompt("შეიყვანე ოპერატორი");
const mnisvneloba2 = Number(prompt("შეიყვანეთ რიცხვი"));
let jami = 0;
switch (operatori) {
  case "+":
    jami = mnisvneloba1 + mnisvneloba2;
    console.log(
      alert(`${mnisvneloba1} ${operatori} ${mnisvneloba2} = ${jami}`)
    );
    break;
  case "-":
    jami = mnisvneloba1 - mnisvneloba2;
    console.log(
      alert(`${mnisvneloba1} ${operatori} ${mnisvneloba2} = ${jami}`)
    );
    break;
  case "*":
    jami = mnisvneloba1 * mnisvneloba2;
    console.log(
      alert(`${mnisvneloba1} ${operatori} ${mnisvneloba2} = ${jami}`)
    );
    break;
  case "/":
    if (mnisvneloba2 === 0) {
      console.log("გაყოფა ვერ მოხერხდეა");
    } else {
      jami = mnisvneloba1 / mnisvneloba2;
      console.log(
        alert(`${mnisvneloba1} ${operatori} ${mnisvneloba2} = ${jami}`)
      );
      break;
    }
  case "%":
    jami = (mnisvneloba1 * mnisvneloba2) / 100;
    console.log(
      alert(`${mnisvneloba1} ${operatori} ${mnisvneloba2} = ${jami}`)
    );
    break;
  case "**":
    jami = mnisvneloba1 ** mnisvneloba2;
    console.log(alert`${mnisvneloba1} ${operatori} ${mnisvneloba2} = ${jami}`);
    break;
  default:
    console.log(alert("შეცდომა"));
}
