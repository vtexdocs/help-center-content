---
title: 'Enviar produtos para o marketplace'
id: tutorials_388
status: PUBLISHED
createdAt: 2017-04-27T22:07:33.486Z
updatedAt: 2020-01-07T22:09:30.400Z
publishedAt: 2020-01-07T22:09:30.400Z
firstPublishedAt: 2017-04-27T23:03:22.814Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: sending-products-to-the-marketplace
legacySlug: entendendo-a-catalogacao-de-produtos-para-o-marketplace
locale: pt
subcategoryId: 4HBbKdnwneGew2qGGykSM8
---

Ao se integrar com um marketplace, é preciso definir quais produtos serão enviados para a venda nesta outra loja. [É possível enviar tanto todos os produtos quanto um catálogo personalizado](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/). Todas essas configurações são possíveis através da política comercial, que será abordada abaixo..

## Definição do Sortimento de Produtos

Uma possibilidade é trabalhar todo o catálogo de produtos junto ao marketplace. Para isso, basta associar o ID da política comercial da loja principal, que será sempre a de **ID 1**, [quando solicitado nas configurações](/pt/tutorial/integrando-com-marketplace/).

![ExemploPoliticaComercial](//images.contentful.com/alneenqid6w5/37CzxbrZ9KciYm4G2gK0MK/54a58d8fa3a53dcf310caa2769e53174/ExemploPoliticaComercial.png)

Esta política comercial não demanda uma coleção de produtos configurada, pois o sistema já entende que ela se refere a todos os produtos.

Outra possibilidade é trabalhar com um sortimento específico por alguma política comercial diferenciada. Neste caso, será preciso criar e definir uma nova coleção de produtos e associá-la a uma nova [política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/).

1. Clique em **Cadastro de Produtos**.
2. Clique em **Produtos e SKUs**.
3. Selecione a opção **Cadastro de Produtos e SKUs**.
4. Clique em **Alterar** no produto que desejar direcionar para a política comercial.
5. Marque o checkbox das políticas comerciais a qual este produto deverá pertencer.
6. Clique em **Salvar**.

![](//images.contentful.com/alneenqid6w5/2Fp2Y3qFF6SCwQaQI2iEiC/fae0654d1685f1f625794180044ae6a6/loja-cadastro-produto.gif)
_Caso existam produtos que não têm nenhum valor marcado no campo **loja** no cadastro de produtos ou no cadastro de preços, esses produtos serão enviados para todas as políticas comerciais configuradas sem coleção._

## Indexação do Produto

Após feitas as configurações de integração ao respectivo marketplace, os produtos não serão automaticamente indexados para atender apenas este novo canal disponível.

Isso porque a indexação é realizada quando há alterações no cadastro do produto/SKU, e/ou de preço/estoque.

O ato de criar uma coleção já seria o suficiente para a indexação dos produtos escolhidos para a exportação, pois quando você salva uma coleção ela indexa todos os produtos que estão associados a ela.

Ou seja, finalizadas as configurações, vale salvar uma vez mais a respectiva coleção da política comercial do marketplace para [garantir a replicação dos novos produtos para o parceiro](/pt/tutorial/entendendo-o-funcionamento-da-indexacao).

Para conferir se o produto foi realmente indexado na política comercial do marketplace, realize os seguintes passos:

1. Acesse o catálogo.
2. Clique em __Produtos e SKUs__.
3. Clique em __Filtrar resultados ou fazer uma busca__.
4. Insira o ID do SKU ou o Nome do Produto e clique em __Buscar__.
5. No botão azul do lado direito, clique na seta para baixo e então clique em __Indexed Info__.
6. Busque por __Active sales channels__ e verifique se estão sendo exibidos os números das políticas comerciais para os marketplaces.

Após a indexação é preciso que os produtos sejam catalogados no markerplace. O tempo para essa ação ser concluída depende do processo interno do marketplace.

Se o marketplace for uma loja VTEX, basta fazer o [mapeamento de marcas e categorias](/pt/tutorial/mapeando-categorias-e-marcas-para-marketplace/) e a [aprovação de SKUs](/pt/tutorial/sugerindo-e-aprovando-skus/).

O acompanhamento de toda essa comunicação será registrada no VTEX Bridge.
