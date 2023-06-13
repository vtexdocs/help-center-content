---
title: Crear trigger en Master Data v1
id: tutorials_1270
status: PUBLISHED
createdAt: 2017-04-27T21:56:49.666Z
updatedAt: 2022-12-14T18:27:30.828Z
publishedAt: 2022-12-14T18:27:30.828Z
firstPublishedAt: 2017-04-27T23:03:50.015Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: creando-trigger-en-el-master-data
legacySlug: creando-trigger-en-el-master-data
subcategory: 2nx7hMJmisofwqwy2P9l2i
---

<div class="alert alert-info">
Este artículo hace referencia al Master Data v1. Si desea utilizar el Master Data v2, vea los pasos de <a href="https://help.vtex.com/es/tutorial/configurar-triggers--54eVOFGhS0EWyAUieoqKWo">este artículo</a>.
</div>

Conceptualmente, **trigger** es un recurso de programación que ejecuta determinada acción cada vez que se produce un evento asociado. En el Master Data, un trigger es la configuración de uno o más disparos (eventos) cuando ocurre una determinada situación. Esta situación se configura en función de diversas variables.

Esto permite varias automatizaciones y control de datos, aumentando la eficiencia de su gestión de datos. Es decir, de modo simple, trigger es una funcionalidad que permite la programación de acciones en caso de que ocurra una acción de disparo.

1. Una entidad de datos contiene los datos de todas sus tiendas físicas
2. Se incluye un nuevo registro en esta entidad
3. Un trigger configurado envía a todos los clientes un correo electrónico contándoles la novedad

Imagine que se hacen programaciones de determinadas acciones para, cuando se cumpla una condición, realizar estas acciones. Entonces, cualquier información registrada en el MasterData puede ser una acción que dispare otras innumerables acciones, de acuerdo con lo que se desee. El trigger posee algunas características importantes, descritas a continuación:

- Se asocian a una entidad de datos.
- Se llaman automáticamente.
- No pueden llamarse directamente.
- Dispara diversas acciones.
- Permite la creación de escenarios de recursividad.
- Puede impactar en la manipulación de datos de la entidad, debido a la característica anterior.

La configuración se da por 4 partes. Cada una de estas se detalla a continuación:

1. Configuración de la acción que disparará el trigger. Para esto, decida cuál acción debe ser seguida por otra. Y esta configuración se separa en dos partes: la **condición** del trigger y los **filtros adicionales**. La condición es la acción que dispara el trigger, un registro por ejemplo, mientras que los filtros son las especificaciones que aquella acción debe cumplir para que la acción de respuesta se ejecute, como hacerse el registro por el formulario de newsletter y no por la finalización de compra. En este caso, la condición del trigger sería: "siempre que se ingrese  un registro" y, en los filtros adicionales, exista un campo "origen" filtrando por "newsletter". Así, cada vez que se realice un nuevo registro, el trigger verificaría si el cliente se registró por el newsletter y, solamente en este caso, realizaría la acción configurada para este fin.

2. Tiempo para el disparo. Es posible configurar varios envíos separados por un intervalo de tiempo. O incluso programar el disparo de acuerdo con la fecha de otro campo. Ejemplo: existe el campo "Fecha de Vencimiento" en el registro de una entidad "Producto" y se desea que, 1 mes antes de esta fecha, se envíe una notificación por API a otro sistema. En este caso, el tiempo de disparo será "Fecha de Vencimiento" menos 1 mes.

Acciones que se ejecutarán si un registro cumple la condición del trigger y los filtros. Aquí, se configuran todas las acciones que se ejecutarán cuando el registro que cumplió las condiciones también haya cumplido con los filtros y haya llegado a la fecha establecida en la programación. Estas acciones pueden ser envío de correo electrónico, de comentario, cambiar otro campo y otras posibilidades, detalladas más adelante. Ejemplo real: 
- **Condición**: el atributo Checkout se altera.
- **Filtro adicional**: el Checkout es igual a Finalizado.
- **Acciones en caso positivo**: alterar el campo Bonus (tipo score), colocando el tag bonus con valor 10 y validez 30 días.

En este caso, es un escenario donde se busca hacer la puntuación de un campo a cada nueva compra del cliente. Es decir, cada vez que el cliente finaliza un pedido, se suman 10 puntos en el campo "Bonus". Suponiendo que se conceda el bonus  cuando este campo sume 40 puntos, existe la necesidad de otro trigger que verifique ese bonus y conceda la promoción. Para esto, el segundo trigger va a asociar al cliente a un clúster que ya está configurado en una promoción. Vea la configuración del segundo trigger:

- **Condición**: el atributo Bonus se altera
- **Filtro adicional**: el Bonus es mayor o igual a 40
- **Acciones en caso positivo**: alterar el campo ClusterBonus para verdadero.

Acciones que se ejecutarán si un registro cumple la condición del trigger pero no cumple los filtros. Esta opción es exactamente lo contrario de la opción anterior. Solamente se ejecutará si el registro que pasó por la condición del trigger **no** cumple los filtros adicionales. Ejemplo real:
- **Condición**: se ingresa un nuevo registro en Registro Extendido
- **Filtro adicional**: el Sexo es igual a femenino
- **Acciones en caso positivo**: enviar un correo electrónico con ofertas del departamento femenino.
- **Acciones en caso negativo**: enviar un correo electrónico con ofertas del departamento masculino.

## Cómo configurar

1. Ingrese al DynamicStorage (https://*SUTIENDA*.ds.vtexcrm.com.br).
2. Haga clic en la pestaña **Trigger**.
3. Haga clic en el botón **Nuevo**.
4. Introduzca el Nombre del trigger.
5. Ingrese un correo electrónico para que sea notificado si ocurre algún error en la ejecución.
6. Seleccione la [entidad de datos](/es/tutorial/entidades-de-datos-creacion-y-mantenimiento/ "entidade de dados") que disparará la acción del trigger.
7. Después de seleccionar la entidad de datos, surgirán los demás campos de configuración.
8. Seleccione un status para el trigger.
9. Siga en la configuración de cada una de las pestañas como se indica a continuación.

### Condiciones 

Aquí, se configuran las condiciones que van a disparar el (los) evento (s) configurado (s) en el trigger. La forma de hacer esta configuración se describe de la siguiente manera:

#### Condición del trigger

- **Si el valor de un atributo se altera**: significa que, cuando el valor del campo que se informe abajo se altera, en cualquier registro, se disparará este trigger.
Se debe informar el campo que se filtrará. Ej.: cuando se altera el campo "correo electrónico", se debe disparar el trigger  &#8211; informe campo "correo electrónico" en el campo "Informe el atributo".
- **Si un evento se levanta**: este tipo fue descontinuado.
- **Un registro se altera**: significa que, cuando un registro se altera, en cualquier campo, se disparará este trigger.
- **Un registro se comenta**: significa que, cuando un registro se comenta, se disparará este trigger.
- **Un registro se ingresa**: significa que, cuando un registro se ingresa, se disparará este trigger.
- **Un registro se elimina**: significa que, cuando un registro se elimina, se disparará este trigger.

#### Filtro adicional

**Agregar grupo**: crea grupos que contienen filtros. Cada uno de estos grupos puede relacionarse con los demás, formando capas más complejas de filtro.
![relacionGrupos](//images.contentful.com/alneenqid6w5/6n2ipjsapUYyG8quIucIke/1b789ceed1f6ea993096f0d3c857b114/relacaoGrupos.png)
**Incluir filtro**: es posible crearlo dentro del último grupo creado o sin la necesidad de grupos. Un filtro siempre interactúa con los demás, en el modelo de conjunto, siendo las opciones "Y" u "O" para cada uno de estos.
Se debe seleccionar cuáles son los campos y cuáles son los valores aceptados o no para que se dispare el trigger.
![filtroTrigger](//images.contentful.com/alneenqid6w5/go7XW0mqWsuA4ygwYsoMS/cf6c5ef321a8d39e16a09d30c2ca1245/filtroTrigger.png)

<div class="alert alert-info">
Master Data v1 no permite la configuración de reintentos, a diferencia de Master Data v2.
</div>

### Programación 

Aquí, se configura cuándo el trigger debe dispararse. Puede ser inmediatamente, con la opción "Ejecutar lo más rápido posible", programado con una fecha en el calendario con "Programar para una fecha específica" o un valor en el futuro, partiendo de la fecha actual o de la fecha de algún campo de fecha, pudiendo utilizar minutos, horas, días, mes y años con la opción "Programar ejecución para una fecha dinámica".

### Acciones en caso positivo

Se configurarán los eventos que se dispararán si el registro que desencadenó el evento pasa por todos los filtros adicionales.

#### Alterar un atributo

Esta acción altera un campo del registro que disparó el trigger. Se debe informar cuál campo (atributo) debe alterarse, así como cuál fórmula debe utilizarse. El campo "Expresiones dinámicas" muestra cuáles son los valores que se deben ingresar en la fórmula si desea utilizar valores contenidos en campos del registro o de los registros relacionados (si tuviera). Se entiende como fórmula un código en C# que devuelva algún valor del mismo tipo definido en la entidad de datos para el campo.
![fórmula](//images.contentful.com/alneenqid6w5/F3qRfRkScKWAYoCas4GCe/36f27cb6e71425b80340e1221251d3d2/f_C3_B3rmula-1.png)
El botón validar va a compilar el código en el campo fórmula para verificar si es o no válido y mostrará cuál valor devolverá para el campo.  
![validacionFormula](//images.contentful.com/alneenqid6w5/3Fjh4Q1hVCqkY0yAmMSmOM/67564a371055792fd5c0f40efed7670b/validacaoFormula.png)

#### Incluir un comentario

Incluye un comentario en el registro que disparó el trigger. Se debe escribir el comentario que se ingresará.

#### Enviar correo electrónico

Envía un correo electrónico a destinatarios dinámicos (contenidos en el registro) o fijos. El correo electrónico que se enviará es todo personalizado, pudiendo ser un texto, HTML o incluso el contenido de una URL. Puede ingresar adjuntos, y el campo "tag válidas" muestra cómo ingresar valores de campos del registro.

![email](//images.contentful.com/alneenqid6w5/KsQUtktQoECEMiKEY6EU8/89d9d75e4cfdb2fd539dece5a542f8ce/email.png)

#### Puntuar campo Score

Un campo score es un tipo especial de dato que guarda 3 informaciones: clave, puntos y validez. Usted puede definir un valor para cada uno de estos puntos y guardarlo en un campo de tipo Score.

#### Generar un QRCode

Genera un QRCode con el contenido ingresado. Este QRCode debe insertarse en algún campo del tipo "file" del registro.

Se pueden configurar más de una acción; sin embargo, se recomienda hasta 3 acciones por trigger. Configure las acciones de acuerdo con la prioridad, pues si hay algún error en la configuración de un evento, todos los eventos que le siguen no se dispararán.

#### Enviar request HTTP

Envía un request HTTP con la posibilidad de guardar la información de la respuesta en Master Data.

Rellena la sección **Request data** con la información del request que se enviará. En la sección **Response action**, puedes indicar cómo se debe guardar la información de la respuesta en Master Data.

![Master Data v1 send http request screenshot](//images.ctfassets.net/alneenqid6w5/5uIXuDHBecTzuJxi0mnjWv/638a4b496b682354af486971ab6418c3/mdv1_trigger_http_request.PNG)

Para configurar **Response action**, selecciona la entidad de datos deseada y define, para cada campo que se debe guardar, la ruta JSON correspondiente en la respuesta.

### Acciones en caso negativo

Se harán los disparos de eventos cuando el registro no pase por los filtros adicionales del trigger. Se pueden configurar los mismos eventos de las "Acciones en caso positivo".

<!--
## Ejemplo
Vea el siguiente video con la configuración del siguiente escenario: envío de un correo electrónico de Bienvenida a cada nuevo cliente de la tienda. A no ser que el cliente forme parte de un clúster. En este caso, el enfoque de bienvenida se hará por teléfono; por lo tanto, clientes del clúster "Cluster 1" no deben recibir el  correo electrónico.

<iframe width="840" height="473" src="https://www.youtube.com/embed/A6UrxcYIq5E?feature=oembed" frameborder="0" allowfullscreen></iframe>
-->

## Ejemplos

- [Configurar carrito abandonado
](https://help.vtex.com/es/tutorial/configurando-carrinho-abandonado--tutorials_740)
