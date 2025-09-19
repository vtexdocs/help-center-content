---
title: 'Erros de integração de pedidos do Magazine Luiza'
id: 7j5iw0eqtZOfC5LDgSnkBa
status: PUBLISHED
createdAt: 2021-08-10T21:10:16.895Z
updatedAt: 2023-03-29T23:39:16.700Z
publishedAt: 2023-03-29T23:39:16.700Z
firstPublishedAt: 2021-08-10T21:29:47.059Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-magazine-luiza-integration
legacySlug: erros-de-integracao-de-pedidos-do-magazine-luiza
locale: pt
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Há diversas razões pelas quais um pedido entre um marketplace e sua loja VTEX pode não integrar, e para cada uma delas existe uma notificação que indica a natureza do erro. Você encontra a mensagem de erro no Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**. Para visualizar a mensagem, basta clicar sobre o pedido.

No Magazine Luiza, há erros de integração de pedidos que ocorrem com mais frequência que outros. Este artigo seleciona os mais comuns e indica como resolvê-los.

#### Mensagens de erro

`Não foi possível localizar o SLA de entrega no Marketplace`<br>
</br>`O SLA selecionado para o item não está disponível`

Erros de SLA significam que um fator está inviabilizando a entrega do pedido ao consumidor final. Para identificar a origem do erro e corrigi-lo, confira [Erros de SLA na integração de pedidos de marketplace](/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).

____

#### Mensagens de erro

`O campo Documento no perfil do cliente é inválido`<br>
</br>`O campo Telefone no perfil do cliente é inválido`

Uma informação incorreta ou fora do padrão foi enviada para o Magazine Luiza, e sem o reconhecimento deste dado pela VTEX, o pedido não é integrado. É necessário entrar em contato com o marketplace e ajustar a informação, seja ela o documento CPF ou seu contato telefônico.

____

#### Mensagem de erro

`Os skus estão inativos ou fora da política comercial`

Somente pedidos de SKUs ativos são integrados, portanto, verifique o _status_ do item no seu Admin VTEX, no módulo **Catálogo > Produtos e SKUs**. É possível ativar o SKU ao [Preencher campos de cadastro de SKU](/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY), ou [Ativar SKUs em massa](/pt/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY). 

Se os SKUs do pedido estiverem ativos, isso significa que o problema é os SKUs não estarem vinculados à política comercial usada no Magalu. Neste caso, é necessário [associar o SKU à política comercial](/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

____

#### Mensagem de erro

`Os skus não possuem estoque suficiente para integrar o pedido`

Há diversas causas para erros relacionados à falta ou insuficiência de estoque. Para identificar a origem do erro e corrigi-lo, confira [Erros de falta de estoque na integração de pedidos de marketplace](/pt/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP).

____

#### Mensagem de erro

`Tempo de limite para retry alcançado`

Este erro significa que o pedido ultrapassou o tempo máximo para tentativas de integração e, portanto, não será mais integrado. Este período limite é de 30 dias, contados a partir da criação do pedido.

____

#### Mensagem de erro

`Total do pagamento é diferente do pretendido pela loja`

Se o preço de um produto no Magalu for diferente daquele configurado na plataforma VTEX, o pedido não será integrado. Para identificar a origem do erro e corrigi-lo, confira [Resolução de erros de divergência de preço em pedido de marketplace](/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8).

### Saiba mais

- [Erros de falta de estoque na integração de pedidos de marketplace](/pt/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Erros de SLA na integração de pedidos de marketplace](/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
- [Resolução de erros de divergência de preço em pedidos de marketplace](/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
