const CONVENIENCE_FEES = 99;
let bagItemObj;
loadBagitem();
displayBagI();
displayBagSummary();

function displayBagSummary(){
    let bagSummaryElement = document.querySelector('.bagSummary');
    let totalMRP =0;
    let totalDiscount =0;


    bagItemObj.forEach(rishi => {
        totalMRP += rishi.o_price;
        totalDiscount += rishi.o_price - rishi.c_price;
    });
    let totalAmount = totalMRP - totalDiscount +  CONVENIENCE_FEES;

    bagSummaryElement.innerHTML =`
    <div class="detail">
    <div class="head">
        PRICE DETAILS
    </div>
    <div class="price-item">
        <div class="tag">Total MRP</div>
        <div class="value">RS ${totalMRP}</div>
        <div class="dis">Discount on MRP</div>
        <div class="value">RS - ${totalDiscount}</div>
        <div class="con">Convenience Fee</div>
        <div class="value">RS 99</div>
        <div class="total">Total Amount</div>
        <div class="value tt">RS ${totalAmount} </div>
        <div class="btn1"><button>PLACE ORDER</button></div>
        </div>
    </div>
    `;

}


function loadBagitem(){
    console.log(bagItems);
    bagItemObj=bagItems.map(itemId => {
        for(let i=0; i<arr.length; i++){
            if(itemId==arr[i].id){
                return arr[i];
            }
        }
    });
    console.log(bagItemObj);
}

function displayBagI(){
  
    let bagContainer = document.querySelector('.bagitems');
    let outputBag=' ';
    bagItemObj.forEach(rishi => {
        outputBag += generateItemHtml(rishi);
    });
  bagContainer.innerHTML =outputBag;
}

function removeFromBag(itemId){
    bagItems=bagItems.filter(bagItemId=>bagItemId!=itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagitem();
    displayBag();
    displayBagI();
    displayBagSummary();

}

function generateItemHtml(arr){
    return `
    <div class="bagitem">
    <div class="leftpart">
        <img src="${arr.img}" alt="img">
    </div>
    <div class="right">
        <div class="company">${arr.company_name}</div>
        <div class="itemname">${arr.item_name }</div>
        <div class="priceel">
            <span class="cprice">Rs ${arr. c_price}</span>
            <span class="dprice"><s>${arr.o_price}</s></span>
            <span class="off">(${arr.off_price}% off)</span>
        </div>
        <div class="return">
            <span class="return-time">14 Days return available</span>
        </div>
        <div class="delivery">
            Delivery 
            <span>10 Apr 2024</span>
        </div>
    </div>
    <div class="remove" onclick="removeFromBag(${arr.id})">X</div>
</div>
    `

}