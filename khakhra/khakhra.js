let products = {
    data:[
        {
            productName:"Common Khakhra",
            category:"SadaKhakhra",
            price:'$25',
            image : "sadakh.webp",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"spicy",
            category:"MasalaKhakhra",
            price:'$35',
            image : "masalakh.webp",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"Red Chily ",
            category:"FancyKhakhra",
            price:'$30',
            image : "spicykh.webp",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"Kadva",
            category:"MethiKhakhra",
            price:'$20',
            image : "methi-khakhra.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"Tikha Khakhra",
            category:"ChorafaliKhakhra",
            price:'$33',
            image : "chorafali.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"sada Khakhra",
            category:"SadaKhakhra",
            price:'$30',
            image : "sada1.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"Regular Khakhra",
            category:"SadaKhakhra",
            price:'$25',
            image : "sada2.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"simple Khakhra",
            category:"SadaKhakhra",
            price:'$20',
            image : "sada3.jfif",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"sada Khakhra",
            category:"SadaKhakhra",
            price:'$15',
            image : "sada4.jfif",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"sada Khakhra",
            category:"SadaKhakhra",
            price:'$21',
            image : "sada5.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"sada Khakhra",
            category:"SadaKhakhra",
            price:'$21',
            image : "sada5.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"crunch",
            category:"MasalaKhakhra",
            price:'$25',
            image : "masala1.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"red chilly",
            category:"MasalaKhakhra",
            price:'$28',
            image : "masala2.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"Tikha",
            category:"MasalaKhakhra",
            price:'$15',
            image : "masala3.png",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"masaledar",
            category:"MasalaKhakhra",
            price:'$21',
            image : "masala4.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"mixveg spicy",
            category:"MasalaKhakhra",
            price:'$34',
            image : "masala5.jfif",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"Green chily ",
            category:"FancyKhakhra",
            price:'$31',
            image : "fancy1.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"free fire",
            price:'$39',
            image : "fancy2.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"pubg fire",
            category:"FancyKhakhra",
            price:'$31',
            image : "fancy3.webp",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"cod fire",
            category:"FancyKhakhra",
            price:'$31',
            image : "fanxy4.webp",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"red chily ",
            category:"FancyKhakhra",
            price:'$31',
            image : "fancy5.avif",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"methi king",
            category:"MethiKhakhra",
            price:'$20',
            image : "methi1.jfif",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"methi queen",
            category:"MethiKhakhra",
            price:'$25',
            image : "methi2.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"kadva fancy",
            category:"MethiKhakhra",
            price:'$28',
            image : "methi3.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"methi sena",
            category:"MethiKhakhra",
            price:'$30',
            image : "methi4.jfif",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"methi dashed",
            category:"MethiKhakhra",
            price:'$20',
            image : "methi5.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"chorafali king",
            category:"ChorafaliKhakhra",
            price:'$23',
            image : "cho.webp",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"chorafali master",
            category:"ChorafaliKhakhra",
            price:'$23',
            image : "cho1.jfif",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"fancy chorafali",
            category:"ChorafaliKhakhra",
            price:'$33',
            image : "cho2.jpg",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"pure chorafali",
            category:"ChorafaliKhakhra",
            price:'$23',
            image : "cho3.jfif",
            button : "https://wa.me/7201071233",
        },
        {
            productName:"chorafali queen",
            category:"ChorafaliKhakhra",
            price:'$32',
            image : "cho5.jfif",
            button : "https://wa.me/7201071233",
        },
    ],
};

for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card",i.category,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-con");

    let images = document.createElement("img");
    images.setAttribute("src",i.image);
    imgContainer.appendChild(images);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h5");
    price.innerText = i.price.toUpperCase();
    container.appendChild(price);

    let buy = document.createElement("a");
    buy.setAttribute("href",i.button);
    buy.classList.add("link");
    buy.innerText = "BUY NOW"
    container.appendChild(buy);
    card.appendChild(container);



    document.querySelector("#products").appendChild(card);
}

function filterProduct(value){
    let buttons = document.querySelectorAll("btn-value");
    buttons.forEach((button) =>{
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) =>{
        if(value == "all"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
});

  window.onload = () =>{
    filterProduct("all");
}