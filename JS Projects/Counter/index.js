function decrement() {
    let value = document.getElementById("value");
    let count = parseInt(value.innerHTML);
    count--;
    value.innerHTML = count;
}

function increment() {
    let value = document.getElementById("value");
    let count = parseInt(value.textContent);
    count += 1;
    value.textContent = count;
}


let minus = document.getElementById("minus");
minus.addEventListener('click', () => {
    let value = document.getElementById("value");
    let count = parseInt(value.innerHTML);
    count--;
    value.innerHTML = count;
});

let plus = document.getElementById("plus");
plus.addEventListener('click', () => {
    let value = document.getElementById("value");
    let count = parseInt(value.innerHTML);
    count++;
    value.innerHTML = count;
});