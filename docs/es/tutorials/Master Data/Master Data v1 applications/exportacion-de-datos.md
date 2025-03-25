---
title: 'Exportación de datos de Master Data v1'
id: tutorials_1125
status: PUBLISHED
createdAt: 2017-04-27T21:57:19.601Z
updatedAt: 2024-08-15T20:57:37.911Z
publishedAt: 2024-08-15T20:57:37.911Z
firstPublishedAt: 2017-04-27T23:03:43.216Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slugEN: exporting-data
locale: es
legacySlug: exportacion-de-datos
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

La exportación de datos en lote de los registros en Master Data v1 puede hacerse de dos maneras:

* Descargando un informe a través de la interfaz de Master Data.
* Utilizando el «endpoint» [Scroll documents](https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/scroll) de la API de Master Data v1.

Este documento tiene por objeto demostrar el paso a paso necesario para la __exportación de datos por informe__.

>⚠️ La operación de exportación de datos del Master Data no es inmediata, y su tiempo de ejecución depende de la cantidad de datos en el Master Data. Por lo tanto, en tiendas con muchos datos y con una alta frecuencia de actualización, el archivo exportado puede quedar desfasado con relación a los nuevos datos. Si esto ocurre, la solución es volver a exportar los datos, preferiblemente en un momento en el que no se estén produciendo muchas actualizaciones (por ejemplo, fuera del horario comercial o en los fines de semana).

## Exportar informe con datos de Master Data v1

Siga las instrucciones que se indican a continuación para exportar un informe con datos de registro de un formulario de Master Data v1.

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. Asegúrate de que se encuentra en la pestaña **Aplicaciones**.
3. Haz clic en el icono de lista <i class="fas fa-bars"></i> junto al formulario deseado.
4. Haz clic en el botón `Exportar XLS`.
6. Selecciona los campos que desea recibir en el informe.
7. Rellena el email al que desea enviar el informe (el campo se rellena automáticamente con el correo electrónico del usuario logado, pero puede ser cambiado).
8. Haz clic en el botón `Exportar`.

## Datos exportados de clientes

Debajo encontrará nuestra lista identificando campos estándar exportados en la aba **Clientes** de Master Data v1.

| Campo     | Descripción     | Origem     |
| ---------- | ---------- | ---------- |
| email       | Email del Cliente	       | Registro       |
| firstName       | Primer nombre del Cliente	       | Registro       |
| lastName       | Apellido del Cliente	       | Registro       |
| document       | Numero de documento del Cliente (DNI, CPF, Cédula, ect)	       | Registro       |
| documentType       | Tipo de documento del Cliente	       | Registro       |
| homePhone       | Telefono registrado del Cliente	       | Registro       |
| tradeName       | PJ- Nombre de Fantasía	       | Registro       |
| businessPhone       | PJ – Telefono de Registro	       | Registro       |
| corporateName       | PJ – Razón Social	       | Registro       |
| isCorporate       | PJ- Identifica que es PJ       | Registro       |
| stateRegistration       | PJ- Inscripción Estatal	       | Registro       |
| isFreeStateRegistration       | PJ- Inscripción Estatal Exenta	       | Registro       |
| corporateDocument       | PJ- Número de CNPJ / CUIT / RUT / RUC , etc.	       | Registro       |
| isNewsletterOptIn       | Optin Newsletter	       | Registro       |
| createdIn       | Fecha de creación del Registro	       | Interno       |
| updatedIn       | 	Fecha de la ultima actualización del registro en el CRM	       | Interno       |
| lastInteractionIn       | Fecha de la ultima actualización del registro en el CRM	       | Interno       |
| userId       | ID del cliente en el CRM	       | Interno       |
| createdBy       | Usuario que creó el registro	       | Interno       |
| lastInteractionBy       | Usuario que alteró el registro	       | Interno       |
| updatedBy       | Usuario que alteró el registro	       | Interno       |
| rclastsession       | ID de la sesión del script de navegación	       | Script de navegación       |
| rclastsessiondate       | Fecha de la última sesión de navegación guardada	       | Script de navegación       |
| checkouttag       | Lista de los pasos del Checkout que el cliente realizó	       | Script de navegación       |
| categoryVisitedTag       | Lista de las últimas Categorías Visitadas	       | Script de navegación       |
| searchTermTag       | Lista de los últimos términos buscados en el site	       | Script de navegación       |
| visitedProductWithStockOutSkusTag       | Lista de los Ids de los últimos Productos Visitados sin stock	       | Script de navegación       |
| productVisitedTag       | Lista de los Ids de los últimos Productos Visitados	       | Script de navegación       |
| brandVisitedTag       | Lista de las últimas Marcas Visitadas	       | Script de navegación       |
| rclastcart       | URl para retomar el carrito con todos los productos	       | Script de navegación       |
| rclastcartvalue       | Valor del último carrito	       | Script de navegación       |
| carttag       | Lista de IDs de los SKUs del último Carrito	       | Script de navegación       |

Recuerde que estos campos, son campos que vienen por estándar en el formulario __Cliente__. En el caso de que la tienda haya personalizado esta entidad (__Cliente__), puede haber otros campos que fueron creados.

