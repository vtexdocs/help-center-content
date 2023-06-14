---
title: Setting up the ads template description in Mercado Livre
id: 1gEoq6NDAIM2G4Y0ieMk6u
status: DRAFT
createdAt: 2018-08-13T12:40:11.566Z
updatedAt: 2020-02-20T00:48:22.865Z
publishedAt: 
firstPublishedAt: 2018-08-13T14:27:42.464Z
contentType: trackArticle
productTeam: Channels
slug: setting-up-the-ads-template-description-in-mercado-livre
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugEN: mercado-libre-integration-set-up
---

In the integration with Mercado Livre, you can assemble the description of your ads in a more customized way. Through the Message Center, it's possible to set a template with additional information (which is already in VTEX product fields) and send them to Mercado Livre.

## Template settings

<div class="alert alert-danger">
For stores in Brazil and Argentina, <strong>Mercado Livre does not accept HTML or CSS template customizations</strong> (with the exception of the &lt;br&gt; tag for line breaks). For stores in other countries, Iframes, Scripts, Forms, Inputs, Meta, Object and Embed tags are not allowed.
</div>

In order for your product to be offered in Mercado Livre, it is necessary to configure the ad template where the product will be displayed. To set up this template, follow the step-by-step instructions below:

1. Access the **Message Center** module.
2. Search for the template **Bridge - Mercado Livre Integration**.
3. Enter the product variables that you want to display in the template. The available variables are listed below.
4. Click **Save**.

Below, we list the variables available to be displayed in your Mercado Livre ad template:

``{{DESCRICAO}}``: Variable that returns the __description of the product__ registered in VTEX.

``{{IMAGENS}}``: Contains the link to the __main product picture__ registered in VTEX.

``{{TITULO}}``: Contains the __product name__. The product name will be displayed according to the format chosen in the __Ad Title__ field, set up in the first step of this tutorial, in the __Bridge__ panel.

``{{NOME_ATRIBUTO_PRODUTO}}``: Inserts into the template the __value__ of a specific product attribute. That way you need to tell which attribute you want to display. Example: To display the value of an attribute called "Technical detail", you must insert the variable `{{DETALHE_TECNICO}}` into the template. The variable must always be written in uppercase letters, replacing the spaces of the attribute name with underscore (\_), and also should not have accentuation.

If you want to include all attributes and attributes values in the template, you must include in your template the code described below. This is the structure that should be used to render all the attributes of the product and their respective values in the template:

``{{#each ATRIBUTOS}} {{NOME}} – {{VALOR}} <br> {{/each}}``

<div class="alert alert-info">
If you want to hide some attribute in the template, you can do this in the <strong>Integration's settings</strong> panel by filling in the <strong>Attributes hidden in the product template</strong> field as explained in the <strong>Set up the Mercado Livre panel at VTEX Bridge</strong> section from the previous step.
</div>

You have completed the *third stage* of the integration! Now, we will set up the logistics for the delivery of orders made in Mercado Livre.
