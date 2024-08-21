---
title: 'Configurar pago con iugu'
id: 2c1nAo5iR6jG1UySzRB89t
status: PUBLISHED
createdAt: 2022-03-31T18:58:08.146Z
updatedAt: 2024-03-13T11:53:59.094Z
publishedAt: 2024-03-13T11:53:59.094Z
firstPublishedAt: 2022-03-31T19:22:31.835Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-iugu
locale: es
legacySlug: configurar-pago-con-iugu
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

[iugu](https://partnerportal.vtex.com/iugu-156/p) es una solución en asociación con VTEX que proporciona las siguientes opciones de pago a través de [checkout transparente](https://help.vtex.com/es/tutorial/que-es-el-checkout-transparente--2Y4ECegUmcYUggmck2GOwe): tarjeta de crédito, pix y boleto bancario. Además, es posible realizar [operaciones de recurrencia](https://help.vtex.com/es/tutorial/configurar-recurrencia-en-condiciones-de-pago--6EGuoAytLqU2CqUuaI2GUW) y [split de pagos](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) (cobros y transacción) entre marketplaces.

Para agregar iugu a tu tienda, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __iugu__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En los campos __Clave de aplicación__ y __Token de aplicación__, ingrese la información proporcionada por iugu ([ID da conta y Chave API](https://dev.iugu.com/docs/configurando-conector-iugu-na-vtex#localizando-id-da-conta-e-chave-api-no-painel-da-iugu)).
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor iugu en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Si desea utilizar el boleto bancario como medio de pago, en __Campos del proveedor__, complete el campo __Prazo de vencimento do boleto(em dias)__ con el mismo valor configurado en su área de clientes en el portal iugu.
8. Haga clic en `Guardar`.

## Configurar condiciones de pago

Para procesar métodos de pago con tarjeta de crédito, pix y boleto bancario con iugu en su tienda, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en el método de pago deseado (bandera de la tarjeta de crédito, pix o boleto bancario).
4. Complete el campo __Nombre de la condición__ con un nombre de su elección para identificación.
5. Active la condición en el campo __Status__.
6. En __Procesar con proveedor__ seleccione la opción iugu.
7. Para pagos con tarjeta de crédito, seleccione si desea utilizar un sistema antifraude seleccionando la opción __Utilizar antifraude__. También es posible configurar si se deben realizar pagos con tarjeta de crédito [a vista o en cuotas (con o sin interéss)](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#a-vista).
8. Si desea, puede configurar [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
9. Haga clic en `Guardar`.

Después de seguir los pasos indicados, el proveedor iugu puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

>⚠️ Antes de realizar transacciones con tarjeta de crédito, pix o boleto bancario con iugu en tu tienda, verifica si estos métodos de pago ya están habilitados en [tu área de clientes en el portal iugu](https://dev.iugu.com/docs/configurando-conector-iugu-na-vtex#configurando-condi%C3%A7%C3%B5es-de-pagamento).

## Configurar el split de pago en marketplace con iugu

Para procesar pagos en [marketplace con split de pago](https://help.vtex.com/es/tutorial/pagos-en-los-marketplaces-vtex--2kYOfWCZYweJkYl18bw9yD#split-de-pagos) en iugu es necesario registrar sellers de tu tienda con el mismo CNPJ (número de identificación del vendedor) en el VTEX Admin y en tu área de clientes en el portal iugu. 

Obtenga más información sobre cómo crear sellers en VTEX en [Agregar seller](https://help.vtex.com/es/tutorial/agregar-seller--tutorials_392) y acceda a la documentación de iugu para crear subcuentas (sellers) a través de [área de cliente ](https://support.iugu.com/hc/pt-br/articles/4411276874779-Como-criar-uma-subconta-pelo-painel-iugu-) o [API](https://dev.iugu.com/docs/configurar-subconta-por-api). 

### Habilitar split de cobros con iugu

Para habilitar el split de cobros con iugu en su tienda, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. Escriba el nombre __iugu__ en la barra de búsqueda y haga clic en el nombre del proveedor.
3. En __Detalles__, haga clic en el botón `Editar`.
4. En __Control de pago__, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
5. Haga clic en `Guardar`.

>⚠️ La opción de split de cobros no está disponible para su uso en un entorno de prueba.

Luego de seguir los pasos indicados, la funcionalidad de split de cobros con el proveedor iugu puede tardar hasta 10 minutos en activarse en tu tienda.

>⚠️ Para definir comisiones específicas para cada seller de su tienda, acceda a  **Marketplace > Sellers> Gestión** en el Admin de VTEX, seleccione el vendedor deseado e ingrese los valores de las comisiones en **Comisiones**.

## Configurar la recurrencia con iugu

Para que [recurrencia](https://help.vtex.com/es/tutorial/configurar-recurrencia-en-condiciones-de-pago--6EGuoAytLqU2CqUuaI2GUW) esté disponible como condición especial de pago a través de iugu, es necesario:

- Habilite el modo recurrencia en el VTEX Admin.
- Configurar métodos de pago con tarjeta de crédito o boelto bancario en VTEX Admin e iugu.
- Configura la funcionalidad [suscripciones](https://help.vtex.com/es/tutorial/como-configurar-suscripciones--1FA9dfE7vJqxBna9Nft5Sj) en tu tienda.
