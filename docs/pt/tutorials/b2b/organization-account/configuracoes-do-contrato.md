---
title: 'Configurações do contrato'
createdAt: '2026-03-14T10:00:00.000Z'
updatedAt: '2026-03-14T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: contract-settings
locale: pt
---

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam B2B Buyer Portal, atualmente disponível para contas selecionadas.

A seção **Contract** na [Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt) reúne configurações que definem como uma organização compradora opera em uma loja B2B Buyer Portal. Nessa seção, o usuário pode ver informações de perfil, gerenciar endereços, configurar meios de pagamento e cartões de crédito, selecionar sortimentos de produtos e gerenciar [campos customizáveis do checkout](https://help.vtex.com/pt/docs/tutorials/campos-contabeis).

Este artigo aborda:

- [Visualizar informações de perfil](#visualizar-informações-de-perfil)
- [Gerenciar endereços](#gerenciar-endereços)
  - [Adicionar um endereço](#adicionar-um-endereço)
  - [Editar um endereço](#editar-um-endereço)
  - [Excluir um endereço](#excluir-um-endereço)
- [Gerenciar meios de pagamento](#gerenciar-meios-de-pagamento)
  - [Adicionar um meio de pagamento](#adicionar-um-meio-de-pagamento)
  - [Remover um meio de pagamento](#remover-um-meio-de-pagamento)
- [Gerenciar cartões de crédito](#gerenciar-cartões-de-crédito)
  - [Adicionar um cartão de crédito](#adicionar-um-cartão-de-crédito)
  - [Editar um cartão de crédito](#editar-um-cartão-de-crédito)
  - [Excluir um cartão de crédito](#excluir-um-cartão-de-crédito)
- [Selecionar um sortimento de produtos](#selecionar-um-sortimento-de-produtos)
- [Campos contábeis](#campos-contábeis)

## Visualizar informações de perfil

A página **Profile** exibe informações básicas sobre o contrato, incluindo nome, email e data de criação. Essas informações não podem ser editadas.

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Profile.**
2. Veja os detalhes na seção **Details**.

## Gerenciar endereços

A página **Addresses** lista todos os endereços disponíveis para a unidade organizacional. Cada endereço mostra o nome e o tipo. O usuário pode pesquisar, adicionar, editar e excluir endereços nessa página.

Além dos dados de logradouro, o usuário pode associar **locations** e **recipients** a um endereço.

Uma **location** é um ponto específico de entrega dentro de um local, como doca, departamento ou área interna. Por exemplo, o pedido é enviado ao endereço da empresa, mas a entrega é na Doca-3456.

**Recipients** são pessoas cadastradas na organização compradora para receber pedidos naquele endereço.

### Adicionar um endereço

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Addresses.**
2. Na página **Addresses**, clique no ícone **+** no topo da tela.
3. No painel **Add address**, você pode escolher um endereço entre os já cadastrados para sua organização. Se ainda não houver endereço cadastrado ou quiser salvar um novo, preencha as informações nas abas a seguir:
    - Na aba **Details**, preencha os campos de endereço:
        - **Country:** selecione o país.
        - **Address Name:** informe um nome para identificar o endereço.
        - **Street Address:** informe o logradouro.
        - **Apt, Suite, Building (optional):** informe complementos, se necessário.
        - **City:** informe a cidade.
        - **State:** selecione o estado.
        - **Postal Code:** informe o CEP ou código postal.
        - **Address Type:** selecione o tipo de endereço.
    - Na aba **Locations**, opcionalmente adicione locations associadas a este endereço. Clique em `Add Location` para incluir mais locations.
    - Na aba **Recipients**, opcionalmente adicione recipients para este endereço. Clique em `Add recipient` para incluir mais recipients, cada um com **Name** e **Phone Number.**
4. Clique em `Add`.

### Editar um endereço

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Addresses.**
2. Na página **Addresses**, na linha correspondente, clique no ícone de menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> e selecione uma das ações disponíveis:
    - `Open` — ver os detalhes do endereço.
    - `Edit details` — editar as informações do endereço.
    - `Add Locations` — adicionar locations ao endereço.
    - `Add Recipients` — adicionar recipients ao endereço.
    - `Set as default` — definir o endereço como padrão da unidade.
    - `Remove from Unit` — remover o endereço da unidade organizacional atual sem excluí-lo.
3. Faça as alterações desejadas.
4. Clique em `Save`.

### Excluir um endereço

> ❗ Excluir um endereço é permanente e não pode ser desfeito. O endereço pode ser usado por várias unidades organizacionais. Ao excluir, o endereço e todos os seus dados são removidos de todas as unidades associadas; o histórico de uso é mantido para auditoria.

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Addresses.**
2. Na página **Addresses**, na linha correspondente, clique no ícone de menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Delete`.
3. No modal de confirmação, digite o nome do endereço para confirmar.
4. Clique em `Remove`.

## Gerenciar meios de pagamento

A página **Payment methods** lista os meios de pagamento atualmente disponíveis para a unidade organizacional. O usuário pode adicionar meios dentre as opções disponíveis para a unidade ou remover os existentes.

### Adicionar um meio de pagamento

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Payment methods.**
2. Na página **Payment Methods**, clique no ícone **+** no topo da tela.
3. No painel **Add payment methods**, selecione os meios de pagamento a adicionar marcando as caixas correspondentes.
4. Clique em `Add`.

Os meios selecionados aparecerão na página **Payment Methods** e ficarão disponíveis aos usuários desta unidade no checkout.

### Remover um meio de pagamento

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Payment methods.**
2. Na página **Payment Methods**, clique no ícone **−** ao lado do meio de pagamento a remover.
3. No modal de confirmação, clique em `Remove`.

> ⚠️ Remover um meio de pagamento impede que usuários desta unidade organizacional o utilizem no checkout.

## Gerenciar cartões de crédito

A página **Credit Cards** exibe todos os cartões disponíveis para a unidade organizacional. Cada cartão mostra o apelido e uma opção para ativar ou desativar. Os usuários podem adicionar novos cartões, editar dados de cartões existentes e remover cartões.

Cartões de crédito associados ao contrato são compartilhados com a unidade organizacional, mas podem ser restritos com [scopes](https://help.vtex.com/pt/docs/tutorials/visao-geral-de-scopes). No checkout, os compradores selecionam um cartão pelo apelido dentre os cartões vinculados ao contrato e disponíveis para aquela unidade.

### Adicionar um cartão de crédito

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Credit cards.**
2. Na página **Credit Cards**, clique no ícone **+**.
3. No painel **Add Credit Card**, preencha os campos a seguir:
    - **Card nickname:** informe um nome para identificar o cartão.
    - Em **Card details:**
        - **Card number:** informe o número do cartão.
        - **Exp MM/YY:** informe a data de validade.
        - **CVV:** informe o código de segurança.
        - **Cardholder name:** informe o nome impresso no cartão.
    - Em **Billing address:**
        - **Address line 1:** informe o endereço de cobrança.
        - **Address line 2 (optional):** informe complementos, se necessário.
        - **City:** informe a cidade.
        - **State:** selecione o estado.
4. Clique em `Add`.

### Editar um cartão de crédito

Depois de adicionar um cartão de crédito, só é possível editar o apelido.

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Credit cards.**
2. Na página **Credit Cards**, na linha correspondente, clique no ícone de menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Edit`.
3. No painel **Edit Credit Card**, atualize o apelido do cartão.
4. Clique em `Save`.

### Excluir um cartão de crédito

> ❗ Excluir um cartão de crédito é permanente e não pode ser desfeito.

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Credit cards.**
2. Na página **Credit Cards**, na linha correspondente, clique no ícone de menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Delete`.
3. No modal de confirmação, clique em `Delete`.

## Selecionar um sortimento de produtos

A página **Product assortments** permite escolher qual sortimento de produtos os usuários da unidade organizacional podem acessar. Cada unidade organizacional pode ter um sortimento ativo por vez.

Um **product assortment** é o conjunto de produtos disponíveis aos compradores daquela unidade. Unidades diferentes podem usar sortimentos distintos quando as regras do negócio exigem catálogos ou seleções separados.

1. Na [tela inicial da Organization Account](https://help.vtex.com/pt/docs/tutorials/organization-account-pt#acessando-a-organization-account), na seção **Contract**, clique em **Product assortment.**
2. Na página **Product assortments**, selecione o sortimento desejado na lista clicando no botão de opção correspondente.

A seleção é salva automaticamente.

## Campos contábeis

[Campos contábeis](https://help.vtex.com/pt/docs/tutorials/campos-contabeis) configurados pela organização compradora aparecem como itens individuais de menu na seção **Contract** da barra lateral. Esses campos coletam informações adicionais durante o checkout, como centros de custo, números de pedido de compra (PO) ou códigos de departamento.

Para saber como adicionar ou gerenciar esses campos, consulte [Adicionar ou editar campos contábeis](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-campos-contabeis).
