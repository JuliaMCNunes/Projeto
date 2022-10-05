import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarContatosPageRoutingModule } from './listar-contatos-routing.module';

import { ListarContatosPage } from './listar-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarContatosPageRoutingModule
  ],
  declarations: [ListarContatosPage]
})
export class ListarContatosPageModule {}
