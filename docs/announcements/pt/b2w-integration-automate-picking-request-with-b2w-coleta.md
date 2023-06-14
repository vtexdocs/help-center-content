---
title: 'Integração B2W: automatize a solicitação de picking com a B2W Coleta'
id: 3yRXLH2Zc7dIOPwVWmYz26
status: CHANGED
createdAt: 2019-11-01T17:10:58.783Z
updatedAt: 2020-11-27T19:40:29.236Z
publishedAt: 2019-12-31T15:13:42.979Z
contentType: updates
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: integracao-b2w-automatize-a-solicitacao-de-picking-com-a-b2w-coleta
legacySlug: integracao-b2w-automatize-a-solicitacao-de-picking-com-a-b2w-coleta
announcementImageID: ''
announcementSynopsisPT: ' a VTEX terá uma nova integração automática com a B2W Coleta - uma das soluções de logística da B2W'
---

A partir de primeiro de Novembro de 2019, a VTEX terá uma nova integração automática com a B2W Coleta - uma das soluções de logística da B2W.

Agora, basta ativar o serviço na B2W e solicitar a coleta de itens no seu centro de distribuição. Não é preciso fazer nenhuma configuração na VTEX, apenas acompanhar o fluxo de pedidos no módulo Gerenciamento de Pedidos da plataforma de e-commerce da VTEX.  

## O que muda

A B2W Coleta é solução da B2W para a etapa de Picking de uma rota logística. Ou seja, o processo de retirar os pedidos de um centro de distribuição e enviá-los para uma transportadora.

Quando um lojista integra sua loja aos serviços da plataforma da B2W, ele também pode contratar alguns serviços. Um deles é o B2W Coleta, em que a própria B2W encarrega-se de fazer o Picking dos pedidos.

Contudo, esse processo é intermediado pela SkyHub - plataforma de integrações da B2W.  Anteriormente, o lojista precisava entrar no painel da SkyHub para mudar o status dos pedidos para “disponível para retirada”, um a um.

A nova integração automatiza o processo. Assim que um pedido for faturado, a solicitação de coleta será feita pelo sistema da VTEX automaticamente. Isso tudo seguindo o fluxo padrão do e-commerce: primeiro faturar o pedido do ERP para, automaticamente, faturá-lo na VTEX. 

O lojista só precisa preparar os pacotes para o transporte e acompanhar, no módulo Gerenciamento de Pedidos, se os itens serão entregues corretamente.

Vale ressaltar que a B2W transporta pela Direct e pelos Correios. Essa chamada do B2W Coleta afeta apenas a Direct. 

## Como funciona

Como mencionamos, um pedido só pode ser coletado do centro de distribuição depois do seu faturamento. 

Logo, a integração funciona em dois cenários diferentes:

- __Pedido com apenas um item__: ao emitir a nota fiscal do pedido, o módulo Gerenciamento de Pedidos da VTEX buscará o item daquela nota específica e fará uma solicitação de coleta para B2W.

- __Pedidos com dois itens ou mais__: aqui é possível que os itens não sejam todos faturados ao mesmo tempo. Nesse caso, o sistema espera até que o último item seja devidamente faturado para, em seguida, solicitar a coleta. 

Desse modo, caso necessário, o lojista precisa fazer algumas adaptações nos fluxos de faturamento no seu ERP.

## Principais vantagens

- Processos centralizados em um único admin; 
- Operação integrada e automatizada.

Para saber como configurar a integração com a SkyHub/B2W, acesse: https://help.vtex.com/pt/tracks/configurar-integracao-da-b2w?locale=pt
