---
title: 'Registrar datos fiscales adicionales (NCM e ICMS) en un producto de VTEX Sales App'
id: 51xsyWzGiQ08KMO2EaaGAa
status: PUBLISHED
createdAt: 2017-08-14T23:24:39.793Z
updatedAt: 2023-11-25T14:50:57.382Z
publishedAt: 2023-05-31T14:50:57.382Z
firstPublishedAt: 2017-08-14T23:35:56.687Z
contentType: tutorial
productTeam: Shopping
author: 3uCjaRpzeMieQWwWycYAMG
slugEN: guide-to-integration-of-orders-managment-with-electronic-tax-coupon-for-vtex-sales-app
legacySlug: guia-de-integracion-del-oms-con-cupon-fiscal-electronico-para-el-vtex-instore,guia-de-integracion-del-gerenciamento-de-pedidos-con-cupon-fiscal-electronico-para-el-vtex-instore
locale: es
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

**VTEX Sales App** es una de nuestras principales soluciones para las operaciones de Comercio Unificado. Se trata de una aplicación que te permite integrar tus canales de ventas _online_ y físicos, y coloca a tus clientes en el centro del negocio.

Al usar **Sales App**, los vendedores de las tiendas físicas pueden atender a los clientes de manera personalizada y realizar todo el proceso de venta, desde ayudarlos a elegir los mejores productos hasta el pago y la entrega.

En este artículo, te explicaremos cómo administrar los cupones fiscales para los pedidos realizados en **Sales App**.

En Brasil, los impuestos estaduales y federales se incluyen en el precio de los productos. Debes registrar esta información como [especificaciones](https://help.vtex.com/es/docs/tracks/especificaciones-definicion-de-concepto) en los productos de tu tienda. De esta manera, **Sales App** envía cualquier especificación del producto al pedido final, donde los _middlewares_ de integración – _software_ que hace de puente entre los componentes de un _ecommerce_ – pueden usarla al momento de emitir los cupones fiscales.

Un ejemplo de esto es la Nomenclatura Común del Mercosur (NCM), que establece la alícuota de impuestos común a este bloque. Mientras registras los productos que estarán disponibles en la plataforma de _ecommerce_, encontrarás [ese campo en el Catálogo como **Código fiscal**](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-productos). Sin embargo, VTEX Sales App busca esta información como una especificación del producto llamada NCM.

En Brasil, para poder vender productos en tiendas físicas, se debe tener en cuenta el Impuesto a la Circulación de Mercaderías y Servicios (ICMS) del producto correspondiente a cada estado. Esta información se debe registrar como un campo de especificación por producto (ICMS_RJ, ICMS_SP). Es importante recordar que esta configuración solo es necesaria si la tienda física opera con **Sales App** en dicho estado.

Cualquier otro dato fiscal que se necesite para tu negocio, por ejemplo, la Contribución al Programa de Integración Social (PIS) o la Contribución para el Financiamiento de la Seguridad Social (COFINS), se puede crear como un campo de especificación del producto y estará disponible en el OMS.

Puedes registrar especificaciones de producto a través de la API o el Admin VTEX:

* **Vía API:** sigue la guía [Specifications](https://developers.vtex.com/docs/guides/specifications).
* **Vía Admin VTEX:** sigue el tutorial [Cadastrar especificações ou campos de produto](https://help.vtex.com/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-produto).

Para consultar los pedidos facturados realizados en **Sales App**, en el Admin VTEX, accede a **Pedidos > Todos los pedidos** y [filtra tus pedidos](https://help.vtex.com/es/docs/tutorials/filtrar-todos-los-pedidos) usando el filtro **Otros > inStore > true**.
