---
title: Facebook Business Extension
id: 434Z1iWnaa0zbOMDyr6oi
status: PUBLISHED
createdAt: 2021-09-30T13:58:09.872Z
updatedAt: 2023-04-10T13:52:16.703Z
publishedAt: 2023-04-10T13:52:16.703Z
firstPublishedAt: 2021-09-30T18:46:40.188Z
contentType: trackArticle
productTeam: Channels
slug: facebook-business-extension
trackId: 2hS3ANSZ7vlHCcba4h7k8D
trackSlugES: integracion-con-facebook-business-extension
---

[Facebook Business Extension (FBE)](https://developers.facebook.com/products/business-apps/?locale=es_LA) es una plataforma que ofrece una forma simplificada de integrarse con los servicios y funcionalidades de Facebook.

VTEX ha desarrollado la aplicación _Facebook Business Extension y Conversions API_, que facilita la integración con FBE. Después de completar la integración, será posible gestionar nuevos activos de Facebook a través de la plataforma VTEX. Además, la integración instala automáticamente las siguientes funcionalidades:

- [Píxel de Facebook](https://developers.facebook.com/docs/facebook-pixel?locale=es_LA)
- [API de Conversiones](https://www.facebook.com/business/help/2041148702652965?locale=es_LA)
- [Catálogo](https://developers.facebook.com/docs/marketing-api/catalog?locale=es_LA)
- Botón “Comprar ahora" de Facebook
- Botón "Comprar ahora" de Instagram

## Compatibilidad

La aplicación _Facebook Business Extension y Conversions API_ es totalmente compatible con las tiendas que operan con VTEX IO, y parcialmente compatible con las tiendas que son CMS o [Headless](https://vtex.com/en/blog/strategy/headless-commerce-what-it-is-and-why-its-growing-so-fast/). Para identificar el modelo con el que opera tu tienda, accede a [Edition App](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-edition-app). 

Obtenga más información sobre la configuración requerida para cada uno en nuestra guía [Facebook Business Extension](https://developers.vtex.com/docs/guides/vtex-facebook-fbe#compatibility) en el Developer Portal.

<div class="alert alert-warning">
En VTEX, hay una <a href= "https://help.vtex.com/es/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc">guía para la integración con Facebook </a>. Sin embargo, la integración con la aplicación <i>Facebook Business Extension y Conversions API</i> debería ser tu elección por defecto, ya que FBE es la solución más completa de Facebook. Independientemente de que tengas configurada la otra integración, debes proceder normalmente con la configuración de esta integración.
</div>

## Píxel de Facebook

El Píxel de Facebook te permite medir la eficacia de la publicidad de tu negocio analizando las acciones que los usuarios realizan en tu sitio web. Con la integración con la aplicación Facebook Business Extension y la API Conversions, esto se puede hacer de forma nativa.

Actualmente, el píxel de Facebook se obtiene integrando la [aplicación Facebook Business Extension](https://apps.vtex.com/vtex-facebook-fbe/p) y la API Conversions y está disponible para las tiendas VTEX IO y Legacy CMS Portal. Si tu tienda utiliza el sistema Legacy CMS, será necesario realizar una configuración manual en el sistema. Obtén más información en el artículo [Facebook Business Extension](https://developers.vtex.com/vtex-developer-docs/docs/vtex-facebook-fbe#facebook-pixel-for-legacy-cms-portal-frontend).

Sin embargo, si tu tienda ya utiliza la antigua aplicación Facebook pixel de la App store, debes comprobar que la aplicación se ha desinstalado correctamente. Si la aplicación sigue instalada, puede duplicar los eventos de Facebook.

Para comprobar si la aplicación ha sido desinstalada, ve al Admin VTEX y accede a *Configuración de la cuenta > Mis apps*.

## API de Conversiones

La API de Conversiones está diseñada para crear una conexión directa entre tus datos de _marketing_ y el sistema de Facebook. Algunas de las principales ventajas de esta funcionalidad son:

- Reducción del costo por acción gracias a la mejora de la conexión.
- Optimización de anuncios para las acciones que se producen al final de la jornada del cliente.
- Mejora de la medición de los datos de _marketing_.
- Mayor control sobre los datos.

<div class = "alert alert-info">
Descubre más en la documentación de Facebook <a href= "https://www.facebook.com/business/help/2041148702652965?locale=es_LA">Información sobre la API de Conversiones</a>.
</div>
