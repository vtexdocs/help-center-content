---
title: 'Cómo funciona el Message Center'
id: 5uvq01BDu6nnDEJpseR1aH
status: CHANGED
createdAt: 2020-01-10T12:36:32.085Z
updatedAt: 2020-11-27T19:40:22.331Z
publishedAt: 2020-02-13T14:58:16.503Z
firstPublishedAt: 2020-01-13T14:38:21.495Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: how-message-center-works
locale: es
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugEN: e-mails-transaccionales
order: 1
---

El Message Center es el módulo responsable de las configuraciones y el envío de correos electrónicos transaccionales. Estos son los correos electrónicos automáticos que la tienda envía al cliente cada vez que se completan eventos importantes en el flujo del cliente en la tienda, tales como el registro en la tienda, la confirmación de pago y el envío de productos.  

Este módulo está dividido en dos secciones: 
- __Templates__: aquí puede editar el contenido de los correos electrónicos. 
- __Remitentes__: aquí puede cambiar la información de los remitentes de estos correos electrónicos.

### Templates

Como mencionamos anteriormente, los templates son los contenidos de los correos electrónicos transaccionales en sí.

Están categorizados de acuerdo con el módulo de la plataforma VTEX con el que se relacionan.

Por ejemplo, si un cliente elige cancelar su pedido, el sistema enviará un mensaje a ese destinatario informando el status de la compra. Dado que esta transacción está relacionada con el módulo de pagos, este template se agrupará junto con los demás templates del módulo de pagos.

Cada template contiene las siguientes configuraciones que deben ser definidas por la tienda:
- Título del correo electrónico.
- Opción para activar o no el envío del correo electrónico.
- Opción para usar un remitente estándar.
- Código HTML.
- Remitente.
- Destinatario, con posibilidad de especificar Copia (CC) y Copia Oculta (CCO).
- Vista previa del correo electrónico.

Toda tienda VTEX ya nace con una serie de templates preconfigurados, basta solo personalizar su contenido y layout. Además, es posible crear nuevos templates.

Al entrar en el Message Center y hacer clic en __Templates__, encontrará una lista de todos los templates de su tienda. Cada card representa un template diferente.

Comprendamos la información presente en estos cards.

![Emails 1 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/e-mails-transaccionales/como-funciona-el-message-center_1.png)

- Nombre del template para identificación interna. Este *no* es el asunto del correo electrónico.  
- Aplicación o módulo al que pertenece el template, indicado en verde.  
- Label indicando si el mensaje es __estándar__; es decir, proporcionado por VTEX, o si fue __personalizado__ por la tienda.
- Descripción sobre la funcionalidad del template, para uso interno.  
- Remitente con el que está asociado el template.  
  
Para buscar templates, puede utilizar filtros por aplicación (módulo) y tipo (mensaje estándar o personalizado).

![Emails 1 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/e-mails-transaccionales/como-funciona-el-message-center_2.png)

### Remitentes

Aquí, el usuario verifica y edita la información - nombre, correo electrónico y datos del servidor de envío (SMTP) - de los remitentes de los correos electrónicos transaccionales que enviará el sistema.

Esta es la información que se muestra en los cards de los remitentes:

![Emails 1 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/e-mails-transaccionales/como-funciona-el-message-center_3.png)

- Nombre del remitente, para identificación interna.  
- Tipo de servidor SMTP, que puede ser de VTEX o de la propia tienda.  
- Label indicando cuál el remitente definido como __estándar__ para la tienda.  
- Dirección de correo electrónico utilizado para el envío.  
- Botón para ejecutar una prueba de envío de mensajes.  
- Ícono indicando si el remitente pasó o no la prueba de envío (no se muestra si no se realizó una prueba reciente). Muestra un check verde si pasó y una "x" roja si no pasó.

Cabe destacar que es imprescindible personalizar el remitente. Esto permitirá a sus clientes recibir mensajes con el nombre y la dirección de correo electrónico de su empresa. Para obtener más información sobre este asunto, consulte el [artículo sobre cómo editar el servidor de correos electrónicos de VTEX](/es/tutorial/personalizando-o-smtp-da-vtex).

Hasta que su tienda realice esta configuración, los correos electrónicos se enviarán con el remitente predeterminado “noreply@vtexcommerce.com.br”.
