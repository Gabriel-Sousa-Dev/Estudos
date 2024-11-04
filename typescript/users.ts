const usuario:Usuario = {
    id: 5,
    name: 'Gabriel',
    cargo: "Administrador"
    
}

interface Usuario {
    id: number,
    name: string,
    cargo: 'Administrador' | 'Desenvolvedor' | 'Usuário'
}

