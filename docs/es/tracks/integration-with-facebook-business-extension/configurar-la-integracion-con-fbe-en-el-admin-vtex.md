---
title: 'Configurar la integración con FBE en el Admin VTEX'
id: jUtgjBDumr5oGWIU7mVLC
status: PUBLISHED
createdAt: 2021-09-30T16:07:29.101Z
updatedAt: 2024-04-17T14:57:04.600Z
publishedAt: 2024-04-17T14:57:04.600Z
firstPublishedAt: 2021-09-30T18:49:18.739Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-integration-with-fbe-in-the-vtex-admin
locale: es
trackId: 2hS3ANSZ7vlHCcba4h7k8D
trackSlugES: integracion-con-facebook-business-extension
---

Con la aplicación _Facebook Business Extension y Conversions API_ instalada, verás un nuevo campo en tu Admin VTEX. En el módulo **MARKETPLACE**, estará la opción **Facebook**. Puede que sea necesario actualizar la página del Admin VTEX para que la opción sea visible.

Para iniciar la configuración de la integración, realiza los siguientes pasos:

1. En tu Admin VTEX, en el módulo _MARKETPLACE_, haz clic en `Facebook`.
2. Por estándar, los campos sobre la **región y la moneda**, así como la **URL** de tu tienda VTEX, estarán rellenados. Revisa la información y realiza cambios si es necesario.
3. Mantén activada la opción _Habilitar la integración de Píxel_, a menos que tengas una implementación personalizada de Facebook Pixel. 

  >ℹ️ Independientemente de que tengas instalada la <a href= "https://apps.vtex.com/vtex-facebook-pixel/p">aplicación de Facebook Pixel</a>, se recomienda que la opción **Habilitar la integración de Píxel** permanezca activada. La excepción es cuando ya utilizas Google Tag Manager. Obtén más información en <a href= "https://help.vtex.com/es/tracks/integracao-com-o-facebook-business-extension--2hS3ANSZ7vlHCcba4h7k8D/434Z1iWnaa0zbOMDyr6oi#pixel-de-facebook">Píxel de Facebook </a>.

4. Haz clic en `CONTINUAR CON FACEBOOK`.
5. En la siguiente pantalla, se te pedirá tu cuenta de Facebook. Rellena tus datos y haz clic en `Entrar`. Si tienes configurada la [integración con Facebook](https://help.vtex.com/es/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc), tus datos ya estarán guardados.
6. En la nueva pantalla, concede los permisos necesarios para la integración haciendo clic en `Continuar`.
7. Determina qué configuraciones se utilizarán en la integración.
8. A continuación, haz clic en `Continuar`.
9. Elige qué permisos deben concederse a VTEX en la integración.

  >❗ Para que la integración funcione correctamente, se recomienda conceder todos los permisos indicados. Por estándar, aparecen como habilitados.

10. Haz clic en `Siguiente`.
11. En la ventana abierta, aparecerá una confirmación de que la integración se ha realizado. Haz clic en `Listo`.

![gif es v1](https://images.ctfassets.net/alneenqid6w5/1FptUh8HMlsK1FvVPBw89H/aad4d60cb7baecae018ef1d38d25acef/gif_es_v1.gif)

## Envío de datos de productos a Facebook Business Extension

Con la integración realizada, el envío de productos a Facebook es un proceso automático. Los datos enviados son:

- Nombre de visualización del producto
- Imagen
- Categoría
- Precio
- Moneda
- Descripción
- Marca
- Condición del producto
- Disponibilidad

Cuando se realiza un cambio en cualquiera de estos datos, la actualización en el ambiente de FBE se realiza automáticamente. 

Para añadir atributos a los productos enviados, el cambio de datos debe realizarse en el propio ambiente de Facebook, utilizando la plataforma [Administrador de Comercio](https://www.facebook.com/business/help/2371372636254534?locale=es_LA) (_Commerce Manager_).
