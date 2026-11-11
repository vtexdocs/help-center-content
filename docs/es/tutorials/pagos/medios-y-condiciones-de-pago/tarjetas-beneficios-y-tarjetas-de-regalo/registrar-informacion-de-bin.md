---
title: 'Registrar información de BIN'
createdAt: 2024-05-02T19:11:00.734Z
updatedAt: 2026-11-11T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: adding-bin-information
locale: es
hidden: false
---

El Número de Identificación Bancaria (BIN) está compuesto por los primeros seis u ocho dígitos de una tarjeta de crédito o débito e identifica a la [institución emisora](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#banco-emisor) de la tarjeta. En el siguiente ejemplo, los primeros seis dígitos, en azul y marcados arriba del número, forman el BIN de seis dígitos. Junto con los dos dígitos siguientes, en rosa, forman el BIN de ocho dígitos, marcado abajo del número.

![Tarjeta de ejemplo con el número 5502 0912 3456 7890, los seis primeros dígitos marcados en azul arriba del número y los ocho primeros dígitos marcados en rosa debajo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/medios-y-condiciones-de-pago/tarjetas-beneficios-y-tarjetas-de-regalo/registrar-informacion-de-bin_1.png)

Se crean nuevos BINs cuando la institución emisora lanza nuevos perfiles de tarjeta o emite nuevas tarjetas para un modelo ya existente, y también cuando una [red de tarjeta](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#red-de-tarjeta) es adquirida por otra.

Cuando un BIN no está registrado o está desactualizado en VTEX, el checkout puede identificar la tarjeta con la red de tarjeta o la institución emisora incorrecta, o no reconocerla. Las promociones, condiciones de pago y opciones de pago en cuotas configuradas para la institución emisora pueden no aparecer o ser diferentes de lo configurado, y el pago puede ser rechazado o devolver un error genérico solo para tarjetas de esa institución. En estos casos, notifica a VTEX para que las tarjetas se validen correctamente en el pago.

## Solicitar la inclusión o actualización de BINs

Para agregar un nuevo BIN o actualizar la información de un BIN ya registrado en VTEX, sigue los pasos a continuación:

1. Solicita a la institución emisora propietaria de los BINs un documento oficial en PDF que confirme explícitamente esa propiedad.

   > ⚠️ Para garantizar la seguridad y la legitimidad de los cambios, VTEX solo atiende solicitudes acompañadas de este documento. Los archivos .EML, las capturas de pantalla y las conversaciones por correo electrónico no se aceptan como comprobante, incluso cuando los envía un empleado de la institución emisora.

2. Completa una plantilla con la siguiente información:
   - __code__: nuevo BIN a agregar o BIN ya existente que deberá actualizarse.
   - __cardBrand__: red de tarjeta correspondiente al BIN.
   - __cardType__: tipo de tarjeta, crédito o débito.
   - __country__: país de uso de la tarjeta.
   - __bank__: institución emisora de la tarjeta.
   - __cvvSize__: cantidad de caracteres del CVV (Card Verification Value).
   - __cardLevel__: clasificación de la tarjeta (Gold, Platinum, Black, entre otras).

   La siguiente imagen muestra un ejemplo de plantilla completada:

   ![Planilla de ejemplo con las columnas code, cardBrand, cardType, country, bank, cvvSize y cardLevel, y una fila completada con un BIN de tarjeta de crédito Mastercard Gold emitida en Brasil](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/medios-y-condiciones-de-pago/tarjetas-beneficios-y-tarjetas-de-regalo/registrar-informacion-de-bin_2.PNG)

3. Abre un ticket en [Soporte VTEX](https://supporticket.vtex.com/support) y adjunta la plantilla y el documento en PDF.
