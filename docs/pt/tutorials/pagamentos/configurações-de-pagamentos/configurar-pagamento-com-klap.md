---
title: 'Configurar pagamento com Klap'
id: 7B4TwOrNX4R1AIpHpekdGH
status: PUBLISHED
createdAt: 2024-12-09T14:45:46.693Z
updatedAt: 2024-12-09T16:54:46.681Z
publishedAt: 2024-12-09T16:54:46.681Z
firstPublishedAt: 2024-12-09T15:18:39.203Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-klap
legacySlug: configurar-pagamento-com-klap
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Klap.

Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Klap.

Para configurar Klap, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **payment-provider-klap** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Klap.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Klap na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, selecione ou preencha os campos **Secret Token** e **Currency** conforme orientações do provedor.
8. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **Klap**.
4. Ative a condição no campo **Status**.
5. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Klap pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

