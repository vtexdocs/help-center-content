---
title: 'Crear formularios de Cliente y Dirección en nuevas tiendas'
id: 46ETfuaGogKwaMau4ESAAM
status: PUBLISHED
createdAt: 2017-08-16T16:57:24.708Z
updatedAt: 2023-03-28T22:59:22.957Z
publishedAt: 2023-03-28T22:59:22.957Z
firstPublishedAt: 2017-08-16T17:21:19.815Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slug: crear-formularios-de-cliente-y-direccion-en-nuevas-tiendas
legacySlug: crear-formularios-de-cliente-y-dirección-en-nuevas-tiendas
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

En el Master Data, los formularios de Cliente y Dirección no se crean por estándar en todas las nuevas tiendas. Están presentes solo en la tienda principal de la cuenta. Este escenario es recurrente en los casos en que se crean multi-tiendas.

<div class="alert alert-warning">
Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar cuál versión de Master Data satisface las necesidades de tu operación o ya está en uso.
 <ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Características de las versiones de Master Data
 </a>
</li>
<li>
<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
Master Data v2
 </a>
</li>
</ul>
</div>

Es posible crear estos formularios automáticamente, bastando seguir las instrucciones a continuación para cada tienda que se desee.

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data**.
2. Luego de autenticarse, acceder a la siguiente URL, a fin de efectuar una requisición (GET) a la API: `meusegundosite.vtexcrm.com.br/api/crm/pvt/provisioning`.
3. El resultado será una pantalla en blanco en el navegador, pero que corresponde a una respuesta de status “200”.
4. Tras algunos minutos, en el Master Data, hacer clic en **Área avanzada**.
6. En la opción **¿Desea limpiar el cache?** Hacer clic **Sí**.
7. Volver a la página inicial del Master Data.
8. Hacer clic en **Recargar Aplicaciones**.

Una vez concluidos los pasos arriba, los formularios de la aplicación **Profile System** ya deberán estar disponibles en tu Master Data.

![3 - ES](//images.ctfassets.net/alneenqid6w5/d2hevHhL68Siy82aO0E0s/d0cc7aa57c4520704353663cabc2d868/3_-_ES.png)
