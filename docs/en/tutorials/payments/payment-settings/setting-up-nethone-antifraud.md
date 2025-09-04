---
title: 'Setting up Nethone antifraud'
id: 7wyoUovwCkoT998uXkOis8
status: PUBLISHED
createdAt: 2021-06-16T17:00:06.641Z
updatedAt: 2025-09-04T20:09:26.219Z
publishedAt: 2025-09-04T20:09:26.219Z
firstPublishedAt: 2021-06-16T17:19:21.268Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: setting-up-nethone-antifraud
legacySlug: setting-up-nethone-antifraud
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Nethone is an anti-fraud solution that identifies specific aspects of user behavior and minimizes the risk of fraud in your store's transactions by using artificial intelligence and machine learning.

> ⚠️ You can integrate your store with Nethone via **Application Key (App Key)** and **Application Token (App Token)**. You will find this information in the plugin package that Nethone will send you after you sign the contract. If you have any questions, please contact the Nethone support team.

To set up Nethone in your store, you will need to:

- [Configure Nethone’s anti-fraud solution](#configuring-nethones-anti-fraud-solution)
- [Associate Nethone’s solution with a payment condition](#associating-nethones-solution-with-a-payment-condition)
- [Enable Google Tag Manager at checkout](#enabling-google-tag-manager-at-checkout)
- [Configure Google Tag Manager](#configuring-google-tag-manager)
- [Create a tag trigger](#creating-a-tag-trigger)

Once the configuration process is complete, each purchase attempt will be analyzed by the anti-fraud solution and displayed on your Nethone dashboard.

## Configuring Nethone’s anti-fraud solution

1. Go to the VTEX __Admin__.
2. Access the __Payments__ module.
3. Click on __Settings__.
4. In __Gateway Affiliations__, click on the green “__+__” button.
5. In the __Anti-fraud__ section, select the __Nethone__ option.
6. In the __Affiliation name__ field, enter __Nethone__.
7. In the __Application Key__ and __Application Token__ fields, enter the data you received in the plugin package.
8. Click on __Save__.

## Associating Nethone’s solution with a payment condition

To perform the anti-fraud analysis, the Nethone affiliation must be associated with a payment condition. You can either use an existing condition or create a new one. Follow the instructions below:

1. Go to the VTEX __Admin__.
2. Access the __Payments__ module.
3. Click on __Settings__.
4. In the __Payment conditions__ tab, select an existing condition, or check out the [Configuring a payment condition](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3?&utm_source=autocomplete) tutorial to create a new one.
5. Make sure the payment condition is __Active__.
6. After selecting or creating a new condition, enable the option __Use anti-fraud solution__.
7. Select the __Nethone__ option.
8. Click on __Save__.

## Enabling Google Tag Manager at checkout

The next step for configuring the Nethone affiliation is integrating with Google Tag Manager via Javascript. 

1. [Click here](http://tagmanager.google.com) to access Google Tag Manager.
2. Log in to your account. If you don't have an account yet, please create one.
3. In the Google Tag Manager workspace, look for a number that starts with __GTM-XXXX__. Copy that number.
4. Go to your VTEX __Admin__.
5. Access the __Store setup__ section.
6. Click on the __Checkout__ option.
7. In the __Default__ card, click on the gear icon.
8. In the top menu, select the __Checkout__ tab.
9. In the __Google Tag Manager field__, paste the identifier number you copied from the workspace. 
10. Click on __Save__.

## Configuring Google Tag Manager

> ⚠️ The configurations documented below are to be performed on a system external to VTEX and may be discontinued without notice.

Once you have configured your account ID number at checkout, follow the instructions below to track purchase attempts made in your store.

1. [Click here](http://tagmanager.google.com) and sign in to Google Tag Manager.
2. On the left sidebar, click on __Variables__.
3. In the __User-Defined Variables__ section, click on __New__.
4. In __Variable Configuration__, click on the pencil icon.
5. In the __Utilities__ section, select the __Constant__ option.
6. Name the variable __profilerUrl__.
7. In the __Value__ field, enter the link provided by Nethone in the plugin package you received.
9. Click on __Save__.

## Creating a tag trigger

Once the variable has been created, follow the steps below to define the triggers:

1. In Google Tag Manager’s sidebar, click on __Triggers__.
2. Click on __New__.
3. Name the trigger __Profiler Trigger__.
4. In __Trigger Configuration__, click on the pencil icon.
5. In the __Other__ option, click on __Custom Event__.
6. In the __Event name__ field, enter the following information including the parentheses: (email|profile|shipping|payment).
7. Enable the __Use regex matching__ option.
8. In __This trigger fires on__, select __Some Custom Events__.
9. Select the options __Page Path__, __Matches RegEx__, __Checkout__.
10. Click on __Save__.
11. Return to the workspace and click on __Tags__. 
12. Click on __New__.
13. Under __Tag Configuration__, click on the pencil icon.
14. In the __Custom__ section, select the __Custom HTML__ option.
15. Paste the following code into the HTML field, and ensure that the value in the __src="your profiling link"__ field is the same as the one provided by Nethone in the plugin package.

 ```
    <script type="text/javascript" id="nthScript" crossorigin="use-credentials"
    src="yourprofilinglink" async></script>
    <script>
    (function() {
    function uuidv4() {
    return
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r &
    0x3 | 0x8);
    return v.toString(16);
    });
    }
    var attRef = uuidv4();
    window.vtex.deviceFingerprint = attRef;
    var options = {
    attemptReference: attRef,
    sensitiveFields: []
    };
    if (window.dftp) {
    dftp.init(options);
    } else {
    var el = document.getElementById("nthScript");
    el.addEventListener("load", function() {
    dftp.init(options);
    });
    }
    })()
    </script>
    ```
16. Enable the __Support document.write__ option.
17. Expand the __Advanced Settings__, and in the __Tag firing option__ field, select __Once per page__.
18. On the __Triggers__ menu, click on the pencil icon.
19. Select the __Profiler Trigger__ option and click on __Save__. 
20. Click on __Submit__.
21. In the __Version Name__ field, enter *Nethone Profiler* and click on __Publish__.

Once this is done, the Nethone Anti-Fraud will have been installed correctly and will be ready to process your transactions.
