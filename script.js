//let array = []
//let object = {key:value}

let images = [
    {
        owner:'John',
        imageUrl: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 700
    },
    {
        owner:'Alex',
        imageUrl:"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 900
    },
    {
        owner:'Jane',
        imageUrl: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 1100
    },
    {
        owner:'Mike',
        imageUrl: "https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 1300
    },
    {
        owner:'Peninah',
        imageUrl: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 1700
    },
]
//for ..of
//while
//for in (objects)
//forEach
//do while
//map

for(image of images){
    console.log(image)
    const newDiv = document.createElement("div")
    newDiv.className="card"
    newDiv.innerHTML = `
        <img src='${image.imageUrl}' alt="art from my gallery">
        <h4>${image.owner}</h4>
        <p> Kshs ${image.price}</p>
    `
    let parentContainer = document.getElementById("imageContainer")
    parentContainer.appendChild(newDiv)
}

let form = document.querySelector("#submitForm")
let newOwner = document.getElementById("owner")
let newImage = document.getElementById("imageUrl")
let price = document.getElementById("price")

form.addEventListener("submit",function(event){
    event.preventDefault()
    let newObject = {
        owner:newOwner.value,
        imageUrl:newImage.value,
        price:price.value

    }
    console.log(newObject)

    const peopleDiv = document.createElement("div")
    peopleDiv.className="card"
    peopleDiv.innerHTML = `
        <img src='${newObject.imageUrl}' alt="art from my gallery">
        <h4>${newObject.owner}</h4>
        <p> Kshs ${newObject.price}</p>
    `
    let parentContainer = document.getElementById("imageContainer")
    parentContainer.appendChild(peopleDiv)
})