import Producto from "./productos.js";

export default class Inventario {
    constructor(tableInventario, tableInfo) {
        this._tableInventario = tableInventario;
        this._tableInfo = tableInfo;
        this._numProductos = 0;

        this._productos = [];

        this._initTables();
    }

    _initTables() {
        let lsProductos = JSON.parse(localStorage.getItem("productos"));

        if (lsProductos == null) {
            return;
        }


        lsProductos.forEach((e, index) => {
            this._addToTable(new Producto(producto));
        });
    }

    _addToTable(producto) {
        let row = this._tableInventario.insertRow(-1);

    let cellnProducto = row.insertCell(0);
    let cellNombre = row.insertCell(1);
    let cellCantidad = row.insertCell(2);
    let cellCosto = row.insertCell(3);

    cellnProducto.innerHTML = producto.nProducto;
    cellNombre.innerHTML = producto.nombre;
    cellCantidad.innerHTML = producto.cantidad;
    cellCosto.innerHTML = employee.costo;

    this._numProductos++;

    this._tableInfo.rows[0].cells[1].innerHTML = this._numProductos;


    let objEmployee = {
      name: employee.name,
      email: employee.email,
      birthday: employee.birthday
    };

    this._employees.push(objEmployee);
  }

  _findProducto(nProducto) {
      let foundAt = -1;

      this._productos.forEach((e, index) => {
          if(e.nProducto === nProducto) {
              foundAt = index;
              return;
          }
      });

      return foundAt;
    }

    addProductos(producto) {
        let found = this.findProducto(producto.nProducto);

        if(found >=0) {
            swal.fire({
                type: "error",
                title: "Error",
                text: "El numero de producto ya fue registrado"
            });
            return;
        }

        this._addToTable(producto);
        localStorage.setItem("producto", JSON.stringify(this._productos));
    }

    

    lessProducto(producto) {
        let found = this.findProducto(producto.nProducto);

        if(found >= 0) {
            
        }
    }
    }