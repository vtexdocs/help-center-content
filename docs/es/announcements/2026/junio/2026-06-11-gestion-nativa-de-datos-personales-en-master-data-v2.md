---
title: 'Gestión nativa de datos personales en Master Data v2'
createdAt: 2026-06-11T00:00:00.000Z
updatedAt: 2026-06-11T00:00:00.000Z
contentType: updates
productTeam: Storage
slugEN: 2026-06-11-native-personal-data-management-in-master-data-v2
locale: es
announcementSynopsisES: 'Master Data v2 ahora gestiona datos personales de forma nativa, con cifrado de los datos almacenados, enmascaramiento automático al leer datos y soporte para solicitudes de titulares de datos.'
tags:
  - Nueva funcionalidad
  - Master Data
---

La gestión nativa de datos personales ya está disponible en Master Data v2. Cada entidad de datos ahora puede declarar qué campos contienen datos personales y quién es el titular de esa información, lo que activa el cifrado de los datos almacenados, el enmascaramiento automático al leerlos y el soporte para flujos de solicitudes de titulares de datos.

## ¿Qué cambió?

Anteriormente, las tiendas que almacenaban datos personales en Master Data v2 debían implementar sus propias capas de cifrado, enmascaramiento y control de acceso. Ahora estos comportamientos son nativos de la plataforma:

- **Configuración por entidad:** cada entidad de datos puede declarar los campos que contienen datos personales y el campo que identifica al titular (`SubjectIdField`).
- **Cifrado y residencia de datos:** los valores de los campos con datos personales se almacenan por separado, con cifrado propio y reglas específicas de residencia de datos.
- **Enmascaramiento de forma predeterminada:** las operaciones de lectura devuelven los campos de datos personales con valores enmascarados (por ejemplo, `j***@****.com`). Para obtener los valores originales debes enviar un parámetro específico en la solicitud.
- **Vínculo con el titular:** cada documento con datos personales queda asociado al titular declarado, lo que permite atender derechos como acceso, portabilidad y olvido.

> ℹ️ La funcionalidad está disponible solo para entidades de Master Data v2. Las entidades de Master Data v1 no son compatibles.

## ¿Qué se necesita hacer?

Master Data v2 y las entidades de datos siguen funcionando como antes.

Para empezar a usar la funcionalidad de gestión de datos personales, los equipos técnicos de la tienda deben identificar los campos de cada entidad que contienen datos personales y ajustar las integraciones de lectura y búsqueda afectadas por el enmascaramiento. Puedes consultar las instrucciones en la guía [Managing personal data in Master Data v2](https://developers.vtex.com/docs/guides/managing-personal-data-in-master-data-v2).