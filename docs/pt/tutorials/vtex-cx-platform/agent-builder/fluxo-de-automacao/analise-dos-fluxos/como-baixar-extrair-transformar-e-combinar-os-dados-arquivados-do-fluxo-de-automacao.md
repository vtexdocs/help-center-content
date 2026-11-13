---
title: "Baixar, extrair, transformar e combinar os dados arquivados do Fluxo de automação"
id: 3fYq4fID5fMrm5BT2uVxG0
status: PUBLISHED
createdAt: 2025-09-12T17:09:16.264Z
updatedAt: 2026-11-12T14:20:00.000Z
publishedAt: 2025-10-03T14:21:49.361Z
firstPublishedAt: 2025-10-03T14:21:49.361Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-download-and-extract-archived-data
legacySlug: como-baixar-extrair-transformar-e-combinar-os-dados-arquivados-do-weni-flows
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Os dados do Fluxo de automação ficam armazenados por 180 dias. Após esse período, a plataforma arquiva os dados em formato JSON no menu Archives.

## Obter os arquivos no Fluxo de automação

É possível baixar esses dados arquivados acessando o painel de configurações. No final da página, a plataforma informa a quantidade de arquivos e de registros.

Você poderá acessar tanto o conteúdo da tabela **Messages** quanto o da tabela Runs. Para visualizar tanto um quanto outro, clique no botão que está grifado em amarelo.
Os arquivos da tabela Messages virão com a inicial **message**. Para realizar o download dos arquivos, clique no ícone grifado ao lado da data.

Os arquivos da tabela Runs virão com a inicial **run**. Para realizar o download dos arquivos, clique no ícone grifado ao lado da data.

Por fim, em cada arquivo, você poderá verificar o conteúdo, o período (mês) e a quantidade de registros.

## Carregar e transformar os dados arquivados no Power BI

Para carregar os arquivos no Power BI, siga os passos abaixo:

1. Após baixar os arquivos e extraí-los no Power BI, através do Power Query, você conseguirá carregá-los ao selecionar nova fonte e escolhendo a opção **JSON**.
2. Ao clicar em conectar você deve alterar a opção da caixa de seleção para Todos os Arquivos.
3. Selecione o arquivo desejado e clique em abrir.

No Power Query irá aparecer a opção para Importar os arquivos, se você deseja importá-los para o Power BI, ou a opção DirectQuery, que faz a conexão direta com o arquivo sem fazer sua importação.  Use Importar, pois o arquivo pode ser alterado ou removido da pasta.

Ao fazer a importação do arquivo, você verá que ele já irá expandir todas as colunas que contenham dados.

É importante fazer a exclusão dessas etapas, para obter os dados limpos e fazer a união das tabelas dos dados arquivados junto aos dados das tabelas que foram obtidas pelo conector.

## Combinar as tabelas

Para combinar as tabelas, siga os passos abaixo:

1. Selecione a opção **Combinar** e, logo após, **Acrescentar Consultas**, **Acrescentar Consultas como novas**.
2. Feito isso, selecione as tabelas desejadas e finalize o processo clicando em ok.

Ao finalizar o processo, será gerada uma nova consulta com todos os dados selecionados em uma única tabela.

> A conexão dos dados ocorre através da API de integração com o Power BI. Os dados estão estruturados no formato JSON. Para acessar todos os campos dos dados, você deve expandir as colunas no Power Query no Power BI.
