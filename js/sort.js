class Product {
    constructor(name,amount,price){
        this.name = name.toUpperCase();
        this.amount=parseInt(amount);
        this.price=parseFloat(price);
    }
}
// Function to Filter the products by name (A-Z), amount (lower to higher) or price (lower to higher)
function filterProducts (list,filterCriteria){
        switch (filterCriteria.toUpperCase()) {
            case "NAME":
                list.sort(function (a,b){
                    if (a.name.toUpperCase() < b.name.toUpperCase()){
                        return -1;
                    } else if (a.name.toUpperCase() > b.name.toUpperCase()){
                        return 1;
                    } else {
                        return 0;
                    }
                })
                break;
            case "AMOUNT":
                list.sort((a,b) => a.amount - b.amount);
                break;
            case "PRICE":
                list.sort((a,b) => a.price - b.price);
                break;
            default:
                console.log("Wrong Filter Criteria");
                break;
        }
}

const productList = [new Product("Fecula de Maiz", "10","100.35"), new Product("Arroz", "30", "80.55"), new Product ("Harina", "20", "45.33"), new Product ("Papas", "100","48.5")];

filterProducts(productList,"price");
console.log(productList);

