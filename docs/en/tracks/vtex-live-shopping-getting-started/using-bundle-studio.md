---
title: 'Using Bundle studio'
id: 3GKzrP9nkyRwpUyyeYUaeX
status: PUBLISHED
createdAt: 2025-07-23T18:06:49.325Z
updatedAt: 2025-07-28T16:09:39.253Z
publishedAt: 2025-07-28T16:09:39.253Z
firstPublishedAt: 2025-07-28T15:08:19.382Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: using-bundle-studio
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
---

<div class = "alert alert-info">
  <p>If you wish to use another studio rather than Bundle, check the article <a href="https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/Dw0QdKI0aGjmyD5Z6z5JC">Using external studios</a>.</p>
</div>

VTEX broadcast studio is called Bundle, and in this article you will learn how to make all the necessary configurations in our native studio solution.

## Streaming Studio

To access the studio in VTEX Admin and start transmitting the live, in the **Event Information** page, go to the **Streaming Studio** section:

![article_8_streaming_studio_EN](https://images.ctfassets.net/alneenqid6w5/42ko6XyZU0Fy0Y9Ri4sSmY/84cabea29afc3a34e011dca7064bc137/article_8_streaming_studio_EN.png)

<div class = "alert alert-info">
  <p>To enable the fields, the event has to be <a href="https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq">turned on</a>, so that its status is <code>Live</code>.</p>
</div>

The settings in this section do the following:

* **Copy invitation:** By clicking it, it generates and copies a link that can be sent to influencers or hosts. By accessing the link, they will be able to turn their camera and microphone on or off, as well as view the chat within the studio. However, they will not have access to any other actions.
* **Access:** Redirects you to the **Device settings** page in the Bundle studio, where you can manage cameras, upload graphic assets, start / end the transmission, among other actions. This configuration is restricted to the broadcast studio administrators only.

Both hosts using the link generated with the `Copy invitation` button and administrators using the `Access` button are redirected to Bundle’s **Device settings** page, where they can select the camera and microphone they wish to use and run tests to ensure everything is working properly.

## My Studio

In the **Device settings** page, when you click `Enter the studio`, you are redirected to the **My Studio** page, as shown in the example below. a vertical [layout type](#https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#layout-type-configuring-style):

![article_8_my_studio_EN](https://images.ctfassets.net/alneenqid6w5/6qLDAF3sVIUzGcxoLrUD5A/95d8f31be82f9ec1bf97d4fa030b72fc/article_8_my_studio_EN.png)

<div class = "alert alert-warning">
  <p>Before transmitting from Bundle, you must select the <a href="https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#layout-type-configuring-style">layout type</a> you want for the screen, because once in the <b>My Studio</b> page, this event layout cannot be altered anymore. To change afterwards, it would be necessary to create a new event.</p>
</div>

In the left navigation menu, you have the following sections (administrators only, except for the Chat private):

* My Studio (current) 
* [My Assets](#my-assets)
* [My destinations](#my-destinations)
* [Chat private](#chat-private)
* [Settings](#settings)

In **My Studio** menu option, the numbers 1 to 5 show which settings can be done by guests and administrators, while numbers 6 to 9 are reserved for administrators only:

![article_8_my_studio_woman_streaming_EN](https://images.ctfassets.net/alneenqid6w5/1coQL5kLVhhzwx4YofRTyD/e507677f61646033f033da1aa2b22cd6/article_8_my_studio_woman_streaming_EN.png)

### Settings for both guests and administrators

* **1. Invite people:** Generates the same shareable link when clicking `Copy invitation` in the [Streaming Studio](#article-8-heading) section. This link can be shared with influencers and hosts.
* **2. Activate/deactivate microphone:** Control your own microphone settings.
* **3. Activate/deactivate camera:** Turn your own camera on or off.
* **4. Share screen:** Allows the host (including guests / influencers) to share their screen, choosing which window or screen to display.
* **5. End meeting:** Presents two options to end the broadcast, one that ends the event for everyone and removes all participants from the studio, and another where only the person leaves the meeting. More information in the [Ending the transmission](link) section.

### Settings exclusive to administrators

* **6. Manage users:** The three-dot menu options allows you to mute someone's microphone or remove them or a device from the Bundle studio. The option `Active` selects the person being displayed in the live. This configuration is exclusive to administrators.
* **7. Activate/deactivate connected devices/host:** When the `Active` checkbox is marked, it allows the device or participant to be visible or audible in the mainstream, and the microphone icon indicates who has their microphone currently on (blue) or off (red). The activating configuration is exclusive to administrators.
* **8. Screen composition:** Presents the screen options available to arrange participants and devices. The different options are more or less suitable depending on the transmission number of participants and devices. This configuration is exclusive to administrators.
* **9. Go live:** Starts and stops broadcasting the event to the public. This configuration is exclusive to administrators.

## My Assets

In **Assets** menu option, you can create and manage the assets for your live, all explained in the following topics:

* [Asset types](#asset-types)
* [Assets dimensions](#assets-dimensions)
* [Adding an asset](#adding-an-asset)
* [Removing an asset](#removing-an-asset)

### Asset types

These assets types are the following:

* **Banners:** Create the text and choose the background color for the banner. It will always appear at the bottom of the stream. You can choose whether you want it to move or remain fixed on screen.
* **Overlay:** Select an image to overlay on top of the camera or a graphic asset, except over videos. This allows the background or host to remain visible all the whole time.
* **Background:** Choose an image format to be the background of the broadcast. The background is always visible, unless a video is playing in the broadcast or the camera feed of participants is activated and added to the transmission.
* **Video:** Upload a video to enhance the broadcast and overlay it on top of cameras or graphic assets.
* **Logo:** Place an image of your logo on the top right corner, overlaying it over any camera or graphic asset, except over video.

Besides that, there is a <i class="fas fa-toggle-off" aria-hidden="true"></i> **Show display names** option. When you log in Bundle, you fill the field **Name**, which can be displayed in the live by enabling this configuration.

The name will appear in white letters against a dark background, which cannot be changed. However, you can customize the initial stripe color, as it is taken from **Banners > Theme Color.** Creating a banner is not necessary to activate this option, you only have to define the theme color, which is black by default.  The image below is an example of a pink **Theme Color**:

<p align="center">
  <img src="https://images.ctfassets.net/alneenqid6w5/1ZHkS8bGN3gSZNDyPM1gIC/5d6a1107820453dcd6d84c478bacb3f1/article_8_asset_types_EN.png" alt="article_8_asset_types_EN" width="200" height="30">
</p>

### Asset dimensions

The table below presents the format and limit for each type of asset on Bundle studio, depending on the [layout](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#layout-type-configuring-style) configurations:

| **Asset type** | **Common information** | **Horizontal view Landscape (16:9)** | **Vertical view  Portrait Transmission (9:16)** |
| :---: | :--- | :---: | :---: |
| Banners | <p>You can customize the following aspects of banners:<ul><li>Color</li><li>Text</li><li>Fixed or scrolling</li></ul></p> | Equal | Equal |
| Overlay | **Size limit:** 20 MB / **Extension:** png | **File size:** 1280 x 720 pixels | **File size:** 720 x 1280 pixels |
| Background | **Size limit:** 20 MB / **Extensions:** png, jpg, jpeg | **File size:** 1280 x 720 pixels | **File size:** 720 x 1280 pixels |
| Video | **Size limit:** 200 MB / **Extensions:** mov, webm, mp4 | **File size:** 1280 x 720 pixels | **File size:** 720 x 1280 pixels |
| Logo | **File size:** 200 x 200 pixels / **Extension:** png | Equal | Equal |

### Adding an asset

To add an asset, follow the steps below:

1. On the desired asset option, click the `+` icon.
2. Click to browse the file.
3. Select the file, respecting the asset type format.

After that, the following confirmation message will show: *“The asset was saved with success”*.

<div class = "alert alert-info">
  <p>Every new asset added into your logged area in Bundle studio is saved for future lives and events.</p>
</div>

### Removing an asset

To remove an asset, follow the steps below:

1. Go to the desired asset section.
2. Click the `x` icon on its top right corner of the asset.
3. On the **“Are you sure you want to delete this asset?”** window, click `Delete`. 

## My destinations

In **My destinations** menu option, you can connect to other platforms to transmit the same live on multiple channels, such as Youtube, Facebook, and other VTEX accounts.

<div class = "alert alert-danger">
  <p>Destinations must be configured before the <b>Go Live</b>. Once you start broadcasting, it is no longer possible to connect to other platforms, it would be necessary to create a new event.</p>
</div>

### Connecting to other VTEX account 

To connect different VTEX accounts for the same event transmission, each account must follow the steps below. For this example, the Account A will be the administrator, and Account B, the participant:

**Account A:**

1. [Create](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv) an event.
2. In the **Events** page, click the event arrow button to go to the **Event Information** page.
3. [Turn on](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq) the event.
4. In the [Streaming Studio](#streaming-studio) section, click `Access`.
5. Log in the Bundle studio.
6. Click `Enter the studio`.
7. In the **My destination** menu option, click `Create destination`.
8. In the **Create destinations** window, fill in the fields as shown bellow:
    * **Server:** Insert the **Inbound server** value given by Account B.
    * **Server Key:** Insert the **Server key** value given by Account B.
    * **Platform:** Select `VTEX`.
9. Click `Add destination`.

You will see the confirmation message: *“A new destination has been added”*, and, after a while, you will see the message “Ready to stream!”, indicating that the accounts are connected and can both go to **My Studio >** `Go live`.

**Account B:**

1. [Create](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv) the event.
2. In the **Events** page, click the event arrow button to go to the **Event Information** page.
3. [Turn on](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq) the event.
4. In the [Details](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq#event-details) section, copy the **Inbound server** and **Server key** information and give them to the account you wish to connect. In this case, Account A.

### Connecting to Youtube

To broadcast your event on Youtube, follow the steps below:

1. Create a live event on Youtube. If you wish, you can consult the [Youtube documentation](https://support.google.com/youtube/answer/2474026?hl=en-GB&ref_topic=9257984&sjid=17602134671820533599-SA).
2. Copy the event stream key.
3. On Bundle, right before the Go live, go to **My destinations** menu option.
4. Click `Create destination`.
5. In the **Create destinations** window, fill in the fields **Server** and **Server Key** with the Youtube event keys.
6. In the **Platform** field, select Youtube.
7. Click `Add destination`.

Once you go live, all the content shown on Bundle is going to be automatically streamed on YouTube.

<div class = "alert alert-danger">
  <p>These destinations must be configured before <b>Go Live</b>.</p>
</div>

### Connecting to Facebook

To broadcast your event on Facebook, you must follow almost the same steps for when [connecting to Youtube](#connecting-to-youtube), the differences are you have to provide [new Facebook event keys](https://www.facebook.com/business/help/184100780068012), and select `Facebook` for the **Platform** while creating the destination. 

After adding the Facebook destination, once you go live, all of the content shown on Bundle is automatically streamed on Facebook.

## Chat private

In the **Chat private** menu option, there is a chat for internal communication between the administrator and the other participants presenting the event. This private chat exchanges real-time questions during the transmission, and is useful for internal organization.

## Settings

On the left bottom of the menu, you will find the **Settings**. By clicking it, you will see the camera and audio configurations, which can be adjusted before or during the transmission. Configuring the **Settings** is available for both the administrator and participants hosting the event.

