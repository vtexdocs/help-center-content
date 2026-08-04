---
title: 'Configurar pagamento com WompiBancolTrans'
createdAt: 2026-08-04T00:00:00.000Z
updatedAt: 2026-08-04T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-wompibancoltrans
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos WompiBancolTrans. Por meio deste provedor, sua loja pode oferecer pagamentos com Bancolombia Transfer.

Para configurar WompiBancolTrans, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **WompiBancolTrans** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, clique em **Autorizar via OAuth**. Neste momento, você será redirecionado para a página do provedor, onde deverá acessar a sua conta e autorizar a conexão da VTEX na sua conta WompiBancolTrans. Após o processo de autorização, você retornará automaticamente para o Admin VTEX.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor WompiBancolTrans na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **WompiBancolTrans**.
4. Ative a condição no campo **Status**.
5. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor WompiBancolTrans pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
