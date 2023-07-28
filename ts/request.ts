// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

const loaderToggle = (toggle) => {
  if (toggle) {
    overlay?.classList.remove("hidden");
  } else {
    overlay?.classList.add("hidden");
  }
};

const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        loaderToggle(true);
      } else if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data.results);
        loaderToggle(false);
      } else if (request.readyState == 4) {
        reject("❌ ERROR ❌");
        loaderToggle(false);
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

const reload = () => {
  getData(API)
    .then((d) => {
      updateUI(d)
    })
    .catch((err) => {
      console.log(err);
    });
};


document.addEventListener('DOMContentLoaded',reload);