---
title: 'Configurar pagamento com Digital River V2'
id: 5dlXHutd9Ik6vtN3WP7GRP
status: PUBLISHED
createdAt: 2022-02-17T12:11:27.726Z
updatedAt: 2023-03-26T21:59:25.157Z
publishedAt: 2023-03-26T21:59:25.157Z
firstPublishedAt: 2022-02-17T13:44:17.095Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-digital-river-v2
legacySlug: configurar-pagamento-com-digital-river-v2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Digital River V2. Por meio deste conector, sua loja pode realizar vendas por diversos [métodos de pagamentos](https://www.digitalriver.com/payment-method-guide/).

Para configurar a afiliação Digital River V2, siga os passos abaixo:

<ui>1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.</ui>

<ui>2. Na aba __Afiliações de Gateways__, clique no botão __+__.</ui>

<ui>3. Clique no conector __DigitalRiverV2__.</ui>

<ui>4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Digital River V2.</ui>

<ui>5. Em __Captura automática de pagamento__, selecione uma das opções disponíveis:</ui>

 - __Use o Comportamento Recomendado Do Processador De Pagamentos__: a captura do pagamento não ocorre de forma automática. Nesta opção, o provedor de pagamento indica se o pagamento foi autorizado, e pode determinar ou recomendar um número de dias para a captura mediante a autorização do pagamento.   
 - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é realizada automaticamente logo após a autorização  do pagamento, mesmo se na transação existir a necessidade de análise do antifraude.
 - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude__:  a captura é realizada automaticamente logo após a autorização  do pagamento e análise do antifraude. Se desejar utilizar esta opção e não existe análise do antifraude a ser realizada, o sistema irá seguir o mesmo fluxo da opção __Imediatamente: Captura Automática Ao Autorizar O Pagamento__.  
 - __Desativado: Não Capturado Automaticamente__: a captura ocorre apenas quando o pedido é faturado. Se desejar utilizar essa opção, é importante ficar atento ao momento do faturamento, pois caso o pedido seja faturado em um período de tempo maior que o acordado com o provedor para a captura do pagamento, a transação poderá ser cancelada.

<ui>6.Clique em __Salvar__.</ui>

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Selecione a condição de pagamento __DigitalRiver__.
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. Se desejar utilizar um sistema antifraude, selecione a opção __Usar antifraude__.
7. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, o conector Digital River V2 pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
