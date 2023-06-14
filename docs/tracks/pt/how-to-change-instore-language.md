---
title: 'Como mudar o idioma do inStore'
id: 6fBUrqT2KIQ6WW2GIYiUI8
status: DRAFT
createdAt: 2018-09-14T21:00:24.112Z
updatedAt: 2020-08-03T20:00:39.626Z
publishedAt: 
firstPublishedAt: 2018-09-14T21:19:21.733Z
contentType: trackArticle
productTeam: Shopping
slug: como-mudar-o-idioma-do-instore
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

No portal V2, você encontra um arquivo do inStore para customizações. Basta acessar o link abaixo, substituindo `{{AccountName}}` pelo Account Name da sua loja.

`https://{{AccountName}}.myvtex.com/admin/portal#/sites/default/code/files/checkout-instore-custom.js`

Uma vez que a app do inStore esteja instalada corretamente, você vai encontrar uma parte do arquivo que configura a língua.


```js
/* Locale configurations */

window.LOCALE_MESSAGES = {
  locale: 'pt',
  messages: {
    pt: {},
  },
}
```


Mudando a propriedade `locale` para valores como `pt`, `en` ou `es`, você define a língua que vai ser usada na interface. Basta fazer o ajuste e salvar o arquivo.

Ao recarregar a app do inStore, ela já vai estar na língua escolhida por você.


### Idiomas disponíveis
Até o momento, a interface da app do inStore suporta as seguintes línguas:

- Português: use o valor `pt`.
- Inglês: use o valor `en`.
- Espanho (`em breve`): use o valor `es`.
