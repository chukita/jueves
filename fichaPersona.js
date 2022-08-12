/*var ndom:any = document.getElementById("fname");
var adom:any = document.getElementById("lname");

ndom.value = "Juan";
adom.value = "Perez";*/
export class fichaPersona {
    //constructor
    constructor(nom, ape) {
        this._n = nom;
        this._a = ape;
    }
    //getters y setters
    //metodos
    completaFicha() {
        var ndom = document.getElementById("fname");
        var adom = document.getElementById("lname");
        ndom.value = this._n;
        adom.value = this._a;
    }
}
