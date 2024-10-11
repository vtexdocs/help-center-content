---
title: 'App pricing models'
id: 2ZKBKxLe08Q6seA6sCi6o2
status: ARCHIVED
createdAt: 2018-06-12T23:17:22.336Z
updatedAt: 2021-07-14T23:48:12.812Z
publishedAt: 
firstPublishedAt: 2018-06-12T23:36:33.096Z
contentType: tutorial
productTeam: Others
author: 5dYWGfGKUwkI86Gomk6AcQ
slugEN: app-pricing-options
locale: en
legacySlug: app-pricing-options
subcategoryId: 3e2VLdLao8GGk4sAmMmwmi
---

## Billing Options

Developers who whish to charge monthly for their applications must set the `billingOptions` field in your `manifest.json` file following a set of rules. All billing options describe one-year subscriptions with monthly charge frequency.

Writing your Billing Options is a necessary step to distribute your application in the VTEX ecosystem. Without them, the visibility of your application is restricted to the account where it was published.

You have 3 ways to monetize your app (consider that US$ 1.00 = R$ 3.50):

### Free App

Free apps are available to every VTEX account.

Example:
```json
{
  "billingOptions": {
    "free": true,
    "termsURL": "https://url.to.the/terms"
  }
}
```

### Fixed price subscription

Charge a recurring monthly fixed subscription fee.

Example:
```json
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "BRL",
              "fixed":  105
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
}
```

VTEX will charge monthly from the account that installed this app R$ 105.00 = US$ 30.00.

### Variable price subscription

Charge a montly variable fee based on usage and a set of metrics.
In the following example we have an app that sends an SMS for every purchase in a VTEX store and charges for each and every SMS sent. In this example app, each SMS costs R$0.07.

```
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "BRL",
              "calculatedByMetricUnit": {
                "metricId": "smsSent",
                "metricName": "SMS Sent",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "multiplier": 0.07
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
```


For a consuption of 2000 SMS sent, VTEX charges the account that installed your app:

2000 x R$ 0.07 = R$ 140.00 = US$ 40.00

Now, if you want to set different prices for different consumption ranges, expand the `ranges` field:

```json
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "BRL",
              "calculatedByMetricUnit": {
                "metricId": "smsSent",
                "metricName": "SMS Sent",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "inclusiveTo": 2000,
                    "multiplier": 0.07
                  },
                  {
                    "exclusiveFrom": 2000,
                    "inclusiveTo": 4000,
                    "multiplier": 0.06
                  },
                  {
                    "exclusiveFrom": 4000,
                    "multiplier": 0.05
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
}
```

Thus, it will be charged:

1. For 1500 SMSs sent

    - 1500 x R$ 0.07 = R$ 105.00 = US$ 30.00

2. For 3500 SMSs sent

    - 3500 x R$ 0.06 = R$ 210.00 = US$ 60.00

3. And, for 7000 SMSs sent

    - 7000 x R$ 0.05 = R$ 350.00 = US$ 100.00

To charge for more than one metric, you must add items to the *items* array:

```json
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "BRL",
              "calculatedByMetricUnit": {
                "metricId": "smsSentBrazil",
                "metricName": "SMS Sent in Brazil",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "multiplier": 0.07
                  }
                ]
              }
            },
            {
              "itemCurrency": "USD",
              "calculatedByMetricUnit": {
                "metricId": "smsSentUS",
                "metricName": "SMS Sent in the US",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "multiplier": 0.05
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
}
```

Thus, for 2000 SMSs sent in Brazil and 1500 SMSs sent in the US, it will be charged:

2000 x R$ 0.07 + 1500 x US$ 0.05 = R$ 140.00 + US$ 75.00 = US$ 115.00

You could also include a fixed price *item* to charge a base price, regardless of the consumption of your resources:

```json
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "USD",
              "fixed":  100
            },
            {
              "itemCurrency": "BRL",
              "calculatedByMetricUnit": {
                "metricId": "smsSent",
                "metricName": "SMS Sent",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "multiplier": 0.07
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
}
```

Therefore, for 2000 SMSs sent, it will be charged:

US$ 100 + 2000 x R$ 0.07 = US$ 100.00 + R$ 140.00 = US$ 140.00

__Quick tip:__ Avoid adding unnecessary complexity to your pricing model. __Keep it simple!__

## Logging Metrics

Your app resources consumption must be registered at VTEX Metrics in order to be charged by VTEX Billing. Say, for example, that an SMS is sent every time a method `sendSMS` is called. One way to log the SMS sending is:

```typescript
import { Colossus } from '@vtex/api'
// ...
const colossus = new Colossus(ioContext)

// Seding SMS
try {
  sendSMS(phoneNumber)
} catch (e) {
  throw new Error('Could not send SMS')
}

// Logging metric
colossus.sendMetric({
  value: 1,
  unit: 'SMS',
  metricId: 'smsSent'
})
```

Remember to add the required __dependency__ and __policy__:

```json
//node/package.json
"dependencies": {
  "@vtex/api": "^0.48.0",
}

//manifest.json
"policies": [
    {
      "name": "colossus-send-metrics"
    }
]
```


Once your metric was logged, it acquires a timestamp that will be used by Billing when aggregating all the consumption of your app's resources during a month.

## Installation Check

At this moment, the only way possible is to know which accounts have installed your app is contacting VTEX IO, where we keep installation logs for your app. Soon, this will be possible by accessing VTEX OMS.

## Contract Status

To check if the user is still paying for your app (so it can take action, like desactivating itself), it must send a `GET` request to the `vtex.billing` private endpoint `/_v/isContractActive`. On `200`, This endpoint returns a boolean indicating whether the app has an active contract or not. The steps below show how to do that:

1. Add this dependency to your `manifest.json`

    ```json
    {
      "dependencies": {
        "vtex.billing": "0.x"
      }
    }
    ```

2. Add the necessary permission to access this endpoint

    ```json
    {
      "policies": [
        {
          "name": "vtex.billing:contract-status"
        }
      ]
    }
    ```

3. your app is ready to access the `/_v/isContractActive` endpoint

```typescript
    import {HttpClient} from '@vtex/api'
    // ...

    const http = HttpClient.forWorkspace('billing.vtex', ioContext, {timeout: 10000})
    const isContractActive = await http.get('/_v/isContractActive')

```

## App Visibility

If you __don't__ want your app to be __public__, only visible and installable in your __own account__, you must __remove this field completely__. In other words an app __without__ the `billingOptions` field in its `manifest.json` is understood as a **private** app.

Once the field `billingOptions` is present in your `manifest.json`, your app is ready for distribution within __the entire IO environment__ and can be purchased by __any other account__.

## Paid App Installation

The installation of a paid app is only possible by admin users that have the Account management's `BuyApp` permission.

When an app with `billingOptions` is successfully installed, a contract is created in the client's account Billing module and is billed by the end of every month.

## App Revenue

In the current model, you get 75% of all revenue generated by your app.
