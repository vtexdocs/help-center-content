---
title: 'Diccionario de campos da exportación de clientes'
id: frequentlyAskedQuestions_1827
status: ARCHIVED
createdAt: 2019-01-24T20:45:59.094Z
updatedAt: 2022-08-04T22:36:28.271Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:10:59.946Z
contentType: tutorial
productTeam: Others
author: authors_84
slugEN: dictionary-of-customer-export-fields
locale: es
legacySlug: diccionario-de-campos-da-exportacion-de-clientes
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

Este documento tiene como finalidad ayudar en la identificación de campos standard en la [exportación](/es/faq/como-exportar-mi-base-de-datos-de-clientes)\* de la pestaña __Clientes__ en el Profile System (CRM) de Master Data v1.

Debajo encontrará nuestra lista identificando campo, significado y origen del mismo:

| Campo do Relatório     | Tradução     | Origem     |
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

\* [Veja como realizar uma exportação clicando aqui.](/es/faq/como-exportar-mi-base-de-datos-de-clientes)
