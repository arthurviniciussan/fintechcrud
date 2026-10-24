import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/cliente/cliente';

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent implements OnInit {
  private service = inject(ClienteService);
  listaClientes: Cliente[] = [];

  ngOnInit(): void {
    this.service.listarO().subscribe({
      next: (clientes) => {
        this.listaClientes = clientes;
      }
    });
  }

  editar(id?: number) {
    console.log('Editar cliente:', id ?? 0);
  }

  excluir(id?: number) {
    console.log('Excluir cliente:', id ?? 0);
  }
}