---
title: 'Suggestion devuelve error al intentar procesar sugerencia de SKU. ¿Que hacer?'
id: 2OAWpCkw3YQwWGAmss6sCG
status: CHANGED
createdAt: 2019-01-24T20:30:45.252Z
updatedAt: 2023-03-22T20:55:46.996Z
publishedAt: 2019-12-31T14:25:03.994Z
firstPublishedAt: 2019-01-24T20:30:45.711Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_24
slug: suggestion-devuelve-error-al-intentar-procesar-sugerencia-de-sku
locale: es
legacySlug: 
---

Al intentar aceptar la sugerencia de un SKU, el marketplace puede recibir el siguiente error:

`We could not process the suggestion`

Esto sucede cuando hay algún error en el registro del SKU en el seller.

Para identificar cuál es el error, siga los pasos abajo:
1. Entre en el módulo __Sugerencias__.
2. Haga clic en el SKU que el marketplace no aceptó.![erroSuggestion1](//images.contentful.com/alneenqid6w5/2T4ywpCeacosAGoQCS0k4M/f27f1729b879a02cd11f5bc916c8f8a6/erroSuggestion1.png)
3. Entre en el __developer tools__ del navegador (para eso, si está usando Google Chrome, presione `F12` en Windows o `Command + Option + I` en Mac).
4. En developer tools, haga clic en la pestaña __Network__.
5. Todavía en developer tools, haga clic en la opción __All__.![erroSuggestion2](//images.contentful.com/alneenqid6w5/tXLZF0IEO4KKa6O4WuQg6/58adc90c3afa5ce2d02238079cabd958/erroSuggestion2.png)
6. Haga clic en el botón __Aceptar__ del módulo Sugerencias.
7. Usted verá una lista de las llamadas activadas por el botón Aceptar.
8. Si una de ellas está en rojo y con status `400`, como en la siguiente imagen, haga clic en esa llamada.![erroSuggestion3](//images.contentful.com/alneenqid6w5/3aObfkI9zqSOaUmGqu8MMU/0532f37ce192de8b36672b7e633ab99c/erroSuggestion3.png)
9. Usted verá a continuación la descripción del error que ocasionó el problema en el procesamiento de la sugerencia de SKU.![erroSuggestion4](//images.contentful.com/alneenqid6w5/4yN8mswXdYoKO6wcsyO0eW/2de11f133c3ee911c1e712d7b1188711/erroSuggestion4.png)

Para resolverlo, el seller debe resolver el error señalado en esta descripción.

Después de eso, la sugerencia será actualizada en el marketplace, y podrá entonces ser aprobada con éxito.
