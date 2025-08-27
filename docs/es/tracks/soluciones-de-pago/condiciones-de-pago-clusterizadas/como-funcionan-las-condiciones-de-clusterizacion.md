---
title: 'Cómo funcionan las condiciones de clusterización'
id: 2CmfhSqmOTVo0tLWkAPiiA
status: PUBLISHED
createdAt: 2020-11-18T12:47:27.764Z
updatedAt: 2020-11-23T12:32:27.706Z
publishedAt: 2020-11-23T12:32:27.706Z
firstPublishedAt: 2020-11-18T17:37:48.695Z
contentType: trackArticle
productTeam: Financial
slugEN: how-clustered-conditions-work
locale: es
trackId: 1LqUFHQZ3ZQyV5TmugbGNm
trackSlugEN: condiciones-de-pago-clusterizadas
order: 3
---

La Clustered Payment Conditions utiliza condiciones para crear los clústeres de consumidores. 

Estas condiciones, a su vez, se basan en los datos que el Master Data almacena sobre los consumidores de una tienda.

De esta manera, las reglas de plazo y de pago en cuotas se aplicarán al consumidor o los consumidores que se ajusten a la condición o las condiciones.

> ❗ **Atención**: solo se permite crear cinco clústeres de clientes por condición de pago.

Para configurarlas, escoja una propiedad y, luego, seleccione los parámetros para crear un clúster.

![Pagamentos Clusterizados_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/condiciones-de-pago-clusterizadas/como-funcionan-las-condiciones-de-clusterizacion_1.png)

## Propiedad

La propiedad se rellena con uno de los campos presentes en el [Master Data](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629 "Master Data"). En pocas palabras, podemos decir que los campos son la información de los consumidores que almacena el sistema de VTEX. 

Recordando que existen algunos campos nativos en el Master Data, lo que significa que en el momento que un cliente obtiene acceso al Admin de su tienda, ya hay algunos campos creados en el Master Data. Sin embargo, estos campos no son determinantes.

Además de los campos nativos, el cliente puede [crear los campos que desee](https://help.vtex.com/es/tutorial/como-crio-um-campo-no-master-data--frequentlyAskedQuestions_1829?&utm_source=autocomplete "crear los campos que desee"), y cuando así lo desee. 

En consecuencia, puede crear las propiedades (bien sean de texto, numéricas, verdadero/falso, por fecha) que le parezcan más adecuadas para aplicar a la condición especial de pago por clusterización. 

Sigamos con el ejemplo. En la imagen a continuación, la propiedad usada es "Ubicación", pero otros campos que se podrían usar son "email" y "teléfono", por ejemplo.

## Operador 

Es el factor que determina cómo la propiedad y el valor segmentan a los consumidores.

En la imagen a continuación, la regla se aplicará a todos los clientes que corresponden a la condición "Ubicación es São Paulo", pero esa no es la única alternativa de operador.

Si el administrador de la tienda determinara la condición "Ubicación no es São Paulo", "no es" siendo el operador, la regla de pago sería aplicada a todos los consumidores de la base que no viven en São Paulo.

Dicho esto, hay varios tipos de operadores, dependiendo del tipo de propiedad.

## Valor
Finalmente, el último campo se rellena con un valor relacionado con la propiedad elegida. Sigamos el ejemplo de la condición "Ubicación es São Paulo".

Solo la información "Ubicación" no es suficiente para que el sistema cree un clúster. Así, añadimos una información —valor— que especifica la propiedad elegida. Podemos decir que el valor es una característica de la propiedad.

En este caso, el sistema segmenta a los consumidores que corresponden a la ubicación de "São Paulo" y aplica la regla de plazo y pago en cuotas a esas personas.

Si hay un solo consumidor que corresponde al clúster "Ubicación es São Paulo", esta regla solo se aplicará a este.
