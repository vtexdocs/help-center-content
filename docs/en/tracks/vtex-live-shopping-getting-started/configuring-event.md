---
title: 'Configuring event'
id: 125yr6jAfwiiz84JP4ppfO
status: PUBLISHED
createdAt: 2025-07-23T18:02:12.430Z
updatedAt: 2025-07-28T15:57:16.535Z
publishedAt: 2025-07-28T15:57:16.535Z
firstPublishedAt: 2025-07-28T15:08:11.624Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: configuring-event
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
---

In the VTEX Admin, when you go to **Apps > Live Shopping** and click the arrow icon of a [created event](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), you access the **Event Information** page, where you can set it up, as explained in the following sections:

* [Layout type - Configuring style](#layout-type-configuring-style)
* [Live chat - Configuring administrator name](#live-chat-configuring-administrator-name)
* [Settings - Configuring functionalities](#settings-configuring-functionalities)
* [CMS Configuration - Configuring content presentation](#cms-configuration-configuring-content-presentation)

<div class="alert alert-warning">
  <p>This article presents the main configurations for an event, so it doesn't cover all sections of the <b>Event Information</b> page. For more information, check the <a href="https://help.vtex.com/en/tutorial/live-shopping-events--6aGLiqoKG1UoS30f3FFWch">Live Shopping: Events article</a>.</p>
</div>

## Layout type - Configuring style

The layout defines the screen format seen by customers during the event transmission, therefore, it determines the event recording format.

<div class="alert alert-danger">
  <p>The broadcasting studio takes the layout of the first person who enters, so you must set up the event layout before entering the streaming studio. Although it is possible to modify the layout via VTEX Admin later, it is not possible to change it within the streaming studio.</p>
</div>

### Screen format

In the **Layout Type** section, you can choose the desired layout format for broadcasting the event, which can be one of the following:

* **Landscape (16:9):** Provides a horizontal view of the transmission, optimized for desktop screens.
* **Portrait Transmission (9:16):** Provides a portrait view of the transmission, optimized for mobile screens.

![article_7_screen_format_EN](//images.ctfassets.net/alneenqid6w5/2EpPRgxSsLdIYt1JtcxCb8/130ce5d114d4efd2e9751c588b2a3931/article_7_screen_format_EN.png)

The screen format is **Landscape (16:9)** by default, but you can change it by clicking the **Portrait (9:6)** view. The blue checkmark indicates the selected option.

<div class="alert alert-info">
  <p>Note that once the transmission using the Bundle studio starts, the screen layout cannot be altered anymore. To change it, it would be necessary to create a new event.</p>
</div>

### Style customization

By default, an event has a neutral visual style that is suitable for stores and doesn’t affect the brand image. However, if you wish you can customize the following styles:

* Text font
* Colors
* Product cards
* Product price
* Add to cart button
* Featured product
* Product section title
* Chat title
* Send message button

<div class="alert alert-info">
  <p>The customizations above are made by clicking the <b>Customize the look and feel</b> button and filling in the Look and Feel page according to your preferences. For the complete step by step, see the <a href="https://help.vtex.com/en/tutorial/live-shopping-events--6aGLiqoKG1UoS30f3FFWch">Live Shopping: Events article</a>.</p>
</div>

## Live chat - Configuring administrator name

The **Live chat** section is where you manage the live chat during your event. If you wish to configure a specific name to identify the administrator sending messages, follow the steps below:

1. In the **Live chat** section, click the profile icon.
2. In the **Store data** window, fill in the box with the desired administrator name.
3. Click `Confirmar`.

<div class="alert alert-info">
  <p>To know how to pin messages, block users, delete messages and perform other actions in the event chat, check the article <a href="https://help.vtex.com/en/tutorial/live-shopping-events--6aGLiqoKG1UoS30f3FFWch">Live Shopping: Events</a>.</p>
</div>

## Settings - Configuring functionalities

In the **Settings** section, you can enable or disable the following event features:

| **Topic** | **Feature** |
| :---: | :--- |
| Chat | <p><ul><li><b>Email required:</b> By default, to allow the audience to participate in the live event chat, only their name is required. When you enable this field, they also have to provide an email address.</li><li><b>Enable email sending:</b> When this field is enabled, if the audience asks a question and the administrator responds via chat, an email notification is sent to the user with the response. This helps to maintain interaction with the end user even outside the chat.</li></ul></p> |
| Player | <p><ul><li><b>Viewer visibility:</b> Displays the number of viewers currently watching the live stream event. This number is not cumulative.</li><li><b>Popup transmission:</b> Allows displaying the entire Live Shopping component (chat, player, and product sidebar) in a popup format, drawing the audience full attention while they are watching the event. The public can close the popup anytime, by clicking the X in the corner, so that they return to the normal format.</li></ul></p> |
| Products | <p><ul><li><b>Apply tax:</b> Permits the application of taxes to products showcased during the live event. When this option is activated, the module <b>Promotions > Taxes</b> will display the product price along with the applicable tax.</li></ul></p> |

## CMS Configuration - Configuring content presentation

In the **CMS Configuration** section, you can set up how the content will be presented during the event. The existing functionalities are the following: 

* **Sidebar products:** Displays a sidebar that showcases a collection of products alongside the video player. The products are shown vertically on the player's left side.
* **Product carousel:** Displays a carousel with a collection of products, and is a horizontal view located under the video player during the live event.
* **Chat:** Enables your audience to interact via chat during the live event. Note that if the chat is hidden, the question option will also be hidden, as this functionality is displayed above the chat.
* **Like:** Allows users to react during the live event with the like button that has the shape of a heart.

![article_7_cms_configuration_EN](//images.ctfassets.net/alneenqid6w5/2Tb8TErEdECiHpuwvJs53G/72ea57ddb2ab71f875e0b9ab2e46983e/article_7_cms_configuration_EN.png)

* **Checkout cart:** Provides an `Add to cart` button that, when clicked by your audience, opens a new tab to the checkout with the product added to the customer shopping cart. The PiP (Picture in Picture) mode will also be activated, allowing the customer to continue watching the live stream while completing the purchase.
* **Quick view:** Permits your audience to have a view of the live event while seeing product variations. When the customer clicks the `Add to cart` button, a quick product view opens up, in a way that doesn’t hide the event transmission. This allows the customer to choose the size and color of a product, for example, while watching the event. 
    * If this option is disabled, when the customer clicks `Add to cart`, a new tab with the PDP (Product Detail Page) opens and the PiP mode automatically activates so that the customer keeps watching the live stream.
* **Infinite scroll:** Implements an infinite scroll for the sidebar products option that automatically scrolls every N seconds, so that your audience can view all the products without any additional action. 
    * The automatic scroll speed is by default set to 10 seconds, but you can change it by filling in the box with the desired number. We recommended configuring within 3 to 100 seconds.

<div class="alert alert-info">
  <p>Almost all of the functionalities above are enabled by default, the ones that aren't already enabled are <b>Product carousel</b> and <b>Checkout cart</b>.</p>
</div>

### Script for template

To embed the live-streaming app in your storefront according to your preferences, you can use the HTML tag found under the **Script for template** field. You must choose one of the following options:

* **CMS template:** For stores using Legacy CMS Portal.
* **External template:** For external stores.

### Preview

To have a preview of the event, in the **Event Information > CMS Configuration**, click the `Preview` button. A new tab will open and reproduce the event like your audience will view it. This simulation helps to validate the correct functionality by displaying elements such as:

* Chat
* Player
* Product sidebar
* Product highlights

<div class="alert alert-danger">
  <p>We highly recommend you to perform additional checks on the entire website to ensure everything is working properly. The <b>Preview</b> checks only certain components of <b>Live Shopping</b>.</p>
</div>
