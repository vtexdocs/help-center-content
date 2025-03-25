---
title: 'Configurar pagamento com PagHiperV2'
id: 131E6zBcTTkzZtL82cZh1x
status: PUBLISHED
createdAt: 2024-03-14T12:01:07.521Z
updatedAt: 2024-03-14T12:18:12.256Z
publishedAt: 2024-03-14T12:18:12.256Z
firstPublishedAt: 2024-03-14T12:18:12.256Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paghiperv2
locale: pt
legacySlug: configurar-pagamento-com-paghiperv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento PagHiperV2. Por meio deste provedor, sua loja pode realizar vendas por boletos e PIX.

Para configurar a PagHiperV2, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PagHiperV2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta PagHiperV2.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor PagHiperV2 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Limite Vencimento__, insira quantos dias o boleto permanecerá em aberto após o seu vencimento.
7. Em __Exibir Frase fixa__, selecione se deseja incluir uma frase a ser exibida nos boletos emitidos.
8. Em __Frase variável do vendedor__, caso desejar, configure a frase a ser exibida para cada boleto específico.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela PagHiperV2, acesse [Configurar condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, PagHiperV2 pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
