---
title: 'Creating CX automations'
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
legacySlug: create-active-agents
locale: en
subcategoryId: 7BtmQ6zk6O7VJ7QumXJEiM
---

## Overview

Automations are designed to act proactively based on predefined rules and conditions. Unlike passive agents, which only react to user interactions, automations can initiate actions or communications when certain criteria are met, often triggered by changes in data or system events. The command to deploy an automation is: `weni project push agent_definition.yaml`.

## Basic concepts and YAML structure

An automation is defined in an `agent_definition.yaml` file. The main fields are:

- **agents.<agent_id>**: Identifies the agent.
- **name**: The agent's display name, with a 55-character limit.
- **description**: A description of the agent's purpose and capabilities.
- **rules**: A dictionary of rules that trigger the agent's actions.
- Inside **rules.<rule_id>**:
  - **display_name**: The readable name of the rule.
  - **template**: The Highly Structured Message (HSM) template to use.
  - **start_condition**: A description of the condition that must be met to trigger the rule.
  - **source**: Defines the code to run when the rule is triggered, with `entrypoint` pointing to the class/method and `path` to the directory where the code is located.
- **pre_processing**: Defines a preprocessing step to prepare data before evaluating the rules, with `source` specifying the code and `result_examples_file` pointing to a JSON file with output examples.

The `result_example.json` file must be an array of objects. Each object contains:

- `urn`: The contact's unique identifier (for example, a phone number or user ID).
- `data`: A dictionary with the data relevant to the rule. The structure of this dictionary depends on the information your agent needs to process.

## Project structure

An automation follows a clear folder structure.

```
your-project-name/
├── rules/
│   ├── status_aprovado/
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

This structure helps organize the different parts of the agent. The `rules/` folder contains the rules separated by status, each with its own `main.py` and `requirements.txt`. The `pre_processors/processor` folder contains the preprocessing code and its `requirements.txt`, while the `agent_definition.yaml` and `result_example.json` files are stored in the root directory.

## YAML definition example

Below is an example of an `agent_definition.yaml` file with an agent called `active_order_status` that manages order statuses:

```yaml
agents:
  active_order_status:
    name: "Active Order Status"
    description: "Agent that triggers status templates of orders, based on the status received from VTEX - Order Status"
    language: "pt_BR"
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

This file defines four rules linked to different order statuses. For each rule, the display name, associated HSM template, start condition, and path to the Python code to be executed are configured. The `pre_processing` block specifies the class and directory to use for preparing the data before evaluating the rules.

## Preprocessing

The preprocessing step gathers all the data needed by the rules. Only at this stage can HTTP requests or other external calls be made; for this reason, there's a single `requirements.txt` file in `pre_processors`. The `PreProcessorContext` object contains the webhook payload and project information. Webhook data is accessed with `context.payload.get("field")`. For example, to get the `orderId` in a payload like the one below, use `context.payload.get("orderId")`.

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

In addition to accessing payload fields, you can get project information such as the identifier (uuid) and the VTEX account through `context.project.get("uuid")` and `context.project.get("vtex_account")`. The preprocessor's process method must return a `ProcessedData` object, consisting of a `urn` (contact identifier) and a dictionary containing the data to be passed to the rules. The `urn` must follow the `whatsapp:5582900000000` pattern.

Below is a simplified example of a preprocessor:

```python
from weni.context.preprocessor_context import PreProcessorContext
from weni.preprocessor import PreProcessor as BasePreProcessor, ProcessedData

class PreProcessor(BasePreProcessor):
    def process(self, context: PreProcessorContext) -> ProcessedData:
        # Obter dados do webhook
        order_id = context.payload.get("orderId", "")
        phone_number = context.payload.get("phone_number", "")
        state = context.payload.get("currentState", "")

        # Obter dados do projeto
        project_id = context.project.get("uuid")
        vtex_account = context.project.get("vtex_account")

        # Lógica de negócio (chamadas externas podem ser feitas aqui)
        # ...

        # Retornar o contato e dados para as regras
        urn = f"whatsapp:{phone_number}"
        return ProcessedData(urn, {"orderId": order_id, "status": state})
```

## Rule implementation: PaymentApproved

Each agent rule is implemented as a class that inherits from `Rule`. The `execute` function checks whether the condition is met and returns `True` if the message should be sent. The `get_template_variables` function builds a dictionary with the template variables. Below is the implementation of the `PaymentApproved` rule:

```python
from weni.preprocessor import ProcessedData
from weni.rules import Rule

class PaymentApproved(Rule):
    def execute(self, data: ProcessedData) -> bool:
        status = data.data.get("status")
        # Verifica se o status recebido no pré-processamento é 'payment-approved'
        return status == "payment-approved"

    def get_template_variables(self, data: ProcessedData) -> dict:
        name = data.data.get("name")
        price = int(data.data.get("price", 0))
        order_id = data.data.get("orderId")
        # Retorna variáveis na ordem do template HSM
        return {"1": f"R$ {price / 100}", "2": order_id}
```

## Using templates (HSM)

Message templates (HSM) registered in WhatsApp Business can contain placeholders such as `{{1}}`, `{{2}}`, and so on. When `execute` returns `True`, the VTEX CX Platform (Weni) CLI calls `get_template_variables` to complete these variables. For example, considering a template such as `Hello {{1}}, your order {{2}} is now in {{3}} stage`, the function must return:

```json
{"1": "Leonard", "2": "12345", "3": "Delivery"}
```

## Rule execution logic and use cases

After preprocessing, the agent follows the rules defined in the YAML file in order. The first rule whose `execute` method returns `True` will be executed, and the others will be ignored. Therefore, it's important to organize the rules hierarchically and make sure that preprocessing returns sufficient data for the conditions of each rule. Common use cases include order notifications (approved, invoiced, canceled, created), but you can create rules for any relevant event within VTEX or your business flow.

## Conclusion

Automations allow you to automate notifications and interactions with your customers based on VTEX events. By structuring your project following this guide — clearly defining the YAML, pre-processing, and rules — you ensure a secure, scalable integration that informs your customers at the right time.

> [Here](https://github.com/weni-ai/weni-example-agents) you can find an example of automation code.
