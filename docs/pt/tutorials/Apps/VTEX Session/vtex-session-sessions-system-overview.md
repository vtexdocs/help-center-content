---
title: 'VTEX Session - Visão Geral do Sistema de Sessões'
id: 6C4Edou6bYqqEAOCAg2MQQ
status: ARCHIVED
createdAt: 2018-08-21T15:45:23.559Z
updatedAt: 2022-09-20T20:45:46.176Z
publishedAt: 
firstPublishedAt: 2018-09-11T21:09:10.797Z
contentType: tutorial
productTeam: Identity
author: authors_59
slug: vtex-session-visao-geral-do-sistema-de-sessoes
locale: pt
legacySlug: vtex-session-visao-geral-do-sistema-de-sessoes
subcategoryId: dajK0sARX2c0MISKKoGoc
---

O __Sistema de Sessões__ da VTEX é uma nova arquitetura que permite ao lojista utilizar novas features da plataforma e potencializar o seu uso. Com a instalação do novo sistema de sessões, sua loja poderá atender a cenários complexos de __B2B__, poderá __regionalizar a experiência__ do seu cliente e realizar segmentações de promoções por __Audiência de campanhas__.

## Funcionamento do Sistema de Sessões

### Cookie vtex_session

O Sistema de Sessões identifica através do cookie `vtex_session` as informações de uma sessão específica de um usuário navegando em sua loja.

É possível ver as propriedades de uma sessão fazendo um `GET`na rota `{{accountname}}.{{environment}}.com.br/api/sessions?items={{namespace}}.{{value}},{{namespace}}.{{value2}}`.

No JSON de resposta, a API retorna diversos __namespaces__. Os namespaces são as chaves que agrupam certos tipos de informação sobre a sessão.

Abaixo, segue o exemplo de uma resposta com os dados básicos de uma sessão:

```json
{
    "id": "840f8910-eb3b-4f25-8d51-a06445317906",
    "namespaces": {
        "account": {
            "id": {
                "value": "0e914df8-c516-45bc-a45a-0aab6482eaf7",
                "keepAlive": true
            },
            "accountName": {
                "value": "qamarketplace"
            }
        },
        "store": {
            "channel": {
                "value": "1"
            }
        },
        "impersonate": {
            "canImpersonate": {
                "value": "false"
            }
        },
        "profile": {
            "isAuthenticated": {
                "value": "false"
            }
        }
    },
    "version": 1,
    "active": true,
    "debug": false
}
```

Abaixo, segue uma lista com os namespaces possíveis de serem retornados pela API:

- `account`: Namespace com as informações sobre a conta onde está ocorrendo a sessão.
- `checkout`: Namespace com as informações relacionadas ao checkout, como id do carrinho na sessão (`cartId`) e a região (`regionId`) que o checkout retorna para identificar a localização geográfica do usuário navegando nesta sessão.
- `store`: Namespace com as informações sobre o canal de venda vigente na sessão.
- `cookie`: Namespace com as informações dos cookies de autenticação do usuário.
- `impersonate`: Namespace que identifica se o usuário logado tem permissão para impersonar um outro usuário e realizar a navegação por ele.
-  `profile`: Namespace com as informações relacionadas ao perfil do cliente logado na sessão. As price tables elegíveis ao cliente são listadas neste namespace.
-  `public`: Namespace com as informações gerais sobre a sessão, `utm_campaign`, `utm_source` e `utmi_campaign`. Neste namespace, também encontramos as informações de `country` e `postalCode`, que são passadas para o checkout da VTEX retornar o `regionId`, exibido no namespace `checkout`.
-  `authentication`: Namespace com os dados de autenticação dos usuários no contexto da sessão.  
- `rnb`: Namespace retorna as informações relacionadas a audiência de campanhas e promoções que podem ser aplicadas à sessão.

### Cookie vtex_segment

O VTEX Sessions também cria o cookie `vtex_segment`. Este cookie contém as informações com as condições comerciais que serão aplicadas a uma sessão.

É possível ver as propriedades de um segment fazendo um `GET`na rota `{{accountName}}.{{environment}}.com.br/api/segments/{{segmentToken}}`

Abaixo, segue o exemplo de uma resposta com os dados de um segment:

```json
{
    "campaigns": "vip",
    "channel": "1",
    "priceTables": "gold",
    "regionId": "U1cj",
    "utm_campaign": "black friday",
    "utm_source": "google",
    "utmi_campaign": "banner"
}
```

É importante ressaltar que a sessão identificada pelo cookie `vtex_session` é __individual__. Já o cookie `vtex_segment` utiliza informações que podem  ser __compartilhadas__ entre diferentes usuários. Por exemplo: uma mesma price table pode estar disponível para usuários diferentes em sessões distintas. Dessa maneira, o `vtex_segment` é utilizado para controlar a chave de cache das páginas.

## Alterar informações de uma sessão

É possível alterar as informações de uma sessão realizando um `POST` na seguinte rota:

`{{account-name}}.{{environment}}.com.br/api/sessions`

Abaixo, segue o exemplo de um `body` para atualizar as informações de uma sessão:

```json
{
	"public":{
		"utm_campaign":{
			"value":"Black Friday"
		},
		"country":{
			"value":"USA"
		},
		"postalCode":{
			"value":"05408000"
		}
	}
}
```

## Principais features relacionadas ao Sistema de Sessões

### Price Tables

A feature de Price Table é identificada pelo sistema de sessões no namespace `profile`. A tabela de preços exibe preços customizados para o usuário identificado que está navegando na loja. Você poderá criar tabelas de preços para grupos clientes específicos. As Price Tables podem ser utilizadas principalmente para atender a cenário de B2B. Para configurar tabelas de preço em sua loja, acesse nossa documentação sobre como [configurar Price Tables](https://help.vtex.com/pt/tutorial/configurar-price-tables-especificas-com-o-session).

### Region

A feature de region é identificada pelo sistema de sessões no namespace `checkout`, na property `regionId`, que é gerada quando um `postalCode` e um `country` são adicionados à sessão. A feature tem como objetivo regionalizar a experiência do usuário da loja. Permite, por exemplo, que sellers configurem seus próprios preços e que os marketplaces os exibam de acordo com a região do cliente. Para configurar preço e disponibilidade de acordo com a região do usuário, acesse nosso artigo [Configurar preço e disponibilidade de SKUs por Region](/pt/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region)

### Audiência de campanhas

As audiências de campanhas são regras de clusterização que permitem a aplicação de promoções para clientes que atendam às regras da campanha. A feature de Audiência de campanhas funciona de maneira semelhante às Price Tables. Em **Promoções & Taxas** é possível criar condições que aplicam uma promoção a um determinado cliente, caso as condições de audiência de campanha sejam atendidas.
