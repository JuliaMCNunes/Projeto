import { Component, OnInit } from '@angular/core';
import { ArmazenaContatosService } from 'src/app/services/armazena-contatos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.page.html',
  styleUrls: ['./detalhes-contatos.page.scss'],
})

export class DetalhesContatosPage implements OnInit {

  public contatoSelecionado: any
  public modoEdicao = false
  contatoForm: FormGroup

  constructor(private objDados: ArmazenaContatosService,
              private route: ActivatedRoute,
              private contatoBuilder: FormBuilder,
              private router: Router,
              public alertCtrl: AlertController) { }

  iniciarEdicao(){
    this.modoEdicao = true
  }

  encerrarEdicao(){
    const ID: number = Number(this.route.snapshot.paramMap.get('id'))
    if (ID > 0){
      this.modoEdicao = false}
    else{
      this.objDados.receberDados(this.contatoSelecionado)
      this.modoEdicao = false}
  }

  async showConfirm() {
      const confirm = await this.alertCtrl.create({
        header: 'Quer excluir esse contato?',
        message: 'O contato será excluido permanentemente.',
        buttons: [
          {
            text: 'Não',
            handler: () => {
              console.log('Disagree clicked');}},
          {
            text: 'Sim',
            handler: () => {
              console.log('Agree clicked');
              this.deletarContato();
              this.router.navigate(['/listar-contatos/']);
              }}
            ]
        });
      await confirm.present()
  }

  deletarContato(){
    this.objDados.deletarDados(this.contatoSelecionado)
  }

  ngOnInit() {
    const ID: number = Number(this.route.snapshot.paramMap.get('id'))
    if (ID > 0){
      this.contatoSelecionado = this.objDados.filtrarDados(ID)}
    else{
      this.contatoSelecionado = {ID, nome: "", sobrenome: "", num: "", tiponum: "", email: ""}
      this.modoEdicao = true}

    this.contatoForm = this.contatoBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[a-zA-Z ""]*')])],
      sobrenome: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(15), Validators.pattern('[a-zA-Z ""]*')])],
      num: ['', Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])],
      tiponum: ['', Validators.required],
      email: ['', Validators.email]
      })
  }

}
