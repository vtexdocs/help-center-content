---
title: 'Configurar pagamento com EgetnetV2'
id: 6jfBE8ocN5T0xQo8BTGH31
status: PUBLISHED
createdAt: 2023-02-13T13:55:05.519Z
updatedAt: 2025-07-16T22:04:05.395Z
publishedAt: 2025-07-16T22:04:05.395Z
firstPublishedAt: 2023-02-13T14:12:54.200Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-egetnetv2
locale: pt
legacySlug: configurar-pagamento-com-egetnetv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos EgetnetV2. Por meio deste provedor, sua loja pode realizar vendas por cartões de crédito, débito, boletos e PIX.

Para configurar EgetnetV2, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __EgetnetV2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta EgetnetV2.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor EgetnetV2 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Caso deseje utilizar o [split de pagamento](/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela EgetnetV2, acesse [Condições de Pagamento](/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, EgetnetV2 pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
