---
title: 'Cadastrar regra de preço'
id: 7fyZaYe1IGzL0qVC28tOBO
status: PUBLISHED
createdAt: 2019-07-04T13:53:15.461Z
updatedAt: 2023-08-21T17:10:07.115Z
publishedAt: 2023-08-21T17:10:07.115Z
firstPublishedAt: 2019-07-17T19:42:10.960Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-a-price-rule
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precos-101
order: 8
---

Há duas forma de cadastrar uma regra de preço:

- pelo Admin 
- por API REST

Siga o passo a passo abaixo para cadastrar a regra de preço da sua loja:

## Admin

1. No Admin VTEX, acesse **Preços > Regras de preços**, ou digite **Regras de preços** na barra de busca no topo da página.
2. Clique no botão verde **Nova Regra**.
3. No primeiro passo, **Quais os dados gerais dessa regra?**, selecione no *dropdown* uma tabela de preços.
4. No segundo passo, **Em quais itens esta regra será aplicada?**, selecione se a regra irá se *Aplicar em todos os produtos* ou *Apenas em categorias e marcas escolhidas*. Se selecionada a segunda opção, você deve escolher as **Categorias** e/ou **Marcas** desejadas. 
5. No passo **Aplicar regra para itens em uma faixa de markup?**, ative o *toggle* *Utilizar faixa de markup* para usar este critério. Digite o percentual mínimo de markup no campo **de** e o percentual máximo de markup no campo **até** para selecionar os itens dentro desta faixa.
7. No passo **Aplicar regra apenas em determinados dias?**, ative o *toggle* *Utilizar apenas em período específico* para usar este critério. Digite a **Data Início**, a **Hora Início**, a **Data Fim** e a **Hora Fim** do período em que a regra será aplicada. 
7. No passo **Qual será a variação do preço para essa regra?**, defina o percentual de variação de preço em *Modificador*. A regra de preço vai aplicar esta variação aos SKUs escolhidos.
8. Clique em **Salvar**
9. Uma *barra lateral* será aberta para confirmação da criação da regra. Clique em **Confirmar**.

## API REST

> ⚠️ As autenticações para as chamadas de API REST do módulo de Preços devem ser feitas via AppKey e AppToken. Para entender mais, acesse nosso artigo sobre [como gerar um Appkey e um AppToken para autenticar suas integrações](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication)

Para cadastrar uma **regra de preço**, você precisa enviar um __POST__ para o seguinte endpoint:

`https://api.vtex.com/{{accountName}}/pricing/pipeline/catalog`

- O objeto do request tem as seguintes propriedades:

| __Propriedades__ | __Tipos__ | __Descrição__ |
|------------------|-----------|-------------|
| tradePolicyId | string | ID da tabela de preço na qual a regra será aplicada |
| rules | array | Critérios da regra de preço |
| id | integer | ID da regra de preço. É possível cadastrar mais de uma regra para a mesma tabela de preços. |
| context | object | Objeto que contém as propriedades da regra de preço |
| categories | object | Categoria que a regra será aplicada |
| brands | object | Marca que a regra será aplicada |
| markupRange | object | Regra aplicada para itens em uma faixa de markup |
| from | integer | Valor mínimo da faixa de markup |
| to | integer | Valor da máximo faixa de markup |
| dateRange | object | Regra aplicada apenas em determinados dias |
| from | string | Data e horário de início |
| to | string | Data e horário fim |
| percentualModifier | integer | Variação do preço para essa regra |

- O objeto de response tem as seguintes propriedades: 

| __Propriedades__ | __Tipos__ | __Descrição__ |
|------------------|-----------|-------------|
| tradePolicyId | string | Id da tabela de preço na qual a regra será aplicada |
| rules | array | Array com os objetos das regras de preço a serem aplicadas à tabela de preços |
| id | integer | Id da regra de preço. É possível cadastrar mais de uma regra para a mesma tabela de preços. |
| context | object | Objeto que contém as propriedades da regra de preço |
| categories | object | Categoria que a regra será aplicada |
| brands | object | Marca que a regra será aplicada |
| markupRange | object | Regra aplicada para itens em uma faixa de markup |
| from | integer | Valor mínimo da faixa de markup |
| to | integer | Valor da máximo faixa de markup |
| dateRange | object | Regra aplicada apenas em determinados dias |
| from | string | Data e horário de início |
| to | string | Data e horário fim |
| percentualModifier | integer | Variação do preço para essa regra |

- Abaixo, temos um exemplo de Header e Body a serem passados no request

### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/vnd.vtex.pricing.v3+json |
| Content-Type | application/json |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body 
```json
 {
        "tradePolicyId": "1",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {
                        "8": "categoryName"
                    },
                    "brands": {
                        "2000003": "brandName"
                    },
                    "markupRange": {
                        "from": 20,
                        "to": 50
                    },
                    "dateRange": {
                        "from": "2019-07-09T15:00:00.000Z",
                        "to": "2019-07-12T15:00:00.000Z"
                    }
                },
                "percentualModifier": 10
            }
        ]
 }
```
*Se for passado um array vazio, as regras cadastradas anteriormente serão apagadas*
