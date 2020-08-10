console.log('working');


let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    const a = document.getElementById("amount").value;
    const b = document.getElementById("tipPercent").value;
    const c = document.getElementById("numPeople").value;
    const d = document.getElementById("tipAmount");

    let e = (a * b) / (100 * c);
    d.innerHTML = `<p>Tip Amount</p><p>${e}</p><p>Each</p>` ;
    console.log(e);
    
})