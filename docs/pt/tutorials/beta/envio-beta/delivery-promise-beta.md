---
title: 'Delivery Promise (Beta)'
id: p9EJH9GgxL0JceA6dBswd
status: PUBLISHED
createdAt: 2024-08-22T15:58:58.240Z
updatedAt: 2025-11-04T20:48:04.877Z
publishedAt: 2025-11-04T20:48:04.877Z
firstPublishedAt: 2024-08-22T18:57:59.895Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: delivery-promise-beta
legacySlug: delivery-promise-beta
locale: pt
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com [nosso Suporte](https://help.vtex.com/pt/support).

**Delivery Promise (Beta)** é a nova solução da VTEX para que o comprador, durante a experiência de compra na sua loja, visualize somente os produtos que pode adquirir, considerando tanto a disponibilidade dos produtos em estoque quanto as formas de envio válidas para o endereço de entrega.

Com a **Delivery Promise (Beta)**, sua loja é capaz de fazer uma “promessa de entrega” ao comprador para todos os produtos visualizados e permite filtrar os produtos exibidos.

![delivery-promise-beta_1][https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/delivery-promise-beta_1.png]

## Funcionalidades disponíveis

Quando o comprador fornece seu endereço, uma seleção inicial é exibida somente com os produtos que podem ser entregues nessa localidade ou retirados em pontos de retirada elegíveis em um [raio configurado](https://help.vtex.com/pt/docs/tutorials/cadastro-de-pontos-de-retirada#campos-de-cadastro) ou [até o limite padrão de 50 km de distância da localidade](https://help.vtex.com/pt/tutorial/pontos-de-retirada#como-funcionam-pontos-de-retirada).

Além de poder comprar todos os produtos visualizados, o comprador pode filtrar os produtos na vitrine para visualizar somente os resultados que atendam a determinados critérios. Isso permite ao comprador uma experiência personalizada de navegação de acordo com os próprios objetivos:

* Produtos disponíveis para o CEP desejado.  
* Forma de envio mais rápida para receber o pedido.  
* [Ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada) de sua escolha para retirar o pedido.

A experiência de [filtros](#filtros) por CEP, método de envio, prazo, ponto de retirada, e de outros componentes, se aplica a produtos de sellers VTEX, do [Seller Portal](https://help.vtex.com/pt/docs/tutorials/seller-portal-primeiros-passos-para-o-marketplace) e externos.

>⚠️ Sellers externos precisam configurar a [Delivery Promise Notification API](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api#put-/delivery-promises/external-sellers/-sellerId-/products) para notificar o Delivery Promise da disponibilidade de produtos.

### Filtros

Nesta etapa, a **Delivery Promise (Beta)** permite que os compradores da sua loja filtrem os produtos exibidos na navegação usando os seguintes filtros:

* **Entregar em:** produtos disponíveis para entrega no endereço fornecido.  
* **Retirada:** produtos disponíveis para retirada em pontos de retirada num [raio configurado](https://help.vtex.com/pt/docs/tutorials/cadastro-de-pontos-de-retirada#campos-de-cadastro) ou até a distância padrão de [50 km](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R?&utm_source=autocomplete#como-funcionam-pontos-de-retirada) do endereço fornecido.  
* **Retirada em lojas próximas:** produtos disponíveis para retirada em pontos de retirada num raio de até 10 km de distância do endereço fornecido.  
* **Retirada em {{nome}}:** produtos disponíveis para retirada no [ponto de retirada](https://help.vtex.com/pt/docs/tutorials/cadastro-de-pontos-de-retirada) de escolha do comprador.  
* **Prazo de envio ([Opções de envio](https://help.vtex.com/pt/tutorial/opcoes-de-envio-beta--1fRDJFcHCtpTnk7GNyaRDY))**: produtos disponíveis conforme o prazo, método de envio e zonas geográficas configuradas pelo lojista no módulo de [**Opções de envio**](https://help.vtex.com/pt/tutorial/opcoes-de-envio-beta--1fRDJFcHCtpTnk7GNyaRDY).  
* **Prazo de envio dinâmico**: produtos disponíveis definidos por prazos dinâmicos (**Mesmo dia** e **Dia seguinte**), que consideram os horários de navegação do comprador e os prazos cadastrados nas [**Opções de envio**](https://help.vtex.com/pt/tutorial/opcoes-de-envio-beta--1fRDJFcHCtpTnk7GNyaRDY) da conta principal da loja para a data de entrega e de retirada.

![delivery-promise-beta_2][https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/delivery-promise-beta_2.png]

Além dos filtros, a **Delivery Promise (Beta)** oferece os componentes que podem ser exibidos na página de listagem de produtos da loja e na frente de loja com opções de envio e prazo dinâmico e com detalhes dos métodos de envio e retirada disponíveis para cada produto.

![delivery-promise-beta_3][https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/delivery-promise-beta_3.png]

![delivery-promise-beta_4][https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/delivery-promise-beta_4.png]

![delivery-promise-beta_5][https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/delivery-promise-beta_5.png]

>ℹ️ Alguns dos filtros mencionados acima são componentes nativos da [FastStore](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise) v3 ou do [Store Framework](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components). Caso você queira [desenvolver componentes customizados para os filtros e a seleção de endereço da sua loja](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores) ou implementar componentes com informações sobre a entrega, entre em contato com a sua equipe de desenvolvimento ou um [parceiro de implementação](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#parceiros-de-implementacao).

## Benefícios

A Delivery Promise (Beta) é recomendada para todos os tipos de operação, pois a solução garante diversas vantagens a qualquer modelo de negócio. Conheça as condições de arquitetura de loja para participar da fase atual do beta na seção [Requisitos](https://help.vtex.com/pt/docs/tutorials/delivery-promise-beta#requisitos).

Para operações [omnichannel](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado), quanto maior a cobertura da malha logística e o número de sellers e [contas franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia) associados à operação, maiores serão os benefícios obtidos. A tabela a seguir apresenta os principais deles:

| Benefício | Detalhes |
| ----- | ----- |
| Redução do abandono de carrinho | É comum compradores desistirem de compras após informar sua localidade na etapa de carrinho, quando descobrem a impossibilidade de envio para sua localidade ou pelo prazo de envio não atender às expectativas. Com a Delivery Promise (Beta), o comprador navega pela vitrine de forma direcionada conforme seus objetivos, que podem ser priorizando o tipo de envio, o prazo de envio ou a compra em uma loja física. Para todo produto que o comprador visualiza na vitrine, levou-se em conta a existência de estoque e a viabilidade de entrega para a localidade informada. Além disso, passamos a apresentar as informações relativas ao envio desde o começo da jornada de compra.  |
| Exibição do sortimento completo de todos os sellers na vitrine | Com a Delivery Promise (Beta), o comprador pode visualizar o sortimento completo de produtos de todos os sellers que atendam a duas condições, desde que estejam devidamente configurados: Disponibilidade em estoque; Forma de envio válida para o endereço fornecido pelo comprador. |
| Melhor experiência de compra | A Delivery Promise (Beta) promove melhor experiência de compra como um todo: Elimina a frustração de descobrir no checkout a impossibilidade de realizar a compra. Permite que o comprador visualize um número maior de produtos. |
| Incentivo à venda nas lojas físicas | A Delivery Promise (Beta) permite ao comprador ter a certeza de encontrar determinados produtos nas lojas físicas por meio do filtro por ponto de retirada, o que estimula a ida às lojas e aumenta as oportunidades de vendas para as lojas e franqueados. |

## Requisitos

O funcionamento da **Delivery Promise (Beta)** requer conhecer a localização do comprador desde o início da jornada de compra, de modo que a vitrine mostre somente os produtos com forma de envio válida.

Para participar da fase atual da Delivery Promise (Beta), entre em contato com o nosso Suporte, atendendo às seguintes condições:

* Usar [Intelligent Search](https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG).
* Sellers externos precisam se adequar ao protocolo de notificações do [Delivery Promise Notification API](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api).

### Saiba mais

* [Delivery Promise: FAQ](/pt/docs/tutorials/delivery-promise-faq)
* [Setting up Delivery Promise components (Beta)](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components)
* [Delivery Promise for FastStore](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise)
* [Delivery promise for headless stores (Beta)](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores)
