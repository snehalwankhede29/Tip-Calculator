let billAmountEl = document.getElementById("billAmount");
let tipEL = document.getElementById("tip");
let para1EL = document.getElementById("para1");
let para2El = document.getElementById("para2");


function calculate(){
    let update = billAmountEl.value;
    let upadateBillAmount = (parseInt(update));
    // console.log(typeof(upadateBillAmount ));
    let updated = tipEL.value;
    let updatedTip = (parseInt(updated ));
    // console.log(typeof(updatedTip));
    para1EL.textContent = updated;
    para2El.textContent = upadateBillAmount + updatedTip;
    // console.log(typeof(para2El));
}