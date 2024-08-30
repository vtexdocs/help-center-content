---
title: 'Configurar gateway PayU'
id: 36zWOAFHmwIAoWIEU2Y08q
status: DRAFT
createdAt: 2018-03-27T15:25:04.654Z
updatedAt: 2024-03-18T20:27:28.378Z
publishedAt: 
firstPublishedAt: 2018-03-27T22:13:40.899Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-payu
locale: es
legacySlug: configurar-gateway-payu
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

PayU es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) que ofrece una serie de soluciones para facilitar (y dejar más seguras) las transacciones realizadas en su tienda. Con certificación [PCI](/es/faq/que-es-el-pci-ssc), esta solución es exclusiva para Argentina, Brasil, Chile, Colombia, México, Panamá y Perú.

Para configurar el PayU, siga los pasos abajo:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PayU__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro con los datos proporcionados por PayU (campos _API Login_, _API Key_, _Account Id_ y _Merchant Id_).
5. En el campo __Forma de Autorización__, elija el modo en que desea autorizar las transacciones.
6. En __Moneda__, seleccione la moneda que se utilizará en las transacciones.
7. En __Idioma__, defina la lengua de preferencia.
8. En el campo __País del pago__, elija el país de su tienda.
9. En __Validad del boleto en días__, defina el tiempo que su cliente tendrá para pagar el boleto.
10. El campo __Usa Banco Referenciado__ es de relleno exclusivo para tiendas de Colombia.
11. En __Tipo de anulación__ , escoja entre el proceso automático o la notificación por correo electrónico (en este caso, un e-mail será enviado, avisando de que usted debe solicitar la anulación pendiente en el panel de control de PayU).
12. El campo __PartnerId__ ya se ha rellenado con el ID de VTEX en PayU.
13. En __Usa tarjeta protegida__, seleccione _Sim_ si su tienda ha contratado a JustClick (servicio de compra en un clic de PayU).
14. En el campo __Primera retentativa para consulta__, defina el intervalo de tiempo (en minutos) para realizar la nueva consulta en PayU.
15. En __Financiamiento por Operadora__, escoja entre no aplicar o dejar el cálculo para la institución financiera.
16. En el campo __Boleto Registrado__, informe si el boleto tiene o no registro.
17. En __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura se realice (después de la aprobación de la transacción y del análisis del antifraude). Usted también puede desactivar la función.
18. En el campo __Usa Antifraude__, informe si desea usar un antifraude.
19. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados, PayU estará configurada en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con PayU). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
