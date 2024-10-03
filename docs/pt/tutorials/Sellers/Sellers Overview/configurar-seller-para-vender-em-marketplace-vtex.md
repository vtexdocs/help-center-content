---
title: 'Configurar seller para vender em marketplace VTEX'
id: 6g045OkRSjNpqhkExbQRlP
status: PUBLISHED
createdAt: 2022-05-11T16:49:11.747Z
updatedAt: 2023-04-17T21:46:38.715Z
publishedAt: 2023-04-17T21:46:38.715Z
firstPublishedAt: 2022-05-11T18:35:14.080Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: configuring-a-seller-on-vtex-marketplace
locale: pt
legacySlug: configurar-seller-para-vender-em-marketplace-vtex
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

A arquitetura de uma loja VTEX permite que ela atue tanto como marketplace quanto como seller. O marketplace é o ambiente onde o produto é vendido, e o seller é o dono do produto e o responsável pelo envio do pedido.

Este artigo orienta como configurar sua loja para se tornar seller VTEX e começar a vender em um marketplace VTEX. Para isso, é necessário realizar as seguintes ações:

- [Definir política comercial](#definir-politica-comercial)
- [Criar ID do afiliado](#criar-id-do-afiliado)
- [Reindexar base](#reindexar-base)

Para saber quais dados precisam ser trocados entre sellers e marketplaces, veja o artigo [Informações compartilhadas](https://help.vtex.com/pt/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3) entre marketplace e seller na VTEX. Caso sua loja deseje operar como marketplace, confira o artigo [Configurar marketplace VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb).

>ℹ️ Para começar a vender seus produtos em marketplaces, utilize o [Marketplaces e integrações](https://help.vtex.com/pt/tutorial/encontre-marketplaces-e-sellers-no-ecossistema-vtex--2bzC7tXlVgLEEjxo4ixcAM), a funcionalidade que facilita a identificação e o contato entre marketplaces e sellers do ecossistema VTEX.

## Definir política comercial

Na VTEX, a [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) agrupa configurações de catálogo, preços, promoções, logística, segmentação de clientes e pagamentos em um canal de venda. O seller pode integrar com o marketplace utilizando a política comercial padrão da sua loja ou definir configurações específicas para a integração, configurando uma [política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace/).

>ℹ️ Uma mesma política comercial pode ser usada para integrar com múltiplos marketplaces. No entanto, a [contratação de política comercial adicional](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X) para integrar com [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), conector certificado (parceiro) ou outras lojas VTEX é isenta de taxas.

Não é necessário criar uma política comercial específica para um marketplace apenas para configurar promoções, pois é possível segmentar promoções pelo [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0). Saiba mais em [Configurar promoção para marketplace](https://help.vtex.com/pt/tutorial/configurar-promocao-para-marketplace--tutorials_406).

A gestão do sortimento de produtos enviados para o marketplace deve ser feita através da política comercial. Não recomendamos a gestão por [coleções](https://help.vtex.com/pt/tutorial/criando-colecao-de-produtos--tutorials_244), que acrescenta complexidade e dificulta a operação.

## Criar ID do afiliado

Na VTEX, o [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o código que o seller VTEX cria para identificar o marketplace no qual vai vender seus produtos, sendo que cada marketplace deve corresponder a um afiliado único. É por meio do afiliado que o marketplace será notificado sobre pedidos, mudanças nas informações de um SKU e alterações de preço e estoque, por exemplo.

>ℹ️ A integração com [conectores nativos](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex) cria o código do afiliado de forma automática. No entanto, para um seller VTEX integrar com um marketplace VTEX ou externo, o seller precisa criar o ID do afiliado de forma manual.

O seller deve seguir os passos do artigo [Configurar afiliado](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187) e, uma vez que tenha criado o código identificador, deve informá-lo ao marketplace. A partir disso, o marketplace VTEX vai [adicionar o seller](https://help.vtex.com/pt/tutorial/configuring-the-seller--tutorials_392) e associá-lo a uma política comercial.

## Reindexar base

Após seller e marketplace estarem integrados, o envio de produtos para o marketplace não é automático, é necessário ao seller [reindexar a base](https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao). Esse processo prepara os dados dos SKUs e produtos e envia para o marketplace informações gerais sobre catálogo, preço e estoque. 

>ℹ️ Somente o [usuário Titular (owner)](https://help.vtex.com/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA) tem permissão para reindexar a base de uma loja VTEX. Durante o período de reindexação, que é variável, os produtos entram numa fila para atualização de dados, mas seguem disponíveis para venda no site da loja.

Para reindexar a base, copie o endereço abaixo no seu navegador, substituindo `{nomedaloja}` pelo nome da sua loja:

`{nomedaloja}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`

Ao acessar o endereço, clique no botão `Reindexar Base`. O processo pode ser acompanhado pelo Admin VTEX, em **Catálogo > Relatórios**.

### Checar indexação

É possível conferir se um SKU específico foi corretamente indexado à política comercial da integração. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**.
2. Clique na <i class="fas fa-angle-down"></i> seta para baixo, ao lado do botão **ALTERAR**.
3. Selecione a opção `Indexed Info`.
4. Verifique se nas informações do SKU aparece o número da política comercial usada na integração com o marketplace.

## Ações do marketplace

Depois que o seller envia seus produtos, o marketplace precisa [mapear categorias, marcas e especificações](https://help.vtex.com/pt/tutorial/mapeando-categorias-e-marcas-para-marketplace--tutorials_1521) dos produtos do seller, de forma a fazer uma correspondência entre a sua própria estrutura de catálogo e o catálogo do seller.

Após o mapeamento, o marketplace precisa [catalogar SKUs](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus/) do seller. Esta é a última etapa para que os produtos do seller sejam disponibilizados para os consumidores no marketplace.

## Saiba mais

- [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
- [Escolher entre conta padrão, conta franquia ou Seller Portal](https://help.vtex.com/pt/tutorial/escolher-entre-conta-padrao-conta-franquia-ou-seller-portal--4S90HzzhMyZESsHqrnUs78)
- [Informações compartilhadas entre marketplace e seller na VTEX](https://help.vtex.com/pt/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3)
- [Configurar marketplace VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)
