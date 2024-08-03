---
title: 'Plantilla de flete'
id: tutorials_127
status: PUBLISHED
createdAt: 2019-02-22T19:36:18.509Z
updatedAt: 2023-10-10T13:26:19.271Z
publishedAt: 2023-10-10T13:26:19.271Z
firstPublishedAt: 2019-02-22T19:36:22.375Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: plantilla-de-flete
locale: es
legacySlug: como-montar-la-plantilla-de-flete, importar-planilla-de-envio
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

La plantilla de flete es una forma de registrar los precios de envío que se ofrecerán a sus clientes. Contiene información como los rangos de código postal, el peso aceptado y el valor del servicio que cobra la empresa que hará la entrega.

La información de la plantilla de flete se debe completar según el contrato de servicio de entrega que su tienda tiene con transportadoras o repartidores. 

Para registrar los precios de envío a través de la plantilla de flete es necesario:

1. [Completar los campos de la plantilla](#completar-los-campos-de-la-plantilla)
2. [Enviar el archivo por el Admin VTEX](#enviar-el-archivo-por-el-admin-vtex)

<div class="alert alert-info"> 
También hay una forma de registrar los precios de envío a través del módulo Tarifas de envío. Recomendamos que utilice la <a href="https://help.vtex.com/es/tutorial/plantilla-de-flete--tutorials_127">plantilla de flete</a> cuando se incluyan múltiples rangos de código postal, y utilizar Tarifas de envío para administrar los precios de los fletes registrados y para registrar cada rango de código postal individualmente. 
</div>

## Completar los campos de la plantilla

Para completar los campos de la plantilla debe verificar los términos acordados con la empresa responsable de la entrega de los productos de su tienda. Los campos de la plantilla se deben llenar según el contrato efectuado.

Descargue y utilice la plantilla modelo disponible en **Envío > Estrategia de envío > Políticas de envío > Crear política de envío,** haciendo clic en `Descargar plantilla modelo` en la sección **Cargar tarifas de envío**.

En general, debe completar las columnas teniendo en cuenta que para cada lugar hay: 

* Un rango de código postal asociado (o un polígono de geolocalización).
* Rangos de peso aceptables.
* Valores fijos y adicionales para la realización de la entrega.
* Volumen máximo de entregas.

Vea la siguiente tabla para entender cada campo en detalle.

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
        <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i"><strong>Columna</strong></b>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Descripción</b>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Observaciones</b>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZipCodeStart</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Inicio del rango de código postal (ZIP). 
            </td>
            <td rowspan="2" class="t-body pa5" style="min-width: 15rem;">Solo se debe completar los rangos de código si el campo <b>PolygonName</b> no está rellenado, ya que son datos de función equivalentes.
            <p>
            Los campos deben contener hasta 8 dígitos. No se debe utilizar caracteres especiales, solo números y letras. <p>Es necesario completar los campos según las reglas a continuación:
                <body>
                  <ul>
                    <li>Para intervalos numéricos, los valores aceptados van de <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">0000000<span> a <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">99999999</span>.
                    <li>Para intervalos alfabéticos, los valores aceptados van de <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">AAAAAAAA</span> a <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZZZZZZZZZ</span>.
                    <li>Para intervalos alfanuméricos, el valor máximo es 
<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZZZZZZZZ</span>.</li>
                  </ul>
                </body>  
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZipCodeEnd</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Fin del rango del código postal (ZIP).
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">PolygonName</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Identificación del polígono definido en la función de <a href="https://help.vtex.com/es/tutorial/gerenciar-geolocalizacao/">geolocalización.</a>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Este campo solo se tiene que completar si los campos <b>ZipCodeStart</b> y <b>ZipCodeEnd</b> no están rellenados, ya que son datos de función equivalentes.  
            </td>
        </tr>
    <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">WeightStart</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Límite de inicio del rango de peso aceptado, expresado en número decimal.
            </td>
            <td rowspan="2" class="t-body pa5" style="min-width: 15rem;"> Tenga en cuenta que la unidad de peso es la misma que se utiliza para rellenar los campos de registro de SKU. Por ejemplo, si utilizó gramos al <a href="https://help.vtex.com/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY"> registrar los SKU</a>, ese será el estándar que se debe utilizar en <b>WeightStart</b> y <b>WeightEnd</b>. 
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">WeightEnd</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Límite de fin del rango de peso aceptado, expresado en número decimal.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">AbsoluteMoneyCost</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Valor fijo de flete que se deberá cobrar, expresado en número decimal.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">En caso de que haya valores adicionales, el precio final que se cobre será el valor fijo sumado al valor adicional. 
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">PricePercent</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> <a href="https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV"> Adicional de precio</a>, calculado según el precio de los productos en el carrito y expresado en número decimal. Para rellenar la tabla, utilice el valor en porcentaje. Por ejemplo, para un 10% adicional, complete la tabla con el número 10.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> Utilice este campo en los casos en que haya un costo adicional en el precio de la entrega. Los <a href="https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV"> adicionales de flete </a> se suman al valor fijo.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">PriceByExtraWeight</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"><a href="https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Adicional por peso</a>, calculado según el peso del carrito, expresado en número decimal. 
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> Utilice este campo en los casos en que haya un costo adicional en el precio de la entrega. Los <a href="https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV"> adicionales de flete</a> se suman al valor fijo. Tenga en cuenta que la unidad de peso es la misma que se utiliza para rellenar los campos de <a href="https://help.vtex.com/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY">registro de SKU </a> (por ejemplo: gramo, kilogramo y oz).
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">MaxVolume</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Volumen máximo aceptado, expresado en número decimal.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> Tenga en cuenta que la unidad de volumen está relacionada con las dimensiones registradas en <a href="https://help.vtex.com/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY"> rellenar los campos de registro de SKU</a>. Por ejemplo, si las aristas (altura, anchura y longitud) están en centímetros, el campo <b>MaxVolume</b> debe estar en cm³.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">TimeCost</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Tiempo de entrega del pedido que emplea la transportadora, en formato <b>DD.HH:MM:SS</b>.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> Por ejemplo: si el tiempo para realizar la entrega es de 4 días y medio, el campo se debe completar de la siguiente forma: 04.12:00:00.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Country</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">País donde se realizará la entrega, se completa con el código ISO de 3 dígitos.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> Para consultar el código ISO del país, acceda a <a href="https://countrycode.org/">Country Codes</a>. Codes.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">MinimumValueInsurance</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"><a href="https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV"> Valor adicional de seguro</a>, configurado con un valor absoluto, expresado en número decimal.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> El valor registrado en el campo se añade al valor del flete. Sin embargo, solo se añadirá cuando el <a href="https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Adicional de precio</a> sea menor que el campo  <b>MinimumValueInsurance</b>. Vea <a href="https://help.vtex.com/en/faq/para-que-serve-o-campo-na-tabela-de-frete-minimum-value-insurance"> ¿Para qué sirve el campo Minimum Value Insurance?</a>.
            </td>
        </tr>
</tbody>
</table>

<div class="alert alert-info"> 
Para facilitar el uso de los términos en nuestra documentación utilizamos «peso» en vez de «masa». 
</div>  

Vea el siguiente ejemplo de cómo rellenar los campos, teniendo en cuenta el formato aceptado en cada columna. 

![modelo_planilhanumerica](https://images.ctfassets.net/alneenqid6w5/15Dc2cfsXWbIwSt2vypWN3/20628e9acf5336c3fefcc84d334c08ec/freight_-_Debora_Moreno.png)

## Enviar el archivo por el Admin VTEX

La plantilla es un archivo enviado por el Admin VTEX. Después de completar los campos, debe enviar el archivo por la plataforma en formato **.xls** o en formato comprimido **.zip**.

El envío de la plantilla se realiza en el registro o en la edición de la _Política de envío_. Para eso:

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío > Políticas de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.  
2. Haga clic en el botón `Crear política de envío` si desea utilizar una nueva política de envío o haga clic en el icono del lápiz ubicado al lado de una política de envío existente.
3. Después de descargar la plantilla modelo y [completar los campos](#completar-los-campos-de-la-plantilla), cargue el archivo en la sección Cargar tarifas de envío, como se ilustra en la siguiente imagen. 
4. Al finalizar, haga clic en `Guardar cambios`.

  ![upload tarifas envioES](https://images.ctfassets.net/alneenqid6w5/1qNl0ZaHhZMpshuBWRQhs9/b788e6926bffa8aa5a70db06ca1ccba7/upload_tarifas_envioES.png)

<div class="alert alert-warning">
Para registrar una <b>nueva</b> Política de envío se debe completar otros campos además de la plantilla de flete.  Aprenda cómo crear, editar y completar todos los campos necesarios en el artículo <a href="https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140">Política de envío</a>.
</div>

<div class="alert alert-danger">
Cada pestaña de la plantilla no debe superar las 65 536 filas. Se pueden crear varias pestañas en la misma plantilla, respetando el límite de filas. No hay un límite en el número de pestañas dentro del archivo. Sin embargo, el archivo no puede superar los 10MB. En caso de que sea necesario, comprima el archivo en formato <b>.zip</b>. Si esto no es suficiente, divídalo en dos archivos y registre otra política de envío para cargar el segundo archivo creado. 
</div>

Si hay algún problema al completar los campos del archivo enviado, recibirá un <i>_email</i>_ para informarle del error. Asegúrese de revisar si la plantilla se completó correctamente antes de hacer un nuevo intento de envío.

La carga y confirmación del registro de la plantilla puede tardar un poco, ya que es posible que el procesamiento del archivo no se produzca inmediatamente debido al volumen de información. 

