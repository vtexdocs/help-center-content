---
title: 'How the integration protocol between VTEX and anti-fraud companies works'
id: 4aZtmdpgFikcsQomWyqAOq
status: ARCHIVED
createdAt: 2018-05-08T20:11:35.705Z
updatedAt: 2023-02-02T21:41:15.348Z
publishedAt: 
firstPublishedAt: 2018-05-15T01:34:18.545Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: antifraud-provider
locale: en
legacySlug: antifraud-provider
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

## What is the Antifraud Provider Protocol?

The Antifraud Provider Protocol is the integration protocol between VTEX and companies that provide anti-fraud services.

Through it, VTEX offers a public contract available to all providers that wish to integrate into our platform. Thus, providers gain more autonomy.

The protocol has the following features:
- Processing of synchronous and asynchronous risk analysis.
- Webhook for status notification.

You can find references to the protocol API [here](https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow).

## Concepts
__Provider__: An anti-fraud system or provider that offers this type of service.

__Antifraud Provider Protocol__: integration protocol developed by VTEX.

__Connector__: name of the integration partner provider.

## First steps
Next, we will present step-by-step information on integrating payments with VTEX.

### 1. Commercial phase
The first step is the commercial contact with VTEX, which should be done through [our site](http://partner.vtex.com). Upon completion of the business agreement, the provider is registered and receives an email with the data needed to access the environment of the anti-fraud provider, where you can make the necessary settings and tests.

### 2. Implementing the protocol
Before setting up the VTEX environment, the provider must implement the back-end service required to process the anti-fraud (API). More information about the protocol API [here](https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow).

### 3. Antifraud Provider Administration Panel
After receiving the access data and deploying the backend, the provider can access the approval tool through VTEX Admin. To do this, you must install the Anti-Fraud Provider App from the Apps menu:

![print5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/antifraud-provider_1.png)

Click on the installed app or access `https://{{AccountName}}.myvtex.com/admin/antifraud-provider`, replacing `{{AccountName}}` with the name of your account on the platform. In this environment, you can register the provider back-end configuration data and perform integration tests.

![print6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/antifraud-provider_2.png)

### 4. Initial settings
![print1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/antifraud-provider_3.png)

When you access the environment through the link described in the previous item, you will see a form. Fill in the fields as indicated below:

- __Connector Name__: fill in with the name you want to give to your connector within VTEX. This field can be edited whenever necessary.

- __Service URL__: set the URL of your provider service. This URL will be the base address of the protocol and must follow the format determined by it. For example, if the service URL is *http://10.10.10.10*, the full URL for the endpoint */transactions* will be *http://10.10.10.10/transactions*.

- __Application Key__: Enter the "X-PROVIDER-API-AppKey" value of your provider's request header for testing purposes.

- __Application Token__: Enter the "X-PROVIDER-API-AppToken" value of your provider's request header for testing purposes.

<div class="alert alert warning">
It's important to remember that all HTTPS communication should run exclusively on TLS 1.2.
</div>

<div class="alert alert warning">
Your provider should expect two headers <strong>X-PROVIDER-API-AppKey</strong> and <strong>X-PROVIDER-API-AppToken</strong>. This combination should identify a merchant. All settings that need to be made by the merchant should persist in your provider. The only configuration that VTEX saves about merchants is the combination of X-PROVIDER-API-AppKey and X-PROVIDER-API-AppToken credentials.
</div>

After completing the fields correctly, the system will check the approved transactions through a call to the __*/transactions*__ endpoint of your provider. See the API reference [here](https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow).

The tests that should be done in your integration before sending it to VTEX evaluation are displayed in the next module. You can select which tests you want to run, but for your integration to go through the analysis of our team, __all tests need to be done__. Therefore, we recommend that all of them remain selected.

![print2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/antifraud-provider_4.png)

### 5. Testing
When you click the __Execute tests__ button, the Antifraud Provider will apply the tests in your integration to the different possible scenarios. It's important to remember that __all of them are required__. To run them your service must be in HTTPS. The tests are:

- __Authorize__: This test is done in two steps. First, we need the _received_ status in response to the _Send Antifraud Data_ request for `{{ServiceURL}}/transactions`. We then send a _Get Antifraud Status_ request (with the Transaction ID generated in the previous step) to `{{ServiceURL}}/transactions/transactionId`, expecting the _approved_ status as response.

- __Denied__: Like the previous one, this test is also done in two steps. First, we need the _received_ status in response to the _Send Antifraud Data_ request for `{{ServiceURL}}/transactions`. We then send a _Get Antifraud Status_ request (with the Transaction ID generated in the previous step) to `{{ServiceURL}}/transactions/transactionId`, waiting the status _denied_ as response.

- __AsyncApproved__: This test is divided into three steps. First, we need the _received_ status in response to the _Send Antifraud Data_ request for `{{ServiceURL}}/transactions`. We then send a _Get Antifraud Status_ request (with the Transaction ID generated in the previous step) to `{{ServiceURL}}/transactions/transactionId`, waiting for the status _undefined_ as response. Finally, after 10 seconds, we send another _Get Antifraud Status_ request (with the same Transaction ID generated in the first step) to `{{ServiceURL}}/transactions/transactionId`, but this time waiting for the _approved_ status in response.

- __AsyncDenied__: As in the previous example, this test is also divided into three steps. First, we need the _received_ status in response to the _Send Antifraud Data_ request for `{{ServiceURL}}/transactions`. We then send a _Get Antifraud Status_ request (with the Transaction ID generated in the previous step) to `{{ServiceURL}}/transactions/transactionId`, waiting for the status _undefined_ as response. Finally, after 10 seconds, we send another _Get Antifraud Status_ request (with the same Transaction ID generated in the first step) to `{{ServiceURL}}/transactions/transactionId`, but this time waiting for the _denied_ status in response.

- __HookApproved__: This test is divided into four steps. First, we need the _received_ status in response to the _Send Antifraud Data_ request for `{{ServiceURL}}/transactions`. Then we send a _Get Antifraud Status_ request (with the Transaction ID generated in the previous step) to `{{ServiceURL}}/transactions/transactionId`, waiting for the status _undefined_ as response. Then we wait for 10 seconds for the antifraud provider to POST the URL sent in the _hook_ field of the first step (the POST content should contain the response obtained in that same step). Finally, we send another _Get Antifraud Status_ request (with the same Transaction ID generated in the first step) to `{{ServiceURL}}/transactions/transactionId`, waiting for the _approved_ status in response.

- __HookDenied__: Like the previous one, this test is also divided into four steps. First, we need the _received_ status in response to the _Send Antifraud Data_ request for `{{ServiceURL}}/transactions`. Then we send a _Get Antifraud Status_ request (with the Transaction ID generated in the previous step) to `{{ServiceURL}}/transactions/transactionId`, waiting for the status _undefined_ as response. Then we wait for 10 seconds for the antifraud provider to POST the URL sent in the _hook_ field of the first step (the POST content should contain the response obtained in that same step). Finally, we send a further _Get Antifraud Status_ request (with the same Transaction ID generated in the first step) to `{{ServiceURL}}/transactions/transactionId`, waiting for the _denied_ status as response.

<div class="alert alert info">
For each Antifraud Provider Protocol test, we send a specific ID end to return the expected response. They are:<br>
<strong>Authorize:</strong> ID with end 1<br>
<strong>Denied:</strong> ID with end 2<br>
<strong>AsyncApproved:</strong> ID with end 3<br>
<strong>AsyncDenied:</strong> ID with end 4<br>
<strong>HookApproved:</strong> ID with end 5<br>
<strong>HookDenied:</strong> ID with end 6<br>
</div>

### 6. Results
After running the tests, the system returns the results, both positive and negative. The system also provides information on the expected results for each test. Thus, you have more visibility of what should be corrected in case of error.

![print3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/antifraud-provider_5.png)

To visualize in detail each action performed by the integration (and thus to identify possible errors), just click on the __Show logs__ link. A list of the complete information about the events that happened during the test will be displayed below the results.

![print4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/antifraud-provider_6.png)

When your integration has successfully passed all tests, please open a ticket in our [VTEX support](https://help.vtex.com/pt/support "VTEX Help"). However, before opening the ticket, make sure you have the following information:

- __Connector Name__: a description of the provider. Use max. 16 alphanumeric characters. This name can not be modified after being published.
- __Partner contact__: partner email address in case we need to communicate changes and new features of our protocol.
- __Production Service Provider Endpoint__: the base path that will be used for API calls to the provider, e.g., _https://vtex.pagadito.com_. It has to respond to at least one of the following routes: `{{serviceUrl}}/manifest` or `{{serviceUrl}}/payment-methods`. This endpoint must be publicly available. 
- __Sandbox Service Provider Endpoint__: the base path that will be used in test mode for API calls to the provider. E.g., _https://sandboxserviceproviderendpoint.com_. 
- __Owner account__: the VTEX account name which will be used in callback requests. This account must be available at _{account}.myvtex.com_. 
- __Allowed Accounts__: describe which VTEX accounts from this provider will be available (all accounts or specific accounts).
- __New Payment methods__: inform if this connector supports a payment method that is not yet available in the VTEX Admin. 
- __New Payment method purchase flow__: if a “New Payment method” is supported,  inform whether it works with Redirect or Payment App. For more information, access [Purchase Flows](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows).

The SLA required for the payment team to carry out homologation is 30 days.

## VTEX Credentials
When calling `CallbackURL`, you must specify the authentication headers, which in VTEX are _X-VTEX-API-AppKey_ and _X-VTEX-API-AppToken_. You can find these credentials in VTEX License Manager. These credentials are used by the Antifraud Provider only.

Use the `https://{{AccountName}}.myvtex.com/admin/license-manager/#/home` URL, replacing `{{AccountName}}` with your account name. Then follow the instructions of [this tutorial](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) to learn how to create appKeys and appTokens on our platform.

## Settings in VTEX stores
Once the integration with your anti-fraud is approved, a connector will be made available for VTEX merchants to configure it on their respective websites. To do this, in addition to the contract with your company, the store will need two keys in hand: "X-PROVIDER-API-AppKey" and "X-PROVIDER-API-AppToken".

An example of how the antifraud settings screen will look for the VTEX store:
![print8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/antifraud-provider_7.png)

These keys should be made available by you and will serve to identify the store that hired and is using your anti-fraud service.

## Cardholder Document Configuration
During payment transactions analysis, some anti-fraud providers may choose not to use additional information such as the cardholder’s personal identification. In these cases, the merchant has the autonomy to decide whether or not to request this document from his customer during the checkout procedure.

>⚠️ The configuration option **Cardholder document field** will only be available to the merchant if the anti-fraud provider declares in its [manifest](https://developers.vtex.com/vtex-rest-api/reference/manifest), the cardholder document field (`cardholderDocument`) as `optional`. Learn more at [Cardholder Document Configuration](https://developers.vtex.com/vtex-rest-api/docs/cardholder-document-configuration).

To set up the cardholder document field, follow the steps below:

1. Acess __Admin__ VTEX.
2. Click on __Payments__.
3. Then, click on __Settings__.
4. On the __Gateway Affiliations__ tab, click the __`+`__ botton.
5. Select the anti-fraud provider you wish to use.
6. On the anti-fraud configuration screen, fill in the requested information.
7. In __Cardholder document field,__, select one of the following options:

    - __Display as a required field__: the field will be displayed at checkout with the information “required”, and the customer must fill in the cardholder information to complete the order.
    - __Display as an optional field__: the field will be displayed at checkout with the information “optional”, and the customer will decide whether or not to fill in it. The order can be completed even if the field is not filled in.
    - __Hide Field__: the field will not be displayed at checkout.

<ui>
  8. Click on <b>Save.</b>
  </ui>

After following the steps indicated, the settings made above may take up to 10 minutes to appear at your store’s checkout.
