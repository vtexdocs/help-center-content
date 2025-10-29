---
title: 'Como baixar, extrair, transformar e combinar os dados arquivados do Weni Flows'
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

Algo muito importante para você saber sobre a coleta de dados na plataforma Weni é que os dados ficam armazenados por 180 dias. Logo, após este período os dados são arquivados na plataforma e armazenados em formato Json no menu Archives.

**Obtendo os arquivos através do Weni Flows**

É possível baixar esses dados arquivados acessando o painel de configurações. No final da página informará a quantidade de arquivos e seus registros, conforme imagem a seguir:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/estúdio/como-baixar-extrair-transformar-e-combinar-os-dados-arquivados-do-weni-flows_1.png)

Você poderá acessar tanto o conteúdo da tabela **Messages** quanto o da tabela **Runs. **Para visualizar tanto um quanto outro, basta clicar no botão que está grifado em amarelo conforme imagem abaixo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/estúdio/como-baixar-extrair-transformar-e-combinar-os-dados-arquivados-do-weni-flows_2.png)

Os arquivos da tabela Messages virão com a inicial **message**. Para realizar o download dos arquivos, basta clicar no ícone grifado (conforme figura abaixo) ao lado da data.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/estúdio/como-baixar-extrair-transformar-e-combinar-os-dados-arquivados-do-weni-flows_3.png)

Os arquivos da tabela Runs virão com a inicial **run**. Para realizar o download dos arquivos, basta clicar no ícone grifado (conforme figura abaixo) ao lado da data.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/estúdio/como-baixar-extrair-transformar-e-combinar-os-dados-arquivados-do-weni-flows_4.png)

Por fim, em cada arquivo você poderá verificar qual o conteúdo, período(mês) e quantidade de registros do arquivo.

## **Carregando e transformando os dados arquivados no Power BI**

- Após baixar os arquivos e extraí-los no Power BI, através do Power Query, você conseguirá carregá-los ao selecionar nova fonte e escolhendo a opção **JSON**.![](https://lh3.googleusercontent.com/9z3OcZRNQ1Zhiz1Wu4zaEchh36HFFflDcVHHYtG46iYJjae5S8qaev6hx0Q0mQgt25ajplip_roJQamrDsdQFvacBMwIjKB8wWl1feLn6DOKL5Jj6cHnWtEVneO0uCjsMXl9v9AC)

- Ao clicar em conectar você deve alterar a opção da caixa de seleção para Todos os Arquivos,  como demonstrado a seguir:![](https://lh4.googleusercontent.com/OczffkXBrBDd5puU5QMvDarsOPDi0toBrOGJG_6j_l9FMbRYw3LsdA_-Cm64faCiV76GoDZSPuSI8-_pAY8gBUQCSWoPkSxX8m5i8cgTuoqG0ZXifGxO9rmFQCSDa0PrXFvwFAHG)

- Selecione o arquivo desejado e clique em abrir.![](https://lh6.googleusercontent.com/jBbn5DMZYGdKxYLr5wy13CC_jmsJUqQF6KEXIwsA2lIxFqsJRp_vnCvycVsVE0hR1puaUaSfs50zqUCjT3yuR0-w8sfgh_jWYCWiMr6ngKcPEKxIEFbt3i881RRF_qoF5LMjh7iK)

No Power Query irá aparecer a opção para Importar os arquivos, se você deseja importá-los para o Power BI, ou a opção DirectQuery, que faz a conexão direta com o arquivo sem fazer sua importação.  Recomendo utilizar Importar, pois o arquivo pode ser alterado ou removido da pasta.

![](https://lh6.googleusercontent.com/wkJp-5S1A1gDfqIxbpCHyBxHKXQhA6Ixa63CyFd-YmTI6dZy5gSpvatxaoRdMUF1ysIhuk8ab3_04eXSmIwORD8WjUlt-bDKZ6EmRk-rI_l7-oZbGsMhfg-mthG2cxNJrH5SMgI8)

Ao fazer a importação do arquivo, você verá que ele já irá expandir todas as colunas, que contenham dados.

![](https://lh6.googleusercontent.com/SKmyYbmSXsoLQv-cW2S9jyupehZDU01V38R0dnHOios1R3ygxVUgbgjbq67sZhfEIbyUDOW14sFRq3Q5kSYth9G-7pwMFy1w-MvsX2ZKxhyVMOspUf5wYst5CeHq3FB_vIbuqzlf)

É importante que façamos a exclusão dessas etapas, como mostrado na figura abaixo, para obtermos os dados limpos e para que consigamos fazer a união das tabelas dos dados arquivados junto aos dados das tabelas que foram obtidas através do conector.

![](https://lh4.googleusercontent.com/IR-0wnoLV0ujZWgPsbjJq-jcmno7tSBDxpCarTs_D1C44ZY0_Wk0FgaP2iZ61GFl0KVbC599Wf5_4zpvsG5RN0OcGzFUHjm2jF6cXbea-3t6TcafZYGYxzS45liAoiNQsExUCZjg)

**Combinando as tabelas**

- Para fazer a combinação das tabelas, basta você selecionar a opção **Combinar** e logo após, **Acrescentar Consultas**,  **Acrescentar Consultas como novas**,  como demonstrado na figura abaixo:![](https://lh6.googleusercontent.com/LkonfHpmeogThOrS9qxUIH_WSXtwnlcFXN9P7R51U8Hl2jPx3w3R1Spttv2qKYIcHML-vWmI_vwDcBaRl8mJPuKCik1YUygYEIzGMdtwBBiPLFP9MQr2PQ_maC7idpxXIIDnA4k5)

- Feito isso, basta selecionar as tabelas desejadas e finalizar o processo clicando em ok.![](https://lh3.googleusercontent.com/rOBlPlBkoP20i6ejj8UAEuDW9N7bTg157M9MJ0KHW_VuoetuZQzFb35phsm1GjI4h--STeQ4ENfBmESFVjGvfvXW__8eXhNRwH3WjG91GpaERD6fAQh3UIpTzRUWJtiWgSCA7U6V)

- Ao finalizar o processo, será gerada uma nova consulta com todos os dados selecionados em uma única tabela.Esperamos que este tutorial seja útil para gerar mais insights para seu negócio.

## **É importante que você saiba!**

A conexão dos dados ocorre através da API de integração com o Power BI. A data está estruturada no formato JSON. Para acessar todos os campos dos dados, você deve expandir as colunas no Power Query no Power BI.

## **Boas Práticas**

- Selecione apenas os dados relevantes para otimizar o processo de extração;- Transforme seus dados para tornar eles úteis;- Certifique-se de que seus dados estejam bem formatados, limpos e organizados antes de começar a criar seus dashboards, relatórios e etc..;- Mantenha um catálogo de dados com todos os campos de dados, descrições e tipos do seu projeto de chatbot. Além disso, certifique-se de que suas variáveis, como campos de contato e resultados, descrevam claramente sua finalidade;- Entenda os conceitos como flows, runs, contacts e messages para interpretar e criar insights de projeto adequadamente;- Explore a documentação [RapidPro API documentation](https://rapidpro.ilhasoft.mobi/api/v2/) para se familiarizar com a disponibilidade dos dados e como eles estão estruturados.
