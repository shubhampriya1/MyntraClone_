let bagItemObjects;

onLoad();

function onLoad(){
   
     displaybagItems();
      loadBagItemObjects();

}
function loadBagItemObjects(){
  console.log(bagItems);
  bagItemObjects=bagItem.map(itemId=>{
    for(let i=0;i<item.length;i++)
  if(itemId==item[i].id){
    return item[i];
  }
    
  });
  console.log(bagItemObjects);
}





function displaybagItems(){
    let containerElement=document.querySelector('.bag-items-container');
    containerElement.innerHTML=` 
    <div class="bag-items-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="https://th.bing.com/th/id/OIP.985nslG11roBzYavFElG2AAAAA?rs=1&pid=ImgDetMain">
    </div>
    <div class="item-right-part">
      <div class="company">LIBAS</div>
      <div class="item-name">WomenMen Printed Jersey</div>
      <div class="price-container">
        <span class="current-price">Rs 999</span>
        <span class="original-price">Rs 1999</span>
        <span class="discount-percentage">(0% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">14 days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">15 jan 2024</span>
      </div>
    </div>

    <div class="remove-from-cart">X</div>
  </div>
`
}
function generateItemHtml(item){}