function rectángulo (width, height) {
    this.checkWidth = (width) => {
        if (width > 0 && typeof width == 'number') {
            this.width = width;
        } else {
            this.width = 1;
        }
    },

    this.checkHeight = (height) => {
        if (height > 0 && typeof height == 'number') {
            this.height = height;
        } else {
            this.height = 1;
        }
    },

    this.checkWidth(width),
    this.checkHeight(height),

    this.cambiarDimensiones = (width, height) => {
        this.checkWidth(width);
        this.checkHeight(height);
    },

    this.calcularArea = () => {
        return this.width * this.height;
    },

    this.copia = () => {
        return new rectángulo(width, height);
    },

    this.comparar = (rectángulo) => {
        if (this.calcularArea() > rectángulo.calcularArea()) {
            return 'mayor';
        } else if (this.calcularArea() == rectángulo.calcularArea()) {
            return 'igual';
        } else {
            return 'menor';
        }
    },

    this.mostrarDimensiones = () => {
        return 'Ancho: ' + this.width + ' Altura: ' + this.height;
    }
}

let rec1 = new rectángulo(5, 10);
let rec2 = new rectángulo(3, 8);

console.log(rec1.mostrarDimensiones());
console.log(rec2.mostrarDimensiones());

console.log(rec1.comparar(rec2));
console.log(rec1.calcularArea());

rec1.cambiarDimensiones(-2, 5);
console.log(rec1.mostrarDimensiones());

console.log(rec1.calcularArea());
console.log(rec1.comparar(rec2));

rec3 = rec2.copia();
console.log(rec3.calcularArea());


