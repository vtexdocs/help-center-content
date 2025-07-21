---
title: "hCMS presenta problemas cuando se intenta publicar una gran cantidad de contenido"
id: 2O2kMLO9hhohCn9qykDFmt
status: PUBLISHED
createdAt: 2025-07-18T14:08:02.418Z
updatedAt: 2025-07-18T14:08:03.144Z
publishedAt: 2025-07-18T14:08:03.144Z
firstPublishedAt: 2025-07-18T14:08:03.144Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: hcms-presenta-problemas-cuando-se-intenta-publicar-una-gran-cantidad-de-contenido
locale: es
kiStatus: Backlog
internalReference: 1262405
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar publicar una página con una gran cantidad de contenido, el hCMS puede presentar problemas. El problema parece estar en el módulo de publicaciones, ya que el borrador se puede guardar, el problema no está en los Datos Maestros.


##

## Simulación


Intente añadir un texto largo, por ejemplo, en una página hCMS. El borrador se guardará correctamente, pero al intentar publicarlo, no será posible. El error será:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/CMS/hcms-presenta-problemas-cuando-se-intenta-publicar-una-gran-cantidad-de-contenido_1.png)

En la red, verá:

    {"errors":[{"message": "Request failed with status code 500", "name": "Error"}]}




##

## Workaround


N/A





