---
title: 'Campos customizáveis no checkout (B2B)'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-02-09T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: customizable-fields-in-b2b-checkout
locale: pt
---
**Campos customizáveis no checkout B2B** permitem que a Organizational Unit capture informações de negócios durante a compra e mantenha esses dados padronizados no B2B Buyer Portal.

Por meio desta funcionalidade, a Organizational Unit cria os campos necessários para o processo de compra, define em que etapa do Fast Checkout eles aparecem e coleta as informações de forma estruturada. Além disso, com a configuração de **Valores padrão**, é possível pré-preencher esses campos para agilizar o checkout e reduzir erros de preenchimento.


> ⚠️ A funcionalidade [Campos customizáveis no checkout B2B](https://developers.vtex.com/docs/guides/custom-fields-integration) está disponível apenas para B2B Buyer Portal. É necessária autorização do Commerce Engineer da conta para uso.

## Conceitos-chave

### Campos customizáveis no checkout

Campos configuráveis definidos por Buyer Organizations para coletar informações específicas durante o checkout, como dados contábeis, rastreabilidade interna e requisitos de conformidade.

Esses campos podem ser aplicados nos níveis de:

- Pedido (`order`)
- Item (`item`)
- Endereço (`address`)

### Configurações de campos customizáveis do checkout

Parâmetros que definem a estrutura de um campo customizável em um contrato B2B, incluindo:

- Nome do campo
- Tipo (`text`, `number`, `option`)
- Nível de aplicação (`order`, `item` ou `address`)
- Obrigatoriedade (mandatório ou opcional)
- Status (habilitado ou desabilitado)

### Valores de campos customizáveis do checkout

Valores pré-definidos para campos customizáveis do tipo `option`. Esses valores permitem uma seleção controlada no checkout e possuem IDs únicos, utilizados em integrações e regras B2B, como budgets e buying policies.

### Valores padrão

Documento que define, por Organizational Unit, quais entidades devem ser utilizadas como padrão no checkout. As entidades incluem:

- Endereços
- Cartões
- Valores de campos customizáveis

Cada entrada referencia a entidade e o ID do valor selecionado.

> ⚠️ Apenas campos customizáveis  do tipo ``option`` podem ser configurados como valores padrão. Isso garante que a seleção seja feita por ID, e não pelo texto exibido no checkout.

### Aplicação no orderForm

Durante o checkout, os valores dos campos customizáveis são aplicados ao orderForm, de acordo com o nível configurado (pedido, item ou endereço), e passam a fazer parte dos dados do carrinho utilizados na criação do pedido.

## Casos de uso

### Captura de campos obrigatórios de negócios no checkout

Uma indústria precisa registrar centro de custo e número de PO em todos os pedidos. Ela configura campos customizáveis obrigatórios no nível de pedido, garantindo que essas informações sejam preenchidas antes da finalização do pedido.

### Checkout pré-preenchido por Organizational Unit

Uma rede com múltiplas unidades deseja reduzir erros de endereço e cobrança. Ela configura valores padrão por Organizational Unit para que, após o login, o checkout seja automaticamente preenchido com endereço, cartão e valores de campos customizáveis específicos daquela unidade.

### Integração com budgets e buying policies

Uma organização utiliza centros de custo para aplicar regras de compra e limites financeiros. Ela define os centros de custo como valores de campos customizáveis e referencia seus IDs em [budgets](https://help.vtex.com/pt/docs/tutorials/visao-geral-de-budgets) e buying policies, garantindo estabilidade das regras mesmo quando os nomes exibidos são alterados.

### Migração de preferências

Uma empresa migra de ERP e deseja preservar preferências por Organizational Unit. Ela importa endereços, cartões e valores de campos customizáveis para o Master Data, assegurando continuidade no processo B2B desde o primeiro pedido.

### Padronização e governança

Um time de governança precisa padronizar escolhas no checkout e evitar variações locais. Ele centraliza Valores padrão por Organizational Unit, garantindo que as compras sigam regras de dados e conformidade definidas pela organização.
