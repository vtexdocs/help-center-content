---
title: 'Prueba AB: ¿por qué no está funcionando? (Google Analytics)'
id: frequentlyAskedQuestions_629
status: PUBLISHED
createdAt: 2017-04-27T22:31:14.775Z
updatedAt: 2019-12-31T14:24:07.364Z
publishedAt: 2019-12-31T14:24:07.364Z
firstPublishedAt: 2017-04-27T23:02:25.985Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_84
slugEN: ab-testing-why-is-it-not-working-google-analytics
locale: es
legacySlug: prueba-ab-por-que-no-esta-funcionando-google-analytics
---

Normalmente el escenario ocurre porque el Dueño de tienda no consigue grabar el script que el Analytics genera dentro del Template.

Para solucionar el escenario basta seguir el paso a paso:

1. Cree un contentPlaceHolder dentro del Template.
2. En la página en que la Prueba AB está siendo aplicada cree un control del tipo HTML y grabe el script.

Así la Prueba AB funcionará con éxito.

Siguen las pantallas que ejemplifican el paso a paso:

__Pantalla Control__:
![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/others/prueba-ab-por-que-no-esta-funcionando-google-analytics_1.png)

__Pantalla Script__:
![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/others/prueba-ab-por-que-no-esta-funcionando-google-analytics_2.png)

__Pantalla Template__:
![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/others/prueba-ab-por-que-no-esta-funcionando-google-analytics_3.png)
