---
title: 'Ações para a operação de marketplaces VTEX'
id: 2SdIflvwywiOqCpczKCfev
status: PUBLISHED
createdAt: 2022-01-26T23:13:10.828Z
updatedAt: 2023-04-17T22:08:54.822Z
publishedAt: 2023-04-17T22:08:54.822Z
firstPublishedAt: 2022-01-26T23:23:49.548Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: acoes-para-a-operacao-de-marketplaces-vtex
locale: pt
legacySlug: acoes-para-a-operacao-de-marketplaces-vtex
subcategory: 5tlIjp0ZkAU4EIk4OgyEmm
---

A arquitetura da VTEX permite que as lojas hospedadas na sua plataforma anunciem produtos de outras lojas, sejam elas VTEX ou não. Quando uma loja VTEX passa a vender produtos de outros sellers, ela se torna um marketplace VTEX. Saiba mais sobre as possibilidades desse modelo de negócio em [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).

Após [configurar seu ambiente VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb) para se tornar um marketplace, é preciso realizar as operações de rotina necessárias para a operação de um marketplace. Sugerimos incluir as ferramentas abaixo, desenvolvidas pela VTEX, na rotina do seu time. Para cada uma das ações na sua operação, indicaremos quais funcionalidades da VTEX você utilizará:

- [Realizar o ‘Hunting’ de sellers](#realizar-o-hunting-de-sellers)  
- [Analisar resultados de sellers](#analisar-resultados-de-sellers)  
- [Definir curadoria de anúncios](#definir-curadoria-de-anuncios)  
- [Catalogar anúncios](#catalogar-anuncios)  
- [Criar promoções](#criar-promocoes)  
- [Gerenciar conteúdo no storefront](#gerenciar-storefront)  
- [Gerenciar pedidos](#gerenciar-pedidos)  

## Realizar o ‘Hunting’ de sellers
Ao planejar a sua operação enquanto marketplace VTEX, inclua um período no seu planejamento para identificar e recrutar um número determinado de [sellers](https://help.vtex.com/pt/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv) que cubram a variedade de produtos, disponibilidade de estoque e área de cobertura logística desejadas. Além disso, é importante evoluir e expandir a sua carteira de sellers de forma contínua, para garantir que haja sempre um fluxo saudável de novos sellers que complementem o seu sortimento de produtos e serviços.

Se quiser encontrar novos sellers para venderem em seu marketplace, utilize o __Encontrar sellers__, que facilita a identificação e o contato entre marketplaces e sellers que operam no ecossistema VTEX. Para acessar essa página, em seu Admin VTEX, vá para **Markeplace > Sellers > Encontrar sellers.**

Para acrescentar novos sellers ao seu marketplace pelo Admin VTEX, siga as instruções descritas no artigo [Adicionar Seller](https://help.vtex.com/pt/tutorial/configurando-seller/). Também é possível realizar esse processo por meio de integração de API. Para isso, siga as instruções em [External Seller Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-guide). 

## Analisar resultados de sellers

A página [Performance de Vendas](https://help.vtex.com/pt/tutorial/sales-performance--3DMube0sEsK9vPcRYGas72) no seu Admin VTEX é um painel de controle para o comércio unificado que ajuda as lojas a ampliarem seu negócio e tomarem decisões com mais precisão. O painel facilita o processo de “farming” de sellers, ou seja, permite que marketplaces analisem dados dos pedidos da sua loja e de seus sellers para que monitorem a saúde do seu negócio, entendam motivos de variações no volume de vendas ou na taxa de conversão, e encontrem oportunidades de melhoria nos resultados de sellers específicos. 

Para acessar a página, em seu Admin VTEX, vá para **Dashboards > Performance de Vendas**.  

## Definir curadoria de anúncios 

O [Seller Portal (Beta)](https://help.vtex.com/pt/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK) é uma edição da plataforma VTEX que permite que sellers se conectem e vendam seus produtos em marketplaces. A funcionalidade [Produtos compartilhados](https://help.vtex.com/pt/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu) do Seller Portal permite que marketplaces exportem sua própria arquitetura de catálogo para que sellers possam enviar ofertas para os produtos já presentes no marketplace.

Essa ferramenta é uma opção recomendada para marketplaces que desejam ter mais controle sobre a curadoria de produtos que ofertam. 

<div class="alert alert-info">
Para ativar o Seller Portal para seus sellers, o marketplace deve solicitar essa funcionalidade entrando em contato com o CSM da sua conta na VTEX. 
</div>

## Catalogar anúncios

Um produto de um seller que foi enviado para o marketplace com informações de preço e estoque configuradas se torna um anúncio. Porém, antes de o anúncio estar disponível para venda, o marketplace precisa revisar e aprová-lo em um processo chamado catalogação de anúncios. A catalogação permite criar novos produtos e associar anúncios a SKUs ou produtos já existentes para disponibilizá-los para venda.

O processo de catalogação é realizado na página [SKUs Recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus/), no menu **MARKETPLACE > Sellers** do seu Admin VTEX, ou através de chamadas de API de [Match Received SKUs](https://developers.vtex.com/vtex-rest-api/reference/match). 

<div class="alert alert-info">
Antes de aprovar um anúncio, é importante garantir que as informações de produtos enviadas pelo seller correspondam à estratégia do seu negócio. Ao catalogar anúncios, considere a qualidade das informações enviadas pelo seller, como preço, descrição do produto e imagem.
</div>

O [VTEX Matcher](https://help.vtex.com/pt/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) é a ferramenta usada por marketplaces para avaliar anúncios enviados por sellers e acelerar o processo de catalogação. É possível configurar o VTEX Matcher para que opere sobre regras diferentes da configuração _default_, por meio da [API de Aprovação automática](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).

## Criar promoções

Marketplaces VTEX podem criar uma série de regras para promoções e determinar, de acordo com o contexto da compra, se e como um desconto será aplicado. É possível criar promoções de frete grátis, preço nominal e preço percentual. As promoções podem ser criadas para produtos, coleções ou categorias. Saiba mais em [Configurar promoção para marketplaces](https://help.vtex.com/pt/tutorial/configurar-promocao-para-marketplace--tutorials_406).

## Gerenciar *storefront*

O gerenciamento do conteúdo que aparece no seu *storefront* permite manter uma linha editorial coesa para o seu marketplace. Sugerimos definir diretrizes claras sobre que tipo de conteúdo é aprovado e o que não faz parte da estratégia de conteúdo do seu marketplace. 

Você pode configurar o [CMS](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z) do seu marketplace de acordo com o conteúdo que quer promover, para que a experiência de compra no seu marketplace reflita a identidade da  sua marca. Para lojas hospedadas no VTEX IO, é possível [customizar handles CSS](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization) para alterar o visual do seu marketplace.

## Gerenciar pedidos
O gerenciamento de pedidos do marketplace está diretamente ligado à satisfação dos consumidores com o seu marketplace. Um fator-chave para uma avaliação positiva do seu marketplace é a definição e o acompanhamento do SLA (_Service Level Agreement_, em inglês) entre sellers e marketplaces. O SLA é o acordo de serviço firmado entre o seller e o marketplace, e inclui detalhes sobre políticas de entrega, atendimento ao cliente e trocas e devoluções, por exemplo. 

Na plataforma VTEX, a seção **Gerenciamento de Pedidos** permite que sellers e marketplaces acompanhem o [Fluxo de pedidos](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4811ExCe3WrEiRMV3sy9n8). Durante a consulta de pedidos, é possível diferenciar [pedidos do marketplace e de seus sellers](https://help.vtex.com/pt/tutorial/o-que-sao-pedidos-com-origem-marketplace-e-origem-fulfillment--6eVYrmUAwMOeKICU2KuG06). 

Para [marketplaces que processam pagamentos](https://help.vtex.com/pt/tutorial/pagamentos-em-marketplaces-vtex--2kYOfWCZYweJkYl18bw9yD), é necessário acompanhar o [Fluxo da transação no Pagamentos](https://help.vtex.com/pt/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ). Já os sellers são responsáveis por realizar o [fulfillment](https://help.vtex.com/pt/tutorial/o-que-sao-pedidos-com-origem-marketplace-e-origem-fulfillment--6eVYrmUAwMOeKICU2KuG06#fulfillment) do pedido, portanto, devem [inserir a nota fiscal](https://help.vtex.com/pt/tutorial/como-inserir-a-nota-fiscal) para faturá-lo. 

