---
title: 'Understanding StoreBuilder and StylesBuilder'
id: 16r1nkCNqZI29V00JgmAlE
status: ARCHIVED
createdAt: 2019-03-07T21:45:31.460Z
updatedAt: 2020-03-13T21:25:01.256Z
publishedAt: 
firstPublishedAt: 2019-03-07T21:47:46.632Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slug: understanding-storebuilder-and-stylesbuilder
locale: en
legacySlug: understanding-storebuilder-and-stylesbuilder
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

![UI Blocks Voando.mp4](https://images.ctfassets.net/alneenqid6w5/4VRam6UukpPhsCBMtrhBbv/60bb012cd676ebcc8b8805de021529db/UI_Blocks_Voando.mp4.gif) 

This documentation is structured to explain Store 2.xx's StoreBuilder and StyleBuilder.  Throughout the documentation we will be using DreamStore (a `Store 2.xx` template) to understand key concepts that will allow you to successfully structure and style your store.

## Important terms

- __Store or Store 2.xx__:  A system that allows entire stores (theme apps) to be built using `builders`.  Although you won't use it directly in development, it will be handy to [download](https://github.com/vtex-apps/store/tree/2.x) it and understand it for reference

- __Builder__: A `.json` file which is processed and interpreted by IO. It works as an API service that will process and interpret a directory in your app.

- __StoreBuilder__: a builder responsible for defining block structure, routes and content.

- __Block__:  A component-like specification.

- __Interfaces__: Collections of blocks with constraints

- __DreamStore 2.XX__: A sample template app that can be downloaded from [our open-source respository](https://github.com/vtex-apps/dreamstore/tree/2.x)

> __DreamStore is a template theme app (a store) that uses Store 2.xx's StoreBuilder and StyleBuilder to organize routes, structure, content and style.__

Store 2 makes big paradigm shifts from Store 1 by introducing the concept of **blocks, interfaces and builders.**

Let's look inside DreamStore's `/manifest.json` in order to see what our app requires to function properly:

![Screen Shot 2019-01-25 at 16.40.06](https://images.ctfassets.net/alneenqid6w5/xQg8Ok5B1SbpKnACXsT7E/0d796fc2af346e1e9caf71eca3f6ec43/Screen_Shot_2019-01-25_at_16.40.06.png)

Notice how we have two `builders` specified:

```
 "builders": {
    "styles": "0.x",
    "store": "0.x"
  },
```



If we scroll downwards, we can see that we import several store `dependencies`, **most importantly `vtex.store`**.  Additional blocks can be added into our `depedencies` as needed.

Since every theme app (a store) makes use of the `Store` app (through the `"vtex.store"` dependency) it is important to take the time to [download it](https://github.com/vtex-apps/store/tree/2.x) and understand it thoroughly.



## Visualizing DreamStore

Let's `vtex link` and send our DreamStore app to a workspace so we can study it for a minute.

![Screen Shot 2019-01-27 at 22.24.47](https://images.ctfassets.net/alneenqid6w5/6yCpuWYPBSqCIBkuv9oW14/47963f20fa8e85d76e57713a241eb583/Screen_Shot_2019-01-27_at_22.24.47.png)


If you're familiar  with React or other modern JavaScript frameworks, you will be familiar with the concept of components on a webpage. As you can quickly tell, our webpage has a `header`, `carousel` and a `shelf`.  How were these components inserted? 


## Looking inside the DreamStore app
Navigate back to the DreamStore app and open it with your favorite code editor.

Our DreamStore app contains three files that handle 100% of all of your store's structure, functionality and style.

#### Open `/store/blocks.json`

```
//blocks.json
{
  "store.home": {
    "blocks": [
      "carousel#home",
      "shelf#home"
    ]
  },

```

The JSON object above defines an object called store.home.  It inherits all the blocks of the store block and contains a carousel and a shelf. Remember earlier on how `manifest.json` had `"vtex.store": "2.0.0-beta.11",...` inside it's dependencies?

`shelf#home` means that a specific version of a carousel with the id `home` was created just for `store.home`.  This is particularly useful when reusing `shelf` under different contexts throughout your store.

As you might have noticed, `store.home` does not appear to contain a searchbar, or a header.  How come it showed up when we visited the homepage?

In order to better understand this, we should look into how `Store 2.xx` app works.

## The `Store 2.xx` app

*Please keep in mind that you will not be developing on the Store 2 app, but will instead be developing a store app (theme app) that will inherit plenty of Store 2's attributes.  *

Let's look inside Store2.xx's `/manifest.json` file to see what the `Store` app brings to the table.

![Screen Shot 2019-01-25 at 17.18.56](https://images.ctfassets.net/alneenqid6w5/1E61SoeL536WyC8OIIi5YR/31e433f5cd9ed495e4cde33aa09d5faa/Screen_Shot_2019-01-25_at_17.18.56.png)

As we can see it's structured similarly to `Dreamstore`'s `manifest.json`.  

As we can see `vtex.store` imported the Store app, which in turn imported critical builders and dependencies that allow us to make a fully functional store.  Everything that is required to run a fully fledged store has been converted into ready to use blocks and are already reliably configured.  

Now that we understand how Store2.xx brings so many components out of the box it's time to understand how they are organized and communicate between each other.

## Routes
Open `/store/routes.json`.

Here we can find the familiar `store.home`

```
{
  "store.home": {
    "path": "/"
  },
```

The code block above shows that `store.home` is our homepage since it's path is set to `/`

Moving further down,  we can see that the next block has an additional property:

```
  "store.account": {
    "auth": true,
    "path": "/account"
  },
```

Notice how by simply adding `auth` and setting it to `true` we implemented an entire login and account system to our store.
    
    
> Key takeaway is that the `store.home` block was turned into a webpage simply by defining a route inside `routes.json`. 
    
    
Let's now explore how the blocks inside a page (a page is just a block containing a route)  organizes itself.
    
## Interfaces and Blocks
**Since every page is defined by blocks and organized by interfaces** it's time we take a deeper dive and develop our understanding.
    
Open the `store` folder and open `interfaces.json`.

### Interfaces
![Screen Shot 2019-01-25 at 17.35.10](https://images.ctfassets.net/alneenqid6w5/7oDltXNQMdYZ2uPTsk5b4G/97ff30d86ab194a331d9f2c2ef8d5c95/Screen_Shot_2019-01-25_at_17.35.10.png)

An interface is a conjunction of `blocks` and exists exclusively inside `Store2.xx`. It serves as a contract, using well defined constraits explaining how the blocks will work together.

These blocks are defined inside an interface array and are classified in 5 different types:

- **Around:** These are usually used for blocks with the page as a whole.  Usually not a visible component.  An example would be a Google Analytics Tracking Pixel, or a wrapper.
- **Before:** Tells StoreBuilder that the mentioned block takes precedence and will be visually ordered from top to bottom. An example would be a header, or a navbar.
- **After:**  Tells StoreBuilder that the block is located afterwards.  A common example are footers.
- **Allowed:**  Defines what blocks are allowed inside the interface.
- **Required:**  Lists blocks that are absolutely mandatory.  Failing to comply to this contract will crash the app at build.

Let's continue analyzing `store.home`.  I'll be commenting inline.

```
{ 
/
  "store": {
//Here we will declare a non visible component that will work as an appshell allowing content to be filled dynamically inside the webpage
    "around": [
      "storeWrapper"
    ],
    //The code below asserts that a header is present inside every `store`block.  This is why our homepage had a header even though it was not specified directly. 
    "before": [
      "header"
    ],
    "after": [
      "footer"
    ],
    "allowed": [
      "carousel",
      "shelf",
      "rebuy",
      "address-manager"
    ],
    //Preview is the type of loading animation that is generated while the content is being loaded.
    "preview": {
      "type": "block"
    }
  },
//`store.home` is created, inheriting all the blocks inside the `store`block 
  "store.home": {
  // a homeWrapper was added in addition to the prexisting `storeWrapper`
    "around": [
      "homeWrapper"
    ],
    //the header component that was created in `store` is now specified to be a certain version called `full`
    "before": [
      "header.full"
    ],
    "allowed": [
      "search-result"
    ]
  },
```

If we scroll we can see the same JSON objects defining and setting the block organization. Another example is the search results page:
![Screen Shot 2019-01-25 at 18.22.12](https://images.ctfassets.net/alneenqid6w5/1xXBCG7xjBUz1CEmHVoOhc/cf0bf48f2653f8688c97fd20f0d16287/Screen_Shot_2019-01-25_at_18.22.12.png)

The information describes the following interface information:
  
 
- It allows a searchWrapper block is present around every content
- It inserts at the top that a `full` version of the `header` block must be present at the top. It's interesting to know that blocks can be specificed for specific contexts. Ex: Have a thinner, less distracting header on the checkout page.
- It defines that a `search-result` block is mandatory, and must be present in the `search` block.
- `Context` is used to call `SearchContext`, a React function responsible for handling Search queries.


## Configuring our DreamStore
So far we have understood that:
- Everything is configured as a block, including webpages which are in essence just blocks with defined routes.
- DreamStore (our sample theme app) inherits blocks from Store app.
- Store app has a file called `interface.json` which serves as a contract between blocks.

It's time to visit  Dreamstore app's blocks.json and understand how the entire site can be reordered and configured through a single .json file.

### Structuring and configuring our store with `StoreBuilder`

![Codigo voando blocks.mp4](https://images.ctfassets.net/alneenqid6w5/7FiPuNIljcVgvS8zIwKD5f/7f5b67d4f7314afc404680a96e5f3680/Codigo_voando_blocks.mp4.gif)

Open up `/blocks.json` and find our trusty `store.home.`Let's begin by analyzing the first block inside `store.home`: `carousel#home`.

Scroll down until we find `carousel#home`. Through `props` our `carousel#home` had it's properties adjusted. You can feel how powerful storebuilder can be when we add ids to our blocks through `#` and add props

```
"carousel#home": {
    "inheritComponent": true,
    "props": {
      "autoplay": true,
      "autoplaySpeed": 4,
      "banners": [],
      "height": 440,
      "showArrows": true,
      "showDots": true
    }
  },
```
  
  
### Styling our store with `StylesBuilder`
![StyleBuilder.mp4](https://images.ctfassets.net/alneenqid6w5/5a9gZSPvWcVRIzdEbVo3k2/7ae4968655fa1a1919da1612fc490761/StyleBuilder.mp4.gif)


StylesBuilder takes your styles.json file when building and generates uses [Tachyons](https://tachyons.io/) generator to produce your store's CSS.  

We designed StylesBuilder to be extremely intuitive and self explanatory.  It's as simple as adjusting the hexcodes accordingly and seeing the results permeate throughout the store.  

![Screen Shot 2019-01-28 at 00.40.17](https://images.ctfassets.net/alneenqid6w5/3JswKIv8jfYAyZCgmhfZhB/8208650f2907bb300e1ae83199490892/Screen_Shot_2019-01-28_at_00.40.17.png)

