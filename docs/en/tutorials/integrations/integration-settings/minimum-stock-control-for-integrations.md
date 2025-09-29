---
title: 'Minimum stock control for integrations'
id: 5hvUNIiSeJ5QCaZQYpYf1D
status: PUBLISHED
createdAt: 2020-10-16T15:25:46.901Z
updatedAt: 2024-09-13T19:35:42.177Z
publishedAt: 2024-09-13T19:35:42.177Z
firstPublishedAt: 2020-10-16T17:29:32.622Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: minimum-stock-control-for-integrations
legacySlug: minimum-stock-control-for-integrations
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Minimum inventory control is a safety measure created to prevent the sale of products with less than or equal to the inventory availability set by the merchant in the integration settings.

This configuration is available with the following integrations: 

- [Amazon](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan)
- [B2W/SkyHub](/en/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/40eYElt1qwIqGeIeum2W4M)
- [Carrefour](/en/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/2AhqcmRN1mseCsGuGIe6GK)
- [Centauro](/en/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj/4EqL0hADU1AWvP0gTr4nyq)
- [Dafiti](/en/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i/5lAIj7OCqizD5EisLJvatx)
- [Magazine Luiza](/en/tracks/configurar-integracao-com-a-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y/4QWLcDhsh2GSSamouyu6M0)
- [Mercado Livre](/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi)
- [Netshoes](/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/7o8Vt25LJmAUuMmSWSmWes)
- [Casas Bahia](/en/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/3rymwJDuc5Z6lQtsyTINim)  

## How it works

When the minimum inventory is reached, the integration sends an inventory update to the marketplace stating that the inventory is equal to zero. It ensures that no more products will be sold until the next update is made. To inform the merchant when this occurs, a warning is displayed on the inventory page, which can be accessed via **Marketplace > Connections > Inventory**.

## Settings

To set the minimum inventory for your integration, follow the steps below:  

1. In the VTEX Admin, go to **Marketplace > Connections > Marketplaces and Integrations.**  
2. Select the desired integration.  
3. Click the `Edit` button.  
4. In the **Minimum inventory** field, enter the desired value.  
5. Click `Save`.  

Thereafter, the minimum inventory will be active for all the categories listed with the integration you have chosen. To check the quantity of your products in stock, access the inventory dashboard in *Marketplace > Integrations > Inventory*.
