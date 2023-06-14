---
title: 'Importar y exportar plantilla de stock'
id: tutorials_2034
status: PUBLISHED
createdAt: 2017-04-27T21:55:43.488Z
updatedAt: 2023-03-29T14:51:46.368Z
publishedAt: 2023-03-29T14:51:46.368Z
firstPublishedAt: 2017-04-27T23:03:50.695Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: importando-y-exportando-plantilla-de-stock
legacySlug: importando-y-exportando-plantilla-de-stock
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Antes de realizar la importación del almacén, debe exportar la plantilla. Incluso si aún no tiene ningún almacén registrado, es a partir de la exportación que obtendrá la plantilla en el modelo correcto de importación. Al realizar el siguiente procedimiento, usted recibirá por correo electrónico un archivo que contiene la plantilla exportada.

## Como exportar un almacén

1. En el Admin VTEX, accede a **Envío > Estratégia de Envío**, o escribe *Estratégia de Envío* en la barra de búsqueda en la parte superior de la página.    
2. Haga clic en la pestaña **Almacenes**.  
3. Haga clic en el botón `:` al lado de *Crear almacén*.  
4. Haga clic en la opción **Exportar artículos**.  
5. Luego de esta acción, en algunos minutos recibirá un mail con el archivo exportado.  

Si tiene más de un almacén registrado, esta misma acción también le permite exportar una plantilla con todos los ítems de los almacenes registrados en su tienda al mismo tiempo. Si el archivo es muy grande, este se dividirá en más de una plantilla. También recibirá por correo electrónico los enlaces correspondientes de cada plantilla.

## Cómo importar un almacén

1. En el Admin VTEX, accede a **Envío > Estratégia de Envío**, o escribe *Estratégia de Envío* en la barra de búsqueda en la parte superior de la página.    
2. Haga clic en la pestaña **Almacenes**.  
3. Haga clic en el botón `:` al lado de *Crear almacén*.  
4. Haga clic en la opción **Importar artículos**.  
5. Escoja un archivo de su computadora, y arrástrelo hacia la pantalla.   
6. Haga clic en **Importar**.  

<div class=”alert alert-warning”>
Si no se respetan estas indicaciones, es posible que el sistema no acepte la importación de la plantilla o que el número de ítems en venta sea incorrecto.
La importación del almacén sobrescribirá los valores actuales de su almacén registrado. Solo haga la importación si desea reemplazar los datos de los SKUs registrados en el Admin, con la información contenida en el archivo .xls.
</div>

Por medio de la plantilla de almacén, es posible ingresar de forma masiva la cantidad de SKUs para cada almacén de su tienda. Importar una plantilla de almacén es la forma más simple de ingresar la cantidad de cada SKU en su tienda de forma masiva.

De esta manera, cada fila de la plantilla se refiere a un SKU por almacén. Es decir, si el mismo SKU está en más de un almacén, aparecerá una vez para cada uno de estos almacenes.  La plantilla contempla todos los almacenes y las variaciones de productos registrados en su tienda.

Esta importación se realiza utilizando la plantilla de Excel en formato .xls (opción Excel 97-2003 Workbook), cuyo modelo es el mismo que se ha exportado anteriormente. Si su archivo tiene más de 10 MB, es necesario utilizar el archivo comprimido con la extensión .zip.

Además, hay dos reglas para rellenar de forma correcta la plantilla. Estas son:

- Cada columna de la plantilla debe contener un número o un texto.
- La actualización de la cantidad de SKUs debe hacerse solo en la columna de TotalQuantity.

## Campos de registro de la plantilla de almacén 

A continuación, vea el significado de cada campo en la plantilla de almacén.

- **SkuId** (texto): ID del SKU.  
- **TotalQuantity** (número): cantidad de unidades del SKU.  
- **ReservedQuantity** (número): se completa automáticamente cuando se exporta la plantilla. Considera la cantidad de SKUs que se reservaron en las compras.   
- **AvailableQuantity** (número): se completa automáticamente cuando se exporta la plantilla. Cantidad del SKU disponible para la venta. Se calcula considerando la cantidad total menos la cantidad reservada.  
- **WarehouseId** (texto): ID del almacén, tal y como se registró en el módulo de estrategia de envío.  
- **WarehouseName** (texto): nombre del almacén, tal y como se registró en el módulo de estrategia de envío.  
- **RefId** (texto): código de referencia del SKU.  
- **IsActive** (texto): indica si el SKU está activo (`true`) o inactivo  (`false`) en el catálogo.  
- **UnlimitedQuantity** (texto): indica si el stock del SKU se ha definido como stock infinito (true) o no (false).  
- **LockIds** (texto): código identificador de la reserva.  
- **DispatchedReservations** (número): número de ítems del SKU que ya pasaron al status `Listo para preparar`, es decir, cuyas reservas ya se pagaron.  

<div class = "alert alert-info">
  Para incluir un artículo con stock infinito, debe rellenar el campo <b>TotalQuantity</b> con el valor <code>1000000</code> y cambiar el campo <b>UnlimitedQuantity</b> a <code>True</code>. 
</code>
