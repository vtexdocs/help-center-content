---
title: 'Configurar pagamento com Geru'
id: 2XmYp4Uh1Yulv3a9puRgwm
status: PUBLISHED
createdAt: 2024-02-05T11:49:37.163Z
updatedAt: 2024-03-13T14:10:42.303Z
publishedAt: 2024-03-13T14:10:42.303Z
firstPublishedAt: 2024-02-05T13:45:07.728Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-geru
locale: pt
legacySlug: configurar-pagamento-com-geru
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Geru. Por meio deste provedor, sua loja pode realizar vendas por meio do Geru e BNPL.

Para configurar a Geru, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Geru__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Geru.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Geru na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __Geru__ ou __BNPL__.
4. Ative a condição no campo __Status__. Para utilizar o __BNPL__, em __Processar com a afiliação__, selecione a opção __boletoflex-geru-v0__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Geru pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
