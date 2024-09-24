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

// const getValueFunction = getValueById(donate-money-button);
// console.log(getValueFunction);

document.getElementById('first-donate-button').addEventListener('click', function () {

    const getValue = getValueById('first-input-field')
    if(getValue <= 0 || isNaN(getValue) ){
        alert('Invalid Input')
        return;
    }

    // const inputField = document.getElementById('first-input-field').value;
    // const inputFieldValueNumber = parseFloat(inputField);


    const getInnerText = getInnerTextById('donate-money-button')
    //    const donateMoneyButton = document.getElementById('donate-money-button').innerText;
    //    const donateMoneyNumber = parseFloat(donateMoneyButton)

    const totalDonate = getValue + getInnerText;

    document.getElementById('donate-money-button').innerText = totalDonate;

    const navbarMoney = getInnerTextById('navbar-money');
            const decreaseNavMoney = navbarMoney - getValue;
            document.getElementById('navbar-money').innerText = decreaseNavMoney;

})

document.getElementById('second-donate-button')
    .addEventListener('click', function () {

        const getValue = getValueById('second-input-value')
        
        if(getValue <= 0 || isNaN(getValue) ){
            alert('Invalid Input')
            return;
        }
        const getInnerText = getInnerTextById('second-money-button')

            const totalDonate = getValue + getInnerText;
            document.getElementById('second-money-button').innerText = totalDonate;

            const navbarMoney = getInnerTextById('navbar-money');
            const decreaseNavMoney = navbarMoney - getValue;
            document.getElementById('navbar-money').innerText = decreaseNavMoney;
        

    })

document.getElementById('third-donate-button')
    .addEventListener('click', function () {
        const getValue = getValueById('third-input-field')
        if(getValue <= 0 || isNaN(getValue) ){
            alert('Invalid Input')
            return;
        }

        const getInnerText = getInnerTextById('third-money-button')

        const totalDonate = getValue + getInnerText;
        document.getElementById('third-money-button').innerText = totalDonate;

        const navbarMoney = getInnerTextById('navbar-money');
            const decreaseNavMoney = navbarMoney - getValue;
            document.getElementById('navbar-money').innerText = decreaseNavMoney;
        
    })
