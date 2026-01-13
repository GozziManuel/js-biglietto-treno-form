const formVerifyer = document.getElementById("verifyer");
const kmCounter = document.getElementById("km-counter");
const kmVisible = document.getElementById("km-price");
const announcer = document.getElementById("announcer");
const ageFinder = document.getElementById("age-finder");
console.log(formVerifyer);
formVerifyer.addEventListener("submit", function (e) {
  e.preventDefault();
  let userKm = kmCounter.value;
  let kmPrice = userKm * 0.21;
  console.log(kmPrice);
  if (ageFinder.value === "over-65") {
    kmPrice = kmPrice - (kmPrice * 40) / 100;
    let kmPriceDecimal = kmPrice.toFixed(2);
    kmVisible.innerText = kmPriceDecimal;
  } else if (ageFinder.value === "underage") {
    kmPrice = kmPrice - (kmPrice * 20) / 100;
    let kmPriceDecimal = kmPrice.toFixed(2);
    kmVisible.innerText = kmPriceDecimal;
  } else {
    announcer.innerText = "Il prezzo è ";
    kmVisible.innerText = kmPrice;
  }
});
