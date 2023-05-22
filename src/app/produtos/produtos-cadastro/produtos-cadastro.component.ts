import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/modelo/produto';
import { produtosList } from 'src/app/shared/modelo/produtosList';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.scss']
})
export class ProdutosCadastroComponent {

  produto: Produto;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  produtos = produtosList;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.produto = new Produto();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const produtoEncontrado = this.produtos.find(
        produto => produto.nome === idParaEdicao);
      if (produtoEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.produto = produtoEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  cadastrar(): void {
    if (this.estahCadastrando && this.produto) {
      this.produtos.push(this.produto);
    }
    this.produto = new Produto();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['produtoslistagem']);
  }

}
