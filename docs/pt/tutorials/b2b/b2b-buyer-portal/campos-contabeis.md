---
title: 'Campos contábeis'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-08-28T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
locale: pt
slugEN: accounting-fields
---

Os **campos contábeis** permitem coletar informações adicionais das compras no [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), como centro de custo, número interno de pedido de compra (PO) e outros dados de controle. A plataforma associa essas informações ao pedido, ajudando a empresa a padronizar dados, aplicar regras internas e facilitar auditorias.

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), atualmente disponível para contas selecionadas.

## Uso dos campos contábeis

Os campos contábeis permitem que sua empresa:

- Padronize informações de compra entre [unidades organizacionais](https://help.vtex.com/pt/docs/tutorials/unidades-organizacionais) e compradores.
- Exija informações obrigatórias antes de finalizar o pedido.
- Reduza erros de preenchimento durante o checkout.
- Melhore a rastreabilidade, a auditoria e a conformidade.

## Perfis

Os campos contábeis envolvem dois perfis:

- **Administrador**: cria os campos necessários para a empresa e define onde cada campo aparece no checkout.
- **Comprador**: preenche os campos durante a compra.

## Aplicação dos campos

O administrador pode configurar cada campo para ser aplicado em um dos seguintes níveis:

- **Pedido**: aplica-se à compra inteira.
- **Item**: aplica-se a cada produto no carrinho.
- **Endereço**: aplica-se às informações de entrega ou cobrança.

## Tipos de campo

O comportamento de preenchimento de um campo contábil depende de como o administrador cria o campo: pela Conta da Organização ou pela [Custom Fields API](https://developers.vtex.com/docs/api-reference/custom-fields-api).

### Campos criados na Conta da Organização

Os campos criados na interface da Conta da Organização são campos de lista por padrão. No checkout, o comprador seleciona um dos valores predefinidos, que o administrador gerencia na página de detalhes do campo.

Ao criar o campo, o administrador também pode marcar a opção **Habilitar campo de texto livre** para permitir que os compradores insiram um valor manualmente no checkout, além de selecionar um valor da lista.

### Campos criados via API

Ao criar um campo contábil pela Custom Fields API, o administrador deve escolher um dos seguintes tipos:

- **Texto (`text`):** Aceita qualquer sequência de caracteres, sem validação de formato. Se o campo estiver configurado como obrigatório, a plataforma verifica apenas se o comprador o preencheu.
- **Número (`number`):** Aceita apenas números. Use esse tipo quando o valor precisa seguir um formato estritamente numérico.
- **Opção (`option`):** Exibe uma lista de valores predefinidos para seleção, o que permite a padronização de dados. É o único tipo criado via API que pode ter um valor padrão por unidade organizacional.

## Configuração dos campos

Ao criar um campo, o administrador define o seguinte:

- Rótulo do campo.
- Nível de entrada (pedido ou item).
- Requisito de preenchimento (obrigatório ou opcional).
- Preenchimento com texto livre no checkout (apenas campos criados na Conta da Organização).
- Tipo `text`, `number` ou `option` (apenas campos criados via API).
- Status habilitado ou desabilitado (apenas campos criados via API).

O administrador pode criar e excluir permanentemente campos contábeis diretamente na Conta da Organização, em **Contratos > [contrato] > Campos contábeis**, além de gerenciar as configurações e os valores de cada campo. Para o passo a passo, acesse [Adicionar ou editar campos contábeis](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-campos-contabeis).

## Valores padrão no checkout

Para reduzir o preenchimento manual e evitar inconsistências, você pode configurar valores padrão por unidade organizacional.

Você pode definir os seguintes itens como padrão:

- Endereço.
- Cartão.
- Campos contábeis com valores predefinidos: campos de lista criados na Conta da Organização e campos do tipo `option` criados via API.

Para os campos criados na Conta da Organização, você define o valor padrão na página de detalhes do campo, usando a opção **Definir como padrão** no menu de opções do valor.

> ℹ️ Para mais informações sobre como adicionar ou configurar campos contábeis, acesse [Adicionar ou editar campos contábeis](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-campos-contabeis).

## Alocação de budgets a campos contábeis

Você pode usar campos contábeis como entidades vinculadas em alocações de budget, distribuindo um budget entre os valores de um campo. Por exemplo, você pode atribuir um limite de gastos a cada centro de custo. Isso permite que a organização controle os gastos com base nas informações contábeis coletadas no checkout. Para mais informações, acesse [Visão geral de Budgets](https://help.vtex.com/pt/docs/tutorials/visao-geral-de-budgets).

## Resultados para administradores

- Informações consistentes entre unidades organizacionais.
- Melhor aplicação de regras internas de compra.
- Mais segurança para relatórios e auditorias.

## Resultados para compradores

- Os campos aparecem no checkout com instruções claras.
- O checkout preenche automaticamente os valores padrão configurados para a unidade organizacional.
- O comprador finaliza o pedido com menos retrabalho e menor risco de erro.

## Exemplos de uso

### Exigir informações obrigatórias em todos os pedidos

- **Cenário:** a empresa precisa registrar o **centro de custo** e o **número de PO** em todos os pedidos.
- **Configuração:** criar campos obrigatórios no nível de pedido (`option` para centro de custo e `text` ou `number` para o número de PO).
- **Resultado:** o comprador só consegue finalizar o pedido após fornecer todas as informações, garantindo conformidade.

### Preencher automaticamente campos do checkout por unidade organizacional

- **Cenário:** a empresa quer reduzir erros e tempo de compra em múltiplas unidades.
- **Configuração:** definir valores padrão por unidade organizacional para endereço, cartão e campos contábeis com valores predefinidos.
- **Resultado:** o checkout preenche os campos automaticamente após o login, reduzindo o esforço.

### Classificar projetos ou atividades

- **Cenário:** a empresa precisa vincular cada item comprado a um projeto ou atividade.
- **Configuração:** criar um campo `option` no nível de item com uma lista de projetos ou atividades ativos.
- **Resultado:** o campo vincula cada item a um projeto, facilitando o rateio e o controle de custos.

### Diferenciar compras para revenda e consumo interno

- **Cenário:** a empresa precisa identificar o tipo de compra no pedido.
- **Configuração:** criar um campo `option` no nível de pedido com valores predefinidos, como revenda e consumo interno.
- **Resultado:** permite que a empresa segmente os pedidos e aplique regras fiscais ou comerciais.

### Segmentar para relatórios gerenciais

- **Cenário:** o time financeiro precisa classificar pedidos por tipo de despesa.
- **Configuração:** criar campos `option` padronizados no nível de pedido (exemplo: CAPEX, OPEX).
- **Resultado:** o time financeiro pode filtrar relatórios sem tratamento manual posterior.

### Exigir justificativa para compras específicas

- **Cenário:** a empresa exige justificativa em compras sensíveis ou acima de determinado valor.
- **Configuração:** criar um campo `text` obrigatório no nível de pedido.
- **Resultado:** a plataforma registra a justificativa no pedido para revisão ou auditoria.

### Padronizar e centralizar a governança

- **Cenário:** a empresa precisa evitar variações no preenchimento.
- **Configuração:** usar campos do tipo `option` em vez de texto livre e definir valores padrão por unidade organizacional.
- **Resultado:** informações mais consistentes e auditáveis em toda a operação.

### Controlar compliance em empresas reguladas

- **Cenário:** a empresa precisa registrar códigos regulatórios por item.
- **Configuração:** criar um campo obrigatório no nível de item (por exemplo, do tipo `text` ou `option`).
- **Resultado:** cada item comprado inclui as informações necessárias para auditorias regulatórias.
