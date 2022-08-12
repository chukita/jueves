import { fichaPersona } from "./fichaPersona.js";
export class fichaPersonaMenor extends fichaPersona {
    //c
    constructor(nomr, aper, nom, ape) {
        super(nom, ape);
        this._nr = nomr;
        this._ar = aper;
    }
    //g y s
    //metodos
    completaFicha() {
        var ndom = document.getElementById("fname");
        var adom = document.getElementById("lname");
        var ndomr = document.getElementById("fnamer");
        var adomr = document.getElementById("lnamer");
        var menor = document.getElementById("menor");
        ndom.value = this._n;
        adom.value = this._a;
        ndomr.value = this._nr;
        adomr.value = this._ar;
        menor.style = "display:block";
    }
}
let Persona = new fichaPersonaMenor("Doña", "Spears", "Britney", "Spears");
Persona.completaFicha();
