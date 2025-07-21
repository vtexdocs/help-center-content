---
title: "Headless CMS no está monetizando datos entre espacios de trabajo"
id: iDUOWMDKXPb6ZjO19kmO7
status: PUBLISHED
createdAt: 2025-04-24T19:24:19.019Z
updatedAt: 2025-04-24T19:24:20.160Z
publishedAt: 2025-04-24T19:24:20.160Z
firstPublishedAt: 2025-04-24T19:24:20.160Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: headless-cms-no-esta-monetizando-datos-entre-espacios-de-trabajo
locale: es
kiStatus: Backlog
internalReference: 1215583
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La característica que simula los datos entre los espacios de trabajo dentro de Headless CMS no está funcionando actualmente. En este momento, los borradores que se crean en un espacio de trabajo también se pueden ver en el maestro.


##

## Simulación


Intente crear un nuevo borrador en un espacio de trabajo, como en el ejemplo de abajo, verá que la versión simulada se guardará:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/CMS/headless-cms-no-esta-monetizando-datos-entre-espacios-de-trabajo_1.png)

Después de editar, prueba a guardar los cambios, la versión simulada se convertirá en un borrador normal:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/CMS/headless-cms-no-esta-monetizando-datos-entre-espacios-de-trabajo_2.png)

Pero si accedes al entorno maestro de tu tienda, el borrador también estará allí:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/CMS/headless-cms-no-esta-monetizando-datos-entre-espacios-de-trabajo_3.png)

Este borrador también se puede publicar


##

## Workaround


N/A





