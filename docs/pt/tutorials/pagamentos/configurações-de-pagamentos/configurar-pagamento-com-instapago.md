---
title: 'Configurar pagamento com InstaPago'
id:
status: PUBLISHED
createdAt: 2026-02-19T00:00:00.191Z
updatedAt: 2026-02-19T00:00:00.191Z
publishedAt: 2026-02-19T00:00:00.191Z
firstPublishedAt: 2026-02-19T00:00:00.191Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-instapago
legacySlug: configurar-pagamento-com-instapago
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento InstaPago. Por meio deste provedor, sua loja pode oferecer pagamentos por meio do InstaPago.

Para configurar InstaPago, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **InstaPago** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta InstaPago.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor InstaPago na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Caso deseje utilizar o [split de pagamento](https://help.vtex.com/pt/docs/tutorials/split-de-pagamento) em sua loja, selecione a opção **Ativar split de recebíveis e enviar recebedores de pagamento** e indique o **Responsável pelas tarifas de processamento de pagamentos** e **Responsável pelos estornos** (marketplace, sellers ou marketplaces e sellers).
8. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **InstaPago**.
4. Ative a condição no campo **Status**.
5. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-especiais).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor InstaPago pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

