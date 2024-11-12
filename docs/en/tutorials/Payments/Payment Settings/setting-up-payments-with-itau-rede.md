---
title: 'Setting up payments with Itaú Rede'
id: 77BYOKxVzONWulAf8dTVSX
status: PUBLISHED
createdAt: 2024-04-18T15:03:32.890Z
updatedAt: 2024-04-25T15:26:44.454Z
publishedAt: 2024-04-25T15:26:44.454Z
firstPublishedAt: 2024-04-25T14:54:53.085Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-itau-rede
locale: en
legacySlug: setting-up-payments-with-itau-rede
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Itaú Rede payment provider. With this provider, your store can make sales through credit cards.

To use Itaú Rede, you must:

- [Obtain credentials in the Userede environment](#obtain-credentials-in-the-userede-environment)
- [Setting up Itaú Rede on VTEX](#setting-up-itau-rede-on-vtex)
- [Setting up the payment condition](#setting-up-the-payment-condition) 

## Obtain credentials in the Userede environment

>⚠️ Configurations made in an environment external to VTEX may be discontinued or modified without prior notice. Check your Itaú Rede account for updated information.

To obtain the __App key__ and __App token__ credentials necessary to configure Itaú Rede on VTEX, follow the steps below:

<blockquote><ui>1. Access the <a href="#https://meu.userede.com.br/login">Userede Portal</a> with your Itaú Rede account information.</ui>

<blockquote><ui>2. Select the account in which you want to transact payments at VTEX and click <b>Aplicar</b>. Save the account number, as it must be used in the <b>App key</b> field in the <a href="#setting-up-itau-rede-on-vtex">Setting up Itaú Rede on VTEX</a>.</ui> 

![Itaú Rede_1](https://images.ctfassets.net/alneenqid6w5/gooU2CGrEsArx16vHLBAw/af69b2edd0c9361563fa4b624941f2d0/Itau_Rede_1.PNG)

<blockquote><ui>3. After the screen updates to the desired account, in the <b>para vender</b> menu, select the <b>e-commerce</b> option.

![Itaú Rede_2](//images.ctfassets.net/alneenqid6w5/3VB0bwzReQKt2zjXnLHltx/11bfb6b935d77828b0a243dc90ea55fd/Itau_Rede_2.PNG)

<blockquote><ui>4. On the <b>e-commerce</b> page, click on the <b>chave de integração</b> card.

![Itaú Rede_3](//images.ctfassets.net/alneenqid6w5/AxbQNB9snirJxN4zOV7qT/b8441d7cc910a99448ea9f4c9724612e/Itau_Rede_3.png)

<blockquote><ui>5. After reading the "chave de integração" information, click <b>li, estou ciente</b>.

![Itaú Rede_4](//images.ctfassets.net/alneenqid6w5/BU5ydvg5BxaY9KRPHevzv/73a8d3ed6e2bf9e9625b69430f8ae2d6/Itau_Rede_4.png)

<blockquote><ui>6. Click the <b>gerar nova chave</b> button.

![Itaú Rede_5](//images.ctfassets.net/alneenqid6w5/kZGFItLuWLgm6lc9Twrhb/266384a3037afaeed2b8b04a5efb9a87/Itau_Rede_5.png)

<blockquote><ui>7. Check the information described in the <b>gerar nova chave de integração</b> window and click <b>gerar nova chave</b>.

![Itaú Rede_6](//images.ctfassets.net/alneenqid6w5/diZYL8GRAhwcL5sX7IQtn/24789d56142d14bc756ecd8c02616135/Itau_Rede_6.png)

<blockquote><ui>8. After creating the new key, click <b>copiar</b> and preserve the information in a safe location. This key must be used in the <b>Token de aplicação</b> field in the section <a href="#setting-up-itau-rede-on-vtex">Setting up Itaú Rede on VTEX</a>.

<blockquote><ui>>⚠️ Once an "chave de integração" is created in the Network environment, it cannot be accessed again from other locations. Record the "chave" information in a protected location, and if lost, repeat the process to generate a new key.</ui></blockquote>

## Setting up Itaú Rede on VTEX

To configure Itaú Rede, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __ItauRede__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ obtained in steps 2 and 8 of the section [Obtain credentials in the Userede environment](#obtain-credentials-in-the-userede-environment).
5. If you wish to modify the identification name to be displayed for the Itaú Rede provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __merchantName__, enter the name of your store.
8. In __SoftDescriptor__, describe the identification message to be displayed in the transaction carried out in your store.
9. In __delayToAutoSettle__, choose how long you want the capture to take after the transaction approval and the anti-fraud analysis.
10. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on the name of the desired credit card brand.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

After following the indicated steps, Itaú Rede may take up to 10 minutes to appear at your store's checkout as a payment option.
