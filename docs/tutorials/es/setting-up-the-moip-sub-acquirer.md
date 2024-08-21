---
title: 'Configurar el subadquirente Moip'
id: 16yZI11GWC2KMMUAGmec0m
status: DRAFT
createdAt: 2018-02-27T16:01:35.629Z
updatedAt: 2022-12-23T20:30:33.976Z
publishedAt: 
firstPublishedAt: 2018-02-28T16:53:22.407Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-el-subadquirente-moip
locale: es
legacySlug: configurar-el-subadquirente-moip
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Moip es un [subadquirente](/es/tutorial/que-es-un-subadquirente) que ofrece una integración única para conectar su tienda a todas las partes del flujo de pago, ofreciendo protección contra fraudes y una solución de [checkout transparente](/es/tutorial/que-es-el-checkout-transparente) (sin redireccionamientos).

>⚠️ La información de este artículo son solamente referencias de configuración para los comerciantes que ya utilizan el subadquirente Moip. Para nuevas afiliaciones, recomendamos utilizar el subadquirente [MoipV2](https://help.vtex.com/es/tutorial/configurar-o-subadquirente-moipv2--4BipUcTxQ7cq2BiYzUDmEH).

Para configurar Moip, siga los pasos a continuación:

## Configurar afiliación de puerta de enlace Moip

1. Acceda al __Admin__ de VTEX.
2. En __Pagos__, haga clic en __Configuración__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __Moip__.
5. Rellene los campos indicados con la siguiente información:

    - __Token y Key__: introduzca la información proporcionada por el MOIP.
    - __Recepción__: establezca si los pagos se recibirán a plazos o al contado.
    - __Captura anticipada__: escoja en cuánto tiempo desea que la captura del pago se realice después de la aprobación de la transacción y del análisis del antifraude. Si lo prefiere, también puede desactivar la opción.
    - __Utilizar el antifraude__: si ya contrató una solución antifraude, seleccione sí para utilizarla. En caso contrario, seleccione no.

<ui>
6. Haga clic en <b>Salvar.</b>
  </ui><br><br>

>⚠️ MOIP no procesa las transacciones cuando hay productos con un valor de $0,00 en el carrito. Por ejemplo: si se crea un [anexo](https://help.vtex.com/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm?&utm_source=autocomplete) de empaque de regalo, el valor del ítem será de $0,00, lo que imposibilita el procesamiento del pago.

## Configurar la condición de pago

Cuando termine todos los pasos indicados, Moip estará configurado en su tienda. Así, al registrar una condición de pago, Moip estará disponible en el campo __Proceso con la afiliación__ (siempre que el método de pago sea compatible con Moip).

Para saber cómo configurar las condiciones de pago, acceda a la documentación [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).

