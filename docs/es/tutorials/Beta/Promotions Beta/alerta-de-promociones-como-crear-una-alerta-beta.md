---
title: 'Alerta de promociones: cómo crear una alerta (Beta)'
id: 14nC51OlGoCSBLlBkZhkRR
status: PUBLISHED
createdAt: 2022-11-18T17:08:57.812Z
updatedAt: 2023-03-30T17:20:58.855Z
publishedAt: 2023-03-30T17:20:58.855Z
firstPublishedAt: 2022-11-18T19:07:21.814Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: promotion-alerts-how-to-create-an-alert-beta
locale: es
legacySlug: alerta-de-promociones-como-crear-una-alerta-beta
subcategoryId: 6iTRZiMeCGXYiO2ckABFZi
---

>ℹ️ Este módulo está en fase beta. Esto significa que estamos trabajando para mejorarlo. Si tienes alguna duda, por favor ponte en contacto con nuestro [equipo de soporte](https://support.vtex.com/hc/pt-br/requests).

Crear promociones es una buena estrategia para atraer a más compradores a tu sitio de ecommerce. Al configurarlas, es muy importante tener cuidado de que los descuentos aplicados tengan los efectos esperados, ya que los errores al registrar promociones pueden causar pérdidas de ingresos.

Para minimizar los efectos indeseados en promociones, la página **Alerta de promociones** permite crear alertas con condiciones para verificar si las promociones están correctas y definir [acciones preventivas](#acciones-preventivas) para evitar ventas con precios inesperados. Sin embargo, se debe realizar un pedido para activar la primera alerta.

Si se identifican las [condiciones](#condiciones) definidas en la alerta, el sistema genera una alerta con la información sobre el producto vendido a precios inesperados y aplica las [acciones preventivas](#acciones-preventivas) configuradas. Si se configuró la acción de [desactivar las promociones](#acciones-preventivas), el escenario indeseado no ocurrirá nuevamente, ya que la promoción estará desactivada.

Por ejemplo, imagina que creaste una alerta y, en el paso [Acciones preventivas](#acciones-preventivas), marcaste la opción `Desactivar promociones inmediatamente`. Luego, si un producto se vende con las condiciones definidas anteriormente, el sistema VTEX desactivará la promoción vigente inmediatamente.

Sigue las instrucciones a continuación para crear una nueva alerta:

1. En el Admin VTEX, accede a *Promociones > Alertas de promociones*, o escribe *Alertas de promociones* en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Crear alerta`. Se te redirigirá a la página para registrar una nueva alerta.
3. Ingresa la información de la alerta:
   * **Status:** el status de la alerta creada será `Activo` de forma automática. Para desactivarla, haz clic en el botón de alternar <i class="fas fa-toggle-on"></i>.
   * **Nombre:** es el nombre de la alerta de promoción.
   * **Descripción (opcional):** breve texto informativo sobre la alerta.
4. Escoge las condiciones para activar la alerta, según se describe en la sección [Condiciones](#condiciones).
5. Define las acciones preventivas que la alerta ejecutará, según se describe en la sección [Acciones preventivas](#acciones-preventivas).
6. Determina las restricciones para la aplicación de la alerta, según se describe en la sección [Restricciones](restricciones-opcional). Este paso es opcional.
7. Haz clic en `Guardar`.

La nueva alerta de promoción se habrá creado con éxito.

## Condiciones

En esta sección del formulario, debes configurar las condiciones para activar la alerta. En el campo `Cuando el descuento es mayor que`, ingresa un valor hasta 99.99. El valor corresponde al porcentaje (%) que será monitoreado por la herramienta.

Después de determinar el porcentaje, debes escoger entre dos condiciones que activarán la nueva alerta:

- **Todo el catálogo:** todos los productos de tu catálogo VTEX se incluirán en la alerta.
- **Productos específicos:** puedes seleccionar los productos que se incluirán en la alerta a partir de los siguientes criterios.
   * Marca
   * Colección
   * Producto
   * Categoría
   * SKU

Luego, aparecerá un campo para que definas los detalles del criterio que seleccionaste anteriormente. Por ejemplo, si seleccionaste el criterio `Marca`, debes determinar qué marca se incluirá en la condición.

Después de definir la condición, haz clic en `Confirmar`.

## Acciones preventivas

En esta sección, debes configurar las acciones que se ejecutarán cuando se active la alerta. Hay dos opciones:

- **Desactivar las promociones inmediatamente:** haz clic en el botón de alternar <i class="fas fa-toggle-on"></i> para activar la acción preventiva que desactiva inmediatamente la promoción cuando no cumple las condiciones definidas.
- **Alerta por email:** haz clic en el botón de alternar <i class="fas fa-toggle-on"></i> para activar el recibir una alerta por email cuando una promoción no cumpla con las condiciones definidas. Debes seleccionar el email al que deseas recibir las alertas.

## Restricciones (opcional)

En esta sección, puedes escoger qué promociones se deben considerar para la alerta, si alguna.

Para seleccionarla, haz clic sobre el botón de alternar <i class="fas fa-toggle-on"></i> del campo `Excluir las promociones específicas de la alerta` para activar la restricción. Aparecerá un campo para que selecciones las promociones específicas que se excluirán de la alerta.

Si activas esta opción y no seleccionas ninguna promoción, no podrás guardar la alerta.

## Más información

- [Alertas de promociones](https://help.vtex.com/es/tutorial/alerta-de-promocoes-beta--3vDTjwoNtaxA1PUrkpEQLW)
- [Cómo funcionan las promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)
