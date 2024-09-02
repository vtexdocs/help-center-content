---
title: 'O filtro de gestão de pedidos não encontra resultados para critérios que possuem espaços duplos no nome'
id: 3Z8bOmWhsdFbMX5pMp8wZU
status: PUBLISHED
createdAt: 2022-04-29T20:57:35.619Z
updatedAt: 2022-12-16T18:12:25.119Z
publishedAt: 2022-12-16T18:12:25.119Z
firstPublishedAt: 2022-04-29T20:57:36.100Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: o-filtro-de-gestao-de-pedidos-nao-encontra-resultados-para-criterios-que-possuem-espacos-duplos-no-nome
locale: pt
kiStatus: Backlog
internalReference: 353656
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>





Quando o filtro para seleção de pedidos contém dois critérios e um deles tem dois caracteres de espaço consecutivos em seu nome, nenhum resultado é exibido na lista de pedidos.
Por exemplo, se houver dois critérios de filtragem e o nome de um deles (neste exemplo, um filtro vendedor) contiver dois caracteres de espaço, a busca não encontra nenhum resultado.
Este cenário ocorre quando há dois espaços consecutivos em qualquer um dos filtros existentes.



## Simulação





Para reproduzir este cenário, siga os passos abaixo.

1. Renomear um vendedor, acrescentando dois espaços:

  1. Na Administração, clique em **Vendedores > Administração***;
  2. Selecione um vendedor da lista e clique em `Editar';
  3. Mude o campo **Nome*** adicionando dois espaços em qualquer lugar do nome;
  4. 4. Clique em `Salvar`.
2. Crie uma ordem de teste:

  1. No ambiente da loja (vitrine), selecione um item e adicione-o ao carrinho;
  2. Vá até a caixa e faça o pedido.
3. Vá para **Pedidos > Gestão de pedidos***;
4. Clique em "Todos os pedidos";
5. Use o **filtro*** para selecionar o vendedor cujo nome você mudou;
6. Selecione outro vendedor no filtro;
7. Observe que nenhum pedido é encontrado com os filtros selecionados.

No exemplo dado, o filtro do vendedor foi aplicado. Entretanto, a simulação pode ser realizada com os outros filtros disponíveis, tais como política comercial, promoções, campanhas, operador de televendas, e outros.



## Workaround





Há três soluções possíveis:

- Não utilizar espaços ou caracteres especiais ao nomear os vendedores, promoções e SKUs.
- Exportar todos os pedidos e filtrar o pedido desejado usando o modelo exportado;
- Editando o campo **Nome** do filtro que tem o espaço duplo.

