---
title: 'Configurar pagos personalizados '
id: 1wWt35dRwEboRs1nrSx7G0
status: PUBLISHED
createdAt: 2019-11-12T14:02:06.237Z
updatedAt: 2024-11-06T23:03:17.054Z
publishedAt: 2024-11-06T23:03:17.054Z
firstPublishedAt: 2019-11-25T15:33:37.696Z
contentType: trackArticle
productTeam: Financial
slugEN: how-to-configure-a-custom-payment
locale: es
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: pagos
---

El **medio de pago personalizado** es una alternativa a las opciones que ofrece por defecto el módulo de Pagos. 

Es posible personalizar pagos dentro de tres categorías: **Pagarés**, **Tarjetas de la Tienda (bandera propia)** y **Tarjetas de la Tienda (Co-Branded)**. 

Cada categoría permite 5 configuraciones, totalizando 15 posibles alternativas de pagos personalizados.

### Pagarés
Pagaré es una promesa de pago que necesita de aprobación manual del administrador de la tienda para aprobar la transacción. Se utiliza con frecuencia para realizar el pago a través de efectivo.

### Tarjetas de la Tienda (bandera propia)
Le permite usar una tarjeta de crédito con la propia bandera de la tienda. 

### Tarjetas de la Tienda (Co-Branded)
Le permite usar una tarjeta de crédito de la tienda con una de las siguientes banderas: Mastercard, Visa, Amex y Diners.

## Cómo configurar pagos personalizados   

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Acceda a la pestaña **Pagos personalizados**.
3. Seleccione una de las opciones de pago personalizado.
4. Complete los campos del formulario y haga clic en **Guardar**.

![PT Pagamento Customizado](//images.ctfassets.net/alneenqid6w5/2Pg4CTwaCjKH0iQvXgbSm9/b0bf041d2adfa1d0046d6f2f3b849948/PT_Pagamento_Customizado.gif)

Después de esta configuración, deberá crear la [Condición de pago](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento/).  

> _Recomendamos el **uso de la aprobación automática** apenas en los casos en que el pago se realice en el **momento de la entrega** o al **recoger en la tienda**. Esta opción autoriza el pago del pedido; es decir, el pedido pasa automáticamente al status de Preparando Entrega, sin la verificación del pago._
