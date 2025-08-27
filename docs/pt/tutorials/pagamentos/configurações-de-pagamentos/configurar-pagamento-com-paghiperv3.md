---
title: 'Configurar pagamento com PagHiperV3'
id: 1dYVbSK0yHNY5vp0gJj4fC
status: PUBLISHED
createdAt: 2024-03-14T12:27:03.520Z
updatedAt: 2024-03-14T12:39:32.791Z
publishedAt: 2024-03-14T12:39:32.791Z
firstPublishedAt: 2024-03-14T12:39:32.791Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paghiperv3
legacySlug: configurar-pagamento-com-paghiperv3
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento PagHiperV3. Por meio deste provedor, sua loja pode realizar vendas por boletos e PIX.

Para configurar a PagHiperV3, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PagHiperV3__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta PagHiperV3.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor PagHiperV3 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Limite Vencimento__, insira quantos dias o boleto permanecerá em aberto após o seu vencimento.
8. Em __Dias corridos até o vencimento__, insira o prazo máximo de vencimento dos boletos. Para pagamentos por PIX não é possível alterar o prazo de expiração, sendo o prazo padrão de 15 minutos.
9. Em __Exibir Frase fixa__, selecione se deseja incluir uma frase a ser exibida nos boletos emitidos.
10. Em __Frase variável do vendedor__, caso desejar, configure a frase a ser exibida para cada boleto específico.
11. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela PagHiperV3, acesse [Configurar condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, PagHiperV3 pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
