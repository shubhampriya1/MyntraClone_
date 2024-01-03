 let bagItems;
onLoad();
// displaybagicon();


function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  // displayItemsOnHomePage();
  displaybagicon();
}



 function addToBag(itemId){

   bagItems.push(itemId);
   localStorage.setItem('bagItems',JSON.stringify(bagItems))
   displaybagicon();
 }



   function displaybagicon(){
    let bagItemsCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
      bagItemsCountElement.style.visibility='visible';
      bagItemsCountElement.innerText=bagItems.length;}
   else{
    bagItemsCountElement.style.visibility='hidden';
   }
   }


const item=[
  { id:'1',
    itemimg1:'https://makschool.es/wp-content/uploads/2020/04/bigstock-Luxury-Makeup-Beauty-Products-332454787-scaled.jpg',
    rating1:{
          stars:4.5,
          noofReviews:1099,
    },
    company_Name:'carlton london',
    item_Name:'suwar',
    curent_price:4766,
    original_price:1000,
    Discount:42,
    
} , 
{
  id:'2',
  itemimg1:'https://cdn.imgbin.com/16/2/11/imgbin-grocery-store-kabul-farms-supermarket-food-online-grocer-grocery-food-Kdb8gidTHwGiLr3nbrHkthcEy.jpg',
  rating1:{
        stars:4.5,
        noofReviews:1099,
  },
  company_Name:'carlton london',
  item_Name:'suwar',
  curent_price:4766,
  original_price:1000,
  Discount:42,
  
} , 
{id:'3',
  itemimg1:'https://th.bing.com/th/id/OIP.985nslG11roBzYavFElG2AAAAA?rs=1&pid=ImgDetMain',
  rating1:{
        stars:4.5,
        noofReviews:1099,
  },
  company_Name:'carlton london',
  item_Name:'suwar',
  curent_price:4766,
  original_price:1000,
  Discount:42,
  
} , 
{id:'4',
  
  itemimg1:'https://i.pinimg.com/originals/2a/bf/5c/2abf5ce5e1b2aeb606437ed0b1456942.jpg',
  rating1:{
        stars:4.5,
        noofReviews:1099,
  },
  company_Name:'carlton london',
  item_Name:'suwar',
  curent_price:4766,
  original_price:1000,
  Discount:42,
  
} , 
{id:'5',
  itemimg1:'https://media.istockphoto.com/photos/heap-of-folded-clothes-picture-id157696797?k=6&m=157696797&s=612x612&w=0&h=ZcPcSNC9Copy8gZAzmkVZK-QZnhD2RbdN2TLB0qfrPY=',
  rating1:{
        stars:4.5,
        noofReviews:1099,
  },
  company_Name:'carlton london',
  item_Name:'suwar',
  curent_price:4766,
  original_price:1000,
  Discount:42,
  
} , 
{id:'6',
  itemimg1:'https://www.dhresource.com/0x0/f2/albu/g9/M01/EF/C8/rBVaWFyItROAWSvMABCJf7s_uRs409.jpg',
  rating1:{
        stars:4.5,
        noofReviews:1099,
  },
  company_Name:'carlton london',
  item_Name:'suwar',
  curent_price:4766,
  original_price:1000,
  Discount:42,
  
} , 
{id:'7',
  itemimg1:'https://www.outfittrends.com/wp-content/uploads/2017/04/Summer-Beach-Attire-For-Boys.jpg',
  rating1:{
        stars:4.5,
        noofReviews:1099,
  },
  company_Name:'carlton london',
  item_Name:'suwar',
  curent_price:4766,
  original_price:1000,
  Discount:42,
  
}
 , {id:'8',
  itemimg1:'https://th.bing.com/th/id/R.9a99e5ecd3cfd0731560e7b084ecc66e?rik=OX2wepygRUqEtg&riu=http%3a%2f%2fwww.mommygearest.com%2fwp-content%2fuploads%2f2017%2f10%2fbest-beauty-products-2017.jpg&ehk=72%2faVGS6f4uWNJbK%2bIKCezwW0ZgOq0mOIBKIPkVR9Rc%3d&risl=1&pid=ImgRaw&r=0',
  rating1:{
        stars:4.5,
        noofReviews:1099,
  },
  company_Name:'carlton london',
  item_Name:'suwar',
  curent_price:4766,
  original_price:1000,
  Discount:42,
  
} 
, {id:'9',
  itemimg1:'https://th.bing.com/th/id/OIP.T544Qdf-lY8u-zm_69RyDwHaE7?rs=1&pid=ImgDetMain',
  rating1:{
        stars:4.5,
        noofReviews:1099,
  },
  company_Name:'carlton london',
  item_Name:'suwar',
  curent_price:4766,
  original_price:1000,
  Discount:42,
  
} 

]


let itemsContainerElement=document.querySelector('.items-container');
// if(!itemsContainerElement){
//   return;
// }
let innerHtml = '';
  item.forEach(item => {
    innerHtml += `<div class="item-container">
    <img class="itemimg" src="${item.itemimg1}" alt="">
 <div class="rating">
 ${item.rating1.stars} ⭐ |${item.rating1.noofReviews}
 </div>
<div class="company-name"> ${item.company_Name}</div>
 <div class="item-name">${item.item_Name}</div>
<div class="price">
   <span class="curent-price">Rs ${item.curent_price}</span>
   <span class="original-price">Rs ${item.original_price}</span>
     <span class="Discount">(${item.Discount}% OFF) </span>
 </div>
 <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
 </div>`
    
  });
  itemsContainerElement.innerHTML = innerHtml;


console.log("dhhhhhhhhhhhhh")