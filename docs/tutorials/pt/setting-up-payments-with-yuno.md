---
title: Configurar pagamento com Yuno
id: h7PS0vDJJokqI9axZPNzE
status: PUBLISHED
createdAt: 2023-04-14T12:42:43.736Z
updatedAt: 2023-04-14T13:21:45.782Z
publishedAt: 2023-04-14T13:21:45.782Z
firstPublishedAt: 2023-04-14T13:21:45.782Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-yuno
legacySlug: configurar-pagamento-com-yuno
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Yuno. Por meio deste conector, sua loja pode realizar vendas por meio de cartões de crédito, boleto bancário e promissórias.

Para configurar a afiliação Yuno, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão `+`.
3. Clique no conector __Yuno__.
4. Preencha os campos __Application Key__, __Application Token__ e __Account ID__ com as informações da sua conta Yuno.
5. Em __Auto Capture__, selecione se a captura do pagamento será automática após a autorização.
6. Em __Delay To Capture (in days) Default 1 day, max 7 days__, preencha o período (em dias) no qual a captura do pagamento deverá aguardar para ser realizada. O valor padrão é 1 dia e o máximo é de 7 dias.
7. Em __Delay To Cancel (in hours) Default 6 hours__, preencha o período (em horas), no qual a transação possa ser cancelada após a autorização. O valor padrão é de 6 horas.
8. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Yuno, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector Yuno pode demorar até 10 minutos para aparecer no checkout da sua loja como opção de pagamento. 
