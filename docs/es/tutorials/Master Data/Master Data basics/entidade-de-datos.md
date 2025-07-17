---
title: 'Entidad de datos'
id: tutorials_1265
status: PUBLISHED
createdAt: 2017-04-27T21:56:57.118Z
updatedAt: 2024-10-23T23:39:13.110Z
publishedAt: 2024-10-23T23:39:13.110Z
firstPublishedAt: 2017-04-27T23:03:49.803Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slugEN: data-entity
locale: es
legacySlug: entidades-de-datos-creacion-y-mantenimiento
subcategoryId: 1l3IVVYwrrG5YOtdt7R2SN
---

Una entidad de datos es una representación de un conjunto de información sobre un determinado concepto. Toda entidad tiene campos, que son los datos que forman las entidades.

Para ilustrarlo, imaginemos un sistema de control de bibliotecas. Este sistema controla los libros que los clientes pueden tomar prestados. En este ejemplo, los conceptos libro, cliente y préstamo (alquiler) son entidades que poseen informaciones sobre cada una de ellas. Una entidad de datos, por lo tanto, es un grupo de información sobre un determinado concepto.

![data-entity-es](https://images.ctfassets.net/alneenqid6w5/4w7gskl1jpuzrFm4gj5K0J/be338269e04b9d5835cda9a16ec9b601/data-entity-es.png)

Estos conceptos permiten configurar los más diversos escenarios de control de datos en Master Data. De forma predeterminada, se ingresan las siguientes entidades de datos: Cliente, Dirección, Tiendas, etc. Puedes crear todas las entidades de datos que desees para personalizar el entorno de acuerdo con las necesidades de cada tienda.

<div class="alert alert-warning">
<p>Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar la versión de Master Data que satisface las necesidades de tu operación o que ya está en uso. Más información:</p>
	<ul>
    	<li><a href="https://help.vtex.com/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versiones-disponibles">Características de las versiones de Master Data</a></li>
    	<li><a href="https://developers.vtex.com/docs/guides/master-data-v2-basics">Master Data v2</a></li>
	</ul>
</div>

## Tipos de datos

Una entidad de datos se compone de campos que, a su vez, tienen un tipo. El tipo identifica las características de la información que se almacena en el campo y realiza validaciones, filtros y cálculos según el valor seleccionado.

Al crear un campo puedes seleccionar cualquiera de los tipos que se describen a continuación:

| Tipo de campo | Descripción |
| - | - |
| **Auto Increment** | Almacena números enteros y se incrementa automáticamente, es decir, con cada nuevo registro, este campo recibe el valor del registro anterior + 1. |
| **Boolean** | Almacena información de valores booleanos, es decir, siempre se rellenará como `true` (verdadero) o `false` (falso). |
| **CEP** | Almacena un CEP (código postal en Brasil). |
| **CPF / CNPJ** | Almacena la información de CPF y CNPJ (identificación fiscal e identificación de persona jurídica en Brasil, respectivamente). |
| **Currency** |  Almacena información en el formato de moneda. |
| **Date** |  Almacena información sobre la fecha. |
| **Date and Time** |  Almacena fecha y hora. |
| **Decimal** |  Almacena números con la parte fraccionaria siempre configurada como 2. Es decir, este campo siempre almacena 2 dígitos como lugares decimales del valor ingresado. |
| **Email** |  Almacena un email. |
| **File** |  Almacena un archivo. Puedes definir el tamaño máximo en la configuración del campo que se muestra al hacer clic en el botón de engranaje <i class="fas fa-cog"></i>. |
| **Integer** |  Almacena números enteros, es decir, números sin la parte fraccionaria. Almacena los números enteros entre `-2147483648` y `2147483647`. |
| **Long** | Es el mismo tipo que **Integer**, pero con la posibilidad de almacenar más números. Almacena de `-2⁶³` a `2⁶³-1`. |
| **Percent** | Almacena información en porcentajes. |
| **Phone** |  Almacena información en formato de número de teléfono. |
| **Relationship** | Crea una relación con otra entidad. Una relación es la información de una entidad que se muestra en otra entidad. Por ejemplo, si en una biblioteca deseamos que el nombre del **Cliente** se muestre en el registro de **Préstamo**, debemos crear una relación entre **Préstamo** y **Cliente** utilizando el campo **Nombre registrado en Préstamo**.<br><br>Para crearla, en la configuración del tipo **Relationship** primero debes seleccionar la entidad que deseas mostrar (**Cliente** en este caso) y luego el campo **Nombre**. |
| **Score2** | Campo compuesto por clave, valor y validez. Un ejemplo de uso es el control de compra por cliente en cuyo caso se guardaría la cantidad comprada por el cliente y la cantidad de compras realizadas. Este campo se debe rellenar mediante el endpoint [Update scores](https://developers.vtex.com/docs/api-reference/masterdata-api#put-/api/dataentities/-acronym-/documents/-id-/score) o [Update score by field](https://developers.vtex.com/docs/api-reference/masterdata-api#put-/api/dataentities/-acronym-/documents/-id-/score/-field-name-) de [Master Data API v1](https://developers.vtex.com/docs/api-reference/masterdata-api). |
| **Text** | Almacena números, letras y caracteres especiales. En este caso, no hay límite de caracteres. |
| **Time** | Almacena información de hora. |
| **URL** |  Almacena una URL. |
| **User Login** | Selecciona automáticamente el usuario que tiene sesión iniciada. Se utiliza cuando se desea registrar el email del usuario que realiza una acción en un registro de entidad. |
| **Varchar 10** | Almacena números, letras y caracteres especiales con un límite de 10 caracteres. |
| **Varchar 100** | Almacena números, letras y caracteres especiales con un límite de 100 caracteres. |
| **Varchar 50** | Almacena números, letras y caracteres especiales con un límite de 50 caracteres. |
| **Varchar 750** | Almacena números, letras y caracteres especiales con un límite de 750 caracteres. |

## Crear entidad de datos

Sigue los pasos a continuación para configurar una nueva entidad de datos.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. En Master Data, haz clic en **Aplicaciones** > **Configuración avanzada** > **Estructura de datos**.
3. Haz clic en la pestaña **Entidades de datos**.
4. Haz clic en el botón `Agregar`.
5. Rellena el campo **Acrónimo** con 2 letras que identifiquen la entidad de datos. Estas letras serán las iniciales del campo que identifica el registro. Ejemplo: para el acrónimo SP, el identificador es SP-0001.
6. Rellena el **Nombre** de la entidad de datos que deseas crear.
7. Selecciona el tipo de clave primaria, que puede ser una de las siguientes:

   - **Generar identificador único universal (GUID)**: una secuencia de números y caracteres que no se repiten y que identifica un registro.
   - **La clave primaria debe indicarse mediante la propiedad 'ID'**: no crea un campo identificador automáticamente. Este campo se debe crear manualmente y debe tener el nombre **ID**.
8. Si es necesario consultar los registros sin filtro y sin autenticación, marca la opción **Permitir la consulta de todos los documentos sin filtro**. Atención: esta configuración es crítica, ya que permite listar todos los registros a través de API.
9.  Rellena la pestaña **Campos** con los campos que deseas incluir en la nueva entidad de datos según los pasos a continuación.
10. Rellena la columna **Nombre** con el valor de identificación del campo. No se admiten espacios ni caracteres especiales. Ejemplo: NombreDelCliente.
11. Rellena la columna **Nombre para mostrar** con el nombre que se mostrará en el formulario. Ejemplo: Nombre del cliente.
12. Selecciona el tipo de campo según las opciones descritas en la sección [Tipos de datos](#tipos-de-datos).
13. Haz clic en el botón de engranaje <i class="fas fa-cog"></i> para abrir las opciones de configuración del campo.
14. Completa la **Configuración general**.

 	- **¿Es anulable?**: marca esta opción si se puede crear o editar un registro con un campo en blanco (nulo). Si no se marca esta opción, no se podrá crear un registro con un campo sin valor.
 	- **Permitir la lectura sin credenciales:** marca esta opción si es posible leer los datos del campo sin necesidad de autenticación a través de Master Data API.
 	- **Permitir editar sin credenciales:** marca esta opción si es posible ingresar datos en el campo sin necesidad de autenticación a través de Master Data API.
 	- **Permitir filtrar credenciales:** marca esta opción si es posible filtrar datos del campo sin necesidad de autenticación a través de Master Data API.

15. Completa la **Configuración de búsqueda y filtro**:

	- **¿Es buscable?**: determina si el campo se utiliza para búsquedas en el formulario y por API.
	- **¿Es filtrable?:** determina si el campo se utiliza para filtrar en el formulario y por API.
16. Ingresa la descripción del campo.
17. Para agregar más campos, haz clic en el botón `Nuevo campo` y repite los pasos 10 al 16.
18. Después de definir los campos, haz clic en el botón `Guardar` para finalizar o `Guardar y crear` para continuar con la creación de una nueva entidad de datos.

	Se te redirigirá de vuelta a la pestaña **Entidad de datos**.

19. En la fila de la nueva entidad, haz clic en el botón de disquete <i class="fas fa-save"></i> para publicar la entidad de datos creada.
20. Haz clic en `OK`.
21. Haz clic en la pestaña **Aplicaciones** para volver a la página de inicio de Master Data.  
22.	Haz clic en `Volver a cargar aplicaciones`.

<div class="alert alert-info">
	<p>Después de crear la entidad de datos, debes <a href="https://help.vtex.com/es/tutorial/creando-formulario-en-master-data--tutorials_1047">crear el formulario para agregar, editar y mostrar los datos en Master Data</a>.</p>
</div>
