---
title: '(Optional) Using external studios'
id: Dw0QdKI0aGjmyD5Z6z5JC
status: PUBLISHED
createdAt: 2025-07-23T18:10:11.675Z
updatedAt: 2025-11-19T21:42:49.757Z
publishedAt: 2025-09-15T21:42:49.757Z
firstPublishedAt: 2025-07-28T15:08:28.675Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: optional-using-external-studios
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
order: 9
---

In addition to the Bundle studio, **Live Shopping** events can be transmitted from external studios with the same functionalities. Some examples are:

* StreamYard
* OBS
* Streamlabs
* vMix

>❗ When transmitting from an external studio, don't try to duplicate the event transmission via Bundle or another studio. **Live Shopping** allows only one transmission per studio, and the platform will recognize only the first studio that starts streaming the event.

## Stream method for external studios

To transmit your event from an external studio, follow the steps below:

1. In the VTEX Admin, go to **Apps > Live Shopping > Events**, or type **Events** in the search bar at the top of the page.
2. Click the arrow button of the [event you created](https://help.vtex.com/en/docs/tracks/creating-event) to access the event configuration page.
3. [Turn on](https://help.vtex.com/en/docs/tracks/turning-on-event) the event, by clicking the toggle switch <i class="fa-solid fa-toggle-on"></i> Turn On at the top right.
4. Select the `Stream` tab.
5. On the **Stream method** page, in **Option 2 - Push stream**, copy the **Server URL** and the **Server Key** values.
6. Go to the external studio stream settings and paste the values as shown below:

  * **Server:** Enter the `Server URL` you copied.
  * **Server Key:** Enter the `Server Key` you copied.

7. (Optional) Usually click a confirmation button to save settings.

## Stream settings - Transmission quality

For a high-quality stream, including on devices with limited connectivity, you must configure the studio transmission quality settings. The recommended values are available on the **Stream method** page, in **Stream settings** section, as shown in the image below:

![live_shopping_stream_settings_quality_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/omnichannel/vtex-live-shopping-getting-started/live_shopping_stream_settings_quality_EN.png)

To configure the studio transmission quality, in your external studio, set the following fields to these values:

* **Output = IngestVideoBitrate:** 2.4 Mb/s
* **Output = IngestAudioBitrate:** 150 kbps
* **Video = IngestFramerate:** 30 fps
* **Output = KeyframeInterval:** 2 seconds

## Before the live stream

Before you start the live event, make sure everything works properly:

1. Check the preview to confirm the [Live Shopping component is placed](https://help.vtex.com/en/docs/tracks/placing-the-live-shopping-component) correctly.
2. Check the [event settings](https://help.vtex.com/en/docs/tracks/configuring-event).
3. Check your [stream method](#stream-method-for-external-studios) configuration, including the [transmission quality settings](#stream-settings-transmission-quality).

After that, you can start transmitting the event. Since the steps vary for each studio, we recommend checking the official documentation of that particular studio.

## After live streaming from an external studio

When the transmission has ended and the event [status](https://help.vtex.com/docs/tracks/creating-event#event-status) is `Completed`, you must hide the **Live Shopping** component or remove the script, depending on your frontend solution.The audience will continue to see the black screen on your site or landing page until you complete this step.

For the complete instructions, check [Hiding or removing the Live Shopping component](https://help.vtex.com/docs/tracks/hiding-or-removing-live-shopping-component).
