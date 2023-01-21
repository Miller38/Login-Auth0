import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  listClientes: Cliente[] = []; 

  constructor(private _clienteService: ClienteService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerClientes();      
  }

  obtenerClientes(){
    this._clienteService.getClientes().subscribe(data => {
      console.log(data);
      this.listClientes = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarCliente(id: any){
    this._clienteService.eliminarCliente(id).subscribe(data => {
      this.toastr.error('El cliente fue eliminado con exito', 'Cliente eliminado');
      this.obtenerClientes();
    }, error => {
      console.log(error);
    })
  }

}
