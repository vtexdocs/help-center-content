---
title: 'Cadastrar estoque'
id: 3mlfDHjikOgUna1SS2Nr1Y
status: ARCHIVED
createdAt: 2019-08-21T13:46:49.042Z
updatedAt: 2022-03-08T18:42:46.857Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:48:16.576Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: adding-warehouses
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

Há duas formas de cadastrar um estoque:

- Pelo Admin
- Por API REST

Siga o passo a passo abaixo para cadastrar um estoque na sua loja:

## Admin

1. Clique em **Estoque & Entrega**
2. Clique na seção **Estratégia de Envio**
3. Clique no botão **Novo Estoque**
4. Preencha os campos do formulário de estoque. Para entender melhor o significado de cada campo, veja abaixo a seção [Campos de Cadastro](#campos-de-cadastro).
5. Clique no botão **Salvar**

![PT Cadastrar Estoque GIF](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/logistics-101/cadastrar-estoque_1.gif)

### Campos de cadastro

- _ID (Opcional):_ campo identificador do estoque. Se não for preenchido, será criado automaticamente um valor para ele.
- _Nome:_ nome do estoque.
- _Entregando a partir de_: docas que consumirão o respectivo estoque. Você pode selecionar mais de uma doca, indicando custo e tempo de custo para cada uma delas. Selecione a _doca_ e clique no botão __Incluir__.

## API REST

>⚠️ As autenticações para as chamadas de API REST do módulo de Estoque & Entrega devem ser feitas via AppKey e AppToken. Para entender mais, acesse nosso artigo sobre [como gerar um Appkey e um AppToken para autenticar suas integrações](https://help.vtex.com/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes--43tQeyQJgAKGEuCqQKAOI2)

Para cadastrar um **Estoque** por API, você precisa enviar um __POST__ para o seguinte endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/configuration/warehouses?an={{accountName}}`

- O objeto do request tem as seguintes propriedades:

| __Propriedades__ | __Tipos__ |__Descrição__|
|------------------|-----------|-------------|
| id| string| ID do estoque
| name| string| Nome do estoque|
| warehouseDocks| array| Doca vinculada ao estoque (itens do array descritos abaixo. Confira o exemplo de body)
| dockId| string| Identificação da doca|
| name| string| Selecionar nome da doca |
| time| string| Tempo de processamento (em dias) |
| cost| float| Custo|
| translateDays| string| Determinar faixa temporal|
| costToDisplay| string| Custo a ser exibido|

Abaixo, temos um exemplo de Header e um possível exemplo de Body a serem passados no request.

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
  "id": "15bfc76",
  "name": "Estoque Principal",
  "warehouseDocks": [
    {
      "dockId": "1a8bce3",
      "name": "Centro de Distribuição Principal",
      "time": "3.00:00:00",
      "cost": "5.00",
      "translateDays": "dias",
      "costToDisplay": "5,00"
    }
  ]
}
```
