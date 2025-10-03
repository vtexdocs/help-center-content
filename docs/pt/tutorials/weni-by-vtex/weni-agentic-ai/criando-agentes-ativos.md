---
title: 'Criando Agentes Ativos'
id: 4ijpXwff2x4A44AZw2tMzQ
status: PUBLISHED
createdAt: 2025-09-23T17:40:38.123Z
updatedAt: 2025-10-03T14:20:03.399Z
publishedAt: 2025-10-03T14:20:03.399Z
firstPublishedAt: 2025-10-03T14:20:03.399Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: create-active-agents
legacySlug: criando-agentes-ativos
locale: pt
subcategoryId: 7BtmQ6zk6O7VJ7QumXJEiM
---

#### Visão Geral

Agentes ativos são projetados para agir de forma proativa com base em regras e condições predefinidas. Ao contrário dos agentes passivos, que reagem apenas às interações dos usuários, os agentes ativos podem iniciar ações ou comunicações quando determinados critérios são atendidos, muitas vezes desencadeadas por mudanças em dados ou eventos do sistema. O comando para fazer o deploy de um agente ativo é o mesmo utilizado para outros agentes: `weni project push agent_definition.yaml`

#### Conceitos Básicos e Estrutura YAML

A definição de um agente ativo é feita em um arquivo `agent_definition.yaml`. Os principais campos são:

- **agents.<id_do_agente>**: identifica o agente
- **name**: nome de exibição do agente, com limite de 55 caracteres
- **description**: descrição do propósito e capacidades do agente
- **rules**: dicionário de regras que disparam as ações do agente
- Dentro de **rules.<id_da_regra>**:
  - **display_name**: nome legível da regra
  - **template**: template de mensagem HSM a ser usado
  - **start_condition**: descrição da condição que deve ser atendida para acionar a regra
  - **source**: define o código a ser executado quando a regra é disparada, com `entrypoint` apontando para a classe/método e `path` para o diretório onde está o código
- **pre_processing**: define uma etapa de pré‑processamento para preparar dados antes de avaliar as regras com `source` especificando o código e `result_examples_file` apontando para um JSON com exemplos de saída.

O arquivo `result_example.json` deve ser um array de objetos. Cada objeto contém:

- `urn`: identificador único do contato (por exemplo, número de telefone ou ID de usuário).
- `data`: um dicionário com os dados relevantes para a regra. A estrutura desse dicionário depende das informações que seu agente precisa processar

#### Estrutura do Projeto

Um agente ativo segue uma organização de pastas clara

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

Essa estrutura ajuda a organizar as diferentes partes do agente. Na pasta `rules/` ficam as regras separadas por status, cada uma com seu próprio arquivo `main.py` e `requirements.txt`. A pasta `pre_processors/processor` contém o código de pré‑processamento e seu `requirements.txt`, enquanto os arquivos `agent_definition.yaml` e `result_example.json` ficam na raiz.

#### Exemplo de Definição YAML

Abaixo está um exemplo de `agent_definition.yaml` com um agente chamado `active_order_status` que gerencia o status de pedidos:

```yaml
agents:
  active_order_status:
    name: "Active Order Status"
    description: "Agente responsável por disparar templates de status de pedidos, com base no status recebido da VTEX - Order Status"
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

Este arquivo define quatro regras vinculadas aos diferentes status do pedido. Para cada regra são configurados o nome de exibição, o template HSM associado, a condição de início e o caminho para o código Python que será executado. O bloco `pre_processing` indica a classe e o diretório que serão usados para preparar os dados antes de avaliar as regras.

#### Pré‑processamento

A etapa de pré‑processamento é responsável por coletar todos os dados necessários que serão utilizados pelas regras. Somente nesta etapa é permitido realizar requisições HTTP ou outras chamadas externas; por isso, existe um único `requirements.txt` dentro de `pre_processors`. O objeto `PreProcessorContext` contém o payload do webhook e informações do projeto. Os dados do webhook são acessados via `context.payload.get("campo")`. Por exemplo, para obter o `orderId` em um payload como o abaixo, utiliza‑se `context.payload.get("orderId")`

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

Além de acessar campos do payload, é possível obter informações do projeto, como o identificador (`uuid`) e a conta VTEX, via `context.project.get("uuid")` e `context.project.get("vtex_account")`. O método `process` do pré‑processador deve retornar um objeto `ProcessedData`, composto por uma `urn` (identificador do contato) e um dicionário com os dados que serão repassados para as regras. A `urn` deve seguir o padrão `whatsapp:5582900000000`.

Abaixo está um exemplo simplificado de pré‑processador:

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

#### Implementação de Regra: PaymentApproved

Cada regra do agente é implementada como uma classe que herda de `Rule`. A função `execute` verifica se a condição é atendida e retorna `True` caso a mensagem deva ser enviada. A função `get_template_variables` monta um dicionário com as variáveis do template. Abaixo está a implementação da regra **PaymentApproved**:

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

#### Uso de Templates (HSM)

Os templates de mensagem (HSM) cadastrados no WhatsApp Business podem conter marcadores como `{{1}}`, `{{2}}`, etc. Quando `execute` retorna `True`, a Weni CLI chama `get_template_variables` para preencher essas variáveis. Por exemplo, considerando um template `Olá {{1}}, seu pedido {{2}} está em fase de {{3}}`, a função deve retornar:

```json
{"1": "Leonardo", "2": "12345", "3": "Entrega"}
```

#### Lógica de Execução das Regras e Casos de Uso

Após o pré‑processamento, o agente percorre as regras definidas no YAML em ordem. A primeira regra cujo método `execute` retornar `True` será executada, e as demais são ignoradas. Portanto, é importante organizar as regras de forma hierárquica e garantir que o pré‑processamento retorne dados suficientes para as condições de cada regra. Casos de uso comuns incluem notificações de pedidos (aprovados, faturados, cancelados, criados), mas você pode criar regras para qualquer evento relevante dentro da VTEX ou do seu fluxo de negócios.

#### Conclusão

Agentes ativos permitem automatizar notificações e interações com seus clientes com base em eventos da VTEX. Ao estruturar seu projeto conforme este guia — definindo claramente o YAML, o pré‑processamento e as regras — você garante uma integração segura e escalável entre Weni e VTEX para informar seus clientes no momento certo.

> [Aqui](https://github.com/weni-ai/weni-active-agents-example) você encontrará um exemplo de código de agente ativo.
