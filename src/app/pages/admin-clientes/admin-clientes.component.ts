import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/cliente/cliente';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [RouterLink],
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
    this.service.excluir(id ?? 0).subscribe({
      next: () => {
        this.listaClientes = this.listaClientes.filter(cliente => cliente.id !== id);
        console.log('Cliente excluído com sucesso:', id ?? 0);
      },
      error: (error) => {
        console.error('Erro ao excluir cliente:', error);
      }
    });
  }
}