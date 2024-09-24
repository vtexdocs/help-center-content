---
title: 'Revise las entradas CAA en su tienda'
id: 4mBSMpdCByI4c6G64G82Um
status: PUBLISHED
createdAt: 2018-11-01T14:32:53.355Z
updatedAt: 2019-12-31T15:13:16.147Z
publishedAt: 2019-12-31T15:13:16.147Z
contentType: updates
productTeam: Reliability
author: 245tA425AIeioKAk2eaiwS
slugEN: check-your-stores-caa-record
locale: es
legacySlug: actualiza-las-entradas-caa-en-su-tienda
announcementImageID: ''
announcementSynopsisES: 'Recomendamos que actualice las entradas CAA de sus administradores DNS hasta 9/11.'
---

Con el acercamiento a __Black Friday__, le recomendamos que actualice las entradas CAA en sus Gestores de DNS hasta el __9 de noviembre__. Esta acción es necesaria para que se genere y se renueve el certificado SSL. Sólo así es posible utilizar el CDN de VTEX.

>⚠️ **Atención:** estos tipos de entrada pueden no estar disponibles en la interfaz de su administrador de DNS, pero a menudo se pueden gestionar a través de llamados en el soporte de la herramienta.

## ¿Qué necesitas hacer?
En las configuraciones del __Gestor de DNS__, consulte (o pida al responsable de la gestión del dominio de su tienda) si las entradas siguientes están configuradas de la siguiente manera:

- `domain.com.    CAA     0   issue   “letsencrypt.org”`
- `domain.com.    CAA     0   issue   “comodoca.com”`
- `domain.com.    CAA     0   issue   “digicert.com”`
- `domain.com.    CAA     0   issue   “globalsign.com”`


## ¿Cuál es el impacto?
Registrar las nuevas entradas sólo permite que las entidades __Digicert__, __Comodo__, __Globalsign__ y __Let's encrypt__ puedan generar y renovar certificados para su dominio. __Estos certificados son fundamentales para que su tienda pueda utilizar el CDN de VTEX y tener un rendimiento superior.__ Si la actualización no se realiza, su tienda puede tener problemas de rendimiento y tardar más en cargarse.

>ℹ️ Las tiendas que no tienen ninguna entrada CAA configurada **no tienen que hacer la configuración** y **no se verán afectada**.


## Contenidos útiles
- [https://letsencrypt.org/docs/caa/](https://letsencrypt.org/docs/caa/)
- [https://sslmate.com/caa/](https://sslmate.com/caa/)
- [https://sslmate.com/caa/about](https://sslmate.com/caa/about)
