const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const n = input.value;
    let res = "";
    let space = "";
    let sharp = "";
    for (let i = 0; i < n; i++) {
        space = Array(n - i - 1)
            .fill(" &nbsp")
            .join("");
        sharp = Array(i + 1)
            .fill("#")
            .join("");
        res += space + sharp + "<br>";
    }
    let answer = document.querySelector(".answer");
    answer.innerHTML = res;
});
