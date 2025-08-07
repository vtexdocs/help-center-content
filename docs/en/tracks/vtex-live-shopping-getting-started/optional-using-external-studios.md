---
title: '(Optional) Using external studios'
id: Dw0QdKI0aGjmyD5Z6z5JC
status: PUBLISHED
createdAt: 2025-07-23T18:10:11.675Z
updatedAt: 2025-07-28T16:13:12.740Z
publishedAt: 2025-07-28T16:13:12.740Z
firstPublishedAt: 2025-07-28T15:08:28.675Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: optional-using-external-studios
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
---

<div class = "alert alert-warning">
  <p>This article is exclusive for accounts broadcasting events from other studios than Bundle.</p>
</div>

Besides the Bundle studio, **Live Shopping** events can be transmitted by other studios while keeping the same functionalities, for example:

* StreamYard
* OBS
* Streamlabs
* vMix

## Connecting external studio

To configure external studio solutions, follow these steps:

1. In your VTEX Admin, [create](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv) the event.
2. In the **Events** page, click the event arrow button to go to the **Event Information** page.
3. [Turn on](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq) the event.
4. In the [Details](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq#event-details) section, copy the **Inbound server** and **Server key** information.
5. In the stream settings of the external studio, fill the fields as shown below:
    * **Server:** Insert the Inbound server value.
    * **Server Key:** Insert the Server key value.

<div class = "alert alert-info">
  <p>Before the <b>Go Live</b>, we recommend you to have an image as a placeholder before starting presenting the event, in order to validate the transmission. The reason is that you might need to adjust final configurations, and then the audience will view this image.</p>
</div>

## Setting quality transmission

For a high quality transmission, including streaming to devices with limited internet signal, you must configure the fields below with certain values:

* **Output > IngestVideoBitrate:** Around 2.400.528 bits / 2400.528 kbps / 2.4 Mb/s.
* **Output > IngestAudioBitrate:** Around 150.000 bits / 150 kbps.
* **Video > IngestFramerate:** Around 30 fps.
* **Output > KeyframeInterval:** Around 2 seconds.

## Transmitting event from external studio

After [configuring where to display the Live Shopping component](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR), and checking with the preview if everything is working properly, you can start transmitting the event. Since the step by step for that will vary according to each studio, we recommend looking for the studio official documentation.

<div class = "alert alert-danger">
  <p>When using external studios, don't try to duplicate the transmission via Bundle. Live Shopping allows one transmission per studio, and the platform will recognize only the first studio transmitting the event.</p>
</div>

## After live-streaming from external studio

When the transmission has ended and the event [status](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status) is `Completed`, you must hide the **Live Shopping** component or remove the script, depending on your frontend solution. While you don’t take this action, the audience will continue to see the black display in your site or landing page.

For the complete step by step, check [Hiding or removing Live Shopping component](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/7e3bP6LjFgxXC210jSpl59).

