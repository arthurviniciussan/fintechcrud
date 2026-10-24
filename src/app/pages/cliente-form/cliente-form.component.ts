import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente/cliente';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
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
    alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);
    console.log(this.cliente);
  }
}