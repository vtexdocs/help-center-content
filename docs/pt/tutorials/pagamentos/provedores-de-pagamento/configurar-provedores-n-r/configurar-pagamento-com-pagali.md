---
title: 'Configurar pagamento com Pagali'
createdAt: 2026-11-19T00:00:00.000Z
updatedAt: 2026-11-19T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-pagali
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Pagali. Por meio deste provedor, sua loja pode oferecer pagamentos com Pix.

Para configurar Pagali, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Pagali** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Pagali.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Pagali na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, preencha os campos **PIX Field 1 Name**, **PIX Field 1 Value**, **PIX Field 2 Name** e **PIX Field 2 Value** conforme orientações do provedor.
8. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **PIX**.
4. Ative a condição no campo **Status**.
5. Em **Processar com a afiliação**, selecione a opção **lojaintegrada-pagali-v0**.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Pagali pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
