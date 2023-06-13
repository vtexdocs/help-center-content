---
title: Gestionar cuentas en Customer Credit
id: 4eknoeqaj6EGC20amsm6Gc
status: PUBLISHED
createdAt: 2018-11-06T21:15:25.330Z
updatedAt: 2023-05-12T12:21:21.583Z
publishedAt: 2023-05-12T12:21:21.583Z
firstPublishedAt: 2018-11-07T17:10:45.883Z
contentType: trackArticle
productTeam: Financial
slug: administrando-cuentas
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugES: customer-credit-como-empezar
---

La pantalla de Detalles de la Cuenta trae todo lo que usted necesita saber sobre una cuenta y su configuración.

## Límite de crédito 

El límite de crédito indica el valor máximo de títulos abiertos que un cliente puede tener en un momento dado. Establecerlo es obligatorio y el super Admin de la cuenta puede cambiar ese valor tantas veces como desee.

Además, recuerde que los cambios en el límite de crédito se actualizan en pocos minutos en el sistema.

## Títulos

El título es el documento que se genera cuando un cliente cierra una compra utilizando Customer Credit como medio de pago. 

Cuando se trata de compras en cuotas, los títulos se refieren al número de cuotas. Es decir, si el cliente escogió hacer un pago en 10 cuotas, el sistema calculará 10 títulos relacionados con el mismo pedido.

Independientemente del medio de pago, todos los títulos del sistema pueden ser visualizados y gestionados por el Admin y, al igual que las cuentas, también pueden exportarse y editarse de forma masiva. 

### Status de un título
Hay cuatro posibles status para los títulos.

Estos son:

- Abierto.
- Pagado. 
- Vencido.
- Cancelado. 

Cabe mencionar que un título siempre se crea con el status de abierto y, dependiendo de  acciones realizadas en el Admin o de llamadas de API, puede pasar al status de Pagado o Cancelado.

### Liquidación de títulos
La forma en que los títulos serán liquidados debe ser controlada por la tienda.

Una de las opciones para la liquidación de títulos es generar un enlace de pago. En este caso, una vez configurado, el cliente verá un botón "Pagar" junto al título en la pantalla Mis Créditos, que lo llevará al enlace indicado. 

Además, se pueden añadir enlaces de pago mediante un archivo CSV por el Admin o vía  API. 

De esta manera, después de recibir el pago por un título, solo hay que marcarlo como pagado en nuestro sistema. Esto puede hacerse de tres maneras: individualmente, de forma masiva o por API. 

#### Liquidación individual

Liquidar un título por el Admin es bastante simple. 

Los pasos son:

1. Acceda al __Admin__.
2. Haga clic en el módulo __Customer Credit__.
3. Luego, haga clic en la sección __Títulos__.
4. Seleccione el __título__ que desea editar.
5. Haga clic en el botón azul __"Marcar"__ como pagado.

De esta manera, el título cambiará su status a "Pagado".

#### Liquidación masiva 
Si su cuenta tiene muchos títulos como abiertos, no es factible cambiar el status de cada uno individualmente. 

De esta manera, se puede utilizar el recurso de liquidación masiva, un proceso muy similar al de actualización masiva de cuentas. El principio es el mismo: importar un archivo CSV con los nuevos datos en el Admin. 

En este caso, debe cambiar los valores de la columna status de "Abierto" a "Pagado" y guardar los cambios.

A continuación, realice el procedimiento:

1. Acceda al __Admin__.
2. Haga clic en el módulo __Customer Credit__.
3. Haga clic en la sección __Títulos__.
4. Luego, haga clic en el botón __“Actualización masiva”__.
5. Haga clic en el botón __“Escoger archivo”__.
6. Seleccione el archivo __CSV deseado__.

Espere que se cargue la plantilla y los todos títulos serán liquidados al mismo tiempo.

#### Liquidación por API

Para liquidar un título por medio de una API, puede utilizar el [endpoint](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId- "endpoint") `PUT Change Invoice`. Esta API sirve para cambiar el status de un título, no solo para liquidarlo.

Rellene el body con la siguiente información:

```json
{
"status": "string [Opened | Cancelled | Paid] (optional)", "observation": "string (optional)",
"paymentLink": "string (URL) (optional)"
}
```

Para más detalles, consulte nuestra [documentación técnica sobre Customer Credit](https://developers.vtex.com/docs/guides/customer-credit-api-overview "documentación ténica sobre Customer Credit.").

## Dependientes adicionales

De acuerdo con las reglas de su negocio, puede compartir el límite de crédito de sus cuentas con otros usuarios.

Esta funcionalidad le permite registrar nuevos dependientes para una cuenta. Estos a su vez podrán compartir el mismo crédito disponible para pagar las compras en el  SmartCheckout.

Para registrar nuevos dependientes en una cuenta, siga el procedimiento:

1. Acceda al __Admin__.
2. Haga clic en el módulo __Customer Credit__.
3. Luego haga clic en la sección __Cuentas__.
4. Seleccione la __cuenta__ que desea editar.
5. En la parte final de la página, haga clic en el botón azul __"Nuevo"__.
6. Rellene el campo en blanco con el __Email__ del nuevo dependiente.
7. Haga clic en el botón azul __"Confirmar"__.

Esto hará que el dependiente recién agregado se muestre en el box de dependientes adicionales de esa cuenta.
