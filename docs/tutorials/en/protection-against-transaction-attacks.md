---
title: 'Protection against transaction attacks'
id: 62oQBmi7UZlYlgb0Ha1hZ3
status: DRAFT
createdAt: 2021-10-25T19:02:59.690Z
updatedAt: 2024-03-01T15:58:16.139Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Financial
author: 7vIfbtqL5oztUGHLHXwy1E
slug: protection-against-transaction-attacks
locale: en
legacySlug: protection-against-transaction-attacks
subcategory: 
---

## Protection against transaction attacks

Protection against transaction attacks is one of the solutions offered by VTEX to reduce the risk of fraudulent transactions. This protection is automatically activated when we detect a very high rate of declined transactions (above 90%) within a short period of time (15 minutes).

In its first version, when activated, the protection will consist of applying a change to the payment flow of the purchase. This will not result in an increase in order time or a decrease in store conversion. Once the order is placed, the consumer will receive an electronic message (email or SMS) informing whether the payment has been approved or rejected.

<div class = "alert alert-info"> The protection does not completely prevent the store from suffering card attacks, but it considerably reduces the number of such events. In this way, transactions become more secure.
</div>

### How to enable protection against transaction attacks?

When enabled, if a high rate of declined transactions is detected in a short period of time, the solution will be automatically activated for a period of 1 hour. Once this time elapses, transaction authorizations automatically return to the normal flow.

To enable the protection, please follow the instructions below:

1. Acess the __Admin__.
2. Click on __Payments__.
3. Click on __Transactions__.
4. In the upper right corner, click on the Settings icon.
5. Under __Attack protection__, click on the button to enable it (green color indicates "enabled").

![proteção-botao-configurações](https://images.ctfassets.net/alneenqid6w5/1jhGP8FOgMtkEp0O8AqOnX/c36c317b8cd30966cd76901c897219f3/prote____o-botao-configura____es.png)

![protection-option-enable1](https://images.ctfassets.net/alneenqid6w5/QSVTQfbO9BDFUB33KXgj7/9ee748c43264183f31f071514862a068/protection-option-enable1.png)

### How to disable protection against transaction attacks?

<div class = "alert alert-danger"> Disabling the protection against transaction attacks increases the risk of card testing fraud (operation performed by a fraudster using a large number of card data to make fraudulent transactions). In case of attacks that may harm one or more of VTEX's internal systems, the platform may compulsorily reactivate the protection against attacks, and the retailer will be informed of this operation.
</div>

To disable the protection, please follow the instructions below:

1. Acess the __Admin__.
2. Click on __Payments__.
3. Click on __Transactions__.
4. In the upper right corner, click on the Settings icon.
5. Under __Attack protection__, click on the button to disable it (gray color indicates "not enabled").

### How to identify if the protection against transaction attacks has been activated?

Every time the protection is activated, the retailer receives a notification by email (the same one registered in the SmtpConnector of the Admin).

The retailer can also view the threat history, which contains information about the reasons for activation and the periods in which they occurred.

To access this information, please follow the instructions below.

1. Acess the __Admin__.
2. Click on __Payments__.
3. Click on __Transactions__.
4. In the upper right corner, click on the Settings icon.
5. Under __Threat history__, click the arrow on the right.
6. To select __Detected threats__ or __Neutralized threats__, click on one of the arrows on the right.
7. Check the details of the events in the popup window displayed.

![protection-option-historic1](https://images.ctfassets.net/alneenqid6w5/6oUr155OKf1tKDw3O3i2ZD/a0a2156aa0b0b791992c67cc21f71279/protection-option-historic1.png)

![protection-screen-historic1](https://images.ctfassets.net/alneenqid6w5/6mjiUMYjTQ2nmU7NZKGnyk/c92c6fe16f49fab604337c8749c10657/protection-screen-historic1.png)

![screen-threat-potential1](https://images.ctfassets.net/alneenqid6w5/4ZyYbA7qHIc5PvpxxiHlKk/22a6858af2e7a5acac9ef3d5bb6ff106/screen-threat-potential1.png)

![screen-threat-neutralized1](https://images.ctfassets.net/alneenqid6w5/EhBQQcXklgecc5X2dwHR7/d67780094c2c7cfeaacd2935c2516854/screen-threat-neutralized1.png)

### Related Articles
- [What is an anti-fraud solution?](https://help.vtex.com/en/tutorial/o-que-e-antifraude)
- [Configuring an anti-fraud solution](https://help.vtex.com/en/tutorial/como-configurar-antifraude)
- [Payments overview](https://help.vtex.com/en/tutorial/pci-gateway-visao-geral)
