---
title: 'Configurar pagamento com ShopFácil'
id: 4v3z3CLrgZ2bByMx7uoMeG
status: PUBLISHED
createdAt: 2023-07-14T16:49:07.504Z
updatedAt: 2024-01-23T21:31:46.325Z
publishedAt: 2024-01-23T21:31:46.325Z
firstPublishedAt: 2023-07-14T16:57:55.320Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-shopfacil
locale: pt
legacySlug: configurar-pagamento-com-shopfacil
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, sua loja pode realizar a integração com o gateway ShopFácil e receber por meio de Pix.

Para configurar ShopFácil, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __ShopfacilPayment__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta ShopFácil.
5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.
6. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de pagamento__, clique no botão `+`.
3. Em __Pagamento Instantâneo__, selecione a opção __Pix__.
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. Em __Processar com a afiliação__, selecione o conector __ShopfacilPayment__.
7. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector ShopFácil pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

