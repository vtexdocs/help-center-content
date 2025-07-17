---
title: "App settings are not erased when you delete the app"
id: 7KXfKLgbc3UDeDSsCgT0Sk
status: PUBLISHED
createdAt: 2024-07-15T22:29:24.058Z
updatedAt: 2024-07-15T22:29:24.867Z
publishedAt: 2024-07-15T22:29:24.867Z
firstPublishedAt: 2024-07-15T22:29:24.867Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: app-settings-are-not-erased-when-you-delete-the-app
locale: en
kiStatus: Backlog
internalReference: 1065954
---

## Summary


When you install an app from the App Store and access its settings/setup, you have the "**Uninstall**" option, which deletes the app from the workspace but keeps its settings, and the "**Delete**" option, which deletes both the app and its settings.
However, when you select the "**Delete**" option and install the app again, you notice that the configuration has not been deleted.


##

## Simulation



- Go to the "App Store";
- Select the app;
- Click on "Get app";
- Click on "Install app";
- Follow the instructions to install the app;
- Fill in the settings (if applicable) and "Save";
- Click on "Delete". The following message will be shown:
 ![](https://vtexhelp.zendesk.com/attachments/token/kM5EhsfVaHLlISckht8rRYumU/?name=image.png)

> _**Do you want to remove the app X?**_
>
> _Are you sure you want to delete this app? All of its saved configurations in all workspaces will be lost, and the app will be removed from your app list._

- Click on "Delete" again to confirm. The app will be deleted;
- Go to the first steps and install the same app;
- Check its settings, and see that the information has not been delete as expected (the information previously filled in will appear there).


##

## Workaround


There is no workaround available. But you can put fictitious information.





