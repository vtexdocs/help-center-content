---
title: 'El texto de inicio de sesión en la tienda no se traduce con el editor del sitio.'
id: 6DptiKTxtOcYIJEgJlZCmo
status: PUBLISHED
createdAt: 2023-11-08T13:33:41.296Z
updatedAt: 2024-07-03T18:29:45.491Z
publishedAt: 2024-07-03T18:29:45.491Z
firstPublishedAt: 2023-11-08T13:33:41.967Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: text-in-store-login-are-not-being-translated-using-site-editor
locale: es
kiStatus: Backlog
internalReference: 911757
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al tratar de traducir un texto utilizando el editor de sitio para el inicio de sesión de la tienda, los cambios no se aplicarán en el frente de la tienda.


##

## Simulación



1. Abrir el editor del sitio
2. Seleccione el bloque Store Login
3. Cambia la etiqueta de texto del inicio de sesión por la que desees
4. Guardar cambios
5. Visualice la página y el texto será el mismo independientemente de la configuración regional seleccionada.




## Workaround


Asegúrese de que iconLabel está vacío tanto en el código de la tienda como en el editor del sitio.
Si no está seguro de que esté vacío en el editor del sitio, puede restablecer el contenido pasando por la versión del editor del sitio > restablecer.
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Store Framework/el-texto-de-inicio-de-sesion-en-la-tienda-no-se-traduce-con-el-editor-del-sitio_1.png)

Siga la documentación aquí y los contextos aquí para establecer la etiqueta como desee en su lugar.





