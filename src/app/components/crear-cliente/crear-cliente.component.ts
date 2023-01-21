import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  titulo = 'crear cliente';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _clienteService: ClienteService,
    private aRouter: ActivatedRoute) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      documento: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCliente() {

    const CLIENTE: Cliente = {
      nombre: this.clienteForm.get('nombre')?.value,
      documento: this.clienteForm.get('documento')?.value,
      telefono: this.clienteForm.get('telefono')?.value,
      direccion: this.clienteForm.get('direccion')?.value,
      ciudad: this.clienteForm.get('ciudad')?.value,

    }

    if(this.id !== null) {
      // editamos cliente   
      this._clienteService.editarCliente(this.id, CLIENTE). subscribe(data => {
        this.toastr.info('El cliente fue actualizado con exito!', 'Cliente Actualizado!');
        this.router.navigate(['/listar-cliente']);
      }, error => {
        console.log(error);
        this.clienteForm.reset();
      })
      
    } else {
      // agregamos cliente
      console.log(CLIENTE);
      this._clienteService.guardarCliente(CLIENTE).subscribe(data => {
        this.toastr.success('El cliente fue registrado con exito!', 'Cliente Registrado!');
        this.router.navigate(['/listar-cliente']);
  
      }, error => {
        console.log(error);
        this.clienteForm.reset();
      })
    }
  
  }

  esEditar() {

    if (this.id !== null) {
      this.titulo = 'Editar cliente';
      this._clienteService.obtenerCliente(this.id).subscribe(data => {
        this.clienteForm.setValue({
          nombre: data.nombre,
          documento: data.documento,
          telefono: data.telefono,
          direccion: data.direccion,
          ciudad: data.ciudad,
        })
      })

    }
  }
}