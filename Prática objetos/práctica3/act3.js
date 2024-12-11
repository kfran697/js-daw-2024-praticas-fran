class Ordenador {
    constructor (marca, modelo, ram = 4, capacidad = 250, pulgadas = 17) {
        this.marca = marca;
        this.modelo = modelo;
        this.setRAM(ram);
        this.setCapacidad(capacidad);
        this.setPulgadas(pulgadas);
    }

    setRAM (ram) {
        if (typeof ram == 'number' && ram > 0) {
            this.ram = ram;
        } else {
            this.ram = 4;
        } 
    }

    setCapacidad (capacidad) {
        if (typeof capacidad == 'number' && capacidad > 0) {
            this.capacidad = capacidad;
        } else {
            this.capacidad = 250;
        } 
    }

    setPulgadas (pulgadas) {
        if (typeof pulgadas == 'number' && pulgadas > 0) {
            this.pulgadas = pulgadas;
        } else {
            this.pulgadas = 17; 
        } 
    }

    toString () {
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nRAM: ${this.ram}GB\nCapacidad: ${this.capacidad}GB\nPulgadas: ${this.pulgadas}"`;
    }
}

// 1ª comprobación
let ordenador = new Ordenador('HP', 'Pavilion');
console.log(ordenador.toString());

console.log('-');

class Portatil extends Ordenador {
    constructor (marca, modelo, ram = 4, capacidad = 256, pulgadas = 12, autonomia = 4) {
        super(marca, modelo, ram, capacidad, pulgadas);
        this.setAutonomia(autonomia);
    }

    setAutonomia (autonomia) {
        if (typeof this.autonomia == 'number' && autonomia > 0) {
            this.autonomia = this.autonomia;
        } else {
            this.autonomia = 4;
        }
    }

    setCapacidad (capacidad) {
        if (typeof capacidad == 'number' && capacidad > 0) {
            this.capacidad = capacidad;
        } else {
            this.capacidad = 256;
        } 
    }

    setPulgadas (pulgadas) {
        if (typeof pulgadas == 'number' && pulgadas > 0) {
            this.pulgadas = pulgadas;
        } else {
            this.pulgadas = 12; 
        } 
    }

    toStringPortatil () {
        return this.toString() + `\nAutonomía: ${this.autonomia}h`;
    }
}

// 2ª comprobación
let portatil = new Portatil('Lenovo', 'ThinkPad', 8, 512, 14, 6);
console.log(portatil.toStringPortatil());