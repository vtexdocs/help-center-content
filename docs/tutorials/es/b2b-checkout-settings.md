---
title: 'B2B Checkout Settings'
id: u7wG1SjmeCqXCSF2UsVok
status: PUBLISHED
createdAt: 2024-07-26T14:09:31.973Z
updatedAt: 2024-07-26T19:06:26.485Z
publishedAt: 2024-07-26T19:06:26.485Z
firstPublishedAt: 2024-07-26T18:46:07.935Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slug: b2b-checkout-settings-es
locale: es
legacySlug: b2b-checkout-settings-es
subcategory: 6sgdAY3pCuZ7qNws6gnzDX
---

La aplicación **B2B Checkout Settings** forma parte de la solución [B2B Suite](https://help.vtex.com/es/tutorial/b2b-suite-visao-geral--5eG6UfveWrai7looK0kVG3) de VTEX, una colección de aplicaciones que permiten a las tiendas gestionar organizaciones, roles y permisos de storefront, así como la configuración del checkout para relaciones comerciales B2B.

Las transacciones B2B (business-to-business) son más complejas que las B2C (business-to-consumer). Las empresas B2B suelen tratar con:

- Pedidos de gran volumen.
- Contratos personalizados.
- Condiciones de pago específicas.
- Una gama diversificada de clientes.

En el comercio B2B es necesario ofrecer opciones personalizadas durante el checkout. Estas personalizaciones incluyen:

- Disponibilizar medios de pago para cada organización o centro de costos.
- Direcciones predefinidas.
- Agregar un campo para ingresar número de orden de compra.
- Ofrecer la opción de crear una cotización de pedido antes de realizar una compra real.

La aplicación **B2B Checkout Settings** complementa otras aplicaciones de [B2B Suite](https://help.vtex.com/es/tutorial/b2b-suite-visao-geral--5eG6UfveWrai7looK0kVG3#aplicativo-configuracoes-de-checkout-b2b) para ampliar la experiencia de checkout a usuarios que son miembros de una organización.

## Roles de Checkout
Esta aplicación verifica automáticamente los roles de los usuarios que forman parte de la organización y se comunica con la aplicación [B2B Organizations](https://help.vtex.com/es/tutorial/b2b-suite-overview--5eG6UfveWrai7looK0kVG3#aplicativo-organizacoes-b2b). También confirma que los usuarios disponen de los [permisos](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) necesarios para acceder al checkout al interactuar con la aplicación [*Storefront Permissions*](https://help.vtex.com/es/tutorial/gerenciamento-de-permissoes-no-b2b-suite--2PLR7mIFxgbmsGq84paLeA).

De forma predeterminada, cualquier usuario con un rol que permita el acceso al storefront puede acceder al checkout, excepto aquellos con el rol Organization Buyer. Si un usuario intenta proseguir al checkout sin contar con el permiso necesario, recibirá una notificación con el mensaje: No tienes acceso al checkout.

## Direcciones de los centros de costos
La aplicación **B2B Checkout Settings** se comunica con la aplicación [B2B Organizations](https://help.vtex.com/es/tutorial/b2b-suite-visao-geral--5eG6UfveWrai7looK0kVG3#aplicativo-organizacoes-b2b) y proporciona una lista con las direcciones del centro de costos asociadas al usuario durante la etapa de checkout.

## Campo número de orden de compra
Una orden de compra (PO) es un acuerdo comercial entre una empresa compradora y una tienda B2B por el que se autoriza el pago de productos o servicios que se entregarán en el futuro, en un plazo determinado.

Disponer de un número de orden de compra permite a los clientes B2B pagar las compras autorizadas utilizando ese número como referencia. La empresa que realiza la compra autoriza y emite la orden de compra con antelación.

Utilizando la aplicación **B2B Checkout Settings**, puedes habilitar un campo opcional de Número de referencia u orden de compra para que los clientes ingresen esta información durante la etapa de checkout.

## Personalizaciones en B2B Checkout Settings
Las tiendas B2B requieren personalizaciones específicas en el proceso de checkout. Por eso, la aplicación B2B Checkout Settings ofrece una página de checkout personalizada, ideal para estos escenarios. Este recurso permite personalizar la página de checkout según las necesidades de tu tienda.

En la sección siguiente, veremos cómo configurar la aplicación B2B Checkout Settings.

### Configurar la aplicación B2B Checkout Settings
Sigue las instrucciones a continuación para personalizar el proceso de checkout B2B en tu tienda:

<ol start="1">
<li>En el Admin VTEX, ve a <strong>Configuración de la tienda > Storefront > B2B Checkout Settings</strong>, ou digite <strong>B2B Checkout Settings</strong> en la barra de búsqueda de la parte superior de la página.</li>
<li>Al activar <code>Mostrar campo de número de orden de compra (PO)</code>, se incluirá en la página de compra durante el proceso de checkout un campo destinado a ingresar dicho número.
</li>
<li>Al activar <code>Mostrar el botón Crear una cotización</code>, se agregará el botón <code>Crear una cotización</code>  en el checkout, lo que permite crear un presupuesto utilizando el contenido actual del carrito.</li>
</ol>

>ℹ️ Solo se debe activar el botón `Crear una cotización` si tu tienda tiene instalada la aplicación B2B Quotes & Carts. Para más información consulta  [B2B Quotes & Carts](https://developers.vtex.com/docs/apps/vtex.b2b-quotes).

<ol start="4">
<li>Haz clic en <code>Guardar</code>.</li>
</ol>
