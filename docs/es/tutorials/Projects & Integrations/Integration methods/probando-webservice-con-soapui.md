---
title: 'Probar Web Service con SoapUI'
id: tutorials_750
status: ARCHIVED
createdAt: 2017-04-27T21:58:40.425Z
updatedAt: 2020-06-04T01:32:10.116Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:42.147Z
contentType: tutorial
productTeam: Others
author: authors_84
slugEN: testing-webservice-using-soapui
locale: es
legacySlug: probando-webservice-con-soapui
subcategoryId: 1vwB9FtTSQmcSewQw02QoW
---

>❗ Atención: sólo los métodos SOAP pertinentes al **catálogo** son válidos.
>
> **Todos los demás métodos del Web Service serán discontinuados después de 28/02/2017.**
>
> Utilice las API REST equivalentes disponibles en nuestro[Developer Docs](//help.vtex.com/developer-docs/).

>⚠️ Las configuraciones documentadas en este artículo son realizadas en un ambiente fuera de VTEX, por lo tanto, pueden ser discontinuadas sin previo aviso.

SoapUI es una herramienta que puede ser utilizada para simular conexión y ejecución de métodos de un determinado webservice, sin tener la necesidad de hacer eso vía desarrollo.

**Recuerde!** Es recomendado el uso de la versión 3.6.1, que no tiene tantos requisitos de seguridad (requisitos que hacen que se deba digitar varias veces su contraseña).

El paso a paso de utilización es el siguiente: 
1. Ya con la herramienta instalada, acceda el menú File > New SoapUI Project. 
2. En la página que abrirá, agregue la dirección referente a su webservice:

`http://webservice-{AMBIENTEDELATIENDA}.vtexcommerce.com.br/Service.svc?singleWsdl`

Sustitúa {AMBIENTEDELATIENDA} por el nombre de su tienda.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Efectúe el login con los datos de webservice deseado. Después de efectuar el login, se visualizarán todos los métodos existentes en el [manual de Webservice](/es/tutorial/manual-de-clases-y-metodos-utilizados-en-webservice/).

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

1. Localice el método deseado. Ej: el método ImageInsertUpdate, que es el método utilizado para agregar imágenes;
2. Cargue los campos referentes al método (estos campos son de tipo ImageDTO. Las referencias están en el manual);
3. Localice el botón __"Auth"__ y repita la autenticación antes de ejecutar el método;
4. Ejecute el método.

>❗ Atenção: sólo los métodos SOAP correspondientes al **catálogo** son válidos.
>
> **Todos los demás métodos están descontinuados.**
>
> Utilice las API REST equivalentes disponibles en nuestro [Developer Docs](//help.vtex.com/developer-docs/).
