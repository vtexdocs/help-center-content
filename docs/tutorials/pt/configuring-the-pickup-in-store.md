---
title: 'Configurar a retirada na loja (Pickup Store)'
id: frequentlyAskedQuestions_153
status: DRAFT
createdAt: 2019-01-24T20:45:50.866Z
updatedAt: 2020-12-03T15:23:21.852Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:01:24.853Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-configurar-a-retirada-na-loja-pickup-store
locale: pt
legacySlug: como-configurar-a-retirada-na-loja-pickup-store
subcategory: 1c5Btie9ou2Gg2iUo0ggqM
---

<div class="alert alert-danger">
Este artigo está obsoleto. Para configurar corretamente o ponto de retirada, acesse o artigo <a href="https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points">Configurar Pontos de Retirada (Pickup Points)</a>
</div>

A configuração de retirada na loja possibilita ao cliente a escolha de não receber o produto em casa, e sim, ir buscá-lo em uma loja. Com os passos abaixo, é possível dar ao cliente a opção da escolha da loja que deseja retirar sua compra no checkout, durante o fluxo de compra. A configuração é realizada em 3 módulos diferentes da plataforma, descritos abaixo.

## Logística

1. Cadastre, em logistics, uma transportadora para cada loja física em que o cliente pode retirar suas compras.
2. Na planilha de frete dessas transportadoras, lembre-se de disponibilizar todos os CEPs de clientes que podem buscar produtos na loja. Não necessariamente eles seriam atendidos pela entrega, mas podem buscar pedidos.
3. Para essas transportadores, é recomendado que não se cobre valor de frete.
4. Após criadas todas as  transportadoras, é preciso criar uma transportadora com o nome genérico de _Retirada no local _a qual será usada na programação do front-end da loja (na opçao de seleção de frete).

![](https://images.contentful.com/alneenqid6w5/1aPl4HkPD8IagOICkCuigu/185dffc5b9bfd322697b6bf7ae0e7942/1.jpg)

## Customização visual (Front-end)

Deverá ser implementado um arquivo _javascript_ no checkout da loja, de acordo com as orientações abaixo.

1. O usuário fará a compra normal dos produtos até a página de checkout.
2. Após o preenchimento dos dados pessoais, o usuário chega na área de seleção da transportadora. O comportamento da ferramenta normalmente é de apresentar todas as transportadoras disponíveis configuradas. Portanto após configuradas, o _javascript_ deverá “esconder” as opções das lojas disponíveis e apresentar apenas a transportadora genérica que foi criada no ponto 4 acima chamada de **Retirada no local** (ou Retirada en Sucursal &#8211; espanhol).![OpcoesdeEnvio](https://images.contentful.com/alneenqid6w5/3YpLqm1q2ckOm4i4g8KWAQ/edc9d9ff1e32352306c1b152c12997e7/OpcoesdeEnvio.png)
3. Quando o usuário selecionar a opção de retirada no local (retirada en surcursal), o JavaScript abre um lightbox apresentando na tela as opções de lojas para o usuário selecionar. As opções que aparecem aqui são as transportadoras cadastradas no admin nos passos 1 e 2. A imagem abaixo mostra como a loja optou por apresentar visualmente a seleção das lojas para retirada.![](https://images.contentful.com/alneenqid6w5/XZ0kevBW6sEK2sGKsYsGm/84c5681cf6c9cf923e90d337d3a727d8/3.jpg)
4. Quando o usuário escolhe alguma das opções, o _javascript _fecha o _lightbox_ e retorna para a opção de seleção de frete, informando que a seleção foi salva com sucesso.![](//assets.contentful.com/alneenqid6w5/4ekRwP5Hy0yE8ckaWGCAQG/b358a05721f4ce0cc0221fd6eb0ff955/4.bmp)
5. Após esse retorno da seleção, o _javascript _deve alterar a opção de entrega genérica pela opção real da loja cadastrada, esta que até então, não estava visível no front-end.![](https://images.contentful.com/alneenqid6w5/3DlztWQIEUOqoomMeA8yiq/15f3ffa1fe1a10d004ab0c13938ec7fe/5.jpg)
6. Após essa área de seleção, o cliente segue o fluxo normal de compra.

_Insira uma legenda informando em quantos dias o pedido estará disponível para busca na loja física._

## Pedidos

No OMS será possível visualizar o pedido do cliente, ao qual irá constar qual loja ele selecionou para retirar o pedido. Essa informação você pode encontrar na área em que os produtos são apresentados.

![](https://images.contentful.com/alneenqid6w5/5LIVnwfutq826ciMOOcmUQ/6b1e5180ff186b6199460eb0d7a456c2/6.jpg)

Lembre-se! O desenvolvimento do javascript necessário para este cenário deve ser desenvolvido pela equipe de desenvolvimento da loja ou por um de nossos [parceiros certificados](http://store.vtex.com "parceiros certificados").
