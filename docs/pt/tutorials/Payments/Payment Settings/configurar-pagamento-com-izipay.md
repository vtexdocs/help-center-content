---
title: 'Configurar pagamento com Izipay'
id: 7bGGw6A9xidRfaOhOU1Ibd
status: PUBLISHED
createdAt: 2024-10-11T13:44:41.815Z
updatedAt: 2024-10-11T14:23:38.542Z
publishedAt: 2024-10-11T14:23:38.542Z
firstPublishedAt: 2024-10-11T14:23:38.542Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-izipay
locale: pt
legacySlug: configurar-pagamento-com-izipay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Izipay. Com este provedor, sua loja pode realizar vendas por izipay.

Para configurar Izipay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __izipay__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Izipay.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Izipay na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Caso deseje utilizar o [split de pagamento](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
8. Em __Campos do provedor__, insira as informações em __pay.method__, __url.notification__, __language__, __appearance.logo
__,  __appearance.customTheme.colors.backgroundColor__ e __appearance.customTheme.colors.textColor__ conforme as informações da sua conta Izipay.
9. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __izipay__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, Izipay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
