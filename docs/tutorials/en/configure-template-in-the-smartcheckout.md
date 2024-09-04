---
title: 'Configure template in the SmartCheckout'
id: frequentlyAskedQuestions_599
status: DRAFT
createdAt: 2019-01-24T20:45:56.190Z
updatedAt: 2022-07-18T12:13:15.246Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:05:13.787Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slug: configure-template-in-the-smartcheckout
locale: en
legacySlug: configure-template-in-the-smartcheckout
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Nowadays, the new portal is used for rendering the Checkout (Shopping cart -> Personal Information -> Address -> Payment Method) and OrderPlaced (Purchase confirmation screen) screens. Here we will learn how to register and configure its resources. Let’s go.

Firstly, access the Portal module as shown in the picture below. Be careful not to confuse this module with the “Gerenciador de Portal” found in the Ecommerce module.

Once in the Portal module, the first screen will exhibit the Sites registered for the account. Each site registered represents a multi-domain, if the account has contracted a multi-domain. In the case of accounts that do not use multi-domains, registering more than one Site in this module will not make sense. For more information, go to [how to create a multistore / multidomain](https://help.vtex.com/en/tutorial/creating-multi-store-multi-domain#).

As indicated in the picture, on this screen it is possible to **Create** a new site, **Edit** basic data of existing sites or **Set up**va site.

To create a new site, click on `New website`.

Now fill out the following fields according to the instructions:

- **Name: **Free field
- **Store**: This field must be filled out with a value corresponding to some host of the desired store. It is impossible to register two (or more) Sites when this field is filled out with the same value.

See picture below:

![en.smartcheckout1](https://images.ctfassets.net/alneenqid6w5/3AYhqb6FiwUChorOlxafDS/4d675c4f1310ba14a041f36ee49911ee/en.smartcheckout1.png) ![en.smartcheckout2](https://images.ctfassets.net/alneenqid6w5/rm9LNEvgCOJvKAWpGf5XI/f520942d072cd958262f4c9961e7d9d7/en.smartcheckout2.png)

Click on Save to conclude the registration of the new site.

This information can be amended. The rules are the same.

As shown in the next picture, on clicking the Site name the system displays all configuration information de configuration and permits navigation using the following menu options:

- Websites: Back to the initial screen
- Edit: Enables to edit the Name and the Store
- Checkout: Enables basic settings (we will see this later)
- Orders
- Code: Site-related templates
- Pages: Displays the pages that exist for the site. By default, two pages are created, **checkout **and **checkout/orderPlaced**. As already mentioned at the beginning of this post, the **checkout **page represents the shopping basket, personal data, address and payment method pages. The **checkout/orderPlaced **page represents the Purchase Confirmation page**

![en.smartcheckout3](https://images.ctfassets.net/alneenqid6w5/2PxJMMiYwBshQTFDnXToDB/b173e24b993d3896c40c06de20683dea/en.smartcheckout3.png)

In **Pages**, it is possible to** Create **new pages, **Edit** and **Exclude **existing pages. See the following two pictures illustrating **Editing **and **Exclusion**. Creation follows the same rules as editing.

Editing pages:

![en.smartcheckout4](https://images.ctfassets.net/alneenqid6w5/7to0u1evDi9wENUr7bObaq/17162c0dc68db11895017d4d75d273f9/en.smartcheckout4.png)

Excluding pages:

![en.smartcheckout5](https://images.ctfassets.net/alneenqid6w5/1L3XIITqW0hUMRb9kCRU65/e10b9a0784b5061594b3690ed6a43ca3/en.smartcheckout5.png)

In **Checkout**, we can edit the fields below:

- Website Title: If informed, it will be displayed in the title of the shopping basket, conclusion of purchase and order confirmed pages.
- Google Tag Manager: Enter the ID (GTM-XXXX) of your container from [Google Tag Manager](https://www.google.com/tagmanager/ "Google Tag Manager") should you wish to use it automatically
- Google Maps API Key: The credential key is used in two cases: in case of Delivery based on the geographical coordinates is on and if the store works with pickup points.
- Calculation of delivery and pickup options (Beta and Stable)

Below is a picture illustrating how to fill out this form:

![en.smartcheckout6](https://images.ctfassets.net/alneenqid6w5/2aSyfs2iSk8k282tzvD5ad/2134352be985fe4f527ffd65f87cb7c7/en.smartcheckout6.png)

In **Code**, on the right, all the Site-related templates will be displayed. By default, the system configures the templates exemplified in the picture below:

![en.smartcheckout7](https://images.ctfassets.net/alneenqid6w5/1x7W9GEAPhuX48I1iEQghm/ec00ebd04a4326d63182dd58acacc202/en.smartcheckout7.png)

Of these templates, the only ones that cannot be changed are **vtex-checkout **and **vtex-orderPlaced**. These templates correspond to the native operation of the platform, that is, they render the main content of these pages, both the checkout and the orderPlaced.

In the next picture, we show the area affected at the checkout by the setting of the **checkout-footer **template. This is merely an example of an empty template.

![en.smartcheckout8](https://images.ctfassets.net/alneenqid6w5/SWI577sEU85XKjwtAOURD/4a6c0cf38aa2c80666eb972ed9ca3528/en.smartcheckout8.png) ![en.smartcheckout9](https://images.ctfassets.net/alneenqid6w5/6ntrDKAHUd6l9dfopU63Z7/d870b01102fd965c76c530279dbc1654/en.smartcheckout9.png)

In the next picture, we have an equivalent example to the previous one; however, this time with the HTML code filled out. Note that the code filled out on the left corresponds to the upper right-hand area. This is the **checkout-header **template.

![en.smartcheckout10](https://images.ctfassets.net/alneenqid6w5/2wkWd5eLmhEjF0qrtYt09O/639eefb3539d9ceac3483cb36ce1daf6/en.smartcheckout10.png) ![en.smartcheckout11](https://images.ctfassets.net/alneenqid6w5/wE8y5BGPJ98vqY5uWBK88/0a357d212ba62e0627dd2348bd6c56de/en.smartcheckout11.png)

As we can see in the next picture, all templates with the **checkout** prefix will be used on all Checkout pages. In this example, we are on the Forma de Pagamento page. Note that the header loaded is the same as in the previous example.

![en.smartcheckout12](https://images.ctfassets.net/alneenqid6w5/3eQbQDODquTDApkbuMZeik/7b692e4dac58e13e41578263a1e739ac/en.smartcheckout12.png) ![en.smartcheckout13](https://images.ctfassets.net/alneenqid6w5/241khOdkptYYcD9wLqd3Xk/db163752009b17887990cd4272541e89/en.smartcheckout13.png)

Just as in the **checkout **templates, the same happens with the orderPlaced templates. In other words, templates with the **orderPlaced** prefix only correspond to the OrderPlaced (Purchase Confirmation) page.

![en.smartcheckout14](https://images.ctfassets.net/alneenqid6w5/3R5BgiNGjgvwGord10U26t/567703d54d381bd197a5e674b035802b/en.smartcheckout14.png) ![en.smartcheckout15](https://images.ctfassets.net/alneenqid6w5/pzZig7wTU8YNCBG9wqFYe/d6c1c563cc7ebad9df6cfa1878cd8730/en.smartcheckout15.png)

As explained above, the only templates where alterations are not permitted are **vtex-checkout** and **vtex-orderPlaced**. These templates render the basic content of the Checkout and OrderPlaced pages. Below are examples of the content rendered by the templates.

**vtex-checkout **template:

![en.smartcheckout16](https://images.ctfassets.net/alneenqid6w5/57XEgJ13YRpGLREovFUyNU/8a842c82fb418f9df729202bc52c7548/en.smartcheckout16.png) ![en.smartcheckout17](https://images.ctfassets.net/alneenqid6w5/4XmnSmdoN3DugDECxgbeOD/0082a842c288dad52d577bb52722822b/en.smartcheckout17.png)

**vtex-orderPlaced **template:

![en.smartcheckout18](https://images.ctfassets.net/alneenqid6w5/3bYwEo8B9sI9IEw024oIvi/df9818cfec61bbfc5847dbbbfd611b98/en.smartcheckout18.png) ![en.smartcheckout19](https://images.ctfassets.net/alneenqid6w5/34ypWrIjyTvUf1GZJP8YpC/49b3c81844d0543664af9104b1e985d8/en.smartcheckout19.png)

Multi-domain accounts can only use one site, if the need arises for specific configurations. This is because, although only one Site exists, the platform includes a class in the tag &lt;body&gt; according to the domain accessed. This makes it simple to apply different layouts to the same site.

Class inserted in the tag &lt;body&gt; according to the domain accessed:

![](https://images.contentful.com/alneenqid6w5/4YAbMPcyqA8eqMM8ycokoU/836778d23afee9b0e793b27d9ab8cc0c/Portal16.jpg)

Important: Any JavaScript included directly in any Portal template will be ignored by the platform, that is, when the page is rendered the platform will remove it. This is because the SmartCheckout only accepts scripts that originated in Google Tag Manager. Thus, whenever the need arises to undertake some customization (or even to insert specific tags) using JavaScript, do the inclusion using Google Tag Manager.
