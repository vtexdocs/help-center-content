---
title: Cadastrar doca
id: 5XvQ1yLpxLlIKWRw1pSiyA
status: DRAFT
createdAt: 2019-08-21T18:17:35.897Z
updatedAt: 2022-03-08T18:43:07.011Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:49:51.424Z
contentType: trackArticle
productTeam: Post-purchase
slug: cadastrar-doca
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

Há duas formas de cadastrar uma doca:
- Pelo Admin
- Por API REST

Siga o passo a passo abaixo para cadastrar uma Doca na sua loja:

## Admin

1.  Clique em  **Estoque & Entrega**.
2.  Clique na seção  **Estratégia de envio**.
3.  Clique no botão  **Nova Doca**.
4.  Preencha os campos do formulário de cadastro. Para entender melhor o significado de cada campo, veja abaixo a seção [Campos de Cadastro](#campos-de-cadastro).
5.  Clique no botão  **Salvar**.

![PT Cadastrar Doca GIF](https://images.ctfassets.net/alneenqid6w5/4GWA3i4x5LSitJRR2nPSF/518140a1c67b5382bcd2042148f2b05c/PT_Cadastrar_Doca.gif)

### Campos de cadastro

-   _ID_: campo identificador da doca. Se não for preenchido, será criado automaticamente um valor para ele.

-   _Nome_: nome da doca, para uso interno.

-   _Política Comercial_: políticas comerciais que serão atendidas por esta doca.

-   _Transportadoras associadas_: transportadoras que serão atendidas por esta doca.

-   _Tempo de Custo_: tempo que será adicionado ao cálculo da entrega por conta da etapa desta doca. 
>_Ex.:_  tempo de custo do estoque (2 dias) + tempo de custo da doca (3 dias) + tempo de custo da transportadora (1 dia) = entrega será realizada em 6 dias.

<div class="alert alert-info">
<strong>Atenção</strong>: o prazo de uma doca independe de uma transportadora funcionar - ou não - em finais de semanas e feriados. O tempo de entrega sempre será a soma do tempo do estoque, da transportadora e da doca.  
</div>

-   _Overhead de tempo de custo_: valor que será usado para a escolha da doca mais vantajosa em determinada entrega. Este valor não é adicionado ao cálculo de tempo de entrega.
>_Ex.:_  as docas A e B têm tempo de custo de 3 dias, mas a doca A tem overhead de 1 dia, enquanto a doca B tem overhead de 2 dias. Neste caso, a doca A será escolhida.

-  _Prioridade_: Valor para desempate na seleção da doca. Quanto maior o valor da prioridade, mais chances a doca tem de ser escolhida.

-   _EndPoint WMS_: usado para integrar um software externo de WMS (warehouse management system) ao fluxo de processamento de pedidos.

-   _Endereço_: endereço da doca cadastrada.

## API REST

<div class="alert alert-warning">
As autenticações para as chamadas de API REST do módulo de Estoque & Entrega devem ser feitas via AppKey e AppToken. Para entender mais, acesse nosso artigo sobre <a href="https://help.vtex.com/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes--43tQeyQJgAKGEuCqQKAOI2">como gerar um Appkey e um AppToken para autenticar suas integrações</a>
</div>

Para cadastrar uma **Doca** por API, você precisa enviar um __POST__ para o seguinte endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/configuration/docks?an={{accountName}}`

- O objeto do request tem as seguintes propriedades:

| __Propriedades__ | __Tipos__ |__Descrição__|
|------------------|-----------|-------------|
| id| object| ID da doca|
| name| string| Nome da doca|
| priority| integer| Intervalo de 0 a 10 para definir priorização de rotas|
| dockTimeFake| integer| Tempo de Custo|
| timeFakeOverhead| integer| Overhead de tempo de custo|
| salesChannels| nullable| Canais de venda|
| wmsEndPoint| string| EndPoint WMS|
| address| array| Endereço (itens incluídos no array listados abaixo. Confira o exemplo de body)|
| postalCode| integer| Código postal|
| country| object| País|
| city| string| Cidade|
| state| string| Estado|
| neighborhood| string| Bairro|
| street| string| Rua|
| number| string| Número|
| complement| string| Complemento|

Abaixo, temos um exemplo de Header e um exemplo possível de Body a serem passados no request.

### Headers 

| Header| Value |
|------------------|-----------|
| Accept |   application/json |
| Content-Type |   application/json; charset=utf-8 |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Exemplo

```json
{
    "id": "catete",
    "name": "Loja Catete",
    "priority": 0,
    "dockTimeFake": "00:00:00",
    "timeFakeOverhead": "00:00:00",
    "salesChannels": [
      "1"
    ],
    "salesChannel": null,
    "freightTableIds": [],
    "wmsEndPoint": "",
    "pickupStoreInfo": {
      "isPickupStore": false,
      "storeId": null,
      "friendlyName": null,
      "address": {
        "postalCode": "22220070",
        "country": {
          "acronym": "BRA",
          "name": "Brazil"
        },
        "city": "Rio de Janeiro",
        "state": "RJ",
        "neighborhood": "Catete",
        "street": "Artur Bernardes Street",
        "number": "100",
        "complement": "",
        "coordinates": null
      },
      "additionalInfo": null,
      "dockId": null
    },
    "address": {
        "postalCode": "22220070",
        "country": {
          "acronym": "BRA",
          "name": "Brazil"
        },
        "city": "Rio de Janeiro",
        "state": "RJ",
        "neighborhood": "Catete",
        "street": "Artur Bernardes Street",
        "number": "100",
        "complement": "",
        "coordinates": [[-43.18228090000002, -22.9460398 ]]
      }
  }
```
