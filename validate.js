const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const button = document.querySelector(".form-button");
const notify = document.querySelector(".notify");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(typeof input.value);
  function notifyUser(text) {
    return (notify.textContent = text);
  }
  try {
    if (!input.value) {
      throw new Error(notifyUser("Поле должно быть заполнено"));
    }
    if (isNaN(input.value)) {
      throw new Error(notifyUser("Введенное значение не является числом"));
    }
    if (input.value < 5) {
      throw new Error(notifyUser("Введенное значение должно быть не меньше 5"));
    }
    if (input.value > 10) {
      throw new Error(
        notifyUser("Введенное значение должно быть не больше 10")
      );
    }
    notify.className = "sucess";
    notifyUser("sucess");
  } catch (error) {
    console.log(error);
    notify.className = "notify error";
  }
  input.value = "";
});
