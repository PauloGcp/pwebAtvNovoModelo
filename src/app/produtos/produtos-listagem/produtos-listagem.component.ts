import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/modelo/produto';
import { produtosList } from 'src/app/shared/modelo/produtosList';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.scss']
})
export class ProdutosListagemComponent {

  produtosList = produtosList;

  excluir(produtoARemover: Produto): void {
    const index = this.produtosList.findIndex(produto =>
      produto.nome === produtoARemover.nome);

    this.produtosList.splice(index, 1);
  }


}
