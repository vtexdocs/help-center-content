---
title: 'Exportación de datos de Master Data v1'
id: tutorials_1125
status: PUBLISHED
createdAt: 2017-04-27T21:57:19.601Z
updatedAt: 2023-03-28T23:31:33.420Z
publishedAt: 2023-03-28T23:31:33.420Z
firstPublishedAt: 2017-04-27T23:03:43.216Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: exportacion-de-datos
locale: es
legacySlug: exportacion-de-datos
subcategory: 2AThnkEZAYbk4G4EIs53rL
---

La exportación de datos en lote de los registros en Master Data v1 puede hacerse por API o mediante planilla. Este documento tiene por objeto demostrar el paso a paso necesario para la exportación de datos por planilla.

<div class="alert alert-warning">
La operación de exportación de datos del Master Data no es inmediata, y su tiempo de ejecución depende de la cantidad de datos en el Master Data. Por lo tanto, en tiendas con muchos datos y con una alta frecuencia de actualización, el archivo exportado puede quedar desfasado con relación a los nuevos datos. Si esto ocurre, la solución es volver a exportar los datos, preferiblemente en un momento en el que no se estén produciendo muchas actualizaciones (por ejemplo, fuera del horario comercial o en los fines de semana).
</div>

## Como exportar

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. Haga clic en la pestaña **Aplicações.**
3. Haga clic en visualizar (icono de la derecha) en el formulario deseado.
![visualizar button master data](https://images.ctfassets.net/alneenqid6w5/2x1xCx4tEeV6eMPy4VRFpE/0e59f11450a93765e037da555f8d6c09/visualizar_button_export_data.png)
4. Esto cargará el formulario seleccionado.
5. Haga clic en el botón **Exportar XLS.**
6. Seleccione los campos que desea recibir en el informe.
7. Rellene el e-mail al que desea enviar el informe (el campo se rellena automáticamente con el correo electrónico del usuario logado, pero puede ser cambiado).
8. Haga clic en el botón **Exportar.**

## Datos exportados de clientes

Debajo encontrará nuestra lista identificando campos default exportados en la aba **Clientes** de Master Data v1.

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

Recuerde que estos campos, son campos que vienen por default en el formulario __Cliente__. En el caso de que la tienda haya personalizado esta entidad (Cliente), puede haber otros campos que fueron creados.

