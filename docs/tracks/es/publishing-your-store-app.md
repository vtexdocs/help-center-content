---
title: Publicar su store app
id: 6NTZJvsxz9qLwO6XCoxgQb
status: DRAFT
createdAt: 2019-03-07T18:21:25.255Z
updatedAt: 2020-03-13T21:24:46.397Z
publishedAt: 
firstPublishedAt: 2019-03-07T18:22:31.278Z
contentType: trackArticle
productTeam: VTEX IO
slug: publicar-su-store-app
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugES: crear-una-tienda-utilizando-vtex-io
---

En este momento ya estructuró las páginas de su tienda, ha estilizado sus componentes e incluso lo ha personalizado un poco con su propio CSS. Es hora de aprender cómo mostrar nuestro trabajo al mundo.

## Usando `vtex release` para lanzar una nueva versión

Utilizaremos `vtex release` para automatizar algunas tareas, específicamente lanzar una nueva versión dentro de su manifest.json de acuerdo con la nomenclatura de versionamiento semántico, actualizando su CHANGELOG.md, asignando etiquetas (commits tags) y finalmente enviando los cambios a un repositorio remoto (push).

Para este tutorial, vamos a lanzarlo automáticamente al ambiente de estabilización (stable) abriendo su terminal y ejecutando `vtex release major stable`.

Alternativamente, puede solamente usar `vtex release <major|minor|patch> <stable|beta>` para ajustar su release de manera diferente.

## Publicando el app a su registro

El registro es donde se almacenan todos los apps de VTEX.IO. Para que su app aparezca en el registro, deberá ejecutar `vtex publish`.

Alternativamente, puede hacer que ‘vtex release’ haga esto automáticamente por usted agregando ‘postrelease’ al manifest.json de su app.

Ejemplo:

```
//manifest.json
  "scripts": {
    "postrelease": "vtex publish"
  }
```

## Restablecer su workspace

Ahora que acaba de agregar su app al registro. Estamos en el tramo final a medida que comenzamos el proceso para que su app sea instalable.

Restablezcamos su workspace, ya que no podemos promover nuestro app mientras haya apps  vinculados. Esto es extremadamente importante ya que la vinculación (como la desvinculación) hace que nuestro workspace replique el master workspace.
Ejecute:

`vtex workspace reset workspace name`

## Instalar su app

Mientras estábamos desarrollando nuestros apps, creamos varios links (que ahora se eliminaron). Ahora pasamos a hacer que nuestro app sea instalable, lo que significa que ofrecerá la misma experiencia al usuario final, independientemente de los links y las configuraciones.

Esta etapa es importante ya que estamos transformando nuestro app en un bundle.

Piense en los links como temporales (en constante actualización) e instalando (agrupando su app) como permanente.

## Promover su workspace a master 

Ahora tenemos que promover el workspace a master. Esto indica a VTEX.IO que el workspace seleccionado es la producción lista y estará recibiendo tráfico.

```
vtex promote
```

## Switching DNS

Abra un ticket y háganos saber que es hora de apuntar nuestro DNS hacia su app. Estaremos encantados de hacerlo de manera rápida y eficiente.

