---
title: 'Supported Media Sending - WhatsApp Cloud'
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
legacySlug: supported-media-sending-whatsapp-cloud
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Below, you will find the supported limits on WhatsApp Cloud for each media type.

#### **Supported Media Types:**

| **Tipo de m****ídia** | **Extensão** | **Tipos de mídia compatíveis (MIME Type)** | **Tamanho** |
| --- | --- | --- | --- |
| audio | .aac.amr.mp3.m4a.ogg | audio/aacaudio/amraudio/mpegaudio/mp4audio/ogg (OPUS codecs only; base audio/ogg not supported.) | 16 MB |
| document | .txt.xls.xlsx.doc.docx.ppt.pptx.pdf | text/plainapplication/vnd.ms-excelapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheetapplication/mswordapplication/vnd.openxmlformats-officedocument.wordprocessingml.documentapplication/vnd.ms-powerpointapplication/vnd.openxmlformats-officedocument.presentationml.presentationapplication/pdf | 100 MB |
| image | .jpeg.png | image/jpegimage/png | 5 MB |
| Animated stickerStatic sticker | .webp.webp | image/webpimage/webp | 500 KB100 KB |
| video | .3gp.mp4 | video/3gpvideo/mp4**Observações:**- Apenas o codec de vídeo H.264 e o codec de áudio AAC são compatíveis. - Aceitamos vídeos com stream de áudio único ou sem stream de áudio. | 16 MB |

Media sent through messages is stored on WhatsApp's servers for 14 days. If a user requests to download the media after this period, WhatsApp servers will request the same media file from the local WhatsApp Business client. If the media has been removed, the user will be notified that it is unavailable.

It is not safe to assume that the download was completed solely based on delivery and read receipts. In general, media sent can be removed after 30 days, but it is important to adopt the strategy that best suits your company.

​

#### **Restrictions**

If you use the media upload process instead of a link to the media URL, the file must be uploaded to the media volume. Once the upload is complete, send a message using the media ID.

The application processes the uploaded media before it is sent to the server. The maximum media size that can be uploaded to the media node is 100 MB. However, there are post-processing limits for various media types, as described in the ""Media size after processing"" table mentioned earlier.

Media storage must be managed by the company. If the media volume reaches its limit, message sending will start to fail.

The following actions are not supported:

- Sending media via byte streams.
- Sending messages with animated stickers.

​

#### **How to upload**

Make a `POST`request to `/v1/media` to upload the media. The body of the local request should contain the binary media data, and the `Content-Type` header must be set according to the type of media uploaded. Check the supported content types for accepted options.

Sending binary data in an `POST HTTP` request is the standard method for uploading binary data. For example, if you want to upload an image, send a `POST` request with the actual image bytes in the payload. Another option is to use `--data-binary` if you want `cURL` to read and use the file provided in binary exactly as it is.

#### **Example**

Media Upload:

```
POST /v1/media
Content-Type:

```
Media Upload with `cURL:`

```
curl -X POST \
https://:/v1/media \
-H 'Authorization: Bearer ' \
-H 'Content-Type: image/jpeg' \ # or other appropriate media type
--data-binary @
```
In both cases, a successful response returns the `id` field

```
{
    ""media"": [
        {
            ""id"": ""f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68""
        }
    ]
}
```
If you receive an error message, refer to [**Error Messages and Status**](https://developers.facebook.com/docs/whatsapp/on-premises/errors) for more details.

As you can see, videos and audio files have a maximum size limit of 16 MB. For example, if you upload a 20 MB video to the Weni Platform, the video will be saved on the platform, but at runtime, WhatsApp will not be able to send it. For documents, the maximum limit is 100 MB, but this does not work on the Weni Platform, as it only supports up to 32 MB.

You can find more about this information on the official META [page](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media/)
