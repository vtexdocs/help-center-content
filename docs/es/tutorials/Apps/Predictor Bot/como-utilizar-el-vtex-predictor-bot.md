---
title: 'Cómo utilizar el VTEX Predictor Bot'
id: 5meZHatpMQskKgoAAeyOkW
status: ARCHIVED
createdAt: 2017-09-19T14:56:16.378Z
updatedAt: 2020-07-22T16:03:52.128Z
publishedAt: 
firstPublishedAt: 2017-09-19T15:02:56.612Z
contentType: tutorial
productTeam: Others
author: authors_35
slugEN: how-to-use-vtex-predictor-bot
locale: es
legacySlug: como-utilizar-el-vtex-predictor-bot
subcategoryId: 5zTyefbWFicMY2awMyU2SM
---

VTEX Predictor Bot es una aplicación __gratuita__ diseñada por un equipo de desarrolladores de VTEX en un esfuerzo para transformar datos brutos en insights que posibiliten a los gerentes de la tienda aumentar el rendimiento en tiempo real (😱).

Por el momento su tienda debe tener un promedio de al menos 1 venta por hora para poder usar este bot. Estamos ajustando los parámetros para incluir todas las tiendas VTEX.

_Demonstramos la versión beta en VTEX Day 2017. Si usted lo perdió, puede ver el [vídeo](https://www.youtube.com/watch?v=axwfAHC99Zw "VTEX Predictor Bot en VTEX Day 2017")._

Usando el análisis de series temporales de sus datos para detectar anomalías, el algoritmo crea diferentes clusters. Estos pueden ser separados en días específicos de la semana, después períodos, días festivos... en esencia, el bot identifica cualquier tipo de estacionalidades, picos u otros comportamientos que determinen o incluso sean diferentes de su desempeño medio.

Al combinar datos de diferentes fuentes, el bot es capaz de predecir cómo sus ventas deberían estar en cada momento.

## Como el Predictor Bot funciona

Comenzamos por una idea general de cómo está el rendimiento de su tienda.
![sales data](https://images.contentful.com/alneenqid6w5/4LVuTVHevYw6eaykMwQY4M/8b9a06a17479a1595c05d879071ad320/sales_data.png)

Como se muestra en la imagen de arriba, cada tienda típica tiene un patrón - incluso sobre una base diaria, o por hora. Debemos identificar este patrón para iniciar cualquier análisis.

Pero no todo es fácil. Muchas veces vemos algo más o menos así:
![crazy sales data](//images.contentful.com/alneenqid6w5/K7vwyviY4S6Q4CwSOSsaW/a644e1f182e82da152d69c661f3f44b7/crazy_sales_data.png)

En este caso, debemos quitar discrepancias y comparar nuevos conjuntos de datos contra otros períodos. Continuamos iterando así hasta que nuestro algoritmo sepa que tenemos un conjunto seguro de datos. En ese punto, podemos analizar y __identificar los eventos que huyen al patrón.__

Al final, nuestro gráfico previsto es algo como la curva abajo. La línea azul es el resultado de nuestro modelo. Esta curva está contenida en un intervalo de confianza (área azul).

![unnamed](//images.contentful.com/alneenqid6w5/4dyeHM6ycoSGs0kgMUSQqo/56ff4ea1a3478dfea3fc8c4d9860280c/unnamed.png)

Siempre que encontramos algo, le informamos! Si su rendimiento actual se aleja de nuestro modelo pero está dentro de los intervalos, enviamos sólo un __ALERTA__. Si está más allá, usted recibe una advertencia __CRÍTICA__.

## Qué hace Predictor Bot

Podemos mandar tres tipos de correos electrónicos. Aquí hay un ejemplo:

![Vtex Predictor Bot template](//images.contentful.com/alneenqid6w5/1Ft1I0ibI4g86okS4IYKy0/293929eb488252dabe8cdadee29c86e7/Vtex_Predictor_Bot_template.png)

Este es un ejemplo de notificación enviada cuando la anomalía ya no existe y las ventas de su tienda se han vuelto a la normalidad.

El status __CRÍTICO__ viene cuando las ventas cayeron demasiado.
El status __ALERTA__ indica un hipo, pero que todavía vale la pena mencionar.

## Cómo instalar el Predictor Bot

La instalación es bastante simple.

1. Acceda a su tienda a través de la URL `https://www.{AccountName}.myvtex.com/admin`.
2. Entre en la pestaña __Extension Store__ y busque la aplicación __VTEX Predictor Bot__.
3. Haga clic en el botón __Instalar__.

Listo.

Con la aplicación instalada, comenzaremos a monitorear su cuenta. Y siempre que una anomalía sea detectada, un e-mail será enviado al usuario Master de la tienda.
_El e-mail del usuario Master se encuentra en la guía __Cuenta__ en el módulo __License Manager__._
