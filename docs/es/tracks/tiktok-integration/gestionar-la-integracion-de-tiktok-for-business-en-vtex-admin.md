---
title: 'Gestionar la integración de TikTok for Business en VTEX Admin'
id: 24SfBYkRkKMaetgjLDKgaP
status: PUBLISHED
createdAt: 2022-04-14T21:42:00.633Z
updatedAt: 2022-04-26T13:16:22.600Z
publishedAt: 2022-04-26T13:16:22.600Z
firstPublishedAt: 2022-04-18T11:57:58.931Z
contentType: trackArticle
productTeam: Channels
slugEN: managing-the-integration-with-tiktok-for-business-in-vtex-admin
locale: es
trackId: 1r0yJSO11nrer1YVu3WTFd
trackSlugES: integracion-de-tiktok
---


Después de instalar y configurar TikTok for Business, podrás gestionar la integración con TikTok en **Marketplace > TikTok.** En algunas versiones del Admin VTEX, la página se encuentra en **Aplicaciones > Mis aplicaciones > TikTok**.

Cualquier usuario conectado al Admin VTEX podrá acceder a esta área para gestionar TikTok. Sin embargo, al interactuar con los botones de esta zona, el usuario será redireccionado a los entornos de TikTok – TikTok Business Center, TikTok Ads Manager y TikTok Catalog Manager, donde necesitará los permisos necesarios para ver el contenido y realizar cambios.

![manage-tiktok-integration](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/tiktok-integration/gestionar-la-integracion-de-tiktok-for-business-en-vtex-admin_1.png)

Desde esta página, puedes:

- [Crear publicidades en TikTok](#crear-publicidades-en-tiktok)
- [Gestionar las funcionalidades](#gestionar-las-funcionalidades)
    - [Business Center](#business-center)
    - [TikTok Ad Account](#tiktok-ad-account)
    - [Data Sharing](#data-sharing)
    - [Catalog](#catalog)
- [Desconectar TikTok de tu tienda](#desconectar-tiktok-de-tu-tienda)

## Crear publicidades en TikTok

Para crear publicidad en TikTok, puedes hacer clic en el botón `Create an ad` o en **TikTok Ad Account** > `Create an ad`.

Luego, serás redirigido a TikTok Ads Manager para crear un nuevo anuncio.

## Gestionar las funcionalidades

Consulta a continuación la descripción de las funcionalidades disponibles para gestionar la integración entre tu tienda VTEX y TikTok en esta página. Debes hacer clic en cada sección para visualizar sus respectivas opciones.

### Business Center

* **Manage:** te redirecciona a [TikTok Business Center](https://ads.tiktok.com/help/article?aid=12786) para gestionar tu cuenta de empresa de TikTok.

### TikTok Ad Account

* **Manage:** te redirecciona a [TikTok Ads Manager](https://ads.tiktok.com/help/article?aid=10178) para gestionar la publicidad existente.
* **Create an ad:** te redirecciona a [TikTok Ads Manager](https://ads.tiktok.com/help/article?aid=10178) para crear un nuevo anuncio.

### Data Sharing

* **Manage:** te redirecciona a la página de gestión de TikTok Pixel en TikTok Ads Manager.
* **Enable Advanced Matching:** permite utilizar el botón <i class="fa-toggle-on"></i> para activar o desactivar [Advanced Matching](https://ads.tiktok.com/help/article?aid=10007891). Esta función no está disponible para la integración de VTEX por el momento, por lo que aunque la habilites a través de este botón, no se aplicará.

### Catalog

* **Products available:** indica cuántos productos de tu catálogo están disponibles en TikTok.
    * **Manage:** te redirecciona a TikTok Catalog Manager para gestionar el catálogo en TikTok.
* **Products pending:** indica cuántos productos de tu catálogo se están procesando en TikTok. Este status es transitorio y significa que TikTok está analizando la información.
    * **Manage:** te redirecciona a TikTok Catalog Manager para gestionar el catálogo en TikTok.
* **Products need additional details:** indica cuántos productos de tu catálogo carecen de [información](https://help.vtex.com/es/tracks/integracion-de-tiktok--1r0yJSO11nrer1YVu3WTFd/4AEUg7pEdX1beOaQhFf0wC#envio-de-datos-de-productos-a-tiktok) para ser sincronizados con TikTok.
    * **Manage:** te redirecciona a TikTok Catalog Manager para gestionar el catálogo en TikTok.

## Desconectar TikTok de tu tienda

Para desactivar la integración entre tu tienda y TikTok, haz clic en `Desconectar` en la parte superior de la página.

Si tus credenciales de TikTok son revocadas, es decir, si tu cuenta es [suspendida](https://ads.tiktok.com/help/article?aid=12170), la integración se desconectará automáticamente. 

Al desconectarse, la integración con TikTok se detiene por completo: el píxel de TikTok y la integración con el catálogo de tu tienda se desactivan. Por lo tanto, ya no se pueden cargar nuevos productos ni actualizarlos.

Por otro lado, VTEX no elimina los productos existentes en TikTok, es decir, siguen apareciendo en TikTok. Para eliminarlos de TikTok, debes eliminar manualmente los productos desde [TikTok Catalog Manager](https://ads.tiktok.com/help/article?aid=10001005).

>⚠️ Si aparece un mensaje de error al desconectar TikTok de tu tienda VTEX, sigue los pasos a continuación para asegurarte de que la integración se desactive correctamente.
>
> Accede a la página [Autorizaciones](https://ads.tiktok.com/ac/page/authorizations) en TikTok Ads Manager.
>
> 2. Busca la opción **VTEX**.
>
> 3. Haz clic en `Remover`.

Después de la desconexión, puedes volver a conectar la integración en cualquier momento volviendo a realizar los pasos descritos en el link [Configuración de la integración con TikTok for Business](https://help.vtex.com/es/tracks/integracion-de-tiktok--1r0yJSO11nrer1YVu3WTFd/4AEUg7pEdX1beOaQhFf0wC).
