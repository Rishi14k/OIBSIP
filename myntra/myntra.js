let itemContainer = document.querySelector('.items-holder');

const arr=[
    {
        id: '1',
        img : 'mimg1.webp',
        review :{
            rating : 4.1,
            visitor : 1400,
        },
        company_name : 'Roadster',
        item_name : 'Preety Stylus Girl Frocks',
        c_price :  495,
        o_price :  999,
        off_price : 52,  
    },
    {
        id: '2',
        img : 'ming2.webp',
        review :{
            rating : 3.5,
            visitor : 1000,
        },
        company_name : ' M Creation',
        item_name : 'Fancy Jewellery Set',
        c_price :  699,
        o_price :  1499,
        off_price : 55,  
    },
    {
        id: '3',
        img : 'mimg3.webp',
        review :{
            rating : 4.2,
            visitor : 2100,
        },
        company_name : ' A-line Embroidered ',
        item_name : 'Festival Special Women Kurti',
        c_price :  555,
        o_price :  1010,
        off_price : 50,  
    },
    
    {
        id: '4',
        img : 'mimg4.webp',
        review :{
            rating : 3.2,
            visitor : 1500,
        },
        company_name : 'JRK_ Fashion  ',
        item_name : 'Granceful Men T-Shirt',
        c_price : 249,
        o_price :  449,
        off_price : 47,  
    },
    
    {
        id: '5',
        img : 'mimg5.webp',
        review :{
            rating : 3.8,
            visitor : 1800,
        },
        company_name : 'Watchverse AbZ ',
        item_name : ' Digital Sports Watch ',
        c_price :  199,
        o_price :  399,
        off_price : 49,  
    },
    
    {
        id: '6',
        img : 'mimg6.webp',
        review :{
            rating : 2.8,
            visitor : 1950,
        },
        company_name : 'Golden Foil ',
        item_name : ' Happy Birthday Decoration Kit ',
        c_price :  269,
        o_price :  499,
        off_price : 59,  
    },
    
    {
        id: '7',
        img : 'mimg7.webp',
        review :{
            rating : 4.5,
            visitor : 2222,
        },
        company_name : 'Terry Soft  ',
        item_name : ' New Born Baby Bath Towel ',
        c_price :  241,
        o_price :  499,
        off_price : 54,  
    },
    
    {
        id: '8',
        img : 'mimg8.webp',
        review :{
            rating : 4.8,
            visitor : 2400,
        },
        company_name : 'Stifron ',
        item_name : ' Formal patten shoes',
        c_price :  899,
        o_price :  1599,
        off_price : 39,  
    },
];
let bagItems;
onLoad();
function onLoad(){
    let bagItemsstr=localStorage.getItem('bagItems');
    bagItems=bagItemsstr ? JSON.parse(bagItemsstr) : [];

    displayItem();
    displayBag();
    
}
function addTobag(itemObjid) {
    bagItems.push(itemObjid);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBag();
}

function displayBag(){
    let bagcount=document.querySelector('.count');
    if(bagItems.length>0){
       bagcount.innerHTML = bagItems.length;
       bagcount.style.visibility='visible';
    }else{
        bagcount.style.visibility='hidden';
    }
}

function displayItem(){
    if(!itemContainer){
        return;
    }
    let innerHtml = '';
arr.forEach(itemObj => {
innerHtml +=
`
<div class="item-holder">
                <div class="img">
                    <img src="${itemObj.img}" alt="item">
                </div>
                <div class="review">
                    ${itemObj.review.rating} <i class="fa-solid fa-star"></i> | ${itemObj.review.visitor}
                </div>
                <div class="companyName">
                 ${itemObj.company_name}
                </div>
                <div class="itemName">
                  ${itemObj.item_name}
                </div>
                <div class="price">
                   <span class="dPrice">Rs ${itemObj.c_price}</span>  <span class="oPrice"><s>${itemObj.o_price}</s></span><span class="off">(${itemObj.off_price}% off)</span>
                </div>
                <div class="addbtn">
                <button onclick="addTobag(${itemObj.id})">Add To Bag</button>
            </div>

            </div>
`
});


itemContainer.innerHTML = innerHtml;

}

