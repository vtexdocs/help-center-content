---
title: 'Cómo corregir el error de esquema en aplicaciones B2B'
id: WkjJZSnGXCiqmLhg4b0OR
status: PUBLISHED
createdAt: 2024-09-11T18:54:34.611Z
updatedAt: 2024-11-08T19:31:33.438Z
publishedAt: 2024-11-08T19:31:33.438Z
firstPublishedAt: 2024-09-11T19:42:01.055Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: i-cant-fix-the-schema-error-in-b2b-apps
legacySlug: como-corregir-el-error-de-esquema-en-aplicaciones-b2b
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - B2B
  - Schema
  - Master Data
---

En entornos que utilizan aplicaciones B2B, puede presentarse la alerta `Schema is invalid` que está relacionada con problemas de esquema. Generalmente, este tipo de alerta se debe a una configuración incorrecta en la entidad CL (Cliente) en Master Data.

El escenario más común son campos obligatorios agregados al esquema que define los datos de esa entidad en Master Data. Cuando una aplicación de B2B Suite intenta crear un usuario sin proporcionar los campos obligatorios, se muestra la alerta de esquema no válido. Este problema puede ocurrir al acceder a la página **Organización** en el Admin VTEX o a la página **Solicitar organización** en la vitrina de la tienda.

## Solución
Para corregir la alerta Schema is invalid en aplicaciones B2B es necesario modificar la configuración de los campos obligatorios en Master Data.

### Resolución de la alerta "Schema is invalid" en aplicaciones B2B
Sigue los pasos a continuación para corregir la alerta Schema is invalid y garantizar que la configuración esté correcta:

<ol>
  <li>En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Master Data** o escribe **Master Data** en la barra de búsqueda en la parte superior de la página.</li>
  <li>Inicia sesión.</li>
  <li>Haz clic en **Configuración avanzada**.</li>
  <li>Haz clic en **Estructura de datos**.</li>
  <li>Haz clic en **Entidades de datos**.</li>
  <li>Ubica la fila **CL**, clic en **Editar**.</li>
  <li>Revisa todos los campos de la lista y marca la opción **"¿Es anulable?"** en los que no la tengan marcada.</li>
</ol>

<div>
  Solo el campo de email debe tener la opción **"¿Es anulable?"** sin marcar.
</div>

<ol start="8">
  <li>Haz clic en **Guardar**.</li>
  <li>En la lista de **Entidades de datos**, haz clic en **Publicar**.</li>
</ol>

La siguiente imagen ilustra los pasos necesarios para corregir la configuración de los campos obligatorios de Master Data y solucionar la alerta `Schema is invalid`.

![B2B Suite - troubleshootingv2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/store-operations/como-corregir-el-error-de-esquema-en-aplicaciones-b2b_1.gif)
