---
title: 'Criar cupons de desconto'
id: 6RU676Ot6K15ZT1aJA8NRW
status: CHANGED
createdAt: 2020-01-13T21:02:16.828Z
updatedAt: 2020-11-27T19:40:30.513Z
publishedAt: 2020-02-13T16:36:15.347Z
firstPublishedAt: 2020-01-14T13:10:26.077Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: criar-cupons-de-desconto
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugPT: promocoes
---

O cupom é um código informado pelo cliente no carrinho, concedendo um desconto sobre o valor da compra.

Todo cupom é criado pela própria loja no módulo de Taxas & Promoções.

Há duas maneiras de criar um cupom:
- Por meio da seção Cupons.
- Diretamente durante a criação de uma Promoção Regular.

Aqui vamos ver o primeiro cenário.

### Criar cupom por meio da seção Cupons

Para criar um cupom de desconto, siga os passos abaixo:

1. Acesse o módulo Taxas & Promoções.
2. Clique na opção **Cupons**.
3. Clique em **Novo Cupom**.
4. Crie um código para o cupom (por exemplo: `NATAL2020`).
5. Crie uma utm_source (para rastreamento de origem) e/ou uma utm_campaign (para rastreamento de campanha).
6. Clique em **Restrições e limitações de uso** e defina a quantidade de produtos que podem ser comprados por meio deste cupom, independente de quantas compras sejam realizadas para atingir esse número.
7. Clique no botão **Salvar**.

<div class="alert alert-info">
Não é necessário criar uma <code>utm_source</code> e uma <code>utm_campaign</code>. Mas é necessário criar <b>pelo menos uma</b> delas.<br>
Veja o artigo <a href="https://help.vtex.com/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium">O que são utm_source, utm_campaign e utm_medium</a> para entender melhor o que são essas UTMs.
</div>

No momento de criação de uma promoção regular, você deve selecionar a flag `utm_source` e/ou `utm_campaign` e inserir nos campos correspondentes as UTMs informadas durante a criação do cupom.
