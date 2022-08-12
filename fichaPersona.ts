/*var ndom:any = document.getElementById("fname");
var adom:any = document.getElementById("lname");

ndom.value = "Juan";
adom.value = "Perez";*/

export class fichaPersona{

    //propiedades
    protected _n:string;
    protected _a:string;

    //constructor

        constructor(nom:string,ape:string){
            this._n = nom;
            this._a = ape;
        }

    //getters y setters



    //metodos

    completaFicha(){
        var ndom:any = document.getElementById("fname");
        var adom:any = document.getElementById("lname");

        ndom.value = this._n;
        adom.value = this._a;
    }

}

