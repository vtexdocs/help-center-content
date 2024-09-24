---
title: 'Gestionar tarifas de envío'
id: 2Pj1gKR80QIuUhc0orMraD
status: ARCHIVED
createdAt: 2019-10-23T14:48:44.609Z
updatedAt: 2022-03-08T18:43:48.534Z
publishedAt: 
firstPublishedAt: 2019-10-23T15:03:37.365Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: managing-shipping-rates
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

Para la correcta configuración de una nueva transportadora, es importante detallar uno de los puntos de la etapa anterior: el registro de la __plantilla de flete__.

Esta se utiliza para registrar los códigos postales atendidos, los valores cobrados, los rangos de peso considerados y los valores adicionales de cada transportadora.

![planilha-frete-pt](//images.ctfassets.net/alneenqid6w5/xwa6iEK6ekMSeLLEZhBZL/325dda4a071d57baaf8dd8e3299cec41/planilha-frete-pt.png)

## Cómo crear la plantilla 

Después de que la tienda cierra el contrato con una trasportadora, normalmente informa los rangos de código postal y peso que están incluidos  en el contrato, relacionados con los precios y adicionales de flete. Con estas informaciones ya definidas, basta rellenar cada uno de los campos de la plantilla, como se explica a continuación.

- **ZipCodeStart**: Inicio del intervalo del rango del código postal.
- **ZipCodeEnd**: Fin del intervalo del rango del código postal.
- **PolygonName**: Identificación del polígono definido en la función de [geolocalización](/pt/tutorial/gerenciar-geolocalizacao).
- **WeightStart**: Inicio del intervalo de peso, **en gramos**. Tenga en cuenta que la unidad de peso es la misma que se utiliza para rellenar los [campos de registro de SKU](https://help.vtex.com/es/tutorial/campos-de-registro-de-sku--21DDItuEQc6mseiW8EakcY).
- **WeightEnd**: Fin del intervalo de peso, **en gramos**Tenga en cuenta que la unidad de peso es la misma que se utiliza para rellenar los [campos de registro de SKU](https://help.vtex.com/es/tutorial/campos-de-registro-de-sku--21DDItuEQc6mseiW8EakcY).
- **AbsoluteMoneyCost**: Precio absoluto del flete a cobrar; es decir, siempre se cobrará al menos ese valor.
- **PricePercent**: [Valor adicional de flete](https://help.vtex.com/pt/tutorial/como-funciona-o-adicional-de-frete), de acuerdo con el precio del carrito. [Entienda cómo se configuran los adicionales de flete](https://help.vtex.com/pt/tutorial/como-configurar-o-adicional-no-frete).
- **PriceByExtraWeight**: [Valor adicional de flete](https://help.vtex.com/pt/tutorial/como-funciona-o-adicional-de-frete), de acuerdo con el peso **en gramos** del carrito. [Entienda cómo se configuran los adicionales de flete](https://help.vtex.com/pt/tutorial/como-configurar-o-adicional-no-frete).
- **MaxVolume**: Volumen de peso máximo **en centímetros** para ser transportado por la transportadora.
- **TimeCost**: Tiempo de entrega del pedido por la transportadora, en formato __DD.HH:MM:SS__.
- **Country**: País donde se realizará la entrega. Debe completarse con el  [código ISO de 3 dígitos del país](https://countrycode.org/).
- **MinimumValueInsurance**: Es un adicional de flete con valor absoluto, que será comparado con el valor registrado en PricePercent y multiplicado por el valor del carrito. El valor mayor será el que se agregue al flete. Siempre se agregará al flete apenas uno de los dos. Ver más en [¿Para qué sirve el campo Minimum Value Insurance?](/pt/faq/para-que-serve-o-campo-na-tabela-de-frete-minimum-value-insurance).

>⚠️ **OBS:** Si la plantilla tiene más de 10 MB, deberá comprimirla en un formato <fuerte>.zip</strong>. Este archivo.zip también debe tener menos de 10 MB para que la carga funcione. Si el archivo sigue excediendo el límite, recomendamos dividir la plantilla entre más de una transportadora.

## Gestionar las tarifas de envío fuera de la plantilla

Aunque el registro de las tarifas de envío de una transportadora se realiza por plantilla, usted puede manipularlas en la sección __Tarifas de Envío__, dentro de Inventario y Envío, en el menú del Admin.

### Cómo buscar

1. Rellene el campo **Código Postal**.
2. Seleccione una transportadora.
3. Haga clic en el botón **Buscar**.

### Cómo editar

1. Rellene el campo **Código Postal**.
2. Seleccione una transportadora.
3. Haga clic en el botón **Buscar**.
4. Haga clic en el ícono de editar.
5. Altere los valores deseados.
6. Haga clic en el botón **Guardar**.

### Cómo excluir

1. Rellene el campo  **Código Postal**.
2. Seleccione una transportadora.
3. Haga clic en el botón **Buscar**.
4. Haga clic en el botón con el ícono **x**.

### Cómo registrar

1. Haga clic en el botón **Nuevo Valor de Flete**.
2. Rellene los campos. Son los mismos campos presentes en la plantilla registrada en la transportadora.
3. Haga clic en el botón **Guardar**.
