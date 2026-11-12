---
title: 'Migrar anúncios para Família de Produtos no Mercado Livre'
status: PUBLISHED
createdAt: 2026-11-12T00:00:00.000Z
updatedAt: 2026-11-12T00:00:00.000Z
publishedAt: 2026-11-12T00:00:00.000Z
firstPublishedAt: 2026-11-12T00:00:00.000Z
contentType: tutorial
productTeam: Channels
slugEN: migrating-listings-to-product-families-in-mercado-libre
legacySlug: migrar-anuncios-para-familia-de-produtos-mercado-livre
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A **Família de Produtos no Mercado Livre** é o modelo de anúncios em que cada SKU do seu produto é publicado como um anúncio próprio, e o Mercado Livre agrupa automaticamente esses anúncios em uma **Família** com base nos atributos do SKU, como cor e tamanho. Com isso, você pode definir condições de venda diferentes para cada variação, como preço, origem do estoque, tipo de frete e desconto, sem que o comprador deixe de ver todas as opções do produto juntas.

Neste artigo, você vai aprender a migrar seus anúncios existentes para o modelo de Família de Produtos usando o fluxo de envio de planilha da integração com o Mercado Livre no Admin VTEX.

> ℹ️ As contas já integradas ao Mercado Livre são habilitadas para o novo modelo de forma gradual e automática, e essa liberação é feita exclusivamente pelo Mercado Livre. Anúncios criados depois que a conta é habilitada já são publicados no novo modelo. Para mais detalhes, consulte o anúncio [Novo modelo de anúncios no Mercado Livre](/pt/announcements/2025-06-30-novo-modelo-de-anuncios-no-mercado-livre).

## Antes de começar

Para migrar seus anúncios para Família de Produtos, você precisa:

- Ter a integração com o Mercado Livre ativa e configurada no Admin VTEX. Caso ainda não tenha feito essa configuração, siga as instruções em [Cadastro do conector Mercado Livre](/pt/docs/tracks/cadastro-da-integracao-do-mercado-livre).
- Ter a conta habilitada pelo Mercado Livre para o [novo modelo de anúncios](/pt/announcements/2025-06-30-novo-modelo-de-anuncios-no-mercado-livre).
- Ter um usuário com permissões de acesso ao módulo **Marketplace** e às configurações de integrações. Para saber mais sobre permissões, consulte [Perfis de acesso](/pt/docs/tutorials/como-criar-perfil-de-acesso).

## Migrando anúncios para Família de Produtos no Mercado Livre

### Passo 1: Acessar a integração com o Mercado Livre

1. No Admin VTEX, acesse **Marketplace > Conexões > Marketplaces e integrações**.
2. Clique na integração do **Mercado Livre**.

<!-- TODO: adicionar captura de tela da página da integração com o botão "Enviar planilha" em destaque. -->

### Passo 2: Baixar a planilha modelo

1. Clique no botão `Enviar planilha`.
2. Clique no link `Baixe o template` para fazer o download da planilha modelo.

<!-- TODO: confirmar o formato do arquivo do template (.xlsx ou .csv). -->

> ℹ️ Use sempre o template baixado em `Enviar planilha`. Ele é diferente da planilha usada no processo de migração de anúncios via chamado no Suporte VTEX, e arquivos fora do padrão do template podem não ser processados.

### Passo 3: Preencher os dados dos anúncios

Preencha o template com os IDs dos anúncios no Mercado Livre que você deseja migrar para o novo modelo. Ao preencher, siga estas orientações:

- Não altere o nome nem a ordem das colunas do template.
- Revise os IDs antes do envio para evitar erros de processamento.

Você não precisa indicar na planilha como os anúncios devem ser agrupados. O Mercado Livre forma as Famílias automaticamente a partir dos atributos de cada SKU.

<!-- TODO: detalhar colunas obrigatórias com time de engenharia -->

<!-- TODO: confirmar se o template possui apenas a coluna de ID do anúncio ou colunas adicionais (ex.: ID do SKU, ID da variação), se é possível incluir anúncios criados fora da integração VTEX, e incluir tabela no formato "Coluna | Descrição | Preenchimento" com um exemplo de preenchimento. -->

### Passo 4: Enviar a planilha preenchida

1. Na página da integração com o Mercado Livre, clique novamente em `Enviar planilha`.
2. Faça o upload da planilha preenchida.

<!-- TODO: confirmar na UI os rótulos exatos dos botões de seleção de arquivo e de confirmação do envio, além de limites de tamanho do arquivo ou de quantidade de linhas por envio. -->

## O que acontece após migrar para Família de Produtos

Depois do envio, o Mercado Livre avalia todos os anúncios listados na planilha:

- **Anúncios elegíveis:** são migrados para o modelo de Família de Produtos.
- **Anúncios não elegíveis:** são recusados, continuam existindo no modelo anterior e seguem recebendo atualizações da integração normalmente.

<!-- TODO: confirmar com engenharia onde o seller acompanha o status do processamento (página da integração, notificação ou outra tela), quais status são possíveis e se é possível consultar o motivo da recusa de cada anúncio. -->

<!-- TODO: confirmar se o resultado da migração pode ser verificado no Admin VTEX (ex.: Marketplace > Conexões > Produtos) ou somente no painel do Mercado Livre. -->

> ⚠️ Este fluxo se aplica exclusivamente à migração de anúncios existentes para o modelo de Família de Produtos no Mercado Livre. O cadastro de novos produtos e a migração de anúncios criados fora da VTEX, feita por meio de chamado no Suporte VTEX, seguem outros procedimentos.
