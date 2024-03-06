while (true) {
  let motamashe1 = prompt(
    "შემოიყვანე ერთ-ერთი მნიშვნელობა (მაკრატელი  ჭა  ქაღალდი) "
  );
  let motamashe2 = prompt(
    "შემოიყვანე ერთ-ერთი მნიშვნელობა  (მაკრატელი  ჭა  ქაღალდი)"
  );
  if (
    (motamashe1 === "მაკრატელი" && motamashe2 === "ქაღალდი") ||
    (motamashe1 === "ქაღალდი" && motamashe2 === "მაკრატელი")
  ) {
    alert("მოიგო მაკრატელმა");
  } else if (
    (motamashe1 === "ქაღალდი" && motamashe2 === "ჭა") ||
    (motamashe1 === "ჭა" && motamashe2 === "ქაღალდი")
  ) {
    alert("მოიგო ქაღალდმა");
  } else if (
    (motamashe1 === "ჭა" && motamashe2 === "მაკრატელი") ||
    (motamashe1 === "მაკრატელი" && motamashe2 === "ჭა")
  ) {
    alert("მოიგო ჭამ");
  } else if (
    (motamashe1 === "ქაღალდი" && motamashe2 === "ქაღალდი") ||
    (motamashe1 === "ჭა" && motamashe2 === "ჭა") ||
    (motamashe1 === "მაკრატელი" && motamashe2 === "მაკრატელი")
  ) {
    alert("ფრე");
  } else if (
    !(
      (motamashe1 && motamashe2 === "მაკრატელი") ||
      (motamashe1 && motamashe2 === "ჭა") ||
      (motamashe1 && motamashe2 === "ქაღალდმა")
    )
  ) {
    console.log(
      alert("შეიყვანეთ მარტო ეს მოქმედებები(მაკრატელი  ჭა  ქაღალდი)")
    );
  }
}
