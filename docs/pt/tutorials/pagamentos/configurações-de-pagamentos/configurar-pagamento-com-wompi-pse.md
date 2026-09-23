---
title: 'Configurar pagamento com Wompi-PSE'
createdAt: 2026-08-04T00:00:00.000Z
updatedAt: 2026-08-04T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-wompi-pse
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Wompi-PSE. Por meio deste provedor, sua loja pode oferecer pagamentos com PSE.

Para configurar Wompi-PSE, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Wompi-PSE** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Wompi-PSE.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Wompi-PSE na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, preencha os campos **Llave publica (produccion) - PSE**, **Llave privada (produccion) - PSE**, **Llave publica (prueba) - PSE** e **Llave privada (prueba) - PSE** conforme orientações do provedor.
8. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **Wompi-PSE**.
4. Ative a condição no campo **Status**.
5. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Wompi-PSE pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
