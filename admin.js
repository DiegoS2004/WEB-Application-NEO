"use strict";

// links
const sideLInksEl = document.querySelectorAll(
  ".sidebar .side-menu li a:not(.logout)",
);

sideLInksEl.forEach((links) => {
  const li = links.parentElement;
  links.addEventListener("click", () => {
    sideLInksEl.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// sidebar
const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBarEl = document.querySelector(".sidebar");

// menus
menuBar.addEventListener("click", () => {
  sideBarEl.classList.toggle("close");
});

const searchbtn = document.querySelector(
  ".content nav form .form-input button",
);
const searchIcon = document.querySelector(
  ".content nav form .form-input button .bx",
);
const searchForm = document.querySelector(".content nav form");

searchbtn.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault;
    searchForm.classList.toggle("show");

    if (searchForm.classList.contains("show")) {
      searchIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

// resize
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    sideBarEl.classList.add("close");
  } else {
    sideBarEl.classList.remove("close");
  }
});

// dark and light mode
const darkEl = document.querySelector(".side-menu ul li a");
const darkIcon = document.querySelector(".side-menu ul li .bx.bx-moon");
const logoImage = document.getElementById("logo-image");

darkEl.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkIcon.classList.replace("bx-moon", "bx-sun");
    logoImage.src = "./public/logo-white.png"; // Cambia la imagen a la versión para modo claro
  } else {
    darkIcon.classList.replace("bx-sun", "bx-moon");
    logoImage.src = "./public/icon-dark-1@2x.png"; // Cambia la imagen a la versión para modo claro
  }

});

//charts

  const ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Comunes', 'Raros', 'Epicos'],
      datasets: [{
        label: 'Collecionables',
        data: [65, 42, 20],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const usuarios = document.getElementById('usuarios').getContext('2d');
const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Usuarios activos',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
new Chart(usuarios,config);


 