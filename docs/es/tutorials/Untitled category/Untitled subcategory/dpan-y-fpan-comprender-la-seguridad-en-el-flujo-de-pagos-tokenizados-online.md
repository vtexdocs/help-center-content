---
title: 'DPAN y FPAN: comprender la seguridad en el flujo de pagos tokenizados online'
id: 3RM7RvhKZ057wja5xVEOqb
status: PUBLISHED
createdAt: 2023-06-19T16:55:51.107Z
updatedAt: 2023-06-26T13:27:44.965Z
publishedAt: 2023-06-26T13:27:44.965Z
firstPublishedAt: 2023-06-19T17:10:43.124Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: dpan-and-fpan-understanding-security-in-the-online-tokenized-payment-flow
locale: es
legacySlug: dpan-y-fpan-comprender-la-seguridad-en-el-flujo-de-pagos-tokenizados-online
subcategoryId: unknown-subcategory
---

Un token es una representación digital de un activo físico que tiene valor comercial. En el contexto de los pagos, la tokenización es un procedimiento de seguridad que permite proteger la información sensible de los clientes durante las transacciones con tarjeta de crédito o débito o cartera digital, como Apple Pay, Google Pay y Samsung Pay.

En primer lugar, es necesario comprender la siguiente información relacionada con las tarjetas:

- **PAN (Primary Account Number)**: número físico impreso en el anverso o reverso de una tarjeta de débito o crédito, utilizado para identificar al titular de la cuenta y a su entidad financiera emisora. Contiene entre 14 y 19 dígitos.

- **DPAN (Device Primary Account Number)**: versión tokenizada del PAN, utilizada en pagos por dispositivos móviles o carteras digitales. Este número está vinculado al dispositivo móvil del usuario (smartphone, smartwatch, tablet) y a la cuenta del titular de la tarjeta. 

- **FPAN (Funding Primary Account Number)**: identificación de la cuenta en la que se cargará el importe en una operación de pago. Se utiliza exclusivamente cuando la compra se realiza a través de carteras digitales o servicios que permitan elegir más de un medio de pago al mismo tiempo, como pagar con diferentes tarjetas de crédito o débito o cuentas bancarias.

A continuación, se muestra un ejemplo de flujo de pago utilizando tokens:

1. El cliente introduce la información de la tarjeta en un sitio web, una aplicación o en un datáfono, o utiliza una cartera digital como medio de pago en una compra.

2. El proveedor de pagos o el sistema de la cartera digital realiza una petición a la entidad financiera que emitió la tarjeta, solicitando la creación de un token que represente el PAN.

3. El banco genera el token (DPAN) y lo envía al proveedor de pagos o al sistema de la cartera digital. El PAN solo queda registrado en el sistema del banco.

4. Durante el procesamiento de la transacción, el proveedor de pagos envía el DPAN al banco, solicitando la autorización de la transacción. Cuando sea el caso, también se genera y envía el FPAN para la autorización de la transacción.

5. El banco comprueba el vínculo existente entre el DPAN y el PAN, y autoriza el pago. En caso de que se utilice FPAN, el banco también comprobará que el FPAN es válido y que la fuente de financiación (cuenta) tiene saldo suficiente antes de autorizar el pago. 

6. La transacción se completa y el administrador de la tienda recibe la confirmación del pago. Los datos físicos de la tarjeta (PAN) no se comparten ni con el administrador de la tienda ni con terceros, lo que reduce el riesgo de fraudes.
