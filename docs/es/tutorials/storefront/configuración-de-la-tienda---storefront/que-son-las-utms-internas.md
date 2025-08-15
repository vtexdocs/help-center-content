---
title: 'Qué son las UTMs internas utmi_cp, utmi_pc y utmi_p'
id: 5Pvo8ufYWs00AUeCCEY68a
status: PUBLISHED
createdAt: 2019-01-24T20:45:40.618Z
updatedAt: 2024-08-05T11:11:38.459Z
publishedAt: 2024-08-05T11:11:38.459Z
firstPublishedAt: 2019-01-24T22:01:12.633Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: what-are-the-internal-utms
legacySlug: que-son-las-utms-internas
locale: es
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

Las `UTMi`s son UTMs internas, es decir, parámetros de URL que tienen el objetivo de rastrear el tráfico entre páginas de su sitio. Por medio de ellas, usted puede marcar la navegación y definir contextos donde ciertas acciones deben ser aplicadas.

Por lo tanto, no tienen el objetivo de rastrear el tráfico que viene de sitios o servicios externos, con propósitos relacionados con el contexto de marketing. Esta es una función ejercida por las UTMs, como se explica en el artículo [Qué son utm_source, utm_campaign y utm_medium](/es/faq/que-son-utm-source-utm-campaign-y-utm-medium).

Normalmente, las UTMs internas se utilizan como __causa de promoción__. En el módulo Tasas y Promociones, usted puede definir que sólo los pedidos cerrados con determinada UTM aplicada en la URL recibirán la promoción. Vea abajo el campo para elegir o crear esta UTM interna en el registro de una promoción regular.![utmi1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/configuraci%C3%B3n-de-la-tienda---storefront/que-son-las-utms-internas_1.jpg)

En el modulo Gestión de Pedidos, dentro de la pantalla de detalles del pedido, usted puede girar la carta de Valor Total para ver los datos de __Promociones y Marketing__. En él figura el valor del parámetro de la UTM interna usada en la promoción.

![utmi2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/configuraci%C3%B3n-de-la-tienda---storefront/que-son-las-utms-internas_2.jpg)

VTEX trabaja con tres tipos de UTMs internas:
- `utmi_cp`
- `utmi_pc`
- `utmi_p`

Como se ha visto anteriormente, la `utmi_cp` es usada por el módulo de promociones. Pero usted puede utilizar esta y las otras dos según su necesidad. Otro uso posible, por ejemplo, es rastrear el flujo de usuarios que hacen clic en un banner de la tienda.

En el OrderForm, los campos poblados por los valores de estas UTM son los siguientes:
- `utmi_cp`: __utmiCampaign__
- `utmi_pc`: __utmiPart__
- `utmi_p`: __utmiPage__

Se quedan dentro del nodo `marketingData`.

### Artículos relacionados

- [Qué son utm_source, utm_campaign y utm_medium](https://help.vtex.com/es/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium)
- [Crear cupón](https://help.vtex.com/es/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU)
