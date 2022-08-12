import { fichaPersona } from "./fichaPersona.js";

export class fichaPersonaMenor extends fichaPersona{
    //p
    private _nr:string;
    private _ar:string;
    //c
    constructor(nomr:string,aper:string,nom:string,ape:string){
        super(nom,ape)
        this._nr = nomr;
        this._ar = aper;
    }


    //g y s

    //metodos
    completaFicha(){
        var ndom:any = document.getElementById("fname");
        var adom:any = document.getElementById("lname");
        var ndomr:any = document.getElementById("fnamer");
        var adomr:any = document.getElementById("lnamer");

        var menor:any = document.getElementById("menor");

        ndom.value = this._n;
        adom.value = this._a;

        ndomr.value = this._nr;
        adomr.value = this._ar;

        menor.style = "display:block";
    }
}


let Persona = new fichaPersonaMenor("Doña","Spears","Britney","Spears");

Persona.completaFicha();