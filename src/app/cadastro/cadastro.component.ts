import { Component, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { BrasilApiService } from '../brasil-api.service';
import { Estado, Municipio } from '../brasilapi.model';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    CommonModule,
    NgxMaskDirective,
    MatSelectModule
],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  cliente: Cliente = Cliente.newCliente()
  atualizar: boolean = false
  snackBar: MatSnackBar = inject(MatSnackBar)
  estados : Estado[] = []
  municipios : Municipio[] = []
  
  constructor(private service: ClienteService, 
              private route: ActivatedRoute,
              private router: Router,
              private brasilApiService: BrasilApiService){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe( (query: any) => 
      {
        const params = query['params']
        const id = params['id']
        if(id){
          const cliente = this.service.obterPorId(id)
          if(cliente){
            this.atualizar = true
            this.cliente = cliente
            if(this.cliente.uf){
              const event = { value: this.cliente.uf } as MatSelectChange
              this.carregarMunicipios(event)
            }
          }
        }
      })
      this.carregarUfs()      
  }

  carregarUfs(){
    this.brasilApiService.carregarUfs().subscribe({
      next: listaEstados => this.estados = listaEstados,
      error: err => this.mostrarMensagem('Erro ao carregar UFs: ' + err)
    })
  }

  carregarMunicipios(event: MatSelectChange){
    const ufSelecionada = event.value
    this.brasilApiService.carregarMunicipios(ufSelecionada).subscribe({
      next: listaMunicipios => this.municipios = listaMunicipios,
      error: err => this.mostrarMensagem('Erro ao carregar municípios: ' + err)
    })
  }

  salvar(){
    if(!this.atualizar){
      this.service.salvar(this.cliente)
      this.cliente = Cliente.newCliente()
      this.mostrarMensagem('Cliente salvo com sucesso!')
    }
    else{
      this.service.atualizar(this.cliente)
      this.router.navigate(['/consulta'])
      this.mostrarMensagem('Cliente atualizado com sucesso!')
    }
  }

  mostrarMensagem(mensagem: string){
    this.snackBar.open(mensagem, 'Ok', {duration: 5000, verticalPosition: 'bottom', horizontalPosition: 'center'})
  }
}
