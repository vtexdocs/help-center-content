---
title: 'Alertas de promociones (Beta)'
id: 3vDTjwoNtaxA1PUrkpEQLW
status: PUBLISHED
createdAt: 2022-11-17T21:33:42.383Z
updatedAt: 2023-03-30T17:20:52.671Z
publishedAt: 2023-03-30T17:20:52.671Z
firstPublishedAt: 2022-11-18T17:06:00.781Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: promotion-alerts-beta
locale: es
legacySlug: alertas-de-promociones-beta
subcategoryId: 6iTRZiMeCGXYiO2ckABFZi
---

>ℹ️ Este módulo está en fase beta. Esto significa que estamos trabajando para mejorarlo. Si tienes alguna duda, por favor ponte en contacto con nuestro [equipo de soporte](https://help.vtex.com/es/support).

Crear promociones es una buena estrategia para atraer a más compradores a tu sitio de ecommerce. Al configurarlas, es muy importante tener cuidado de que los descuentos aplicados tengan los efectos esperados, ya que los errores al registrar promociones pueden causar pérdidas de ingresos.

Para minimizar los efectos indeseados en promociones, la página **Alerta de promociones** permite crear alertas con condiciones para verificar si las promociones están correctas y definir [acciones preventivas](https://help.vtex.com/es/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#acciones-preventivas) para evitar ventas con precios inesperados. Sin embargo, se debe realizar un pedido para activar la primera alerta.

Si se identifican las [condiciones](https://help.vtex.com/es/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#condiciones) definidas en la alerta, el sistema genera una alerta con la información sobre el producto vendido a precios inesperados y aplica las [acciones preventivas](https://help.vtex.com/es/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#acciones-preventivas) configuradas. Si se configuró la acción de [desactivar las promociones](https://help.vtex.com/es/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#acciones-preventivas), el escenario indeseado no ocurrirá nuevamente, ya que la promoción estará desactivada.

Si solo se configura la acción de alerta por email, es posible que se realicen otros pedidos con el descuento indeseado hasta que se desactive la promoción manualmente o se cambie la configuración de la promoción para que tenga el efecto esperado.

Para acceder a la página en el Admin VTEX, ve a *Promociones > Alerta de promociones*. Se mostrará la interfaz a continuación:

![simuladordepromocoes gerenciar](https://images.ctfassets.net/alneenqid6w5/4E0oZf13zNjKgj5MNRYiuf/94c9af89ae0bad5601b316dfc73a6caf/simuladordepromocoes_gerenciar.gif)

La siguiente tabla proporciona la descripción de las columnas de la lista de promociones:

| Columna | Descripción | 
| ------ |:-------------:|
| Nombre | Nombre de la alerta de promoción. |
| Alerta | Condición determinada para que se emita la alerta. |
| Acción preventiva | Acciones que se ejecutarán cuando se active la alerta. |
| Status | Status de la promoción, que puede ser: <p><strong> Activo:</strong> cuando se activa la alerta </p> <p> <strong>Inactivo:</strong> cuando se desactiva la alerta </p> |

 La página Alerta de promociones permite realizar las siguientes acciones:

- [Crear alerta](#crear-alerta)
- [Buscar alerta](#buscar-alerta)
- [Editar alerta](#editar-alerta)
- [Desactivar alerta](#desactivar-alerta)
- [Duplicar alerta](#duplicar-alerta)

## Crear alerta

Para crear una alerta de promoción, haz clic en el botón `Crear alerta`.  Para más detalles, consulta el artículo [Alertas de promoción: cómo crear una alerta de promoción](https://help.vtex.com/es/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR).

## Buscar alerta

Para encontrar una alerta, ingresa el nombre de la promoción en la barra de búsqueda con el icono de lupa <i class="fas fa-search"></i>, ubicada en la parte superior de la página.

Al ingresar un carácter en la caja de búsqueda, los resultados se actualizan instantáneamente. Para limpiar la búsqueda, haz clic en el icono menú <i class="far fa-times-circle"></i>.

## Editar alerta

Para editar una alerta de promoción, realiza los siguientes pasos:

1. En el Admin VTEX, accede a *Promociones > Alertas de promociones*, o escribe *Alertas de promociones* en la barra de búsqueda en la parte superior de la página.
2. En la fila de la alerta seleccionada, haz clic en el icono <i class="fas fa-ellipsis-v"></i> menú.
3. Haz clic en `Editar` <i class="fal fa-pencil"></i>.
4. Realiza los cambios deseados en la alerta.
5. Haz clic en `Guardar`.

Se guardarán y aplicarán los cambios a la alerta.

## Desactivar alerta

Para desactivar una alerta de promoción, realiza los siguientes pasos:

1. En el Admin VTEX, accede a *Promociones > Alertas de promociones*, o escribe *Alertas de promociones* en la barra de búsqueda en la parte superior de la página.
2. En la fila de la alerta seleccionada, haz clic en el icono <i class="fas fa-ellipsis-v"></i> menú.
3. Haz clic en `Desactivar` <i class="far fa-times"></i> .

La alerta se desactivará. Puedes activarla nuevamente si deseas al seleccionar la alerta y hacer clic en el botón de alternar <i class="fas fa-toggle-on"></i>.

## Duplicar alerta

Para duplicar una alerta de promoción, realiza los siguientes pasos:

1. En el Admin VTEX, accede a *Promociones > Alertas de promociones*, o escribe *Alertas de promociones* en la barra de búsqueda en la parte superior de la página.
2. En la fila de la alerta seleccionada, haz clic en el icono <i class="fas fa-ellipsis-v"></i> menú.
3. Haz clic en `Duplicar` <i class="far fa-clone"></i>.
4. Se te redirigirá a la página **Crear alerta**, como si estuvieras creando una nueva alerta, sin embargo, es una copia idéntica de la alerta duplicada. El nombre estándar  de la alerta duplicada es `Copia de` + `nombre de la alerta duplicada`.
5. Realiza los cambios deseados.
6. Haz clic en `Guardar`.

Se completará la duplicación de la alerta con éxito.

## Más información

- [Alertas de promociones: cómo crear una alerta de promoción](https://help.vtex.com/es/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR)
- [Cómo funcionan las promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)
