---
title: 'Estructura de carpetas del CMS '
id: 75yhGhiXHMnV6Ib0rOAnue
status: ARCHIVED
createdAt: 2020-01-08T19:46:39.934Z
updatedAt: 2022-01-10T21:46:25.587Z
publishedAt: 
firstPublishedAt: 2020-01-13T14:28:57.365Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: cms-folder-structure
locale: es
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugES: cms
---

En VTEX, toda nueva cuenta ya tiene carpetas preinstaladas en su CMS. Sin embargo, algunas de estas son __obligatorias__. 

Es decir, si su tienda no tiene estas carpetas - __con los nombres exactamente iguales__ a los que indicamos en este artículo - tendrá problemas de navegación e indexación.

Las otras carpetas son apenas __sugerencias__ por ser útiles para la mayoría de las tiendas. Pero su ausencia no afecta en absoluto a una cuenta.

En este artículo, hablaremos de todas estas carpetas.


## Carpetas obligatorias

Toda tienda debe tener, sin excepción, las siguientes carpetas en el CMS para asegurar el correcto funcionamiento de la navegación e indexación:
- Búsqueda 
- Categoría
- Departamento
- Login 
- Producto

Vea abajo estas carpetas básicas en el CMS:

![2 1](https://images.ctfassets.net/alneenqid6w5/6jvwsPMcIBTllVekqROlkk/ea2d4a9d0d4cdb8a07dd02a3add4b40b/2_1.png)

Estas carpetas vienen de forma predeterminada en el ambiente de todas las tiendas VTEX.

<div clas="alert alert-warning">
Atención: los nombres de las carpetas obligatorias <strong>no</strong> deben ser alterados.
</div>

Como las carpetas se refieren a páginas dinámicas, sus nombres no aparecen en la navegación del cliente. 

Esto significa que el hecho de que la edición de los nombres sea vetada no afecta al texto final de sus URLs ni, por lo tanto, a la internacionalización de su sitio web.

De esta manera, los nombres de los layouts pueden editarse sin ningún problema.

## Carpetas importantes

Algunas carpetas del CMS no son obligatorias, pero son útiles. Por lo tanto, recomendamos que no las excluya.

Estas son:
- `/account`: cuenta del cliente
- `/account/orders`: pedidos del cliente

Para estas dos carpetas, lo que importa es el control o placeholder que lee su contenido. Sus nombres pueden ser editados libremente.

<div class="">
Tanto <code>/account</code> como <code>/account/orders</code>  son carpetas privadas. Por lo tanto, ambas requieren autenticación. Vea en el artículo <a href="https://help.vtex.com/es/tutorial/exigir-autenticacion-en-paginas-de-la-tienda">Exigir autenticación en páginas de la tienda</a> cómo asegurarse de que están configuradas para solicitar la autenticación del usuario.

</div>

## Carpetas útiles

Hay carpetas que, aunque no son tan importantes como las anteriores, suelen ser útiles para la mayoría de las tiendas. 

Estas son:
- `/sistema/buscavazia`: carpeta donde el usuario es dirigido si la búsqueda no encuentra resultados.
- `/sistema/{codigoHTTP}`: carpeta que renderiza páginas de errores de acuerdo con los códigos de status HTTP, tales como 404 (página no encontrada), 401 (no autorizado) y 500 (error de servidor).
- `/sistema/marcas`: carpeta que contiene layouts de páginas de marca, que pueden ser personalizadas con un layout exclusivo. Si no hay layout específico para marcas, estas páginas se renderizarán de la misma manera que la carpeta de búsqueda. Para entender cómo funcionan las páginas de marca, consulte el artículo [Cómo funciona la búsqueda de VTEX](https://help.vtex.com/es/tutorial/como-funciona-la-busqueda-de-vtex).

