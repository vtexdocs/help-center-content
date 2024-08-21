---
title: 'Recovering abandoned checkouts with WhatsApp AI Campaigns'
id: 20i0zLQHt72LKzVEmk1CRZ
status: PUBLISHED
createdAt: 2024-06-25T11:27:41.160Z
updatedAt: 2024-06-25T16:27:45.935Z
publishedAt: 2024-06-25T16:27:45.935Z
firstPublishedAt: 2024-06-25T15:29:15.011Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slug: recovering-abandoned-checkouts-with-whatsapp-ai-campaigns
locale: en
legacySlug: recovering-abandoned-checkouts-with-whatsapp-ai-campaigns
subcategory: 4SC2gPmUH3cHD5HjGfQ5Vg
---

WhatsApp AI Campaigns is a feature developed by VTEX to recover abandoned checkouts.

When a user leaves the payment page, the platform identifies this action. If the user does not return to complete the order within 1 hour, the feature sends them a notification via WhatsApp.

The main advantages of this feature are:

- **Improved customer experience:** Messages can be personalized to increase relevance and strengthen the relationship with the brand.

- **Increased conversion rates and sales:** The feature encourages customers to return to the payment page to complete their purchase, thereby increasing sales and conversion rates for retailers.

<div class = "alert alert-info">
WhatsApp AI Campaigns is only available for stores using <a href="https://help.vtex.com/tracks/store-development--3fHF3GIjK8UugnQKIakpl9/5DTcawNjc5MovtD7HNqURl#store-framework">Store Framework</a> that don't have Checkout customizations.
</div>

## Activating WhatsApp AI Campaigns

To activate the WhatsApp AI Campaigns feature, you must [install the Connectly app](#installing-conectly-app) and then [configure a WhatsApp number in the app](#configuring-new-whatsapp-number).

### Installing the Connectly app

To install the Connectly app, follow the steps below:

1. Go to VTEX [App Store](https://apps.vtex.com/).

2. Type Connectly in the search bar.

3. Click Connectly app, then click `Get App`.

4. Click `Place Order`.

5. Click `Go to Install Page', and you will be redirected to the Apps section in the VTEX Admin.

6. On the Connectlyvtex app installation page, click `Install`.

7. Click `Save`.

### Configuring a new WhatsApp number

To configure a new WhatsApp number, you need to have admin access to your Facebook profile. Follow these steps to configure a new number and link it:

<div class = "alert alert-info">
We recommend creating a new phone number exclusively for linking to WhatsApp Business. This helps to avoid losing access to numbers previously used for other purposes.
</div>

<ol start="1">
  <li>In the VTEX Admin, go to <strong>Promotions &gt; WhatsApp Campaigns &gt; Overview</strong>, or type <strong>WhatsApp Campaigns Overview</strong> in the search bar at the top of the page.</li>
  <li>Click <code>Configure Account</code>.</li>
  <li>Select <strong>Yes, I want a free number (recommended)</strong>, and click <code>Next</code>.</li>
  <li>Copy the phone number provided, and click <code>Connect</code> to link this number to your Meta for business account.</li>
  <li>Click <code>Continue as User</code>.</li>
  <li>Click <code>Get Started</code>.</li>
  <li>Confirm that the <strong>Business Portfolio</strong>, <strong>Company Name</strong>, <strong>Website</strong>, or <strong>Company Business Profile</strong> and <strong>Country</strong> information is correct.</li>
  <li>Click <code>Next</code>.</li>
</ol>

<p>Creating a WhatsApp Business account:</p>

<ol start="9">
  <li>Select <strong>Create new WhatsApp Business account</strong> and <strong>Create a new WhatsApp Business profile</strong>.</li>
  <li>Click <code>Continue</code>.</li>
  <li>Complete the fields below:
    <ul>
      <li><strong>WhatsApp Business account name (internal)</strong>, for example: VTEX Store name.</li>
      <li><strong>WhatsApp Business display name (visible to customers)</strong>, for example: Store name.</li>
      <li><strong>Category</strong>.</li>
      <li>Click <code>Continue to Step 3</code></li>
    </ul>
  </li>
  <li>Paste the phone number you copied in the previous step, select the option <strong>SMS</strong>, and click <code>Send Code</code>.</li>
</ol>

>⚠️ The number generated may be American, but if your Facebook page is verified, your customers will see your company name. If it is not verified, we recommend following the [verification process with Meta](https://www.facebook.com/business/help/2058515294227817?id=180505742745347).

<ol start="13">
  <li>Copy the verification code displayed in the VTEX Admin.</li>
  <li>Paste the verification code in the field within the Facebook popup, and click <code>Verify</code>.</li>
  <li>Click <code>OK</code>.</li>
  <li>Click <code>Complete</code>.</li>
  <li>Choose a 400x400 px logo for your new WhatsApp number. The image does not need to be high resolution.</li>
</ol>

<p>Accepting the terms and conditions:</p>

<ol start="18">
  <li>Review the Terms and Conditions.</li>
  <li>Click <code>I Agree and Accept</code>.</li>
  <li>Click <code>Complete</code>.</li>
</ol>

>⚠️ Once an abandoned checkout recovery campaign has been activated, it can take up to 48 hours for analytics metrics to start being displayed.

<div class = "alert alert-info">
Learn more about <a href="https://help.vtex.com/en/tutorial/gerenciamento-e-detalhes-do-whatsapp-ai-campaigns--q9JqDErMqGV4zvsYqkD4s">WhatsApp AI Campaigns management and details</a>.
</div>

