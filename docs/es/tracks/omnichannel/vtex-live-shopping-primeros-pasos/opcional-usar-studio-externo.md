---
title: '(Opcional) Utilizar estudios externos'
id: Dw0QdKI0aGjmyD5Z6z5JC
status: PUBLISHED
createdAt: 2025-07-23T18:10:11.675Z
updatedAt: 2025-09-15T21:42:49.757Z
publishedAt: 2025-09-15T21:42:49.757Z
firstPublishedAt: 2025-07-28T15:08:28.675Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: optional-using-external-studios
locale: es
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeros-pasos
order: 9
---

> ⚠️ Este artículo solo se aplica a cuentas que transmiten eventos desde estudios diferentes de Bundle.

Además del estudio Bundle, puedes transmitir eventos de **Live Shopping** desde estudios externos con las mismas funcionalidades, tales como:

* StreamYard
* OBS
* Streamlabs
* vMix

## Conectar un estudio externo

Para configurar soluciones de estudios externos sigue los pasos a continuación:

1. [Crea](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv) el evento en el Admin VTEX.
2. En la página **Eventos**, haz clic en el botón de flecha del evento para acceder a la página de **Información del evento**.
3. [Inicia](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq) el evento.
4. En la sección de [Detalles](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq#detalles-del-evento), copia la información del **Servidor inbound** y de la **Clave del servidor**.
5. En la configuración de transmisión del estudio externo, llena los campos como se indica a continuación:
    * **Servidor:** ingresa el valor del servidor inbound.
    * **Clave del servidor:** Ingresa el valor de la clave del servidor.

> ℹ️ Antes de hacer clic en **Go Live**, te recomendamos colocar una imagen de relleno antes de empezar a presentar para validar la transmisión. De esta manera, puedes realizar ajustes finales sin mostrar una pantalla negra al público.

## Configurar una transmisión de calidad

Una transmisión de alta calidad, incluyendo la transmisión a dispositivos con señal de internet limitada, requiere configurar los campos a continuación con valores específicos:

* **Output > IngestVideoBitrate:** alrededor de 2.400.528 bits/2400.528 kbps/2.4 Mb/s
* **Output > IngestAudioBitrate:** alrededor de 150.000 bits/150 kbps
* **Video > IngestFramerate:** alrededor de 30 fps
* **Output > KeyframeInterval:** alrededor de 2 segundos

## Transmitir el evento desde un estudio externo

Después de [insertar el componente de Live Shopping](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR) y utilizar la vista previa para asegurarte de que todo esté funcionando correctamente, puedes comenzar a transmitir el evento. Como los pasos varían para cada estudio, te recomendamos revisar la documentación oficial del estudio que estés utilizando. 

> ❗ Cuando utilices estudios externos, no intentes duplicar la transmisión a través de Bundle. Live Shopping permite una transmisión por estudio, y la plataforma reconocerá solo el primer estudio que transmita el evento.

## Después de transmitir desde un estudio externo

Cuando la transmisión haya terminado y el evento tenga [status](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#status-del-evento) `Completado`, debes ocultar el componente de **Live Shopping** o remover el script, dependiendo de tu solución de frontend. El público continuará viendo la pantalla negra en tu sitio web o landing page hasta que completes este paso.

Para ver las instrucciones completas, consulta [Ocultar o remover el componente de Live Shopping](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/7e3bP6LjFgxXC210jSpl59).
