---
title: 'Configurar XML de Google Shopping'
id: frequentlyAskedQuestions_372
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.317Z
updatedAt: 2023-03-24T13:45:31.912Z
publishedAt: 2023-03-24T13:45:31.912Z
firstPublishedAt: 2019-01-24T22:02:18.230Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: como-configurar-xml-google-shopping
locale: es
legacySlug: como-configurar-xml-google-shopping
subcategory: 2OCA7SVfWoMSiAi0GEGwKo
---

<div class = "alert alert-info">
  <p>Desenvolvemos um novo tipo de integração com o Google Shopping por API, que permite acompanhamento em tempo real. Saiba mais em <a href="https://help.vtex.com/es/tracks/integracion-con-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/2kGKxwD9HKJvTLDTikQ4zG">Integración con Google Shopping</a>.</p>
</div>

<div class = "alert alert-warning">
  <p>Este artículo hace referencia al modelo del 22 de mayo de 2013 de las especificaciones de Google Shopping. O Google modifica e atualiza seu modelo sem prévio aviso. Por ello, comprueba siempre si nuestra explicación permanece actualizada según la <a href="https://support.google.com/merchants/answer/188494?hl=pt-BR">documentación de Google Shopping</a>.</p>
</div>

Puede configurar Google Shopping a través de VTEX Admin siguiendo los siguientes pasos:

1. En VTEX Admin, vaya a **Configuración de la tienda**.
2. En **Canales**, haz clic en **Integración XML**.
3. Haga clic en `Nuevo XML`.
4. En **Tipo de XML**, seleccione la opción **XML libre (estándar)**.
5. En el campo **Colección**, seleccione una colección de productos prerregistrada.
6. Seleccione la opción **Mostrar producto con SKU estándar**.
  Con esta selección, deberá definir la estructura XML siguiendo las definiciones del ejemplo siguiente.
7. Revisar la plantilla, modificando lo que se desee.
8. Pulse `Guardar`.
  El enlace de acceso XML se generará automáticamente.
9. Guarde este XML en un archivo .txt y envíe el archivo a Google.

![](//images.contentful.com/alneenqid6w5/3boyluRWTYA4C0s4qkSG2I/28be460a5f8a6340f0b389fe5000b27c/2.png)

<div class = "alert alert-warning">
  <p>Si la opción <strong>Mostrar SKU no disponibles</strong> está desmarcada, los productos o SKU que estén agotados no aparecerán en el XML. Los productos inactivos tampoco aparecerán en el XML.</p>
</div>
