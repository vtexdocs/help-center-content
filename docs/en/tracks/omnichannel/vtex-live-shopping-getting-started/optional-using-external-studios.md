---
title: '(Optional) Using external studios'
id: Dw0QdKI0aGjmyD5Z6z5JC
status: PUBLISHED
createdAt: 2025-07-23T18:10:11.675Z
updatedAt: 2025-09-15T21:42:49.757Z
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

> ⚠️ This article only applies to accounts broadcasting events from studios different from Bundle.

In addition to the Bundle studio, **Live Shopping** events can be transmitted from external studios with the same functionalities. Some examples are:

* StreamYard
* OBS
* Streamlabs
* vMix

>❗ When transmitting from an external studio, don't try to duplicate the event transmission via Bundle or another studio. **Live Shopping** allows only one transmission per studio, and the platform will recognize only the first studio transmitting the event.

## Connecting an external studio

To configure external studio solutions, follow these steps:

1. In the VTEX Admin, [create](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv) the event.
2. In the **Events** page, click the event arrow button to go to the **Event Information** page.
3. [Turn on](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq) the event.
4. In the [Details](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq#event-details) section, copy the **Inbound server** and **Server key** information.
5. In the stream settings of the external studio, complete the fields as shown below:
    * **Server:** Enter the Inbound server value.
    * **Server Key:** Enter the Server key value.

> ℹ️ Before clicking **Go Live**, we recommend using an image as a placeholder before starting to present to validate the transmission. This allows you to make final adjustments and avoids showing a black screen to the audience.

## Setting up a quality transmission

For a high-quality transmission, including streaming to devices with limited internet signal, you must configure the fields below with certain values:

* **Output > IngestVideoBitrate:** Around 2.400.528 bits/2400.528 kbps/2.4 Mb/s
* **Output > IngestAudioBitrate:** Around 150.000 bits/150 kbps
* **Video > IngestFramerate:** Around 30 fps
* **Output > KeyframeInterval:** Around 2 seconds

## Transmitting the event from an external studio

After [placing the Live Shopping component](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR) and using the preview to make sure everything is working properly, you can start transmitting the event. Since the steps vary for each studio, we recommend checking the official documentation of that particular studio. 

> ❗ When using external studios, don't try to duplicate the transmission via Bundle. Live Shopping allows one transmission per studio, and the platform will recognize only the first studio transmitting the event.

## After live streaming from an external studio

When the transmission has ended and the event [status](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status) is `Completed`, you must hide the **Live Shopping** component or remove the script, depending on your frontend solution.The audience will continue to see the black screen on your site or landing page until you complete this step.

For the complete instructions, check [Hiding or removing the Live Shopping component](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/7e3bP6LjFgxXC210jSpl59).
