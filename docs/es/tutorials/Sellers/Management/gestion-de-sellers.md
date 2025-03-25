---
title: 'Gestión de Sellers '
id: 6eEiOISwxuAWJ8w6MtK7iv
status: PUBLISHED
createdAt: 2022-02-01T21:36:48.023Z
updatedAt: 2023-03-13T18:58:17.497Z
publishedAt: 2023-03-13T18:58:17.497Z
firstPublishedAt: 2022-02-02T18:34:52.667Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: seller-management
locale: es
legacySlug: gestion-de-sellers-beta
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---

**Gestión de sellers** es la página donde los operadores del marketplace [agregan sellers](https://help.vtex.com/es/tutorial/adicionar-seller--tutorials_392), registran su información y gestionan sus status. La página incluye métricas para que los marketplaces evalúen su operación. También pueden aplicar filtros a los resultados de la lista de sellers y agruparlos a través de la opción Grupos, tags que le permiten filtrar los resultados más fácilmente.  

![Seller management gif 2022 launch](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Sellers/Management/gestion-de-sellers_1.gif)

## Métricas
La página muestra las métricas generales de los sellers:

- __Total de sellers:__ todos los sellers incorporados al marketplace, incluyendo a los activos y *detenidos*.  
- __Sellers activos:__ sellers que están recibiendo pedidos en el marketplace. Al hacer clic en la métrica, se filtra la lista por sellers activos. Se puede activar un seller haciendo clic en su Status en la lista, y cambiando la opción marcada a activo.   
- __Sellers *detenidos*:__ sellers que no aparecen en el storefront y que ya no reciben pedidos en el marketplace. Al hacer clic en la métrica, se filtra la lista por sellers activos. Se puede activar un seller haciendo clic en su Status en la lista, y cambiando la opción marcada a activo.   
- __Anuncios activos:__ todos los anuncios activos de tus sellers, en un periodo de 180 días. Al hacer clic en la métrica, se te redirigirá a la página de [SKU recibidos](https://help.vtex.com/es/tutorial/sugerindo-e-aprovando-skus--tutorials_396).  

## Filtros

Puedes buscar un _seller_ utilizando la barra de búsqueda, escribiendo su nombre, ID, número de identificación fiscal, ID interno o CSC, y filtrando por:

- **Status:** si el _seller_ está activo o *detenido*.   
- **Integraciones:** el tipo de integración realizada para cada _seller_.  
- **Visibilidad:** si la tienda del _seller_ es visible en el _storefront_ de tu _marketplace_, o si es un [seller white label](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa#o-que-e-um-seller-white-label), cuya tienda no aparece en la experiencia de compra.      
- **Grupos:** permite agrupar a los sellers con características similares. Las opciones de este filtro incluyen los grupos creados al [agregar un seller](https://help.vtex.com/es/tutorial/adicionar-seller--tutorials_392) o en [Gestionar grupos](https://docs.google.com/document/d/1D5BcikSA6yJTioZXS8pKFZKfhmjks8QL31d1hWd1nec/edit#heading=h.kc7jlls22q4g).  

## Grupos
Los grupos facilitan que la gestión de múltiples sellers sea más eficiente y escalable en tu operación de marketplace. Los sellers se pueden agrupar en uno o más grupos según tus necesidades, utilizando los nombres de tu elección. Puedes crear, editar y eliminar grupos manualmente al [agregar seller](https://help.vtex.com/es/tutorial/adicionar-seller--tutorials_392).

Esta funcionalidad permite a los marketplaces optimizar los escenarios de seguimiento de la operación, como, por ejemplo:
- Identificar los modelos de negocio de los sellers como 1P, 3P o cuentas franquicia.  
- Agrupar a los sellers que participarán en una promoción específica.  
- Agrupar a los sellers que operan en una determinada categoría de productos.  

Los grupos se crean manualmente en __Agregar seller__ o al hacer clic en __Gestionar grupos.__ También se puede editar o eliminar los grupos después de crearlos.  

![Gestión de seller](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Sellers/Management/gestion-de-sellers_2.png)  

## Gestionar grupos  

Gestionar grupos es una funcionalidad que permite crear grupos y editar o eliminar uno o más grupos existentes. En el Admin VTEX, accede a __Marketplace > Gestión de sellers > Gestionar grupos.__  

En la página Gestionar grupos, puedes ver las siguientes opciones:
  - Agregar grupo
  - Editar grupo
  - Buscar grupos (ingresando la palabra clave del nombre del grupo en la barra de búsqueda).

    Cada grupo muestra los siguientes campos  

| **Campo** | **Descripción** |  
|:---:|:---:|  
| Grupo | Nombre del grupo al momento de creación o después de cambiar el nombre. |  
| Sellers activos | Cantidad de sellers en el grupo que están activos y divulgan sus productos en el marketplace. |  
| Sellers en pausa | Cantidad de sellers en el grupo que no están activos ni divulgan sus productos en el marketplace. |  
| Creado | Fecha en que el marketplace creó el grupo. |  
| Acciones | - Renombrar <br>- Eliminar |  

Al acceder a alguno de los grupos listados, verás las opciones de edición, tales como status del seller, tipo de integración, anuncios pendientes, además de acciones como detalles del seller y pedidos del seller. En la página del grupo, también puedes buscar sellers por nombre o filtrarlos.

### Mejores prácticas para el uso de grupos
Sugerimos seguir las mejores prácticas a continuación al crear grupos.

- Crea un máximo de 100 grupos diferentes.  
- Asigna hasta 100 grupos al mismo seller.  
- Evita el acceso simultáneo de diferentes cuentas al crear, editar y eliminar grupos.  
- Evita el acceso simultáneo de diferentes cuentas al asignar grupos a los sellers.  
- Puedes utilizar caracteres especiales para nombrar los grupos.  
- La Gestión de sellers no distingue entre mayúsculas y minúsculas al nombrar los grupos.  
- No almacenamos un historial de creación o de cambios realizados en los grupos y sellers.  

## Lista de sellers

La lista incluye columnas con el nombre del _seller_ y su ID, así como opciones de filtro por status, integración, y anuncios activos. Al hacer clic en un _seller_ de la lista, se accede a la página de detalles del _seller_, donde se puede ver y editar la su información básica, y lo que se ha acordado en la asociación con el _marketplace_. 

Al hacer clic en el botón <i class="fas fa-ellipsis-v"></i> de la línea del _seller_, se muestran las siguientes acciones:

- **Detalles del seller:** redirige a la página de detalles del _seller_ para ver o editar la información.  
- **Pedidos:** redirige a la página de Todos los Pedidos en el OMS de VTEX, ya filtrando por los pedidos de ese _seller_.  

>ℹ️ Ten en cuenta que la lista está ordenada por orden alfabético. Para ver los datos de todos los sellers, navega entre las páginas de resultados haciendo clic en las flechas <i class="fas fa-angle-left"></i> y <i class="fas fa-angle-right"></i> en la parte inferior de la página. Utiliza los filtros y la búsqueda para refinar tus resultados.

### Seller identificable y no identificable (white label)

El icono de <i class="fas fa-tag"></i> _etiqueta_ junto al nombre del _seller_ indica la visibilidad que tiene esta tienda durante la experiencia de compra en tu _marketplace_. Los _sellers_ pueden tener dos tipos de visibilidad:

- **Seller *identificable*:** el _seller_ es visible en el _storefront_ de tu _marketplace,_ y es elegido por el consumidor durante la experiencia de compra en _buy box_. Un ícono de etiqueta rellenado significa que el seller es *identificable*.  
- **Seller no identificable (white label):** los _[sellers white label](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label)_ son cuentas franquicia en VTEX, ocultas en la experiencia de compra, y seleccionadas automáticamente por el sistema del _checkout_ para el _fulfillment_ de los pedidos.  El ícono de etiqueta transparente significa que el seller no es *identificable*.  

Para agregar un _seller_ no identificable (_white label_), es necesario tener este modelo previsto en el contrato con VTEX. Una vez acordado un contrato con el representante de ventas de VTEX responsable de tu _marketplace_, solicita la [adición de una cuenta franquicia](https://help.vtex.com/es/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) por medio de nuestro Soporte. Todas las cuentas franquicias se crean como un _seller white label_, y no es posible cambiar el tipo de _seller_ después de su creación. 

## Acciones masivas

Es posible realizar acciones masivas seleccionando varios _sellers_ haciendo clic en la _casilla de selección_ que se encuentra al lado izquierdo de la lista. Una vez seleccionados, aparecerá en la pantalla un cuadro de acción que le permitirá **pausar** y **activar** a los _sellers_, así como **agregarlos a un grupo**. 

Al poner en pausa a los _sellers_, puedes catalogar sus anuncios y hacer todas las pruebas necesarias antes de ponerlos a disposición en tu _storefront_ para, por ejemplo, recibir pedidos.

## Obtén más información

- [Agregar Seller](https://help.vtex.com/es/tutorial/adicionar-seller--tutorials_392)
- [Configurar marketplaces VTEX](https://help.vtex.com/es/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)
- [Acciones para la operación de marketplaces VTEX](https://help.vtex.com/es/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev)

