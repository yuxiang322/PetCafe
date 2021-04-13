
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'cake 1',
    },
    {
        name:'cake 2'
    },
    {
        name:'cake 3'
    },
    {
        name:'cake 4'
    }, 
    {
        name:'cake 5'
    }
]


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {                                                   /*When click on any cake 1 to 5 */
        cartnum();                                                                               /*Run function cartnum */
    })
}



function cartnum(){
    let productamount = localStorage.getItem('cartamount');
    productamount = parseInt(productamount);                                                     /*From String to numbers*/ 
    
    if(productamount){
        localStorage.setItem('cartamount', productamount + 1);                                   /*Set local storage product amount + 1, cart span from 1++ */
        document.querySelector('.cart span').textContent = productamount + 1;
    }else{
        localStorage.setItem('cartamount', 1);
        document.querySelector('.cart span').textContent = 1;                                    /*if statement false. Set local storage product amount to 1 for the first click. Cart span from 0 to 1*/
    }

}

function refreshcartnum(){                                                                       /*To stop cart from going to 0*/
    let productamount = localStorage.getItem('cartamount');                                      /* Get cartamount from local storage */

    if(productamount){
        document.querySelector('.cart span').textContent = productamount;                        /*If there is productamount, set cart span to that amount */
    }
}

refreshcartnum();

function remove(){
    let productamount = localStorage.getItem('cartamount');
    if(productamount){
        localStorage.setItem('cartamount', productamount - 1);
        document.querySelector('.cart span').textContent = productamount - 1;
    }
    else{
        localStorage.setItem('cartamount', productamount);
        document.querySelector('.cart span').textContent = productamount;
    }
}
