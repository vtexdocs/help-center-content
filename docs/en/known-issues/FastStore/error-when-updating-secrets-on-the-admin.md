---
title: "Error when updating secrets on the Admin"
id: V5MAN3bb0peDm5qhHpg6r
status: PUBLISHED
createdAt: 2025-05-27T12:26:53.265Z
updatedAt: 2025-06-02T13:06:53.466Z
publishedAt: 2025-06-02T13:06:53.466Z
firstPublishedAt: 2025-05-27T12:26:54.455Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: error-when-updating-secrets-on-the-admin
locale: en
kiStatus: Fixed
internalReference: 1233661
---

## Summary


When using Webops and trying to edit a secret that you already added to the UI feature, you may get the error:

    "message": "Failed to update secret in Vercel. AWS update blocked. Error: An error occurred while updating secret in Vercel. More info: Environment variable with key \"\" not found"



##

## Simulation



- If you're using Webops, try adding a new secret on the Ui;
- Click to update the secret;
- You'll receive a 500 Internal Server Error with the message above.


##

## Workaround


N/A





