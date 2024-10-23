---
title: 'Integrar con Multiplus'
id: 6lR8FzZLB6QimieEWGeq8U
status: ARCHIVED
createdAt: 2017-05-12T17:20:20.887Z
updatedAt: 2019-12-31T15:24:42.846Z
publishedAt: 
firstPublishedAt: 2017-05-12T17:47:29.932Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: wow-to-integrate-with-multiplus
locale: es
legacySlug: integrar-con-multiplus
subcategoryId: unknown-subcategory
---

### Cómo configurar la integración

Para configurar la integración de su tienda con Multiplus, siga los pasos a continuación:

1. Acceda al módulo Bridge;
2. Haga clic en la pestaña **Marketplaces**;
3. Busque el card de Multiplus;
4. Haga clic en el botón **Integrar**.

Una alternativa para los pasos precedentes es acceder al panel de configuración de marketplaces de su tienda directamente por el link a continuación: https://{NOMBREDELATIENDA}.vtexcommercestable.com.br/admin/bridge/#/settings

Sustituya {NOMBREDELATIENDA} por el Account Name de su tienda.

![Multiplus1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled category/Untitled subcategory/integrar-con-multiplus_1.png)

Tras hacer clic en **Integrar**, se abrirá un formulario con algunos campos a llenar. Preste atención a los campos obligatorios: son aquéllos en los que aparece un “\*” al lado de la caja de texto.


#### Informaciones de los campos

- **Integración**: Cuando esté marcado como “Activar”, los procesos de poner a disposición productos, precio, stock y servicios estarán funcionales. En el caso de que esté marcado como “Desactivar”, el afiliado será borrado, y los procesos serán finalizados;
- **Afiliado**: Debe contener solamente 3 letras, y todas deben ser consonantes. Sirve para que la integración sea notificada de las modificaciones de precio, stock y producto de la tienda;
- **Política comercial**: Debe llenarse con la política configurada en su admin para Multiplus, funcionando en conjunto con el ID del Afiliado. Todos los productos que estén en esa política comercial serán puestos a disposición para consumo de Multiplus;
- **Código Aliado que será utilizado en Multiplus**: Este código debe contener de 1 a 30 dígitos, de su elección. Para habilitar sus ventas, usted deberá informar ese código a Multiplus después de realizar la configuración en el Bridge. En el caso de que usted modifique ese código, el nuevo también deberá ser informado a Multiplus, a fin de que sea hecha la actualización. Si esto no ocurre, la tienda quedará impedida de realizar ventas;
- **Emails para la creación del Afiliado**: Después que sea guardada la configuración, la integración creará el Afiliado en VTEX e insertará esa información en el registro.

![Multiplus2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled category/Untitled subcategory/integrar-con-multiplus_2.png)


Tras estar llenada la información, haga clic en **Salvar** y espere que aparezca el mensaje de éxito.

En el caso de que, en vez de eso, aparezca un mensaje de error, revise los campos llenados e intente nuevamente. Si persiste el error, póngase en contacto con la atención de VTEX para informar el problema.

### Cómo funciona la integración

Multiplus busca la catalogación del cliente y realiza el cierre de compra vía integración.

#### Catalogación

Después que la tienda esté habilitada para integrarse con el aliado Multiplus, la integración pondrá a disposición todo el Árbol de Categoría de la tienda, además de todos los productos y precios que están en la política comercial configurada, informando si están disponibles para venta.

Multiplus realizará el consumo de los registros en dos etapas:

1. Consumo total los domingos;
2. Consumo parcial, realizado una vez al día.

El consumo parcial sirve para consultar las actualizaciones del día en relación a la disponibilidad de venta del producto (Availability), su información de precio y características como nombre, descripción, imagen, especificaciones etc.

##### Reglas:

- Los SKUs que no tengan imágenes y especificaciones no serán puestos a disposición;
- Los productos que no tengan especificaciones no serán puestos a disposición.

#### Cierre de compra

La integración de pedido ocurre en todo el proceso de cierre de compra del cliente. En el caso de que el cliente finalice el pedido y ocurra un error en el proceso, el pedido no será cerrado.

Existen cuatro pasos en el cierre de compra:

- Consultar disponibilidad del producto en VTEX: ocurre más de una vez en el cierre de compra. Sirve para verificar si el producto puede ser vendido.
- Validar el pedido: sirve para verificar si el pedido cumple todos los requisitos para cierre;
- Presentar el pedido en VTEX: el pedido es insertado en la tienda;
- Confirmar el pedido en VTEX: sirve para cancelar o aprobar el pedido en VTEX.

Por medio de la integración, Multiplus puede rastrear el status del pedido en la tienda.

Los comerciantes que tienen integraciones nativas con otros Marketplaces están familiarizados con el error de divergencia de valor que ocurre en el descenso del pedido a VTEX. La integración con Multiplus no tiene tolerancia de valor aceptado en el cierre de compra. Con ello, siempre que un producto sea vendido en Multiplus por un valor menor de lo esperado por VTEX, el pedido será cerrado.

En relación al SLA de entrega del pedido, será considerado el SLA más barato.


#### Críticas y éxitos de integración

Las críticas y éxitos de integração podrán visualizarse en la página principal del módulo **Bridge**:
https://{NOMBREDELATIENDA}.vtexcommercestable.com.br/admin/bridge


#### Artículos relacionados

- [Cómo configurar una política comercial para Marketplace](http://help.vtex.com/es/tutorial/politica-comercial-para-marketplace/)
- [Gestionar muelle](http://help.vtex.com/es/tutorial/gestionar-muelle/)
- [Simulación de flete](http://help.vtex.com/es/tutorial/simulacion-de-flete/)
- [Gestionar valores de flete](http://help.vtex.com/es/tutorial/gestionar-valores-de-flete/)
