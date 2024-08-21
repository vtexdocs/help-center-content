---
title: 'Cadastrar pontos de retirada'
id: 6Mk0PK5AwSVzEufC3FmtAO
status: DRAFT
createdAt: 2019-08-22T13:27:37.853Z
updatedAt: 2022-03-08T18:48:30.264Z
publishedAt: 
firstPublishedAt: 2019-09-16T13:52:23.078Z
contentType: trackArticle
productTeam: Post-purchase
slug: cadastrar-pontos-de-retirada
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

Há três formas de cadastrar um ponto de retirada:
- Pelo Admin
- Por planilha
- Por API REST

Siga o passo a passo abaixo para cadastrar um ponto de retirada na sua loja:

## Admin

1. Clique em **Estoque & Entrega**
2. Clique na seção **Pontos de Retirada**
3. Clique no botão **Add Pickup Point**.
4. Preencha os campos do formulário de ponto de retirada. Para entender melhor o significado de cada campo, consulte a seção [Campos de cadastro](#campos-de-cadastro), abaixo.
5. Clique no botão **Save Changes** 

![PT Cadastrar Pontos de Retirada GIF](https://images.ctfassets.net/alneenqid6w5/7m2LOZGJLly2gdprwvU7Gt/06d1113db5efc6d6fc35c26daa9fabf4/PT_Cadastrar_Pontos_de_Retirada_GIF.gif)

### Campos de cadastro

- _Name_: Nome do ponto de retirada.
- _ID_: ID do ponto de retirada. Se não for preenchido, o sistema irá escolher um ID automaticamente.
- _Pickup point address_: 
-Selecione o _país_ onde está localizado o ponto de retirada.
-No campo _Pickup point address_, digite o endereço desejado e clique na opção correta entre as que aparecerão abaixo para escolher a localização. As informações do endereço serão exibidas na tela, assim como sua geolocalização no mapa. Você pode clicar em _Edit_ para alterar o endereço ou em _Clear_ para adicionar um endereço do zero.
- _Pickup instructions_: insira informações para o seu cliente relacionadas ao ponto de retirada. Essas informações serão exibidsa para o cliente no checkout, no momento da escolha do ponto de retirada.
- _Tags_: você pode adicionar tags para agrupar pontos de retirada, separando cada tag por vírgulas.
- _Working hours_:
-Nos _Dias da semana_, preencha os horários de funcionamento do ponto de retirada. Caso nenhuma informação seja adicionada, o sistema irá considerar o horário de funcionamento de 24 horas por dia para todos os dias da semana.
- _Exceptions or holidays_:
-Para adicionar dias e horários específicos em que o ponto de retirada não irá funcionar, clique em _Add an Exception_.
-Preencha o _Dia_ e o _Horário_ desejados e clique em _Adicionar_.

## Planilha

>**Antes de realizar a importação dos Pontos de Retirada, é preciso exportar a planilha modelo**.

Para fazer o download da planilha modelo, siga os passos abaixo:

1. Clique em **Estoque & Entrega**
2. Clique na seção **Pontos de Retirada**
3. Clique no botão **Upload an XLS**
4. Clique em **Download a Sample Table**
5. Uma vez feito o download da planilha, altere no arquivo Excel os campos necessários para incluir novos pontos de retirada e salve a planilha em seu computador


Para subir uma planilha com os pontos de retirada, siga os passos abaixo:

1. Clique em **Estoque & Entrega**
2. Clique na seção **Pontos de Retirada**
3. Clique no botão **Upload an XLS**
4. Clique em **Choose a File**
5. Selecione um arquivo do seu computador


## API REST

>⚠️ As autenticações para as chamadas de API REST do módulo de Logística devem ser feitas via AppKey e AppToken. Para entender mais, acesse nosso artigo sobre [como gerar um Appkey e um AppToken para autenticar suas integrações](https://help.vtex.com/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes--43tQeyQJgAKGEuCqQKAOI2)

Para cadastrar um **Ponto de Retirada** por API, você precisa enviar um __POST__ para o seguinte endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/configuration/pickuppoints/{{pickupPointId}}?an={{accountName}}`

- O objeto do request tem as seguintes propriedades:

| __Propriedade__ | __Tipo__ |__Descrição__|
|------------------|-----------|-------------|
| name| string| Nome do ponto de retirada|
| Description| string| Descrição do ponto de retirada|
| instructions| string| Instruções para o cliente retirar o pedido|
| address| array| Endereço do ponto de retirada (array descrito nos campos abaixo. Confira o exemplo de body.) |
| postalCode| integer| Código postal, ou CEP|
| country| string| País|
| city| string| Cidade|
| state| string| Estado|
| neighborhood| string| Bairro|
| street| string| Rua|
| number| string| Número|
| complement| string| Complemento|
| reference| string| Referência do endereço|
| isActive| nullable| Marcar se Ponto de Retirada está ativo|
| businessHours| array| Definir horário de funcionamento do Ponto de Retirada (itens do array descritos abaixo. Confira o exemplo de body.)  |
| dayOfWeek | integer| Dia da semana (definido de 1 a 7)|
| openingTime| string| Horário de abertura|
| closingTime| string| Horário de fechamento|
| tagsLabel| list| Tags de pontos de retirada|

Abaixo temos um exemplo de header e possíveis exemplos de body a serem passados no request.

### Headers 

| Header| Value |
|------------------|-----------|
| Accept |   application/json |
| Content-Type |   application/json; charset=utf-8|
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Exemplo

```json
{
    "id": "1a227d3",
    "name": "Loja Copacabana",
    "description": "",
    "instructions": "Obrigatório apresentar documento de identificação",
    "formatted_address": "undefined",
    "address": {
        "postalCode": "22070002",
        "country": {
            "acronym": "BRA",
            "name": "Brazil"
        },
        "city": "Rio de Janeiro",
        "state": "RJ",
        "neighborhood": "Copacabana",
        "street": "Avenida Atlântica",
        "number": "",
        "complement": "",
        "reference": null,
        "location": {
            "latitude": -22.974477767944336,
            "longitude": -43.18672561645508
        }
    },
    "isActive": true,
    "businessHours": [
        {
            "dayOfWeek": 1,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        },
        {
            "dayOfWeek": 2,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        },
        {
            "dayOfWeek": 3,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        },
        {
            "dayOfWeek": 4,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        },
        {
            "dayOfWeek": 5,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        }
    ],
    "tagsLabel": [
        "zonasul", "rio de janeiro"
    ]
}
```
