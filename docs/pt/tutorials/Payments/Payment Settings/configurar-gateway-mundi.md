---
title: 'Configurar gateway Mundi '
id: 2yn9dKzvZOF5tn4RCX2Nbq
status: PUBLISHED
createdAt: 2019-04-04T21:12:48.808Z
updatedAt: 2024-01-23T19:02:29.463Z
publishedAt: 2024-01-23T19:02:29.463Z
firstPublishedAt: 2019-04-04T21:20:22.149Z
contentType: tutorial
productTeam: Financial
author: 3lcZDoqCF7Q4hYHye4y1YM
slugEN: set-up-mundi-gateway
locale: pt
legacySlug: configurar-gateway-mundi
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível fazer uma integração com o provedor de pagamentos Mundi.

>⚠️ Se desejar utilizar também o antifraude da Mundi, as configurações desta função devem ser realizadas pelo hub da própria empresa. Em caso de dúvidas sobre essa etapa da operação, consulte o suporte técnico da Mundi.

Para configurar Mundi, siga os passos abaixo:

<ui>1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.</ui>

<ui>2. Na tela de provedores, clique no botão `Novo provedor`.</ui>

<ui>3. Digite o nome __Mundi__ na barra de busca e clique sobre o nome do provedor.</ui>

<ui>4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Mundi.</ui>

<ui>5. Em __Captura automática de pagamento__, selecione uma das opções disponíveis:</ui>

 - __Use o Comportamento Recomendado Do Processador De Pagamentos__: a captura do pagamento não ocorre de forma automática. Nesta opção, o provedor de pagamento indica se o pagamento foi autorizado, e pode determinar ou recomendar um número de dias para a captura mediante a autorização do pagamento.   
 - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é realizada automaticamente logo após a autorização  do pagamento, mesmo se na transação existir a necessidade de análise do antifraude.
 - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__:  a captura é realizada automaticamente logo após a autorização  do pagamento e análise do antifraude. Se desejar utilizar esta opção e não existe análise do antifraude a ser realizada, o sistema irá seguir o mesmo fluxo da opção __Imediatamente: Captura Automática Ao Autorizar O Pagamento__.  
 - __Desativado: Não Capturado Automaticamente__: a captura ocorre apenas quando o pedido é faturado. Se desejar utilizar essa opção, é importante ficar atento ao momento do faturamento, pois caso o pedido seja faturado em um período de tempo maior que o acordado com o provedor para a captura do pagamento, a transação poderá ser cancelada.

<ui>6.Clique em __Salvar__.</ui>

Para configurar os métodos de pagamento a serem processados pelo Mundi, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete).

Depois de seguir os passos indicados, o conector Mundi pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

