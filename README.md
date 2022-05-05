# CRUDS  System  App

We use CRUD apps every day. Most of the time, without noticing. They keep us organized, they help digitize business processes, and they’re critical to application development

## Overview

A CRUDS app is a specific type of software application that consists of four basic operations; Create, Read, Update, Delete and Search

In this app, the user should be able to:

- Create a Product : Create allows you to **add** new product in **local storage**. If the product does not exist, the create operation adds it to the local storage.
- Read Data : Read is the operation that allows us to see the recipe we just created
- Update Data : Update is the operation that allows us to modify existing data 
- Delete Data : Delete is the operation that allows us to remove Data / Products from a table.
- Search : Search is the operation that allows us to search for a product by title or category

## Screen Shot

![Project UI](https://user-images.githubusercontent.com/77099631/166859696-901492b5-f82f-41fe-beb8-b6eaaf5722c9.PNG)

## My Process

### Built With

- HTML 
- CSS
- JavaScript

### Features

- Get total prices
- Creates products
- Saving data in local storage
- Show data in table
- Update data
- Delete one product or Delete all products
- Search for a product by name or category

### What I learned

#### saving data in local storage

```javascript
localStorage.setItem('product' , JSON.stringify(ProductsData));
```

#### search mood

```javascript
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
```

## Author

- LinkedIn - [Mohamed Dwedar](https://www.linkedin.com/in/mohamed-dwedar)
- Frontend Mentor - [@mohameddwedar689](https://www.frontendmentor.io/profile/mohameddwedar689)
- Twitter - [@Mohamed72812181](https://twitter.com/Mohamed72812181?s=09)

