---
title: 'Payment Provider Protocol '
id: RdsT2spdq80MMwwOeEq0m
status: PUBLISHED
createdAt: 2018-01-02T15:40:00.920Z
updatedAt: 2023-05-31T14:44:41.300Z
publishedAt: 2023-05-31T14:44:41.300Z
firstPublishedAt: 2018-01-02T17:53:48.934Z
contentType: tutorial
productTeam: Financial
author: 4PrB9ACaQ8S0oO4wOmOuUu
slug: payment-provider-protocol
locale: en
legacySlug: payment-provider-protocol
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

## What is the Payment Provider Protocol?
The Payment Provider Protocol is the integration protocol between VTEX and other companies that process payments.

Through it, VTEX offers a public contract available to all providers that wish to integrate into our platform. As a result, providers become more autonomous regarding such integration.

The protocol has the following features:

- On-line approval process.
- Pre-authorization support (2-step capture).
- Mechanism of payment authorization attempt.
- Payment redirection flow support (3P).
- OAuth protocol support for authentication.

More information about the payment protocol flow can be found in the [Payment Protocol flow section](/en/tutorial/payment-provider-protocol#payment-protocol-flow).
You can find references to the protocol API [here](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

## Concepts
__Provider:__ payment system, gateway or provider that processes payments.

__Payment Provider Protocol:__ integration protocol developed by VTEX.

__Connector:__ name of the partner provider that integrates with VTEX.

__Oauth:__ authorization protocol for web APIs designed to allow client applications to access a protected resource on behalf of a user.

__Acquirer:__  a company that specializes in processing payments. It is responsible for transferring the values which the issuing bank receives from the client to the account of your store.

## Implementation prerequisites
### Signing a business partnership agreement for financial services

Implementing, publishing, and updating a payment connector on VTEX requires signing a partnership agreement that is **specific to financial services** covering the details of this subject and platform regulations. If you don’t have a partnership agreement yet but are interested in becoming a payment provider, contact our team through our [website](https://vtex.com/us-en/partner/).

### Access to a VTEX environment

To publish a connector, you need to have a VTEX environment, which you can only get after signing a partnership agreement for financial services. You need the VTEX environment to publish, homologate, update, and have access to our support when developing and maintaining a connector.

If the partner is a SI (Service Implementer) developing integrations for clients or other payment providers, the VTEX account of the main provider must be used and not the account of the contractor agency.

### Payment method requirements
#### Payment providers with credit, debit or cobranded cards (solutions without redirect)

To become an integrated VTEX provider, you must use one of the following solutions:

- The infrastructure where the connector will be built must have the PCI-DSS certificate signed by a QSA (Qualified Security Assessor). More information on the [PCI Security Standards Council](https://www.pcisecuritystandards.org/).
- If you don't have the certificate, the provider may be implemented by using [Secure Proxy](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-secure-proxy).

If the provider is certified or has already started the certification process, you can contact the VTEX commercial team to begin the integration.

The provider must forward the [AOC](https://www.pcisecuritystandards.org/document_library) (Attestation of Compliance for Onsite Assessments - Service Provider Version) fully completed to VTEX, observing the following points:

- __Company Name__: the “URL” field (Part 1a.) must be the same as that of the company requesting the integration procedure. If it is filled in with another name (example: a company acquired by another), it will be necessary to send extra documentation that proves the relationship between the companies, and that the PCI DSS evaluated the provider's service URL.
- __Signature__: document signed by the company representative and the QSA.
- __Expiration Date__: the validity of the AOC is 1 year after the signing date. The AOC issued more than 11 months ago must not be sent to VTEX, that is, less than 30 days before its expiration date.

<div class="alert alert-danger">
The SAQ (Self-Assessment Questionnaire) and AOC (Attestation of Compliance for Onsite Assessments – Merchants Version) documents are not accepted in the VTEX integration process.
</div>
<br>

#### Payment providers with promissory, Brazilian boleto or private label cards (or providers of any kind of card using redirect solutions)

For these types of providers, VTEX does not require evidence of PCI DSS certification. Just contact the VTEX commercial team to begin the integration.

## First steps
Next, we will present step-by-step information on integrating payments with VTEX.

### 1. Implementing the protocol
Before setting up the VTEX environment, the provider must implement the back-end service required to receive and process payments (APIs). More information about the protocol payment flow can be found in the [Payment Protocol flow section](/en/tutorial/payment-provider-protocol#payment-protocol-flow). You can find references to the protocol API [here](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

### 2. Specific use cases
In some cases, connectors can be built for a specific solution. The references below will help you identify such cases:

- [Payment Provider Framework (PPF)](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-provider-framework): Solution for implementing connectors through VTEX IO from a boilerplate, which already comes with most of the work done, including the protocol endpoints. VTEX IO also speeds up the development process and in-store testing.
- [Payment Provider Protocol POS payments](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-ppp-applied-to-pos): PPP application for payments in physical stores using a payment terminal (POS), which can be used with credit and debit cards. The payment flow starts with a purchase made on [inStore](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc), then communication is established with the POS, where the customer inserts the card.

### 3. Payment Provider Homologation 
After receiving the access data and deploying the backend, the provider must install the Payment Provider Test Suite app to access the testing tool. Installation is done on the [VTEX App Store](https://apps.vtex.com/vtex-payment-provider-test-suite/p "VTEX App Store").

![print1](https://images.ctfassets.net/alneenqid6w5/2sZn44SfDSGcUkgouQ2iyu/d9d72ca9a6fa585f959fa932412930d7/print1.png)

<div class="alert alert-warning">
All communication with servers, either during the homologation process or in production, must occur via HTTPS, which by default uses port 443. It is important to remember that all HTTPS communication should be exclusively with <strong>TLS 1.2</strong>.
</div> 

After installing it, check the Other module in Admin's left side menu. Then, select the Payment Provider option to configure it correctly.

This way, you will see two forms: Service Information and Tests.

Fill them out according to the instructions below:

#### Service Information

- __Service URL__: Set the URL for your service provider. This URL will be the protocol’s base address and must follow the format determined by it. For example, if the service URL is *https://10.10.10.10*, the full URL for the */payments* endpoint will be *https://10.10.10.10/payments*.

- __Connector Name__: Fill it in with the name you want to give your connector within VTEX. The name can only have lowercase letters, numerals and hyphens.

- __X-VTEX-API-AppKey__: Enter the value for the "PROVIDER-API-AppKey" on your provider's request header for testing.

- __X-VTEX-API-AppToken__: Enter the value for the "PROVIDER-API-AppToken" on your provider's request header for testing.

<div class="alert alert-warning">
Your provider should expect the headers: <strong>X-VTEX-API-AppKey</strong> and <strong>X-VTEX-API-AppToken</strong>. This combination provides the credentials with which a retailer may be identified. The gateway stores the retailers' credentials as well as other parameters which are used to configure the affiliation and sends them to the provider during the transaction process.
</div>

![Payment Provider Test Suite 0](https://images.ctfassets.net/alneenqid6w5/3V1eMOFEQ8Mg4ygC46G4AY/15d41dae35aaa91f3dd9b55e1bdcee1f/Payment_Provider_Test_Suite_0.jpg)

#### Tests

After reviewing all fields, click on the __CHECK URL__ button.

The system will verify the payment methods through a call to your provider's __/manifest__ endpoint. See the API reference [here](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#get-/manifest).

After the call, the endpoints of the available operations from your provider will be identified and the tests corresponding to each operation will be automatically enabled.

You can select which tests you want to run, but for your integration to go through our team’s analysis, __all automatically enabled tests need to be performed__. Therefore, we recommend that all of them remain selected.

![Payment Provider Test Suite 1](https://images.ctfassets.net/alneenqid6w5/5LROAprSeFd1O64M2WCisC/af4e2408feb2d1e5dfb9b9bac7067f6d/Payment_Provider_Test_Suite_1.jpg)

### 4. Testing
When you click the __RUN TESTS__ button, the Payment Provider will apply the tests in your integration to the different possible scenarios. It's important to remember that to run them, your service must be in HTTPS. The tests are:

- __Authorize__: This test is divided into three stages. At first, we send a _Create Payments_ request to `{{ServiceURL}}/payments`, waiting the _approved_ status as response. On the second, a _Settle Payment_ request is sent to `/payments/{PAYMENT_ID}/settlements` and we expect a response with _settleId_ filled in. Finally, we send a _Refund Payment_ request to `/payments/{PAYMENT_ID}/refunds`, waiting for a reply with _refundId_ filled in.

- __Denied__: In this test, we send a _Create Payments_ request to `{{ServiceURL}}/payments`, waiting for the _denied_ status to be answered.

- __Cancel__: For this test, we first need the _approved_ status as response to the _Create Payments_ request for `{{ServiceURL}}/payments`. We then send a _Cancel Payment_ request to `/payments/{PAYMENT_ID}/cancellations` and expect a response with _cancelled_ status.

- __AsyncApproved__: This test is divided into two steps. At first, we send a _Create Payments_ request to `{{ServiceURL}}/payments`, waiting for the _undefined_ status to be answered. Then we expect to receive the same response within 15 seconds, but with _approved_ status on a POST in the URL sent in the _callbackUrl_ field. After the integration is in production, this last call made by callbackUrl is authenticated with the partner environment keys: _vtex-app-key_ and _vtex-app-token_.

- __AsyncDenied__: Like the previous one, this test is divided into two steps. At first, we send a _Create Payments_ request to `{{ServiceURL}}/payments`, waiting for the _undefined_ status in the response. Then we expect to receive the same response within 15 seconds, but with _denied_ status on a POST in the URL sent in the _callbackUrl_ field. After the integration is in production, this last call made by callbackUrl is authenticated with the partner environment keys: _vtex-app-key_ and _vtex-app-token_.

- __BankInvoice__: In this test, we send a _Create Payments_ request to `{{ServiceURL}}/payments`, waiting for the response to come with the _undefined_ status and the `bankIssueInvoiceUrl` field filled in with the ticket URL. Then we expect to receive the same response within 15 seconds, but with _approved_ status on a POST in the URL sent in the _callbackUrl_ field. When the integration is in production, this last call made by callbackUrl will be authenticated with the partner environment keys: _vtex-app-key_ and _vtex-app-token_.

- __Redirect__: This test is divided into two steps. At first, we send a _Create Payments_ request to `{{ServiceURL}}/payments`, waiting for the response to come with the _undefined_ status and the `redirectUrl` field filled with the URL that will be used to redirect the client. Then we expect to receive the same response within 15 seconds, but with _approved_ status on a POST in the URL sent in the _callbackUrl_ field. When the integration is in production, this last call made by callbackUrl will be authenticated with the partner environment keys: _vtex-app-key_ and _vtex-app-token_. For the connector that will use Redirect, there is no need to pass all the Test Suit tests, only the Redirect one.

<div class="alert alert-warning">
In the case of credit cards, the required tests are: <strong>Authorize</strong>, <strong>Denied</strong>, <strong>Cancel</strong>, <strong>AsyncApproved</strong> and <strong>AsyncDenied</strong>.
</div>

<div class="alert alert-info">
For each credit card test, we send a specific number to return the expected response. They are:<br>
<strong>Response with status approved:</strong> card number 4444333322221111<br>
<strong>Response with status denied:</strong> card number 4444333322221112<br>
<strong>Response with status undefined and return in callbackUrl with status approved:</strong> card number 4222222222222224<br>
<strong>Response with status undefined and return in callbackUrl with status denied:</strong> card number 4222222222222225<br>
</div>

### 5. Results
After running the tests, the system returns the results, both positive and negative. The system also provides information on the expected results for each test. Thus, you have more visibility about what should be adjusted in case of error.

![Payment Provider Test Suite 2](https://images.ctfassets.net/alneenqid6w5/6o9b9Wz3tSKiU6mwEssEgs/38e5f5d1391d10ca831eba5682c5544b/Payment_Provider_Test_Suite_2.jpg)

To see in detail each action performed by the integration (and thus to identify possible errors), just click on the __TRY LOADING AGAIN?__ button. A list of the complete information about the events that happened during the test will be displayed below the results.

![Payment Provider Test Suite Logs](https://images.ctfassets.net/alneenqid6w5/3FCFc1FA7L6ILyXB8NSmA3/12a0a237d1c8725b8eeb9bb61eb48fbc/Payment_Provider_Test_Suite_Logs.jpg)

![Payment Provider Test Suite 3](https://images.ctfassets.net/alneenqid6w5/7svc9sEJaMiwsYK0ykU0SS/590453ef17cda1dab3b1bb4342f1d9d1/Payment_Provider_Test_Suite_3.jpg)

When your integration has successfully passed all tests, please open a ticket in our [VTEX support](/en/support "VTEX Help"). However, before opening the ticket, make sure you have the following information:

- __Connector Name__: a description of the provider. Use max. 16 alphanumeric characters. This name can not be modified after being published.
- __Partner contact__: partner email address in case we need to communicate changes and new features of our protocol.
- __Production Service Provider Endpoint__: the base path that will be used for API calls to the provider, e.g., _https://vtex.pagseguro.com_. It has to respond to the route `{{serviceUrl}}/manifest`. This endpoint must be publicly available. 
- __Sandbox Service Provider Endpoint__: the base path that will be used in test mode for API calls to the provider. E.g., _https://sandboxserviceproviderendpoint.com_. 
- __Owner account__: the VTEX account name which will be used in callback requests. This account must be available at _{account}.myvtex.com_. 
- __Allowed Accounts__: describe which VTEX accounts from this provider will be available (all accounts or specific accounts).
- __New Payment methods__: inform if this connector supports a payment method that is not yet available in the VTEX Admin. 
- __New Payment method purchase flow__: if a “New Payment method” is supported,  inform whether it works with Redirect or Payment App. For more information, access [Purchase Flows](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows).

<div class="alert alert-warning">
The SLA required for the payment team to carry out the homologation is 30 days. This term will start only after the submission of the document <b>Master Partner Agreement for Financial Services (MPA)</b>. For homologation requests without using the MPA, the SLA term may be extended due to the need for additional analysis by the payment team.
</div>

## Payment protocol flow
Here we explain the integrated payment stream in detail. The image below illustrates the entire flow, showing VTEX Payments and the responsibilities of your supplier.

It all starts with requesting a new payment after the creation of a new order. VTEX creates a new payment representation and proceeds to the payments processing.

![fluxo-atualizado-ppp](https://images.ctfassets.net/alneenqid6w5/7lQZhSFEff1iaN7t2UVVNE/2890bc7073210c268d7d429d0162c9b7/FLUXO1.png)

### Payment Authorization

At this point VTEX calls the __*/payments*__ endpoint and sends a payload with the payment data to your provider. The provider must process this data and send back the response, which must contain one of the status values: __approved__, __denied__, or __undefined__.

The __undefined__ status represents the state where the provider could not finish processing the payment. This may be due to a long processing time or some asynchronous processing.

In any case, once the processing is completed and the provider has a final status (__approved__ or __denied__), it must call our `callbackUrl`. We submit the `callbackUrl` in the body of the __/payments__ request. There are two possible flows when using the `callbackUrl` depending on whether your integration is hosted on the partner infrastructure or on VTEX IO:

- __Without VTEX IO:__ `callbackUrl` contains a callback endpoint for the provider to notify the gateway of the updated status.
- __With VTEX IO:__ `callbackUrl` contains a retry endpoint. When the provider uses this endpoint to call the gateway, a new Create Payment (/payments) request is made from the gateway to the provider, and the gateway receives the updated payment status in response to this request.

The complete flow with __undefined__ status and use of notification can be seen below:

![Payment authorization callback notification flow](https://images.ctfassets.net/alneenqid6w5/2jMjUV7EZuzqN5L1OCQgIJ/a72be587d650da053ecbe220a5daa642/image1.png)

1. The payment authorization is initiated when the gateway calls the Create Payment (__/payment__) endpoint for the provider. The `callbackUrl` field is submitted in the body of the request and contains the URL to send the notification.
2. The payment occurs asynchronously (it does not generate the final status when the transaction is initiated). The gateway then receives the response with __undefined__ status and waits for the payment processing to be completed. Finally, once the processing is completed, the final status (__approved__ or __denied__) is updated.
3. When the payment is processed, the acquirer triggers a webhook to the provider with the new status.
4. The provider, upon receiving the call through the webhook, calls the notification endpoint and returns the updated status to the gateway.

The complete flow with __undefined__ status and use of __retry__ can be seen below:

![Payment authorization callback retry flow](https://images.ctfassets.net/alneenqid6w5/5kGkX4QGLUPNfclwMdibax/3f43bcbf5d48a9c459b553ca6ad7b216/image2.png)

1. The payment authorization is initiated when the gateway calls the Create Payment (__/payment__) endpoint for the provider. The `callbackUrl` field is submitted in the body of the request and contains the URL of the retry endpoint.
2. The payment occurs asynchronously (it does not generate the final status when the transaction is initiated). The gateway then receives the response with __undefined__ status and waits for the payment processing to be completed. Finally, once the processing is completed, the final status (__approved__ or __denied__) is updated.
3. When the payment is processed, the acquirer triggers a webhook to the provider with the new status.
4. The provider, upon receiving the call through the webhook, calls the __retry__ endpoint to the gateway, requesting it to call the __/payment__ endpoint again. __Retry__ does not require any payload.
5. After receiving __retry__, the gateway calls the __/payment__ endpoint again. Finally, the gateway receives the response from the provider with the new status (__approved__ or __denied__).

#### Callback URL

The `callbackUrl` field contains an URL that the payment provider uses to make a callback and inform our gateway of the final payment status: `approved` or `denied`. 

This URL has some query parameters, including the `X-VTEX-signature`. This parameter is mandatory and contains a signature token to identify that the request has been generated from VTEX as a security measure. The signature token has at most 32 characters. You can check an example of callback URL with the signature token below:

```
https://gatewayqa.vtexpayments.com.br/api/pvt/payment-provider/transactions/8FB0F111111122222333344449984ACB/payments/A2A9A25B11111111222222333327883C/callback?accountName=teampaymentsintegrations&X-VTEX-signature=R123456789aBcDeFGHij1234567890tk
```

In the [Transactions page of the Admin](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details--tutorials_452), the signature token appears masked for security reasons, as in this example: `X-VTEX-signature=Rj******tk`.

When making the callback request, we recommend that payment providers use the callback URL exactly as received, which guarantees that all the parameters are included.

When calling Callback URL, your provider should send in the request the *X-VTEX-API-AppKey* and *X-VTEX-API-AppToken* headers. Check more information about this in the [VTEX credentials section](/en/tutorial/payment-provider-protocol#vtex-credentials).

<div class="alert alert-danger">
In addition to the Callback URL, if the status is <strong>undefined</strong>, VTEX will try again to call the payment authorization endpoint. If the status returned on these calls remains <strong>undefined</strong>, calls will continue for up to 7 days. That's why <strong>it's important that your provider be ready to receive the same payment authorization several times</strong>.
</div>

Once the payment has been processed by your provider, either directly or asynchronously, we move the payment transaction within VTEX to the *authorized* or *canceled* status, according to the processing response status.

Check more references on the authorization API [here](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

### Refund/Cancellation
After the first call for payment authorization, the store may cancel the order at any time. At the time of cancellation, the following situations may occur:

1. __Payment transaction has already been settled__: the cancellation request will then result in a refund call to the provider endpoint _/payments/{id}/refunds_, where _{id}_ stands for the payment ID in VTEX. 
2. __Payment transaction has not yet been settled__: we will call the provider’s endpoint _/payments/{id}/cancellations_, where _{id}_ is the payment ID in VTEX. If there is any difficulty in processing the automatic cancellation, an email will be sent to the merchant so that he can manually cancel it.

The Payment Provider Protocol also allows partial refunds. For example, if after completing a purchase in the amount of USD 1,000, it is necessary to refund the customer in the amount of USD 300, two scenarios are possible:

1. __Payment has already been settled__: a partial refund of USD 300 will be made to the customer. The remaining amount (USD 700) remains at the merchant's disposal.
2. __Payment has not yet been settled__: a settlement occurs in the amount of USD 300 and a partial settlement approval in the amount of USD 700 will be made to the merchant.  

More information about the refund and cancellation API [here](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

### Settlement

If the payment transaction is authorized in VTEX Payments, it can receive settlement requests. When we receive a settlement request, we call the __/payments/{id}/settlements__ provider endpoint, where *{id}* is the payment ID inside VTEX.

When the provider receives a request for settlement, it must settle the payment and respond with settlement information. If this call fails, we do some retries for up to 1 day.

<div class="alert alert-danger">
Your provider must be prepared to receive the same settlement call multiple times.
</div>

If the settlement call works fine, we move the payment transaction to the *Finished* status, and the stream ends successfully.

More information about the Settlement API [here](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

## VTEX Credentials

When calling `CallbackURL`, you must specify the authentication headers, which in VTEX are _X-VTEX-API-AppKey_ and _X-VTEX-API-AppToken_. You can find these credentials (which are unique to your account) in the VTEX License Manager module.

Use the `https://{{AccountName}}.myvtex.com/admin/license-manager/#/home` URL, replacing `{{AccountName}}` with your account name. Then follow the instructions explained in [this tutorial](https://developers.vtex.com/docs/guides/authentication-overview) to learn how to create appKeys and appTokens.
