let uzb = document.querySelector(".uzb"),
    rus = document.querySelector(".rus"),
    eng = document.querySelector(".eng"),
    kor = document.querySelector(".kor")


let country = prompt("Davlatni tanlang", "")

if (country == "Uzbekistan"  || country == "uzbekistan") {
    uzb.style.display = "block"
} else if (country == "Rossiya" || country == "rossiya") {
    rus.style.display = "block"
} else if(country == "Amerika" || country == "amerika") {
    eng.style.display = "block"
} else if(country == "Koreya" || country == "koreya") {
    kor.style.display = "block"
} else {
    alert("Iltimos davlatni to'g'ri kiriting !!!")
}
