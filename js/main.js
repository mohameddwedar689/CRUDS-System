//Calling All Input IDs;
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

// Get Total Prices Implementation
function getTotalPrice() 
{
    if(price.value != '')
    {
        // '+' for converting string to numbers
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#5df063';
    }
    else
    {
        total.innerHTML = '';
        total.style.background = '#f44336';
    }
}