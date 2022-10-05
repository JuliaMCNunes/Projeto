import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArmazenaContatosService {

  private contatos = [
    {id: 1, nome: 'Ana', sobrenome: 'Cijani', num: '(035) 99205-7846', tiponum: 'Celular', email: 'anabanana@gmail.com'},
    {id: 2, nome: 'Felipe', sobrenome: 'Cijani', num: '(035) 99185-8796', tiponum: 'Celular', email: 'fefu.cijani@gmail.com'},
    {id: 3, nome: 'Lia',  sobrenome: 'Cijani', num: '(035) 99139-2603', tiponum: 'Celular', email: 'eliete01@gmail.com'},
    {id: 4, nome: 'Paulo',  sobrenome: 'Nunes', num: '(035) 99203-6652', tiponum: 'Celular', email: 'roberto.nunes@gmail.com'}
  ]

  constructor() { }

  enviarDados(){
    return this.contatos
  }

  filtrarDados(id){
    const selecao = this.contatos.filter(contato => contato.id === id)
    return selecao[0]
  }

  receberDados(dadosRecebidos: any){
    dadosRecebidos.id = this.contatos.length + 1
    this.contatos.push(dadosRecebidos)
  }

  deletarDados(dadosRecebidos: any){
    this.contatos.splice(this.contatos.indexOf(dadosRecebidos), 1)
  }
}
