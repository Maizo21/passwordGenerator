"use strict";

let btnPassword = document.querySelector(".passBtn");
let btnCopy = document.querySelector(".copyBtn");
let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = `!@#$%^&*()-_=+;:'",.?`;

const getPassword = () => {
  let password = "";

  Swal.fire({
    title: "Cantidad de caracteres (se recomienda 10)",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Crear",
  }).then((result) => {
    if (result.value > 0 && result.value <= 50) {
      let passLength = Number(result.value);

      for (let i = 0; i < passLength; i++) {
        let random = Math.floor(Math.random() * 3);
        if (random === 0) {
          password += letters[Math.floor(Math.random() * letters.length)];
        } else if (random === 1) {
          password += numbers[Math.floor(Math.random() * numbers.length)];
        } else {
          password += symbols[Math.floor(Math.random() * symbols.length)];
        }
      }
      let passwordEl = document.querySelector(".passContainer");
      passwordEl.textContent = password;
    } else {
      return;
    }
  });
};

btnPassword.addEventListener("click", getPassword);

btnCopy.addEventListener("click", () => {
  if (
    document.querySelector(".passContainer").textContent === "" ||
    document.querySelector(".passContainer").textContent === "-"
  ) {
    swal.fire({
      icon: "warning",
      title: "Crea una contraseña primero",
      showConfirmButton: true,
    });
  } else {
    let textarea = document.createElement("textarea");
    textarea.value = document.querySelector(".passContainer").textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    Swal.fire({
      icon: "success",
      title: "Contraseña copiada",
      showConfirmButton: true,
    });
  }
});
