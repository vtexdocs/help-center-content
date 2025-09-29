---
title: 'Delivery Promise (Beta)'
id: p9EJH9GgxL0JceA6dBswd
status: PUBLISHED
createdAt: 2024-08-22T15:58:58.240Z
updatedAt: 2025-08-29T20:07:18.463Z
publishedAt: 2025-08-29T20:07:18.463Z
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

**Delivery Promise (Beta)** é a nova solução da VTEX para que o cliente, durante a experiência de compra na sua loja, visualize somente os produtos que pode adquirir, considerando tanto a disponibilidade dos produtos em estoque quanto formas de envio válidas para o endereço de entrega.

Com a **Delivery Promise (Beta)**, sua loja é capaz de fazer uma “promessa de entrega” ao cliente para todos os produtos visualizados, conforme apresentado no vídeo a seguir:

<iframe width="560" height="315" src="https://www.youtube.com/embed/l8HU2qVpsBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> ❗ A fase atual da **Delivery Promise (Beta)** ainda não permite filtrar a vitrine da loja por um prazo de envio. Para mais informações sobre filtros, veja a seção [Funcionalidades disponíveis](#funcionalidades-disponiveis).

Este artigo está organizado nas seguintes seções:

* [Funcionalidades disponíveis](#funcionalidades-disponiveis)
* [Benefícios](#beneficios)
* [Requisitos e restrições](#requisitos-e-restricoes)

## Funcionalidades disponíveis

Quando o cliente fornece seu endereço, uma seleção inicial dos produtos é feita de forma a exibir somente os produtos que podem ser entregues nessa localidade ou retirados em pontos de retirada em um raio de até 50 km de distância da localidade (limite determinado pelo Checkout).

Além de poder comprar todos os produtos visualizados, o cliente pode filtrar os produtos na vitrine para visualizar somente os resultados que atendam a determinados critérios, como será visto adiante. Isso permite ao cliente direcionar a experiência de navegação de acordo com os próprios objetivos:

* Produtos disponíveis para o CEP desejado.
* Prazo limite para recebimento do produto.
* Produtos disponíveis em lojas próximas ao cliente.
* Forma de envio mais rápida para receber o pedido.
* [Ponto de retirada](/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) de sua escolha para retirar o pedido.

Nesta etapa, a **Delivery Promise (Beta)** permite que os clientes da sua loja filtrem os produtos exibidos na navegação usando os seguintes filtros:

* **Entregar em:** produtos disponíveis para entrega no endereço fornecido.
* **Retirada:** produtos disponíveis para retirada em pontos de retirada num raio de até 50 km de distância do endereço fornecido. 
* **Retirada em lojas próximas:** produtos disponíveis para retirada em pontos de retirada num raio de até 10 km de distância do endereço fornecido. 
* **Retirada em {{nome}}:** produtos disponíveis para retirada em determinado ponto de retirada.

> ℹ️ Os filtros mencionados acima são componentes nativos do Intelligent Search. Caso você queira desenvolver componentes customizados para a sua loja, entre em contato com a sua equipe de desenvolvimento ou um [parceiro de implementação](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#parceiros-de-implementacao).

## Benefícios

A **Delivery Promise (Beta)** é recomendada para todos os tipos de operação, pois a solução garante diversas vantagens a qualquer modelo de negócio. Conheça as condições de arquitetura de loja para participar da fase atual do beta na seção [Requisitos e restrições](#requisitos-e-restricoes).

Para operações [omnichannel](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv), quanto maior a cobertura da malha logística e o número de sellers e [contas franquia](/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) associados à operação, maiores serão os benefícios obtidos. A tabela a seguir apresenta os principais deles:

| **Benefício** | **Detalhes** |
| :---: | :--- |
| Redução do abandono de carrinho | É comum clientes desistirem de compras após informar sua localidade na etapa de carrinho, quando descobrem a impossibilidade de envio para sua localidade ou pelo prazo de envio não atender às expectativas.Com a **Delivery Promise (Beta)**, para todo produto que o cliente visualiza na vitrine, levou-se em conta a existência de estoque e a viabilidade de entrega para a localidade do cliente. Além disso, passamos a apresentar as informações relativas ao envio desde o começo da jornada de compra do cliente. |
| Aumento do sortimento de produtos na vitrine | Por limitações de funcionalidades como a [regionalização de sellers](/pt/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw), [sellers abrangentes](/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI) e do [algoritmo de seleção de sellers](/pt/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa), sem a **Delivery Promise (Beta)** o sortimento de produtos que aparece na vitrine para o cliente não corresponde à totalidade de produtos dos sellers.Com a **Delivery Promise (Beta)**, o cliente é capaz de visualizar o sortimento completo de produtos de todos os sellers, desde que:<ul><li>Corretamente configurados.</li><li>Disponíveis em estoque.</li><li>Tenham forma de envio válida para o endereço fornecido pelo cliente.</li></ul> |
| Melhor experiência de compra | **A Delivery Promise (Beta)** promove melhor experiência de compra ao cliente como um todo:<ul><li>Elimina a frustração de descobrir no checkout a impossibilidade de realizar a compra.</li><li>Permite que o cliente visualize um número maior de produtos.</li><li>Permite que o cliente navegue pela vitrine de forma direcionada conforme seus objetivos, que podem ser priorizando o tipo de envio ou a compra em uma loja física.</li> |
| Incentivo à venda nas lojas físicas  | **A Delivery Promise (Beta)** permite ao cliente ter a certeza de encontrar determinados produtos nas lojas físicas, o que estimula a ida do cliente às lojas e aumenta as oportunidades de vendas. |

## Requisitos e restrições

O funcionamento da **Delivery Promise (Beta)** requer conhecer a localização do cliente desde o início da jornada de compra, de modo que a vitrine mostre somente os produtos com forma de envio válida. Para isso, é necessário instalar o [Intelligent Search](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), que solicita ao cliente o endereço da localidade. 

Para participar da fase atual da **Delivery Promise (Beta)**, é necessário atender às seguintes condições:

* <i class="far fa-check-circle"></i> **Requisito:** usar [Intelligent Search](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG).
* <i class="far fa-check-circle"></i> **Requisito:** ter implementação de frontend [Store Framework](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework).

### Saiba mais

* [Delivery Promise: FAQ](/pt/tutorial/delivery-promise-faq--2frHHK5uPsQrLK5XbYHALN)
* [Setting up Delivery Promise components (Beta)](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components)
* [Delivery promise for headless stores (Beta)](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores)
* [Delivery Promise](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise)

