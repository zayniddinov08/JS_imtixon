const hamburger = document.querySelector(".burger")
const elTemplate = document.querySelector(".template").content
const elList = document.querySelector(".card_wrapper")
const elmodal = document.querySelector(".modal")
const closeBtn = elmodal.querySelector(".close_btn")
const recs = document.querySelector(".recs")
const menu = document.querySelector(".menu1")

window.addEventListener("click", e => {
    if (elmodal == e.target) {
        elmodal.classList.remove("active")
    }
})

closeBtn.addEventListener("click", () => {
    elmodal.classList.remove("active")
})

let mode = true
hamburger.addEventListener("click", () => {
    if (mode == true) {
        menu.classList.add("active")
    } else {
        menu.classList.remove("active")
    }
    mode = !mode
});


function Arrrender(arr, list) {
    arr.filter(item => item.id >= 5 && item.id <= 7).map((item) => {
        console.log(item);
        let Templateclone = elTemplate.cloneNode(true)

        let cardImg = Templateclone.querySelector("img")
        let cardTitle = Templateclone.querySelector("h3")
        let cardPrice = Templateclone.querySelector("p")

        cardImg.src = item.image
        cardTitle.textContent = item.title
        cardPrice.textContent = item.price + "$"
        let ModalImg = elmodal.querySelector("img")
        let Modaltitle = elmodal.querySelector("h3")
        let Modaldescription = elmodal.querySelector("p")
        let ModalPrice = elmodal.querySelector("h4")

        
        let cardBtn = Templateclone.querySelector("button")
        cardBtn.dataset.Id = item.id

        cardBtn.addEventListener("click", e => {
            let dataId = e.target.dataset.Id
            elmodal.classList.add("active")

            if (dataId == item.id) {
                ModalImg.src = item.image
                Modaltitle.textContent = item.title
                Modaldescription.textContent = item.description
                ModalPrice.textContent = item.price
            }
        })


        list.appendChild(Templateclone)
    })
}


function renderArr(arr, list) {
    arr?.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        let cardImg = cloneTemplate.querySelector("img")
        let cardTitle = cloneTemplate.querySelector("h3")
        let cardPrice = cloneTemplate.querySelector("p")
        let ModalImg = elmodal.querySelector("img")
        let Modaltitle = elmodal.querySelector("h3")
        let Modaldescription = elmodal.querySelector("p")
        let ModalPrice = elmodal.querySelector("h4")

        let cardBtn = cloneTemplate.querySelector("button")
        cardBtn.dataset.Id = item.id

        cardBtn.addEventListener("click", e => {
            let dataId = e.target.dataset.Id
            elmodal.classList.add("active")

            if (dataId == item.id) {
                ModalImg.src = item.image
                Modaltitle.textContent = item.title
                Modaldescription.textContent = item.description
                ModalPrice.textContent = item.price
            }
        })

        cardImg.src = item.image
        cardTitle.textContent = item.title
        cardPrice.textContent = item.price + "$"

        list.appendChild(cloneTemplate)
    })
}

function fetchData() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            renderArr(data, elList)
            Arrrender(data, recs)
        })
}

fetchData()


function Buy() {
    window.open("./buy.html")
}