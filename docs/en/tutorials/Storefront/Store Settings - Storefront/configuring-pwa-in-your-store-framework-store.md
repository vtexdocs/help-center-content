---
title: 'Configuring PWA in your Store Framework store'
id: 1xWVQTONeROlSOXG8lSyKV
status: PUBLISHED
createdAt: 2024-06-18T14:58:53.804Z
updatedAt: 2024-06-20T12:15:54.742Z
publishedAt: 2024-06-20T12:15:54.742Z
firstPublishedAt: 2024-06-18T15:49:26.862Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: configuring-pwa-in-your-store-framework-store
locale: en
legacySlug: configuring-pwa-in-your-store-framework-store
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

Stores developed with VTEX IO Store Framework natively have a *Progressive Web App* (PWA), a type of web app that offers a user experience similar to a native app but runs directly in a web browser.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
For Legacy Portal CMS stores, see the guide <a href="https://help.vtex.com/en/tutorial/how-to-turn-my-store-website-into-a-pwa--3i8VmYeToAUGKgo2kKK6I2">How to turn my store's website into a PWA</a>.
</div>

To configure a PWA in your store, go to **Store Settings > Storefront > Store** in the VTEX Admin and follow the steps below:

1. Click the **PWA** tab.
2. Set the **Theme color**, **Background color** and add the **Android logo icon (512x512, PNG)** and **iOS logo icon (512x512, PNG)**. The colors must be specified in hexadecimal code (e.g., #F71963), and the icons must have a size of 512x512 px and a `.png` extension.

  ![pwa-settings-1-en](//images.ctfassets.net/alneenqid6w5/2EscgymgyMjCL6nvKedrjk/8b7909e47d4ebe3906f12fc997dec948/pwa-settings-1-en.png)

3. Scroll down and go to the **Other PWA settings** field. Click the arrow to show the other settings.

  ![pwa-settings-2-en](//images.ctfassets.net/alneenqid6w5/2UJAVrnwSn3NPNxxi42nk8/7e6e92b83cdc7af103e35f19d740343d/pwa-settings-2-en.png)

4. In **Other PWA settings**, complete the fields as indicated below:

    - **Start URL**: URL of the PWA homepage.
    - **Screen orientation**: Format in which the content is displayed in the PWA. One of the following values can be assigned: Any, Natural, Landscape, Landscape (primary), Landscape (secondary), Portrait, Portrait (primary), Portrait (secondary).

    | **Screen Orientation**  | **Description** |
    |--------------------------|-----------------|
    | Any                      | The page can be viewed in any orientation, and the content automatically adjusts to fit the device's current orientation. |
    | Natural                  | Factory default configuration of the device. |
    | Landscape                | The content is only displayed in landscape orientation. This is useful for apps or games optimized for a wider view. |
    | Landscape (primary)      | Horizontal orientation with the top of the device aligned to the left. |
    | Landscape (secondary)    | Horizontal orientation with the top of the device aligned to the right. |
    | Portrait                 | The content is only displayed in vertical orientation. This is the default setting for most mobile apps. |
    | Portrait (primary)       | Portrait orientation with the `home` button or the bottom of the device pointing downwards. |
    | Portrait (secondary)     | Inverted portrait orientation, with the `home` button or the bottom of the device pointing upwards. This is useful when devices are used upside down. |

    - **Display**: PWA content display modes. One of the following values can be assigned: Full screen, Standalone (Add to Home Screen), Minimal-UI (not supported by Chrome), and Browser.

    | **Display**              | **Description** |
    |--------------------------|-----------------|
    | Full Screen              | PWA fills the entire screen of the device, hiding all elements of the browser's user interface, such as the address bar and other system notifications. It is ideal for games or apps that require a deep immersion, maximizing the available screen space. |
    | Standalone (Add to Home Screen) | The PWA behaves like a native app, running in a separate browser window and not displaying common browser elements such as the address bar. When added to the device's home screen, you can hardly tell the difference between a PWA and a native app. |
    | Minimal-UI (not supported by Chrome) | The PWA displays a minimum of browser user interface elements, such as the address bar and some additional controls. It is a middle ground between Standalone mode and Browser mode. |
    | Browser                  | The PWA opens like a regular browser page, with all the usual browser features visible, such as the address bar, tabs, and other interface controls. It doesn't change the standard way the user interacts with web content and is less immersive than the other display modes. |

    - **Add to home screen**: When activated, it allows the user to install the PWA.
    - **"Add to home screen" prompt**: Defines the moment when the PWA installation will be recommended to the user. One of the following values can be assigned: On the first visit, On the first item added to the cart, or On the first order. This option only applies when **Add to Home Screen** is activated.

   ![pwa-settings-3-en](//images.ctfassets.net/alneenqid6w5/2wVkAwUIy6E33I6pUoXMVT/8496511fdfbe7d9bdd30915bd0d4e3b9/pwa-settings-3-en.png)

5. Save changes by clicking `SAVE`.

## Using a custom service worker

Our service worker supports native push prompts to install the app on the first visit, the first item added to the cart, or the first order. You can customize the notifications in your store's PWA using your own service worker, which will work alongside ours.

To learn how to create your own service worker, see [How to install a service worker](https://help.vtex.com/en/tutorial/como-instalar-um-service-worker--2H057iW0mQGguKAciwAuMe).

To learn how to leverage the service worker builder to group different service workers in your store, see [Using several service workers in your store](https://developers.vtex.com/docs/guides/vtex-io-documentation-using-several-service-workers-in-your-store).
