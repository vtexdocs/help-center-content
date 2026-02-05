---
title: 'API keys: Improvements for more security, control, and visibility'
id: 5shFvP1QiNRdMllp77iVXA
status: PUBLISHED
createdAt: 2025-08-12T22:04:47.768Z
updatedAt: 2025-08-13T14:29:17.461Z
publishedAt: 2025-08-13T14:29:17.461Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2025-08-12-api-keys-improvements-for-more-security-control-and-visibility
locale: en
legacySlug: api-keys-improvements-for-more-security-control-and-visibility
announcementImageID: 'undefined'
announcementSynopsisEN: "We've updated the API keys experience with export options, improved search, alerts, and one-time access links."
---

To optimize access credential management and increase security, we've enhanced the **API keys** experience. These updates are now available to all accounts.

![generated-keys-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2025/august/2025-08-12-api-keys-improvements-for-more-security-control-and-visibility_1.png)

## What has changed?

We've grouped the new features into three categories to improve security, simplify administration, and increase visibility of your API keys.

### Secure sharing

Now, instead of viewing the new token directly when generating and renewing it, you will receive a single-access link. This change aims to increase security when sharing sensitive data and reduce the attack surface.

The single-access link can be copied for later access or shared with the person who needs to use it. The link can only be accessed once, as it expires when clicked. If there are no interactions within 24 hours, the link also expires.

![one-time-link-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2025/august/2025-08-12-api-keys-improvements-for-more-security-control-and-visibility_2.png)

> ⚠️ The official URL for accessing the token always follows the format `share.vtex.com/credentials/{token}`. The `{token}` is a random identifier generated when the key is created or renewed. Check the link format before accessing it to avoid phishing attempts or malicious pages.

### Simpler management

* **API key export**: Now you can generate an XLSX file containing information on both external API keys and the ones created in your account.  

* **Enhanced search feature**: The API key list now supports searching by nickname in addition to the original key name.

### Alert optimization

* **Token renewal**: We've removed the **Token duration** column to simplify key management. The system now shows renewal alerts based on the configured period (3 or 6 months), while maintaining the token's validity.  

  See below how alerts display in the API key row:

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2025/august/2025-08-12-api-keys-improvements-for-more-security-control-and-visibility_3.png" alt="renew-recommended-en" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
       The orange alert means the token has exceeded the recommended usage period by up to three months.
    </td>
  </tr>
</table>

<br>

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2025/august/2025-08-12-api-keys-improvements-for-more-security-control-and-visibility_4.png" alt="renew-highly-recommended-en" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
       The red alert means the token has been in use for three or more months beyond the specified period.
    </td>
  </tr>
</table>

* **Pending token deletion**: We've added alerts to notify you when the deletion of an old token is pending after [renewal](/en/docs/tutorials/renewing-api-tokens).

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2025/august/2025-08-12-api-keys-improvements-for-more-security-control-and-visibility_5.png" alt="pending-deletion-alert-en" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
      General alert, at the top of the **Generated** tab.
    </td>
  </tr>
</table>

<br>

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2025/august/2025-08-12-api-keys-improvements-for-more-security-control-and-visibility_6.png" alt="delete-pending-en" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
      Alert in the row of the specific generated key.
    </td>
  </tr>
</table>

## Why did we make this change?

We made these improvements to provide a more intuitive and complete experience for managing API keys, boosting operational security and efficiency.

The goal is to offer greater security and ease of use, including:

* Increased protection when sharing tokens, reducing the risk of accidental exposure.  
* Streamlined collaboration between account management and development teams.

## What needs to be done?

No action is needed. This update will be automatically applied to all accounts.

See the updated documentation to explore all features:

* [API keys](/en/tutorial/api-keys)  
* [External keys](/en/tutorial/external-keys)  
* [Generated keys](/en/tutorial/generated-keys)  
* [Configuring alerts to renew API tokens](/en/tutorial/configuring-alerts-to-renew-api-tokens)  
* [Exporting API keys](/en/tutorial/exporting-api-keys)  
* [Renewing API tokens](/en/tutorial/renewing-api-tokens)  

