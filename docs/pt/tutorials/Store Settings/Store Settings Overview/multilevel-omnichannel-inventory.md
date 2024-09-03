---
title: 'Multilevel Omnichannel Inventory'
id: 7M1xyCZWUyCB7PcjNtOyw4
status: PUBLISHED
createdAt: 2020-11-30T19:44:58.255Z
updatedAt: 2024-07-24T14:21:41.092Z
publishedAt: 2024-07-24T14:21:41.092Z
firstPublishedAt: 2020-12-08T19:12:43.325Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: multilevel-omnichannel-inventory
locale: pt
legacySlug: marketplace-recursivo-v2
subcategoryId: 5RAUzLD6X9Wa1maenj1eGA
---

__Multilevel Omnichannel Inventory__ é a configuração na VTEX que permite uma conta principal disponibilizar o estoque de [sellers white label](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa) e [contas franquia](https://help.vtex.com/pt/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa) para a venda em marketplaces. O artigo a seguir inclui as seguintes informações sobre a funcionalidade:

* [Arquitetura de contas](#arquitetura-de-contas)
* [Benefícios](#beneficios)
* [Restrições](#restricoes)
* [Como configurar](#como-configurar)

>ℹ️ Para saber mais sobre a arquitetura dos pedidos do tipo Multilevel Omnichannel Inventory, e como fazer a configuração via API REST, confira nosso [artigo do Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory).

## Arquitetura de contas

O [marketplace](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) é o ambiente onde o produto é vendido, também chamado de vitrine, e o [seller](https://help.vtex.com/pt/tutorial/marketplace-strategies-at-vtex--tutorials_402#sendo-seller-vtex) é o dono do inventário e o responsável pelo envio do produto. 

Quando uma loja vende seus produtos em um marketplace, temos uma relação entre seller e marketplace de dois níveis. Porém a arquitetura da VTEX permite que lojas atuem tanto como marketplaces quanto como sellers, expandindo o número de combinações possíveis. 

É possível que um seller de uma conta principal atue como marketplace de [sellers white label](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa). Esse é o caso de redes de lojas configuradas como [contas franquia](https://help.vtex.com/pt/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa?&utm_source=help) e lojas físicas, sendo por definição sellers em outra loja VTEX. 

Também é possível que esse seller principal venda seus produtos em um marketplace.

Quando isso ocorre, temos uma arquitetura de três níveis entre marketplace, seller principal,  e seus sellers white label, como ilustra a imagem abaixo.

![Arquitetura Multilevel omichannel inventory](https://images.ctfassets.net/alneenqid6w5/7k6hYv3kWxBVZrPFkUbsCK/b70689c18e55ad472f71176a283b9c17/Screen_Shot_2022-09-30_at_18.57.26.png)

Por padrão, os produtos das lojas físicas, ou sellers white label (nível 3, na imagem), não ficam disponíveis para serem vendidos pelo marketplace do nível 1. Mas é possível torná-los disponíveis com a funcionalidade **Multilevel Omnichannel Inventory.**

Desta maneira, é possível que um marketplace venda os produtos dos seus sellers diretos e também das lojas físicas e sellers white label vinculados àqueles sellers. 

Isso significa que, quando o seller com a conta principal configurar uma integração com um marketplace, as contas franquia estarão automaticamente integradas a ele também, não sendo preciso gerenciar cada franquia individualmente para configurar sua integração ao marketplace.

>ℹ️ Atualmente, só é permitido um nível de recursividade. Ou seja, o marketplace pode vender produtos dos sellers white label integrados a um seller direto.

## Benefícios

Esta funcionalidade traz vantagens competitivas para o marketplace, como:

* Maior diversidade de produtos oferecidos ao cliente final.
* Menos problemas com estoque insuficiente, ao incluir mais lojas fornecendo produtos.
* A opção de se ofertar todo o estoque de uma operação omnichannel para outros marketplaces, aumentando a oferta de pontos de retirada, por exemplo.
* A possibilidade de se trabalhar com novos modelos de negócio e conectar diferentes marcas com relações colaborativas entre marketplace e seller.
* Acesso a novos mercados e nichos de consumidores.
* Orquestrar pedidos de múltiplos canais com visibilidade sobre toda a cadeia.

Para saber mais detalhes sobre a arquitetura de pedidos aplicada em Multilevel Omnichannel Inventory, confira nosso [artigo para pessoas desenvolvedoras](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory).

## Restrições

Algumas das funcionalidades que fazem parte do modelo tradicional de marketplace não estão disponíveis para um cenário _Multilevel Omnichannel Inventory_. É importante conhecer essas restrições antes de habilitar a configuração.

>⚠️ Note que, no Brasil, o Banco Central (BACEN) regulamenta a atuação de marketplaces varejistas como concentradores e repassadores de dinheiro. Dado essa restrição, recomendamos a implementação do Multilevel Omnichannel Marketplace em lojas que se adequam à circular 3.815 do BACEN. Saiba mais em [ BACEN e a regulamentação para marketplaces no Brasil - VTEX](https://vtex.com/pt-br/blog/estrategia/bacen-e-a-regulamentacao-para-marketplaces-no-brasil/).

### Disponibilidade

Essa funcionalidade _Multilevel Omnichannel Inventory_ está disponível apenas para [marketplaces VTEX](https://help.vtex.com/pt/tutorial/marketplace-strategies-at-vtex--tutorials_402#ser-um-marketplace-vtex). Para usar a funcionalidade, o marketplace (nível 1) deve realizar a configuração para cada seller direto (nível 2) que desejar. Você pode fazer isso ao cadastrar novos sellers ou editando a configuração de sellers existentes na sua loja. Saiba mais em [Como configurar](#como-configurar) e em nosso [artigo no Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory).

### Distribuição de recebíveis

Não é possível distribuir recebíveis em toda a cadeia (marketplace, seller direto e sellers white label). Os pedidos de Multilevel Omnichannel Inventory estão restritos a ter o pagamento do pedido feito no marketplace. A conciliação e repasse de valores para sellers nível 3 deve ser feito por fora da VTEX, pois não há suporte nativo para essa etapa.

É possível utilizar a solução de [split de pagamentos](https://help.vtex.com/pt/tracks/split-de-pagamentos--1ouDg8q56Kuz1AgtJUY9nv/4EOhp8cdVXaHl68KykPG6) apenas para dividir recebíveis entre os níveis _marketplace_ e _seller direto _(nível 2). Nesse caso o recomendado é utilizar [split de recebíveis](https://help.vtex.com/pt/tutorial/split-payment#split-de-recebiveis). 

Nesses casos, o seller direto se torna um recebedor dos itens de seus sellers white label e dos seus próprios itens, retirando as comissões configuradas na relação com o marketplace.

A solução pode ser suficiente em casos em que o seller direto faz parte do mesmo grupo econômico que seus sellers white label, possibilitando concentrar todos os recebíveis em uma única conta bancária.

É importante ressaltar que quando o _seller direto_ não é responsável pelos recebíveis dos sellers white label, a solução de split de recebíveis será limitada por não permitir a distribuição até os sellers white label.

### Meios de pagamento

Uma vez que a configuração é feita, somente os meios de pagamento do marketplace aparecerão como opção no checkout. Os meios de pagamento dos sellers diretos (nível 2) e sellers white label (nível 3) não são importados na arquitetura de contas. Portanto, o checkout só mostra os meios de pagamento do marketplace, mesmo que o afiliado do seller direto esteja configurado para usar os meios de pagamento dele.

>⚠️ O [afiliado](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187) da conta franquia sempre deve estar com a configuração de usar os meios de pagamento desativada.

### Alteração de seller

Caso um seller white Label (nível 3) receba um pedido e o rejeite, este pedido não será atribuído a outro seller white label. Consequentemente um novo pedido deverá ser criado pelo comprador, no storefront do marketplace. Saiba mais em [Change Seller](https://help.vtex.com/pt/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO#limitacoes).

### Alteração de pedidos finalizados pela loja

Uma loja VTEX não consegue alterar pedidos finalizados em um marketplace VTEX num cenário de _Multilevel Omnichannel Inventory._ Será necessário cancelar o pedido e criar um novo. Saiba mais em [Change chain orders in external marketplaces](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).

### Alteração de pedidos finalizados pelo cliente

O cliente não consegue alterar pedidos na seção de _Meus Pedidos,_ do storefront do marketplace. Qualquer alteração nos pedidos deverá ser realizada por meio do Serviço de Atendimento ao Cliente ou via API.

### Manual Price

A feature de Manual Price não se aplica ao Multilevel Omnichannel Inventory. Não é possível, portanto,  alterar preços manualmente no carrinho. É necessário atualizar o preço via:  

- [Integração com o ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide)  
- [Pricing API REST](https://developers.vtex.com/vtex-rest-api/reference/createupdatepriceorfixedprice)  
- [Página de preços no Admin VTEX](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu)  

### Informação de usuário

Quando uma compra é realizada por um novo usuário, seus dados não se registram no Profile System do seller direto, que é a loja que efetuou a venda (nível 2 no diagrama acima). Ou seja, o seller não tem visibilidade deste usuário. Os dados do perfil do usuário só serão salvos no Marketplace. É ele quem deve efetuar toda a comunicação com o usuário. Saiba mais em [Informações compartilhadas entre marketplace e seller na VTEX](https://help.vtex.com/pt/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3).

### Regionalização

Um marketplace não pode configurar exibição de preços e disponibilidade de produtos de sellers white label (nível 3) com a [funcionalidade de Region.](https://help.vtex.com/pt/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc#)

### UTMs, cupons e gift cards

A aplicação de [cupons](https://help.vtex.com/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL), [gift cards (vale-compras)](https://help.vtex.com/pt/tutorial/gift-card--tutorials_995) e benefícios vinculados a [UTMs](https://help.vtex.com/pt/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) estão restritos ao marketplace nível 1. Aqueles configurados no seller direto (nível 2) e contas franquia ou seller white label (nível 3) não serão aplicados.

### Pedidos integrados assincronamente com divergência de valores

A loja não consegue processar pedidos que tenham sido integrados assincronamente com divergência de valores para o  Multilevel Omnichannel Inventory. A funcionalidade [Autorização de pedidos](https://help.vtex.com/pt/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn#) não suporta as [regras de divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW#) para este cenário.

### Price Table

Não é possível criar tabelas de preço por meio da funcionalidade [Price Table](https://help.vtex.com/pt/tutorial/criar-tabelas-de-precos--58YmY2Iwggyw4WeSCGg24S). Os preços devem ser cadastrados via integração com o ERP ou por meio de planilhas.

## Como configurar

A configuração da funcionalidade **Multilevel Omnichannel Inventory** deve ser feita pelo marketplace em seu Admin VTEX ou via [API Rest](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory). Essa configuração pode ser feita tanto em sellers já integrados, quanto em sellers adicionados pela primeira vez. 

>ℹ️ Note que a configuração deve ser feita para cada seller direto (nível 2) em que se deseja aplicar a funcionalidade, mas não em cada seller white label ou conta franquia (nível 3).

### Sellers já integrados

Para configurá-la em sellers que já foram integrados anteriormente, o marketplace deve seguir os passos abaixo:  

1. Na seção Marketplace de seu Admin VTEX, acesse a aba **Gerenciamento.**
2. Na linha correspondente ao seller cujos sellers white label você deseja acessar, clique em <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Clique em  **Detalhes do seller.**
4. Preencha o campo **Fulfillment EndPoint** seguindo o exemplo:  https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{tradePolicyId}}
5. Substitua os campos que estão entre chaves pelos valores descritos abaixo, removendo as chaves:  
    - **sellerAccount**: [account name](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) do seller na VTEX.   
    - **affiliateId**: código de três dígitos correspondente ao [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) criado pelo seller. O seller deve informar esse valor ao marketplace.   
    - **tradePolicyId**: ID da [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) criada pelo seller em seu próprio ambiente VTEX, para vender em seu marketplace. O seller deve informar esse valor ao marketplace.  
  6. Clique em **Salvar.**   

### Sellers integrados pela primeira vez

Se o marketplace desejar adicionar um seller novo com _Multilevel Omnichannel Inventory_ configurado desde o início, siga as instruções em [Adicionar seller](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392), e preencha o campo `Fulfillment Endpoint` seguindo o passo 4 e 5 do tutorial em [Sellers já integrados](#sellers-ja-integrados).

### Exemplo

Digamos que o seu marketplace já esteja integrado ao seller "_Store ABC"_ e deseje vender os produtos de sellers white labels integrados a esse seller.

Atualmente, o valor do campo _Fulfillment EndPoint_ do seller tem o seguinte formato e pode ser identificado acessando **Marketplace > Sellers > Gerenciamento de Sellers**:

`https://storeabc.vtexcommercestable.com.br/api/fulfillment?affiliateId=mkp&sc=2`

Para habilitar a funcionalidade Multilevel Omnichannel Inventory, o novo valor do campo deve conter o endpoint de **checkout,** em vez do endpoint de fulfillment:

`https://storeabc.vtexcommercestable.com.br/api/checkout?affiliateid=mkp&sc=2`

Note que os valores inseridos nos campos `sellerAccount`, `affiliateId` e `tradePolicyId` que já foram preenchidos no endpoint de fulfillment permanecem os mesmos no endpoint de checkout. O que muda é o trecho `/checkout`. 

