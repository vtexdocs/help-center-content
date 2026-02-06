---
title: 'Formularios Cliente y Dirección no existen en multitienda'
id: 46ETfuaGogKwaMau4ESAAM
status: PUBLISHED
createdAt: 2017-08-16T16:57:24.708Z
updatedAt: 2024-11-21T14:53:44.434Z
publishedAt: 2024-11-21T14:53:44.434Z
firstPublishedAt: 2017-08-16T17:21:19.815Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: customer-and-address-forms-do-not-exist-in-multistores
legacySlug: crear-formularios-de-cliente-y-dirección-en-nuevas-tiendas
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Master Data v1
  - Cliente
  - Direccion
  - Multitienda
---

En Master Data v1, los formularios Cliente y Dirección solo se crean en la tienda principal de la cuenta de forma predeterminada. Es por este motivo que los formularios no se crean automáticamente al crear una [multitienda](/es/docs/tutorials/gestionar-multitienda).

> ⚠️ Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar cuál versión de Master Data satisface las necesidades de tu operación o ya está en uso. <ul> <li> [ Características de las versiones de Master Data ](/es/docs/tutorials/master-data#versions-available) </li> <li> [ Master Data v2 ](https://developers.vtex.com/docs/guides/master-data-v2-basics) </li> </ul>

## Solución

Sigue las instrucciones a continuación para cada multitienda en la que deseas crear los formularios Cliente y Dirección:

1.	En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.  
2.	Después de iniciar sesión, accede a la siguiente URL en la barra de dirección de tu navegador para realizar un request GET a la API: `{nombredelatienda}.vtexcrm.com.br/api/crm/pvt/provisioning`. Sustituye `{nombredelatienda}` por el nombre de tu tienda.

  La solicitud creará los formularios en la multitienda. El resultado será una página en blanco en el navegador que corresponde a una respuesta de status **200 OK**.  
3.	En Master Data, haz clic en `Configuración avanzada`.  
4.	En la opción **¿Quieres limpiar el caché?**, haz clic en `Sí`.  
5.	Haz clic en la pestaña **Aplicaciones** para volver a la página de inicio de Master Data.  
6.	Haz clic en `Volver a cargar aplicaciones`.

Después de completar estos pasos, los formularios Cliente y Dirección estarán disponibles en Master Data.
