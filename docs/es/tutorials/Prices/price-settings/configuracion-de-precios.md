---
title: 'Configuración de precios'
id: 3hbBtCzNUBrj8GaWgCtSWN
status: PUBLISHED
createdAt: 2020-10-14T18:43:49.750Z
updatedAt: 2024-10-14T19:01:25.144Z
publishedAt: 2024-10-14T19:01:25.144Z
firstPublishedAt: 2020-10-22T19:38:48.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: prices-settings
legacySlug: configuracion-de-precios
locale: es
subcategoryId: 3O1NvPgBPqE0qU88MSQaie
---

La página **Configuración de la tienda > Productos > Configuración de precios** en el Admin VTEX le permite cambiar la configuración general de los precios de forma rápida y sencilla.

Usted puede definir el markup estándar y el límite de variación de precio de su tienda. También puede heredar los precios de la cuenta padre y sobrescribir los precios de sellers con los de su cuenta. 

Consulte los ajustes disponibles a continuación:

- **Markup estándar para nuevos precios:** porcentaje de lucro estándar sobre un nuevo precio registrado en un producto o servicio.
- **Usar límite de variación de precio:** asegura que los precios de los SKUs no se cambien a valores no deseados.
  - **Reducción máxima:** mayor reducción en el precio de un SKU.
  - **Aumento máximo:** mayor aumento en el precio de un SKU. 
- **Heredar precios de cuenta padre:** opción que permite que la cuenta actual herede precios de una cuenta padre. La herencia de precios se realiza en las siguientes situaciones: 
  - **Siempre:** la cuenta siempre heredará todos los precios de la cuenta padre. 
  - **Solo para precios inexistentes:** los precios de la cuenta padre se heredan solo si los precios de la cuenta actual son inexistentes. 

  <div class="alert alert-info">
    <p>La configuración <b>Heredar precios de la cuenta principal</b> está disponible solo para cuentas secundarias. La cuenta principal se define cuando se crea la cuenta secundaria. Asegurarse de que la cuenta principal asociada sea la correcta ayuda a evitar problemas relacionados con los precios o la disponibilidad de stock.</p>
</div>

- **Sobrescribir precios de sellers:**  esta opción sobrescribe todos los precios de sellers con los de la cuenta actual.

  <div class = "alert alert-info">
    <p>La configuración <b>Sobrescribir precios de sellers</b> no está disponible para sellers White label.</p>
  </div>

## Consultar la Cuenta-Padre asociada
Para consultar la cuenta-padre vinculada a una cuenta-hija, utilice la siguiente URL, sustituyendo {AccountName} por el nombre de la cuenta-hija que desea consultar:

```
http://{AccountName}.myvtex.com/api/vlm/account
```

Al acceder a esta URL, la API devolverá un resultado con varias informaciones sobre la cuenta. Para identificar la cuenta-padre asociada, localice el campo `accountName` en la respuesta de la API. Este campo contiene el nombre de la cuenta-padre vinculada a la cuenta-hija consultada.
