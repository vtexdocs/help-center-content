---
title: Configurar pagamento com Scalapay
id: 6SCh3WUqjeqIrOl209MENA
status: PUBLISHED
createdAt: 2022-08-12T19:31:38.569Z
updatedAt: 2023-05-09T14:07:50.542Z
publishedAt: 2023-05-09T14:07:50.542Z
firstPublishedAt: 2022-08-12T19:39:58.598Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-scalapay
legacySlug: configurar-pagamento-com-scalapay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Scalapay. Com este conector, sua loja pode realizar vendas por meio de cartão de crédito e Scalapay.

Para configurar a afiliação Scalapay, siga os passos abaixo:

<ui>1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.</ui>

<ui>2. Na aba __Afiliações de Gateways__, clique no botão __+__.</ui>

<ui>3. Clique no conector __Scalapay__.</ui>

<ui>4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Scalapay.</ui>

<ui>5. Em __Captura automática de pagamento__, selecione uma das opções disponíveis:</ui>

 - __Use o Comportamento Recomendado Do Processador De Pagamentos__: a captura do pagamento não ocorre de forma automática. Nesta opção, o provedor de pagamento indica se o pagamento foi autorizado, e pode determinar ou recomendar um número de dias para a captura mediante a autorização do pagamento.   
 - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é realizada automaticamente logo após a autorização  do pagamento, mesmo se na transação existir a necessidade de análise do antifraude.
 - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__:  a captura é realizada automaticamente logo após a autorização  do pagamento e análise do antifraude. Se desejar utilizar esta opção e não existe análise do antifraude a ser realizada, o sistema irá seguir o mesmo fluxo da opção __Imediatamente: Captura Automática Ao Autorizar O Pagamento__.  
 - __Desativado: Não Capturado Automaticamente__: a captura ocorre apenas quando o pedido é faturado. Se desejar utilizar essa opção, é importante ficar atento ao momento do faturamento, pois caso o pedido seja faturado em um período de tempo maior que o acordado com o provedor para a captura do pagamento, a transação poderá ser cancelada.

<ui>6.Clique em __Salvar__.</ui>

Para configurar as condições de pagamento, acesse [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento#). Para a opção de cartão de crédito, selecione a afiliação __vtex-integration-scalapay-v0__.

Depois de seguir os passos indicados, o conector Scalapay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
