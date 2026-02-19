---
title: 'No funciona el trigger en Master Data v2'
id: 1WvpFuZUQmPrBlrlwX47Qd
status: PUBLISHED
createdAt: 2024-12-10T13:34:36.370Z
updatedAt: 2024-12-10T13:38:54.049Z
publishedAt: 2024-12-10T13:38:54.049Z
firstPublishedAt: 2024-12-10T13:38:54.049Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: trigger-in-master-data-v2-is-not-working
legacySlug: no-funciona-el-trigger-en-master-data-v2
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Master Data v2
  - Trigger
---

Al crear un trigger para notificar cambios en una entidad de datos en Master Data v2, algunos usuarios pueden notar que no llegan requests al endpoint configurado, incluso después de haber configurado el trigger.

Este problema puede deberse a una configuración incorrecta del trigger o a problemas relacionados con permisos y autenticación. Consulta las instrucciones siguientes para identificar y corregir el problema.

## Solución

Para resolver estos problemas hay algunas soluciones que puedes considerar:

* [Compruebar la configuración del trigger](#comprobar-la-configuracion-del-trigger): asegúrate de que la estructura sea correcta, incluyendo los campos obligatorios.  
* [Pruebar el endpoint de forma independiente](#pruebar-el-endpoint-de-forma-independiente): asegúrate de que el endpoint esté funcionando correctamente.  
* [Comprueba los permisos y la autenticación](#compruebar-los-permisos-y-la-autenticacion): asegúrate de que los permisos están configurados correctamente.

### Comprobar la configuración del trigger

Sigue las instrucciones de la guía [Setting up triggers in Master Data v2](https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2#trigger-example) para revisar la configuración del trigger. Observa los detalles que se indican a continuación para evitar errores:

* Asegúrate de que la estructura del trigger en `v-triggers` está correcta, incluyendo los campos obligatorios `name`, `active`, `action`, `type`, `uri`, `method`, `headers`, y `body`.  
* Si el trigger realiza un request a una API externa, comprueba que la URL del endpoint (`uri`) es correcta y accesible. Intenta acceder a la URL directamente para asegurarte de que está disponible y lista para recibir requests POST.  
* Comprueba la sintaxis JSON en el cuerpo del trigger: errores de sintaxis pueden causar fallos silenciosos en la ejecución del trigger.  
* Si el trigger está asociado a una entidad u operación concreta, comprueba que se cumplen estas condiciones.  
* Comprueba que la entidad de datos existe y está correctamente configurada en Master Data v2. Las entidades de datos de las dos versiones son independientes, es decir, un documento creado en una entidad en Master Data v1 no puede consultarse ni editarse utilizando recursos de Master Data v2 y viceversa.  

  Para poder probar triggers con entidades de Master Data v1, es necesario seguir los [pasos para crear triggers en Master Data v1](/es/docs/tutorials/creando-trigger-en-el-master-data).

### Probar el endpoint de forma independiente

Intenta enviar un request manualmente al endpoint utilizando una herramienta como **Postman**. Esto ayuda a garantizar que el endpoint recibe peticiones correctamente y funciona como se espera.

* Al realizar cambios manuales en la entidad de datos, comprueba que dichos cambios activan el trigger de la forma esperada.  
* Comprueba que el campo `id` esté correctamente incluido en el cuerpo del request. Esto es necesario para identificar el documento que generó el trigger.

### Comprobar permisos y autenticación

* Asegúrate de que tus [credenciales](/es/docs/tutorials/claves-de-api) tienen los [permisos](/es/docs/tutorials/roles) necesarios para enviar requests al endpoint especificado.  
* Si el trigger realiza un request a un endpoint externo, comprueba si se requieren autenticación adicional o encabezados de seguridad que deban configurarse para dicho endpoint.

Si las soluciones anteriores no resuelven el problema, ponte en contacto con nuestro [soporte](/es/docs/tutorials/como-funciona-el-soporte-de-vtex).
