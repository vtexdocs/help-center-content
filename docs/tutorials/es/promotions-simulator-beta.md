---
title: 'Simulador de Promociones (Beta)'
id: 4zc8SNqjqeIJ0ZRMhjlnvy
status: PUBLISHED
createdAt: 2022-09-13T21:22:59.620Z
updatedAt: 2022-09-27T19:37:29.437Z
publishedAt: 2022-09-27T19:37:29.437Z
firstPublishedAt: 2022-09-13T22:59:58.058Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: simulador-de-promociones-beta
locale: es
legacySlug: simulador-de-promociones-beta
subcategory: 6iTRZiMeCGXYiO2ckABFZi
---

<div class = "alert alert-info">
Este módulo se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarlo. Si tienes alguna duda, ponte en contacto <a href="https://help.vtex.com/es/support">con nuestro Soporte. </a>
</div>

<div class = "alert alert-warning">
Los usuarios deben tener un <a href="https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc">rol</a> con permisos para ver el módulo Promociones en el Admin VTEX para poder acceder al Simulador de promociones.
</div>

El **Simulador de promociones** es una herramienta que permite ver las promociones creadas en la plataforma VTEX que se aplicaron al carrito y sus condiciones de activación. Como las promociones pueden configurarse de diversas maneras, es importante poder ver la [competencia](https://help.vtex.com/es/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270), la acumulación de promociones durante la compra y las causas de activación de dichas promociones.

Al usar el simulador, tendrás autonomía para gestionar las promociones de tu tienda y dirigirlas según tu estrategia de negocio.

También puedes [gestionar promociones]((#gestionar-promociones)) qque estén activas o inactivas, haciendo clic en el botón `Gestionar promociones`.

La interfaz del simulador cuenta con cinco columnas:

| **Columnas** |**Descripción**| 
| ----------- | ------------- |
| **Producto** | Lista de los productos en el carrito |
| **Preceio** | Precio anterior (De) y precio final (Por) de la promoción aplicada |
| **Cantidad** | Cantidad de ítems en el carrito |
| **Total** | Precio total que se cobrará por el producto, considerando los descuentos de la promoción y la cantidad de ítems |
| **Descuento** | Status del descuento en el carrito, el cual puede ser: `Aplicado` ou `No aplicado`. El status `Aplicado` indica que al menos una promoción fue aplicada al producto |

<div class = "alert alert-info">
En la esquina derecha de la pantalla, encontrarás un botón megáfono <i class="fas fa-bullhorn"></i> que te permitirá enviar tu opinión sobre tu experiencia usando el <b>Simulador de promociones</b>.
</div>

Para aprovechar los beneficios de esta funcionalidad, dividimos este artículo en dos partes:

- [Acceder al Simulador de promociones](#acceder-al-simulador-de-promociones)
- [Gestionar promociones](#gestionar-promociones)

## Acceder al Simulador de promociones

Para acceder a esta funcionalidad, primero debes [configurar Cartman](https://help.vtex.com/es/tutorial/configurar-o-cartman--1ACMTStZYkMqB0lTgwg451), una herramienta que simula, comparte e investiga carritos de tiendas VTEX.

Al entrar al simulador, verás una lista con los productos en tu carrito. Podrás ver todas las promociones que pueden aplicarse en cada uno de los ítems, junto con una casilla de selección <i class="fas fa-check-square"></i> en la promoción aplicada.

La herramienta cuenta con una barra de búsqueda para encontrar promociones por nombre de producto o por nombre de promoción. Además, puedes filtrar las promociones por **Tipo de promoción** y **Descuento**.

Al hacer clic en cada producto, podrás ver más información sobre las promociones que se pueden aplicar, detalles de tu selección y la condición para activarlas.

![simuladordepromocoes acessar](https://images.ctfassets.net/alneenqid6w5/7piR33ciR1x0givnQyxbk7/cdb47a1c812d3fa244aeb6127be100ee/simuladordepromocoes_acessar.gif)

Una vez configurado Cartman, sigue los pasos a continuación para acceder al Simulador de promociones:

1. Accede al carrito de compras de tu tienda VTEX.
2. Agrega los productos que deseas probar.
3. En el carrito de compras, abre `Cartman`. 
4. Haz clic en la opción **Ver detalles de la promoción**.
5. Se mostrarán las promociones aplicadas en el carrito. Para obtener más detalles de las promociones, haz clic en `Ver detalles.`.
  > Serás redireccionado al **Simulador de promociones**. Al entrar al simulador, verás una lista con los productos en tu carrito. Podrás ver todas las promociones que pueden aplicarse en cada uno de los ítems, junto con una casilla de selección en la promoción aplicada.
6. Si cambias los productos en el carrito, haz clic en `Actualizar` para cargar la nueva información.

### Editar promoções

Para editar una promoción, sigue los pasos a continuación:

1. En el **Simulador de promociones**, selecciona un producto.
2. Haz clic en el nombre de la promoción que deseas editar.
  > Serás redireccionado al formulario de la promoción.
3. Edita los [campos de la promoción](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#quais-os-dados-gerais-desta-promocao).
4. Al terminar de realizar los cambios, haz clic en `Guardar`.

## Gestionar promociones

Si deseas simular una nueva promoción o gestionar las promociones existentes, debes hacer clic en el botón `Gestionar promociones`, ubicado en la esquina superior derecha de la página.

Podrás ver todas las promociones activas, pausadas, programadas o completadas en el carrito. De esta manera, podrás probar un estado futuro de la tienda.

![simuladordepromocoes gerenciar](https://images.ctfassets.net/alneenqid6w5/6J3Bp4YcEZ6V5cgVj4dnhM/c0a6896fcec1bb0cf3bbc6ea3362d19f/simuladordepromocoes_gerenciar.gif)

Para probar una promoción, sigue los pasos a continuación:

1. En el **Simulador de promociones**, haz clic en `Gestionar promociones`.
2. Selecciona una o más promociones, sin importar su status.
3. Haz clic en el botón `Probar`.

Para ver si se aplicó la promoción que probaste, mira el status de la columna **Descuento** o haz clic en el producto para obtener más detalles.

<div class = "alert alert-info">
Se pueden aplicar promociones en productos que ya tienen una promoción activa. A pesar del conflicto que se genera entre las promociones, el sistema de VTEX siempre elegirá la promoción más beneficiosa para los clientes de tu tienda, considerando el precio total de los ítems o el envío.
</div>

### Learn more

 * [Cómo funcionan las promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)
 * [Promociones para escenarios específicos](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy)
 * [Configure Cartman](https://help.vtex.com/es/tutorial/configurar-o-cartman--1ACMTStZYkMqB0lTgwg451)
