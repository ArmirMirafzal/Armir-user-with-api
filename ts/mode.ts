const body = document.querySelector("body") as HTMLBodyElement;
const darkBtn = document.getElementById("dark-btn") as HTMLButtonElement;
const lightBtn= document.getElementById("light-btn") as HTMLButtonElement;

const modeLocal = localStorage.getItem("mode");

if (modeLocal) {
  body?.classList.add("dark-mode");
  darkBtn?.classList.toggle("hidden");
  lightBtn?.classList.toggle("hidden");
}

const toggleModeBtn = () => {
  darkBtn?.classList.toggle("hidden");
  lightBtn?.classList.toggle("hidden");
  body?.classList.toggle("dark-mode");
};

darkBtn.addEventListener('click', () => {
    toggleModeBtn();
    localStorage.setItem('mode', 'dark-mode');
});

lightBtn.addEventListener('click', () => {
    toggleModeBtn();
    localStorage.setItem('mode', '');
})