export class Cliente{
    _id?: number;
    nombre: string;
    documento: string;
    telefono: string;
    direccion: string;
    ciudad: string;

    constructor(nombre: string, documento: string, telefono: string, direccion: string, ciudad: string ){
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
    }
}