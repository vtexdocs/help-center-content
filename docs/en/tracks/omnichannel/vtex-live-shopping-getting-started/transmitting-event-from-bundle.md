---
title: 'Transmitting events from Bundle'
id: 69PX90vv4oDWQ34nnBkiQt
status: CHANGED
createdAt: 2025-07-23T18:12:38.825Z
updatedAt: 2025-09-15T21:53:55.918Z
publishedAt: 2025-09-08T23:02:43.213Z
firstPublishedAt: 2025-07-28T15:08:36.589Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: transmitting-event-from-bundle
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
order: 10
---

This article presents the steps involved in transmitting your event from Bundle studio.

> ❗ If you're using another studio, check [Transmitting event from external studio](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/Dw0QdKI0aGjmyD5Z6z5JC), and don't try to duplicate the event transmission via Bundle. **Live Shopping** allows only one transmission per studio, and the platform will recognize only the first studio transmitting the event.

The transmission involves the following steps:

1. [Turning on the event](#turning-on-the-event)
2. [Starting the live stream](#starting-the-live-stream)
3. [Ending the transmission](#ending-the-transmission)

> ⚠️ After the live stream starts and during the event, some configurations remain available, while others become unavailable:<ul><li>✅ You can configure the chat.</li><li>✅ You can change the product collections.</li><li>✅ You can configure visual assets.</li><li>✅ You can adjust audio and video settings (external studios only).</li><li>❌ You can't change the layout.</li></ul>

## Turning on the event

By the time you’re ready to transmit the live, you should have your event turned on, and its [status](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status) should be `Live`. The reason is that only turned-on events have all setting options enabled. 

For the complete instructions, see the article [Turning on an event](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq).

## Starting the live stream

To go live, follow the steps below:

> ℹ️ We recommend having a placeholder image before presenting the event to validate the transmission. This is because you might need to adjust final configurations, and the audience will see the chosen image.

1. In the VTEX Admin, go to **Apps > Live Shopping > Events > Event Information** page.
2. In the **Streaming Studio** section, click `Access` to go to [Bundle studio](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX).
3. Once you’re logged into the [My Studio](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX#my-studio) page in Bundle, click `Go Live` on the top right side of the page. If it shows a `Loading` message, wait a few seconds for the `Go live` button to display.
4. In the confirmation window, click `Yes`.

After a five-second countdown is displayed on the player, the event transmission starts, and the player shows the live-streamed content to the audience.

## Ending the transmission

As an administrator, you can either end the event transmission for everyone or leave Bundle studio while still live-streaming the event. 

The main scenarios for each option are the following:

* [Leave Bundle studio while keeping the transmission](#leave-bundle-studio-while-keeping-the-transmission): When someone else hosts the event, and you want to leave the studio. This action will keep the event status as `Live`. 
* [End transmission for everyone](#end-the-transmission-for-everyone): When the event is over, and you want to stop the transmission completely. This will change the event status to `Completed`.

> ⚠️ Once the event reaches the `Completed` [status](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status), it's no longer possible to transmit it live to your audience. You can only display the recording or start a new event.

### Leave Bundle studio while keeping the transmission

There are two ways for the administrator to leave Bundle studio without interfering with the live transmission:

1. Close the Bundle studio page in your browser.
2. On the Bundle **My Studio** page, click the hang-up button at the bottom of the page, then click `Leave Meeting`. 

> ❗ While leaving the transmission, if the administrator chooses the `End meeting for all` option, the transmission will end for everyone. The event will be over, and to start transmitting again, it would be necessary to create a new event.

### End the transmission for everyone

To completely end the live session, follow the steps below (administrators only):

1. In [My Studio](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX#my-studio) in Bundle, click `End live` on the top right of the page.
2. On the window, click `Yes`. This ends the transmission on Bundle, but you can still transmit the event from another studio.
3. In the confirmation window, click `Yes`. This ends the event in VTEX Admin, and you can no longer resume the event, not even from other studios.

Another way to end the transmission from Bundle studio is to click the hang-up button at the bottom of the page and choose `End meeting for all` (administrators only). After that, you’ll see `Finalized live` at the top right of the page, indicating the transmission was successfully ended. 

> Note that if you choose the option `Leave Meeting`, it will be the same as leaving the studio while keeping the transmission live.

> ❗ If you don't want your audience to view a black screen at the end of the transmission, you can display an end-of-transmission image, as explained below:<ol><li>Before ending the transmission, display the ending image in Bundle on an external studio.</li><li>Hide the **Live Shopping** component or remove the code from the store (see [Hiding or removing Live Shopping component](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/7e3bP6LjFgxXC210jSpl59)).</li><li>Wait about 10 minutes after displaying the ending image for the cache to update.</li><li>End the event.</li></ol>
