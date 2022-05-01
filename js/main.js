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
let btnDeleteAll = document.getElementById('deleteAll');
let mood = 'create';
let temp;
let searchMood = 'title';
let search = document.getElementById('search');


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

// Create Product Implementation
let ProductsData;
if(localStorage.product != null)
{
    ProductsData = JSON.parse(localStorage.product);
}
else
{
    ProductsData = [];
}
submit.onclick = function() 
{
    let newProductObject = 
    {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase()
    }

    //clean data input
    if(title.value != '' && price.value != '' && category.value != '')
    {
        if(mood === 'create')
        {
            //Count Function Implmentation
            if(newProductObject.count > 1)
            {
                for(let i = 0 ; i < newProductObject.count ; i++)
                {
                    ProductsData.push(newProductObject);
                }
            }
            else
            {
                ProductsData.push(newProductObject);
            }
        }
        else
        {
            ProductsData[temp] = newProductObject;
            mood = 'create';
            submit.innerHTML = 'Create';
            count.style.display = 'block';
        }
    }
    else
    {
        //calling clear input function
        clearInputData();
    }
    

    
    //saving data in local storage
    localStorage.setItem('product' , JSON.stringify(ProductsData));

    
    //calling show data function
    showData();
}

// Clear Input Data Function
function clearInputData() 
{
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

// Show Data in Table Function
function showData() 
{
    let table = '';
    for(let i = 0; i < ProductsData.length; i++)
    {
        table += `
            <tr>
                <td>${i + 1}</td>
                <td>${ProductsData[i].title}</td>
                <td>${ProductsData[i].price}</td>
                <td>${ProductsData[i].taxes}</td>
                <td>${ProductsData[i].ads}</td>
                <td>${ProductsData[i].discount}</td>
                <td>${ProductsData[i].total}</td>
                <td>${ProductsData[i].category}</td>
                <td><button id="update" onclick="updateData(${i})">Update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
            </tr>
        `
    }

    document.getElementById('tbody').innerHTML = table;

    //Delete All Button
    if(ProductsData.length > 0)
    {
        btnDeleteAll.innerHTML = 
        `
            <button onclick="deleteAll()">Delete All (${ProductsData.length})</button>
        `
    }
    else
    {
        btnDeleteAll.innerHTML = '';
    }
}
showData();


// Delete Function Implmentaion
function deleteData(i)
{
    //i stand for id that i want to delet it
    ProductsData.splice(i , 1);
    localStorage.product = JSON.stringify(ProductsData);
    //to updata all data after deletion
    showData();
}

// Delete All items Function
function deleteAll() 
{
    localStorage.clear();
    ProductsData.splice(0);
    showData();
}


// Update Data 
function updateData(i)
{
    title.value = ProductsData[i].title;
    price.value = ProductsData[i].price;
    taxes.value = ProductsData[i].taxes;
    ads.value = ProductsData[i].ads;
    discount.value = ProductsData[i].discount;
    category.value = ProductsData[i].category;
    //to trun get total on
    getTotalPrice();
    // Count Function off
    count.style.display = 'none';
    submit.innerHTML = 'Update';
    mood = 'update';
    temp = i;

    //scroll to top
    scroll({
        top: 0,
        behavior: "smooth"
    })
}

// Search Function (Name , Catgory)
function getSearchMood(id)
{
    if(id == 'searchTitle')
    {
        searchMood = 'title';
        search.placeholder = 'Search By Title';
    }
    else
    {
        searchMood = 'category';
        search.placeholder = 'Search By Category';
    }
    search.focus();
    search.value = '';
    showData();
}

function searchData(value)
{
    let table =  '';
    if(searchMood == 'title')
    {
        for(let i = 0 ; i < ProductsData.length; i++)
        {
            if(ProductsData[i].title.includes(value.toLowerCase()))
            {
                table += 
                `
                <tr>
                    <td>${i + 1}</td>
                    <td>${ProductsData[i].title}</td>
                    <td>${ProductsData[i].price}</td>
                    <td>${ProductsData[i].taxes}</td>
                    <td>${ProductsData[i].ads}</td>
                    <td>${ProductsData[i].discount}</td>
                    <td>${ProductsData[i].total}</td>
                    <td>${ProductsData[i].category}</td>
                    <td><button id="update" onclick="updateData(${i})">Update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
                </tr>
                `
            }
        }
    }
    else
    {
        for(let i = 0 ; i < ProductsData.length; i++)
        {
            if(ProductsData[i].category.includes(value.toLowerCase()))
            {
                table += 
                `
                <tr>
                    <td>${i + 1}</td>
                    <td>${ProductsData[i].title}</td>
                    <td>${ProductsData[i].price}</td>
                    <td>${ProductsData[i].taxes}</td>
                    <td>${ProductsData[i].ads}</td>
                    <td>${ProductsData[i].discount}</td>
                    <td>${ProductsData[i].total}</td>
                    <td>${ProductsData[i].category}</td>
                    <td><button id="update" onclick="updateData(${i})">Update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
                </tr>
                `
            }
        }
    }

    document.getElementById('tbody').innerHTML = table;
}