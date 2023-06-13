---
title: Customizing styles
id: 6L2qQHU5kwbmTSiYl4MCuD
status: DRAFT
createdAt: 2019-02-19T20:13:21.210Z
updatedAt: 2020-03-13T21:24:45.687Z
publishedAt: 
firstPublishedAt: 2019-02-19T20:13:24.873Z
contentType: trackArticle
productTeam: VTEX IO
slug: customizing-styles
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugEN: build-a-store-using-vtex-io
---

Now we know how to change the *structure* of our store, we need to change how it *looks*. Thankfully, this is easy to do because all Store Components are implemented using the [VTEX Styleguide](https://styleguide.vtex.com/), which is based in a highly-configurable CSS framework, [VTEX Tachyons](https://github.com/vtex/vtex-tachyons). 

You can customize [every style aspect](https://styleguide.vtex.com/#/Styles) of these components by [defining a JSON file](https://github.com/vtex-apps/store-theme/blob/master/styles/configs/style.json) in the `styles/configs` folder. This means every Store Component will exhibit your defined look and feel automatically, without having to manually declare CSS for each of them. 

Let's make some changes to our `style.json` file. We can change the colors a bit by replacing the values of the children of `semanticColors`:

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
  (...) // replace all other children too!
}
```

Now, see the results by `linking` our app:

![style-json](//images.ctfassets.net/alneenqid6w5/1S0DU3mL8MxRVleCmUGGol/3594be77ecae98c6c223e04191f95def/style-json.svg)

Success! Now you know how to customize your store's styles.

## Advanced styles with CSS Overrides

The styles builder allows us to customize the broad aspects of our look and feel. However, sometimes we need to alter a component's style more deeply by using custom CSS. 

This can be done by using __CSS Overrides__, which let you target specific app's components you want to style without having to resort to global CSS (which would greatly increase the risks for undesired side effects).

You declare CSS Overrides by creating a __stylesheet named after the app you will override in the styles folder__ and depending on that app in your manifest. In the CSS file, you can target any classes used by the component.

For example, let's customize how the `menu` renders.

Open /manifest.json and add `vtex.category-menu: x.x` to your list of dependencies.

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

We now go over to the `/styles`  folder and create a folder inside it called `css`. Create a css file called `vtex.category-menu.css`.

Your end result should look like this: `/styles/css/vtex.category-menu.css`

Let’s type some CSS inside, giving us a nice solid red line:

```css

.container {
  border-bottom: 20px solid red;
  background: #efd9d2;
}

```
Our new category menu will now have a solid red line along the bottom of our menu.

![red-line](//images.ctfassets.net/alneenqid6w5/2zVZNpUFepCptn5Zuo3YNa/1d939c7f78544c6b716bfc57db774b79/red-line.svg)
