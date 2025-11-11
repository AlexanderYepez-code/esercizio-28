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
const contatti = document.querySelector(".contatti");
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
                <div class="col-70 p-left ">
                    <h2 class="nome pt-2">${name}</h2>
                    <h4 class="professione">${role}</h4>
                    <a class="contatti pt-2" href="">${email}</a>
                </div>`
card.innerHTML += items

}
// Form
const form = document.getElementById("formDipendente");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const ruolo = document.getElementById("ruolo").value.trim();
  const email = document.getElementById("email").value.trim();
  const image = document.getElementById("image").files[0];

  const nuovoDipendente = {
    name: nome,
    role: ruolo,
    email: email,
    img: image ? URL.createObjectURL(image) : "img/default.png"
  };

  // Aggiungo all'array dei membri
  teamMembers.push(nuovoDipendente);

  // Mostro la nuova card
  renderCard(nuovoDipendente);

  // Reset form
  form.reset();
});