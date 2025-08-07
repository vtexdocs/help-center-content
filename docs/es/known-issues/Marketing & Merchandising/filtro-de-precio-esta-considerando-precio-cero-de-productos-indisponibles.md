---
title: "Filtro de precio está considerando precio (cero) de productos indisponibles"
id: 10L0KKaGrewOQQWSw6Sms0
status: PUBLISHED
createdAt: 2017-04-06T18:12:42.797Z
updatedAt: 2022-12-22T20:48:36.171Z
publishedAt: 2022-12-22T20:48:36.171Z
firstPublishedAt: 2017-04-06T19:27:27.431Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slugEN: filtro-de-precio-esta-considerando-precio-cero-de-productos-indisponibles
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El intervalo de $ 0 a $ X en el filtro de precio e considerado producto inactivo.

## Simulación

1. Entre en el módulo "E-commerce"
2. Tab "Registro del producto"> "Categoría"
3. Seleccione una categoría
4. Haga clic en "acciones"> "Intervalo de precios"
5. Tipo de las pistas deseo que comienzan con "$ 0 a X"
6. En el front de la tienda filtre por el intervalo "$ 0 a X", apareceran los productos indisponibles mismo teniendo precios más grandes que X.

![bug da faixa de preço zero](https://p5.zdusercontent.com/attachment/694212/qR2zoAXjv3j5Ii3wXAkpunOCN?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..va0hXw2swHITvRSOQZxq7w.09rH8abK-XD7syiGh8lN0tqRsLfdWufxOf6XY53roNhzBTsw7VhL5nv4xX5nFlUN3Gv8v7ZwJnlH2N62s1Ifr_eQ7Tgiz8udNf-pUXNpUhDiZOTYJlKiIjBeF6L7M77xQDpqJUztSMT8SLHCP010pjpS_QNSQSEYzrrLiVIZqLnK0gSdMCISox6V3F2-gDywAOPt-mt5E3UwpEb3wLtuU31fxNccKc7fycqp_IYHTofQ7H0OMyb7NnAyioi8K_vw6zprhQ4qwetB1iHUUmiON2zXuL78R-V_2zm5_jydBEo.i8ajgYmXxaopzfHWw-m86A)



## Workaround

Al insertar el intervalo de precios más bajo, no comience por $ 0 (cero) ponga $ 0,01 o $ 1. Por lo tanto productos no disponibles no serán contados en este intervalo de precios.

