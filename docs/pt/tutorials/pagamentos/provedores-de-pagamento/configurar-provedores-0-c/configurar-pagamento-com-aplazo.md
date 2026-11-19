---
title: 'Configurar pagamento com aplazo'
createdAt: 2026-11-17T00:00:00.000Z
updatedAt: 2026-11-17T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-aplazo
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos aplazo. Por meio deste provedor, sua loja pode oferecer pagamentos com Aplazo Payment.

Para configurar aplazo, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **aplazo** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta aplazo.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor aplazo na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, preencha os campos **Api secret** e **Merchant ID** conforme orientações do provedor.
8. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Selecione a condição de pagamento **Aplazo Payment**.
4. Preencha o campo **Nome da regra** com um nome de sua preferência para identificação.
5. Ative a condição no campo **Status**.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar antifraude**.
7. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais?&utm_source=autocomplete#).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor aplazo pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
