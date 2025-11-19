---
title: '(Opcional) Utilizar estudios externos'
id: Dw0QdKI0aGjmyD5Z6z5JC
status: PUBLISHED
createdAt: 2025-07-23T18:10:11.675Z
updatedAt: 2025-09-15T21:42:49.757Z
publishedAt: 2025-11-19T21:42:49.757Z
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

>❗ Cuando transmitas desde un estudio externo, no intentes duplicar la transmisión del evento vía Bundle u otro estudio. **Live Shopping** permite solo una transmisión por estudio, y la plataforma reconocerá únicamente el primer estudio que comience a transmitir el evento.

## Método de transmisión para estudios externos

Para transmitir tu evento desde un estudio externo, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Apps > Live Shopping > Eventos**, o ingresa **Eventos** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón de flecha del [evento que creaste](https://help.vtex.com/es/docs/tracks/crear-evento) para acceder a la página de configuración del evento.
3. [Inicia](https://help.vtex.com/es/docs/tracks/iniciar-evento) el evento haciendo clic en el botón de alternancia <i class="fa-solid fa-toggle-on"></i> `Iniciar` en la parte superior derecha.
4. Selecciona la pestaña `Transmisión`.
5. En la página **Método de transmisión**, en la **Opción 2 - Transmisión push**, copia los valores de **URL del servidor** y los valores de **Clave del servidor**.
6. Accede a la configuración de transmisión externa del estudio y pega los valores como se muestra a continuación:

  * **Servidor:** ingresa la `URL del servidor` que copiaste.
  * **Clave del servidor:** ingresa la `Clave del servidor` que copiaste.

7. (Opcional) Haz clic en un botón de confirmación para guardar la configuración.

## Configuración de la transmisión - Calidad de transmisión

Para lograr una transmisión de alta calidad, incluso en dispositivos con conectividad limitada, debes configurar la configuración de la calidad de transmisión del estudio. Los valores recomendados están disponibles en la página de método de transmisión, en la sección de configuración de la transmisión, como se muestra en la imagen a continuación:

![live_shopping_stream_settings_quality_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/omnichannel/vtex-live-shopping-getting-started/live_shopping_stream_settings_quality_EN.png)

Para configurar la calidad de transmisión del estudio, en tu estudio externo, asigna los siguientes campos a estos valores:

* **Output = IngestVideoBitrate:** 2.4 Mb/s
* **Output = IngestAudioBitrate:** 150 kbps
* **Video = IngestFramerate:** 30 fps
* **Output = KeyframeInterval:** 2 seconds

## Antes de la transmisión en vivo

Antes de que inicies el evento en vivo, asegúrate de que todo funciona correctamente:

1. Verifica la previsualización para confirmar que el [componente de Live Shopping se muestra](https://help.vtex.com/es/docs/tracks/insertar-componente-de-live-shopping) correctamente en la página.
2. Verifica la [configuración del evento](https://help.vtex.com/es/docs/tracks/configurar-evento).
3. Verifica la configuración del [método de transmisión](#metodo-de-transmision-para-estudios-externos), así como la [configuración de la calidad de transmisión](#configuracion-de-la-transmision-calidad-de-transmision).

Una vez hecho esto, puedes comenzar a transmitir el evento. Como los pasos varían para cada estudio, te recomendamos revisar la documentación oficial del estudio que estés utilizando.

## Después de transmitir desde un estudio externo

Cuando la transmisión haya terminado y el evento tenga [status](https://help.vtex.com/es/docs/tracks/crear-evento#status-del-evento) `Completado`, debes ocultar el componente de **Live Shopping** o remover el script, dependiendo de tu solución de frontend. El público continuará viendo la pantalla negra en tu sitio web o landing page hasta que completes este paso.

Para ver las instrucciones completas, consulta [Ocultar o remover el componente de Live Shopping](https://help.vtex.com/es/docs/tracks/ocultar-o-eliminar-componente-de-live-shopping).
