---
title: 'Renewing API tokens'
id: 7r4AzptYjXErGHadg9LnJ3
status: PUBLISHED
createdAt: 2024-09-30T18:40:04.374Z
updatedAt: 2025-08-13T14:19:22.951Z
publishedAt: 2025-08-13T14:19:22.951Z
firstPublishedAt: 2024-10-08T19:47:39.925Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: renewing-api-tokens
legacySlug: renewing-api-tokens-beta
locale: en
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

The older the token, the greater the risk of exposure and potential damage to the operation. The token renewal procedure guarantees the continuity of your store security and minimizes potential vulnerabilities.  

Renew your API token regularly, ideally before the renewal alert, to keep your store safe.

Follow the steps below to renew the token of an API key:

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Make sure you are in the **Generated** tab.  
3. In the row of the desired API key, click the kebab menu (⋮) and then <i class="fas fa-sync"></i> `Renew Token`.

   You can view the new token from a single-access link, which is valid for 24 hours unless it is accessed.

4. Click `Copy` to copy the single-access link to the new token to the clipboard. This link will only be displayed once.
5. In the section **Delete the old token**, check one of the following options:

   * **Later:** You must [manually delete](#deleting-old-tokens) the old token once the new token is used in the integrations. Both tokens will be valid and functional until the old one is deleted. In the list on the **Generated** tab, in the **Token Duration** column, the duration of both tokens will be displayed, until the old one is deleted.  
   * **Now:** The old token will be deleted from the system at the end of the renewal process and only the new token will be valid.

   > ℹ️ If the page is closed before selecting a deletion method in this step, the **Later** option will be applied, meaning that you must manually delete the old token.

6. Click `Complete`.
7. Access the copied link or share it with the person that will use the new token. The link can only be accessed once and is valid for 24 hours if not accessed.
8. Click `Copy` to copy the API token to the clipboard. This secret will only be displayed once. Save it in a safe place.

![one-time-link-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/api-keys/renewing-api-tokens_1.png)

Once the renewal is completed, you can't renew the token again until the single-access link is accessed or expires within 24 hours. If necessary, you can [undo the token renewal](#undoing-token-renewal) while the link is still valid. 

If the single-access link expires before it is used, repeat the steps to renew the token and generate a new link.

> ⚠️ The official URL for accessing the token always follows the format `share.vtex.com/credentials/{token}`. The `{token}` is a random identifier generated when the key is created or renewed. Check the link format before accessing it to avoid phishing attempts or malicious pages.

## Deleting old tokens

> ⚠️ Ensure the API key is no longer in use by any integration before deleting it. This action cannot be undone.

Follow the instructions below to manually delete an old token after renewal. This procedure is only possible when the **Later** option for deletion was selected during the token renewal process.  

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Make sure you are in the **Generated** tab.  
3. In an API key row with the *Pending deletion \- Old token* alert, click the vertical ellipsis menu (⋮), then click <i class="far fa-trash-alt"></i> `Delete old token`.

   ![delete-pending-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/api-keys/renewing-api-tokens_2.png)

4. Click `Delete` to confirm.  

## Undoing token renewal

> ⚠️ This procedure is only possible if the old token has not been [deleted](#deleting-old-tokens). If the old token has been deleted, you will need to renew the token again or [delete the API key](/en/tutorial/generated-key--7fnU4iZdvZKbxCaT3Ymdjc#delete-key).

If you renewed your token by mistake or forgot to copy the newly generated token, follow the steps below to undo the renewal.  

1.	In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2.	Make sure you are in the **Generated** tab.  
3.	In the row of the desired API key, click the kebab menu (⋮) and then <i class="fas fas fa-sync"></i> `Undo Renewal`.  
4.	Click `Undo` to confirm.

## Learn more

* [API Keys](/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)
* [Configuring API token renewal alert](/en/tutorial/configuring-the-duration-of-api-keys--kcGIFysFt02FDuhsfjQwZ)
* [Generated keys](/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc)
