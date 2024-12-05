---
title: 'Cambiar el dominio de la tienda'
id: frequentlyAskedQuestions_626
status: ARCHIVED
createdAt: 2019-01-24T20:45:57.032Z
updatedAt: 2022-11-09T22:15:52.205Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:02:37.712Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: how-can-i-change-the-domain-of-my-store
locale: es
legacySlug: como-cambiar-el-dominio-de-la-tienda
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

El cambio de domínios es el cambio de la dirección de la tienda. Por ejemplo, si la tienda VTEX tiene el domínio **_mitienda.com_** y desea cambiar para **_nuestratienda.com_**, debe seguir los pasos de ese tutorial.

>⚠️ Sugerimos NO borrar el HOST creado anteriormente, mientras que la nueva configuración no está propagada (Tiempo promedio de propagación: 15 minutos).

La plataforma VTEX está lista para cambios de domínio sin impactos negativos. Sólo es necesario seguir los pasos abajo:

### 1. Crear nuevas entradas HOST en el License Manager
En el License Manager, en “Contas”, será necesario incluir el nuevo dominio cómo HOST de la tienda. Todavía el DNS del nuevo dominio no debe estar apuntado para VTEX. En secuencia la imágenes con ejemplo de cómo se hace la inclusión de nuevos HOSTs:
![Cambiar dominio](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Account%20management/Accounts/como-cambiar-el-dominio-de-la-tienda_1.png)

### 2. Fijar las configuraciones del nuevo Portal
Es paso es fundamental para que el Checkout funcione correctamente.
Es necesario fijar si los “Sites” registrados están relacionados con algún Account Name creado en License Manager. [Lea más acerca de las configuraciones del Portal](/es/faq/configurar-template-en-el-smartcheckout/).

### 3. Apuntar DNS del nuevo dominio para VTEX
Después de lograr los pasos anteriores, sólo es necesario apuntar el DNS del nuevo dominio para VTEX. [Lea más acerca del apuntamento de DNS](/es/tutorial/configurando-el-apuntamiento-del-dns-para-vtex/).
