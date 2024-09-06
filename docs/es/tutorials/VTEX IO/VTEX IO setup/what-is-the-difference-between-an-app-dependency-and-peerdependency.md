---
title: '¿Cuál es la diferencia entre una app dependency y una peer dependency?'
id: 13co2PvHHnsDNBNyrWXXvM
status: ARCHIVED
createdAt: 2019-04-01T21:52:38.336Z
updatedAt: 2020-03-13T21:25:01.650Z
publishedAt: 
firstPublishedAt: 2019-04-01T22:00:09.913Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slug: cual-es-la-diferencia-entre-una-app-dependency-y-una-peer-dependency
locale: es
legacySlug: cual-es-la-diferencia-entre-una-app-dependency-y-una-peer-dependency
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---


Suponiendo que la aplicación A depende de la aplicación B y el usuario instala la aplicación A, esto significa que la aplicación B es necesaria para que la aplicación A funcione correctamente. En este caso, cuando el usuario instala la aplicación A en un workspace, la aplicación B será **automáticamente** agregada a la dependency tree de ese workspace.

Cuando una aplicación depende de otra, usted está diciendo que quiere utilizar su API, o algún componente que la dependencia exporta. Un ejemplo de esto es cuando usted importa algún componente del StyleGuide.

Por ejemplo:

`import { Button }  from 'vtex.styleguide'`


## Peer dependency

En el caso de una peer dependency, podemos configurar la aplicación A para ser dependiente de la aplicación B. Esto significa que el VTEX IO va a entender que la aplicación B es necesaria para que la aplicación A funcione también. Se infiere que la aplicación B ya debe estar instalada en el workspace antes de que se pueda instalar la app A.

Una aplicación con peer dependency declara que la app no se puede instalar sin la instalación de una dependencia adicional.

Un ejemplo sería el Admin del Pages. El usuario no puede instalarlo sin primero instalar el `vtex.store`.

```

{
  ...
  "peerDependencies": {
      "vtex.store": "2.x"
  },
  "dependencies": {
      "vtex.styleguide": "9.x"
  }
}
  ```
