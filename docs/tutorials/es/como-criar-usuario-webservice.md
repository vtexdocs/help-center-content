---
title: 'Crear usuario Web Service'
id: frequentlyAskedQuestions_529
status: DRAFT
createdAt: 2019-01-24T20:45:54.201Z
updatedAt: 2020-06-04T01:35:43.759Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:11:35.477Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: como-crear-usuario-webservice
locale: es
legacySlug: como-crear-usuario-webservice
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

<div class="alert alert-danger"><p>Atención: sólo los métodos SOAP pertinentes al <strong>catálogo</strong> son válidos.</p>
<p><strong>Todos los demás métodos del Web Service serán discontinuados después de 28/02/2017.</strong></p>
<p>Utilice las API REST equivalentes disponibles en nuestro<a href="//help.vtex.com/developer-docs/">Developer Docs</a>.</p></div>

La creación de credenciales para las integraciones con el Web Service debe ser hecha por License Manager, con la funcionalidad de appKey y appToken.

Para la creación de estas claves, vea el artículo [Crear appKey y appToken para autenticar las integraciones](/es/tutorial/criar-appkey-e-apptoken-para-autenticar-las-integraciones).

Es necesario que las claves tengan permiso para el perfil de acceso **WebService**.

En el contexto del Web Service, el usuario es el appKey y la contraseña es el appToken.

Para acceder al Web Service debe usarse la URL `https://webservice-ACCOUNTNAME.vtexcommerce.com.br/service.svc?wsdl`.
