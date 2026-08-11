---
title: 'Exportando dados de organizações (B2B Suite)'
createdAt: '2026-08-10T12:00:00.000Z'
updatedAt: '2026-08-10T12:00:00.000Z'
contentType: tutorial
productTeam: B2B
slug: exportando-dados-de-organizacoes
slugEN: exporting-organizations-data
legacySlug:
locale: pt
---

> ⚠️ Esta documentação se aplica apenas ao B2B Suite.

A exportação de dados permite baixar em planilhas as informações de organizações compradoras, centros de custo, endereços e usuários cadastrados na sua loja. Com isso, você pode auditar essas configurações em massa, sem precisar revisar cada organização individualmente no Admin VTEX. A exportação é útil, por exemplo, para conferir se você cadastrou os dados corretamente depois de uma [importação em massa](/pt/docs/tutorials/configurando-a-importacao-em-massa-de-organizacoes-e-centros-de-custo).

## Antes de começar

Para usar a exportação, você precisa ter o aplicativo [B2B Organizations](https://developers.vtex.com/docs/apps/vtex.b2b-organizations) atualizado para a versão mais recente.

> ⚠️ Somente usuários com permissão de acesso ao menu **Organizações** podem exportar dados. Saiba mais em [Gerenciamento de permissões no B2B Suite](/pt/docs/tutorials/gerenciamento-de-permissoes-no-b2b-suite).

## Dados exportados

Ao iniciar uma exportação, você escolhe quais dos quatro tipos de dados deseja baixar:

- **Organizações:** as organizações compradoras cadastradas na loja e suas configurações, como status, coleções, tabelas de preços, condições de pagamento e políticas comerciais. Saiba mais em [Gerenciamento de organizações B2B](/pt/docs/tutorials/gerenciamento-de-organizacoes-b2b).

- **Centros de custo:** as divisões de cada organização compradora. Saiba mais em [Gerenciamento de centro de custo no B2B](/pt/docs/tutorials/gerenciamento-de-centro-de-custo-no-b2b).

- **Usuários:** as pessoas autorizadas a acessar a plataforma em nome de uma organização. Saiba mais em [Gerenciamento de Usuários em organizações B2B](/pt/docs/tutorials/gerenciamento-de-usuarios-em-organizacoes-b2b).

- **Endereços:** os endereços de entrega associados aos centros de custo.

O sistema exporta os dados em formato XLSX. O sistema processa cada tipo de dado selecionado separadamente, disponibilizando a ação `Baixar arquivo` na janela de exportação.

Não há limite de registros por exportação. O tempo de geração dos arquivos depende do volume de dados exportados.

## Instruções

Abaixo, você confere uma visão geral das etapas para exportar os dados:

Exportando dados
Acompanhando e baixando a exportação

### Exportando dados

Para exportar dados de organizações, centros de custo, endereços e usuários, siga os passos abaixo:

1. No Admin VTEX, acesse **Aplicativos > Organizações e centros de custo B2B > Organizações**, ou digite **Organizações** na barra de busca no topo da página.
2. Clique na aba **Organizações**.
3. Clique em `Novo` e selecione a opção `Exportar`.
4. Marque as caixas de seleção dos tipos de dados que deseja exportar: `Organizations`, `Cost centers`, `Users` e `Addresses`. Para exportar todos os tipos de dados, marque `Select all`.
5. Clique em `Start export`.

### Acompanhando e baixando a exportação

Depois de iniciar a exportação, a janela exibe uma tabela com uma linha para cada tipo de dado selecionado, mostrando o progresso da geração, o status e a ação disponível.

Cada linha da tabela pode apresentar um dos seguintes status:

- **Generating...**: o sistema está gerando o arquivo.
- **Ready**: o arquivo está pronto e a ação `Baixar arquivo` fica disponível na mesma linha.

Quando o sistema conclui a exportação, o Admin VTEX exibe a mensagem **Exportação concluída. Download iniciado**. Para salvar o arquivo de um tipo de dado, clique em `Baixar arquivo` na linha correspondente.

## Limitações

- Esta forma de exportação de dados está disponível apenas para lojas que usam o B2B Suite.
- A exportação permite apenas baixar os dados. Para criar novos registros em massa, use a [importação em massa de dados sobre organizações e centros de custo](/pt/docs/tutorials/configurando-a-importacao-em-massa-de-organizacoes-e-centros-de-custo).

## Saiba mais

Neste tutorial, você aprendeu a exportar dados de organizações, centros de custo, usuários e endereços no B2B Suite. Para continuar configurando sua loja, consulte os seguintes artigos:

- [Gerenciamento de organizações B2B](/pt/docs/tutorials/gerenciamento-de-organizacoes-b2b)
- [Configurando a importação em massa de dados sobre organizações e centros de custos](/pt/docs/tutorials/configurando-a-importacao-em-massa-de-organizacoes-e-centros-de-custo)
- [Gerenciamento de centro de custo no B2B](/pt/docs/tutorials/gerenciamento-de-centro-de-custo-no-b2b)
- [Gerenciamento de Usuários em organizações B2B](/pt/docs/tutorials/gerenciamento-de-usuarios-em-organizacoes-b2b)
- [Gerenciamento de permissões no B2B Suite](/pt/docs/tutorials/gerenciamento-de-permissoes-no-b2b-suite)
- [B2B Suite - Visão geral](/pt/docs/tutorials/b2b-suite-visao-geral)
