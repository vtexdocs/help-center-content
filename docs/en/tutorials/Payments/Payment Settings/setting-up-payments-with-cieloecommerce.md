---
title: 'Setting up payments with CieloEcommerce'
id: 6zuELBqEo0QzApbU4l7L4
status: PUBLISHED
createdAt: 2023-09-18T14:07:22.540Z
updatedAt: 2024-03-27T17:13:40.793Z
publishedAt: 2024-03-27T17:13:40.793Z
firstPublishedAt: 2023-09-18T15:29:57.321Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cieloecommerce
locale: en
legacySlug: setting-up-payments-with-cieloecommerce
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the CieloEcommerce. With this integration, your store can make sales through credit, debit, private labels and cobranded cards, bank invoices, PIX, among others. 

To configure CieloEcommerce, follow the steps below:

<blockquote><ui>1. In the VTEX Admin, go to <b>Store Settings > Payment > Providers</b>, or type <b>Providers</b> in the search bar at the top of the page.</ui>

<blockquote><ui>2. On the providers screen, click the <b>New Provider</b> button.</ui>

<blockquote><ui>3. Type the name <b>CieloEcommerce</b> in the search bar and click on the name of the provider.</ui>

<blockquote><ui>4. In <b>Provider Authorization</b>, fill in the <b>App key</b> and <b>App token</b> fields with <b>MerchantID</b> and <b>MerchantKey</b> provided by CieloEcommerce.</ui>

<blockquote><ui>5. If you wish to modify the identification name to be displayed for the CieloEcommerce provider on the VTEX Admin screen, enter the information in the <b>Name</b> field in <b>Basic Information</b>.</ui>

<blockquote><ui>6. In <b>Payment Control</b>, select whether you want to activate the provider in a test environment by clicking <b>Enable test mode</b>.</ui>

<blockquote><ui>7. If you want to use <a href="https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx">Payment split</a> in your store, select the option <b>Enable payout split and send payment recipients</b> and indicate the <b>Accountable for payment processing charges</b> and <b>Accountable for chargebacks</b> (marketplace, sellers or marketplaces and sellers).</ui>

<blockquote><ui>8. In <b>Integration</b>, select whether the connector will be used as <b>Adquirencia</b> or <b>Gateway</b>.

<blockquote><ui>9. In <b>Provider</b>, select the acquirer to be used with the CieloEcommerce connector.</ui>

<blockquote><ui>10. In <b>IsSplit</b>, choose whether the split option will be available.</ui>

<blockquote><ui>11. In <b>UseMpi</b>, choose whether transactions will be authenticated (3DS 2.0). This field is mandatory for the debit payment type. If you select "True", go to Step 12. If you select "False", go to Step 13.</ui>

<blockquote><ui>12. Fill in the <b>MpiClientId</b>, <b>MpiClientSecret</b>, <b>MpiMerchantName</b>, <b>MpiMCC</b>, and <b>MpiEstablishmentCode</b> fields with you Mpi access data.</ui>

<blockquote><ui>13. In <b>SoftDescriptor</b>, indicate the information to be displayed to identify the transaction carried out in your store.</ui>

<blockquote><ui>14. In <b>AntifraudProvider</b>, select the antifraud provider you want to use with CieloEcommerce.</ui>

<blockquote>>⚠️ Check with Cielo whether the anti-fraud options in CieloEcommerce are already available for use. If still under development, both fields described in step 15 must be left blank. For more information about using anti-fraud options in your store, visit [Configuring the anti-fraud](https://help.vtex.com/en/tutorial/how-to-configure-the-anti-fraud).</blockquote>
<br>  
<blockquote><ui>15. In <b>Antifraud</b> and <b>AntifraudSequenceCriteria</b>, select the options according to information from CieloEcommerce antifraud.</ui>

<blockquote><ui>16. In <b>Captura</b>, select the period in which payment capture should be requested. Standard time will be held four days after authorization.</ui>

<blockquote><ui>17. Select the <b>UseVerifyCard</b>, <b>AcceptInternationalCard_</b>, <b>AcceptPrePaidCard</b>, <b>SaveCard</b> and <b>CancelRefundType</b> fields according to your settings in CieloEcommerce.</ui>

<blockquote><ui>18. Click <b>Save</b>.</ui>

To configure the payment methods to be processed by CieloEcommerce, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, CieloEcommerce connector may take up to 10 minutes to appear at your store's checkout as a payment option.
