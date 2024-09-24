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

function removePopupMenuClass(id) {
    const getValue = document.getElementById(id);
    getValue.classList.remove('hidden');

}
function addPopupMenuClass(id) {
    const getValue = document.getElementById(id);
    getValue.classList.add('hidden');

}

function innerTextById(id) {
    const value = document.getElementById(id).innerText;
    return value;
}


// Donate Section 1
document.getElementById('first-donate-button').addEventListener('click', function () {

    const getValue = getValueById('first-input-field')
    if (getValue <= 0 || isNaN(getValue)) {
        alert('Invalid Donation')
        return;
    }

    const getInnerText = getInnerTextById('donate-money-button')
    const totalDonate = getValue + getInnerText;
    document.getElementById('donate-money-button').innerText = totalDonate;



    // Transaction history start
    const headingInnerText = innerTextById('first-heading');
    const p = document.createElement('p');
    const currentDate = new Date()
    p.innerText = `${getValue} Taka is Donated for ${headingInnerText} on ${currentDate}`
    document.getElementById('transaction-container').appendChild(p)

 

    const navbarMoney = getInnerTextById('navbar-money');
    const decreaseNavMoney = navbarMoney - getValue;
    document.getElementById('navbar-money').innerText = decreaseNavMoney;

    const popup = document.getElementById('donate-popup')
    popup.classList.remove("hidden");




})
// first close pop 
document.getElementById('popup-close-button').addEventListener('click', function () {
    const popupClose = document.getElementById('donate-popup')
    popupClose.classList.add('hidden');
})

// Donate Section 2

document.getElementById('second-donate-button')
    .addEventListener('click', function () {

        const getValue = getValueById('second-input-value')

        if (getValue <= 0 || isNaN(getValue)) {
            alert('Invalid Donation')
            return;
        }
        const getInnerText = getInnerTextById('second-money-button')

        const totalDonate = getValue + getInnerText;
        document.getElementById('second-money-button').innerText = totalDonate;

        // history 
        const headingInnerText = innerTextById('second-heading');
        const p = document.createElement('p');
        const currentDate = new Date()
        p.innerText = `${getValue} Taka is Donated for ${headingInnerText} on ${currentDate}`
        document.getElementById('transaction-container').appendChild(p)


        const navbarMoney = getInnerTextById('navbar-money');
        const decreaseNavMoney = navbarMoney - getValue;
        document.getElementById('navbar-money').innerText = decreaseNavMoney;

        const popup = document.getElementById('second-donate-popup')
        popup.classList.remove("hidden");


    })
// second close pop 
document.getElementById('second-popup-close-button').addEventListener('click', function () {
    const popupClose = document.getElementById('second-donate-popup')
    popupClose.classList.add('hidden');
})

// Donate section 3
document.getElementById('third-donate-button')
    .addEventListener('click', function () {
        const getValue = getValueById('third-input-field')
        if (getValue <= 0 || isNaN(getValue)) {
            alert('Invalid Donation')
            return;
        }

        const getInnerText = getInnerTextById('third-money-button')

        const totalDonate = getValue + getInnerText;
        document.getElementById('third-money-button').innerText = totalDonate;

        // history 
        const headingInnerText = innerTextById('third-header');
        const p = document.createElement('p');
        const currentDate = new Date()
    p.innerText = `${getValue} Taka is Donated for ${headingInnerText} on ${currentDate}`
    document.getElementById('transaction-container').appendChild(p)

        // history end 

        const navbarMoney = getInnerTextById('navbar-money');
        const decreaseNavMoney = navbarMoney - getValue;
        document.getElementById('navbar-money').innerText = decreaseNavMoney;

        const popup = document.getElementById('third-donate-popup')
        popup.classList.remove("hidden");

    })
// Third close popup 

document.getElementById('third-popup-close-button').addEventListener('click', function () {
    const popupClose = document.getElementById('third-donate-popup')
    popupClose.classList.add('hidden');
})

document.getElementById('history-button').addEventListener('click', function () {
    addPopupMenuClass('main-container');
    removePopupMenuClass('history-section')

    // bg-color 
    document.getElementById('donation-button').classList.remove('bg-green-400')
    document.getElementById('history-button').classList.add('bg-green-400')

})
document.getElementById('donation-button').addEventListener('click', function () {
    removePopupMenuClass('main-container')
    addPopupMenuClass('history-section')

    //    bg-color 
    document.getElementById('history-button').classList.remove('bg-green-400')
    document.getElementById('donation-button').classList.add('bg-green-400')
})


