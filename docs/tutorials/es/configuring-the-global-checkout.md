---
title: 'Configurar el checkout global'
id: tutorials_1929
status: DRAFT
createdAt: 2017-04-27T21:55:50.812Z
updatedAt: 2022-07-22T18:55:28.876Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:50.616Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slug: checkout-global-vtex-como-vender-para-otros-paises
locale: es
legacySlug: checkout-global-vtex-como-vender-para-otros-paises
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

El checkout global habilita su tienda vender para más de un país, de manera independiente al país de origen de su cuenta VTEX.

Para tener una experiencia completa con el Checkout Global, también es importante que su tienda se muestre en otros idiomas. Para obtener más información sobre esta configuración, visite nuestro artículo sobre [exhibir tienda en otro idioma](https://help.vtex.com/es/tutorial/exhibir-la-tienda-en-otro-idioma).

### Exhibir nuevos campos de documento y teléfono

Para exhibir las opciones para registro de documento y telefono con el patrón distinto del utilizado en el país actual de su tienda, 

1. En el menú lateral del Admin, acceda al __Checkout__.
2. Haga clic en el engrenaje del site que desea cambiar.
3. Acceda en la opción __Código__.
4. En Archivos, elija el archivo `checkout5-custom.css`.
5. Incluya el código abajo.
6. __Guardar__ el archivo.

```css
/* /files/checkout5-custom.css */

/* Muestra la opción de introducir un documento extranjero */
.document-box { display: block; }

/* Muestra la opción de introducir un teléfono internacional */
.phone-box { display: block; }
```

`.document-box { display: block; }` exhibe la opción de registrar un documento de otro país.

`.phone-box { display: block; }` exhibe la opción de registrar un teléfono internacional.

Dos nuevas opciones serán exhibidas en el checkout de la tienda:

- "No tengo CPF."
- "No tengo teléfono brasileño."

## Exhibir nuevas direcciones de envío y factura

### Envíos

Supones que tu queiras enviar para clientes en Reino Unido. Para eso, es necesario crear una transportadora para manejar envíos para ese país. En secuencia, incluya una nueva planilla de envío con la columna “Country” y con el valor “GBR”.

1. [Creación de nueva transportadora](/es/tutorial/gestionar-transportista/);
2. Crea, para la nueva transportadora, una planilla de envío con la columna “Country” con el código ISO de 3 digito del país deseado.

>ℹ️ El valor de la columna “Country” debe ser un código ISO de 3 digitos para países. Para consultar los códigos aceitos, sugerimos usar el sítio[https://countrycode.org/](https://countrycode.org/).

Después de la configuración de envío para los países que desea, un nuevo campo será exhibido en el formulario de envío en el checkout de la tienda, permitiendo al usuario elegir la opción de envío internacional deseada.

### Facturas

Al desmarcar la opción "Mi dirección de factura es la misma que la de entrega", el usuario puede ingresar una nueva dirección de factura entre los países disponibles para envío. Sin embargo, nada impide que este usuario tenga una tarjeta de crédito internacional de otros países que no estén disponibles en su tienda.

Para permitir la facturación de una tarjeta de crédito cuya dirección de factura está en otro país, debe hacer que en la página de su tienda aparezca un campo de selección de país en "Dirección de factura".

La visualización de todos los países en el campo *Dirección de factura* se puede activar en el layout de su tienda (CSS) con el siguiente código:

```css
/* Show all countries */
.CountrySelector--all-countries { display: block; }
/* Hide delivery countries */
.CountrySelector { display: none; } 
```

