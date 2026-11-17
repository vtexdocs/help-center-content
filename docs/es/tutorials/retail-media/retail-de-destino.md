---
title: 'Retail de destino'
createdAt: 2026-09-30T00:00:00.000Z
updatedAt: 2026-09-30T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: destination-retail
locale: es
---

Tu sitio web puede recibir tráfico de [campañas offsite](/es/docs/tutorials/campanas-offsite-en-vtex-ads) configuradas por el equipo de [VTEX Ads](/es/docs/tracks/retail-media) en la cuenta del anunciante. En la página **Retail de destino**, defines en qué campañas aparece tu sitio web como destino y cómo se comparten tus datos de conversión.

Una campaña offsite muestra el anuncio fuera de tu tienda y lleva al usuario hasta ella. Para que la compra resultante de ese acceso se atribuya a la campaña, VTEX Ads necesita registrar la llegada del usuario a tu storefront o a tu app. La página trata, por lo tanto, de dos asuntos distintos: la decisión de participar como destino y la captura de datos que registra el acceso.

La página está disponible solo para cuentas del tipo publicador, identificadas por la insignia **Retail Media Publisher** en el Admin.

> ℹ️ El publicador, también llamado publisher, es el retailer que ofrece espacios publicitarios para monetización. Para entender este rol y los demás roles de retail media, consulta [Roles en retail media](/es/docs/tracks/roles-en-retail-media).

> ⚠️ Participar como destino y tener la captura en funcionamiento son estados independientes. Activar el botón de alternancia **Disponible para nuevas campañas** declara la intención de recibir tráfico de campañas offsite, pero no instala ni valida ninguna captura. La captura empieza a funcionar solo cuando el script web o el SDK móvil está implementado y VTEX Ads recibe la señal correspondiente. Puedes mantener el botón de alternancia activado con las dos superficies en **No detectado**. En ese caso, no ocurre la atribución de la que dependen los anunciantes.

## Antes de comenzar

- Tu tienda debe estar registrada en VTEX Ads como publicador y tener el Publisher ID (UUID) proporcionado por el equipo de VTEX Ads. El equipo de VTEX Ads crea la cuenta de publicador, emite el Publisher ID y, cuando corresponde, la vincula a la cuenta VTEX.
- Para que la atribución de las campañas offsite funcione, la captura debe estar implementada en al menos una superficie (web o app móvil). Esto no es una condición para acceder a la página ni para activar el botón de alternancia de participación. Los procedimientos completos están en las guías del Developer Portal indicadas en la sección [Instalación](#instalacion) de este artículo.

## Acceder a la página Retail de destino

Para acceder a la página **Retail de destino**, sigue los pasos a continuación:

1. Accede al panel de Admin para publicadores de VTEX Ads.
2. Haz clic en el ícono del menú en la esquina superior izquierda.
3. Haz clic en **Retail de destino**, en la sección **Configuración**.

## Listar como retailer de destino

La tarjeta **Listar como retailer de destino** controla la participación de tu tienda como destino de campañas offsite. El control de la tarjeta es el botón de alternancia **Disponible para nuevas campañas**.

Con el botón de alternancia activado, tu tienda queda disponible como destino de nuevas campañas offsite, y tus datos de conversión se comparten con VTEX Ads para medir el rendimiento.

Con el botón de alternancia desactivado, tu tienda deja de aparecer en la lista de destinos disponibles para nuevas campañas offsite. Las campañas que ya estaban en curso en el momento de la desactivación siguen ejecutándose con normalidad y no se interrumpen.

## Instalación

En la tarjeta **Instalación**, configuras el seguimiento en los canales que reciben tráfico (web y móvil), para que sea posible atribuir el rendimiento de las campañas offsite que dirigen a tu tienda.

La tarjeta lista dos superficies, **Web** y **App móvil**, cada una con su propio status de captura. El status **No detectado** indica que VTEX Ads aún no recibió una señal de captura de esa superficie.

> ℹ️ El status de una superficie no depende de la posición del botón de alternancia **Disponible para nuevas campañas**, y el botón de alternancia no depende del status de las superficies. Una superficie en **No detectado** continúa sin captura aunque el botón de alternancia esté activado.

### Web

La página presenta dos casos de instalación para la superficie **Web**:

- **Tienda nativa VTEX:** instalar la app VTEX Ads Agent y definir el Publisher ID en la configuración de la app.
- **Storefront independiente:** agregar un script en las páginas del storefront. La página muestra el script listo para copiar.

El procedimiento de instalación se describe en [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script).

### App móvil

Si tienes una app móvil, instala el Activity Flow SDK para capturar compras originadas en campañas offsite. El procedimiento está en [Installing Activity Flow in mobile apps](https://developers.vtex.com/docs/guides/installing-activity-flow-in-mobile-apps), que se desglosa en las guías de React Native y de Flutter. La tarjeta también muestra el botón `Ver documentación del SDK móvil`.

## Cómo se elige tu tienda como destino

Durante la configuración de una campaña offsite, un anunciante o el equipo de VTEX Ads ve los retailers de destino que:

- Tengan el botón de alternancia **Listar como retailer de destino** activado.
- Tengan al menos una superficie de captura activa en las últimas 72 horas.

## Anunciantes que envían tráfico de campañas offsite a tu sitio web

La tarjeta **Anunciantes que envían tráfico de campañas offsite a tu sitio web** lista los anunciantes que están publicando campañas offsite con destino en tu tienda. En cada fila de la tabla encuentras la siguiente información:

- **Anunciante:** Nombre del anunciante que envía tráfico de campañas offsite a tu tienda.
- **Campañas activas:** Número de campañas offsite activas de ese anunciante que dirigen tráfico a tu tienda.

## Saber más

- [Métricas y atribución de VTEX Ads](/es/docs/tutorials/metricas-y-atribucion-de-vtex-ads)
- [Glosario de Retail Media](/es/docs/tracks/glosario-de-retail-media)
- [VTEX Ads: primeros pasos](/es/docs/tracks/vtex-ads-primeros-pasos)
- [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script)
- [Installing Activity Flow in mobile apps](https://developers.vtex.com/docs/guides/installing-activity-flow-in-mobile-apps)
