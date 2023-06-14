---
title: 'Configurar el subadquirente MoipV2'
id: 4BipUcTxQ7cq2BiYzUDmEH
status: DRAFT
createdAt: 2021-12-03T16:57:26.876Z
updatedAt: 2022-12-23T20:35:19.599Z
publishedAt: 
firstPublishedAt: 2021-12-14T14:39:34.847Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-el-subadquirente-moipv2
locale: es
legacySlug: configurar-el-subadquirente-moipv2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Moip es un [subadquirente](/es/tutorial/que-es-un-subadquirente) que ofrece una integración única para conectar su tienda a todas las partes del flujo de pago, ofreciendo protección contra fraudes y una solución de [checkout transparente](/es/tutorial/que-es-el-checkout-transparente) (sin redireccionamientos). Además de las características del conector Moip, MoipV2 permite el [Split de Pagos](https://help.vtex.com/es/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx?&utm_source=autocomplete#).

## Configurar la afiliación de gateway MoipV2

Para configurar MoipV2, siga los pasos a continuación:

1. Acceda al __Admin__ de VTEX.
2. En __Pagos__, haga clic en __Configuración__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __MoipV2__.
5. En __Click to authorize VTEX to make payments__, haga clic en __Autorizar__. En este punto, será redirigido a la página de Moip, donde deberá acceder a su cuenta de Moip y autorizar la conexión VTEX.
6. Después de la autorización, volverá automáticamente al administrador te VTEX, y los campos __Application Key__, __Application Token__, __Application Id__ ya estarán completados.
7. Haga clic en Salvar.

## Configurar la condición de pago

Cuando termine todos los pasos indicados, MoipV2 estará configurado en su tienda. Así, al registrar una condición de pago, MoipV2 estará disponible en el campo __Proceso con la afiliación__ (siempre que el método de pago sea compatible con MoipV2).

Para saber cómo configurar las condiciones de pago, acceda a la documentación [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).
