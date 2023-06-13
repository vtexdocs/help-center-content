---
title: Crear entidad de datos
id: tutorials_1265
status: PUBLISHED
createdAt: 2017-04-27T21:56:57.118Z
updatedAt: 2023-03-28T23:55:21.924Z
publishedAt: 2023-03-28T23:55:21.924Z
firstPublishedAt: 2017-04-27T23:03:49.803Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: entidades-de-datos-creacion-y-mantenimiento
legacySlug: entidades-de-datos-creacion-y-mantenimiento
subcategory: 1l3IVVYwrrG5YOtdt7R2SN
---

Entidad de datos es una representación de un conjunto de información sobre un determinado concepto. Toda entidad tiene campos, que son las informaciones que forman las entidades.

Para ejemplificar, imagine un sistema de control de una biblioteca. Este sistema controla los libros que pueden ser alquilados por los clientes. Así, vemos que estos tres conceptos (libro, cliente y alquiler) son entidades que poseen informaciones sobre cada una de ellas. Entidad de datos, por lo tanto, es un grupo de información sobre un determinado concepto.

![exemploBiblioteca](//images.contentful.com/alneenqid6w5/4WFfw93mlykqGCMSyAKcW2/27a0fd02aba4dd22df42a00fd506b75e/new-infographic.png)

Con estos conceptos, es posible configurar los más diversos escenarios de control de datos por el Master Data. De forma predeterminada, se insertan las siguientes entidades de datos: Cliente, Dirección, Tiendas, etc. Es posible crear cuántas más entidades de datos desee, posibilitando un ambiente personalizado, orientado a las necesidades de cada tienda.

<div class="alert alert-warning">
Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar cuál versión de Master Data satisface las necesidades de tu operación o ya está en uso.
 <ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Características de las versiones de Master Data
 </a>
</li>
<li>
<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
Master Data v2
 </a>
</li>
</ul>
</div>

## Entendiendo los tipos

Antes del paso a paso de configuración, es necesario aclarar los tipos de datos que se utilizarán en la configuración. La entidad de datos se compone de campos que, a su vez, tienen un tipo. Este tipo identifica las características de la información que se almacena en el campo y realiza validaciones, filtros y cálculos según el valor seleccionado.

En la creación de un campo, se muestran los tipos enumerados a continuación, junto con su significado.

- **Relationship**: Es el tipo de campo que va a crear una relación con otra entidad. Como relación, se entiende la información de una entidad que se exhibe en otra. Por ejemplo, volviendo a la biblioteca del comienzo del artículo, podríamos querer que el nombre del Cliente apareciera en el registro de Alquiler. Para ello, bastaría hacer una relación entre Alquiler y Cliente, usando el campo Nombre registrado en Alquiler. Entonces, en el tipo de relación, dentro de la configuración, usted necesitaría seleccionar el campo que desea mostrar (en este caso, Cliente) para seleccionar también el campo nombre.
- **User Login**: Es el tipo de campo que selecciona automáticamente el usuario logado. Se utiliza para escenarios en los que se desea registrar el e-mail del usuario que realiza acción en un registro de la entidad.
- **Integer**: Es el tipo que almacena números enteros, es decir, números sin la parte fraccionaria. Almacena los números enteros entre `-2147483648` y `2147483647`.
- **Long**: Es el mismo tipo que integer, sin embargo, con posibilidad de almacenar más números. Almacena de `-2⁶³` a `2⁶³-1`.
- **Date**: Es el tipo que almacena información sobre la fecha.
- **Time**: Es el tipo que almacena información sobre la hora.
- **Date and Time**: Es el tipo que almacena fecha y hora.
- **Percent**: Es el tipo que almacena información en porcentaje.
- **Currency**: Es el tipo que almacena información en el formato de moneda.
- **Decimal**: Es el tipo que almacena números con la parte fraccionaria siempre configurada para `2`. Es decir, este campo almacena siempre 2 dígitos como decimales del valor insertado.
- **URL**: Es el tipo que almacena una URL.
- **E-mail**: Es el tipo que almacena un e-mail.
- **CEP**: Es el tipo que almacena un CEP.
- **Varchar 10**: Es el tipo que almacena números, letras y caracteres especiales. En este caso, limita el número de dígitos en 10.
- **Varchar 50**: Es el tipo que almacena números, letras y caracteres especiales. En este caso, limita el número de dígitos en 50.
- **Varchar 100**: Es el tipo que almacena números, letras y caracteres especiales. En este caso, limita el número de dígitos en 100.
- **Varchar 750**: Es el tipo que almacena números, letras y caracteres especiales. En este caso, limita el número de dígitos en 750.
- **Text**: Es el tipo que almacena números, letras y caracteres especiales. En este caso, no hay limitación de caracteres.
- **Boolean**: Es el tipo que almacena información de verdadero o falso. Siempre debe haber un valor predeterminado para el campo, es decir, siempre se rellenará como verdadero o falso.
- **Auto Increment**: Es el tipo que almacena números enteros y que se incrementa automáticamente, es decir, a cada nuevo registro, ese campo recibe el valor del registro anterior + 1.
- **Telephone**: Es el tipo que almacena información en el formato de teléfono.
- **Tag**: Tipo descontinuado.
- **Score2**: Campo compuesto por clave, valor y validez. Por ejemplo: una posibilidad de uso es para control de compra por cliente, guardando cuánto compró el cliente y cuántas compras fueron hechas. [Este campo sólo puede ser llenado por API](https://developers.vtex.com/reference/master-data-api-v1-overview).
- **File**: Es el tipo que almacena un archivo. El tamaño límite a ser aceptado debe ser configurado en las opciones del campo (botón con símbolo de engranaje).
- **Flow**: Tipo descontinuado.
- **Tag Reference**: Tipo descontinuado.
- **CPF/CNPJ**: Es el tipo que almacena informaciones de CPF y CNPJ.

## Cómo configurar

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. En Master Data, haz clic en **Aplicações** > **Estrutura de dados.**
3. Haga clic en la pestaña **Entidad de datos.**
4. Haga clic en el botón **Nuevo.**
5. Rellene el campo de sigla con 2 letras que identifiquen la entidad de datos. Estas letras serán las iniciales del campo identificador del registro. Por ejemplo: Sigla `SP`, identificador `SP-0001`.
6. Rellene el nombre de la entidad de datos que desea crear.
7. Seleccione el tipo de clave principal, que puede ser una de las siguientes: **GUID**: es una secuencia de números y caracteres que no se repiten, identificando un registro; **Secuencial numérico**: es una secuencia numérica que no se repite e identifica un registro; **La clave principal será informada por el cliente a través del atributo "id"**: no crea automáticamente un campo identificador, este campo debe ser creado manualmente y se debe dar el nombre de **ID**.
8. La flag **permitir consultar todos los registros sin filtro** debe ser marcada cuando es necesario consultar los registros sin filtro y sin autenticación. Recuerde! Esta configuración es muy crítica porque permite que vía API puedan ser listados todos los registros de la base.
9. Rellene la pestaña **Campos** con los campos que los valores no se calcularán automáticamente.
10. Rellene la columna **Nombre** con el valor de identificación del campo. No se permite la inserción de espacio ni caracteres especiales. Por ejemplo: NombreDeCliente.
11. Rellene la columna **Nombre de visualización** con el valor que se mostrará en el formulario. Por ejemplo: Nombre del cliente.
12. Seleccione el tipo de campo, de acuerdo con las opciones descritas en la parte del artículo sobre los tipos.
13. Haga clic en el símbolo de engranaje para abrir las opciones de configuración.
14. Seleccione **permitir nulo** si es posible la creación o edición de un registro con el campo en blanco. Si esta opción se desactiva, usted no podrá crear un registro con el campo sin ningún valor.
15. El campo **auditado** está suspendido, de modo que todos los campos son auditados de forma predeterminada.
16. Seleccione **público para lectura** si, por la API, es posible realizar la lectura de los datos de esos campos sin la necesidad de autenticación.
17. Seleccione **público para escritura** si, por la API, es posible realizar la inserción de datos en ese campo sin la necesidad de autenticación.
18. Seleccione **público para filtrar** si, por la API, es posible realizar el filtro de datos de ese campo sin la necesidad de autenticación.
19. Seleccione **es buscable** si este campo se utiliza para buscar en el formulario y por API.
20. Seleccione **es filtro** si este campo se utiliza para el filtro en el formulario y la API.
21. Rellene la descripción del campo.
22. Acceda a la pestaña **Campos Automáticos** para la configuración de campos en los que los valores se calculan automáticamente.
23. La configuración se da de la misma manera que la configuración de un campo no automático, con la excepción del área **Edición de la fórmula**, que debe ser rellenada con el código en C# que hará la lógica de cálculo del campo. Como ayuda, se puede utilizar las expresiones dinámicas, que insertan valores de otros campos en el código. Además, es necesario seleccionar en qué momento se ejecutará el cálculo.
24. Para insertar más campos, basta con hacer clic en el botón **Nuevo campo** o **Nuevo campo calculado**.
25. Al final de la configuración, haga clic en el botón **Guardar** o **Guardar y nuevo** (para crear una nueva entidad de datos).
26. Haga clic en el botón con símbolo de disquete para publicar la entidad de datos creada o cambiada.

_Después de la creación de la entidad de datos, es necesario [crear el formulario para la inserción, el cambio y la visualización de datos en su ambiente Master Data](/es/tutorial/creando-formulario-en-master-data)._
