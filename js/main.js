const wrapper = document.querySelector('.wrapper')
const loading = document.querySelector('.loading')
const API_URL = "https://fakestoreapi.com/products"

async function fetchData(api) {
    let getDate = await fetch(api)
    getDate
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
        .finally(() => {
            loading.style.display = "none"
        })
}

fetchData(API_URL)

function createCard(data) {
    let fragment = document.createDocumentFragment()
    data.forEach(product => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <div data-id=${product.id} >
        <i class="fa-solid fa-heart section__like"></i>

            <img name="product-image"  class="card__image" src="${product.image}" alt="">
            <h2 class="card__title" title="${product.title}" >${product.title}</h2>
            <p class="card__prg ">$100 <img src="./img/Four Star.svg" alt=""> <span>(325)</span>    </p>
        </div>
        `

        fragment.appendChild(card)
    })
    wrapper.appendChild(fragment)
}



const singleRoate = (id)=>{
    window.open(`/pages/product.html?id=${id}` , "_self")
}


wrapper.addEventListener("click", (e => {
    if (e.target.name = "product-image") {
        let id = e.target.closest("[data-id]").dataset.id
        singleRoate(id);
    }
}))

























// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__collection")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show')
})
// ============= Navbar toggle END ================
