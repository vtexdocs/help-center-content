---
title: 'Plantilla de flete'
id: tutorials_127
status: PUBLISHED
createdAt: 2019-02-22T19:36:18.509Z
updatedAt: 2025-09-03T20:19:15.421Z
publishedAt: 2025-09-03T20:19:15.421Z
firstPublishedAt: 2019-02-22T19:36:22.375Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-rate-template
legacySlug: como-montar-la-plantilla-de-flete, importar-planilla-de-envio
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

La plantilla de flete es una forma de registrar los precios de envío que se ofrecerán a sus clientes. Contiene información como los rangos de código postal, el peso aceptado y el valor del servicio que cobra la empresa que hará la entrega.

La información de la plantilla de flete se debe completar según el contrato de servicio de entrega que su tienda tiene con transportadoras o repartidores. 

Para registrar los precios de envío a través de la plantilla de flete es necesario:

1. [Completar los campos de la plantilla](#completar-los-campos-de-la-plantilla)
2. [Enviar el archivo por el Admin VTEX](#enviar-el-archivo-por-el-admin-vtex)

> ℹ️ También hay una forma de registrar los precios de envío a través del módulo Tarifas de envío. Recomendamos que utilice la [plantilla de flete](https://help.vtex.com/es/tutorial/plantilla-de-flete--tutorials_127) cuando se incluyan múltiples rangos de código postal, y utilizar Tarifas de envío para administrar los precios de los fletes registrados y para registrar cada rango de código postal individualmente.

## Completar los campos de la plantilla

Para completar los campos de la plantilla debe verificar los términos acordados con la empresa responsable de la entrega de los productos de su tienda. Los campos de la plantilla se deben llenar según el contrato efectuado.

Descargue y utilice la plantilla modelo disponible en **Envío > Estrategia de envío > Políticas de envío > Crear política de envío,** haciendo clic en `Descargar plantilla modelo` en la sección **Cargar tarifas de envío**.

En general, debe completar las columnas teniendo en cuenta que para cada lugar hay: 

* Un rango de código postal asociado (o un polígono de geolocalización).
* Rangos de peso aceptables.
* Valores fijos y adicionales para la realización de la entrega.
* Volumen máximo de entregas.

Vea la siguiente tabla para entender cada campo en detalle.

| **Columna**            | **Descripción**                                                                                                                                                  | **Observaciones**                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ZipCodeStart`          | Inicio del rango de código postal (ZIP).                                                                                                                         | Solo se debe completar los rangos de código si el campo **PolygonName** no está rellenado, ya que son datos de función equivalentes.<br>Los campos deben contener hasta 8 dígitos. No se debe utilizar caracteres especiales, solo números y letras.<br>Es necesario completar los campos según las reglas a continuación:<br>- Para intervalos numéricos, los valores aceptados van de `0000000` a `99999999`.<br>- Para intervalos alfabéticos, los valores aceptados van de `AAAAAAAA` a `ZZZZZZZZZ`.<br>- Para intervalos alfanuméricos, el valor máximo es `ZZZZZZZZ`. |
| `ZipCodeEnd`            | Fin del rango del código postal (ZIP).                                                                                                                           | (Ver observaciones de **ZipCodeStart**)                                                                                                                                                                                                                                                                                                                                    |
| `PolygonName`           | Identificación del polígono definido en la función de [geolocalización](https://help.vtex.com/es/tutorial/gerenciar-geolocalizacao/).                            | Para utilizar geolocalización, después de rellenar la columna **PolygonName** con los valores deseados, rellene las columnas **ZipCodeStart** y **ZipCodeEnd** con el valor `0`.<br>Este campo solo se tiene que completar si los campos **ZipCodeStart** y **ZipCodeEnd** no están rellenados, ya que son datos de función equivalentes.                                |
| `WeightStart`           | Límite de inicio del rango de peso aceptado, expresado en número decimal.                                                                                        | Tenga en cuenta que la unidad de peso es la misma que se utiliza para rellenar los campos de registro de SKU. Por ejemplo, si utilizó gramos al [registrar los SKU](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY), ese será el estándar que se debe utilizar en **WeightStart** y **WeightEnd**.                                   |
| `WeightEnd`             | Límite de fin del rango de peso aceptado, expresado en número decimal.                                                                                           | (Ver observaciones de **WeightStart**)                                                                                                                                                                                                                                                                                                                                    |
| `AbsoluteMoneyCost`     | Valor fijo de flete que se deberá cobrar, expresado en número decimal.                                                                                           | En caso de que haya valores adicionales, el precio final que se cobre será el valor fijo sumado al valor adicional.                                                                                                                                                                                                                                                       |
| `PricePercent`          | [Adicional de precio](https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV), calculado según el precio de los productos en el carrito y expresado en número decimal. Para rellenar la tabla, utilice el valor en porcentaje. Por ejemplo, para un 10% adicional, complete la tabla con el número 10. | Utilice este campo en los casos en que haya un costo adicional en el precio de la entrega. Los [adicionales de flete](https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV) se suman al valor fijo.                                                                                                                                               |
| `PriceByExtraWeight`    | [Adicional por peso](https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV), calculado según el peso del carrito, expresado en número decimal. | Utilice este campo en los casos en que haya un costo adicional en el precio de la entrega. Los [adicionales de flete](https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV) se suman al valor fijo.<br>Tenga en cuenta que la unidad de peso es la misma que se utiliza para rellenar los campos de [registro de SKU](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY). |
| `MaxVolume`             | Volumen máximo aceptado, expresado en número decimal.                                                                                                            | Tenga en cuenta que la unidad de volumen está relacionada con las dimensiones registradas en [registro de SKU](https://help.vtex.com/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY).<br>Por ejemplo, si las aristas (altura, anchura y longitud) están en centímetros, el campo **MaxVolume** debe estar en cm³.                                         |
| `TimeCost`              | Tiempo de entrega del pedido que emplea la transportadora, en formato **DD.HH:MM:SS**.                                                                           | Por ejemplo: si el tiempo para realizar la entrega es de 4 días y medio, el campo se debe completar de la siguiente forma: `04.12:00:00`.                                                                                                                                                                                                                                |
| `Country`               | País donde se realizará la entrega, se completa con el código ISO de 3 dígitos.                                                                                   | Para consultar el código ISO del país, acceda a [Country Codes](https://countrycode.org/).                                                                                                                                                                                                                                                                                 |
| `MinimumValueInsurance` | [Valor adicional de seguro](https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV), configurado con un valor absoluto, expresado en número decimal. | El valor registrado en el campo se añade al valor del flete. Sin embargo, solo se añadirá cuando el [Adicional de precio](https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV) sea menor que el campo **MinimumValueInsurance**.<br>Vea [¿Para qué sirve el campo Minimum Value Insurance?](https://help.vtex.com/en/faq/para-que-serve-o-campo-na-tabela-de-frete-minimum-value-insurance). |

> ℹ️ Para facilitar el uso de los términos en nuestra documentación utilizamos «peso» en vez de «masa».  

Vea el siguiente ejemplo de cómo rellenar los campos, teniendo en cuenta el formato aceptado en cada columna. 

![modelo_planilhanumerica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/estrat%C3%A9gia-de-env%C3%ADo/plantilla-de-flete_1.png)

## Enviar el archivo por el Admin VTEX

La plantilla es un archivo enviado por el Admin VTEX. Después de completar los campos, debe enviar el archivo por la plataforma en formato **.xls** o en formato comprimido **.zip**.

El envío de la plantilla se realiza en el registro o en la edición de la _Política de envío_. Para eso:

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío > Políticas de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.  
2. Haga clic en el botón `Crear política de envío` si desea utilizar una nueva política de envío o haga clic en el icono del lápiz ubicado al lado de una política de envío existente.
3. Después de descargar la plantilla modelo y [completar los campos](#completar-los-campos-de-la-plantilla), cargue el archivo en la sección Cargar tarifas de envío, como se ilustra en la siguiente imagen. 
4. Al finalizar, haga clic en `Guardar cambios`.

  ![upload tarifas envioES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/estrat%C3%A9gia-de-env%C3%ADo/plantilla-de-flete_2.png)

> ⚠️ Para registrar una **nueva** Política de envío se debe completar otros campos además de la plantilla de flete.  Aprenda cómo crear, editar y completar todos los campos necesarios en el artículo [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140).

> ❗ Cada pestaña de la plantilla no debe superar las 65 536 filas. Se pueden crear varias pestañas en la misma plantilla, respetando el límite de filas. No hay un límite en el número de pestañas dentro del archivo. Sin embargo, el archivo no puede superar los 10MB. En caso de que sea necesario, comprima el archivo en formato **.zip**. Si esto no es suficiente, divídalo en dos archivos y registre otra política de envío para cargar el segundo archivo creado.

Si hay algún problema al completar los campos del archivo enviado, recibirá un *_email*_ para informarle del error. Asegúrese de revisar si la plantilla se completó correctamente antes de hacer un nuevo intento de envío.

La carga y confirmación del registro de la plantilla puede tardar un poco, ya que es posible que el procesamiento del archivo no se produzca inmediatamente debido al volumen de información. 

