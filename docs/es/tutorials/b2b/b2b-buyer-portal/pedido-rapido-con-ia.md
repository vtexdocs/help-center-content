---
title: 'Pedido rápido con IA'
createdAt: 2026-10-02T00:00:00.000Z
updatedAt: 2026-11-06T00:00:00.000Z
contentType: tutorial
productTeam: B2B
slugEN: ai-quick-order
locale: es
---

**Pedido rápido con IA** usa el **Agente de creación de pedidos** para montar el pedido a partir de un archivo o de una conversación en el chat. El agente interpreta el contexto sin depender de un modelo fijo.

> ⚠️ Esta funcionalidad se encuentra disponible solo para cuentas seleccionadas entre las tiendas que usan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es).

## Hacer un pedido a partir de un archivo

Para montar un pedido a partir de un archivo sigue estas instrucciones:

1. Inicia sesión en la tienda y accede a la ruta `/pvt/organization-account/order-entry`.

   En **¿Cómo prefieres comenzar?**, la pantalla del **Agente de creación de pedidos** ofrece las opciones **Enviar un archivo**, **Arrastrar y soltar un documento** y **Buscar productos por el chat**. Este artículo sigue el flujo por archivo, que puedes realizar enviando el archivo o arrastrando y soltando el documento. Con **Buscar productos por el chat** indicas al agente el nombre o el ID del SKU de los productos y las cantidades, como se describe en **Hacer un pedido por el chat**. La fila **Formatos admitidos** lista los formatos aceptados: `csv`, `xlsx`, `xls`, `txt` y `json`.
2. Envía el archivo haciendo clic en el ícono `+` o arrástralo al área del chat.

   El agente interpreta los elementos sin depender de un modelo de plantilla fijo. Sin embargo, el archivo debe contener alguna identificación de los productos (nombre o ID del SKU) y la cantidad de cada uno. Las filas sin ambiguedades se agregan al pedido automáticamente.
3. Si una fila corresponde a más de un producto el agente indicará el ítem con la insignia **Ambiguo**, el nombre extraído y la cantidad extraída. Después, selecciona una de las opciones:
   - `Elegir este producto (SKU …)`: elige uno de los productos encontrados y lo agrega al pedido.
   - `Buscar otro producto`: busca otro producto.
   - `Rechazar ítem`: rechaza el ítem.
   - `Revisar después`: deja el ítem para una revisión posterior.
4. Continúa la revisión hasta resolver todos los ítems pendientes.

   Se revisa un ítem por vez y el agente informa cuántos ítems están todavía pendientes. Al finalizar se informa que el pedido se ha montado y cuántos ítems se han agregado, incluidos los resueltos automáticamente y los elegidos durante la revisión.
5. En **Ítems**, revisa los **Detalles de la fila**, la **Cantidad**, el **Precio por unidad** y el **Subtotal** de cada ítem. El precio por unidad proviene del catálogo.

   El resumen también muestra el identificador del pedido, **Contrato**, **Creadores**, **Última actualización**, **Código promocional**, **Comentarios**, **Envío** y **Pago**. El botón `Checkout` permanece inactivo mientras el pedido no tenga ítems.
6. (Opcional) Cambia la cantidad de los ítems haciendo clic en `−` y `+`.
7. Haz clic en `Checkout`.

## Hacer un pedido por el chat

Para montar un pedido por el chat selecciona `Buscar productos por el chat` e ingresa el nombre o el ID del SKU de los productos y las cantidades deseadas. Sigue las instrucciones del **Agente de creación de pedidos**, incluyendo revisar los ítems y resolver posibles ambiguedades.

## Cotización

El **Agente de creación de pedidos** puede solicitar una cotización si la funcionalidad **Cotizaciones** está activa.

> ℹ️ Más información en **[B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es)**. El procesamiento que se lleva a cabo después de hacer clic en `Checkout` se describe en **[Buyer Portal Checkout](https://help.vtex.com/es/docs/tutorials/buyer-portal-checkout-es)**.
