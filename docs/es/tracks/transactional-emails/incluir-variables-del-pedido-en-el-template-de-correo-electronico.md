---
title: 'Incluir variables del pedido en el template de correo electrónico '
id: fLMUCPArCYB9vcTZEZ6bi
status: PUBLISHED
createdAt: 2020-01-10T13:43:21.220Z
updatedAt: 2020-11-25T01:12:13.540Z
publishedAt: 2020-11-25T01:12:13.540Z
firstPublishedAt: 2020-01-13T14:38:37.451Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: including-order-variables-in-email-template
locale: es
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugES: e-mails-transaccionales
---

Como explicamos anteriormente, en el **Centro de Mensajes**, dentro de la pestaña __Templates__, usted encuentra los templates de correos electrónicos transaccionales enviados a sus clientes.  
  
Puede personalizar todos los templates del Centro de Mensajes, y tener a su disposición una serie de variables que le permiten agregar datos dinámicamente al correo electrónico.

Estas variables son propiedades del JSON que constan en el campo __JSON Data__ y se pueden utilizar en el HTML del correo electrónico. Basta ingresarlas dentro de llaves dobles, utilizando el siguiente formato: `{{variable}}`

### Ejemplo

<div class="alert alert-warning">
Los ejemplos de JSON Data apenas aparecerán en los templates cuando complete la acción deseada en su tienda. Si no ha realizado la transacción de un pedido, una recurrencia o cualquier otra acción, el JSON Data aparecerá en blanco.
</div>

Supongamos que desea ingresar el nombre de la transportadora en el correo electrónico de pedido enviado.

Para hacer esto, entre en el template de pedido enviado y, en el campo __JSON Data__, busque la propiedad `courier`.

![EN Incluir variáveis do pedido no template de e-mail - 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/transactional-emails/incluir-variables-del-pedido-en-el-template-de-correo-electronico_1.png)  

El valor ingresado para esta propiedad es apenas un ejemplo, pero puede usarlo en el campo __HTML__ para que, cuando se envíe el correo electrónico, el cliente vea la transportadora de hecho responsable de entregar el pedido.

Tenga en cuenta que la propiedad `courier` está dentro del objeto `package`. Por lo tanto, debe ingresarla de la siguiente manera:

`{{package.courier}}`


![EN Incluir variáveis do pedido no template de e-mail - 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/transactional-emails/incluir-variables-del-pedido-en-el-template-de-correo-electronico_2.png)  


Vea que el valor de ejemplo  ("Transportadora Teste Courier S.A.") fue ingresado en la pantalla de preview, debajo de los campos __HTML__ y __JSON Data__. 
