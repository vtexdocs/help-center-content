---
title: 'Configurar pagamento com PayU South Africa'
id: 2OSeDkC70CFS8k0pWTMMxM
status: DRAFT
createdAt: 2022-08-12T20:27:45.058Z
updatedAt: 2022-12-23T20:42:21.455Z
publishedAt: 
firstPublishedAt: 2022-08-12T21:39:25.215Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-payu-south-africa
locale: pt
legacySlug: configurar-pagamento-com-payu-south-africa
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos PayU South Africa. Com este conector, sua loja pode realizar vendas por meio de cartões de crédito, débito, OsowEFT e transferência bancária.

Para configurar a afiliação PayU South Africa, siga os passos abaixo:

<ui>1. Acesse o __Admin__ VTEX.</ui>

<ui>2. Clique em __Pagamentos__.</ui>

<ui>3. Em seguida, clique em __Configurações__.</ui>

<ui>4. Na aba __Afiliações de Gateways__, clique no botão __+__.</ui>

<ui>5. Clique no conector __PayU-SouthAfrica__.</ui>

<ui>6. Preencha os campos __Application Key__, __Application Token__, __Public API Key__ e __Soft descriptor__ com as informações da sua conta PayU South Africa.</ui>

<ui>7. Em __Captura automática de pagamento__, selecione uma das opções disponíveis:</ui>

 - __Use o Comportamento Recomendado Do Processador De Pagamentos__: a captura do pagamento não ocorre de forma automática. Nesta opção, o provedor de pagamento indica se o pagamento foi autorizado, e pode determinar ou recomendar um número de dias para a captura mediante a autorização do pagamento.   
 - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é realizada automaticamente logo após a autorização  do pagamento, mesmo se na transação existir a necessidade de análise do antifraude.
 - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__:  a captura é realizada automaticamente logo após a autorização  do pagamento e análise do antifraude. Se desejar utilizar esta opção e não existe análise do antifraude a ser realizada, o sistema irá seguir o mesmo fluxo da opção __Imediatamente: Captura Automática Ao Autorizar O Pagamento__.  
 - __Desativado: Não Capturado Automaticamente__: a captura ocorre apenas quando o pedido é faturado. Se desejar utilizar essa opção, é importante ficar atento ao momento do faturamento, pois caso o pedido seja faturado em um período de tempo maior que o acordado com o provedor para a captura do pagamento, a transação poderá ser cancelada.

<ui>8.Clique em __Salvar__.</ui>

Para configurar as condições de pagamento, acesse [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento#). Para a opção de cartão de crédito, selecione a afiliação __vtex-integration-payu-southafrica-v0__.

Depois de seguir os passos indicados, o conector PayU South Africa pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
