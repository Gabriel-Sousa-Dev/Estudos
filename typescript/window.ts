class Janela{
    private status: 'minimizado' | 'aberto' | 'fechado'

    constructor(){
        this.status = 'aberto'
    }

    fecharJanela(){
        this.status = 'fechado';
    }

    abrirJanela(){
        this.status = 'aberto';
    }

    minimizarJanela(){
        this.status = 'minimizado'
    }

    imprimirStatusDaJanela(){
        console.log(this.status);
        
    }
}

let jan = new Janela();

jan.imprimirStatusDaJanela()

jan.minimizarJanela();

jan.imprimirStatusDaJanela()
