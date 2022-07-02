let quantity1 = 0;
let numberbox1 = document.querySelector(".numberbox1");
function add1(){
quantity1++;
numberbox1.value = quantity1;
}

function subtract1(){
    if(quantity1>0){
        quantity1--;
        numberbox1.value = quantity1;
    }


}


let quantity2 = 0;
let numberbox2 = document.querySelector(".numberbox2");
function add2(){
quantity2++;
numberbox2.value = quantity2;
}

function subtract2(){
    if(quantity2>0){
        quantity2--;
        numberbox2.value = quantity2;
    }


}

let quantity3 = 0;
let numberbox3 = document.querySelector(".numberbox3");
function add3(){
quantity3++;
numberbox3.value = quantity3;
}

function subtract3(){
    if(quantity3>0){
        quantity3--;
        numberbox3.value = quantity3;
    }


}















var  noti=document.querySelector('#count')
var  select=document.querySelector('#card')
var button=document.getElementsByClassName('text-dark')
for(but of button){
    but.addEventListener('click',(e)=>{
        var add=Number(noti.getAttribute('data-count')||0)
        noti.setAttribute('data-count',add+1)
        noti.classList.add('zero')
    })
}


let add_to_cart=document.getElementsByClassName('text-dark');
let mainContainer=document.getElementsByTagName('tbody')[0]
let quantity_field=document.getElementsByClassName('num')

let removeBtn=document.getElementsByClassName('uk-button-danger')



for(let i=0;i<add_to_cart.length;i++){
    add_to_cart[i].addEventListener('click',addtocart)
}
function addtocart(events){
 let btn=events.target
    let btn_parent=btn.parentElement
    let btn_grandparent=btn.parentElement.parentElement
    let itemName=btn_parent.children[0].innerText
   let itemPrice=btn_parent.children[1].innerText

  
    let itemImage=btn_grandparent.children[0].src
    let itemContainer=document.createElement('tr')
    itemContainer.innerHTML=`
                
    <td><input class="uk-checkbox" type="checkbox"></td>
    <td><img class="uk-preserve-width uk-border-circle" src="${itemImage}" width="80px"></td>
    <td class="uk-table-link">
      <h3 class="item-name">${itemName}</h3>
      
    </td>  
       <td class="uk-text-truncate card-cost"><h3>${itemPrice}</h3></td>
   <td>   <input type="number" class="num" value="1"></td>

          

       <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
       <td><button class="uk-button uk-button-danger"  type="button" id="remove">Remove</button></td>`
  mainContainer.append(itemContainer)

  for(let i=0;i<quantity_field.length;i++){
    quantity_field[i].addEventListener('change',update)
}
    grandTotal()



    for(let i=0;i<removeBtn.length;i++){
        removeBtn[i].addEventListener('click',removeItem)
    }
    
}




function update(event){
    number_of_items=event.target
    number_of_items_parent=number_of_items.parentElement.parentElement
price_field=number_of_items_parent.getElementsByClassName('card-cost')[0]
total_field=number_of_items_parent.getElementsByClassName('total-price')[0]
price_field_content=price_field.children[0].innerText.replace("₹"," ")
total_field.children[0].innerText="₹"+number_of_items.value*price_field_content

if(isNaN(number_of_items.value)||number_of_items.value<=0){
    number_of_items.value=1
}


grandTotal()
}




function grandTotal(){
    let total_price=document.getElementsByClassName('total-price')
    let total=0
    let grand_total=document.getElementsByClassName('grand-total')[0]
    for(let i=0;i<total_price.length;i++){
        total_price_content=Number(total_price[i].innerText.replace('₹',''))
total+=total_price_content
    }
   grand_total.children[0].innerText='₹'+total
   grand_total.children[0].style.fontWeight='bold'
}




 function removeItem(event){
     remove_btn=event.target
     remove_btn_grandparent=remove_btn.parentElement.parentElement
     remove_btn_grandparent.remove()
     grandTotal()
 }
 

 function grandAmount(){
    let total_price=document.getElementsByClassName('total-amount')
    total_price=grand_total.children[0].innerText
    let total=100
    let grand_total=document.getElementById('table-content')[0]
    for(let i=0;i<total_price.length;i++){
        total_price_content=Number(total_price[i].innerText.replace('₹',''))
total+=total_price_content
    }
   grand_total.children[0].innerText='₹'+ total
   grand_total.children[0].style.fontWeight='bold'
}

