
/*Store class that takes 5 parameters
{string} name: Name of snack
{string} description
{float} price: Cost of item
{string} catagory: Catagory of the snack
{bool} inStock: Shows if item is snack
{int} count: Amount of the snack in stock
{int} id: Id of snack
*/
class Snack {
    constructor(name = '', description = '', price = '0.00', category = '', inStock = false, count = 0, id = 0) {
        this.id = parseInt(id);
        this.name = name;
        this.description = description;
        this.price = parseFloat(price).toFixed(2);
        this.category = category;
        this.inStock = inStock;
        this.count = parseInt(count);
        this.updateSnack = (updatedSnack) => {
            this.name = updatedSnack.name;
            this.description = updatedSnack.description;
            this.price = parseFloat(updatedSnack.price).toFixed(2);
            this.category = updatedSnack.category;
            this.instock = updatedSnack.instock;
            this.count = parseInt(updatedSnack.count);
        }
        this.takeSome = (amount) => {
            let newCount = this.count - amount;
            if (newCount < 0) {
                window.alert(`Can only take ${this.count}`)
            } else if (newCount == 0) {
                this.count = 0;
                this.instock = false;
            } else {
                this.count = newCount;
            }
        }
        this.addMore = (amount) => {
            if (amount <= 0) {
                window.alert(`Amount can not be less than or equal to 0`)
            }
            this.count += amount;
        }

    }
}

export { Snack };