---
title: 'Validação de anexo somente no marketplace ao adicionar um item de um vendedor com anexo'
id: 638N4urP08NY7v8jdH7U5N
status: PUBLISHED
createdAt: 2023-12-22T18:18:59.194Z
updatedAt: 2023-12-22T18:18:59.909Z
publishedAt: 2023-12-22T18:18:59.909Z
firstPublishedAt: 2023-12-22T18:18:59.909Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: attachment-validation-only-in-the-marketplace-when-adding-an-item-from-a-seller-with-attachment
locale: pt
kiStatus: Backlog
internalReference: 957343
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao adicionar um item de um vendedor com um anexo na mesma solicitação de API, a validação do anexo ocorre somente no marketplace.

**Cenário 1:**
Se o marketplace tiver o mesmo nome de anexo e as chaves forem diferentes das do vendedor, a mensagem de erro "Item attachment has an invalid value for key" será exibida e o item não será adicionado ao carrinho.

**Cenário 2:**
Se o marketplace não tiver o mesmo anexo, a mensagem de erro "O nome do anexo é inválido" será exibida e o item não será adicionado ao carrinho.

Esse comportamento ocorre em ambas as APIs para adicionar itens: Adicionar itens do carrinho e Manipular itens do carrinho.

## Simulação



- Configure o mesmo anexo no marketplace e no vendedor com chaves de campo diferentes;
- Associar a um item;
- Adicionar o item por meio de Adicionar itens do carrinho ou Manipular itens do carrinho, com anexos.


- Configurar um anexo no vendedor e associá-lo a um item;
- Adicione o item por meio de Adicionar itens do carrinho ou Manusear itens do carrinho, com anexos

## Workaround



- Adicione o item primeiro e o anexo depois em solicitações diferentes. Para enviar o anexo, você pode:
  - enviar os anexos por meio de Manusear itens do carrinho;
  - enviar os anexos por meio de Adicionar um anexo a um item, por exemplo:

    curl --location 'https://{accountName}.{environment}.com.br/api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/attachments/{attachmentName}' \--header 'Content-Type: application/json' \--data '{ "content": { "key": "value" }, "noSplitItem": true}'




