/*function to add 1 when radio is clicked to local storage*/
/*Function IF radio and Whensubmit is empty Alrt "Invalid input"
Getitem Number from Input, then set in local storage.
elseif not empty (Getitem from Local storage) and note down in FORM
*/
let slotamt = document.querySelector('.slot-1 span');
slotamt = parseInt(slotamt);

function addnum(){

    let slotamount = localStorage.getItem('slots', slotamt + 1);
    slotamount = parseInt(slotamount);

    localStorage.setItem('slots', slotamount + 1);
    document.querySelector('.slot-1 span').textContent = slotamount;

}