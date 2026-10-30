import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  private clienteService = inject(ClienteService);
  private router = inject(Router);

  private route = inject(ActivatedRoute);

  clienteID: String | null = this.route.snapshot.paramMap.get('id');
  cliente: Cliente = {
    cpf: '',
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    senha: ''
  };

  senha = '';
  confirmarSenha = '';


    ngOnInit(): void {
    if (this.clienteID) {
      this.clienteService.buscarPorID(this.clienteID).subscribe({
        next: (cliente) => {
          this.cliente = cliente;
        },
        error: (error) => {
          console.error('Erro ao buscar cliente:', error);
        }
      });
    }
  }
  salvar() {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    if (this.clienteID) {
      this.clienteService.editar(this.cliente).subscribe({
        next: () => {
          alert(`Cliente ${this.cliente.nome} atualizado com sucesso!`);
          this.router.navigate(['/admin-clientes-listar']);
        },
        error: (error) => {
          console.error('Erro ao atualizar cliente:', error);
        }
      });
    } else {
      this.clienteService.incluir(this.cliente).subscribe({
        next: (cliente) => {
          alert(`Cliente ${cliente.nome} cadastrado com sucesso! com id ${cliente.id}`);
          console.log(cliente);
          this.router.navigate(['/admin-clientes-listar']);
        },
        error: (error) => {
          console.error('Erro ao cadastrar cliente:', error);
        }
      });
    }
  }
}