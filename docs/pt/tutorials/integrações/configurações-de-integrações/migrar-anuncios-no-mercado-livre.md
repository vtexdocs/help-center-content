---
title: 'Migrar anúncios no Mercado Livre'
id: 2TuhYgqZr2CAAi2oQaWQcO
status: PUBLISHED
createdAt: 2018-10-24T12:23:06.634Z
updatedAt: 2023-03-28T22:25:13.780Z
publishedAt: 2023-03-28T22:25:13.780Z
firstPublishedAt: 2018-10-24T13:49:54.100Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: migrating-ads-in-mercado-livre
legacySlug: migrar-anuncios-no-mercado-livre
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Quando uma loja já vende no Mercado Livre mesmo antes de realizar a integração através da VTEX é necessário migrar os anúncios já existentes para que ele não perca sua relevância no marketplace. Este caso se aplica muito às lojas que vieram de outras plataformas de e-commerce ou que já usavam a VTEX, mas usavam outra integração.

A migração de anúncios precisa ser feita manualmente, pois é um procedimento muito delicado. Através de um de/para entre seus anúncios no Mercado Livre e os seus SKUs na VTEX, utilizaremos uma planilha para fazer a migração.

Para realizar a migração dos anúncios, você deverá seguir os passos abaixo:

1. [Configurar a integração com o Mercado Livre](#1-configurar-a-integracao-com-o-mercado-livre)
2. [Fazer download da planilha de migração](#2-fazer-download-da-planilha-de-migracao)
3. [Preencher a planilha de migração dos anúncios](#3-preencher-a-planilha-de-migracao-dos-anuncios)
4. [Abrir chamado no Suporte VTEX](#4-abrir-chamado-no-suporte-vtex)
5. [Aguardar confirmação da migração dos anúncios](#5-aguardar-confirmacao-da-migracao-dos-anuncios)

## 1. Configurar a integração com o Mercado Livre

O primeiro passo para migrar seus anúncios do Mercado Livre é configurar a integração com o marketplace. Para isso, siga as orientações do artigo [Integração com o Mercado Livre](/pt/tracks/configurar-integracao-do-mercado-livre).

Durante a etapa [Cadastro do conector Mercado Livre](/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq), você deverá preencher o campo `ID da Política comercial` com o número 0. Dessa forma, os anúncios que serão migrados da planilha não serão duplicados pela plataforma do Mercado Livre.

> ❗ Caso utilize o ID de uma política comercial existente, a integração criará novos anúncios no Mercado Livre e seu catálogo será duplicado. A única forma de resolver esse problema será desativando manualmente os anúncios criados em duplicidade no painel do Mercado Livre.

## 2. Fazer download da planilha de migração

Nessa etapa você precisará fazer a equivalência entre seus anúncios no Mercado Livre e os SKUs da sua loja. O envio dessas informações é feito por meio da planilha de migração.

Primeiro, faça download da [Planilha de migração](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/pt/tutorials/integrações/configurações-de-integrações/Planilha_de_Migrac__a__o_de_Anu__ncios_-_Mercado_Livre_BR.xlsx) e utilize o arquivo como modelo para preenchimento. Esta é a planilha que será preenchida e enviada para o Mercado Livre.

O produto cadastrado na VTEX só poderá ser mapeado com um anúncio no Mercado Livre. No caso de [anúncios dos tipos Clássico e Premium](/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/2MR2USqcvDGaoAkGNdCfGi), por serem configurações separadas, o mesmo produto pode estar anunciado em ambos tipos de anúncios.

> ⚠️ A integração entre a VTEX e o Mercado Livre permite associar um SKU cadastrado na VTEX a um único anúncio no Mercado Livre por vez. Por isso, é necessário separar os tipos de anúncios do tipo Clássico e os do tipo Premium quando for preencher a planilha de migração.

## 3. Preencher a planilha de migração dos anúncios

A planilha possui as seguintes colunas:

| **Colunas** | **Descrição** | **Preenchimento** |
| ---------- | ---------- | ---------- |
| **ID do Anúncio** | Identificação do anúncio na plataforma do Mercado Livre | Preencha a coluna com o ID do anúncio do Mercado Livre. Você poderá encontrar o ID na URL do anúncio no Mercado Livre, com ou sem hífen. Para clientes no Brasil, o código terá as iniciais MLB e uma sequência numérica em seguida, no seguinte formato: MLBXXXXXXXX (sem hífen). Por exemplo, a URL do anúncio de um produto no Mercado Livre é [https://produto.mercadolivre.com.br/MLB-1915806214](https://produto.mercadolivre.com.br/MLB-1915806214-tenis-all-estrela-white-star-cano-alto-botinha-30-off-_JM). Nesse caso, a ID do anúncio a ser utilizada nesta coluna da planilha é `MLB1915806214`. Clientes LATAM possuirão iniciais diferentes. Em caso de dúvida, acesse o admin da sua loja no Mercado Livre |
| **ID do SKU** | Identificação do SKU na plataforma VTEX | Preencha a coluna com o ID do SKU anunciado no Mercado Livre. Para descobrir o **ID do SKU**, acesse no Admin VTEX *PRODUTOS > Catálogo > Produtos e SKUS*. Você visualizará uma sequência numérica correspondente ao ID do SKU na coluna **SKU**, entre parênteses |
| **ID da Variação** | Identificação das variações do SKU na plataforma do Mercado Livre | Preencha a coluna com a variação do SKU no Mercado Livre. Se um produto tem uma especificação de SKU como Cor, Tamanho ou Voltagem na VTEX, é necessário [criar uma variação do produto na plataforma do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/variacoes#Adicionar-novas-varia%C3%A7%C3%B5es). Esse ID pode ser encontrado utilizando a seguinte rota da API do Mercado Livre, substituindo o `{ID_anúncio}` pelo ID do anúncio do Mercado Livre. Na resposta desta chamada, o ID da Variação corresponderá ao valor no parâmetro `variations`. `https://api.mercadolibre.com/items/{ID_anúncio}?include_attributes=all` |

### Exemplo de preenchimento

Segue um exemplo de como uma planilha pode ser montada.

| **ID do Anúncio** | **ID do SKU**  | **ID da Variação** |
| ----------    | ---------- | ----------     |
| MLB9999999999 | 123        | 29999999930    |
| MLB9999999999 | 124        | 29999999931    |
| MLB9999999999 | 125        | 29999999932    |
| MLB6666666666 | 333        |                |

## 4. Abrir chamado no Suporte VTEX

Para migrar os anúncios que foram mapeados na etapa anterior, será necessário abrir um chamado no [Suporte VTEX](/pt/support) com o assunto **“Mercado Livre - Migração de anúncios”** e anexar o arquivo da [planilha de migração preenchida](#2-fazer-download-da-planilha-de-migracao).

Recomendamos que a migração seja feita para todos os produtos de uma vez. Caso o anúncio de algum produto não esteja mapeado, a integração não irá fazer a migração dele. 

Apenas os anúncios mapeados na planilha de migração serão considerados, ou seja, mesmo que o anúncio exista no Mercado Livre, se ele não for mapeado na planilha, a integração não conseguirá atualizar as informações de produto, preço, estoque e nem integrar os pedidos feitos no Mercado Livre.

Se houver mais de um anúncio de um mesmo produto no Mercado Livre, cada anúncio com uma variação e se desejar juntá-los, sugerimos fortemente manter os anúncios separados. Caso deseje reuni-los mesmo assim, recomendamos entrar em contato com o time de CX da VTEX pelo [Suporte VTEX](/pt/support).

## 5. Aguardar a confirmação da migração dos anúncios

Depois de enviar a planilha de migração para o Suporte VTEX, aguarde pelo contato da equipe de suporte com a confirmação dos anúncios que foram migrados. 

Caso alguns anúncios não possam ser migrados por erros de preenchimento da planilha, você precisará revisar a planilha de migração e reenviá-la ao Suporte VTEX.
