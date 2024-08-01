---
title: 'Configurar el subadquirente MercadoPagoV1'
id: 6wTlR3UTJe6YMAsEuquO26
status: DRAFT
createdAt: 2018-03-08T13:05:57.452Z
updatedAt: 2024-03-18T18:35:39.248Z
publishedAt: 
firstPublishedAt: 2018-03-08T19:45:23.370Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-el-subadquirente-mercadopagov1
locale: es
legacySlug: configurar-el-subadquirente-mercadopagov1
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">Esta integración de pago ya no se puede configurar en la plataforma debido al <a href="https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14">proceso de descontinuación de los proveedores legados</a> y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.</div>

En el Gateway de VTEX, puede configurar el [subadquirente](/es/tutorial/que-es-un-subadquirente) MercadoPago para operar de varias formas. El __MercadoPagoV1__ permite que su tienda reciba pagos con tarjetas de débito y crédito, además de la [cartera digital](/es/faq/que-es-una-billetera-digital-e-wallet) Mercado Pago.

<div class="alert alert-warning">
La integración <strong>MercadoPagoV1</strong> no admite pagos por boleto bancario.
</div>

Para configurar MercadoPagoV1, siga los siguientes pasos:

## Configurar MercadoPagoV1

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __MercadoPagoV1__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. El campo __OAuth login__ no se utiliza. Déjelo como está.
5. Rellene los campos de registro __PublicKey__ y __AccessToken__ con los datos proporcionados por MercadoPago.
6. Deje los campos __RefreshToken__, __ExpiredTokenIn__ y __Merchant Account Id__ en blanco.
7. En __Processing Mode__, escoja cómo quiere usar MercadoPagoV1: como gateway o subadquirente.
8. En el campo __CountryName__, seleccione el país de su tienda.
9. En __SoftDescriptor__, indique qué aparecerá para identificar la transacción realizada en su tienda.
10. Ya en __Description__, escriba una breve descripción de su negocio (rellenarlo es opcional).
11. En el campo __CategoryId__, escoja la categoría de los productos que vende en su tienda.
12. Ya el campo __Financial Institution__ es opcional y debe rellenarse apenas si su tienda opera desde Chile.
13. En __Use External Installments__, seleccione si desea o no usar el servicio de división en cuotas de MercadoPagoV1.
14. En el campo __Antifraud__, informe si desea usar un antifraude.
15. En __Time Zone__, indique la región que define su horario local.
16. En __orderExpirationHours__, defina por cuántas horas el sistema debe verificar el status del pedido antes de su expiración. Cuando esta opción no se rellena, se adopta el estándar de 192 horas.
17. En el campo __maxInstallments__, escoja la cantidad de cuotas enviadas a MercadoPago.
18. En __Categoría Principal__, escoja la categoría que más se encaja con su tienda.
19. Ya el campo __Captura de seguridad anticipada__ es opcional y debe rellenarse apenas por tiendas en Argentina y Brasil. Usted puede desactivar la función o escoger en cuánto tiempo quiere realizar la captura (después de la aprobación de la transacción y del análisis del antifraude).
20. Haga clic en __Guardar__.

## Configurar condición de pago 
Después de seguir los pasos indicados, MercadoPagoV1 estará configurado en su tienda. Así, cuando vaya a registrar una condición de pago, va a estar disponible en el campo __Procesar con la afiliación__ (desde que el medio de pago sea compatible con MercadoPagoV1).

Para saber cómo definir condiciones de pago, acceda a [este artículo de ayuda](/es/tutorial/condiciones-de-pago).

Para más información sobre la integración con Mercado Pago, acceda al [DevSite Mercado Pago](https://www.mercadopago.com.br/developers/es/guides/plugins/unofficial/vtex/gateway-affiliations).
