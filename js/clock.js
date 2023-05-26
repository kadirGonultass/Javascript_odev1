let inputName = prompt("Lutfen adinizi giriniz:");

let info = document.querySelector("#myName");
info.innerHTML = `${inputName}`;

function guncelTarih() {
  let tarih = new Date().toLocaleString("tr-TR");
  document.querySelector("#myClock").innerHTML = tarih;
}

setInterval(guncelTarih, 1000);
