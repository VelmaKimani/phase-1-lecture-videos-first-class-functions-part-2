let books = [
    {
        title: "Eloquent JavaScript",
        price: 16.00,
        inventory: 5,
    },
    {
        title: "JavaScript: The good parts",
        price: 18.50,
        inventory: 10,
    },
    {
        title: "Learn JavaScript VISUALLY",
        price: 25.00,
        inventory: 2,
    },
    {
        title: "You don\'t know js",
        price: 60.00,
        inventory: 8,
    },
    {
        title: "JavaScript: The Definitive Guide",
        price: 18.95,
        inventory: 0,
    },
];

function printReport(foo){
    console.log(foo(books));
    //totalInventory(books)
    //replenish(books)
}

function totalInventory(array){
    let total = 0;
    for(let item of array){
        total+= item.inventory;
    }
    return `Total Inventory: ${total} items`; //has to be here else returns an undefined
}

function replenish(array){
    let replenishList = [];
    for(item of array){
        if(item.inventory < 3){
            replenishList.push(item.title);
        }
    }
    console.log(replenish);
    return `Place order for: ${replenishList.join(', ')}`;
}

printReport(totalInventory);
printReport(replenish);