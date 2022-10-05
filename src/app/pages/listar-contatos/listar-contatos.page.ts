import { Component, OnInit } from '@angular/core';
import { ArmazenaContatosService } from 'src/app/services/armazena-contatos.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.page.html',
  styleUrls: ['./listar-contatos.page.scss'],
})

export class ListarContatosPage implements OnInit {

  public dadosContatos: any

  constructor(private objDados: ArmazenaContatosService) { this.dadosContatos = objDados.enviarDados() }

  ngOnInit() {
  }

}
