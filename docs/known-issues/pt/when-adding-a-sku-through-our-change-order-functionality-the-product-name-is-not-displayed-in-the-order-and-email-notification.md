---
title: 'Ao adicionar um SKU através de nossa funcionalidade "Change Order", o nome do produto não é exibido no pedido e na notificação por e-mail'
id: 35Q3KoOSsUr9n9XEDIk7nk
status: PUBLISHED
createdAt: 2022-04-07T14:53:35.829Z
updatedAt: 2024-02-16T20:24:27.100Z
publishedAt: 2024-02-16T20:24:27.100Z
firstPublishedAt: 2022-04-07T14:53:36.256Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: ao-adicionar-um-sku-atraves-de-nossa-funcionalidade-change-order-o-nome-do-produto-nao-e-exibido-no-pedido-e-na-notificacao-por-email
locale: pt
kiStatus: No Fix
internalReference: 557978
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



A funcionalidade **Mudar pedido** permite adicionar ou remover itens dentro do pedido, assim como modificar o valor do pedido.

Todos os itens do catálogo no momento da compra terão todo o contexto e informações do catálogo nos detalhes do pedido, enquanto que, por outro lado, caso você queira acrescentar um novo SKU ao pedido, não terá todo o contexto do catálogo, ou seja, informações tais como nome do produto, imagem, etc. Neste caso, teremos apenas o nome do SKU (**skuName***) disponível, que para algumas lojas pode oferecer uma "má" experiência na leitura das informações, já que em alguns casos a loja tem nomes de SKU mais específicos, como por exemplo, "3 kg", "White", que têm o nome do produto como um complemento, por exemplo, "Brand X Rice", "Cotton T-shirt", respectivamente.

Para os exemplos mencionados, a loja espera ter em nossa UI ou e-mail notificações para o cliente o nome completo (nome do produto + nome do SKU), exemplo:


- **Rice Brand X - 3 kg***
- T-shirt de algodão - Branco***

O problema neste caso é que só temos o nome da SKU (**skuName***), o que deixaria nossas notificações UI e e-mail como "incompletas". Com base em nossos exemplos acima, a administração da loja e o cliente verão o seguinte:


- **3 kg***
- **Branco***



## Simulação



Para simular é possível:

1. Criar um pedido
2. Avançar com a ordem para o estado que permite mudanças
3. Tentativa de acrescentar um novo SKU ao pedido
4. Validar o detalhe do nome no pedido UI
5. Validar o detalhe do nome dentro da notificação que chega ao cliente quando uma mudança é feita no pedido.



## Workaround


Neste momento, não temos Workaroud para este comportamento.

