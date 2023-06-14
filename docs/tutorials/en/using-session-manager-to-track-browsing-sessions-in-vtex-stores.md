---
title: Using Session Manager to track browsing sessions in VTEX stores
id: 1pA0tqsD4BFnJYhQ7ORQBd
status: DRAFT
createdAt: 2019-11-19T20:42:07.386Z
updatedAt: 2022-08-04T22:36:05.292Z
publishedAt: 
firstPublishedAt: 2019-11-19T22:44:09.933Z
contentType: tutorial
productTeam: Identity
author: 6LC2rhKOT6njHIo2w4cMu1
slug: using-session-manager-to-track-browsing-sessions-in-vtex-stores
legacySlug: using-session-manager-to-track-browsing-sessions-in-vtex-stores
subcategory: dajK0sARX2c0MISKKoGoc
---

Session Manager is a system that tracks the current browsing session of all clients on VTEX platforms. Important session information is automatically captured and stored in a secure and easily accessible location. This includes data such as relevant cookies, query strings, authentication credentials, current profile and pricing information, if applicable.

Before Session Manager, a developer would need to ask around to get their job done: get authentication information from the [VTEX ID API](https://help.vtex.com/en/tutorial/checking-which-user-is-currently-authenticated--4vLALC0yrsJydfaY56Zshq), get calculated prices by simulating a shopping cart using the [Checkout API](https://developers.vtex.com/reference/checkout-api-overview), campaign information from the [Promotions & Taxes API](https://developers.vtex.com/reference/rates-and-benefits-api-overview), and so on. 

Now you can make a single request to the [Session Manager API](https://developers.vtex.com/reference/session-manager-api-overview) and receive an aggregated bundle with all the updated information you need from a specific client, instead of making multiple requests to different endpoints. 

This article aims to describe Session Manager from a system design perspective. For further details on how to interact with the Session Manager API, check out our [developer docs](https://developers.vtex.com/reference/session-manager-api-overview).

## Getting and storing session information
Whenever a new device comes in contact with the VTEX infrastructure, Session Manager receives a request for a new session. Events that would trigger this request include visiting a store page, opening the VTEX Admin panel and loading the inStore vendor interface, to name a few. After a new session is created, Session Manager will start receiving all the important information associated to navigation from that specific device. 

Using the Session Manager API, you can make a request to receive the session data you need for your application. This includes important inferences made by VTEX modules - see section [Data available from VTEX apps](#data-available-from-vtex-apps) for more information.

For instance, a user with a specific campaign referral link might have a promotional price table set on his session, which will cause them to see updated prices when navigating the store that created that campaign.

Besides getting session information for a device navigating in the VTEX infrastructure, Session Manager allows you to store your own custom data in that session. This information is easily recoverable and allows you to avoid doing something like setting a cookie to keep track of a specific information on a user. 

<div class="alert alert-info">Session Manager was also built to allow developers to create their own triggers and processing logic. We are still working on the details of that extensible solution, but in the future you should be able to set up the conditional execution of custom code, based on the presence of specific values for parameters in a user's session data.</div>

## Session data aggregation: create and transform calls
Strictly speaking, Session Manager is a backend API system that stores and processes session data contained in JSON objects. Each VTEX account has settings that indicate which installed apps have a session dependency and how they intend to process this information. 

Apps that have a session dependency monitor changes to their inputs and modify session parameters through their outputs. When a session parameter changes, Session Manager notifies all apps monitoring it and listens to their response, which would indicate whether any other parameters should be updated as a result. Session Manager then patches the session data by compiling the responses sent by all apps, if necessary. We refer to this notification / response / update cycle as **transform call** or transform.

Transforms often trigger other transforms, repeating until no further parameter updates are sent by apps. This operation is, naturally, carefully monitored for loop conditions. The diagram below illustrates one such transform cycle:

![EN - Session Manager](https://images.ctfassets.net/alneenqid6w5/1QWb3hs5wfr3Zj38TnpwHY/162fb09edaf6fca3b5cdf3ce7d5a20b2/Session_Manager.jpg)

1. A change was made to session parameter X
2. App A was monitoring session parameter X, so that triggered Transform 1
3. Transform 1 led App A to change session parameter Y
4. Apps B and C were monitoring session parameter Y, so that triggered Transform 2
5. Transform 2 led App B to change session parameter Z
6. App C was monitoring session parameter Z, so that triggered Transform 3
7. Transform 3 had no side-effects on parameters monitored by apps, so the cycle ended and the session was saved until other changes are made.

<div class="alert alert-info">Transform calls are made to all apps simultaneously for the sake of performance. That's why App C was affected both by Transform 2 and Transform 3 - it had no way of knowing that the result of Transform 2 on App B would lead to further changes.</div>

When a new session is created, a simpler version of this cycle is executed, which we call **create call**. All apps that have set their configuration with `RunOnCreate: true` will be notified to run simultaneously with an empty input. If these apps modify any parameters that are monitored by other apps, that triggers a transform cycle that will run until the input dependency is resolved.

## Data available from VTEX apps

### Store (vtex.store-session)

|     |     |
| --- | --- |
| **RunOnCreate** | true |
| **Inputs**        | `public`: cultureInfo, sc, locale |
|                   | `profile`: email, isAuthenticated |
| **Outputs**       | `store`: channel, countryCode, cultureInfo, currencyCode, currencySymbol |

This app is responsible for processing the current user on the session (by e-mail, if any is present) and requesting the corresponding trade policy and related information. 

It is also sensitive to the `sc` input parameter, which is interpreted as a trade policy request; in other words, if it is present, the app checks if the requested trade policy is within the active options for that user and selects it, if possible. Otherwise, the user gets a 401 error if he is not authenticated or 403 if he is. 

The `locale` and `cultureInfo` input parameters are both used to overwrite the `cultureInfo` output parameter to ensure the session language can be set according to the user’s preference.

### Authentication (vtex.authentication-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `cookie`: VtexIdclientAutCookie, VtexIdclientAutCookie_.* |
| **Outputs**       | `authentication`: adminUserId, adminUserEmail, storeUserId, storeUserEmail |

This app is used as our main authentication method: taking the VTEXID cookie from the request, validating it and extracting the user or admin IDs.

### Profile (vtex.profile-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `public`: storeUserEmail |
|                   | `authentication`: storeUserId |
|                   | `impersonate`: storeUserId |
| **Outputs**       | `profile`: id, email, firstName, lastName, phone, document, priceTables, isAuthenticated |

This app makes sure the user information corresponds to the data loaded into the session. 

If the input parameter `storeUserEmail` is defined in the `public` namespace, it assumes there is no authentication cookie. As such, the output parameter `isAuthenticated` is set to `false` and only the `priceTables` output parameter is loaded. On the other hand, if the input parameter `storeUserId` is defined in the `authentication` or `impersonate` namespace, all relevant information is loaded from Master Data.

### Rates and Benefits (vtex.rnb-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `profile`: email |
|                   | `public`: utm_source, utm_campaign, postalCode |
| **Outputs**       | `rnb`: campaigns |

This app integrates with our Rates and benefits system, identifying which campaigns the user is eligible for.

### Checkout (vtex.checkout-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `public`: regionId, country, postalCode, geoCoordinates |
| **Outputs**       | `checkout`: regionId, cartId |

The checkout app deals with everything related to the user's purchasing experience. Currently it looks the user’s location up (to be a valid input the location must include the country and either postalCode or geoCoordinates). The output also contains the id of the cart used during the checkout process.

### Impersonate (vtex.impersonate-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `public`: vtex-impersonated-customer-email |
|                   | `cookie`: vtex-impersonated-customer-email |
|                   | `authentication`: adminUserEmail |
| **Outputs**       | `impersonate`: storeUserId, storeUserEmail, canImpersonate, account |

The impersonate app is the only app on session’s framework that doesn’t come as part of the default bundle and must be manually installed on each store. It enables the feature of customer impersonation, which is particularly useful for telephone centers that must make purchases on the client’s behalf. It receives the vtex-impersonated-customer-email parameter, either through direct POST or cookie, and attempts to impersonate that user using the admin credentials in the session. If such pair has the permission for impersonation, then the impersonated user’s Id and email will be loaded into the session.
