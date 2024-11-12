---
title: 'Configurar el control de histórico de precios'
id: tutorials_4288
status: ARCHIVED
createdAt: 2017-04-27T21:51:18.726Z
updatedAt: 2022-09-08T16:44:13.097Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:15.959Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: configuring-the-past-prices-control
locale: es
legacySlug: configurando-el-control-de-historico-de-precios
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

El control de histórico de precios de VTEX tiene como objetivo mostrar el menor valor facturado de un item por mes. Es decir, permite mostrar el menor valor por el cual un item fue vendido en su tienda.

### Cómo configurar

El nuevo control debe ser incluido en el template de la página de producto, de acuerdo a lo siguiente:

```
<!--Price History Inicio v1-->
<b style="font-family: Inconsolata, monospace;"><vtex.cmc:StockKeepingUnitPriceHistory Months="6" Percentile="100"/>
<!--Price History Fim-->
```

Vea [aqui](http://help.vtex.com/tutorial/lista-de-controles-para-templates/ "aqui") la lista completa de controles para templates.

### Exhibición de los precios

El modo de exhibición standard de los valores sigue el modelo de la imagen debajo. Se muestran de manera continuada el año, el mes y el menor valor facturado en este mes.

![HistPrecos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

En el caso de que la tienda desee exhibir los datos de otra manera, será necesario realizar la customización a través de una agencia de layout.

### Los parámetros _Months_ y _Percentile_

Para permitir mayor flexibilidad en la exhibición de los valores en la página de producto, se puede definir en el parámetro ***Months** la cantidad de meses que serán considerados por el control. 

Si el parámetro fuera igual a "6", por ejemplo, el control mostrará el menor valor por el cual el item fue facturado en cada uno de los últimos 6 meses.

Más allá de esto, puede suceder que el menor valor facturado del item en un determinado mes, esté por debajo de lo acostumbrado normalmente por la tienda, como resultado de una promoción específica, por ejemplo. Para no exhibir este valor, se puede utilizar el parámetro ***Percentile***. 

A través del mismo, la tienda consigue no considerar valores periféricos. Por ejemplo: usando el parámetro con el valor 95 (Percentile="95"), no se consideran 5% de los valores. 

Usándolo con el valor 90 (Percentile="90"), no se consideran 10% de los valores. 

En casos como estos, valores muy por debajo de lo habitual no se mostrarán.

_Cuando haya variaciones del precio dentro del mismo mes, el control muestra el menor valor del item que fue facturado en el mes._

_Si un item no fue vendido dentro del mes, el controle no muestra ningún valor de este item._
