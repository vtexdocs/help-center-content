---
title: 'WhatsApp business API: Envio de mídias'
id: 2XRQLsebPsHrnxkUXx4YcG
status: PUBLISHED
createdAt: 2025-09-15T15:10:19.456Z
updatedAt: 2025-10-03T14:20:32.579Z
publishedAt: 2025-10-03T14:20:32.579Z
firstPublishedAt: 2025-10-03T14:20:32.579Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: supported-media-sending-whatsapp-cloud
legacySlug: whatsapp-business-api-envio-de-midias
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

A continuación, encontrarás los límites soportados en WhatsApp Cloud para cada tipo de medio.

#### **Tipos de medios soportados**

| **Tipo de mídia** | **Extensão** | **Tipos de mídia compatíveis (MIME Type)** | **Tamanho** |
| --- | --- | --- | --- |
| audio | .aac.amr.mp3.m4a.ogg | audio/aacaudio/amraudio/mpegaudio/mp4audio/ogg (OPUS codecs only; base audio/ogg not supported.) | 16 MB |
| document | .txt.xls.xlsx.doc.docx.ppt.pptx.pdf | text/plainapplication/vnd.ms-excelapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheetapplication/mswordapplication/vnd.openxmlformats-officedocument.wordprocessingml.documentapplication/vnd.ms-powerpointapplication/vnd.openxmlformats-officedocument.presentationml.presentationapplication/pdf | 100 MB |
| image | .jpeg.png | image/jpegimage/png | 5 MB |
| Animated stickerStatic sticker | .webp.webp | image/webpimage/webp | 500 KB100 KB |
| video | .3gp.mp4 | video/3gpvideo/mp4**Observações:**- Apenas o codec de vídeo H.264 e o codec de áudio AAC são compatíveis. - Aceitamos vídeos com stream de áudio único ou sem stream de áudio. | 16 MB |

Los medios enviados a través de mensajes se almacenan en los servidores de WhatsApp durante 14 días. Si un usuario solicita la descarga del medio después de este período, los servidores de WhatsApp solicitarán el mismo archivo al cliente local de WhatsApp Business. Si el medio ha sido eliminado, se notificará al usuario que ya no está disponible.

No es seguro asumir que la descarga se completó solo basándose en los recibos de entrega y lectura. En general, los medios enviados pueden ser eliminados después de 30 días, pero es importante adoptar la estrategia que mejor se ajuste a tu empresa.

#### **Restricciones**

Si utilizas el proceso de carga de medios en lugar de un enlace a la URL del medio, el archivo deberá ser cargado en el volumen de medios. Una vez completada la carga, envía un mensaje utilizando el ID de medio.

La aplicación procesa el medio cargado antes de enviarlo al servidor. El tamaño máximo de los medios que pueden cargarse en el nodo media es de 100 MB. Sin embargo, hay límites después del procesamiento para los distintos tipos de medios, como se describe en la tabla de ""Tamaño de medios después del procesamiento"" mencionada anteriormente.

El almacenamiento de medios debe ser gestionado por la empresa. Si el volumen de medios alcanza el límite, el envío de mensajes comenzará a fallar.

No hay soporte para las siguientes acciones:

- Envío de medios a través de flujos de bytes.
- Envío de mensajes con stickers animados.

#### **Cómo cargar**

Realice una solicitud `POST` a `/v1/media` para cargar el medio. El cuerpo de la solicitud local debe contener los datos de medios binarios, y el encabezado `Content-Type` debe establecerse según el tipo de medios cargados.

Enviar los datos binarios en una solicitud `POST HTTP` es el método estándar para cargar datos binarios. Por ejemplo, si desea cargar una imagen, envíe una solicitud `POST` con los bytes reales de la imagen en la carga. Otra opción es usar `--data-binary` si desea que `cURL` lea y use el archivo proporcionado en binarios exactamente como está.

#### **Ejemplo**

Carga de medios:

```
POST /v1/media
Content-Type:

```
Carga de medios con `cURL`:

```
curl -X POST \
https://:/v1/media \
-H 'Authorization: Bearer ' \
-H 'Content-Type: image/jpeg' \ # or other appropriate media type
--data-binary @
```
En ambos casos, una respuesta exitosa devolverá el campo `id`, necesario para recuperar medios o enviar [mensajes de medios](https://developers.facebook.com/docs/whatsapp/on-premises/Messages/Media_Messages) a los clientes.

```
{
    ""media"": [
        {
            ""id"": ""f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68""
        }
    ]
}
```
Si recibes un mensaje de error, consulta la sección de [Mensajes de error y estado](https://developers.facebook.com/docs/whatsapp/on-premises/errors) para obtener más información.

Puedes ver que los videos y audios tienen un tamaño máximo de 16 MB. Por ejemplo, si cargas un video de 20 MB en la Plataforma Weni, el video se guardará en la plataforma, pero en el momento de la ejecución, WhatsApp no podrá enviarlo. Para documentos, el límite máximo es de 100 MB, sin embargo, esto no funciona en la Plataforma Weni, ya que solo soporta hasta 32 MB.

Puedes ver más detalles sobre esta información en la página oficial de META: [página oficial de META](https://developers.facebook.com/docs/whatsapp/on-premises/reference/media)
