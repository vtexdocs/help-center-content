---
title: 'Qué hacer al recibir error en la simulación de flete'
id: 3bkJwe0Yj6qEkuYKUWwKwK
status: PUBLISHED
createdAt: 2017-05-09T14:03:03.097Z
updatedAt: 2023-10-10T16:20:54.988Z
publishedAt: 2023-10-10T16:20:54.988Z
firstPublishedAt: 2017-05-09T14:06:10.341Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_35
slugEN: what-to-do-when-receiving-an-error-message-during-shipping-simulation
locale: es
legacySlug: que-hacer-al-recibir-error-en-la-simulacion-de-flete
---

¿Cómo proceder al hacer una simulación de flete y no encontrar el resultado esperado?

Vamos a diseñar aquí el paso a paso para comprobar la configuración de Logística.

Antes de empezar, vale la pena recordar que la [Simulación de Flete](/es/tutorial/simulacion-de-flete/) retorna o resultado da API de [Cálculo de SLA](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping/calculate). Recomendamos siempre el uso de las API´s. Si no tiene acceso, consulte el Administrador de su tienda y verifique qué perfil de acceso está asociado a su usuario.

Para ilustrar ese artigo crearemos un escenario en el que el producto __X-Box__ no está siendo entregado en el Código Postal 22451-451 para la política comercial 1. El mensaje de error es este: "_No fue posible generar el carrito. Vea los detalles abajo_".

Hay algunos factores que pueden influir en una simulación, por lo que recomendamos siempre comenzar desde lo más básico, verificar si el __X-Box__ es un producto activo y si está con las configuraciones correctas. El camino más rápido para ello es en el [Indexed-Info](https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site#indexed-info).

Una vez hecho lo anterior, tenemos que chequear la Logística como una totalidad, o sea, cuál es el stock de X-Box y qué transportadora está asociada Política Comercial 1. Esa información está contenida en el Muelle.

Vía API sería también bien sencillo. Haciendo la llamada [Cálculo de SLA](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping/calculate) es fácil identificar el ID de la transportadora y así hacer el camino inverso.

Pero, ¿qué hacer para corregirlo?

Esto depende de cada comerciante, pero después de reconfigurar la Logística Stock-Muelle-Transportadora es posible que también sea necesario modificar la [planilla de la transportadora](https://help.vtex.com/es/tutorial/como-montar-la-plantilla-de-flete).

Una forma rápida de verificar el range de Códigos Postales de una transportadora es usando la pestaña [Valores de Flete](/es/tutorial/gestionar-valores-de-flete/).
