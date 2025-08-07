---
title: 'Transmitting event from Bundle'
id: 69PX90vv4oDWQ34nnBkiQt
status: PUBLISHED
createdAt: 2025-07-23T18:12:38.825Z
updatedAt: 2025-07-28T16:18:23.933Z
publishedAt: 2025-07-28T16:18:23.933Z
firstPublishedAt: 2025-07-28T15:08:36.589Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: transmitting-event-from-bundle
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
---

This article presents the steps involved in transmitting your event from Bundle studio.

<div class = "alert alert-danger">
  <p>If you are using another studio, check the <a href="https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/Dw0QdKI0aGjmyD5Z6z5JC">Using external studios</a>, and don't try to duplicate the event transmission via Bundle. The <b>Live Shopping</b> allows one transmission per studio, and the platform will recognize only the first studio transmitting the event.</p>
</div>

The transmission occurs in the following way:

1. [Turning on the event](#turning-on-the-event)
2. [Starting the Go live](#starting-the-go-live)
3. [Ending the transmission](#ending-the-transmission)

<div class = "alert alert-warning">
  <p>After the <b>Go live</b> and while the event is transmitted, some configurations are still allowed, but others are unavailable:<ul><li>✅ You can configure the chat.</li><li>✅ You can change the products collections.</li><li>✅ You can configure the visual assets.</li><li>✅ You can adjust audio and video settings (external studios only).</li><li>❌ You can't change the layout.</li></ul></p>
</div>

## Turning on the event

By the time you are ready to transmit the live, you should already have your event turned on, and its [status](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status) should be `Live`. The reason is that only turned on events have all setting options enabled. 

For the complete step by step, see the [Turning on event](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq).

## Starting the Go live

To go live, follow the steps below:

<div class = "alert alert-info">
  <p>We recommend you to have an image as a placeholder before starting presenting the event, in order to validate the transmission. The reason is that you might need to adjust final configurations, and then the audience will view this image.</p>
</div>

1. In the VTEX Admin, access **Apps > Live Shopping > Events > Event Information** page.
2. In the **Streaming Studio** section, click `Access` to go to the [Bundle studio](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX).
3. Once you’re logged into the [My Studio](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX#my-studio) page in Bundle, click `Go Live` on the right top of the page. If it shows a `Loading` message, wait a few seconds for the `Go live` button to appear.
4. In the confirmation window, click `Yes`.

After a five seconds countdown shown on the player, the event transmission starts, and what you see in the player is the content live-streamed to the audience.

## Ending the transmission

As an administrator, you can end the event transmission for everyone, or leave the Bundle studio but keep live-streaming the event. 

The main scenarios for each option are the following:

* [Leave Bundle studio while keep transmitting](#leave-bundle-studio-while-keep-transmitting): The event is being hosted for someone else, and you want to leave the studio. This action will keep the event status as `Live`. 
* [End transmission for everyone](#end-transmission-for-everyone): The event is over, and you want to completely stop transmitting. This will change the event status to `Completed`.

<div class = "alert alert-warning">
  <p>Once the event reaches the <a href="https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status">status</a> <code>Completed</code>, it is no longer possible to display it, you can only create a new event.</p>
</div>

### Leave Bundle studio while keep transmitting

There are two ways for the administrator to leave Bundle without interfering on the live transmission:

1. Close the Bundle studio page on your browser.
2. On the Bundle **My Studio** page, click the hang-up button on the bottom of the page, then click `Leave Meeting`.

<div class = "alert alert-danger">
  <p>While leaving the transmission, if the administrator chooses the option `End meeting for all`, it will be the same as ending the transmission for everyone. The event will be over and it will be necessary to create a new event.</p>
</div>

### End transmission for everyone

To completely end the live, follow the steps below (administrators only):

1. In [My Studio](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX#my-studio) in Bundle, click `End live` on the right top of the page.
2. On the window, click `Yes`. This ends the transmission on Bundle, but you can still transmit the event from another studio.
3. In the confirmation window, click `Yes`. This ends the event on VTEX Admin, and you can no longer resume the event, not even from other studios.

Another way to finalize the transmission from Bundle, would be to click the hang-up button on the bottom of the page, and choose `End meeting for all` (administrators only). After that, you will see **Finalized live** on the right top of the page, indicating the transmission was successfully ended.

> Note that if you choose the option `Leave Meeting`, it will be the same as leaving the studio but keep transmitting.

<div class = "alert alert-danger">
  <p>When you end an event, the audience sees a black screen. To avoid this, we recommend displaying an image that represents the end of the transmission. The correct way to do it is the following:<ol><li>Before ending the transmission, display the ending image in Bundle on an external studio.</li><li>Hide the <b>Live Shopping</b> component or remove the code from the store (check <a href="https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/7e3bP6LjFgxXC210jSpl59">Hiding or removing Live Shopping component</a>).</li><li>Wait about 10 minutes after displaying the ending image for the cache to update.</li><li>End the event.</li></ol></p>
</div>

