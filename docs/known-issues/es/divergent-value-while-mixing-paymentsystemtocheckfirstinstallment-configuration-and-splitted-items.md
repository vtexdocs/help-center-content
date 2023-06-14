---
title: 'Valor divergente al mezclar la configuración "paymentSystemToCheckFirstInstallment" y partidas divididas'
id: 3h2o69kTBqFdQlzhED2kMN
status: PUBLISHED
createdAt: 2023-03-07T18:35:31.215Z
updatedAt: 2023-03-07T20:06:30.491Z
publishedAt: 2023-03-07T20:06:30.491Z
firstPublishedAt: 2023-03-07T18:35:31.660Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: valor-divergente-al-mezclar-la-configuracion-paymentsystemtocheckfirstinstallment-y-partidas-divididas
locale: es
kiStatus: Backlog
internalReference: 766454
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la cuenta tiene configurado "paymentSystemToCheckFirstInstallment" en orderForm Configuration, el cálculo de pago enviará dos peticiones al módulo de promociones. Si hay artículos divididos en el carrito (por ejemplo, promoción Más por Menos), la primera petición enviará los artículos correctamente, pero la segunda enviará los artículos divididos en función de la aplicación de la promoción.

Combinando esa promoción con una promoción normal restringida al mismo método de pago configurado en "paymentSystemToCheckFirstInstallment". Verá valores diferentes en la respuesta del módulo de promociones, y un valor de interés en los totalizadores en la UI de Checkout, no permitiéndole finalizar la compra y el mensaje "Payment value doesn't match with requested value".

Notamos este comportamiento para métodos de pago que tienen sólo 1 cuota por defecto, por ejemplo, PIX, "Boleto Bancário" o Promissory.


##

## Simulación



- Configure "paymentSystemToCheckFirstInstallment" en la configuración de orderForm;
- Configurar una promoción Más por Menos;
- Configurar una promoción regular restringida al mismo método de pago configurado en "paymentSystemToCheckFirstInstallment": PIX o Boleto;
- Montar un carrito y seleccionar el método de pago configurado en "paymentSystemToCheckFirstInstallment";
- Podrá ver el valor de los intereses en los totalizadores de la interfaz de usuario de Checkout.


##

## Workaround


N/A



