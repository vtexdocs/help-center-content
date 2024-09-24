---
title: 'Estructura de la página de Gestión de pedidos'
id: 2dDZmUUFXWeyQ4s2gqiY0A
status: ARCHIVED
createdAt: 2018-02-08T14:42:03.764Z
updatedAt: 2023-03-23T19:57:15.384Z
publishedAt: 
firstPublishedAt: 2018-02-08T19:04:22.889Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: estructura-de-la-pagina-del-oms
locale: es
legacySlug: estructura-de-la-pagina-del-oms
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

>ℹ️ Sobre la nueva interfaz del Order Management System (OMS), ver el artículo [Lista de Pedidos (Beta)](https://help.vtex.com/es/tutorial/order-list-beta--2QTduKHAJMFIZ3BAsi6Pi).

Para entender mejor el __Gestión de Pedidos__, vea el descriptivo de cada área del módulo responsable por la visualización y gestión de los pedidos de su tienda.

## Todos los pedidos 

### Barra de estado

Presenta de forma resumida el total de pedidos de la tienda el día actual. También hace un comparativo de pedidos entre la fecha en cuestión y el día, semana y año anteriores. Al lado de cada uno de estos valores, usted puede ver un porcentaje que representa la variación relativa a los pedidos de hoy.

El __ranking__ ubicado en la esquina derecha de la barra con estos datos muestra la posición de la tienda entre todas las tiendas VTEX, con la métrica al lado indicando la evolución entre ayer y hoy.

La barra no muestra la posición exacta de las tiendas que están en las 5 primeras posiciones: para éstas, el número mostrado será siempre __"Top 5"__.

Para todos los datos de variaciones de pedidos, y también para los números de evolución en el ranking, el color verde indica un resultado positivo; azul, neutro; y rojo, negativo.

>⚠️ Importante: si la comparación de pedidos se realiza en base a 0 pedidos en el pasado, la variación es de 0%.

![barra-status-oms es](//images.ctfassets.net/alneenqid6w5/6fv6Fd07ra6KMOwS0ecgUm/02d1b532b5fb183d420ced0ecbb6d235/barra_de_status.png)

### Filtros

Permiten aplicar varios filtros para ver sólo la lista de pedidos deseados. El filtro puede ser por períodos, canales, status y situación, campo buscado, status, medios de pago y promociones.

- [Cómo filtrar pedidos](/es/tutorial/como-filtrar-pedidos/)

![botão-filtro-oms es](//images.ctfassets.net/alneenqid6w5/4NsNMVbov66KmWuM4cuYaw/d041c92d257680f6904b9e51f1a49e07/filtro_esp.png)

### Barra de búsqueda

Se utiliza para realizar búsquedas sobre los términos encontrados en el pedido, como número de pedido, CPF, nombre de cliente, e-mail entre otros.

- [Cómo buscar pedidos](/es/tutorial/como-buscar-el-pedido/)

![barra-busca-oms es](//images.ctfassets.net/alneenqid6w5/4NQi3UjfPiqsS00AgyaMAO/528adcb5032b6e613bd7eef6e6251826/barra_de_busca_esp.png)

### Barra de información

Se trae el total de pedidos listados, el ticket medio (ingreso dividido por el número de pedidos) y el ingreso total (suma del valor total de los pedidos), siempre considerando la búsqueda y los filtros aplicados.

También trae el ranking de ventas de la tienda en relación a todas las otras tiendas de VTEX. El número informado se basa en el total de pedidos concluidos en el día actual.

- [Interpretando los datos de la barra de pedidos en la pantalla de Todos los Pedidos.](http://help.vtex.com/es/tutorial/interpretando-los-datos-de-la-barra-de-pedidos-del-oms)

![barra-info-oms es](//images.ctfassets.net/alneenqid6w5/5Z5H9agm9qewyOGqCg0Cim/e535b7690c3d21ff1803981fbf0feff2/barra_de_info.png)

### Botón de exportación

Utilizado para exportar los pedidos que trae la búsqueda, considerando los filtros realizados. El archivo se enviará por correo electrónico al usuario registrado.

- [Exportar pedidos en Gestión de pedidos. ](http://help.vtex.com/es/tutorial/exportacion-de-pedidos-en-oms)

![botão-exportar-oms es](//images.ctfassets.net/alneenqid6w5/4sL2BuR5LO4Qamsgwsagss/47a5f99522b5f16b5fe57c487fa31fd9/botao_de_exportar_es.png)

### Lista de pedidos

Principal área de Gestión de pedidos. Trae los últimos pedidos realizados en la tienda o los resultados para la búsqueda o filtro realizados, respetando también la ordenación deseada. La lista de pedidos se actualiza automáticamente cuando se producen nuevas solicitudes.

- [Lista de pedidos](/es/tutorial/listado-de-pedidos)

![todos-pedidos-oms es](//images.ctfassets.net/alneenqid6w5/54hTspElLOKW2m4oi46ceU/ed5cd9c6b3b7272108f2c317533bfc11/orders_list_esp.png)

### VTEX DO

Reúne tareas pendientes para la tienda, generadas por los diferentes módulos de VTEX o enviadas por la API, a través de servicios externos. Funciona como un gestor de tareas.

-[ Cómo funciona el listado de tareas del VTEX DO.](http://help.vtex.com/es/tutorial/vtex-do)

![vtex-do-exemplo-oms es](//images.ctfassets.net/alneenqid6w5/73Jca1gQ00a8e0gE8iAwCE/1380b478cd1836eac15289825de2b8e9/vtex_do_es.png)

## Suscripciones

Motra una lista de los clientes que utilizan suscripciones en su tienda, lo que prepara el PCI Gateway para que las nuevas transacciones de la misma fuente se realicen automáticamente.

- [Cómo configurar Suscripciones en su tienda](https://help.vtex.com/es/tutorial/como-configurar-suscripciones)

## Configuración

La primera pestaña disponible será la de Configuración **General** de los pedidos, responsable de mostrar las configuraciones relativas al comportamiento del carrito de los clientes (afecta el momento de compra) y pedidos después de completados.

- [Configuraciones del pedido](/es/tutorial/configuraciones-generales)

La segunda pestaña, **Afiliados**, está destinada para configuraciones de afiliados en su tienda.

- [Configurar afiliado.](http://help.vtex.com/es/tutorial/como-configurar-afiliado/)

![configurações-oms es](//images.ctfassets.net/alneenqid6w5/1j5ORpKc6MEa4GSIGcC2q4/75e49a2d0e6572047f10acc1c82f3900/configuracion_esp_OMS.png)

