---
title: 'Campos customizáveis no checkout (B2B)'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-02-09T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: campos-customizaveis-no-checkout-b2b
locale: pt
---

**Campos customizáveis** é uma funcionalidade do B2B Buyer Portal que permite coletar e padronizar informações específicas de negócio durante o checkout. Assim, o checkout de uma loja B2B se adequa às especificidades de seus clientes.

O uso combinado dessas funcionalidades garante um checkout mais rápido, consistente e alinhado às regras de compra da organização.

>⚠️ As funcionalidades [Custom Checkout Fields](https://developers.vtex.com/docs/guides/custom-fields-integration) e [Default Values](https://developers.vtex.com/docs/guides/default-values-integration) estão disponíveis apenas para B2B Buyer Portal. É necessária autorização do Commerce Engineer da conta para uso.

## Conceitos-chave


### Custom checkout fields

Campos configuráveis definidos por Buyer Organizations para coletar informações específicas durante o checkout, como dados contábeis, rastreabilidade interna e requisitos de conformidade.

Esses campos podem ser aplicados nos níveis de:

- Pedido (`order`)
- Item (`item`)
- Endereço (`address`)


### Custom checkout field settings

Configuração que define a estrutura de um custom checkout field em um contrato B2B, incluindo:
- Nome do campo
- Tipo (`text`, `number`, `option`)
- Nível de aplicação (`order`, `item` ou `address`)
- Obrigatoriedade (mandatório ou opcional)
- Status (habilitado ou desabilitado)

### Custom checkout field values

Valores pré-definidos para custom checkout fields do tipo `option`. Esses valores permitem uma seleção controlada no checkout e possuem IDs únicos, utilizados em integrações e regras B2B, como budgets e buying policies.

### Aplicação no orderForm

Durante o checkout, os valores dos custom checkout fields são aplicados ao orderForm, de acordo com o nível configurado (pedido, item ou endereço), e passam a fazer parte dos dados do carrinho utilizados na criação do pedido.

### Valores padrão

Documento que define, por Organizational Unit, quais entidades devem ser utilizadas como padrão no checkout. As entidades incluem:

- Endereços
- Cartões
- Valores de Custom checkout fields

Cada entrada referencia a entidade e o ID do valor selecionado.

>⚠️ Apenas custom checkout fields do tipo `option` podem ser configurados como default values. Isso garante que a seleção seja feita por ID, e não pelo texto exibido no checkout.


### Shopper-session e Session Manager

No login, o app Shopper-session recupera os default values aplicáveis, resolve prioridades quando existe mais de uma configuração e grava os valores finais no app [Session Manager](https://developers.vtex.com/docs/guides/session-manager), que os disponibiliza para o checkout e demais etapas do fluxo de compra.

Para mais informações sobre as configurações do Custom Checkout Field e Default Values na VTEX, acesse as documentações a seguir:
- [Custom Checkout Fields API Reference](https://developers.vtex.com/docs/api-reference/custom-fields-api)
- [Default Values API Reference](https://developers.vtex.com/docs/api-reference/default-values-api)
- [Custom Checkout Fields integration](https://developers.vtex.com/docs/guides/custom-fields-integration#create-custom-field-settings)
- [Default Values integration](https://developers.vtex.com/docs/guides/default-values-integration)

## Casos de uso

### Captura de campos obrigatórios de negócio no checkout

Uma indústria precisa registrar centro de custo e número de PO em todos os pedidos. Ela configura custom checkout fields obrigatórios no nível de pedido, garantindo que essas informações sejam preenchidas antes da finalização do pedido.

### Checkout pré-preenchido por Organizational Unit

Uma rede com múltiplas unidades deseja reduzir erros de endereço e cobrança. Ela configura default values por Organizational Unit para que, após o login, o checkout seja automaticamente preenchido com endereço, cartão e valores de custom checkout fields específicos daquela unidade.

### Integração com budgets e buying policies

Uma organização utiliza centros de custo para aplicar regras de compra e limites financeiros. Ela define os centros de custo como custom checkout field values e referencia seus IDs em [budgets](https://help.vtex.com/pt/docs/tutorials/visao-geral-de-budgets) e buying policies, garantindo estabilidade das regras mesmo quando os nomes exibidos são alterados.

### Migração de preferências

Uma empresa migra de ERP e deseja preservar preferências por Organizational Unit. Ela importa endereços, cartões e valores de campos customizáveis para o Master Data, assegurando continuidade no processo B2B desde o primeiro pedido.

### Padronização e governança

Um time de governança precisa padronizar escolhas no checkout e evitar variações locais. Ele centraliza Default Values por Organizational Unit, garantindo que as compras sigam regras de dados e conformidade definidas pela organização.
