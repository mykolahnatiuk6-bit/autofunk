document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    if (!button) {
        console.log("Кнопка не найдена в HTML");
        return;
    }

    button.addEventListener("click", function () {

        const enterEvent = new KeyboardEvent("keydown", {
            key: "Enter",
            code: "Enter",
            bubbles: true
        });

        document.dispatchEvent(enterEvent);

        alert("Симуляция Enter выполнена");
    });

}