---
title: 'Configurar identificación del cliente'
id: 3AU7dicoaj3OVaprS6Wh2W
status: ARCHIVED
createdAt: 2020-06-28T17:15:10.888Z
updatedAt: 2021-08-11T22:02:24.265Z
publishedAt: 
firstPublishedAt: 2020-06-28T17:19:32.500Z
contentType: trackArticle
productTeam: Shopping
slugEN: configure-customer-identification
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: configurar-identificacion-del-cliente
---

Para que los vendedores de la tienda física puedan atender a los clientes y realizar ventas, en primer lugar, deben poder identificar a esos clientes.

Por defecto, inStore ofrece cuatro métodos diferentes para identificar clientes:
- Email
- CPF (para Brasil)
- Teléfono
- Código QR

Para elegir qué métodos de identificación desea habilitar, acceda al panel administrativo de VTEX y, en el menú principal, haga clic en __Instore__ y luego en __Identificación del Cliente__.

En el cuadro __Inicio de sesión del cliente__, usted debe seleccionar los métodos de identificación que desea habilitar.

![21. Configure client identification - 1 - ES.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configure-customer-identification/configurar-identificacion-del-cliente_1.png)

También puede cambiar el orden de estos métodos. Para hacer esto, arrástrelos como se muestra en la imagen a continuación. El orden de los métodos definidos en esta pantalla determina el orden en que aparecerán para el vendedor en la aplicación. Por lo tanto, el primer método será el predeterminado.

![21. Configure client identification - 2 - ES.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configure-customer-identification/configurar-identificacion-del-cliente_2.png)

## Habilitar usuario anónimo

Es posible utilizar inStore para atender a los clientes de forma anónima, es decir, sin identificarlos.

Para esto, aún en la pantalla de Identificación del Cliente, es necesario habilitar la flag __Usuario anónimo__.

![21. Configure client identification - 3 - ES.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configure-customer-identification/configurar-identificacion-del-cliente_3.png)

## Registro de entidad legal para ventas B2B

La pantalla de identificación del cliente también permite la identificación de campos de entidad legal. Es decir, además del formulario individual, esta feature permite la visualización de un formulario para ventas B2B.

Para hacer esto, active la flag en el cuadro __Registro de entidad legal__.

A continuación, puede elegir si estos campos deben completarse necesariamente o si son opcionales.

En el siguiente ejemplo, el registro de la entidad legal se activa y configura como opcional.

![21. Configure client identification - 4 - ES.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configure-customer-identification/configurar-identificacion-del-cliente_4.png)

En este caso, la aplicación le mostrará al vendedor un formulario como el siguiente:

![21. Configure client identification - 5.png h 250?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configure-customer-identification/configurar-identificacion-del-cliente_5.png)

Tenga en cuenta que se muestra una flag que le permite al vendedor decidir si mostrar estos campos adicionales o no. Esto se debe a que, en la configuración, marcamos los campos de registro de la entidad legal como opcionales. Si están marcados como obligatorios, esta flag no se mostrará en la aplicación.
