---
title: 'Configurar pagamento com FintocMX'
id: 7t2zlQouUitrKupdfEpJyw
status: PUBLISHED
createdAt: 2024-12-11T18:03:58.871Z
updatedAt: 2024-12-11T18:18:47.441Z
publishedAt: 2024-12-11T18:18:47.441Z
firstPublishedAt: 2024-12-11T18:18:47.441Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-fintocmx
legacySlug: configurar-pagamento-com-fintocmx
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento FintocMX.

Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Fintoc.

Para configurar FintocMX, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **FintocMX** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta FintocMX.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor FintocMX na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, selecione ou preencha os campos **Secret Key** conforme orientações do provedor.
8. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __Fintoc__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, FintocMX pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
