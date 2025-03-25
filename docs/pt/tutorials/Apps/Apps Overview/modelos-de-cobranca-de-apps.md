---
title: 'Modelos de cobrança de apps'
id: 2ZKBKxLe08Q6seA6sCi6o2
status: ARCHIVED
createdAt: 2018-06-12T23:17:22.336Z
updatedAt: 2021-07-14T23:48:12.812Z
publishedAt: 
firstPublishedAt: 2018-06-12T23:36:33.096Z
contentType: tutorial
productTeam: Others
author: 5dYWGfGKUwkI86Gomk6AcQ
slugEN: app-pricing-options
locale: pt
legacySlug: modelos-de-cobranca-de-apps
subcategoryId: 3e2VLdLao8GGk4sAmMmwmi
---

## Opções de cobrança

Desenvolvedores que quiserem cobrar mensalmente por seus aplicativos devem configurar o campo `billingOptions` em seu arquivo `manifest.json` seguindo um conjunto de regras. Todas as opções de faturamento descrevem assinaturas de um ano com frequência de cobrança mensal.

Configurar suas Opções de Cobrança é uma etapa necessária para distribuir seu aplicativo no ecossistema VTEX. Sem ela, a visibilidade do seu aplicativo fica restrita à conta em que ele foi publicado.

Existem três maneiras de gerar receita com seu aplicativo (considere que US$ 1,00 = R$ 3,50):

### Aplicativo gratuito

Aplicativos gratuitos estão disponíveis para todas as contas VTEX.

Exemplo:
```json
{
  "billingOptions": {
    "free": true,
    "termsURL": "https://url.to.the/terms"
  }
}
```

### Assinatura com preço fixo

Cobrança de uma taxa de assinatura fixa mensal e recorrente.

Exemplo:
```json
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "BRL",
              "fixed":  105
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
}
```

A VTEX cobrará mensalmente da conta que instalou o aplicativo o valor de R$ 105,00 = US$ 30,00.

### Assinatura com preço variável

Cobrança de uma taxa mensal variável com base no uso e em um conjunto de métricas.
No exemplo a seguir, temos um aplicativo que envia um SMS para cada compra em uma loja VTEX e cobra por cada SMS enviado. Neste exemplo, cada SMS custa R$ 0,07.

```json
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "BRL",
              "calculatedByMetricUnit": {
                "metricId": "smsSent",
                "metricName": "SMS Sent",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "multiplier": 0.07
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
```

Para um consumo de 2000 SMS enviados, a VTEX cobra o seguinte valor da conta que instalou seu aplicativo:

2000 x R$ 0,07 = R$ 140,00 = US$ 40,00

Se você quiser, no entanto, definir preços diferentes para diferentes faixas de consumo, expanda o campo `ranges`:

```json
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "BRL",
              "calculatedByMetricUnit": {
                "metricId": "smsSent",
                "metricName": "SMS Sent",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "inclusiveTo": 2000,
                    "multiplier": 0.07
                  },
                  {
                    "exclusiveFrom": 2000,
                    "inclusiveTo": 4000,
                    "multiplier": 0.06
                  },
                  {
                    "exclusiveFrom": 4000,
                    "multiplier": 0.05
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
}
```

Assim, será cobrado:

1. Para 1500 SMS enviados

    - 1500 x R$ 0,07 = R$ 105,00 = US$ 30,00

2. Para 3500 SMS enviados

    - 3500 x R$ 0,06 = R$ 210,00 = US$ 60,00

3. Para 7000 SMS enviados

    - 7000 x R$ 0,05 = R$ 350,00 = US$ 100,00

Para cobrar por mais de uma métrica, você deve adicionar itens ao array *items*:

```json
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "BRL",
              "calculatedByMetricUnit": {
                "metricId": "smsSentBrazil",
                "metricName": "SMS Sent in Brazil",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "multiplier": 0.07
                  }
                ]
              }
            },
            {
              "itemCurrency": "USD",
              "calculatedByMetricUnit": {
                "metricId": "smsSentUS",
                "metricName": "SMS Sent in the US",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "multiplier": 0.05
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
}
```

Assim, para 2000 SMS enviados no Brasil e 1500 SMS enviados nos EUA, será cobrado o seguinte valor:

2000 x R$ 0,07 + 1500 x US$ 0,05 = R$ 140,00 + US$ 75,00 = US$ 115,00

Você também pode incluir um preço fixo *item* para cobrar um preço-base, independente do consumo de seus recursos:

```json
{
  "billingOptions": {
    "policies": [
      {
        "currency": "USD",
        "billing": {
          "taxClassification": "software",
          "items": [
            {
              "itemCurrency": "USD",
              "fixed":  100
            },
            {
              "itemCurrency": "BRL",
              "calculatedByMetricUnit": {
                "metricId": "smsSent",
                "metricName": "SMS Sent",
                "minChargeValue": 0,
                "ranges": [
                  {
                    "exclusiveFrom": 0,
                    "multiplier": 0.07
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "termsURL": "http://route.to.the/terms"
  }
}
```

Com isso, para 2000 SMS enviados, será cobrado o seguinte valor:

US$ 100 + 2000 x R$ 0,07 = US$ 100,00 + R$ 140,00 = US$ 140,00

__Dica:__ Evite adicionar complexidade desnecessária ao seu modelo de preços. __Mantenha as coisas simples!__

## Métricas de log

O consumo de recursos do seu aplicativo deve ser registrado no VTEX Metrics para ser cobrado pelo Billing da VTEX. Digamos, por exemplo, que um SMS seja enviado toda vez que um método `sendSMS` for chamado. Uma maneira de registrar o envio de SMS seria:

```typescript
import { Colossus } from '@vtex/api'
// ...
const colossus = new Colossus(ioContext)

// Seding SMS
try {
  sendSMS(phoneNumber)
} catch (e) {
  throw new Error('Não foi possível enviar o SMS')
}

// Logging metric
colossus.sendMetric({
  value: 1,
  unit: 'SMS',
  metricId: 'smsSent'
})
```

Lembre-se de adicionar __dependency__ e __policy__, que são obrigatórios:

```json
//node/package.json
"dependencies": {
  "@vtex/api": "^0.48.0",
}

//manifest.json
"policies": [
    {
      "name": "colossus-send-metrics"
    }
]
```

Depois que sua métrica foi registrada, ela adquire um registro de data e hora que será usado pelo Billing ao agregar todo o consumo dos recursos do seu aplicativo durante um mês.

## Verificação da Instalação

Atualmente, a única maneira possível é saber quais contas instalaram seu aplicativo e entrar em contato com o VTEX IO, onde mantemos os registros de instalação do seu aplicativo. Em breve, isso será possível por meio do VTEX OMS.

## Status do Contrato

Para verificar se o usuário ainda está pagando pelo seu aplicativo (para que ele possa tomar providências, como desativar a si mesmo), ele deve enviar uma chamada `GET` para o endpoint privado `/_v/isContractActive` do `vtex.billing`. Em caso de `200`, este endpoint retorna um valor booleano indicando se o aplicativo tem um contrato ativo ou não. Os passos abaixo mostram como fazer isso:

1. Adicione esta dependência ao seu `manifest.json`

   ```json
    {
      "dependencies": {
        "vtex.billing": "0.x"
      }
    }
    ```

2. Adicione a permissão necessária para acessar este endpoint

    ```json
    {
      "policies": [
        {
          "name": "vtex.billing:contract-status"
        }
      ]
    }
    ```

3. Seu aplicativo está pronto para acessar o endpoint `/_v/isContractActive`

```typescript
    import {HttpClient} from '@vtex/api'
    // ...

    const http = HttpClient.forWorkspace('billing.vtex', ioContext, {timeout: 10000})
    const isContractActive = await http.get('/_v/isContractActive')

```

## Visibilidade do aplicativo

Se você __não__ quiser que seu aplicativo seja __público__, ficando visível e instalável somente na sua __própria conta__, você deve __remover completamente este campo__. Em outras palavras, um aplicativo __sem__ o campo `billingOptions` em seu `manifest.json` é entendido como um aplicativo **privado**.

Uma vez que o campo `billingOptions` esteja presente no seu `manifest.json`, seu aplicativo está pronto para distribuição __em todo o ambiente do IO__ e pode ser comprado por __qualquer outra conta__.

## Instalação de aplicativo pago

A instalação de um aplicativo pago só é possível por usuários administradores que possuem a permissão `BuyApp` no Gerenciamento da conta.

Quando um aplicativo com `billingOptions` é instalado com êxito, um contrato é criado no módulo de faturamento da conta do cliente, e a cobrança é feita até o final de cada mês.

## Receita do aplicativo

No modelo atual, você recebe 75% de toda a receita gerada pelo seu aplicativo.
