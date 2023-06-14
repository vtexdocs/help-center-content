---
title: 'Prateleira Infinita'
id: 40KMlmGI5tN0r0KPCDWgGn
status: PUBLISHED
createdAt: 2020-06-30T21:32:21.143Z
updatedAt: 2023-05-31T15:34:48.839Z
publishedAt: 2023-05-31T15:34:48.839Z
firstPublishedAt: 2020-06-30T21:36:39.077Z
contentType: trackArticle
productTeam: Shopping
slug: prateleira-infinita
locale: pt
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugPT: estrategias-de-comercio-unificado
---

Prateleira Infinita é a possibilidade de o cliente final comprar produtos em um canal (geralmente, uma loja física) ainda que esses produtos não existam no estoque desse canal. O pedido pode ser fechado porque a loja consegue acessar o catálogo compartilhado por todos os estoques e lojas físicas da marca, e a entrega pode ser realizada a partir de qualquer um desses estoques.

Esse é um conceito básico de estratégias Omnichannel, e essencial para a real uma experiência de Unified Commerce, uma vez que  a disponibilidade no estoque local deixa de ser um impedimento para o fechamento de compra, removendo barreiras na interação com o cliente final - elevando sua taxa de conversão - e unificando toda a gestão desse processo em um único sistema.

## Pré-requisitos

Antes de mais nada, verifique os pré-requisitos que sua loja precisa garantir para iniciar a implementação de uma estratégia de Prateleira Infinita. Para isso, confira o artigo [Pré-requisitos para usar o VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u "Pré-requisitos para usar o VTEX Sales App").

## Cadastrar lojas físicas no VTEX Sales App

Para implementar uma estratégia de Prateleira Infinita, você deve cadastrar suas lojas físicas na plataforma da VTEX.

Para isso, siga os passos do artigo [Adicionar novos vendedores e lojas ao VTEX Sales App](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN).

Um ponto de atenção importante no cadastro de uma nova loja é a [Política Comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) aplicada a essa loja. É ela que define qual sortimento de produtos serão válidos para a loja.

Se a Política Comercial principal da loja também é usada para vender em marketplaces, você deve usar uma Política Comercial diferente para o VTEX Sales App. Se não fizer isso, os métodos de pagamento `Direct Selling Debit` e `Direct Selling Credit`, configurados para o VTEX Sales App, também serão exibidos no checkout dos marketplaces.

Se, por outro lado, sua loja usar uma Política Comercial dedicada ao VTEX Sales App, certifique-se de que:
- Seus produtos têm preços definidos para essa Política Comercial dedicada.
- A Política Comercial dedicada consta no cadastro dos produtos que deveriam servir à loja onde o VTEX Sales App será usado.

Os campos de Conta-franquia e Ponto de Retirada, no cadastro da loja, somente devem ser preenchidos caso você deseje trabalhar com retirada de produtos nas lojas físicas. Se este for o seu caso, leia também o guia [Configurar Seller White Label como Ponto de Retirada (Pickup Point)](https://help.vtex.com/pt/tutorial/configurar-seller-white-label-ponto-de-retirada-pickup-point--6fSUE2O0taaoKieAaiuc4e).

Quando terminar de preencher os dados da loja, clique no botão `Salvar`.
