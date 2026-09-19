import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  itensMenu = [
    { label:'Início', link:'/' },
    { label:'Clientes', link:'/clientes' },
    { label:'Produtos', link:'/produtos' },
    { label:'Sobre', link:'/sobre'},
    { label:'Contas', link:'/contas' }
  ]
}
