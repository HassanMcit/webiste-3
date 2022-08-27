var allProduct = document.querySelectorAll(".col a");
var content = document.querySelector(".hidden");
var notVisible1 = document.querySelector(".cart img");
var notVisible2 = document.querySelector(".cart p");
var btn = document.querySelector(".btn-outline-dark");
var counter = document.querySelector("i span");
var total = 0,count1 = 0;

allProduct.forEach(function (item) {
    item.onclick = function () {
        count1++;
        total += parseFloat(item.getAttribute("price"));
        content.innerHTML += item.textContent + "<br>";
        if (content.innerHTML != " ")
        {
            btn.style.display = "block";
            notVisible1.style.visibility = "hidden";
            notVisible2.style.visibility = "hidden";
            counter.innerHTML = count1;
        }
    }
})

btn.onclick = function () {
    content.innerHTML += "<br> <h2>Total Price</h2>" + total.toFixed(2)+" L.E";
    console.log(this.getAttribute("count"));
}