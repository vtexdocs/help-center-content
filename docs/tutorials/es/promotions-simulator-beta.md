---
title: 'Simulador de Promociones '
id: 4zc8SNqjqeIJ0ZRMhjlnvy
status: PUBLISHED
createdAt: 2022-09-13T21:22:59.620Z
updatedAt: 2024-03-13T19:31:16.281Z
publishedAt: 2024-03-13T19:31:16.281Z
firstPublishedAt: 2022-09-13T22:59:58.058Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: simulador-de-promociones-beta
locale: es
legacySlug: simulador-de-promociones-beta
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

>⚠️ Los usuarios deben tener un [rol](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) con permisos para ver el módulo **Promociones** en el Admin VTEX para poder acceder al **Simulador de promociones**.

El **Simulador de promociones** es una herramienta que permite ver las promociones creadas en tu tienda VTEX que se aplicaron al carrito y sus condiciones de activación. También puedes probar la aplicación de promociones antes de activarlas, incluyendo promociones inactivas y programadas.

Como las promociones pueden configurarse de diversas maneras, es importante poder ver la [competencia](https://help.vtex.com/es/tutorial/como-funciona-la-competencia-de-promociones--tutorials_2270) y la acumulación de promociones durante la compra y los activadores de dichas promociones.

El **Simulador de promociones** está disponible para todas las tiendas VTEX mediante [Cartman](https://help.vtex.com/es/tutorial/configurar-cartman--1ACMTStZYkMqB0lTgwg451), una herramienta para los administradores de la tienda en la etapa de checkout. Para acceder al simulador, sigue los pasos a continuación:

1. En la barra superior del Admin VTEX, haz clic en el botón `Vista previa `para abrir la página de acceso restringido de tu tienda.

   Si lo prefieres, puedes acceder a la página directamente utilizando la URL `https://{nombredelacuenta}.myvtex.com/`, sustituyendo `{nombredelacuenta}` por el nombre de tu cuenta VTEX.

2. Agrega productos al carrito y accede al checkout mediante `https://{nombredelacuenta}.myvtex.com/checkout/#/cart`.

3. Haz clic en el botón azul <img src="//images.ctfassets.net/alneenqid6w5/2Z1d5lHtVM7E7SvL58C8UW/acc0fa24cc8ae2e008d4a8d0f466b035/cartman-removebg-preview.png" alt="cartman-icon" width="25"/> en la parte inferior derecha de la página para iniciar Cartman.
4. Haz clic en **Simulador de promociones**.

   En la nueva ventana, verás una lista de los productos que están en tu carrito. Podrás ver todas las promociones aplicadas y aplicables a cada uno de los ítems.

![Simulator-promo-es-gif-1](https://images.ctfassets.net/alneenqid6w5/66PaJF2TBi2T1VBEFPlLuz/61187eee812b80ec80769704578aad35/simulador-promo-es-230706.gif)

La interfaz del **Simulador de promociones** presenta la siguiente información:

| Columna | Descripción |
|---|---|
| **Producto** | Lista de los productos en el carrito. |
| **Precio** | Precio anterior a las promociones (**De**) y precio final (**Por**) con las promociones aplicadas. |
| **Cantidad** | Cantidad de ítems en el carrito. |
| **Total** | Precio total que se cobrará por el producto, considerando los descuentos de la promoción y la cantidad de ítems. |
| **Descuento** | Status del descuento en el carrito, el cual puede ser: `Aplicado` o `No aplicado`. El status `Aplicado` indica que al menos una promoción fue aplicada al producto. |

>ℹ️ En la esquina derecha de la pantalla, encontrarás un botón de megáfono que te permitirá enviar tu opinión sobre tu experiencia usando el **Simulador de promociones**.

### Actualizar el simulador

Si necesitas agregar o remover ítems del carrito, puedes mantener la ventana del simulador abierta. Después de editar el carrito, haz clic en `Actualizar` en el **Simulador de promociones** para analizar las promociones aplicadas al carrito.

### Buscar y filtrar promociones

La herramienta tiene una barra de búsqueda que permite buscar promociones por nombre del producto o nombre de la promoción. Además, puedes filtrar las promociones por **Tipo de promoción** ([Regular](https://help.vtex.com/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), [Comprar juntos](https://help.vtex.com/es/tutorial/comprar-juntos-registro-de-promocion--tutorials_323), [Más por menos](https://help.vtex.com/es/tutorial/mas-por-menos--tutorials_3255), [Descuento progresivo](https://help.vtex.com/es/tutorial/descuento-progresivo--tutorials_324), [Compra y gana](https://help.vtex.com/es/tutorial/como-funciona-la-promocion-compre-y-gane--tutorials_322) o [Promoción de campaña](https://help.vtex.com/es/tutorial/promocion-de-campana--1ChYXhK2AQGuS6wAqS8Ume)) y **Descuento** (Aplicado o No aplicado).

### Ver detalles de las promociones aplicadas

Al hacer clic en cada producto, puedes ver más información sobre las promociones aplicadas, detalles sobre sus efectos y por qué se activaron. También puedes ver las promociones no aplicadas y los motivos por los que no se aplicaron.

### Editar promociones

Para editar una promoción, sigue los pasos a continuación:

1. En el **Simulador de promociones**, haz clic en la línea del producto o en la flecha <i class="fas fa-chevron-right"></i>.
2. Haz clic en el nombre de la promoción que deseas editar. Se te redirigirá al formulario de la promoción.
3. Edita los [campos de la promoción](https://help.vtex.com/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#1-cuales-son-los-datos-generales-de-la-promocion).
4. Al terminar de realizar los cambios, haz clic en `Guardar`.

### Simular promociones

El **Simulador de promociones** permite probar la aplicación de otra promoción o simular lo que sucedería al desactivar promociones aplicadas. Para utilizarlo, haz clic en el botón `Seleccionar promociones` en la parte superior derecha de la página según se muestra en la imagen a continuación.

![ui-Simulator-promo-es-gif-2](https://images.ctfassets.net/alneenqid6w5/4CkGZCw0142IDUwH8VVf7A/488e9025886fa184fa38c06b55129139/ui-simulador-promo-es-230706.gif)

Para ejecutar una simulación, sigue estos pasos:

1. En el **Simulador de promociones**, haz clic en `Seleccionar promociones` en la parte superior derecha de la página.

   Verás una lista de todas las promociones registradas en tu tienda, incluyendo las activas, pausadas, programadas y finalizadas.

2. Selecciona una o más promociones para simular su aplicación al carrito. También puedes desmarcar promociones activas si deseas simular el desactivarlas.
3. Haz clic en el botón `Simular`.

   Verás el resultado de la simulación a partir de las promociones seleccionadas. Para ver si las promociones probadas se aplicaron a los ítems del carrito en la simulación, fíjate en el status de la columna **Descuento** o haz clic en el producto.

>ℹ️ Se pueden aplicar promociones en productos que ya tienen una promoción activa. A pesar del conflicto que se genera entre las promociones, el sistema de VTEX siempre elegirá la promoción más beneficiosa para los clientes de tu tienda, tomando en consideración el precio total de los ítems o el envío.

### Más información

* [Cómo funcionan las promociones](https://help.vtex.com/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR)
* [Promociones para escenarios específicos](https://help.vtex.com/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy)
* [Configurar Cartman](https://help.vtex.com/es/tutorial/configurar-cartman--1ACMTStZYkMqB0lTgwg451)
