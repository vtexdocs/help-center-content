---
title: 'Error al instalar certificado SSL personalizado'
id: 6hgFzbcc96mcrqXZMmHCTr
status: PUBLISHED
createdAt: 2025-02-28T14:55:08.515Z
updatedAt: 2025-03-07T19:46:32.629Z
publishedAt: 2025-03-07T19:46:32.629Z
firstPublishedAt: 2025-02-28T15:00:43.416Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: error-installing-custom-ssl-certificates
legacySlug: error-al-instalar-el-certificado-ssl-personalizado
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - certificados SSL
  - VTEX Shield
---

Al instalar [certificados SSL personalizados](/es/tutorial/certificados-ssl-personalizados--1hoaDEbU50PDZSe6AYep9q) en [VTEX Shield](/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) pueden producirse algunos errores. Consulta a continuación los posibles errores y sus soluciones.

## Solución

Consulta la tabla a continuación para identificar el significado y verificar la acción correctiva específica para cada mensaje de error:

| Tipo de error | Significado | Acción requerida |
| :---- | :---- | :---- |
| Este host no está incluido en el certificado | Seleccionaste por lo menos un host que no corresponde a los hosts presentes en los `AltNames` del certificado.  | <ul><li>Remover el host destacado en rojo para dejar de seleccionar el host no mencionado en el certificado.</li><li>Revisar el contenido de los `AltNames` del certificado utilizando una herramienta como [Certificate Decoder](https://www.sslshopper.com/certificate-decoder.html) y, de ser necesario, obtener otro certificado que incluya los hosts deseados.</li></ul> |
| Formato no válido  | El certificado enviado tiene un formato que no es válido.   | Revisar el archivo del certificado y comprobar que sea un archivo CRT. |
| Estos hosts ya no existen | Se eliminó de la cuenta al menos uno de los hosts enviados antes de que se instalara el certificado. Esto puede suceder, por ejemplo, cuando otro usuario del Admin elimina el host durante la configuración. Los hosts descritos aparecen destacados en rojo. | Al actualizar la página y llenar nuevamente el formulario, los hosts eliminados ya no estarán entre las opciones. Los hosts eliminados se pueden reconfigurar antes de instalar el certificado o se pueden dejar sin seleccionar. |
| Los hosts no están completamente configurados. Consulta la [documentación](/es/tutorial/configurar-o-dominio-da-loja--tutorials_2450) para completar los demás pasos de configuración. | La configuración de al menos uno de los hosts enviados está incompleta; probablemente falta el paso de apuntar el DNS a VTEX. | Seguir los pasos descritos en la guía [Configurar dominio de la tienda](/es/tutorial/configurar-o-dominio-da-loja--tutorials_2450) y comprobar que el DNS del dominio apunte a VTEX, según se indica en [Realizar el apuntamiento de DNS](/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dns). |
| Tamaño no válido | El archivo del certificado es mayor que 1 MB. | Revisar el archivo del certificado y comprobar que no tenga más de 1 MB. |
| Certificado no válido | El contenido XML del certificado no es válido. | Revisar el archivo del certificado y comprobar que el contenido XML esté correcto. |
| Acceso no autorizado. Ponte en contacto con el administrador de la tienda. | El usuario no tiene permiso para instalar un certificado personalizado. | Contactar al administrador de la tienda para revisar la configuración de [roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).<br /><br /> Para ver y gestionar la información de la página, el usuario debe estar asociado a un rol con los siguientes [recursos de License Manager](/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3): <ul><li>**Producto:** *CDN API*</li><li>**Categoría:** *Certificate management*</li><li>**Recursos:** *Update certificate* y *View certificate*</li></ul> 
| Se produjo un error al instalar el certificado | Error genérico para causas indeterminadas. | Actualizar la página y si el problema continúa, ponerse en contacto con [Soporte](/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM). |
