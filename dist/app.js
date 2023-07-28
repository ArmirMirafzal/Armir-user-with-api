"use strict";
const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");
/* refresh */
formButton.addEventListener("click", (e) => {
    e.preventDefault();
    reload();
    clearBtn.classList.remove(`hidden`);
});
/* clear */
clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    user.innerHTML = ``;
    clearBtn.classList.add(`hidden`);
});
/* search */
form["form__input"].addEventListener("input", () => {
    const inputValue = form["form__input"].value;
    const name = document.querySelectorAll(".user__name");
});
/* updateUI */
function updateUI(data) {
    console.log(data);
    user.innerHTML = "";
    data.forEach((item) => {
        // console.log(item);
        const { gender, name, picture, location, dob } = item;
        user.innerHTML += `<li class="user__item">
    <button id="delete__btn" class="user__delete--btn">
      <i class="fas fa-trash"></i>
    </button>
    <img
      class="user__img"
      alt="User photo"
      src= ${picture.large}
      width="100"
      height="100"
    />
    <div class="user__name">
      <span class="material-symbols-outlined">badge</span>
      <span>- ${name.title} ${name.first} ${name.last}</span>
    </div>
    <div class="user__year">
      <span class="material-symbols-outlined">cake</span>
      <span>- ${dob.age} years old.</span>
    </div>
    <div class="user__location">
      <span class="material-symbols-outlined">person_pin_circle</span>
      <span>- ${location.city}, ${location.country}</span>
    </div>
    <div class="user__gender">
      <span class="material-symbols-outlined">man</span>
      <span>- ${gender}</span>
    </div>
  </li>`;
    });
}
document.addEventListener("click", (e) => {
    const deleteElm = e.target; // ❗❗ e.target.classList qilsa o'xshamidi. manimcha bu typeScript dan va typeScript ushbu e.target ning type ni aniqlolmayapti va shuning uchun uni shu korinishda to'g'illadim ( error bergan yozuvni google ga search berdim )
    // console.log(deleteElm.classList[0]);
    if (deleteElm.classList[0] === `user__delete--btn`) {
        deleteElm.parentElement?.remove();
    }
});
