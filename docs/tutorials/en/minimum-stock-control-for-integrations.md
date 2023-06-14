---
title: 'Minimum stock control for integrations'
id: 5hvUNIiSeJ5QCaZQYpYf1D
status: PUBLISHED
createdAt: 2020-10-16T15:25:46.901Z
updatedAt: 2023-03-29T16:15:17.491Z
publishedAt: 2023-03-29T16:15:17.491Z
firstPublishedAt: 2020-10-16T17:29:32.622Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: minimum-stock-control-for-integrations
locale: en
legacySlug: minimum-stock-control-for-integrations
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Minimum inventory control is a safety measure created to prevent the sale of products with less than or equal to the in inventory quantity set by the retailer in the integration settings.

This configuration is available with the following integrations: 

- [Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan)
- [B2W/SkyHub](https://help.vtex.com/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/40eYElt1qwIqGeIeum2W4M)
- [Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/2AhqcmRN1mseCsGuGIe6GK)
- [Centauro](https://help.vtex.com/pt/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj/4EqL0hADU1AWvP0gTr4nyq)
- [Magazine Luiza](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y/4QWLcDhsh2GSSamouyu6M0)
- [Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi)
- [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/7o8Vt25LJmAUuMmSWSmWes)
- [Via Varejo](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/1okse2MybWk04AQoueu88O)  

## How does it work

When the minimum inventory is reached, the integration sends an inventory update to the marketplace stating that the inventory is equal to zero. It ensures that no more products will be sold until the next update is made. For the retailer to know when this happens, a warning is displayed in *Marketplace > Connections > Inventory*.

## Settings

To set the minimum inventory for your integration, follow the steps below:

1. Access the Admin.
2. In the Marketplace > Connection menu, click on **Integrations**.
3. Select the **Settings** option.
4. Choose the integration you want to configure.
5. Then, click on the gears icon <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
6. Select the **Edit Config** option.
7. In the **Minimum inventory** field, enter the desired value.
8. **Save** your changes.

Thereafter, the minimum inventory will be active for all the categories listed with the integration you have chosen. To check the quantity of your products in stock, access the inventory dashboard in *Marketplace > Integrations > Inventory*.
