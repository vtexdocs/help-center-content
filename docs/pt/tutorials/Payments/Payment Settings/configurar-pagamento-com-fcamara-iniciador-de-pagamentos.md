---
title: 'Configurar pagamento com FCamara (Iniciador de pagamentos)'
id: 4p5E3jc9J5xHkOI6AbnhTV
status: PUBLISHED
createdAt: 2023-04-03T15:12:23.123Z
updatedAt: 2024-01-23T18:01:44.039Z
publishedAt: 2024-01-23T18:01:44.039Z
firstPublishedAt: 2023-04-03T16:42:01.758Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-fcamara-payment-initiator
locale: pt
legacySlug: configurar-pagamento-com-fcamara-iniciador-de-pagamentos
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o iniciador de pagamento FCamara. Por meio dele, sua loja pode realizar vendas pelo PIX.

Para configurar FCamara, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __iniciadorfcamara__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta FCamara.
5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.
6. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Selecione o conector __FCamara - Iniciador de pagamentos__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o iniciador de pagamento FCamara pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
