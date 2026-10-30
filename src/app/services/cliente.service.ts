import { Injectable, inject } from '@angular/core';
import { Cliente } from '../model/cliente/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ClienteService {

    private API = 'http://localhost:3000/clientes';
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

    buscarPorID(id: String): Observable<Cliente> {
        return this.clienteHttp.get<Cliente>(`${this.API}/${id}`);
    }

    editar(cliente: Cliente): Observable<Cliente> {
        return this.clienteHttp.put<Cliente>(`${this.API}/${cliente.id}`, cliente);
    }



}//fim da classe