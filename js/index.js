//  try to function 
function getValueById(id) {
    const value = document.getElementById(id).value;
    const valueInNumber = parseFloat(value);
    return valueInNumber;
}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const valueInNumber = parseFloat(value);
    return valueInNumber;
}

function removePopupMenuClass(id){
    const getValue = document.getElementById(id);
    getValue.classList.remove('hidden');

}


// Donate Section 1
document.getElementById('first-donate-button').addEventListener('click', function () {

    const getValue = getValueById('first-input-field')
    if(getValue <= 0 || isNaN(getValue) ){
        alert('Invalid Donation')
        return;
    }

    const getInnerText = getInnerTextById('donate-money-button')
    const totalDonate = getValue + getInnerText;
    document.getElementById('donate-money-button').innerText = totalDonate;
    
    const navbarMoney = getInnerTextById('navbar-money');
            const decreaseNavMoney = navbarMoney - getValue;
            document.getElementById('navbar-money').innerText = decreaseNavMoney;

          const popup =  document.getElementById('donate-popup')
          popup.classList.remove("hidden");
        
       
                

})
// first close pop 
    document.getElementById('popup-close-button').addEventListener('click', function(){
        const popupClose = document.getElementById('donate-popup')
        popupClose.classList.add('hidden');
    })

// Donate Section 2

document.getElementById('second-donate-button')
    .addEventListener('click', function () {

        const getValue = getValueById('second-input-value')
        
        if(getValue <= 0 || isNaN(getValue) ){
            alert('Invalid Donation')
            return;
        }
        const getInnerText = getInnerTextById('second-money-button')

            const totalDonate = getValue + getInnerText;
            document.getElementById('second-money-button').innerText = totalDonate;

            const navbarMoney = getInnerTextById('navbar-money');
            const decreaseNavMoney = navbarMoney - getValue;
            document.getElementById('navbar-money').innerText = decreaseNavMoney;

            const popup =  document.getElementById('second-donate-popup')
          popup.classList.remove("hidden");
        

    })
    // second close pop 
    document.getElementById('second-popup-close-button').addEventListener('click', function(){
        const popupClose = document.getElementById('second-donate-popup')
        popupClose.classList.add('hidden');
    })

    // Donate section 3
document.getElementById('third-donate-button')
    .addEventListener('click', function () {
        const getValue = getValueById('third-input-field')
        if(getValue <= 0 || isNaN(getValue) ){
            alert('Invalid Donation')
            return;
        }

        const getInnerText = getInnerTextById('third-money-button')

        const totalDonate = getValue + getInnerText;
        document.getElementById('third-money-button').innerText = totalDonate;

        const navbarMoney = getInnerTextById('navbar-money');
            const decreaseNavMoney = navbarMoney - getValue;
            document.getElementById('navbar-money').innerText = decreaseNavMoney;

            const popup =  document.getElementById('third-donate-popup')
            popup.classList.remove("hidden");
        
    })
    // Third close popup 

    document.getElementById('third-popup-close-button').addEventListener('click', function(){
        const popupClose = document.getElementById('third-donate-popup')
        popupClose.classList.add('hidden');
    })
