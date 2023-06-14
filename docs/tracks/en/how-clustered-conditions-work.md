---
title: 'How clustered conditions work '
id: 2CmfhSqmOTVo0tLWkAPiiA
status: PUBLISHED
createdAt: 2020-11-18T12:47:27.764Z
updatedAt: 2020-11-23T12:32:27.706Z
publishedAt: 2020-11-23T12:32:27.706Z
firstPublishedAt: 2020-11-18T17:37:48.695Z
contentType: trackArticle
productTeam: Financial
slug: how-clustered-conditions-work
trackId: 1LqUFHQZ3ZQyV5TmugbGNm
trackSlugEN: clustered-payment-conditions
---

The Clustered Payment Conditions uses conditions to create client clusters. 

These conditions are based on the data that Master Data saves on a store’s customers.

The deadline and installment rules will thereby be applied to the consumer(s) that fit the condition(s). 

<div class="alert alert-danger">
<strong>Warning</strong>: you can only create five client clusters per payment condition.
</div>

To configure these clusters, choose a property and then select the parameters to create a cluster.

## Property

The property is filled with one of the [Master Data](https://help.vtex.com/en/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629 "Master Data") fields. Think of these fields as the customer’s information that is stored by VTEX’s system. 

As some fields are native to Master Data, these are created in advance and already exist once retailers gain access to their store’s Admin. However, these fields are not of consequence. 

Besides these native fields, retailers can [create any field they want](https://help.vtex.com/en/tutorial/como-crio-um-campo-no-master-data--frequentlyAskedQuestions_1829?&utm_source=autocomplete "create any field they want"). 

Hence, retailers can create the properties - which can be text, numeric, true/false, by date - that they find most suitable to apply to the special payment condition for each cluster. 

As an example, in the image below, the property used is "Location". But other fields that could be used are "Email" and "Phone".  

## Operator 

The operator is what determines how properties and values segment customers.

In the image below, the rule will be applied to all customers that correspond to the condition "Location is New York". But this is not the only operator option.

If the store sets the condition to "Location is not São Paulo" - with "is not" as operator - the payment rule would be applied to all customers within the database whose location is not New York.

There are many types of operators, depending on the type of property. 

### Value

Lastly, the final field is filled with a value related to the chosen property. Consider the example where the condition is "Location is New York". 

The "Location" information alone is not enough for the system to create a cluster. Therefore, we add an additional piece of information, the value, that specifies the chosen property. In layman terms, a value is a characteristic of a property. 

In this case, the system segments customers that correspond to the "New York" location and applies the set deadline and installment rule. 

In case there is only one customer that corresponds to the "Location is New York" cluster, this rule will only apply to that customer.
