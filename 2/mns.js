const compi = ["1=ქაღალდი", "2=ქვა", "3=მაკრატელი"];
while (true) {
  let motamashe = prompt("აირჩიე აქედან (მაკრატელი ქვა ქაღალდი)");
  let plery = Math.floor(Math.random(compi) * 3) + 1;
  if (
    (motamashe === "მაკრატელი" && plery === 1) ||
    (motamashe === "ქაღალდი" && plery === 2) ||
    (motamashe === "ქვა" && plery === 3)
  ) {
    alert("თქვენ მოიგეთ");
  } else if (
    (motamashe === "მაკრატელი" && plery === 2) ||
    (motamashe === "ქაღალდი" && plery === 3) ||
    (motamashe === "ქვა" && plery === 1)
  ) {
    alert("თქვენ წაგეთ");
  } else if (
    (motamashe === "მაკრატელი" && plery === 3) ||
    (motamashe === "ქაღალდი" && plery === 1) ||
    (motamashe === "ქვა" && plery === 2)
  ) {
    alert("ფრე");
  } else if (
    !(
      motamashe === "მაკრატელი" ||
      motamashe === "ქაღალდი" ||
      motamashe === "ქვა"
    )
  ) {
    alert("შეიყვანეთ მარტო ეს  მოქმედებები(მაკრატელი ქვა ქაღალდი )");
  }
  if (confirm("გავაგრძელოთ თამაში?")) {
    break;
  }
}
