---
title: 'Al colocar el código postal en la vista previa de envío del carro, se duplican las opciones de dirección para los clientes recurrentes.'
id: 4J8TMlhGmMtnHKXGES4qie
status: PUBLISHED
createdAt: 2023-12-20T21:36:52.612Z
updatedAt: 2023-12-20T21:36:53.238Z
publishedAt: 2023-12-20T21:36:53.238Z
firstPublishedAt: 2023-12-20T21:36:53.238Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: al-colocar-el-codigo-postal-en-la-vista-previa-de-envio-del-carro-se-duplican-las-opciones-de-direccion-para-los-clientes-recurrentes
locale: es
kiStatus: Backlog
internalReference: 956338
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Tenemos algunos problemas a la hora de colocar los códigos postales en el módulo **Previsualización de envíos** del carrito, algunos de ellos se describen en estos KIs:


- Ref. 1: [KI] Al pegar el código postal en el carrito de vista previa de envío a veces se devuelve un resultado nulo de la API
- Ref. 2: [KI] El campo de entrada de código postal de la vista previa de envío no está oculto

En este caso, lo que ocurre es que para los clientes que ya tienen direcciones registradas en su perfil (compradores recurrentes), al colocar un código postal en la Vista previa de envío ya utilizado en una compra anterior, en la API se está colocando una opción de dirección de entrega adicional (`shippingData.availableAddresses`), al avanzar por los pasos del Checkout y llegar a la selección de dirección (`/checkout/#/shipping`), resulta que en lugar de seleccionar la dirección correspondiente a dicho código postal, se abre una nueva opción de selección incompleta, y en algunos casos oculta, obligando al cliente a seleccionar una de la lista o complementar la "nueva" para llegar al siguiente paso.


##

## Simulación



1. Utilizar un usuario que ya ha realizado algunas compras y cuyo perfil tiene alguna dirección de entrega.
2. Añade algunos artículos al carrito y luego pasa por caja.
3. 3. En el carrito utilice la vista previa de envío para colocar un código postal de uno en su perfil.
  1. Intente revisar el `orderForm`, y busque el `shippingData.availableAddresses`.
  2. La dirección en su perfil aparecerá con un detalle clave, la dirección ya tiene el número de la calle (`shippingData.availableAddresses.[].number`)
  3. La nueva opción en el array que genera el problema no tiene el `number`, lo que la convierte en una opción de dirección incompleta.
4. Prueba a ir al paso de envío del checkout (`/checkout/#/shipping`) y verás que no puedes pasar al paso de pago si no completas la dirección seleccionada, o seleccionas otra de las opciones.



## Workaround


En el paso de envío del checkout, intente seleccionar la dirección deseada (fuerce la selección de una de las anteriores del cliente).






