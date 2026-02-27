---
title: 'Campos customizáveis no checkout'
createdAt: '2026-03-27T10:00:00.000Z'
updatedAt: '2026-03-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
locale: pt
slugEN: custom-checkout-fields
---

Os **campos customizáveis no checkout** permitem coletar informações adicionais durante a compra no **B2B Buyer Portal**, como **centro de custo**, **número de pedido interno (PO)** e outros dados de controle. Essas informações ficam associadas ao pedido, ajudando a empresa a padronizar dados, aplicar regras internas e facilitar auditorias.

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam B2B Buyer Portal, atualmente disponível para contas selecionadas.

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
- **Item**: aplica-se a produtos específicos no carrinho.
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
- É o único tipo que pode receber **valor padrão por Organizational Unit**.


## Configurações de cada campo

Ao criar um campo, o administrador define:

- Nome do campo.
- Tipo (`text`, `number` ou `option`).
- Nível de aplicação (pedido, item ou endereço).
- Obrigatoriedade (obrigatório ou opcional).
- Status (habilitado ou desabilitado).

## Valores padrão no checkout

Para reduzir preenchimento manual e evitar inconsistências, é possível configurar valores padrão por **Organizational Unit.**

É possível definir como padrão:

- Endereço.
- Cartão.
- Campos customizáveis do tipo `option`.

> ⚠️ Apenas campos do tipo `option` podem ser definidos como valor padrão.

> ℹ️ Para mais informações sobre como adicionar ou configurar campos customizáveis, acesse [Gerenciar campos customizáveis no checkout (B2B)](https://help.vtex.com/pt/docs/tutorials/gerenciar-campos-customizaveis-no-checkout-b2b).

## Impacto para o administrador

- Dados consistentes entre unidades organizacionais.
- Melhor aplicação de regras internas de compra.
- Mais segurança para relatórios e auditorias.


## Impacto para o comprador

- Os campos aparecem no checkout com instruções claras.
- Alguns valores podem vir pré-preenchidos (quando configurados pela Organization Unit).
- O pedido é finalizado com menos retrabalho e menos risco de erro.

## Exemplos de uso

### Exigir informações obrigatórias em todos os pedidos
- **Cenário:** a empresa precisa registrar **centro de custo** e **PO** em todos os pedidos.
- **Configuração:** criar campos obrigatórios no nível de `pedido` (`option` para centro de custo e `text` ou `number` para PO).
- **Resultado:** o pedido só pode ser finalizado com os dados preenchidos, garantindo conformidade.

### Checkout pré-preenchido por Organizational Unit (OU)
- **Cenário:** a empresa quer reduzir erros e tempo de compra em múltiplas unidades.
- **Configuração:** definir valores padrão por **Organization Unit** para endereço, cartão e campos do tipo `option`.
- **Resultado:** o checkout aparece pré-preenchido após login, reduzindo retrabalho.

### Classificação de projeto ou atividade
- **Cenário:** a empresa precisa associar cada item comprado a um projeto ou atividade.
- **Configuração:** criar um campo `option` no nível de `item` com a lista de projetos ou atividades ativas.
- **Resultado:** cada item fica vinculado a um projeto, facilitando rateio e controle de custos.

### Diferenciar compra para revenda e consumo interno
- **Cenário:** a empresa precisa identificar o tipo de compra no pedido.
- **Configuração:** criar um campo `option` no nível de `pedido` com valores pré-definidos (Revenda / Consumo interno).
- **Resultado:** permite segmentar pedidos e aplicar regras fiscais ou comerciais.

### Segmentação para relatórios gerenciais
- **Cenário:** o time financeiro precisa classificar pedidos por tipo de despesa.
- **Configuração:** criar campos `option` padronizados no nível de `pedido` (ex.: CAPEX, OPEX).
- **Resultado:** relatórios podem ser filtrados sem tratamento manual posterior.

### Justificativa obrigatória para compras específicas
- **Cenário:** a empresa exige justificativa em compras sensíveis ou acima de determinado valor.
- **Configuração:** criar um campo `text` obrigatório no nível de `pedido`.
- **Resultado:** a justificativa fica registrada no pedido para revisão ou auditoria.

### Padronização e governança centralizada
- **Cenário:** a empresa precisa evitar variações no preenchimento de dados.
- **Configuração:** utilizar campos `option` em vez de texto livre e definir valores por **Organization Unit**.
- **Resultado:** dados mais consistentes e auditáveis em toda a operação.

### Controle de compliance em empresas reguladas
- **Cenário:** a empresa precisa registrar códigos regulatórios por item.
- **Configuração:** criar um campo obrigatório no nível de `item` (por exemplo, do tipo `text` ou `option`).
- **Resultado:** cada item comprado inclui a informação necessária para auditorias regulatórias.
