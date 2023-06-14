---
title: '"Confirmar acción" está indisponible en Catálogo, Sellers, CMS y Tarjeta de regalo por Google Chrome'
id: 5UzVaWa63dPwPlbK3n2AH5
status: PUBLISHED
createdAt: 2021-07-27T22:29:39.402Z
updatedAt: 2022-12-14T22:44:54.580Z
publishedAt: 2022-12-14T22:44:54.580Z
firstPublishedAt: 2021-07-28T17:29:39.548Z
contentType: knownIssue
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
tag: Catalog,Gift Card,Portal (CMS),Suggestions
slug: confirmar-accion-esta-indisponible-en-catalogo-vendedores-cms-y-tarjeta-de
locale: es
kiStatus: Fixed
internalReference:  
---

## Sumario

La [actualización 92 de Google Chrome](https://chromestatus.com/feature/5148698084376576) eliminó el suporte con las funciones de Javascript `alert` y `confirm` en el iframe de origen cruzado. Esto eliminará el aviso de «confirmar acción» en su Admin VTEX en los módulos Catálogo, Sellers, Tarjeta de regalo y CMS, lo que hace que algunas acciones no se puedan realizar.


## Simulación


Los avisos de «confirmar acción» en los módulos de Tarjeta de regalo, Sellers y Catálogo no están disponibles debido a la última actualización de Google Chrome. Las acciones que los usuarios no podrán realizar incluyen, por ejemplo:

- __Tarjeta regalo:__ los usuarios no pueden cancelar una tarjeta de regalo.
- __Catálogo:__ los usuarios no pueden eliminar imágenes de SKU, eliminar marcas, eliminar tipos de listas, eliminar o habilitar anexos, editar colecciones XML, eliminar condiciones comerciales y eliminar proveedores.
- __Sellers (solo en las páginas de Gestión y SKU binding): __los usuarios no pueden deshabilitar sellers ni eliminar vínculos de SKU.
- __CMS (configuración):__ los usuarios no pueden eliminar áreas geográficas en la página de configuración de CMS.


## Workaround

Para evitar este problema, los usuarios pueden:

- Acceder a Admin VTEX desde otro navegador como Mozilla Firefox, Internet Explorer, Microsoft Edge o Safari de Apple.  
- Agregar el siguiente flag a su acceso directo de Google Chrome:  

`--disable-features="SuppressDifferentOriginSubframeJSDialogs"`   

Consulte la [documentación de Google Chrome](https://support.google.com/chrome/a/answer/6271282?hl=en#zippy=%2Cwindows) para descubrir cómo.  


