---
title: 'Configurar funciones en templates de Message Center'
id: tutorials_440
status: ARCHIVED
createdAt: 2017-04-27T22:05:34.696Z
updatedAt: 2021-10-15T16:03:41.137Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:24.692Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: configurando-funciones-en-templates-de-message-center
locale: es
legacySlug: configurando-funciones-en-templates-de-message-center
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

En este artículo vamos a presentar los comandos más utilizados y todas sus funciones que deben ser utilizadas para personalizar su template.

Para configurar sus templates, Message Center utiliza un lenguaje llamado **HandleBars**, que es muy simple y tiene solamente unos cuantos comandos, simplificando su implementación y ampliando la customización.

En edición de email es posible utilizar diferentes variables disponibles en el sistema.

La utlización de esas variables en los Layouts de email poseen la siguiente sintaxis de HandleBars: {{classe.atributo}}

“classe.atributo” son obtenidos a través del campo JSON Data, como por exemplo:

**JSON Data**
```
“_accountInfo”: { 
  “HostName”: “lojavirtual” 
}
```

**HTML del template**
`<strong>{{_accountInfo.HostName}}</strong> => lojavirtual`

![exemplohtml](//images.ctfassets.net/alneenqid6w5/2L8EnLX9I4gqOyaKUY4wGw/47d7e0db874a73e9569d6ddabe69b470/exemplohtml.png)

El ejemplo arriba puede tener diferentes valores cuando se comparan Sellers y Marketplaces.

## Funciones

El uso de las funciones tiene la siguiente sintaxis: `{{función clase.atributo}}`

**JSON Data**
```
"items": [ 
{ 
  "name": "Produto A", 
  "sellingPrice": 20000, 
  "priceValidUntil": "2050-05-30T21:00:00Z", 
  "deliveryTime": "8bd" 
}, 
{
  "name": "Produto B", 
  "sellingPrice": 3000, 
  "priceValidUntil": "2050-09-23T11:00:00Z", 
  "deliveryTime": "10d" 
} 
]
```

- **formatCurrency:** Da formato al valor de moneda
`{{formatCurrency items.0.sellingPrice}}`

Resultado: R$ 200,00

- **formatUSDCurrency:** Da formato a un valor para el estándar decimal americano
`{{formatUSDCurrency items.0.sellingPrice}}`

Resultado: $ 200.00

- **formatCurrencyWithoutDecimals:** Da formato al valor de moneda sin los decimales
`{{formatCurrencyWithoutDecimals items.0.sellingPrice}}`

Resultado: R$ 200

- **multiplyCurrency:** Da formato al valor de moneda y lo multiplica por un valor
Esta funcion tiene la siguiente sintaxis: `{{formatCurrency classe.atributo multiplicador}}`
`{{formatCurrency items.0.sellingPrice 4}}`

Resultado: R$ 800,00

- **formatDate:** Da formato de fecha, como default (dd/mm/yyyy)
`{{formatDate items.0.priceValidUntil}}`

Resultado: 30/05/2050

- **formatDateTime:** Da formato de fecha, como default (dd/mm/yyyy hh:mm:ss)
`{{formatDateTime items.0.priceValidUntil}}`

Resultado: 30/05/2050 21:00:00

- **formatDateUtc:** Da formato de fecha, como default (dd/mm/yyyy hh:mm:ss) y convierte para el UTC local
`{{formatDateUtc items.0.priceValidUntil}}`

Resultado: 30/05/2050 18:00:00 (-3h, por exemplo)

- **replace:** Tiene la funcion de sustituir un determinado valor por otro
Esta funcion tiene la siguiente sintaxis: `{{replace classe.atributo "Valor Substituído" "Valor Novo"}}`
`{{replace deliveryTime "bd" " dias úteis"}}`

Resultado: 8 dias utiles

### Ejemplos

```
{{#each items}} 
{{name}} 
Entrega{{#each ../shippingData.logisticsInfo}} 
{{#eq itemId ../id}} 
{{#each slas}} 
{{#eq ../selectedSla id}} 
{{#if deliveryWindow}} 
agendada entre{{formatDateTime deliveryWindow.startDateUtc}} e {{formatDateTime deliveryWindow.endDateUtc}} 
{{else}} 
em até{{#hasSubStr shippingEstimate 'bd'}} 
{{replace shippingEstimate 'bd' ' dias úteis.'}} 
{{else}} 
{{replace shippingEstimate 'd' ' dias.'}} 
{{/hasSubStr}} 
{{/if}} 
{{/eq}} 
{{/each}} 
{{/eq}} 
{{/each}} 
{{quantity}}x R$ {{formatCurrency sellingPrice}} 
{{/each}}
```

**Resultado**:
![](//images.contentful.com/alneenqid6w5/5cRmcM2692G60Ok6gSAWmo/f7196556f5360f632dbccf47f837b5b9/3.1.jpg)
