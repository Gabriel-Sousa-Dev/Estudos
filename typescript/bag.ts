class Bag<T>{
    items: T[] = []

    showItems(){
        console.log(JSON.stringify(this.items, null, 2));
    }

    addItem(newItem: T){
        this.items.push(newItem);
    }

    searchOneItemForKey(searchTerm: string, attribute: string){
        const valueFound = this.items.find((item) => {
            return item[attribute] === searchTerm;
        })

        return valueFound;
    }
}

type Objects = {
    name: string,
    description: string
}

let myBag = new Bag<Objects>();

myBag.addItem({
    name: 'Boneco do Quincy',
    description: 'Boneco que ganha valor exponencialmente ao longo da partida'
});

myBag.addItem({
    name: 'Tristeza',
    description: 'O que tudo possuem mas a maioria a omiti'
});

myBag.showItems();

let found1 = myBag.searchOneItemForKey('Boneco do Quincy', 'name');

let found2 = myBag.searchOneItemForKey('Boneco do QuincY', 'name');

console.log(found1, found2);

