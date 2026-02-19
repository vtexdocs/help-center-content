---
title: 'Campos customizáveis no checkout (B2B)'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-02-09T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: customizable-fields-in-b2b-checkout
---
# Campos customizáveis no checkout B2B

Os **campos customizáveis no checkout B2B** permitem coletar informações adicionais durante a compra no **B2B Buyer Portal**, como **centro de custo**, **número de pedido interno (PO)** e outros dados de controle. Essas informações ficam associadas ao pedido, ajudando a empresa a padronizar dados, aplicar regras internas e facilitar auditorias.

> ⚠️ Esta funcionalidade está disponível apenas para o **B2B Buyer Portal** e requer autorização do **Commerce Engineer** da conta.

## Para que servem os campos customizáveis

Com campos customizáveis, sua empresa pode:

- Padronizar informações de compra entre unidades organizacionais e compradores.
- Exigir dados obrigatórios antes de finalizar o pedido.
- Reduzir erros de preenchimento no checkout.
- Melhorar rastreabilidade, auditoria e conformidade.

## Perfis de uso

O uso de campos customizáveis considera dois perfis:
- **Administrador**: cria os campos necessários para a empresa e define onde cada campo aparece no checkout.
- **Comprador**: preenche os campos durante a compra.

## Aplicação dos campos

Os campos podem ser configurados em diferentes níveis:

- **Pedido**: aplica-se à compra inteira.
- **Item**: aplica-se a cada produto no carrinho.
- **Endereço**: aplica-se às informações de entrega ou cobrança.

## Tipos de campos

Ao criar um campo customizável, o administrador deve escolher um dos tipos abaixo.

### Texto (`text`)

Permite que o comprador insira um valor livre no checkout.

- Aceita qualquer sequência de caracteres.
- Não possui validação de formato além da obrigatoriedade (quando configurada).

### Número (`number`)

Permite a inserção exclusiva de valores numéricos.

- Aceita apenas números.
- Pode ser utilizado quando o valor precisa seguir formato estritamente numérico.

### Opção (`option`)

Exibe uma lista de valores previamente cadastrados para seleção.

- O comprador deve selecionar uma das opções disponíveis.
- Permite padronização de dados.
- É o único tipo que pode receber **valor padrão por Organizational Unit (OU)**.


## Configurações de cada campo

Ao criar um campo, o administrador define:

- Nome do campo.
- Tipo (`text`, `number` ou `option`).
- Nível de aplicação (pedido, item ou endereço).
- Obrigatoriedade (obrigatório ou opcional).
- Status (habilitado ou desabilitado).

## Valores padrão no checkout

Para reduzir preenchimento manual e evitar inconsistências, é possível configurar valores padrão por **Organizational Unit (OU)**.

É possível definir como padrão:

- Endereço.
- Cartão.
- Campos customizáveis do tipo `option`.

> ⚠️ Apenas campos do tipo `option` podem ser definidos como valor padrão.

> ℹ️ Para mais informações sobre como adicionar ou configurar campos customizáveis, acesse [Gerenciar campos customizáveis no checkout(B2B)](https://help.vtex.com/pt/docs/tutorials/gerenciar-campos-customizaveis-no-checkout-b2b).

## Impacto para o administrador

- Dados consistentes entre unidades organizacionais.
- Melhor aplicação de regras internas de compra.
- Mais segurança para relatórios e auditorias.


## Impacto para o comprador

- Os campos aparecem no checkout com instruções claras.
- Alguns valores podem vir pré-preenchidos (quando configurados pela OU).
- O pedido é finalizado com menos retrabalho e menos risco de erro.

## Exemplos de uso

| Caso de uso | Cenário | Configuração | Resultado |
|-------------|----------|--------------|------------|
| **Exigir informações obrigatórias em todos os pedidos** | A empresa precisa registrar **centro de custo** e **PO** em todos os pedidos. | Criar campos obrigatórios no nível de `pedido` (`option` para centro de custo e `text` ou `number` para PO). | O pedido só pode ser finalizado com os dados preenchidos, garantindo conformidade. |
| **Checkout pré-preenchido por OU** | A empresa quer reduzir erros e tempo de compra em múltiplas unidades. | Definir valores padrão por **OU** para endereço, cartão e campos do tipo `option`. | O checkout aparece pré-preenchido após login, reduzindo retrabalho. |
| **Classificação de projeto ou atividade** | A empresa precisa associar cada item comprado a um projeto ou atividade. | Criar um campo `option` no nível de `item` com a lista de projetos ou atividades ativas. | Cada item fica vinculado a um projeto, facilitando rateio e controle de custos. |
| **Diferenciar compra para revenda e consumo interno** | A empresa precisa identificar o tipo de compra no pedido. | Criar um campo `option` no nível de `pedido` com valores pré-definidos (Revenda / Consumo interno). | Permite segmentar pedidos e aplicar regras fiscais ou comerciais. |
| **Segmentação para relatórios gerenciais** | O time financeiro precisa classificar pedidos por tipo de despesa. | Criar campos `option` padronizados no nível de `pedido` (ex.: CAPEX, OPEX). | Relatórios podem ser filtrados sem tratamento manual posterior. |
| **Justificativa obrigatória para compras específicas** | A empresa exige justificativa em compras sensíveis ou acima de determinado valor. | Criar um campo `text` obrigatório no nível de `pedido`. | A justificativa fica registrada no pedido para revisão ou auditoria. |
| **Padronização e governança centralizada** | A empresa precisa evitar variações no preenchimento de dados. | Utilizar campos `option` em vez de texto livre e definir valores por **OU**. | Dados mais consistentes e auditáveis em toda a operação. |
| **Controle de compliance em empresas reguladas** | A empresa precisa registrar códigos regulatórios por item. | Criar um campo obrigatório no nível de `item` (por exemplo, do tipo `text` ou `option`). | Cada item comprado inclui a informação necessária para auditorias regulatórias. |
| **Migração de preferências entre sistemas** | A empresa migra de um ERP e quer manter preferências por unidade organizacional. | Importar endereços, cartões e valores padrão antes do go-live. | A operação inicia com experiência consistente desde o primeiro pedido. |
