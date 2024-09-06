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
slug: prueba-ab-por-que-no-esta-funcionando-google-analytics
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
![](https://images.contentful.com/alneenqid6w5/3GIGsJXbo4KAMikCqesM6s/e8231671043f3ce763c8faf87718d6d7/testeAB-controle1-300x138.png)

__Pantalla Script__:
![](https://images.contentful.com/alneenqid6w5/7gUgGNnvlmcQyiW4A0A6ao/dac8e58e0931686de3e9e4ae46c66afa/testeAB-script-300x148.png)

__Pantalla Template__:
![](https://images.contentful.com/alneenqid6w5/4u6uQHYOPuw6Ws8CYKCISo/d04c5fbcc08a5de8a05a242ef76e7ecf/testeAB-template-300x216.png)
