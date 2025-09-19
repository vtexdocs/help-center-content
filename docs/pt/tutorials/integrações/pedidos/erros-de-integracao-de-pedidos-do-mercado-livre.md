---
title: 'Erros de integração de pedidos do Mercado Livre'
id: 4w4jAIWUy3OELgu3HFmGgh
status: PUBLISHED
createdAt: 2021-08-30T18:04:27.780Z
updatedAt: 2023-08-04T18:43:32.189Z
publishedAt: 2023-08-04T18:43:32.189Z
firstPublishedAt: 2021-08-30T18:37:05.901Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-mercado-livre-integration
legacySlug: erros-de-integracao-de-pedidos-do-mercado-livre
locale: pt
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Há diversas razões pelas quais um pedido entre um marketplace e sua loja VTEX pode não integrar, e para cada uma delas existe uma notificação que indica a natureza do erro. Você encontra a mensagem de erro no Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**. Para visualizar a mensagem, basta clicar sobre o pedido.

No Mercado Livre, há erros de integração de pedidos que ocorrem com mais frequência que outros. Este artigo seleciona os mais comuns e indica como resolvê-los.

#### Mensagem de erro

`Pedido não importado pois o SLA de entrega selecionado para o mesmo não está disponível`

Erros de SLA significam que um fator está inviabilizando a entrega do pedido ao consumidor final. Para identificar a origem do erro e corrigi-lo, confira [Erros de SLA na integração de pedidos de marketplace](/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).

____

#### Mensagem de erro

`O campo Documento no perfil do cliente é inválido`

A informação de cadastro de CPF não foi enviada para o Mercado Livre, ou foi preenchida incorretamente. Sem o reconhecimento deste dado pela VTEX, o pedido não é integrado. É necessário entrar em contato com o marketplace e ajustar a informação.

____

#### Mensagem de erro

`Seller.unable_to_list (information)`

Estes erros sinalizam que algum dado cadastral está faltando ou foi preenchido fora dos padrões aceitos pelo Mercado Livre. O tipo de informação a ser corrigida aparece na própria mensagem. Por exemplo, _seller.unable_to_list phone_pending_ indica que é o contato telefônico que precisa ser atualizado. Entre em contato com o Mercado Livre para ajustar seus dados cadastrais.

____

#### Mensagem de erro

`Order with SKU out of stock`

Há diversas causas para erros relacionados à falta ou insuficiência de estoque. Para identificar a origem do erro e corrigi-lo, confira [Erros de falta de estoque na integração de pedidos de marketplace](/pt/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP).

____

#### Mensagem de erro

`Order with SKU inactive or out of sales channel`

Somente pedidos de SKUs ativos são integrados, portanto, verifique o _status_ do item no seu Admin VTEX, no módulo **Catálogo > Produtos e SKUs**. É possível ativar o SKU ao [Preencher campos de cadastro de SKU](/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY), ou [Ativar SKUs em massa](/pt/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY).

Se os SKUs do pedido estiverem ativos, isso significa que o problema é os SKUs não estarem vinculados à política comercial usada no Mercado Livre. Neste caso, é necessário [associar o SKU à política comercial](/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

____

#### Mensagem de erro

`Taxes are diferents from store desired values`

Se o preço de um produto no Mercado Livre for diferente daquele configurado na plataforma VTEX, o pedido não será integrado. Para identificar a origem do erro e corrigi-lo, confira [Resolução de erros de divergência de preço em pedido de marketplace](/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8).

____

#### Mensagem de erro

`Error validating grant. Your authorization code or refresh token may be expired or it was already used`

Esta mensagem sinaliza que o _token_ usado na integração está expirado ou desativado. A solução é entrar em contato com o Mercado Livre e refazer o processo de autorização da integração.

### Saiba mais

- [Integração com o Mercado Livre](/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq)
- [Mercado Livre: FAQ](/pt/tutorial/mercado-livre-faq--3w4IgSgKZOocGee8cgSWW0)
- [Erros de falta de estoque na integração de pedidos de marketplace](/pt/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Erros de SLA na integração de pedidos de marketplace](/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
- [Resolução de erros de divergência de preço em pedidos de marketplace](/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
