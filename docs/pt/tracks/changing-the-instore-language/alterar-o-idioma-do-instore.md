---
title: 'Alterar o idioma do inStore'
id: 5xZTQNOMRKXqWjWol2sUbu
status: ARCHIVED
createdAt: 2020-06-28T17:20:22.942Z
updatedAt: 2021-11-25T13:59:42.220Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:35:12.789Z
contentType: trackArticle
productTeam: Shopping
slugEN: changing-the-instore-language
locale: pt
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: alterar-o-idioma-do-instore
---

>❗ A alteração de idioma explicada neste artigo envolve e alteração do arquivo JavaScript `checkout-instore-custom.js`. Essa operação deve ser realizada somente por pessoas com experiência em programação. Alterações incorretas nesse arquivo podem causar erros críticos.

Atualmente, é possível usar o inStore em __português__, __inglês__ ou __espanhol__.

Por padrão, o idioma do aplicativo é o português, mas você pode alterar isso por meio do arquivo `checkout-instore-custom.js`. Veja no artigo [Como customizar o inStore](https://help.vtex.com/pt/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2) como alterar esse arquivo.

Para alterar o idioma, primeiro certifique-se de que o arquivo checkout-instore-custom.js contém as seguintes linhas de código:

```json
/* Locale configurations */
window.LOCALE_MESSAGES = {
  locale: 'pt',
  messages: {
    pt: {
     
    },
  },
};

function setNewLocaleMessages() {
  const localeEvent = new Event('changeLocaleMessages')
  localeEvent.data = window.LOCALE_MESSAGES
  document.dispatchEvent(localeEvent)
}

if (window.inStoreIsLoaded) {
  setNewLocaleMessages();
} else {
  document.addEventListener(
    'load.instore',
    function() {
      setNewLocaleMessages();
    },
    false
  );
}
```

Caso o código acima já exista no seu arquivo `checkout-instore-custom.js`, ignore esta etapa. Se apenas parte dele consta no seu arquivo, substitua o trecho atual por todo o código acima.

O idioma do aplicativo é definido pela propriedade `locale`, que se encontra na seguinte linha do código acima:

`locale: 'pt',`
     
Neste caso, observe que o idioma definido é o português (`pt`). 

Para alterar o idioma para inglês, substitua o valor `pt` por `en`. O resultado desse bloco de código deve ficar assim:

```json
/* Locale configurations */
window.LOCALE_MESSAGES = {
  locale: 'en',
  messages: {
    pt: {
     
    },
  },
};
```

Após fazer a alteração no código, salve o arquivo `checkout-instore-custom.js`.

Em seguida, no aplicativo inStore, para ver as alterações refletidas, entre no menu e clique no botão __Restaurar dados__, como mostra a reprodução abaixo.

![22. Change the inStore language - 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
