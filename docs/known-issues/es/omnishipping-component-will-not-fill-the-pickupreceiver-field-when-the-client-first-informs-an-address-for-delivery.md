---
title: 'El componente Omnishipping no rellenará el campo PickupReceiver cuando el cliente informe por primera vez de una dirección para la entrega'
id: 0vYgYP5NTflaVEBiAchhL
status: DRAFT
createdAt: 2023-12-01T14:11:00.160Z
updatedAt: 2023-12-04T13:28:38.612Z
publishedAt: 
firstPublishedAt: 2023-12-01T14:11:00.848Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-componente-omnishipping-no-rellenara-el-campo-pickupreceiver-cuando-el-cliente-informe-por-primera-vez-de-una-direccion-para-la-entrega
locale: es
kiStatus: Backlog
internalReference: 945896
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando se utiliza el componente **Omnishipping** en el pago, el campo **Recogida** se muestra en blanco cuando debería tener el nombre introducido por el cliente en el paso de Identificación. Esto sólo ocurre si el cliente primero informa una dirección para la entrega y luego hace clic en la pestaña Recogida para seleccionar un punto de recogida.



## Simulación



1. Instalar el componente Omnishipping en una tienda sin personalizaciones en el checkout.
2. Iniciar un proceso de compra y rellenar los datos de identificación
3. Seleccione una dirección para la entrega pero luego haga clic en la opción de recogida
4. El campo RecogidaReceptor aparecerá en blanco




## Workaround


N/A





