const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// prendo gli output dove si andra a sostituire i dati dall array

const name = document.querySelector(".nome");
const professione = document.querySelector(".professione");
const contatti = document.querySelector("contatti");
const imgTeam = document.querySelector(".img")
const card = document.querySelector(".cards")
console.log(name, professione, contatti, imgTeam)

for (let i = 0; i < teamMembers.length; i++) {
  console.log(i)
  const { name, role, email, img } = teamMembers[i];
  const items = `<div class="col bg-dark d-flex ">
  <div class="col">
                    <img class="img" src="./${img}" alt="">
                </div>
                <div class="col-70">
                    <h2 class="nome">${name}</h2>
                    <h3 class="professione">${role}</h3>
                    <a class="contatti" href="">${email}</a>
                </div>`
card.innerHTML += items

}