---
title: 'Crear formularios de Cliente y Dirección en nuevas tiendas'
id: 46ETfuaGogKwaMau4ESAAM
status: PUBLISHED
createdAt: 2017-08-16T16:57:24.708Z
updatedAt: 2024-06-11T17:38:43.775Z
publishedAt: 2024-06-11T17:38:43.775Z
firstPublishedAt: 2017-08-16T17:21:19.815Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slug: crear-formularios-de-cliente-y-direccion-en-nuevas-tiendas
locale: es
legacySlug: crear-formularios-de-cliente-y-dirección-en-nuevas-tiendas
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

En el Master Data, los formularios de Cliente y Dirección no se crean por estándar en todas las nuevas tiendas. Están presentes solo en la tienda principal de la cuenta. Este escenario es recurrente en los casos en que se crean multi-tiendas.

>⚠️ Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar cuál versión de Master Data satisface las necesidades de tu operación o ya está en uso.
>
> *<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
> Características de las versiones de Master Data
>  </a>
>
> *<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
> Master Data v2
>  </a>
> 

Es posible crear estos formularios automáticamente, bastando seguir las instrucciones a continuación para cada tienda que se desee.

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data**.
2. Luego de autenticarse, accede a la siguiente URL, a fin de efectuar una requisición (GET) a la API: `{nombredelatienda}.vtexcrm.com.br/api/crm/pvt/provisioning`. Sustituya `{nombredelatienda}` por el nombre de su tienda.

  El resultado será una pantalla en blanco en el navegador, pero que corresponde a una respuesta de status __200 OK__.
3. Tras algunos minutos, en el Master Data, haz clic en **Configuración avanzada**.
4. En la opción **¿Quieres limpiar el caché?** haz clic en **Sí**.
5. Haz clic en la aba **Apliaciones** para volver a la página inicial del Master Data.
6. Haz clic en **Volver a cargar aplicaciones**.

Una vez concluidos los pasos arriba, los formularios de la aplicación **Profile System** ya deberán estar disponibles en tu Master Data.
