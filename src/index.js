document.addEventListener("DOMContentLoaded", function () {
  new Menu(document.getElementById("menu"));
});
// Slider
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll(".promo__container"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const renderPages = () => {
  const activePage = document.querySelector(".slider-active-page");
  activePage.textContent = slideIndex + 1;
  const pagesNumber = document.querySelector(".slider-pages-number");
  pagesNumber.textContent = `/${slideCount}`;
};

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
  renderPages();
};

window.addEventListener("load", () => {
  slide();
});

// Drop-down menu
class Menu {
  constructor(menu) {
    this.menu = menu;
    this.closed = true;
    this.dropDown = document.querySelector(".drop-down");
    this.init();
  }

  init() {
    this.menu.addEventListener("click", () => {
      this.closed = !this.closed;
      this.toggle();
    });
    this.toggle();
  }

  toggle() {
    if (this.closed) {
      this.menu.style.backgroundImage = 'url("./img/burger.png")';
      this.dropDown.style.display = "none";
    } else {
      this.menu.style.backgroundImage = 'url("./img/cross.png")';
      this.dropDown.style.display = "block";
    }
  }
}

// Pop-up notifications
function showToast(type, message) {
  // Create toast element
  var toast = document.createElement("div");
  type === "success"
    ? toast.classList.add("toast", "toast-success")
    : toast.classList.add("toast", "toast-error");
  toast.textContent = message;

  // Add toast to the container
  var container = document.getElementById("toast");
  container.appendChild(toast);

  // Show toast
  toast.classList.add("show");

  // Remove toast after 3 seconds
  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () {
      container.removeChild(toast);
    }, 500);
  }, 3000);
}

// Pop-up form
function openForm() {
  document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.querySelector(".open-button").addEventListener("click", openForm);

//Send form
const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

const nameInput = document.querySelector("[name=name]");
const emailInput = document.querySelector("[name=email]");
const textInput = document.querySelector("[name=text]");

const submitBtn = document.getElementById("send");
const closeFormBtn = document.getElementById("closeForm");

submitBtn.addEventListener("click", () => sendEmail());

closeFormBtn.addEventListener("click", () => closeForm())

// Function to disable submit button
function disableSubmitButton() {
  submitBtn.disabled = true;
}

// Function to enable submit button
function enableSubmitButton() {
  submitBtn.disabled = false;
}

const inputs = [nameInput, emailInput, textInput];

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    submitBtn.disabled =
      !nameInput.value || !emailInput.value || !textInput.value ? true : false;
  });
});

function sendEmail() {
  disableSubmitButton();
  var formData = new FormData(document.querySelector("form"));

  fetch(("send.php"), {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        console.log(response)
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      if (data.includes("failed")) {
        console.log(data);
        throw new Error("Что-то пошло не так");
      }
      console.log(data);
      showToast("success", "Сообщение отправлено");
      inputs.forEach((input) => (input.value = ""));
      closeForm();
      console.log("Сообщение успешно отправлено");
    })
    .catch((error) => {
      showToast("error", "Сообщение не отправлено: " + error.message);
      console.error("Error:", error);
      enableSubmitButton()
    })
}
