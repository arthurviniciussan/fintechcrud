import { Injectable, inject } from '@angular/core';
import { Cliente } from '../model/cliente/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ClienteService {

    private API = 'https://laughing-umbrella-wr9rpqjvx7jqf5xwq-3000.app.github.dev/clientes';
    private clienteHttp = inject(HttpClient);
    constructor() { }

    listarO(): Observable<Cliente[]> {
        return this.clienteHttp.get<Cliente[]>(this.API);
    }
    incluir(cliente: Cliente): Observable<Cliente> {
        return this.clienteHttp.post<Cliente>(this.API, cliente);
    }

    excluir(id: number): Observable<void> {
        return this.clienteHttp.delete<void>(`${this.API}/${id}`);
    }
    listar(): Cliente[] {
    return [
     {
        id: 1,
        cpf: "12345678910",
        nome: "Enzo",
        sobrenome: "Silva",
        dataNascimento: '2005-01-10',
        email: ''
    },
    {
    id: 2,
    cpf: "10987654321",
    nome: "Valentina",
    sobrenome: "Campos",
    dataNascimento: '2007-08-14',
    email: ''
    },
    ];
 }//fim do listar
}//fim da classe