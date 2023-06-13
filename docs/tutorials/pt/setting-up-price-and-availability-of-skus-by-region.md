---
title: Configurar preço e disponibilidade de SKUs regionalmente
id: 12ne58BmvYsYuGsimmugoc
status: PUBLISHED
createdAt: 2018-09-10T15:30:53.237Z
updatedAt: 2023-04-27T23:49:56.658Z
publishedAt: 2023-04-27T23:49:56.658Z
firstPublishedAt: 2018-09-10T22:03:44.263Z
contentType: tutorial
productTeam: Identity
author: authors_59
slug: configurar-preco-e-disponibilidade-de-skus-por-region
legacySlug: configurar-preco-e-disponibilidade-de-skus-por-region
subcategory: dajK0sARX2c0MISKKoGoc
---

A feature de __Region__ permite que os items de uma loja (SKUs), sejam exibidos de acordo com a região de localização do cliente. Isto ocorre por meio do cadastro de preço e disponibilidade diferentes de acordo com as regiões atendidas pelos __Sellers White Label__.

Para regionalizar os preços e disponibilidades dos SKUs, é necessário:

1. Configurar a feature de Region, conforme descrito no guia [Enable the Region for SKUs](https://developers.vtex.com/docs/guides/enable-the-region-for-skus).
2. [Sellers White Label](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa#) realizem entregas de pedidos feitos em sua loja para determinadas faixas de CEP.
3. A sessão do usuário navegando na loja contenha as informações sobre o seu CEP e país de origem.

<div class="alert alert-info">
Para usar essa feature é necessário que a loja tenha o sistema de Sessões (<a href="https://help.vtex.com/pt/tutorial/vtex-session-visao-geral-do-sistema-de-sessoes--6C4Edou6bYqqEAOCAg2MQQ#">VTEX Session</a>) instalado. O VTEX Session é nativo em todas as lojas e você pode confirmar a sua instalação pela presença dos cookies <code>vtex_session</code> e <code>vtex_segment</code> ao navegar na loja.
</div>

<div class="alert alert-warning">
Em casos de <a href="https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4#">Multilevel Omnichannel Inventory</a>, um marketplace (nível 1) não pode configurar exibição de preços e disponibilidade de produtos de Sellers White Label (nível 3) com a funcionalidade de regionalização.
</div>

<div class = "alert alert-info">
A feature <b>Region</b> funciona tanto para lojas CMS Portal Legado quanto lojas desenvolvidas utilizando <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC">VTEX IO</a>, mas a funcionalidade <a href="https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG">VTEX Intelligent Search</a> é válida somente para lojas VTEX IO. Disso resulta que lojas com CMS Portal Legado possuem uma limitação na indexação de dados regionalizados e não é possível ordenar corretamente os sellers que atendem a vitrine de uma RegionId tomando por base a disponibilidade dos itens.
</div>

## Configurar a entrega na Conta Franquia/Seller White Label

O preço e a disponibilidade dos SKUs em cada região serão exibidos na loja principal de acordo com a sua configuração de entrega (faixas de CEPs indicada). A informação dos CEPs é cadastrada nas transportadoras da [Conta Franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl#) que atua como Seller White Label da loja.

Para configurar a entrega, siga os passos abaixo:

1. Acesse o Admin da __Conta Franquia__ que atua como Seller White Label da sua loja.
2. Em __Envio__, clique em **Estratégia de Envio**.
3. Em __Políticas de envio__, clique no botão `Criar Política de Envio` para cadastrar uma [transportadora](https://help.vtex.com/pt/tutorial/gerenciar-transportadora#). Os CEPs atendidos por esta transportadora serão levados em consideração para exibir o preço e a disponibilidade por região na loja principal
4. Cadastre uma [doca](https://help.vtex.com/pt/tutorial/how-to-register-a-dock#).
5. Cadastre um [estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#).
6. [Adicione estoque aos SKUs](https://help.vtex.com/pt/tutorial/managing-stock-items) que serão entregues pela rota configurada.

<div class="alert alert-info">
Para um SKU aparecer como disponível para venda, é necessário que ele tenha estoque e preço associados a ele.
</div>

