---
title: 'Añadir soporte a 3DS2 en la integración con Redsýs V2'
id: 1ixji2XORg9p0UoW8gBtUG
status: ARCHIVED
createdAt: 2021-03-08T14:53:08.780Z
updatedAt: 2024-03-18T19:54:47.084Z
publishedAt: 
firstPublishedAt: 2021-03-08T16:29:32.443Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: anadir-soporte-a-3ds2-en-la-integracion-con-redsys-v2
locale: es
legacySlug: anadir-soporte-a-3ds2-en-la-integracion-con-redsys-v2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

La funcionalidad 3DS2 ahora está disponible también para pagos realizados con tarjeta de crédito y procesados a través del *gateway* de pagos [Redsýs](https://help.vtex.com/pt/tutorial/configurar-gateway-redsys--7xRnMyzZS0kQoIG2ISagY8).

3DS2 es una solución de seguridad que permite autenticar al comprador en el banco emisor, lo que garantiza aún más seguridad para sus transacciones en línea.

Para obtener más detalles, consulte el artículo [Flujo de autenticación 3DS2: acepte pagos en línea de forma más segura](https://help.vtex.com/es/announcements/fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura--6UdTjjVU1AcEQ2aE3Ftxsl).

>❗ Antes de configurar 3DS2, es importante asegurarse de que Redsýs ya esté configurado en su tienda y la alianza comercial firmada esté habilitada para el uso de 3DS2.

En este tutorial, le explicaremos cómo realizar esta integración a través del Admin de VTEX mediante el panel administrativo.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Acceda a la pestaña __Afiliaciones__ y haga clic en el botón "__+__".
3. Haga clic en el recuadro de afiliación de __Redsýs V2__.
4. Desplácese hacia abajo y active la opción __3DS Enabled__. 
5. Haga clic en __Salva__.

![RedsysV2 ES](https://images.ctfassets.net/alneenqid6w5/9Ee9cJHkCY2NQy6AAwsr5/6e85fe90224d28365930fe21c4c673aa/Redsys_3DS2_-_ES.png)

Una vez hecho esto, la solución se habilitará para las transacciones con tarjeta de crédito de Redsýs.
