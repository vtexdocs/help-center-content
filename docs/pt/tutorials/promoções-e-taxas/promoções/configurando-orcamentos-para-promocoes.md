---
title: 'Configurando orçamentos para promoções'
id: 3ZCbnELZdMNykXhqBYdFOa
status: PUBLISHED
createdAt: 2025-09-10T10:30:37.848Z
updatedAt: 2025-09-10T11:49:30.645Z
publishedAt: 2025-09-10T11:49:30.645Z
firstPublishedAt: 2025-09-10T11:43:30.901Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: configuring-promotion-budgets
legacySlug: configurando-orcamentos-para-promocoes
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

O módulo de Promoções do Admin VTEX permite configurar um orçamento para limitar o valor total de descontos concedidos em uma promoção. Essa funcionalidade ajuda a controlar os gastos com benefícios, garantindo que os descontos não ultrapassem um valor máximo previamente definido.

Além disso, o módulo permite que os lojistas monitorem, ajustem ou interrompam promoções de acordo com o consumo do orçamento. Ele também fornece ao lojista visibilidade em tempo real do saldo restante, permitindo tomar decisões mais informadas sobre os ajustes ou a extensão da promoção.

Atualmente, o controle orçamentário é compatível apenas com os seguintes tipos de benefício:

- **Compre Junto:** se aplica a toda a promoção.
- **Compre e Ganhe:** preço máximo.
- **Mais por Menos:** se aplica a toda a promoção.
- **Desconto Progressivo:** se aplica a toda a promoção.
- **Promoção Regular:** preço nominal, preço percentual, preço máximo e tabela de preço.

> ⚠️ Se o benefício da promoção for alterado para um tipo incompatível com o controle orçamentário, a promoção será pausada automaticamente, mas a configuração não será  removida. A promoção continuará ativa, mas sem a aplicação do limite de gastos. Caso o benefício volte a ser compatível, o controle orçamentário será reativado, retomando a aplicação do limite de gastos.

## Como funciona o orçamento
O orçamento define o valor máximo permitido para concessão de descontos na promoção enquanto estiver válido. A cada aplicação de desconto, o valor deduzido do orçamento é calculado da seguinte forma:

Valor original do SKU – Valor com desconto do SKU = Valor deduzido do orçamento

> ℹ️ Ao duplicar uma promoção existente, todas as configurações são copiadas, exceto o orçamento. Esse campo não é duplicável automaticamente e precisa ser preenchido manualmente na nova promoção.

Para usar essa funcionalidade, configure um orçamento ao criar a promoção no Admin VTEX.

## Como criar uma promoção com orçamento
1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2. Clique em `Criar promoção`.
3. Selecione o tipo de promoção que deseja.
4. No painel direito, clique no botão <i class="fas fa-plus" aria-hidden="true"></i> ao lado de **Orçamento**.
5. Defina o valor total disponível para descontos no campo **Orçamento da promoção** com o valor total que poderá ser consumido em descontos nessa promoção.
6. Clique em `Aplicar` para associar o orçamento à promoção.
7. Preencham as demais informações da promoção.
8. Clique em `Salvar`.

> ❗ Em cenários de alta concorrência entre pedidos simultâneos, o valor final consumido do orçamento pode ultrapassar levemente o previsto, devido ao grande volume de requisições processadas ao mesmo tempo.

## Como editar o orçamento de uma promoção
Caso o orçamento de uma promoção seja esgotado e a promoção seja pausada, você pode ajustá-lo aumentando ou reduzindo o orçamento, conforme os passos a seguir:

1. No Admin Vtex, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2. Selecione a promoção desejada.
3. Altere o orçamento conforme desejado.
4. No painel direito, clique em <i class="fas fa-pencil-alt" aria-hidden="true"></i> ao lado de Orçamento.
5. Atualize o campo **Orçamento da promoção** com o novo valor limite.
6. Clique em `Aplicar`.
7. Clique em `Salvar`.

## Como remover um orçamento de uma promoção
Para desvincular o orçamento de uma promoção, realize os passos a seguir:

1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2. Selecione a promoção desejada.
3. Altere o orçamento conforme desejado.
4. No painel direito, clique no ícone <i class="far fa-trash-alt" aria-hidden="true"></i> ao lado de Orçamento.
5. Na janela de confirmação, clique em `Continuar`.
6. Clique em `Salvar`.

## Como a promoção deixa de ser aplicada ao atingir o orçamento 
O status Ativo indica que a promoção está habilitada para ser aplicada. No entanto, sua aplicação também depende da disponibilidade de orçamento.

Se o orçamento for totalmente consumido, a promoção deixará de ser aplicada automaticamente, mesmo que o status continue como Ativo e que a data de término ainda não tenha sido alcançada. Isso significa que a promoção não será aplicada até que o orçamento seja atualizado. 

> ⚠️ Certifique-se de revisar ou remover qualquer comunicação ativa relacionada à promoção.

