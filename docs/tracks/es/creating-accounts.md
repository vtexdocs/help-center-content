---
title: Crear cuentas en Customer Credit
id: 7FHLd0cmxqqGeEUuc8uioU
status: PUBLISHED
createdAt: 2018-11-06T20:24:28.924Z
updatedAt: 2023-05-12T12:20:09.076Z
publishedAt: 2023-05-12T12:20:09.076Z
firstPublishedAt: 2018-11-06T21:15:02.053Z
contentType: trackArticle
productTeam: Financial
slug: creando-cuentas
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugES: customer-credit-como-empezar
---

El siguiente paso es crear las cuentas de los clientes a los que desea ofrecer crédito en su tienda. 

Hay tres formas de crearlas:

- Vía Admin.
- Por el recurso de importación masiva.  
- Vía API.

<div class="alert alert-info">
<strong>Atención</strong>: Las cuentas de Customer Credit no están integradas con la base de clientes registrada en las entidades del Master Data. Las cuentas deben crearse en la propia aplicación antes o después de que el usuario haya cerrado las compras en la tienda.
</div>

Además, en todos los casos en que el usuario opte por actualizar datos mediante la importación de una plantilla en el sistema, es necesario asegurarse de que todos los valores estén separados por una coma. De lo contrario, la operación no se completará correctamente.

Dicho esto, verifique los detalles de cómo crear una cuenta por medio de cada una de las formas.

## Creación de cuentas individualmente
Si lo prefiere, puede crear varias cuentas manualmente a través del Admin.

Verifique el procedimiento:

1. Accede al __Admin__.
2. Haga clic en el módulo __Customer Credit__.
3. Luego, haga clic en __Cuentas__.
4. En el lado derecho de la pantalla, haga clic en el botón azul __"Nuevo"__.
5. Seleccione el __tipo de documento__ que identificará la cuenta.
6. Introduzca el número de documento en el campo __Documento__.
7. Rellene el campo __E-mail__.
8. Establezca el __límite de crédito__ disponible para la cuenta.
9. Haga clic en el botón azul __Confirmar__.

El llenado del campo de email en el formulario es obligatorio, ya que a través del email (clave de acceso al sistema VTEX), es posible autenticar el acceso del cliente a los límites de crédito de una cuenta. Para obtener más información sobre la protección de datos, visite [Seguridad de SmartCheckout](https://help.vtex.com/es/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).

De esta manera, la nueva cuenta se mostrará en la página de inicio de la sección "Cuentas".

## Crear cuentas a través de la importación masiva

Para la creación de cuentas de forma masiva, puede utilizar el recurso de importación de archivo CSV (Comma Separated Value) - un formato de plantilla. 

Esta funcionalidad es muy útil ya que permite importar miles de cuentas al sistema a la vez.

1. Acceda al __Admin__.
2. Haga clic en el módulo __Customer Credit__.
3. Luego, haga clic en __Cuentas__.
4. Junto al botón "Nuevo", haga clic en la opción __Importar__.
5. En el box que aparece en la pantalla, seleccione la opción __Crear__.
6. Haga clic en el botón azul __"Continuar"__.
7. Luego, haga clic en la opción __Descargar plantilla__.

De este modo, en su computadora se guardará un modelo de plantilla en formato CSV. Puede encontrarlo en la carpeta de Descargas.

El siguiente paso es rellenar las columnas del documento con la información de cada una de las cuentas que desea crear.

En total, la tabla tiene 13 columnas que pueden rellenarse. Sin embargo, la única  obligatoria es la del correo electrónico, información utilizada por el sistema VTEX para identificar al usuario en SmartCheckout.

Cuando haya terminado de rellenar la tabla y de guardar todas las modificaciones que haya hecho, proceda a realizar los siguientes pasos:

1. Vuelva a la sección de __Cuentas__ en el Admin.
2. De nuevo, haga clic en la opción __Importar__.
3. Esta vez, seleccione la opción __Actualizar__ en el box.
4. Haga clic en el botón azul __"Continuar"__
5. Cargue la plantilla en el espacio __"Suelte aquí su CSV o elija un archivo"__.
6. Haga clic en el botón __Importar archivo__.

¡Listo! Sus cuentas se crearán y se mostrarán en la página de inicio de la sección Cuentas.

En el contexto de la creación de nuevas cuentas, puede consultar todo su historial de importación. Para esto, simplemente haga clic en "Historial de importación" en la página principal de la sección Cuentas. 

De esta manera, también se puede comprobar si las importaciones se hicieron de la manera correcta. De lo contrario, se indicará en la interfaz las correcciones necesarias.

### Actualizar cuentas a través de la importación masiva

Además, también puede actualizar los datos  - correo electrónico, límite de crédito, documento, tipo de documento, status y tolerancia - de todas sus cuentas a la vez mediante la función de importación masiva.

El proceso es similar a la creación de cuentas. Sin embargo, aquí se considera que ya tiene el modelo del archivo CSV descargado en su máquina.

Verifique el procedimiento:

1. Acceda al __Admin__.
2. Haga clic en el módulo __Customer Credit__.
3. Luego, haga clic en __Cuentas__.
4. Junto al botón "Nuevo", haga clic en la opción __Importar__.
5. En el box que aparece en la pantalla, seleccione la opción __Actualizar__.
6. Haga clic en el botón azul __Continuar__.
7. Luego, cargue el archivo __CSV actualizado__ en el área de *Drop Zone*.
8. Haga clic en el botón __"Importar archivo"__.

Finalmente, espera a la carga completa de la plantilla.

## Crear cuentas a través de API

Otra alternativa es crear cuentas a través de APIs por medio de [endpoint](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-accountId- "endpoint") `POST Open or Change Account`.

Rellene el body con la siguiente información:

     {
      "id": "id",
      "creditLimit": "number",
      "document": "CPF or CNPJ or Other",
      "email": "email"
    }

Para más detalles, consulte nuestra [documentación técnica sobre las APIs de Customer Credit](https://developers.vtex.com/docs/guides/customer-credit-api-overview "documentación técnica sobre las APIs de Customer Credit"). 
