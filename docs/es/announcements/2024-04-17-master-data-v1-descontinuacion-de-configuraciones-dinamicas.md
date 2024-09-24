---
title: 'Master Data v1: descontinuación de configuraciones dinámicas'
id: 4a1FZX8wGeHLcOyMg0egg8
status: PUBLISHED
createdAt: 2024-04-17T12:34:11.024Z
updatedAt: 2024-04-17T12:48:51.570Z
publishedAt: 2024-04-17T12:48:51.570Z
contentType: updates
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: master-data-v1-dynamic-settings-deprecation
locale: es
legacySlug: master-data-v1-descontinuacion-de-configuraciones-dinamicas
announcementImageID: ''
announcementSynopsisES: 'El "Campo calculado" y la acción de trigger "Editar el valor del campo” serán descontinuados en Master Data v1.'
---

El día 17 de junio de 2024 desactivaremos las siguientes configuraciones en Master Data v1: **Campo calculado** y acción de trigger **Editar el valor del campo**.

Estas opciones permitían cambiar los valores de documentos en [Master Data](https://help.vtex.com/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) de forma dinámica, ejecutando código desde un trigger o desde la actualización/creación de un documento.

Para sustituir estas configuraciones, si necesitas actualizar los valores de los campos de forma dinámica, te recomendamos [crear una aplicación que se comunique con Master Data](https://developers.vtex.com/docs/guides/create-master-data-crud-app).

## ¿Qué cambió?

Ambas configuraciones dinámicas se desactivarán en Master Data v1.

Ten en cuenta que tanto los **Campos calculados** como los triggers existentes que utilizan la función **Editar el valor del campo** dejarán de funcionar en la misma fecha. Consulta la sección [¿Qué se necesita hacer?](#que-se-necesita-hacer) para más información sobre cómo ajustarse a estos cambios.

### Campo calculado

El **Campo calculado** era una configuración dentro de los campos de [entidad de datos](https://help.vtex.com/es/tutorial/entidade-de-datos--tutorials_1265) que permitía ejecutar código C# para recalcular el valor del campo cada vez que se insertaba o actualizaba un nuevo documento.

Este tipo de campo, ilustrado a continuación, ya no estará disponible a partir del 17 de junio de 2024. Los campos calculados creados anteriormente dejarán de funcionar en la misma fecha.

![image6](https://images.ctfassets.net/alneenqid6w5/13NWpWtxQGLFfh0ecW4ZV6/981d72dc1c1cc713a12f2be8bb4e1658/image6.png)

### Editar el valor del campo

Al configurar acciones de triggers, existía la opción de **Editar el valor del campo**, que permitía agregar código C# para modificar el valor de campos seleccionados en cada ejecución del trigger.

La opción **Editar el valor del campo**, ilustrada a continuación, ya no estará disponible al configurar acciones de triggers a partir del 17 de junio de 2024. Los triggers configurados con esta acción continuarán operativos solo hasta esa fecha.

![image1](//images.ctfassets.net/alneenqid6w5/2meuBC8t6dnVAfg1YzZnwL/05a36119e4539dec726d1bdea30622d6/image1.png)

## ¿Qué se necesita hacer?

Si necesitas actualizar los valores de campo de Master Data con base en un trigger, recomendamos que te pongas en contacto con tu equipo de desarrolladores para seguir las directrices que se indican a continuación:

* Desarrollar una aplicación en VTEX IO que se comunique con Master Data, siguiendo las directrices de la guía para desarrolladores [Creating a Master Data CRUD app](https://developers.vtex.com/docs/guides/create-master-data-crud-app).
* Configura un trigger que envíe una solicitud HTTP a la aplicación, siguiendo las instrucciones disponibles en [Crear trigger en Master Data v1](https://help.vtex.com/es/tutorial/criando-trigger-no-master-data--tutorials_1270#enviar-request-http).

Si utilizas el **Campo calculado** o un trigger con la acción **Editar el valor del campo**, sigue el procedimiento anterior antes del 17 de junio de 2024 para que los valores continúen actualizándose dinámicamente incluso después de que estos ajustes se hayan descontinuado en Master Data v1.
