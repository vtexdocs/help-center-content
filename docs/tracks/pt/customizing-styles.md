---
title: Customizando estilos
id: 6L2qQHU5kwbmTSiYl4MCuD
status: DRAFT
createdAt: 2019-02-19T20:13:21.210Z
updatedAt: 2020-03-13T21:24:45.687Z
publishedAt: 
firstPublishedAt: 2019-02-19T20:13:24.873Z
contentType: trackArticle
productTeam: VTEX IO
slug: customizando-estilos
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugPT: crie-uma-loja-usando-vtex-io
---

Agora que sabemos como mudar a *estrutura* da nossa loja, precisamos mudar a *aparência* dela. Felizmente, isso é fácil porque todos os Componentes da Loja são implementados usando o [VTEX Styleguide](https://styleguide.vtex.com/), que é baseado em uma estrutura CSS altamente configurável, o [VTEX Tachyons](https://github.com/vtex/vtex-tachyons).

Você pode customizar [todos os estilos](https://styleguide.vtex.com/#/Styles) desses componentes definindo um [arquivo JSON](https://github.com/vtex-apps/store-theme/blob/master/styles/configs/style.json) na pasta `styles/configs`. Isso significa que cada Componente da Loja exibirá sua aparência e comportamento definidos automaticamente, sem precisar declarar CSS manualmente para cada um deles.

Vamos fazer algumas alterações no nosso arquivo `style.json`. Podemos mudar um pouco as cores, substituindo os valores dos filhos de `semanticColors`:

```json
// style.json
"semanticColors": {
   "background": {
     "base": "#232323",
     "base--inverted": "#f9f9f9",
     "action-primary": "#00a533",
     "action-secondary": "#eef3f7",
     "emphasis": "#f71963",
     "disabled": "#f2f4f5",
     "success": "#8bc34a",
     "success--faded": "#eafce3",
     "danger": "#ff4c4c",
     "danger--faded": "#ffe6e6",
     "warning": "#ffb100",
     "warning--faded": "#fff6e0",
     "muted-1": "#dc42dc",
     "muted-2": "#c031c0",
     "muted-3": "#9e2b9e",
     "muted-4": "#772277",
     "muted-5": "#4e184e"
   },
  (...) // substitua todos os outros filhos também!
}
```

Agora, vamos ver os resultados "linkando" nossa app:

![style-json](//images.ctfassets.net/alneenqid6w5/1S0DU3mL8MxRVleCmUGGol/3594be77ecae98c6c223e04191f95def/style-json.svg)

Sucesso! Agora você sabe como personalizar os estilos da sua loja.

## Estilos avançados com substituições de CSS

O builder de estilos nos permite personalizar os aspectos mais amplos de aparência. No entanto, às vezes precisamos alterar o estilo de um componente mais profundamente usando CSS personalizado.

Isso pode ser feito por meio de __substituições de CSS__, que permitem segmentar componentes específicos da app que você deseja estilizar sem precisar recorrer ao CSS global (o que aumentaria muito os riscos de efeitos colaterais indesejados).

Você declara as substituições de CSS criando uma __stylesheet com o nome da app que você substituirá na pasta styles__ e dependendo dessa app em seu manifest. No arquivo CSS, você pode segmentar todas as classes usadas pelo componente.

Por exemplo, vamos customizar a maneira como o `menu` é renderizado.

Abra /manifest.json e adicione `vtex.category-menu: x.x` à sua lista de dependências.

```json
//style.json

 "dependencies": {
   "vtex.store": "2.x.",
   "vtex.store-header": "2.x",
   "vtex.store-footer": "2.x",
   "vtex.carousel": "2.x",
   "vtex.shelf": "1.x",
   "vtex.product-details": "1.x",
   "vtex.product-kit": "1.x",
   "vtex.search-result": "3.x",
   "vtex.login": "2.x",
   "vtex.my-account": "1.x",
   "vtex.category-menu": "2.x"
 }
```

Agora vamos até a pasta `/styles` e criamos uma pasta dentro dela chamada `css`. Crie um arquivo css chamado `vtex.category-menu.css`.

O resultado final deve ficar assim: `/styles/css/vtex.category-menu.css`

Vamos escrever um pouco de CSS, para acrescentar uma linha vermelha sólida:

```css

.container {
  border-bottom: 20px solid red;
  background: #efd9d2;
}

```
Nosso novo menu de categoria terá agora uma linha vermelha sólida ao longo da parte inferior do nosso menu.

![red-line](//images.ctfassets.net/alneenqid6w5/2zVZNpUFepCptn5Zuo3YNa/1d939c7f78544c6b716bfc57db774b79/red-line.svg)
