---
title: 'Configurar o controle de histórico de preço'
id: tutorials_4288
status: DRAFT
createdAt: 2017-04-27T21:51:18.726Z
updatedAt: 2022-09-08T16:44:13.097Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:15.959Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: configurando-o-controle-de-historico-de-preco
legacySlug: configurando-o-controle-de-historico-de-preco
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

O controle de histórico de preço da VTEX tem como objetivo exibir o menor valor faturado de um item por mês. Ou seja, com ele é possível exibir o menor valor pelo qual determinado item foi vendido em sua loja.

### Como configurar

O controle deve ser incluído no template da página de produto, conforme abaixo:

```
<!--Price History Inicio v1-->
<b style="font-family: Inconsolata, monospace;"><vtex.cmc:StockKeepingUnitPriceHistory Months="6" Percentile="100"/>
<!--Price History Fim-->
```

Veja [aqui](http://help.vtex.com/tutorial/lista-de-controles-para-templates/ "aqui") a lista completa de controles para templates.

### Exibição dos preços

O modo de exibição padrão dos valores segue o modelo da imagem abaixo. São exibidos em sequência o ano, o mês e o menor valor faturado neste mês.

![HistPrecos](//images.contentful.com/alneenqid6w5/2AX7uKU4zW66sA0AICcEM2/81042cedd7d0ef937b1c56a8878d8d0c/HistPrecos.png)

Caso a loja deseje exibir os dados de outra forma, será necessário fazer a customização por meio de uma agência de layout.

### Os parâmetros _Months_ e _Percentile_

Para permitir maior flexibilidade na exibição dos valores na página do produto, é possível definir no parâmetro **Months** a quantidade de meses a serem considerados pelo controle. 

Se o parâmetro for igual a "6", por exemplo, o controle irá exibir o menor valor faturado do item para cada um dos últimos 6 meses.

Além disso, pode acontecer de o menor valor faturado do item num dado mês estar abaixo do praticado normalmente pela loja, em decorrência de uma promoção específica, por exemplo. Para não exibir esse valor, é possível utilizar o parâmetro ***Percentile**. 

Por meio dele, o lojista consegue desconsiderar valores periféricos. Por exemplo: usando o parâmetro com o valor 95 (Percentile="95"), desconsideram-se 5% dos valores.

Usando-o com o valor 90 (Percentile="90"), desconsideram-se 10% dos valores. 

Em casos como estes, valores muito abaixo do praticado normalmente não serão exibidos.

_Quando há variação de preço no mesmo mês, o controle exibe o menor valor do item que foi faturado no mês._

_Se um item não foi vendido no mês, o controle não exibe nenhum valor para o item._
