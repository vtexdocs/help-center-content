---
title: 'Configurar pagamento com Stark Bank'
id: 19pwHHVuEGN743WOGXcbUM
status: PUBLISHED
createdAt: 2023-09-08T15:29:02.297Z
updatedAt: 2025-03-17T13:07:31.346Z
publishedAt: 2025-03-17T13:07:31.346Z
firstPublishedAt: 2023-09-08T15:45:11.373Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-stark-bank
legacySlug: configurar-pagamento-com-stark-bank
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Stark Bank. Por meio deste provedor, sua loja pode realizar vendas por meio de boleto bancário e PIX.

Para configurar Stark Bank, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __StarkBank__ na barra de busca e clique sobre o nome do provedor.
4. Clique em __Autorizar__. Você será redirecionado para o ambiente do Stark Bank.
5. No ambiente do Stark Bank, insira os seus dados de login e senha da conta Stark Bank. Siga as instruções indicadas para concluir a vinculação da conta Stark Bank com a VTEX.
6. Ao retornar ao Admin VTEX, caso deseje modificar o nome de identificação a ser exibido para o provedor Stark Bank, insira a informação no campo __Nome__ em __Informações básicas__.
7. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
8. Caso deseje utilizar o [split de pagamento](/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
9. Em __Campos do provedor__, selecione a opção desejada em __Habilitar consulta de boleto 1 hora após a emissão?__.
10. Caso necessário, preencha o último campo do formulário com as tags de identificação das operações de recebimento.
11. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Stark Bank, acesse [Condições de Pagamento](/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector Stark Bank pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
