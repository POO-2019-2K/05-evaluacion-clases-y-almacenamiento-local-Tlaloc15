import Inventario from "./Inventario.js";
import Producto from "./productos.js";

class Main {
    constructor() {
        let inventario = new Inventario(
            document.querySelector("#inventario"),
            document.querySelector("info")
        );

        document.querySelector("#btnAdd1").addEventListener("click", () => {
            let form = document.querySelector("form");

            if (form.checkValidity() == true) {
                let nProducto = document.querySelector("nProducto");
                let nombre = document.querySelector("#nombre");
                let cantidad = document.querySelector("#cantidad");
                let costo = document.querySelector("#costo");

                let objProducto = {
                    nProducto: nProducto,
                    nombre: nombre,
                    cantidad: cantidad,
                    costo: costo,
                };

                let producto = new Producto(objProducto);

                inventario.addProducto(producto);
            }
            form.classList.add("was-validated")
        });

    }
}

let m = new Main();

