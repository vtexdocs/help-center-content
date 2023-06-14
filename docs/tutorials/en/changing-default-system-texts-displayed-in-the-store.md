---
title: 'Changing default system texts displayed in the store'
id: 53njoEwLpSWuyMy28SQAKS
status: PUBLISHED
createdAt: 2019-01-24T20:45:43.325Z
updatedAt: 2023-03-29T00:58:43.286Z
publishedAt: 2023-03-29T00:58:43.286Z
firstPublishedAt: 2019-01-24T22:08:58.731Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: changing-default-system-texts-displayed-in-the-store
legacySlug: changing-default-system-texts-displayed-in-the-store
subcategory: 7ogirQ8NClawO2X6xdgCKc
---

VTEX system renders a series of standard texts in the store.

For each of these texts, there is a __key__ that identifies it (a kind of variable name) and the corresponding __text__ (the contents of that variable).

For example, in the site topbar - which by default is part of the header subtemplate -, the welcome message is displayed. This message is identified by the `topbarSaudacao` key and initially comes with the text "Welcome!".

For each key used by the system, you can change the corresponding text. To do this, follow the steps below:

1. In the VTEX Admin, access **Store Settings > Storefront > Settings**.
2. Use the selection box to find the key you want to change.
3. Change the text that appears in the field below the selection box.

### Variables

Some special variables are available to compose more complex texts:
- Definite article
- Preposition
- Locative preposition
- Possessive pronoun
- Store Name
- Site URL in texts

For example, you want to display the following welcome message in the topbar of the store: *Welcome to the World Shopping*.

In this case, the terms `to` and `World Shopping` are special. The first is a proposition, which varies according to the name of each store, and the second is the name of the store, which obviously also varies.

To do this dynamically, I can change the text of the `topbarSaudacao` key to the following:

`Welcome @preposicaonomeloja2@ @nomeloja@.`

That is, I'm using the variables `preposicaonomeloja2` and `nomeloja`.

<div class="alert alert-warning">
When using variables to compose a text, replace the <code>#</code> symbol with <code>@</code>. That is, <b>#variable#</b> becomes <b>@variable@</b>.
</div>

![textos-importantes en](//images.ctfassets.net/alneenqid6w5/3ck7V4j6wgygm0qE2ia2m8/ec2d596e8fbee37f53d38568d797a401/textos_importantes_en.png)
![exemplos-textos-importantes en](//images.ctfassets.net/alneenqid6w5/3qJmU7aPIcUowc6SkaYoSS/4c7d666cf29ef651c19ee837c9f42a75/3_en.png)

As I defined the content of the first variable to be "to" and the second one is "World Shopping", the final text rendered on the site will be "Welcome to World Shopping".

To easily change the special variables that appear in the Important Texts section, simply click on them.
