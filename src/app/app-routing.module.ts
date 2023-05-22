import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantemUsuarioComponent } from './usuario/mantem-usuario/mantem-usuario.component';
import { ListagemUsuariosComponent } from './usuario/listagem-usuarios/listagem-usuarios.component';
import { ProdutosListagemComponent } from './produtos/produtos-listagem/produtos-listagem.component';
import { ProdutosCadastroComponent } from '../app/produtos/produtos-cadastro/produtos-cadastro.component';


const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'produtoscadastro',
    component: ProdutosCadastroComponent
  },
  {
    path: 'produtosedita/:id',
    component: ProdutosCadastroComponent
  },
  {
    path: 'produtoslistagem',
    component: ProdutosListagemComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
