---
title: 'Investigar por que un producto aparece indisponible en la tienda'
id: frequentlyAskedQuestions_161
status: DRAFT
createdAt: 2017-04-27T22:39:35.556Z
updatedAt: 2019-12-31T14:23:51.835Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:01:43.712Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slug: por-que-mi-producto-aparece-indisponible-en-la-tienda
legacySlug: 
---

Para que un producto aparezca disponible en la tienda, además de estar con todo el catastro en el catálogo hecho y correcto, es necesario atenderlo por la logística configurada en la tienda. Eso significa que todas las configuraciones del inventario, muelle, transportista, peso, dimensiones, etc., deben estar atendiendo al producto en cuestión.

Cuando ese producto no surge en la tienda o cuando surge como indisponible significa que uno de esos puntos necesita ajustarse. Este artículo tiene como objeto listar los principales medios de investigar, en la plataforma, que debe ser corregido en las configuraciones del producto.

## Registro de producto

1. Verifique si el producto y el SKU están activos.
2. Verifique si la **marca está activa**.
3. Verifique si la **categoría está activa**.
4. Verifique si existe un precio válido **para la política comercial** deseada asociado al SKU.
5. Verifique si la flag “**Exhibir en el sitio**” está marcada en el producto.
6. Verifique si el [Sitio web está asociado a un Binding](/es/faq/website-con-error-como-ajustarlo).
7. Verifique si la flag **Mostrar producto indisponible** está señalada – caso no esté, puede ser que el producto esté indisponible. Para verificar esa hipótesis, siga el checklist abajo.

## Logística

En logística, tenemos un simulador que indica cuáles configuraciones no están atendiendo al carrito (productos u código ZIP) insertados en la validación. Es básicamente la misma prueba que el admin. realiza antes de decidir si un producto está disponible o no.

Usted siempre debe realizar esa simulación con un código ZIP que ES atendido por todos sus transportistas, pues sabrá que, si no se atendió a ese código ZIP para este producto, ningún otro código ZIP será.

1. [Haga clic aquí para acceder el paso a paso de cómo hacer la simulación de flete](/es/tutorial/simulacion-de-flete).
2. Después del ajuste de cualquier uno de los ítems de logística o catastro de producto, aguarde la indexación del producto, verificando la fila de indexación.
3. Finalmente, acceda a la página del producto en cuestión por una pestaña anónima, para evitar visualizar la página en caché.
