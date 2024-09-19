
import storeAPI from "./axiosInstance";
export default class Store {
    constructor(name) {
        this.name = name;
        this.snacks = [];
        this.snackCount = 0;
        this.set = false;
        this.findSnack = (itemId) => {
            const snack = this.snacks.find(snack => snack.id === parseInt(itemId));
            if (!snack) {
                window.alert(`Snack with id ${itemId} not found`);
                return;
            }
            return snack;
        }
        this.removeSnack = (itemId) => {
            const snackIndex = this.snacks.findIndex(snack => snack.id === parseInt(itemId));
            if (snackIndex === -1) {
                window.alert(`Snack with id ${itemId} not found`);
                return;
            }
            this.snacks.splice(snackIndex, 1);
        }
        this.addSnack = (newItem) => {
            this.snacks.push(newItem);
            this.snackCount++;
        }
        // Create a function to call the api to set store to set values
        this.setStore = async () => {
            if (this.set) {
                return;
            }
            try {
                const snacks = await storeAPI.get("/snacks");
                this.snacks = snacks.data;
                this.set = true;
            } catch (err) {
                return err
            }
        }
    }
}
