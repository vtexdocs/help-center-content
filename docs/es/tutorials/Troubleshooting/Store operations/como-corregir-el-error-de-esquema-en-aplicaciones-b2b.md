---
title: 'Cómo corregir el error de esquema en aplicaciones B2B'
id: WkjJZSnGXCiqmLhg4b0OR
status: PUBLISHED
createdAt: 2024-09-11T18:54:34.611Z
updatedAt: 2024-09-11T19:43:31.830Z
publishedAt: 2024-09-11T19:43:31.830Z
firstPublishedAt: 2024-09-11T19:42:01.055Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: i-cant-fix-the-schema-error-in-b2b-apps
locale: es
legacySlug: como-corregir-el-error-de-esquema-en-aplicaciones-b2b
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags/Palabras clave:**  B2B apps, schema issue, Master Data

En entornos que utilizan aplicaciones B2B, puede presentarse la alerta `Schema is invalid` que está relacionada con problemas de esquema. Generalmente, este tipo de alerta se debe a una configuración incorrecta en la entidad CL (Cliente) en Master Data.

El escenario más común son campos obligatorios agregados al esquema que define los datos de esa entidad en Master Data. Cuando una aplicación de B2B Suite intenta crear un usuario sin proporcionar los campos obligatorios, se muestra la alerta de esquema no válido. Este problema puede ocurrir al acceder a la página **Organización** en el Admin VTEX o a la página **Solicitar organización** en la vitrina de la tienda.

## Solución
Para corregir la alerta Schema is invalid en aplicaciones B2B es necesario modificar la configuración de los campos obligatorios en Master Data.

### Resolución de la alerta "Schema is invalid" en aplicaciones B2B
Sigue los pasos a continuación para corregir la alerta Schema is invalid y garantizar que la configuración esté correcta:

<ol>
  <li>En el Admin VTEX, accede a <strong>Configuración de la tienda > Storefront > Master Data</strong> o escribe <strong>Master Data</strong> en la barra de búsqueda en la parte superior de la página.</li>
  <li>Inicia sesión.</li>
  <li>Haz clic en <strong>Configuración avanzada</strong>.</li>
  <li>Haz clic en <strong>Estructura de datos</strong>.</li>
  <li>Haz clic en <strong>Entidades de datos</strong>.</li>
  <li>Ubica la fila <strong>CL</strong>, clic en <strong>Editar</strong>.</li>
  <li>Revisa todos los campos de la lista y marca la opción <strong>"¿Es anulable?"</strong> en los que no la tengan marcada.</li>
</ol>

<div>
  <p>Solo el campo de email debe tener la opción <strong>"¿Es anulable?"</strong> sin marcar.</p>
</div>

<ol start="8">
  <li>Haz clic en <strong>Guardar</strong>.</li>
  <li>En la lista de <strong>Entidades de datos</strong>, haz clic en <strong>Publicar</strong>.</li>
</ol>

La siguiente imagen ilustra los pasos necesarios para corregir la configuración de los campos obligatorios de Master Data y solucionar la alerta `Schema is invalid`.

![B2B Suite - troubleshooting - ES](//images.ctfassets.net/alneenqid6w5/4s3sJXwHYCAkyGiYzWzOyE/f1c8ff457d298f819cfab699ed80396a/B2B_Suite_-_troubleshooting.gif)
