---
title: 'Erros de integração de pedidos da Netshoes'
id: 616rbFQyCGEQnkAWFKMmr1
status: PUBLISHED
createdAt: 2021-08-26T16:12:38.158Z
updatedAt: 2023-03-29T23:42:00.113Z
publishedAt: 2023-03-29T23:42:00.113Z
firstPublishedAt: 2021-08-26T16:24:12.608Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-netshoes-integration
locale: pt
legacySlug: erros-de-integracao-de-pedidos-da-netshoes
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Há diversas razões pelas quais um pedido entre um marketplace e sua loja VTEX pode não integrar, e para cada uma delas existe uma notificação que indica a natureza do erro. Você encontra a mensagem de erro no Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**. Para visualizar a mensagem, basta clicar sobre o pedido.

Na Netshoes, há erros de integração de pedidos que ocorrem com mais frequência que outros. Este artigo seleciona os mais comuns e indica como resolvê-los.

#### Mensagem de erro

`Pedido não importado pois o SLA de entrega selecionado para o mesmo não está disponível`

Erros de SLA significam que um fator está inviabilizando a entrega do pedido ao consumidor final. Para identificar a origem do erro e corrigi-lo, confira [Erros de SLA na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).

____

#### Mensagem de erro

`Este pedido possui Produto(s) que não existe(m) na VTEX. Os produtos devem ser integrados pela VTEX para que os pedidos possam ser integrados com sucesso`

Este erro acontece quando um item do pedido foi cadastrado diretamente na plataforma da Netshoes. Mesmo que o item esteja também cadastrado na VTEX, essa duplicação de cadastro faz com que o ID do SKU não seja reconhecido pelo sistema VTEX, e o pedido não é integrado. A solução é deletar o cadastro do item na plataforma Netshoes, e, após se certificar de que o [SKU está cadastrado](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ) no seu ambiente VTEX, reprocessar o pedido manualmente. No seu Admin, no módulo **Marketplace > Conexões > Pedidos**, clique sobre o pedido com erro. Feito isso, o botão **Ações** se torna visível, clique sobre ele e escolha a opção **Reprocessar**.

____

#### Mensagem de erro

`O pedido não pode ser criado. Por favor, tente novamente`

Isso ocorre quando um pedido não recebeu todas as informações necessárias para ser finalizado, o que configura um pedido incompleto. Apesar de, em geral, não ser possível recuperar pedidos incompletos, existe a possibilidade de resolver o erro com um reprocessamento manual. No seu Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**, clique sobre o pedido com erro. Feito isso, o botão **Ações** se torna visível, clique sobre ele e escolha a opção **Reprocessar**. Para entender possíveis causas para este tipo de erro, veja [Como funcionam os pedidos incompletos](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294).

### Saiba mais

- [Erros de falta de estoque na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Erros de SLA na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
- [Resolução de erros de divergência de preço em pedidos de marketplace](https://help.vtex.com/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
