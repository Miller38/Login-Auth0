import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'http://localhost:4000/api/clientes/';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarCliente(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarCliente(cliente: Cliente): Observable<any>{
    return this.http.post(this.url, cliente);
  }

  obtenerCliente(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarCliente(id: string, cliente: Cliente): Observable<any>{
    return this.http.put(this.url + id, cliente);
  }
}
