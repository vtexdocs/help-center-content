---
title: Configurar marketplace para tiendas múltiples
id: frequentlyAskedQuestions_672
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.416Z
updatedAt: 2023-03-29T00:45:09.386Z
publishedAt: 2023-03-29T00:45:09.386Z
firstPublishedAt: 2019-01-24T21:55:19.554Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: como-configuro-bridge-para-tiendas-multiples
legacySlug: como-configuro-bridge-para-tiendas-multiples
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

Integraciones es el módulo de VTEX que realiza la integración entre sus tiendas y los marketplaces. Es un módulo que existe de forma independiente para cada tienda de su cuenta.

En un escenario de __multitiendas__, este concepto es de fundamental importancia. Ejemplificando, si su cuenta tiene tres tiendas, eso significa que cada tienda puede tener su propio Integraciones. De esta manera, es necesario realizar algunas configuraciones para que Integraciones lea correctamente la información de cada tienda que existe en su cuenta.

Para que sus productos sean enviados al marketplace, es necesario que la política comercial usada esté asociada al web site binding. Siga estos pasos para realizar la configuración correctamente:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haga clic en la carpeta __CMS__ y luego en __Sites and Channels__.
3. Haga clic en el web site deseado.
4. [Asocie un account name y las políticas comerciales deseadas](/es/tutorial/vincular-un-account-name-a-un-website-binding) a este web site.

Las políticas comerciales configuradas en los pasos anteriores estarán disponibles para el Integraciones de esta tienda específica. Ahora, basta con acceder al Integraciones con el account name de esta tienda (`https://{account-name}.vtexcommercestable.com.br/admin/bridge/`) y [realizar la configuración](/es/tutorial/integrando-con-marketplace).
