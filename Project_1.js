let btn = document.querySelector("button");
let li = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
btn.addEventListener("click", function () {
    let len = document.querySelector("#len");
    let input = document.getElementById("input").value;
    len.textContent = input.length;
    let upc = document.querySelector("#upp")
    upc.textContent = input.toUpperCase()

    let lc = document.querySelector("#low")
    lc.textContent = input.toLowerCase()
    let mc = document.querySelector("#midchar");

    // check even or odd length
    if (input.length % 2 === 0) {
        // even → 2 middle characters
        let b1 = input.length / 2 - 1;
        let b2 = input.length / 2;
        mc.textContent = input[b1] + input[b2];
    } else {
        // odd → 1 middle character
        let one = Math.floor(input.length / 2);
        mc.textContent = input[one];
    }
    let vowelCount = 0
    let consoCount = 0
    let vCount = document.querySelector("#vc");
    let cCount = document.querySelector("#cc")
    for (let i = 0; i < input.length; i++) {
        if (li.includes(input[i]))
            vowelCount++;
        else
            consoCount++;
    }
    vCount.textContent = vowelCount;
    cCount.textContent = consoCount;

    let words = 1
    let wordC = document.querySelector("#totw")
    for (let i = 0; i < input.length; i++) {
        if (input[i] == " ")
            words++
    }
    wordC.textContent = words;

    let store = document.querySelector("#ccase");
    let wordStore = input.trim().split(" ");
    let element = wordStore[0].toLowerCase();

     for (let i = 1; i < wordStore.length; i++) {
        element += wordStore[i].charAt(0).toUpperCase() + wordStore[i].slice(1).toLowerCase();
    }
    store.textContent = element;
  })