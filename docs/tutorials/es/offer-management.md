---
title: 'Módulo Gestión de anuncios'
id: 7MRb9S78aBdZjFGpbuffpE
status: DRAFT
createdAt: 2021-03-17T00:44:49.452Z
updatedAt: 2024-06-20T21:34:27.585Z
publishedAt: 
firstPublishedAt: 2021-03-17T01:05:49.343Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: gestion-de-anuncios
locale: es
legacySlug: lista-de-anuncios
subcategory: 2zVauFUkYn8vgS0y0MfWeK
---

<div class="alert alert-info">
Para evolucionar su experiencia al sincronizar y actualizar anuncios, el equipo de VTEX está desarrollando una nueva funcionalidad que sustituirá el módulo de <b>Gestión de anuncios</b>.
Por este motivo, Gestión de anuncios no recibirá más actualizaciones ni mantenimiento.
Para conectores y marketplaces que ya se integraron con el módulo, comuníquese con nuestro equipo de desarrollo por email <a href="taissa.araujo@vtex.com.br">taissa.araujo@vtex.com.br</a>.
Para los conectores interesados en comenzar la integración, les pedimos que esperen el lanzamiento del nuevo módulo, tan pronto como esté disponible, notificaremos a todos los clientes a través del <a href="https://developers.vtex.com/updates/release-notes">Developer Portal</a> y el <a href="https://help.vtex.com/pt/en/announcements">VTEX Help Center</a>.
 </div>  

El módulo **Gestión de anuncios** permite a los _sellers_ hacer el seguimiento del envío y la sincronización de los anuncios de las integraciones con los canales de venta. En VTEX, un anuncio es un SKU cuyo precio y stock fueron configurados por un _seller_ y que fue enviado a un canal de ventas.

![Offer Management gif](//images.ctfassets.net/alneenqid6w5/39zPddPF6cBtI1QZn7GSDz/d270dd62f2b92f6100de71836279b195/Offer_Management_gif.gif)

**Gestión de anuncios** permite hacer un seguimiento de los anuncios con [Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) (Classic y Premium), [Netshoes](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) y marketplaces VTEX. Para los conectores que desean integrarse a través de API, existe la [Guía de integración de Gestión de anuncios](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).

Para acceder al módulo, en el Admin VTEX, ingresa en **Marketplace > Conexiones > Gestión de anuncios**. Una vez hecho esto, aparecerá la siguiente interfaz:

![sent-offers-es_2](//images.ctfassets.net/alneenqid6w5/4NEuTkSW9kSb6SQa3I7QPc/a4b532bd1367cc8f15e25afe1ce78fa0/sent-offers-es_2.png)

La interfaz de **Gestión de anuncios** mostrará una lista con tus anuncios y podrás hacer clic sobre cada uno de ellos para acceder a los [detalles del anuncio](https://help.vtex.com/es/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) y verificar los [detalles de la interacción](https://help.vtex.com/es/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf). Las interacciones son los registros del anuncio durante todo el proceso de sincronización y el envío al canal de ventas. Los registros de los detalles de la interacción están disponibles durante diez días para consulta.

![diagrama ju meyer sent offers es](//images.ctfassets.net/alneenqid6w5/1v1nQSOtb5hekGMB4sQCiW/a3cae86d4d8a5126d448471e37b037b1/diagrama_ju_meyer_sent_offers_es.png)

En la página **Gestión de anuncios**, puedes realizar las siguientes acciones:

- [Buscar y filtrar anuncios](#buscar-y-filtrar-anuncios)
- [Ver la información de los anuncios](#ver-la-informacion-de-los-anuncios)
- [Exportar la lista de anuncios](#exportar-la-lista-de-anuncios)
- [Consultar los anuncios disponibles](#consultar-los-anuncios-no-disponibles)

## Buscar y filtrar anuncios

En la parte superior de la página, hay una barra de búsqueda con un <i class="fas fa-search"></i> ícono de una lupa. En la barra, puedes buscar un anuncio por:

- Nombre del anuncio
- ID del SKU
- Código EAN 

![IMAGEM 2](https://drive.google.com/uc?export=download&id=1Qea25eWYa8KtW79qisUo5Up_RpWqpzao)

Además, también puedes filtrar el resultado de la búsqueda según estos criterios:

- **Canal:** canal de ventas al cual se envió el anuncio.
- **Categoría:** [categorías](https://help.vtex.com/pt/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) registradas en la tienda del _seller_ VTEX.
- **Marca:** marcas registradas por el _seller_ VTEX.
- **Status:** situación del envío del anuncio al canal de ventas, que puede ser:
  - `Enviando`: anuncios en proceso de envío al canal de ventas por primera vez, anuncios que están migrando a un nuevo canal o anuncios que se están reenviando.
  - `Sincronizado`: anuncios recibidos con éxito en el canal de ventas. Tanto el _marketplace_ como el _seller_ actualizan estos anuncios en tiempo real.
  - `Error`: anuncios con algún problema que impidió la sincronización con el canal de ventas y que habrá que corregir manualmente.

Para realizar una búsqueda por **Canal**, haz clic en la flecha hacia abajo <i class="fa-solid fa-angle-down"></i>, selecciona los canales de venta deseados y, luego, haz clic en **APLICAR**.

Para realizar una búsqueda por **Categoría**, **Marca** o **Status**, haz clic en la flecha hacia abajo <i class="fa-solid fa-angle-down"></i> al lado del filtro deseado y, luego, haz clic en la flecha hacia abajo <i class="fa-solid fa-angle-down"></i> que se encuentra al lado, donde dice **Todos**. Selecciona la opción por la cual deseas filtrar la búsqueda y haz clic en **APLICAR.** 

Puedes usar un único filtro o combinar varios en una misma búsqueda. Por defecto, los filtros tendrán marcada la opción **Todos** de manera predeterminada para que la página inicial mostre la cantidad total de anuncios existentes.

## Ver la información de los anuncios

En la parte superior de la página, hay una presentación general de los anuncios del _seller_, con la siguiente información:

- Número total de anuncios creados.
- Porcentaje de anuncios sincronizados correctamente.

![IMAGEM 3](https://drive.google.com/uc?export=download&id=17NX_Jq9gec8vy0DLCOUs6Vz6sEZ97GPn)

Además, verás una barra de color en la cual podrás identificar el número de anuncios en cada uno de los tres status:

- `Sincronizado`: color verde.
- `Enviando`: color gris.
- `Con error`: color rojo.

En la lista de anuncios, hay tres columnas con esta información:

| **Columna** | **Descripción** |
| ---------- | ---------- |
| Anuncio | Muestra la imagen del SKU, el título del anuncio en el canal de ventas, el ID del SKU en VTEX y el ID del anuncio (código generado automáticamente que identifica al anuncio en VTEX). |
| Canal | Canal de ventas al cual se envió el anuncio. |
| Precio | Precio del SKU del anuncio. |
| Stock | Cantidad de ítems en [stock](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) para el SKU del anuncio. |
| Status | Estado de sincronización del anuncio, el cual puede ser `Sincronizado`, `Enviando` o `Error`. |

Puedes hacer clic sobre los nombres de las columnas para ordenar los anuncios de manera ascendente o descendente. Por ejemplo, al hacer clic sobre la columna **Precio**, podrás ordenar la lista por menor o mayor precio del anuncio.

## Exportar la lista de anuncios

Para exportar la lista de anuncios en formato XLSX, haz clic sobre el ícono <i class="fa-solid fa-arrow-down-to-line"></i> flecha hacia abajo, ubicado en la parte superior de la interfaz. El archivo se enviará al email del usuario registrado. El tiempo que tarde la exportación dependerá de la cantidad de anuncios de la lista exportada y de cuestiones de procesamiento de la plataforma VTEX.

<div class = "alert alert-info">
El contenido exportado incluirá el total de anuncios de la lista al momento de la exportación. Si hay algún filtro activo, solo se exportarán los anuncios seleccionados.
</div>

## Consultar los anuncios no disponibles

Los anuncios no disponibles son los SKU y los productos que están inactivos en el catálogo o que se quitaron de la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) utilizada en el canal de ventas. En la esquina superior derecha de la página **Gestión de anuncios**, podrás acceder a la página de **Anuncios no disponibles**, haciendo clic en `Anuncios no disponibles`.

La página **Anuncios no disponibles** contiene una lista con anuncios inactivos y muestra la siguiente información:

- **Anuncio:** muestra la imagen del SKU, el título del anuncio y el ID del SKU en VTEX.
- **Canal:** canal de ventas al cual se envió el anuncio.
- **Fecha de cancelación del envío:** fecha en la cual el SKU pasó a estar no disponible. Al hacer clic en el ícono flecha, el usuario será redireccionado a la página de [detalles de la interacción](https://help.vtex.com/es/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf).
- **Producto:** link a la página del SKU en el [catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) de tu tienda VTEX, donde podrás [activar el SKU](https://help.vtex.com/es/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY) o incluirlo en la política comercial utilizada en la integración con el canal de ventas.

En la página **Anuncios no disponibles**, podrás buscar anuncios en la barra de búsqueda usando el nombre, el ID del SKU o EAN; y filtrar los anuncios por canal, categoría o marca.

## Sepa más

- [Gestión de anuncios: detalles del anuncio](https://help.vtex.com/es/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P)
- [Gestión de anuncios: detalles de la interacción](https://help.vtex.com/es/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf)
- [Gestión de anuncios: oportunidades de Buybox](https://help.vtex.com/es/tutorial/anuncios-enviados-oportunidades-de-buybox-beta--1hO9eI1th47EGxQoTzGewC)
