class Item {
    static lastId = 0;
    // static é utilizado para representar uma variavel de class, onde, mesmo a class não tendo acesso ao back-end pra saber qual foi o id anteiror, esse tipo de variavel faz com que o objeto Item consiga ter essa informação
    constructor(text) {
        this.id = Item.lastId++;
        this.text = text;
        this.done = false;
    }
}

export default Item;
