---
title: 'Cadastrar Trava de Preço'
id: 6IVgeLPeggIv2mkbFVO6y3
status: PUBLISHED
createdAt: 2019-07-04T13:54:30.939Z
updatedAt: 2024-08-26T18:38:52.888Z
publishedAt: 2024-08-26T18:38:52.888Z
firstPublishedAt: 2019-07-17T19:48:12.477Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: cadastrar-trava-de-preco
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugPT: precos-101
---

Há duas formas de cadastrar a trava de preço:

- através do Admin
- por API REST

Siga o passo a passo abaixo para cadastrar a trava de preço:

## Admin 

1. No Admin VTEX, acesse **Configurações de loja > Produtos > Configurações de preços**, ou digite **Configurações de preços** na barra de busca no topo da página.
2. Clique em **Usar limite de variação de preços**.
3. Digite a porcentagem desejada de **Decréscimo máximo** e **Acréscimo máximo**.
4. Clique em **Salvar**.

## API REST

<div class="alert alert-warning">
As autenticações para as chamadas de API REST do módulo de Preços devem ser feitas via AppKey e AppToken. Para entender mais, acesse nosso artigo sobre <a href="https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication">como gerar um Appkey e um AppToken para autenticar suas integrações</a>
</div>

Para cadastrar a **trava de preço**, você precisa enviar um __POST__ para o seguinte endpoint:

`https://api.vtex.com/{{account}}/pricing/config`

- O objeto do request tem as seguintes propriedades:

| __Propriedades__ | __Tipos__ | __Descrição__ |
|------------------|-----------|-------------|
| priceVariation | object | Variação de preço |
| upperLimit | integer | Limite superior |
| lowerLimit | integer | Limite inferior |

- Abaixo, temos um exemplo de Header e Body a serem passados no request:

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
	"priceVariation": {
        "upperLimit": 50,
        "lowerLimit": 20
    }
}
```
