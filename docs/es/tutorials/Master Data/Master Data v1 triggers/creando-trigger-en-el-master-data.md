---
title: 'Crear trigger en Master Data v1'
id: tutorials_1270
status: PUBLISHED
createdAt: 2017-04-27T21:56:49.666Z
updatedAt: 2024-06-27T13:01:58.637Z
publishedAt: 2024-06-27T13:01:58.637Z
firstPublishedAt: 2017-04-27T23:03:50.015Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slugEN: creating-trigger-in-master-data
locale: es
legacySlug: creando-trigger-en-el-master-data
subcategoryId: 2nx7hMJmisofwqwy2P9l2i
---

>ℹ️ Este artículo hace referencia a Master Data v1. Si deseas utilizar Master Data v2, consulta los pasos de la guía [Setting up triggers in Master Data v2](https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2).

Conceptualmente, un trigger es un recurso de programación que ejecuta una acción específica siempre que se produce un evento asociado. En Master Data, un trigger es la configuración de uno o varios eventos disparadores que se activan cuando se produce una determinada situación, en función de diversas variables.

La implementación de triggers posibilita diversas automatizaciones y optimiza el control de datos, lo cual se traduce directamente en una mayor eficiencia en tu gestión de información. En resumen, un trigger es una funcionalidad que permite programar acciones para que se ejecuten automáticamente cuando se cumplan condiciones predefinidas por eventos disparadores.

Por ejemplo:

1. Una entidad de datos contiene los datos de todas tus tiendas físicas.
2. Se inserta un nuevo registro en esa entidad.
3. Un trigger configurado envía a todos los clientes un email informando sobre la actualización.

Los triggers permiten programar acciones que se llevarán a cabo cuando se cumplan determinadas condiciones. Cualquier información registrada en Master Data puede activar otras muchas acciones, según se desee.

Las principales características de los triggers son las siguientes:

- Se asocian a una entidad de datos.
- Se activan automáticamente.
- No pueden ser llamados directamente.
- Activan diversas acciones.
- Permiten crear escenarios de recursividad.
- Pueden impactar el manejo de datos de la entidad debido a la característica anterior.

## Estructura del trigger

Antes de [crear un trigger](#configurar-trigger), es necesario comprender que su configuración consta de cuatro partes, que se explican a continuación.

![trigger](https://images.ctfassets.net/alneenqid6w5/5WbC7SD6aPFqaOHuHWgQoq/4dee23f7b89e1ce4acd9479dcd0babd9/trigger-es.png)

### Acción que activa el trigger

Lo primero es decidir qué acción debe impulsar la siguiente acción. Esta configuración se divide en dos partes:

- **Regla**: acción que activa el trigger. Ejemplo: un nuevo registro en una tienda.
- **Filtros adicionales**: condiciones que la acción debe cumplir para que se ejecute la acción de respuesta, como que el registro se realice a través del formulario de la newsletter y no mediante la finalización de la compra. 

En este ejemplo, la condición del trigger sería **Siempre que se crea un registro** y, en los filtros adicionales, debería haber un campo "origen" filtrando por "newsletter". De este modo, cada vez que se produjera un nuevo registro, el trigger comprobaría si el cliente se registró vía newsletter y, solo en ese caso, realizaría la acción configurada.

### Tiempo para activar el trigger

Pueden configurarse múltiples envíos separados por un rango de tiempo, o incluso programar el trigger en función de la fecha de otro campo. Ejemplo: hay un campo **Fecha de vencimiento** en el registro de una entidad **Producto** y deseas que un mes antes de esta fecha se envíe una notificación mediante API a otro sistema. En este caso, el tiempo de activación será: **Fecha de vencimiento** menos 1 mes.

### Acciones que se realizarán si un registro cumple la regla del trigger y los filtros

Aquí debes configurar todas las acciones que serán ejecutadas cuando el registro cumpla tanto las condiciones establecidas como los filtros. Estas acciones pueden incluir el envío de email, la asignación de una puntuación en un campo de tipo Score2, entre otras posibilidades detalladas a continuación.

Ejemplo: un escenario en el que se desea puntuar un campo con cada nuevo pedido del cliente. Cada vez que el cliente finaliza un pedido, se suman 10 puntos al valor actual del campo **Bonus**.

- **Regla: cuando se modifica el atributo Checkout.
- **Filtro adicional**: Checkout igual a Finalizado.
- **Acciones en caso positivo**: modificar el campo Bonus (tipo Score2), configurando la tag de bonus con valor 10 y validez de 30 días.

### Acciones que se realizarán si un registro cumple la regla del trigger pero no los filtros

En esta configuración, debes definir acciones que se realizarán únicamente si el registro que cumplió la condición del trigger **no** cumple la de los filtros adicionales. Ejemplo:

- **Regla: cuando se crea un nuevo campo de registro personalizado.
- **Filtro adicional**: género igual a femenino.
- **Acciones si es positivo**: enviar un email con ofertas de la sección femenina.
- **Acciones si es negativo**: enviar un email con ofertas de la sección masculina.

## Configurar trigger

Sigue los pasos a continuación para crear un trigger en Master Data v1:

1. Accede a Master Data en `https://{nombredelacuenta}.ds.vtexcrm.com.br/`, sustituyendo `{nombredelacuenta}` por el nombre de tu cuenta VTEX.
2. Haz clic en la pestaña **Trigger**.
3. Haz clic en el botón `Agregar`.
4. Ingresa el **Nombre** del trigger.
5. Selecciona la [entidad de datos](https://help.vtex.com/es/tutorial/entidad-de-datos--tutorials_1265/ "entidad de datos") que activará la acción del trigger.

   Una vez seleccionada la entidad de datos se mostrarán los demás campos de configuración.
7. Selecciona un status para el trigger, que puede ser **Activado** o **Desactivado**.
8. Realiza los ajustes en cada una de las pestañas, según las secciones a continuación:

    - [Reglas](#reglas)
    - [Programar](#programar)
    - [Si es positivo](#si-es-positivo)
    - [Si es negativo](#si-es-negativo)

9. Haz clic en `Guardar`.   

### Reglas

Aquí debes definir las condiciones que activarán el evento o eventos configurados en el trigger.

#### Reglas de activación

- **Se modifica el valor de un atributo**: cuando el valor del campo a continuación se modifica en cualquier registro, se activará el trigger.

   En la opción **Campo**, selecciona el campo que deseas utilizar. Si deseas activar el trigger cuando se modifique el campo **Email**, selecciona dicho campo.

- **Se modifica un atributo de filtro**: cuando se modifica un atributo de filtro, se activa el trigger.
- **Se modifica un registro**: cuando se modifica un registro, en cualquier campo, se activa el trigger.
- **Se crea un registro**: cuando se inserta un registro, se activa el trigger.
- **Se elimina un registro**: cuando se elimina un registro, se activa el trigger.

#### Filtro adicional

- **Agregar grupo**: crea grupos que contienen filtros. Cada uno de estos grupos puede relacionarse con los demás, formando capas de filtro más complejas.
- **Agregar filtro**: es posible crear un filtro dentro del último grupo creado o independientemente de los grupos. Un filtro siempre interactúa con otros filtros según la configuración establecida, utilizando las opciones "y" y "o" para cada uno de ellos.

   Selecciona los campos y los valores que activarán o no el trigger.

   ![filters-es](//images.ctfassets.net/alneenqid6w5/go7XW0mqWsuA4ygwYsoMS/ce8019b7300c8c857ac71ffb4f0091c9/filters-es.png)

>ℹ️ Master Data v1 no permite la configuración de reintentos de trigger, a diferencia de Master Data v2.

### Programar

Esta pestaña permite configurar cuándo debe dispararse el trigger:

- **Ejecutar lo antes posible:** inmediatamente.
- **Programar en una fecha específica:** programar fecha y hora en el calendario.
- **Programar en una fecha dinámica:** establecer una fecha futura a partir de la fecha actual o de un campo de fecha, permitiendo ajustar minutos, horas, días, meses y años.

### Si es positivo

En esta pestaña debes configurar los eventos que deben dispararse si el registro que activó el evento cumple todos los filtros adicionales.

#### Enviar un email

Envía un email a destinatarios dinámicos (contenidos en el registro) o estáticos. El email puede personalizarse y estar en formato de texto, HTML o incluir el contenido de una URL. Se pueden ingresar archivos adjuntos y el campo **Tags válidas** muestra cómo ingresar valores de campos del registro.

![send-email-es](//images.ctfassets.net/alneenqid6w5/KsQUtktQoECEMiKEY6EU8/e413677641a756923fa9fd6e477002e2/send-email-es.png)

#### Enviar un email utilizando una plantilla de VTEX Message Center

Envía un email utilizando una plantilla existente en Message Center.

#### Agregar puntuación al campo Score2

Un campo de tipo Score2 es un tipo especial de dato que almacena 3 informaciones: clave, puntos y validez. Puedes definir un valor para cada uno de estos puntos y guardarlo en un campo de este tipo.

#### Enviar un request HTTP

Envía un request HTTP con la posibilidad de guardar la información de la respuesta en Master Data.

Rellena el apartado **Información del request** con los datos de la solicitud que deseas enviar. En la sección **Acción de respuesta**, puedes indicar cómo debe guardarse la información de la respuesta en Master Data.

![http-request-es](//images.ctfassets.net/alneenqid6w5/5uIXuDHBecTzuJxi0mnjWv/a24d038b06e2153e667a90c9a42920d9/http-request-es.png)

Para configurar la **Acción de respuesta** selecciona la entidad de datos deseada y especifica la ruta JSON correspondiente para cada campo que se debe guardar en la respuesta.

### Si es negativo

Los eventos se activarán cuando el registro no cumpla los filtros adicionales del trigger. Puedes configurar los mismos eventos de las [acciones si es positivo](#si-es-positivo).

## Ejemplos

- [Configurar carrito abandonado](https://help.vtex.com/es/tutorial/configurar-carrito-abandonado--tutorials_740)
