---
title: 'Cadastrar preço de SKU'
id: tutorials_230
status: DRAFT
createdAt: 2017-04-27T22:13:28.715Z
updatedAt: 2021-02-03T16:31:00.230Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:04.007Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: cadastrando-preco-de-sku
locale: pt
legacySlug: cadastrando-preco-de-sku
subcategory: 4id9W3RDyw02CasOm2C2iy
---

A funcionalidade da plataforma que permite o cadastro ou alteração do preço do SKU é a “Valores de Tabela de SKUs”. Nela é possível cadastrar o preço de cada SKU manualmente pelo admin, em massa via importação de planilha do Excel ou por API. 

O processo manual é mais indicado para quando o lojista deseja alterar o preço de poucos SKUs, por ser mais prático e rápido alterar, devido à pouca quantidade. Os demais processos visam a alteração de muitos SKUs de uma vez de forma que a economizar tempo, uma vez que nesse caso o processo manual demadaria muito trabalho. Sendo assim, siga os passos abaixo para cada um dos processos.

## Cadastro ou alteração manual

![](https://images.contentful.com/alneenqid6w5/62eMKlDZ04As4ey46yiOeK/2d689eb25d9945a532d4447ba770649f/Tabela_de_Valores.gif)

### Cadastrar para um valor novo

1. Acesse o módulo de __Catalog__.
2. Clique em no botão __Cadastro de Produtos__.
3. Depois em “Produtos e SKUs” e em seguida em “Importar/Exportar valores de tabelas de SKUs”.
4. Clique no botão __Novo Valor de Tabela__.
5. Preencha o campo “Sku” com o Id do SKU que deseja cadastrar o preço.
6. Preencha os demais campos (conforme explicações abaixo) e salve.

### Alteração de um cadastro existente

1. Acesse o módulo de __Catalog__;
2. Clique em no botão __Cadastro de Produtos__.
3. Depois em “Produtos e SKUs” e em seguida em “Importar/Exportar valores de tabelas de Skus”.
4. Clique em “Filtrar resultados ou fazer uma busca”.
5. No campo “Sku” digite o Id do SKU que deseja alterar o preço e clique em buscar.
6. Clique no botão alterar.
7. Altere o campo que deseja atualizar e salve.

### Campos disponíveis para cadastro ou alteração manual

- **SKU:** Id do SKU. No caso do cadastro é de preenchimento obrigatório, mas no caso da alteração é um campo somente de leitura.
- **Parceiro (utm_source):** Opção de parâmetro de URL que deverá ser usado no site, para que o preço seja aplicado - não permite caracteres especiais.
- **Campanha (utm_campaign):** Opção de parâmetro de URL que deverá ser usado no site, para que o preço seja aplicado - não permite caracteres especiais.
- **Campanha interna (utmi_cp):** Opção de parâmetro de URL que deverá ser usado no site, para que o preço seja aplicado - não permite caracteres especiais.
- **Valor De:** Preço de lista do SKU que aparecerá no site como “preço de”.
- **Valor:** Preço de venda do SKU que aparecerá no site como “preço por”. Se o "preço de" tiver o mesmo valor que o "preço por", será exibido no site o valor do "preço por". É sobre este valor que as promoções são aplicadas.
- **Data inicial:** Início de vigência do preço. Antes dessa data o SKU não estará disponível para venda.
- **Data final:** Fim de vigência do preço. Depois dessa data o SKU não estará disponível para venda.
- **Política Comercial:** Política que o preço será aplicado, conforme cadastrado em Catalog ->; Marketplace -> Política Comercial.
- **Seller:** Define o seller que é o dono do produto. Normalmente usado em casos de lojas que trabalham como marketplace (vendendo produtos de outras lojas).

_Se clicar no botão “Novo Valor de Tabela” após filtrar um SKU, esse será um novo valor cadastrado na tabela do SKU filtrado. Deve-se atentar para esse tipo de ação para evitar preços duplicados com as mesmo condições (utm, validade, política comercial ou seller), pois impactará negativamente na indexação desse SKU._

## Cadastro ou alteração via importação de planilha do Excel

![](https://images.contentful.com/alneenqid6w5/5Pbm0WFO12QmEwW88OM2iU/453748487c805f0ef7bd20887e454670/Altera__o_de_pre_o_Importa__o.gif)

### Para cadastrar novos preços

1. Acesse o módulo de Catalog;
2. Clique em no botão “Cadastro de Produtos”;
3. Depois em “Produtos e SKUs” e em seguida em “Importar/Exportar valores de tabelas de Skus”;
4. Clique em “Exportar / Importar Valores” e depois em “Exportar”;
5. Clique no botão “Clique aqui”, para exportar a planilha de exemplo. Esse passo garante que estará utilizando uma planilha que o sistema aceitará;
6. Preencha as colunas conforme explicações abaixo;
7. Salve o arquivo no seu computador como .xls (Excel 97-2003 Workbook);
8. Volte ao admin, e clique em importar;
9. Selecione o arquivo salvo;
10. Preencha o e-mail para receber as notificações sobre a importação;
11. Clique em importar. A solicitação será processada internamente pelo sistema, que o avisará pelo e-mail cadastrado quando o processo for finalizado.

### Para alterar preços já cadastrados

1. Acesse o módulo de Catalog;
2. Clique em no botão “Cadastro de Produtos”;
3. Depois em “Produtos e SKUs” e em seguida em “Importar/Exportar valores de tabelas de Skus”;
4. Clique em “Exportar / Importar Valores” e depois em “Exportar”;
5. Preencha o campo “E-mail para notificação”
6. Clique no botão “Exportar para Excel”
7. O sistema processará internamente a solicitação e quando finalizar, enviará a planilha para o e-mail cadastrado;

### Campos da planilha do Excel para importação

![](https://images.contentful.com/alneenqid6w5/1wTiiJMsUcUGMoI6GGWsOw/b31f627d1a8d642532d475fd72e23ff6/Como_cadastrar_preco_SKU_2.jpg)

- **StockKeepingUnitId: **Id do SKU que deseja cadastrar ou alterar o preço;
- **Source: **valor de utm_source;
- **Price: **preço de venda do SKU. No site aparecerá em “preço por”;
- **Id: **Id do preço. Se deixar esse campo em branco, será cadastrado um novo preço. Caso tenha vindo preenchido na exportação, não altere esse campo.
- **StoreId:** Id da política comercial onde o preço será aplicado. Conforme Id do cadastro no módulo Catalog &gt; Marketplace &gt; Política Comercial. Para cadastrar mais de uma, separe por vírgula (Ex.: 1,2,3);
- **Medium (Desconsiderar):** Esse campo não é mais utilizado, não preencher;
- **Campaign:** valor de utm_campaign;
- **InternalCampaign:** valor de utmi_cp;
- **DateFrom:** data de início de vigência do preço. O SKU não estará disponível antes dessa data;
- **DateTo:** data de fim de vigência do preço. O SKU não estará disponível após essa data;
- **ListPrice:** preço de 88lista. Aparecerá no site como “preço de”;
- **RefId (Não alterável):** Id de referência do SKU, conforme cadastro do SKU. Caso o valor tenha vindo na exportação, não altere;
- **Ean13Default (Não alterável):** EAN do SKU, conforme cadastro do SKU. Caso o valor tenha vindo na exportação, não altere;
- **BrandName (Não alterável):** nome da marca do produto, conforme cadastro do SKU. Caso o valor tenha vindo na exportação, não altere;
- **StockKeepingUnitName (Não alterável):** nome do SKU, conforme cadastro do SKU. Caso o valor tenha vindo na exportação, não altere;
- **SellerId:** Id do seller dono do SKU. Normalmente usado em casos de lojas que trabalham como marketplace (vendendo produtos de outras lojas).

_A planilha deve subir com até 200 linhas por vez, pois isso agilizará o processamento e evitará a ocorrência de erro devido a demora do processamento do arquivo._
