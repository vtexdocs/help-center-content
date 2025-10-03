---
title: 'Envio de Mídias Suportadas - WhatsApp Cloud'
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
legacySlug: envio-de-midias-suportadas-whatsapp-cloud
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Abaixo, você encontrará os limites suportados no WhatsApp Cloud para cada tipo de mídia.

#### **Tipos de mídia suportados**

| **Tipo de m****ídia** | **Extensão** | **Tipos de mídia compatíveis (MIME Type)** | **Tamanho** |
| --- | --- | --- | --- |
| audio | .aac.amr.mp3.m4a.ogg | audio/aacaudio/amraudio/mpegaudio/mp4audio/ogg (OPUS codecs only; base audio/ogg not supported.) | 16 MB |
| document | .txt.xls.xlsx.doc.docx.ppt.pptx.pdf | text/plainapplication/vnd.ms-excelapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheetapplication/mswordapplication/vnd.openxmlformats-officedocument.wordprocessingml.documentapplication/vnd.ms-powerpointapplication/vnd.openxmlformats-officedocument.presentationml.presentationapplication/pdf | 100 MB |
| image | .jpeg.png | image/jpegimage/png | 5 MB |
| Animated stickerStatic sticker | .webp.webp | image/webpimage/webp | 500 KB100 KB |
| video | .3gp.mp4 | video/3gpvideo/mp4**Observações:**- Apenas o codec de vídeo H.264 e o codec de áudio AAC são compatíveis. - Aceitamos vídeos com stream de áudio único ou sem stream de áudio. | 16 MB |

As mídias enviadas por meio de mensagens são armazenadas nos servidores do WhatsApp por 14 dias. Se um usuário solicitar o download da mídia após esse período, os servidores do WhatsApp solicitarão o mesmo arquivo de mídia do cliente local do WhatsApp Business. Se a mídia tiver sido removida, o usuário será notificado de que ela está indisponível.

Não é seguro supor que o download foi concluído apenas com base nos recibos de entrega e leitura. Em geral, as mídias enviadas podem ser removidas após 30 dias, mas é importante adotar a estratégia que melhor se adapta à sua empresa.

#### **Restrições**

Caso você utilize o processo de carregamento de mídia em vez de um link para a URL da mídia, o arquivo precisará ser carregado no volume de mídia. Quando o carregamento for concluído, envie uma mensagem usando o ID de mídia.

O aplicativo processa a mídia carregada antes que ela seja enviada para o servidor. O tamanho máximo da mídia que pode ser carregada no nó *media* é de 100 MB. No entanto, há limites após o processamento para os vários tipos de mídia, conforme descrito na tabela de ""Tamanho de mídia após o processamento"" mencionada anteriormente.

O armazenamento de mídia precisa ser gerenciado pela empresa. Se o volume de mídia atingir o limite, o envio de mensagens começará a falhar.

Não há suporte para as seguintes ações:

- Envio de mídia por streams de bytes.
- Envio de mensagens com figurinhas animadas.

#### **Como carregar**

Faça uma solicitação `POST` para `/v1/media` a fim de carregar a mídia. O corpo da solicitação local deve conter os dados de mídia binária, e o cabeçalho `Content-Type` precisa ser definido de acordo com o tipo de mídia carregado. Consulte os tipos de conteúdo compatíveis para ver as opções aceitas.

Enviar os dados binários em uma solicitação `POST HTTP` é o método-padrão para carregar dados binários. Por exemplo, se quiser carregar uma imagem, envie uma solicitação `POST` com os bytes reais da imagem na carga. Outra opção é usar `--data-binary` caso você queira que `cURL` leia e use o arquivo fornecido em binários exatamente como ele está.

#### **Exemplo**

Carregamento de mídia:

```
POST /v1/media
Content-Type:

```
Carregamento de mídia com `cURL`:

```
curl -X POST \
https://:/v1/media \
-H 'Authorization: Bearer ' \
-H 'Content-Type: image/jpeg' \ # or other appropriate media type
--data-binary @
```
Em ambos os casos, uma resposta bem-sucedida retorna o campo `id`

```
{
    ""media"": [
        {
            ""id"": ""f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68""
        }
    ]
}
```
Se você receber uma mensagem de erro, consulte [Mensagens de erro e status](https://developers.facebook.com/docs/whatsapp/on-premises/errors) para saber mais.

Você pode ver que vídeos e áudios possuem um tamanho máximo de 16 MB. Por exemplo, se você fizer o upload de um vídeo de 20 MB na Weni Plataforma, o vídeo será salvo na plataforma, mas no momento da execução, o WhatsApp não conseguirá enviá-lo. Para documentos, o limite máximo é de 100 MB, porém, isso não funciona na Weni Plataforma, pois ela suporta apenas até 32 MB.

Você pode ver mais sobre essas informações na página oficial da [META](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media/)
