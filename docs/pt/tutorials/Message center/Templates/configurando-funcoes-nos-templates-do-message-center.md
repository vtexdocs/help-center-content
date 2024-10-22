---
title: 'Configurar funções nos templates do Message Center'
id: tutorials_440
status: ARCHIVED
createdAt: 2017-04-27T22:05:34.696Z
updatedAt: 2021-10-15T16:03:41.137Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:24.692Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: configuring-functions-in-the-message-center-templates
locale: pt
legacySlug: configurando-funcoes-nos-templates-do-message-center
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

Este artigo tem o objetivo de apresentar os comandos mais utilizados e todas as suas funções que poderão ser usadas para dinamizar os templates de sua loja.

Para configurar os seus templates, a Central de mensagem utiliza a liguagem **HandleBars**, que é muito simples e possui apenas alguns comandos, simplificando sua implementação e ampliando sua customização.

Na edição do email, é possível utilizar diversas variáveis disponibilizadas pelo sistema. A utilização dessas variáveis no layout do email tem a seguinte sintaxe do handlebars: `{{classe.atributo}}`

_classe.atributo_ são obtidos do JSON. No MessageCenter exibimos o JSON específico para a sua loja.

**Importante**: Os atributos são os mesmos para todas as lojas VTEX, contudo cada loja pode estar configurada de forma diferente. Importante customizar seu template usando as informações fornecidas para o Json da sua loja.

**JSON Data**
```
“_accountInfo”: { 
  “HostName”: “lojavirtual” 
}
```

**HTML do template**
`<strong>{{_accountInfo.HostName}}</strong> => lojavirtual`

![exemplohtml](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Message center/Templates/configurando-funcoes-nos-templates-do-message-center_1.png)

Para o exemplo acima, uma loja seller pode possuir um hostname diferente de uma loja marketplace. Sempre leve em conta as suas configurações!

### Funções

O uso das funções segue esta sintaxe: `{{função classe.atributo}}`

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


- **formatCurrency:** Formata um valor para moeda
`{{formatCurrency items.0.sellingPrice}}`

Resultado: R$ 200,00

- **formatUSDCurrency:** Formata um valor para o padrão decimal americano 
`{{formatUSDCurrency items.0.sellingPrice}}`

Resultado: $ 200.00

- **formatCurrencyWithoutDecimals:** Formata um valor para moeda sem os decimais
`{{formatCurrencyWithoutDecimals items.0.sellingPrice}}`

Resultado: R$ 200

- **multiplyCurrency:** Formata um valor para moeda e o multiplica por um valor
Esta função tem a seguinte sintaxe: `{{formatCurrency classe.atributo multiplicador}}`
`{{formatCurrency items.0.sellingPrice 4}}`

Resultado: R$ 800,00

- **formatDate:** Formata a data para padrão (dd/mm/yyyy)
`{{formatDate items.0.priceValidUntil}}`

Resultado: 30/05/2050

- **formatDateTime:** Formata a data para padrão (dd/mm/yyyy hh:mm:ss)
`{{formatDateTime items.0.priceValidUntil}}`

Resultado: 30/05/2050 21:00:00

- **formatDateUtc:** Formata a data para padrão (dd/mm/yyyy hh:mm:ss) e converte para o UTC local
`{{formatDateUtc items.0.priceValidUntil}}`

Resultado: 30/05/2050 18:00:00 (-3h, por exemplo)

- **replace:** Tem a função de substituir um determinado valor por outro
Esta função tem a seguinte sintaxe: `{{replace classe.atributo "Valor Substituído" "Valor Novo"}}`
`{{replace deliveryTime "bd" " dias úteis"}}`

Resultado: 8 dias úteis

### Exemplos

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

**Resultado:**
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Message center/Templates/configurando-funcoes-nos-templates-do-message-center_2.jpg)
