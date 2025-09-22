import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { Cliente } from '../cadastro/cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulta',
  imports: [
    CommonModule,
    FormsModule,
    MatButton,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatInputModule
],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {
  clientes: Cliente[] = []
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'dataNascimento', 'acoes'];
  nomeBusca: string = ''

  constructor(
    private service: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientes = this.service.pesquisar('');
  }
  
  pesquisarCliente(): void {
    this.clientes = this.service.pesquisar(this.nomeBusca);
  }
  prepararEditar(id: string): void {
    console.log(id);
    this.router.navigate(['/cadastro'], { queryParams: { "id": id } });
  }

  prepararDeletar(cliente: Cliente){
    cliente.deletando = true
  }

  deletar(id: string){
    this.service.deletar(id)
    this.clientes = this.service.pesquisar('');
  }
}
