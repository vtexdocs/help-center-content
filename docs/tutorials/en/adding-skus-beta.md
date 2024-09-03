---
title: 'Adding SKUs (beta)'
id: 4ryZ6J45kwn3jDiQBxGiiN
status: PUBLISHED
createdAt: 2024-08-29T19:24:29.305Z
updatedAt: 2024-08-29T19:37:14.566Z
publishedAt: 2024-08-29T19:37:14.566Z
firstPublishedAt: 2024-08-29T19:28:11.129Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slug: adding-skus-beta
locale: en
legacySlug: adding-skus-beta
subcategory: 6XPsLadoT3moZ7eTduCg3c
---

>ℹ️ This feature is in beta, which means that we are working to improve it. If you wish to migrate your store to the new page,  please contact <a href = "https://support.vtex.com/hc/en/requests">our Support</a>.

After adding a product in the VTEX Admin, you must complete the information about its SKUs. To do so, follow the steps below and access the new experience of adding products and SKUs:

1. In the VTEX Admin, go to **Catalog >** **Products & SKUs**.
2. Click the product you want to add a SKU to.
3. Click the SKU tab.
4. Click the add icon <i class="fas fa-plus" aria-hidden="true"></i>.
5. Complete the form with the [SKU information](#sku-information).

# SKU information

See below the information that must be completed for each section of the SKUs form.

- **Name:** Enter the name of the SKU, i.e., the variation of a product that has already been added. For example: Product - Refrigerator, SKU - 110 volts. The SKU name has a 200-character limit.
- **Active:** Define whether the SKU is active or not.

## General information

- **Reference code:** Unique reference code created to improve store organization.
- **EAN/UPC:**  Unique SKU identification code (barcode), which supports up to 13 numeric characters**.**
- **Manufacturer code:** Provided by the manufacturer to identify their product. If a product has a specific code, this field must be completed.
- **Commercial condition:** Used to define specific promotions or installment rules for SKUs. If there is no specific condition, use the default value. Learn more in [Registering a commercial condition](https://help.vtex.com/pt/tutorial/como-cadastrar-condicao-comercial--tutorials_445).
- **Modal:** Links an unusual product to a carrier specialized in delivering this product. Learn more about this feature in [How the modal works](https://help.vtex.com/pt/tutorial/como-funciona-o-modal--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/pt/tutorial/configurar-modal-para-transportadoras--3jhLqxuPhuiq24UoykCcqy)

## Images

In this section, you can add images to the SKU. By clicking **Add Images,** you can select images from your computer or add links.

>ℹ️ Consider the 3,200 x 3,200-pixel limit for your SKU images.

## Weight and dimensions

### Shipping weight and dimensions

- **Package weight:** Used to calculate the cubic weight factor. The unit of measure is the one defined by your store. It must be added with a value greater than zero for the [shipping allocation](https://help.vtex.com/pt/tutorial/como-e-feito-o-rateio-de-frete--frequentlyAskedQuestions_155) to work correctly.
- **Package width:** Used to calculate the cubic width factor. The unit of measure is the one defined by your store.
- **Package height:** Used to calculate the cubic height factor. The unit of measure is the one defined by your store.
- **Package length:** Used to calculate the cubic length factor. The unit of measure is the one defined by your store.

### Actual weight and dimensions

- **Actual weight:**  Actual weight of the product. Displayed on the product page.
- **Actual width:** Actual width of the product. Displayed on the product page.
- **Actual height:** Actual height of the product. Displayed on the product page.
- **Actual length:** Actual length of the product. Displayed on the product page.

### Inventory unit

- **Unit of measure:** Defines how the item will be counted in the inventory.
- **Unit multiplier:** Numerical unit that multiplies the selected quantity of the product when it is added to the cart. If the multiplier is 5, the product will be added in multiple quantities of 5, such as 5, 10, 15, 20, and so on.

## Customizations

In the **Customizations **section, you can add attachments and services. Learn more in [What is an Attachment?](https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) and [What is a Service?](https://help.vtex.com/pt/tutorial/o-que-e-um-servico).

## Cross-sells and up-sells

In this section, you can configure the following features:
- Accessories
- Suggestions
- Similar products
- Show together

Learn more about these options in [How to set up similar products, suggestions, accessories, and generics](https://help.vtex.com/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280).

## Advanced settings

- **Generate credit with gift card:** Defines that the SKU in question will generate gift card credit when purchased and is also used to define lists that generate a gift card value for the owner.

## Specifications

Depending on the product category you create, you may have to complete some fields in the **Attributes** tab. These fields are specifications you can add to your SKUs to give them characteristics.

Learn more about [SKU specifications](https://help.vtex.com/en/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119).
