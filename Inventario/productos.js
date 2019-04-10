export default class Productos{
    constructor(producto){
        this._nProducto = producto.nProducto;
        this._nombre = producto.nombre;
        this._cantidad = producto.cantidad;
        this._costo = producto.costo;

    }

    get nProducto(){
        return this._nProducto;
    }

    get nombre(){
        return this._nombre;
    }

    get cantidad(){
        return this._cantidad;
    }

    get costo(){
        return this._costo;
    }
}