---
title: 'Mensagem exibida ao clicar no botão “Comprar” impede que o cliente finalize a compra'
id: 3i3eys6d4MWnt0E611OdPH
status: PUBLISHED
createdAt: 2021-10-13T16:50:22.116Z
updatedAt: 2022-12-22T20:40:58.474Z
publishedAt: 2022-12-22T20:40:58.474Z
firstPublishedAt: 2021-10-13T16:56:30.403Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: message-displayed-when-clicking-the-buy-button-prevents-customers-from-proceeding-with-the-purchase
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Quando vários SKUs do mesmo produto têm a mesma combinação de especificações e o cliente seleciona um deles na página do produto, a mensagem _"Por favor selecione o tamanho desejado"_ é exibida e o cliente não consegue adicionar o produto ao carrinho de compras.

## Simulação

1. Crie um produto que tenha mais de dois SKUs com pelo menos duas especificações e dois valores para cada especificação.
2. Selecione a mesma combinação de valores de especificação para cada SKU (veja o exemplo abaixo).
3. Vá para a página do produto e tente comprar o produto.

Exemplo:

Você tem o produto camisa com quatro SKUs. Ele tem as especificações **"Tamanho"** e **"Cor"**, com as opções **"P"**, **"M"** e **"G"** para tamanho e **"Vermelho"** ou **"Azul"** para **Cor**.

Na página `SkuForm.aspx`, selecione as seguintes especificações:

- **SKU 1:** Tamanho = G e Cor = Vermelho
- **SKU 2:** Tamanho = G e Cor = Vermelho
- **SKU 3:** Tamanho = M e Cor = Vermelho
- **SKU 4:** Tamanho = M e Cor = Azul

Se você selecionar o SKU 1 ou o SKU 2 na página do produto, você não conseguirá finalizar a compra devido ao problema mencionado acima.


## Workaround

Uma possível solução é editar os valores de especificação de um dos SKUs com os mesmos valores.

