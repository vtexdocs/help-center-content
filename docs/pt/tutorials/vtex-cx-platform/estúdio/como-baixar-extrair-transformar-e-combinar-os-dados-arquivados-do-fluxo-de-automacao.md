---
title: "Como baixar, extrair, transformar e combinar os dados arquivados do Fluxo de automação"
id: 3fYq4fID5fMrm5BT2uVxG0
status: PUBLISHED
createdAt: 2025-09-12T17:09:16.264Z
updatedAt: 2025-10-03T14:21:49.361Z
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

Algo muito importante para você saber sobre a coleta de dados no VTEX CX Platform é que os dados ficam armazenados por 180 dias. Logo, após este período os dados são arquivados na plataforma e armazenados em formato Json no menu Archives.

## Obtendo os arquivos através do Fluxo de automação

É possível baixar esses dados arquivados acessando o painel de configurações. No final da página informará a quantidade de arquivos e seus registros.

Você poderá acessar tanto o conteúdo da tabela **Messages** quanto o da tabela Runs. Para visualizar tanto um quanto outro, basta clicar no botão que está grifado em amarelo.
Os arquivos da tabela Messages virão com a inicial **message**. Para realizar o download dos arquivos, basta clicar no ícone grifado ao lado da data.

Os arquivos da tabela Runs virão com a inicial **run**. Para realizar o download dos arquivos, basta clicar no ícone grifado ao lado da data.

Por fim, em cada arquivo você poderá verificar qual o conteúdo, período(mês) e quantidade de registros do arquivo.

## Carregando e transformando os dados arquivados no Power BI

- Após baixar os arquivos e extraí-los no Power BI, através do Power Query, você conseguirá carregá-los ao selecionar nova fonte e escolhendo a opção **JSON**.
- Ao clicar em conectar você deve alterar a opção da caixa de seleção para Todos os Arquivos.
- Selecione o arquivo desejado e clique em abrir.

No Power Query irá aparecer a opção para Importar os arquivos, se você deseja importá-los para o Power BI, ou a opção DirectQuery, que faz a conexão direta com o arquivo sem fazer sua importação.  Recomendo utilizar Importar, pois o arquivo pode ser alterado ou removido da pasta.

Ao fazer a importação do arquivo, você verá que ele já irá expandir todas as colunas, que contenham dados.

É importante fazer a exclusão dessas etapas, para obter os dados limpos e fazer a união das tabelas dos dados arquivados junto aos dados das tabelas que foram obtidas através do conector.

## Combinando as tabelas

- Para fazer a combinação das tabelas, basta você selecionar a opção **Combinar** e logo após, **Acrescentar Consultas**,  **Acrescentar Consultas como novas**.
- Feito isso, basta selecionar as tabelas desejadas e finalizar o processo clicando em ok.
- Ao finalizar o processo, será gerada uma nova consulta com todos os dados selecionados em uma única tabela.

> A conexão dos dados ocorre através da API de integração com o Power BI. A data está estruturada no formato JSON. Para acessar todos os campos dos dados, você deve expandir as colunas no Power Query no Power BI.
