---
title: Modelos de precios de aplicaciones
id: 2ZKBKxLe08Q6seA6sCi6o2
status: DRAFT
createdAt: 2018-06-12T23:17:22.336Z
updatedAt: 2021-07-14T23:48:12.812Z
publishedAt: 
firstPublishedAt: 2018-06-12T23:36:33.096Z
contentType: tutorial
productTeam: Others
author: 5dYWGfGKUwkI86Gomk6AcQ
slug: modelos-de-precios-de-aplicaciones
legacySlug: modelos-de-precios-de-aplicaciones
subcategory: 3e2VLdLao8GGk4sAmMmwmi
---

## Opciones de Facturación

Los desarrolladores que deseen cobrar mensualmente por sus aplicaciones deben establecer el campo `billingOptions` en su archivo `manifest.json` siguiendo un conjunto de reglas. Todas las opciones de facturación designan suscripciones de un año con frecuencia de cobro mensual.

Determinar sus Opciones de Facturación es un paso necesario para distribuir su aplicación en el ecosistema VTEX. Sin estos, la visibilidad de su aplicación se restringe a la cuenta donde se publicó.

Tiene 3 formas de monetizar su aplicación (considere que US$ 1.00 = R$ 3.50):

### App Gratuitas

Las aplicaciones gratuitas están disponibles para todas las cuentas VTEX.

Ejemplo:

```json
{
  "billingOptions": {
    "free": true,
    "termsURL": "https://url.to.the/terms"
  }
}
```

### Suscripción con precio fijo 

Cobrar una tarifa de suscripción mensual fija recurrente.

Ejemplo:
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

VTEX cobrará mensualmente desde la cuenta que instaló esta aplicación R$ 105.00 = US$ 30.00

### Suscripción con precio variable

Cobrar una tarifa variable mensual con base en el uso y un conjunto de métricas.
En el siguiente ejemplo tenemos una aplicación que envía un SMS por cada compra en una tienda VTEX, y cobra por cada uno de los SMS enviados. En esta aplicación de ejemplo, cada SMS cuesta R$0.07.

```
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

Por un consumo de 2000 SMS enviados, VTEX cobra a la cuenta que instaló su aplicación:

2000 x R$ 0.07 = R$ 140.00 = US$ 40.00

Ahora, si desea establecer diferentes precios para diferentes rangos de consumo, expanda el campo `range`:

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

Así, se cobrará:

1. Por 1500 SMS enviados

     - 1500 x R$ 0.07 = R$ 105.00 = US$ 30.00

2. Por 3500 SMS enviados

    - 3500 x R$ 0.06 = R$ 210.00 = US$ 60.00

3. Y por 7000 SMS enviados 

    - 7000 x R$ 0.05 = R$ 350.00 = US$ 100.00

Para cobrar por más de una métrica, usted debe agregar elementos al array *items*:

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

Así, por 2000 SMS enviados en Brasil y 1500 SMS enviados en los EE. UU., se cobrará:

2000 x R$ 0.07 + 1500 x US$ 0.05 = R$ 140.00 + US$ 75.00 = US$ 115.00

Usted también puede incluir un *item* con precio fijo para cobrar un precio base, independientemente del consumo de sus recursos:

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

De esta manera, por 2000 SMS enviados, se cobrará:

US$ 100 + 2000 x R$ 0.07 = US$ 100.00 + R$ 140.00 = US$ 140.00

__Consejo rápido:__ Evite agregar complejidad innecesaria a su modelo de precios. __¡Manténgalo simple!__

## Registro de Métricas

El consumo de recursos de su aplicación debe estar registrado en VTEX Metrics para que se cobre mediante VTEX Billing. Digamos, por ejemplo, que se envía un SMS cada vez que se llama un método `sendSMS`. Una forma de registrar el envío de SMS es:

```typescript
import { Colossus } from '@vtex/api'
// ...
const colossus = new Colossus(ioContext)

// Seding SMS
try {
  sendSMS(phoneNumber)
} catch (e) {
  throw new Error('Could not send SMS')
}

// Logging metric
colossus.sendMetric({
  value: 1,
  unit: 'SMS',
  metricId: 'smsSent'
})
```

Recuerde agregar la __dependencia__ y __política__ requeridas:

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

Una vez que se registró su métrica, se establece un timestamp que será utilizado por Billing al agregar todo el consumo de los recursos de su aplicación durante un mes.

## Verificación de la Instalación.

En este momento, la única forma posible de saber qué cuentas han instalado su aplicación es comunicándose con VTEX IO, donde guardamos los historiales de registro de instalación de su aplicación. Pronto, esto será posible ingresando a VTEX OMS.

## Estado del Contrato

Para verificar si el usuario aún está pagando por su aplicación (para que pueda actuar, como desactivarse a sí misma), debe enviar una solicitud `GET` al endpoint privado `vtex.billing` 
`/_v/isContractActive`. En `200`, este endpoint devuelve un valor booleano que indica si la aplicación tiene un contrato activo o no. Los pasos a continuación muestran cómo hacerlo:


1. Añada esta dependencia a su `manifest.json` 

    ```json
    {
      "dependencies": {
        "vtex.billing": "0.x"
      }
    }
    ```

2. Añada el permiso necesario para acceder a este endpoint

    ```json
    {
      "policies": [
        {
          "name": "vtex.billing:contract-status"
        }
      ]
    }
    ```

3. Su aplicación está lista para acceder al endpoint `/_v/isContractActive` 

```typescript
    import {HttpClient} from '@vtex/api'
    // ...

    const http = HttpClient.forWorkspace('billing.vtex', ioContext, {timeout: 10000})
    const isContractActive = await http.get('/_v/isContractActive')

```

## Visibilidad de la Aplicación

Si no quiere que su aplicación sea pública, solamente visible e instalable en su cuenta propia, debe __eliminar este campo completamente__. En otras palabras, una aplicación sin el campo `billingOptions` en su` manifest.json` se entiende como una aplicación __privada__

Una vez que el campo `billingOptions` esté presente en su `manifest.json`, su aplicación está lista para su distribución dentro de  todo el ambiente IO y puede ser comprada por cualquier otra cuenta.

## Instalación de Aplicación Pagada

La instalación de una aplicación pagada solamente es posible por los usuarios admin que cuenten con Licencia `BuyApp` en Gestión de la cuenta.

Cuando una aplicación con `billingOptions` se instala con éxito, se crea un contrato en el módulo Billing de la cuenta del cliente y se factura al final de cada mes.

## Ingresos de la Aplicación

En el modelo actual, usted obtiene el 75% de todos los ingresos generados por su aplicación.

