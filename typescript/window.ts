interface Position{
    x: number,
    y: number
}

class Janela{
    private status: 'minimizado' | 'aberto' | 'fechado'

    private position: Position = {
        x: 0,
        y: 0
    }

    constructor(){
        this.status = 'aberto';
    }

    fechar(){
        this.status = 'fechado';
    }

    abrir(){
        this.status = 'aberto';
    }

    minimizar(){
        this.status = 'minimizado'
    }

    imprimirStatus(){
        console.log(this.status);
    }

    definirPosition(newPosition: Position){
        this.position = newPosition;
    }

    imprimirPosition(){
        console.log(JSON.stringify(this.position, null, 2))
    }

}

let jan = new Janela();

jan.imprimirPosition();

jan.definirPosition({x: 45, y: 60});

jan.imprimirPosition();