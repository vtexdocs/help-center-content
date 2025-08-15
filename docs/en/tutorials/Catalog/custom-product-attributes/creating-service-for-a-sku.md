---
title: 'Creating service for a SKU'
id: tutorials_252
status: PUBLISHED
createdAt: 2017-04-27T22:12:00.282Z
updatedAt: 2025-06-12T20:19:07.584Z
publishedAt: 2025-06-12T20:19:07.584Z
firstPublishedAt: 2017-04-27T23:03:11.914Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-service-for-a-sku
legacySlug: creating-a-service-for-a-sku
locale: en
subcategoryId: 1hoOi2R0Rm6ky0yCwOUoiy
---

SKU service is a VTEX feature that allows adding an item, that is optional and priced, to complement a product. For more information, read our article [What is a Service?](https://help.vtex.com/en/tutorial/what-is-a-service--46Ha8CEEQoC6Y40i6akG0y).

In this article we will cover the following topics:

- [Creating a service type](#creating-a-service-type)
  - [Service type fields](#service-type-fields)
- [Creating a service value and associating it with a service type](#creating-a-service-value-and-associating-it-with-a-service-type)
  - [Service value fields](#service-value-fields)
- [Linking a service to a SKU](#linking-a-service-to-a-SKU)
  - [Template fields](#template-fields)

> ℹ️ You can configure SKU services through the **Catalog API** using the [SKU service](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetype) endpoints.

## Creating a service type

To register a service type, please follow the steps below:

1. In the VTEX Admin, go to **Catalog > Custom Product Attributes**, or type **Custom Product Attributes** in the search bar at the top of the page.
2. In the **Service Types** tab, click ` New SKU Service Type`.
3. Fill in the [service type fields](#service-type-fields).
4. Click `Save`.  

### Service type fields
In this section you must enter a name for your service type and configure its behavior according to the options below.

- **Name:** name of the service type.
- **Gift card:** option to display the service type on the gift card.
- **Mandatory service:** option to make the service type mandatory.
- **Status** option to enable or disable the service type.
- **Attachments:** selected attachments that will be added to the service type. The attachment is used to add customized information to the service. To learn more, read our article [What is an Attachment?](https://help.vtex.com/en/tutorial/what-is-an-attachment--aGICk0RVbqKg6GYmQcWUm).

## Creating a service value and associating it with a service type
After registering the service type, you must assign a value to it. To register the value of a service type, please follow the steps below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **Custom Product Attributes**.
3. Click on the **Service values** tab.
4. Click on `New value table`.
5. Fill in the [service value fields](#service-value-fields).
6. Click on `Save`. Once the configuration is completed, the service will be created.

### Service value fields
In this section, you must enter a name for the service value and associate it with a service type.

- **Name:** name of the service value.
- **Value:** how much the customer will be charged for the service.
- **Cost:** the cost of the service to the store.
- **Service type:** option to link the service value to the service type.

## Linking a service to a SKU
After creating the service, you must link it to the desired SKUs. You can link a service to more than one SKU.

To link a service to a SKU, please follow the steps below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **Custom Product Attributes**.
3. Click on the **Link service values to SKU** tab.
4. Right-click on the category to which you want to add the service. Always select the innermost category of the desired department. This will make the process of listing, exporting and importing faster.
5. Click on `Export`.
6. Save the exported template to your computer in CSV format.
7. Fill in the [template fields](#template-fields). Keep the file in CSV format when saving changes.
> ⚠️ The size of the template file cannot exceed 4Mb (4096KB).
8. Click on the bar next to the `Select` button, as shown below.
  ![Anexos - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/custom-product-attributes/creating-service-for-a-sku_1.png)
9. Select the updated CSV template.
10. Click on the button `Link service values to SKU`.

### Template fields
Use the template carefully, always making sure that the information is correctly filled in. In order to avoid errors, all fields in the template must be filled in.

> ⚠️ When filling the spreadsheet, do not change or delete the column headings in row 1. Fill in the desired values in the rows after the column headings for the import to work correctly.  

- **Nome Serviço:** name of the service.
- **Texto Serviço:** text that will be displayed along with the service.
- **Id SKU:** identifier number of the SKU that is being associated with the service.
- **Nome SKU:** name of the SKU that is being associated with the service.
- **Id Serviço Tipo:** identifier number of the service type. To find out the ID of the service type, please refer to the **Id** field in the **Service types** tab.
- **Nome Serviço Tipo:** name of the service type.
- **Id Serviço Valor:** identifier number of the service value. To find out the ID of the service value, please refer to the `IdSkuServicoValor` field in the URL of the desired service value. In the example below, the service value ID is 3:

  `https://{accountName}.myvtex.com/admin/Site/SkuServicoValorForm.aspx?IdSkuServicoValor=3`

- **Nome Serviço Valor:** name of the service value.
- **Valor:** how much the customer will be charged for the service.
- **Custo:** the cost of the service to the store.
- **Ativo:** status of the service. Enter `1` to keep the service active and `0` to keep it inactive.

> ⚠️ Adding a new template will not replace the services already linked to the SKU. To unlink a service, use the endpoint <a href ="https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/skuservice/-skuServiceId-">Dissociate SKU service</a>.

