---
title: 'Cadastrar SKU'
id: 17PxekVPmVYI4c3OCQ0ddJ
status: PUBLISHED
createdAt: 2019-05-20T13:57:45.289Z
updatedAt: 2025-06-13T18:27:58.802Z
publishedAt: 2025-06-13T18:27:58.802Z
firstPublishedAt: 2019-06-25T15:06:05.521Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-skus
locale: pt
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalogo-101
order: 10
---

Há diferentes formas de cadastrar SKUs: 

- Admin VTEX
- Importação de planilha
- API

> ℹ️ Se você deseja importar SKUs via [integrações de backend](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) com ERP, confira o guia [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-guide).

## Admin VTEX

Para saber como cadastrar novos SKUs ao seu catálogo pelo Admin VTEX, confira o artigo [Adicionar ou editar SKU](https://help.vtex.com/pt/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN).

## Planilha

Para cadastrar seus SKUs por planilha é necessário primeiro exportar a planilha padrão VTEX para, em seguida, importar a planilha com as suas informações.

### Exportar planilha padrão

Para fazer isso, siga o passo a passo abaixo: 

1. Clique em **Catálogo**.
2. Clique em **Importação e exportação**.
3. Na aba __Todos os produtos__, clique em **Exportação / Importação**.
4. Em __Exportar__, na caixa verde, adicione o email desejado para o envio da planilha. Em seguida,  clique em `Exportar para Excel`.
5. Ao receber a planilha, preencha as linhas com os dados do SKU. Para entender melhor o significado de cada campo, acesse nosso artigo sobre [preencher campos da planilha de importação de produtos e SKUs](https://help.vtex.com/pt/tutorial/preencher-campos-da-planilha-de-importacao--4nYhx63Q5yokQWaMguaIgI).

### Importar planilha

Depois de preencher os dados da planilha, siga o passo a passo para Importar seus SKUs.

1. Clique em **Catálogo**.
2. Clique em **Importação e exportação**.
3. Na aba __Todos os produtos__, clique em **Exportação / Importação**.
4. Clique na aba **Importar**.
5. Em **Choose file**, na caixa azul, selecione a planilha preenchida na etapa anterior.
6. Clique em `Importar`.

### Adicionar imagens por planilha

Após o cadastro dos SKUs é necessário adicionar as imagens para torná-los ativos. Para fazer isso, siga o passo a passo abaixo: 

1. Clique em **Catálogo**.
2. Clique em **Importação e exportação**.
3. Clique na aba **Importar imagens**.
4. Clique na palavra **aqui** para baixar a planilha modelo. A planilha estará no formato que o sistema aceita, evitando problemas na importação.
5. Ao receber a planilha por email, preencha os campos. Para entender melhor o significado de cada campo, acesse nosso artigo [sobre importar imagens por planilha](https://help.vtex.com/pt/tutorial/importando-imagens-por-planilha--tutorials_262).
6. Após preencher a planilha, clique em **Selecionar arquivo**.
7. Selecione o arquivo desejado e clique em **Abrir**.
8. Clique em **Importar**.

## API

Para cadastrar um SKU por API, use o endpoint [Create SKU](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit).
