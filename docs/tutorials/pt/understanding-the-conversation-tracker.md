---
title: 'Como é feita a comunicação com o cliente durante o fluxo do pedido'
id: tutorials_195
status: PUBLISHED
createdAt: 2017-04-27T22:14:41.243Z
updatedAt: 2023-03-31T15:15:40.914Z
publishedAt: 2023-03-31T15:15:40.914Z
firstPublishedAt: 2017-04-27T23:02:48.283Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: conversation-tracker
legacySlug: conversation-tracker
subcategory: 4D5LrWwlHGmOWMomOaaGee
---

O Conversation Tracker é utilizado para unificar toda a comunicação feita com um cliente durante o fluxo de um pedido. Esta comunicação também inclui as mensagens enviadas para o email do cliente por qualquer outro sistema integrado. 

Isto é, em toda interação - como __pagamento aprovado__, __preparando entrega__, __faturamento__, __despacho__ e __entrega__ - o cliente será comunicado por email. Estes emails serão registrados na linha do tempo do pedido em questão. Esta comunicação é registrada no detalhamento do pedido, dentro do módulo **Pedidos**.

O Conversation Tracker pode ter duas configurações:

- **Complexa** - Cria um alias (email alternativo) de forma não legível evitando assim a identificação do email por sistemas externos, também vincula qualquer email enviado a este endereço a linha do tempo do pedido. Normalmente a loja com esta configuração apresentaram o alias da seguinte forma: `ff2e6348a53a4d449af92be2a1011328@ct.vtex.com.br`
- **Simples** - Cria um alias (email alternativo) de menor complexidade para o email do usuário comprador, isso faz com que o email continue legível na UI do OMS e quando visto no JSON do pedido. Outro ponto importante é que o endereço do emissor (loja) também é mascarado da mesma forma que o email do usuário no JSON. É necessário para que o sistema possa vincular os emails dessa compra na linha do tempo do pedido. Normalmente a loja com esta configuração apresentarão o alias da seguinte forma: `nomepessoa@vtex.com.br-207700027841b.ct.vtex.com.br`

<div class="alert alert-info">
Todas as lojas vêm com a configuração <strong>Complexa</strong> por padrão.
</div>

O  Conversation Tracker oferece diversas outras vantagens, principalmente em questões de segurança:

- O email enviado para qualquer outro sistema é criptografado, evitando acesso direto aos endereços de emails dos clientes.
- Qualquer comunicação por meio dos emails criptografados é registrada no detalhe do pedido correspondente.
- Este email possui __validade de 2 meses__. Por isso, não deve ser utilizado para disparo de newsletter ou email marketing. Esta validade é uma medida adicional de segurança pois, caso haja roubo da informação, a mesma será válida somente neste período.

Para ter acesso aos emails de seus clientes para ações de marketing, utilize o módulo **Master Data**.

É possível selecionar a configuração desejada, entre __Complexa__ ou __Simples__, no módulo __Pedidos__, conforme os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pedidos > Configurações**, ou digite *Pedidos* na barra de busca no topo da página e selecione *Configurações da loja / Pedidos*.
2. Na aba **Gerais**, clique em **Tipo de máscara de conversa**.
3. Selecione a opção desejada:
    - Complexa
    - Simples
4. Clique em `Salvar`.
