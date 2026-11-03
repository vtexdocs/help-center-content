---
title: 'Configurar flujo de autenticación 3DS 2'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2026-09-29T12:58:00.000Z
publishedAt: 2025-06-02T17:06:50.600Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: setting-up-3ds-2-authentication-flow
legacySlug: configurar-flujo-de-autenticacion-3ds-2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

3DS 2 (EMV 3D Secure) es un protocolo en el que el banco emisor autentica al comprador en los pagos con tarjetas de crédito y débito. Este tutorial explica cómo activar 3DS 2 en el proveedor de pago y cómo validar el flujo de autenticación en el checkout. Para entender cómo funciona el protocolo y qué versiones están en uso, consulta [3D Secure](/es/docs/tutorials/que-es-3d-secure).

## Antes de comenzar

En VTEX, únicamente algunos proveedores admiten 3DS 2, y solo se puede implementar a través de [Payment App](https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2), que el propio proveedor desarrolla para mostrar el desafío de autenticación en el checkout. Antes de seguir los pasos a continuación, confirma estos puntos con tu proveedor de pago:

- **Compatibilidad con 3DS 2:** el proveedor admite 3DS 2 en VTEX y ofrece Payment App.
- **Tipo de autenticación:** qué tipos de autenticación 3DS están disponibles en tu contrato.
- **Credenciales:** qué datos de acceso exige el proveedor para autenticar las transacciones.

También necesitas tener el proveedor configurado en **Configuración de la tienda** > **Pago** > **Proveedores**.

## Activar 3DS 2 en el proveedor de pago

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Proveedores**, o ingresa **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el proveedor de pago.
3. Completa los campos de autenticación según la documentación del proveedor, ya que los nombres de los campos varían. Por ejemplo:
   - **Adyen V3:** en el campo **3DS Authentication Type**, elige el tipo de autenticación. La autenticación completa incluye la interacción del comprador y transfiere la responsabilidad por fraude al banco emisor. En cambio, Data Only solo envía datos de riesgo, sin interacción del comprador, por lo que la responsabilidad por fraude puede seguir siendo del retailer. Este tipo solo se permite para tarjetas de crédito en reales brasileños (BRL). Para más detalles, consulta [Adyen Connector V3](https://developers.vtex.com/docs/apps/adyen.payment-provider-v3#3ds-authentication-type-required).
   - **CieloEcommerce:** en el campo **UseMpi**, selecciona **True** y completa los campos de credenciales de Mpi. Consulta [Configurar pago con CieloEcommerce](/es/docs/tutorials/configurar-pago-con-cieloecommerce).
4. Haz clic en `Guardar`.

## Validar el flujo en el checkout

> ℹ️ Si el proveedor tiene modo de prueba, como la opción **Activar modo de prueba** en **Control de pago**, valida el flujo en ese modo antes de procesar transacciones reales.

1. En la tienda, agrega un producto al carrito y continúa al checkout.
2. Selecciona la condición de pago con tarjeta asociada al proveedor que configuraste en la sección anterior.
3. Paga con una sola tarjeta y finaliza la compra.
4. Si el banco emisor solicita la autenticación, confirma la identidad en la ventana que aparece en el checkout.
5. En el Admin VTEX, accede a **Pedidos** > **Transacciones**, o escribe **Transacciones** en la barra de búsqueda en la parte superior de la página.
6. Haz clic en la transacción de la compra de prueba y revisa la respuesta del proveedor en **Eventos de la transacción**. Para saber más sobre estos eventos, consulta [Visualizar detalles de la transacción en Pedidos](/es/docs/tutorials/como-visualizar-detalle-del-pedido).

Después de la autenticación, el resultado depende del status del pago:

- Si el pago se autoriza o sigue en procesamiento, el checkout muestra la confirmación del pedido.
- Si el pago se rechaza o se cancela, el checkout muestra un aviso y vuelve a la selección del medio de pago.

> ℹ️ En una autenticación sin fricción, el banco emisor completa la autenticación 3DS 2 sin mostrar el desafío. Por eso, si en una compra de prueba no aparece la ventana de autenticación, no significa que 3DS 2 esté inactivo.

## Limitaciones

### Compras con dos tarjetas

En VTEX, 3DS 2 no permite realizar compras utilizando dos tarjetas. Si se realiza un pedido de esta forma, el pago será cancelado.
