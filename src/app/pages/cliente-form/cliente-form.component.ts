import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

  private clienteService = inject(ClienteService);
  private router = inject(Router);
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

  salvar(): void {
    if (!this.cliente.cpf || !this.cliente.nome || !this.cliente.sobrenome || !this.cliente.dataNascimento || !this.cliente.email || !this.senha || !this.confirmarSenha) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    this.cliente.senha = this.senha;

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