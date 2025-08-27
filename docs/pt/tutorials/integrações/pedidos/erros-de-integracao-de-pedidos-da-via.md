---
title: 'Erros de integração de pedidos da Via'
id: 4JYKSqNNBO6OsSCylw3fAO
status: PUBLISHED
createdAt: 2021-08-17T21:03:43.699Z
updatedAt: 2023-03-29T23:10:37.741Z
publishedAt: 2023-03-29T23:10:37.741Z
firstPublishedAt: 2021-08-17T21:15:23.028Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-via-integration
legacySlug: erros-de-integracao-de-pedidos-da-via
locale: pt
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Há diversas razões pelas quais um pedido entre um marketplace e sua loja VTEX pode não integrar, e para cada uma delas existe uma notificação que indica a natureza do erro. Você encontra a mensagem de erro no Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**. Para visualizar a mensagem, basta clicar sobre o pedido.

Na Via, há erros de integração de pedidos que ocorrem com mais frequência que outros. Este artigo seleciona os mais comuns e indica como resolvê-los.

#### Mensagens de erro

`O SLA selecionado não está disponível`<br>
</br> `Nenhum SLA disponível para entregar esse(s) SKU(s).`

Erros de SLA significam que um fator está inviabilizando a entrega do pedido ao consumidor final. Para identificar a origem do erro e corrigi-lo, confira [Erros de SLA na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).

____

#### Mensagem de erro

`Os skus estão inativos ou fora da política comercial`

Somente pedidos de SKUs ativos são integrados, portanto, verifique o _status_ do item no seu Admin VTEX, em **Catálogo > Produtos e SKUs**. É possível ativar o SKU ao [Preencher campos de cadastro de SKU](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY), ou [Ativar SKUs em massa](https://help.vtex.com/pt/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY).

____

#### Mensagem de erro

`Total do pagamento é diferente do pretendido pela loja`

Se o preço de um produto na Via for diferente daquele configurado na plataforma VTEX, o pedido não será integrado. Para identificar a origem do erro e corrigi-lo, confira [Resolução de erros de divergência de preço em pedido de marketplace](https://help.vtex.com/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8).

____

#### Mensagem de erro

`O campo Documento no perfil do cliente é inválido`

A informação de cadastro de CPF deixou de ser enviada para a Via, ou foi preenchida incorretamente. Sem o reconhecimento deste dado pela VTEX, o pedido não é integrado. É necessário entrar em contato com o marketplace e ajustar a informação.

____

#### Mensagem de erro

`Order with SKU out of stock`

Há diversas causas para erros relacionados à falta ou insuficiência de estoque. Para identificar a origem do erro e corrigi-lo, confira [Erros de falta de estoque na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP#). 

____

#### Mensagem de erro

`Não é possível integrar um pedido composto por skus inexistentes na loja`

Este erro ocorre quando o SKU do pedido não é identificado na plataforma VTEX. Isso pode acontecer porque o item foi removido e não existe mais no catálogo, ou porque a Via forneceu uma informação incorreta. Portanto, se o SKU constar normalmente no sistema, entre em contato com o marketplace.

____

#### Mensagem de erro

`Order with SKU without the correct price`

Existem duas razões pelas quais este erro pode estar ocorrendo. A primeira é algum problema com o [preço do SKU](https://help.vtex.com/pt/tutorial/alteracao-de-preco-de-sku--tutorials_95). Se nenhuma inconsistência for identificada quanto a isso, trata-se de um problema com o estoque. Neste caso, confira [Erros de falta de estoque na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP#).

____

#### Mensagem de erro

`O pedido com marketplace id {XXX} para o afiliado {XXX} já está cancelado e não pode ser recriado`

O cancelamento de um pedido na VTEX pode ser feito pelo Admin VTEX ou diretamente pelo consumidor. No entanto, uma vez que um pedido é cancelado, não é mais possível alterar seu _status_, portanto, não há uma solução para este tipo de erro. Caso deseje mais informações sobre o que ocasionou o cancelamento, consulte [Por que meu pedido foi cancelado?](https://help.vtex.com/pt/faq/por-que-meu-pedido-foi-cancelado--frequentlyAskedQuestions_493).

### Saiba mais

- [Erros de falta de estoque na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Erros de SLA na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
- [Resolução de erros de divergência de preço em pedidos de marketplace](https://help.vtex.com/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
- [Integração com a Via Varejo](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY)
