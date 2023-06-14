---
title: Integrando con Buscapé (BP+)
id: tutorials_410
status: DRAFT
createdAt: 2017-04-27T22:06:11.212Z
updatedAt: 2021-08-16T13:39:50.468Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:23.878Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: integrando-con-buscape
legacySlug: integrando-con-buscape
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

### Primeros pasos

Algunos pasos son esenciales para que empecemos las configuraciones.

1. [Contrate el channel](/es/tutorial/integrando-con-marketplace/).
2. Configure la [política comercial](/es/tutorial/politica-comercial-para-marketplace); 
3. Configure la [logística](/es/tutorial/como-configurar-logistica-para-politica-comercial/) para esa política comercial;
4. Entre en contacto con Buscapé por el email thiago.rotondo@buscapecompany.com y obtenga el authtoken - token de acceso a la API.

### Cómo configurar

1. Acceda al módulo **Bridge**;
2. Haga clic en la pestaña **Marketplaces**;
3. En el card de Buscapé, haga clic en el botón **Integrar**;
4. Rellene los campos conforme a lo detallado a continuación;
5. Haga clic en el botón **Guardar Configuración**. Él estará activo sólo si todas las configuraciones están correctas.

<div class="alert alert-warning">
¡Atención! Para la política comercial hay que configurar por lo menos un boleto o una tarjeta de crédito. Es decir, es necesario que se configuren los medios de pago para el saleschannel específico.
</div>

### Campos

1. **Clave de Acceso a la API**: Clave proporcionada por la propia Buscapé (AuthToken) para identificar la Tienda en el sistema del Aliado.
2. **Id del Afiliado**: ID del Afiliado que será creado en el OMS. Para Buscapé, recomendamos rellenar con `BSC`.
3. **Política Comercial**: ID de la Política Comercial que será utilizada para el aliado Buscapé.
4. **CNPJ:** llenar este campo con el CNPJ de su tienda. Si este campo no está rellenado, no podrá facturar los pedidos y actualizar su estado en el buscapé.
5. **Título do anúncio:** En este campo, debe elegir el formato del nombre que su producto tendrá en Buscapé.
6. **Enviar preço de boleto:**  Si su producto tiene promoción en función de pago por boleto, el precio promocional será enviado.
7. **Dominio enviado en el link del producto**: Campo utilizado para montar el link del producto que se exhibirá en el site de Buscapé. (ejemplo: http://www.minhaloja.com.br)
8. **Tasa de Divergencia de Precio**: Tasa de aceptación de la divergencia de valor en el pedido integrado. [Cualquier pedido que presente una divergencia entre el precio de venta del marketplace y el precio que sería calculado por el seller, será comparado con ese valor](http://help.vtex.com/es/faq/por-que-el-pedido-fue-cerrado-con-el-precio-incorrecto/). Si la divergencia (en porcentaje) es menor que el valor definido en ese campo, el pedido será integrado. De lo contrario, el pedido será rechazado y el comerciante notificado.
9. **Emails para notificaciones**: En el caso de que el pedido sufra algún error en el acto de integrar en VTEX, será enviado un email con su posible causa al (los) email(s) registrado(s) aquí.

Después de la configuración, la integración envía automáticamente todos los productos asociados a la política comercial determinada para el Buscapé.

### URLs

La integración con Buscapé requiere las siguientes URLs para su funcionamiento:

- URL de Callback (para insertar el pedido en VTEX)

```http://{accountName}.vtexcommercestable.com.br/api/buscapeintegration/event/order```

- URL de stock (chequear stock en VTEX)

```http://{accountName}.vtexcommercestable.com.br/api/buscapeintegration/stockkeepingunit/availability```
