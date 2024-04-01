const productSingle = document.querySelector(".product__single")

const API_URL = "https://fakestoreapi.com/products"

async function fetchData(api) {
    let path = new URLSearchParams(window.location.search)
    let id = path.get("id")

    let getData = await fetch(`${api}/${id}`)
    getData
        .json()
        .then(res => {
            console.log(res)
            createSingle(res)
        })
        .catch(err => console.log(err))
}


fetchData(API_URL)



function createSingle(data) {
    productSingle.innerHTML = `
    <div class="col-6">
    <div class="product__image">
        <img src="${data.image}" alt="">
    </div>
</div>
<div class="col-6">
<div class="product__content">
    <h1>${data.title}</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil aliquam nam vitae quam suscipit at, aperiam dolorem consequatur fugit, eveniet, a tenetur illum nisi temporibus voluptate totam. Quas, ea maxime.</p>
    <img src="../img/Frame 911.svg" alt="" class="frame">
</div>
</div> 
    `
}