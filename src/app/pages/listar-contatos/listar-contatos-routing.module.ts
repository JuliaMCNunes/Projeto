import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarContatosPage } from './listar-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarContatosPageRoutingModule {}
