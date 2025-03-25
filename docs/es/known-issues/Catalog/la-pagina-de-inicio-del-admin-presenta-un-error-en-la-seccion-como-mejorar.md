---
title: "La página de inicio del Admin presenta un error en la sección 'Cómo mejorar' del Catálogo"
id: 4f8oPMiiCvBMtjFUoOVIGv
status: CHANGED
createdAt: 2021-09-29T14:02:37.809Z
updatedAt: 2022-12-09T18:27:53.061Z
publishedAt: 2021-09-29T14:12:10.806Z
firstPublishedAt: 2021-09-29T14:12:10.806Z
contentType: knownIssue
productTeam: Catalog
author: 0QBQws7rk0t5Mnu8fgfUv
tag: Catalog
slugEN: admin-homepage-has-an-error-in-how-to-improve-section-of-the-catalog
locale: es
kiStatus: Fixed
internalReference: 
---

## Sumario

La página de inicio del Admin VTEX contiene una sección llamada *Cómo mejorar*, que indica los problemas identificados en la tienda, y el enlace para que el usuario sea redirigido al módulo con el problema. 

Cuando se identifican problemas relacionados con el Catálogo, los usuarios son redirigidos al módulo Gestión del stock, directamente a los productos más vistos que están sin stock. 

Sin embargo, se observó que cuando la sección *Catálogo* indicaba `1` problema encontrado, los usuarios eran redirigidos al Catálogo de forma genérica, sin que se identificara el producto sin stock.  

Esto se debía a que el número `1` se había configurado por defecto, incluso cuando no había realmente un problema con el stock. 


## Simulación

Accede al **Admin VTEX > Home > Cómo mejorar > Catálogo**. Si la sección indica que hay `1` problema encontrado, al hacer clic en `Productos sin stock en los más vistos`, serás redirigido a la página del Catálogo.

![Como melhorar ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-pagina-de-inicio-del-admin-presenta-un-error-en-la-seccion-como-mejorar_1.png)


## Workaround

No es necesario que el usuario realice ninguna acción porque ya hemos solucionado el problema. Hemos añadido el siguiente mensaje en la sección *Cómo mejorar*, cuando no se han identificado problemas: 

`No encontramos ningún problema en su catálogo.`

![Como melhorar fixed ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-pagina-de-inicio-del-admin-presenta-un-error-en-la-seccion-como-mejorar_2.png)


