---
title: 'Registrar Tabla de Precio'
id: 2WQ3pVYfQpXkJnHr7VTFBv
status: PUBLISHED
createdAt: 2019-07-04T13:52:23.343Z
updatedAt: 2023-03-29T18:54:37.108Z
publishedAt: 2023-03-29T18:54:37.108Z
firstPublishedAt: 2019-07-17T19:40:54.612Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: registrar-tabla-de-precio
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugES: precios-101
---

Hay dos formas de registrar las tablas de precio:

- por el Admin 
- por API REST

Siga el siguiente procedimiento para registrar las tablas de precio de su tienda: 

## Admin

1.  En el Admin VTEX, accede a *Precios > Lista de precios* , o escribe *Lista de precios* en la barra de búsqueda en la parte superior de la página.
2.  Haga clic en el botón **Tablas de precios** en la parte superior de la pantalla. 
3.  Haga clic en `+ Crear nueva tabla de precios`. Se abrirá una *barra lateral*.
4.  Digite el nombre de la tabla de precio que desea crear.
5.  Haga clic en **Crear tabla de precio**.

## API REST

<div class="alert alert-warning">
Authentications for Prices module's API REST calls should be done using AppKey and AppToken. For more info, read our article on <a href="https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication">how to generate an AppKey and AppToken to authenticate integrations</a>
</div>

Para registrar la **tabla de precio**, necesita enviar un __PUT__ para el siguiente  endpoint:

`https://api.vtex.com/{{account}}/pricing/tables/{{priceTableName}}`

Al pasar el valor de la `{{priceTableName}}` en el endpoint, se creará una nueva tabla de precios.

| __Propiedades__ | __Tipos__ | __Descripción__ |
|------------------|-----------|-------------|
| priceTableName | string | Nombre de la tabla de precio que se creará |

- A continuación, tenemos un ejemplo de Header para ser pasados en el request

### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/vnd.vtex.pricing.v3+json |
| Content-Type | application/json |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |
