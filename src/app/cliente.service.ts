import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  static REPO_CLIENTES = '_CLIENTES'

  constructor() { }

  salvar(cliente: Cliente){
    const storage = this.obterStorage()
    storage.push(cliente)

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage))
  }

  pesquisar(nome: string): Cliente[] {
    const storage = this.obterStorage();
    if(nome || nome.trim().length != 0){
      return storage.filter(cliente => cliente.nome?.indexOf(nome) !== -1);
    }
    return storage;    
  }

  obterStorage() : Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES)
    if(repositorioClientes){
      const clientes: Cliente[] = JSON.parse(repositorioClientes)
      return clientes
    }

    const clientes: Cliente[] = []
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes))
    return clientes
  }
}
