---
title: Identificar el template de una página
id: 78Qm35VpIIeS0iQ0ik0Og4
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.453Z
updatedAt: 2023-03-29T18:10:51.105Z
publishedAt: 2023-03-29T18:10:51.105Z
firstPublishedAt: 2019-01-24T22:08:36.556Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_35
slug: como-identificar-el-template-de-una-pagina
legacySlug: como-identificar-el-template-de-una-pagina
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Esa duda es muy común entre los comerciantes VTEX. Como el CMS es un módulo antiguo (que se está rehaciendo totalmente) fue diseñado en una época en la que el contenido no era fácil de manipularse. La nueva plataforma dará más libertad y será intuitiva pero mientras tanto, vamos a diseñar aquí el paso a paso para que usted identifique el template de una página específica.

Antes es necesario explicar rápidamente la estructura del CMS Layout, que queda en `{AccountName}.myvtex.com/admin/a`

![cms_newadmin ES](https://images.ctfassets.net/alneenqid6w5/3t6uV7zLoAmIyYWSckwgOK/bbbad86f93506d49757da4aef80ce6d6/CMS__newadmin_ES.png)

La principal función del CMS Layout es permitir la administración del layout de su tienda. En él se crearán los Directorios y Templates que darán vida a su e-commerce.

Tradicionalmente en el mundo de la tecnología organizamos páginas y archivos en carpetas, así como en su computadora.

VTEX usa el mismo principio. El directorio (carpeta) es donde debe guardarse toda información pertinente a aquella sección específica de su site.

Podemos crear innúmeros templates pero debemos especificar en el directorio qué template se exhibirá. Usando la página de __Account__ como ejemplo:

![cms-template-pagina ES](https://images.ctfassets.net/alneenqid6w5/3AGqfnX5agco4McoGWOKIW/591aa19d419d552c23c9652cf87b8048/account_CMS_ES.png) 

Storefront > Layout > Carpeta CMS > Sites and channels > Account Nombre > Carpeta (/) > Account *(como en el ejemplo)* > Haga clic en el link que presente la flecha roja de "ok".

En el caso que antecede, vemos que el Template *"Account"* es el template activo de la página de producto. Para editar ese archivo es necesario localizarlo en la lista de Templates:

Storefront > Layout > Carpeta CMS > HTML templates > *Account*

Para dar flexibilidad es posible aún incluir subtemplates e innúmeros otros recursos dentro de un template, como los controles nativos, o aún un control customizado por usted. El *"Header"* y el *"Footer"*, por ejemplo, son subtemplates default que están identificados dentro del Template de la Homepage. Así quedando más fácil editar cada archivo y también pudiendo utilizar el mismo código en múltiples templates.

Ahora un ejemplo real. Quiero identificar qué página es ésta en la que estoy navegando:

![pagina-loja ES](https://images.ctfassets.net/alneenqid6w5/54CZB8Gt1CaY6W0MKG0u0S/df59e087977c87d972f78b4a689971ee/exemplo_loja_em_ES.png)

El propio dominio muchas veces ya me ayuda a identificar, pero algunas tiendas pueden customizar esto, lo que puede dificultar el trabajo. En el caso, tengo duda sobre si es una página de __Departamento__ o __Categoría__, tal vez pueda incluso ser una customización de anaquel.

El mejor camino es por el cotejo en el Código Fuente de la página (ctrl + U). Tiendas VTEX van a tener un indicativo de a qué directorio pertenece la página.

![exemplo-codigo-template-loja ES](https://images.ctfassets.net/alneenqid6w5/7ciwzN1BLOsg0KU46SaWQW/b7dd7f1a16cd6aedf0bb48dc74f45d40/exemplo_loja_em_espanhol_departamento.png)

En el ejemplo anterior: `<!-- CommerceContext.Current.VirtualFolder.Name: @Departamento@ -->`
Ahora que sabemos que es una página de categoría, necesitamos identificar qué template está activo para la Categoría. Para ello, basta repetir el proceso aplicado en el ejemplo anterior.
