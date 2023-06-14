---
title: 'Registrar datos fiscales adicionales (NCM e ICMS) en un producto de VTEX Sales App'
id: 51xsyWzGiQ08KMO2EaaGAa
status: PUBLISHED
createdAt: 2017-08-14T23:24:39.793Z
updatedAt: 2023-05-31T14:50:57.382Z
publishedAt: 2023-05-31T14:50:57.382Z
firstPublishedAt: 2017-08-14T23:35:56.687Z
contentType: tutorial
productTeam: Shopping
author: 3uCjaRpzeMieQWwWycYAMG
slug: guia-de-integracion-del-gerenciamento-de-pedidos-con-cupon-fiscal-electronico-para-el-vtex-sales-app
locale: es
legacySlug: guia-de-integracion-del-oms-con-cupon-fiscal-electronico-para-el-vtex-instore,guia-de-integracion-del-gerenciamento-de-pedidos-con-cupon-fiscal-electronico-para-el-vtex-instore
subcategory: 4T6qfa6gNO6g4sAUIa6s2G
---

VTEX VTEX Sales App es una de nuestras principales soluciones para las operaciones de Comercio Unificado. Se trata de una aplicación que te permite integrar tus canales de ventas _online_ y físicos, y coloca a tus clientes en el centro del negocio.

Al usar VTEX Sales App, los vendedores de las tiendas físicas pueden atender a los clientes de manera personalizada y realizar todo el proceso de venta, desde ayudarlos a elegir los mejores productos hasta el pago y la entrega.

En este artículo, te explicaremos cómo administrar los cupones fiscales para los pedidos realizados en VTEX Sales App. 

En Brasil, los impuestos estaduales y federales se incluyen en el precio de los productos. Debes registrar esta información como [especificaciones](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) en los productos de tu tienda. De esta manera, VTEX Sales App envía cualquier especificación del producto al pedido final, donde los _middlewares_ de integración – _software_ que hace de puente entre los componentes de un _ecommerce_ – pueden usarla al momento de emitir los cupones fiscales.

Un ejemplo de esto es la Nomenclatura Común del Mercosur (NCM), que establece la alícuota de impuestos común a este bloque. Mientras registras los productos que estarán disponibles en la plataforma de _ecommerce_, encontrarás [ese campo en el Catálogo como **Tax Code**](https://help.vtex.com/es/tutorial/campos-de-registro-de-producto--4dYXWIK3zyS8IceKkQseke). Sin embargo, VTEX Sales App busca esta información como una especificación del producto llamada **NCM**.

En Brasil, para poder vender productos en tiendas físicas, se debe tener en cuenta el Impuesto a la Circulación de Mercaderías y Servicios (ICMS) del producto correspondiente a cada estado. Esta información se debe registrar como un campo de especificación por producto (**ICMS_RJ**, **ICMS_SP**). Es importante recordar que esta configuración solo es necesaria si la tienda física opera con VTEX Sales App en dicho estado.

Cualquier otro dato fiscal que se necesite para tu negocio, por ejemplo, la Contribución al Programa de Integración Social (PIS) o la Contribución para el Financiamiento de la Seguridad Social (COFINS), se puede crear como un campo de especificación del producto y estará disponible en el OMS.

Puedes registrar especificaciones de producto a través de la API o el Admin. Para registrar las especificaciones a través de la API, sigue los pasos de la guía [Cómo crear una especificación](https://developers.vtex.com/vtex-rest-api/docs/how-to-create-a-specification). Para registrar la especificación desde el Admin, sigue el tutorial [Configurar especificaciones de producto](https://help.vtex.com/es/tutorial/configurando-campos-de-especificacao-no-produto--tutorials_271).

Consulta los pedidos facturados realizados en VTEX Sales App siguiendo los pasos que se describen en el artículo [Get invoiced orders placed in VTEX Sales App](https://developers.vtex.com/vtex-rest-api/docs/get-invoiced-orders-placed-in-instore).
