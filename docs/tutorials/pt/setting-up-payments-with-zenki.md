---
title: 'Configurar pagamento com Zenki'
id: 6LK7wMg0OB39UQKoZILoNL
status: PUBLISHED
createdAt: 2023-03-30T17:34:01.758Z
updatedAt: 2023-03-30T18:04:59.870Z
publishedAt: 2023-03-30T18:04:59.870Z
firstPublishedAt: 2023-03-30T18:02:25.796Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-zenki
locale: pt
legacySlug: configurar-pagamento-com-zenki
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Zenki. Por meio deste conector, sua loja pode realizar vendas por meio de bitcoins.

Para configurar a afiliação Zenki, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão `+`.
3. Clique no conector __Zenki__.
4. Preencha os campos __Application Key__, __Application Token__, __API key__, __Secret Key__ e __Webhook signing secret__ com as informações da sua conta Zenki.
5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.
6. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __Bitcoin__.
4. Em __Processar com a afiliação__, selecione a opção __zenkipartnermx-zenki-v0__.
5. Ative a condição no campo __Status__.
6. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
7. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector Zenki pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
