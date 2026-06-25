---
title: 'Crear automatizaciones de CX'
id: 4ijpXwff2x4A44AZw2tMzQ
status: PUBLISHED
createdAt: 2025-09-23T17:40:38.123Z
updatedAt: 2025-10-03T14:20:03.399Z
publishedAt: 2025-10-03T14:20:03.399Z
firstPublishedAt: 2025-10-03T14:20:03.399Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: create-cx-automations
legacySlug: creando-agentes-activos
locale: es
subcategoryId: 7BtmQ6zk6O7VJ7QumXJEiM
---

## Información general

Las automatizaciones se diseñan para actuar de forma proactiva con base en reglas y condiciones predefinidas. A diferencia de los agentes pasivos, que solo reaccionan a las interacciones de los usuarios, las automatizaciones pueden iniciar acciones o comunicaciones cuando se cumplen determinados criterios, muchas veces a partir de cambios en los datos o eventos del sistema. El comando para hacer el deploy de una automatización es: `weni project push agent_definition.yaml`.

## Conceptos básicos y estructura YAML

Una automatización se define en un archivo `agent_definition.yaml`. Los campos principales son:

- **agents.<id_do_agente>**: identifica al agente.
- **name**: nombre para mostrar del agente, con un límite de 55 caracteres.
- **description**: descripción del propósito y las capacidades del agente.
- **rules**: diccionario de las reglas que disparan las acciones del agente.
- Dentro de **rules.<id_da_regra>**:
  - **display_name**: nombre legible de la regla.
  - **template**: plantilla de mensaje HSM que será utilizado.
  - **start_condition**: descripción de la condición que debe cumplirse para activar la regla.
  - **source**: define el código que se ejecutará cuando se dispare la regla, con `entrypoint` apuntando a la clase/método y `path` al directorio donde está el código.
- **pre_processing**: define una etapa de preprocesamiento para preparar datos antes de evaluar las reglas, con `source` especificando el código y `result_examples_file` apuntando a un JSON con ejemplos de salida.

El archivo `result_example.json` debe ser un arreglo de objetos. Cada objeto contiene:

- `urn`: identificador único del contacto (por ejemplo, número de teléfono o ID de usuario).
- `data`: un diccionario con los datos relevantes para la regla. La estructura de ese diccionario depende de la información que tu agente necesita procesar.

## Estructura del proyecto

Una automatización sigue una estructura de carpetas organizada.

```
your-project-name/
├── rules/
│   ├── status_aprobado/
│   │   ├── main.py
│   │   └── requirements.txt
│   └── status_invoiced/
│       ├── main.py
│       └── requirements.txt
├── pre_processors/
│   └── processor/
│       ├── processing.py
│       └── requirements.txt
├── agent_definition.yaml
└── result_example.json
```

Esta estructura ayuda a organizar los diferentes componentes del agente. En la carpeta `rules/` se encuentran las reglas separadas por status, cada una con su propio archivo `main.py` y `requirements.txt`. La carpeta `pre_processors/processor` contiene el código de preprocesamiento y su `requirements.txt`, mientras que los archivos `agent_definition.yaml` y `result_example.json` se encuentran en la raíz.

## Ejemplo de definición YAML

A continuación se muestra un ejemplo de `agent_definition.yaml` con un agente llamado `active_order_status` que gestiona el status de pedidos:

```yaml
agents:
  active_order_status:
    name: "Active Order Status"
    description: "Agente responsable de activar plantillas de status de pedido en función del status recibido de VTEX - Order Status"
    language: "es_MX"
    rules:
      PaymentApproved:
        display_name: "Payment Approved"
        template: "payment_confirmation_2"
        start_condition: "When the status is Payment Approved"
        source:
          entrypoint: "main.PaymentApproved"
          path: "rules/status_payment_approved"
      OrderInvoiced:
        display_name: "Order Invoiced"
        template: "order_update_no_cta_1"
        start_condition: "When the status is Invoiced"
        source:
          entrypoint: "main.StatusInvoiced"
          path: "rules/status_invoiced"
      OrderCanceled:
        display_name: "Order Canceled"
        template: "order_canceled_3"
        start_condition: "When the status is Canceled"
        source:
          entrypoint: "main.Canceled"
          path: "rules/status_canceled"
      OrderCreated:
        display_name: "Order Created"
        template: "order_management_no_cta_5"
        start_condition: "When the status is Order Created"
        source:
          entrypoint: "main.OrderCreated"
          path: "rules/status_order_created"
    pre_processing:
      source:
        entrypoint: "processing.PreProcessor"
        path: "pre_processors/processor"
      result_examples_file: "result_example.json"
```

Este archivo define cuatro reglas vinculadas a los diferentes status del pedido. Para cada regla se configuran el nombre para mostrar, la plantilla HSM asociada, la condición de inicio y la ruta al código de Python que se ejecutará. El bloque `pre_processing` indica la clase y el directorio que se utilizarán para preparar los datos antes de evaluar las reglas.

## Preprocesamiento

La etapa de preprocesamiento se encarga de recopilar todos los datos necesarios que usarán las reglas. Solo en esta etapa se permite realizar solicitudes HTTP u otras llamadas externas; por eso, existe un único `requirements.txt` dentro de `pre_processors`. El objeto `PreProcessorContext` contiene el payload del webhook y la información del proyecto. Se accede a los datos del webhook mediante `context.payload.get(\"campo\")`. Por ejemplo, para recuperar el `orderId` en un payload como el que se muestra a continuación, se utiliza `context.payload.get("orderId")`.

```json
{
    "recorder": {
        "_record": {
            "x-vtex-meta": {},
            "x-vtex-meta-bucket": {}
        }
    },
    "domain": "Marketplace",
    "orderId": "1544102600592-01",
    "currentState": "payment-approved",
    "lastState": "canceled",
    "currentChangeDate": "2025-02-07T13:54:54.7438532Z",
    "lastChangeDate": "2025-02-07T13:54:54.6657558Z",
    "vtexAccount": "leoamaral"
}
```

Además de acceder a campos del payload, puedes recuperar información del proyecto, como el identificador (`uuid`) y la cuenta de VTEX, mediante `context.project.get("uuid")` y `context.project.get("vtex_account")`. El método `process` del preprocesador debe devolver un objeto `ProcessedData`, compuesto por una `urn` (identificador del contacto) y un diccionario con los datos que se transferirán a las reglas. La `urn` debe seguir el formato `whatsapp:5582900000000`.

A continuación se muestra un ejemplo simplificado de preprocesador:

```python
from weni.context.preprocessor_context import PreProcessorContext
from weni.preprocessor import PreProcessor as BasePreProcessor, ProcessedData

class PreProcessor(BasePreProcessor):
    def process(self, context: PreProcessorContext) -> ProcessedData:
        # Obtener datos del webhook
        order_id = context.payload.get("orderId", "")
        phone_number = context.payload.get("phone_number", "")
        state = context.payload.get("currentState", "")

        # Obtener datos del proyecto
        project_id = context.project.get("uuid")
        vtex_account = context.project.get("vtex_account")

        # Procesamiento específico del negocio (aquí se pueden realizar llamadas externas)
        # ...

        # Devolver el contacto y los datos para las reglas
        urn = f"whatsapp:{phone_number}"
        return ProcessedData(urn, {"orderId": order_id, "status": state})
```

## Implementación de regla: PaymentApproved

Cada regla del agente se implementa como una clase que hereda de `Rule`. La función `execute` verifica si se cumple la condición y devuelve `True` en caso de que deba enviarse el mensaje. La función `get_template_variables` construye un diccionario con las variables de la plantilla. A continuación se muestra la implementación de la regla **PaymentApproved**:

```python
from weni.preprocessor import ProcessedData
from weni.rules import Rule

class PaymentApproved(Rule):
    def execute(self, data: ProcessedData) -> bool:
        status = data.data.get("status")
        # Verifica si el status recibido en el preprocesamiento es 'payment-approved'
        return status == "payment-approved"

    def get_template_variables(self, data: ProcessedData) -> dict:
        name = data.data.get("name")
        price = int(data.data.get("price", 0))
        order_id = data.data.get("orderId")
        # Devuelve las variables en el orden de la plantilla HSM
        return {"1": f"R$ {price / 100}", "2": order_id}
```

## Uso de plantillas (HSM)

Las plantillas de mensaje (HSM) registradas en WhatsApp Business pueden contener marcadores como `{{1}}`, `{{2}}`, etc. Cuando `execute` devuelve `True`, VTEX CX Platform (Weni) CLI llama a `get_template_variables` para llenar esas variables. Por ejemplo, considerando una plantilla `Olá {{1}}, seu pedido {{2}} está em fase de {{3}}`, la función debe devolver:

```json
{"1": "Leonardo", "2": "12345", "3": "Entrega"}
```

## Lógica de ejecución de reglas y casos de uso

Después del preprocesamiento, el agente sigue las reglas definidas en el YAML en orden. La primera regla cuyo método `execute` devuelva `True` se ejecutará y las demás se ignorarán. Por lo tanto, es importante organizar las reglas de forma jerárquica y asegurarte de que el preprocesamiento devuelva datos suficientes para las condiciones de cada regla. Los casos de uso comunes incluyen notificaciones de pedidos (aprobados, facturados, cancelados, creados), pero puedes crear reglas para cualquier evento relevante dentro de VTEX o de tu flujo de negocio.

## Conclusión

Las automatizaciones permiten automatizar notificaciones e interacciones con tus clientes con base en eventos de VTEX. Al estructurar tu proyecto según esta guía (definiendo claramente el YAML, el preprocesamiento y las reglas), garantizas una integración segura y escalable para informar a tus clientes en el momento adecuado.

> [Aquí](https://github.com/weni-ai/weni-example-agents) encontrarás un ejemplo de código de automatización.
