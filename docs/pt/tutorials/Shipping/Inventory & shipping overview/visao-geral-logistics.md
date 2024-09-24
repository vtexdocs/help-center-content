---
title: 'Estoque & entrega - Visão Geral'
id: tutorials_143
status: ARCHIVED
createdAt: 2017-04-27T22:16:45.667Z
updatedAt: 2023-03-20T17:44:01.731Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:45.469Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: logistics-module-overview
locale: pt
legacySlug: visao-geral-logistics
subcategoryId: 3RSSKdmS4MY2ycsu8WoyC2
---

O módulo de **Estoque & entrega** atende a todo o controle e monitoramento de disponibilidade dos itens em estoque, além da estrutura para a entrega dos pedidos, que atende às diferentes necessidades de acordo com a lógica de entrega da loja.

Dentro de Estoque & entrega teremos os departamentos de **Estratégia de envio**, **Tarifas de envio**, **Simulador de envio**, **Inventário**, **Envio por geolocalização**, **Pontos de retirada**, **Feriados**, e **Configurações**, cada um com sua respectiva função dentro desse segmento.

## Estratégia de Envio

Onde é possível cadastrar a relação de **[Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)**, **[Doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)** e **[Política de Envio](http://help.vtex.com/pt/tutorial/gerenciar-transportadora)** que se comunicarão entre si para definir a estrutura de entrega dos pedidos e combinar a melhor estrutura de entrega para os pedidos da loja.

## Tarifas de envio

Onde é cadastrada a definição de valores de preço e tempo de entrega para uma determinada faixa de CEP em relação ao peso cúbico do produto, dimensões, entre outros fatores.

![tarifas-envioPT](https://images.ctfassets.net/alneenqid6w5/6BuxCyz2bujSpqx9Mq0CcZ/7a4f1f361c762cc7efa4f283f5e496e7/tarifas_envio.png)
- [Tarifas de envio](https://help.vtex.com/pt/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM)

## Simulador de envio

Aqui será possível realizar uma simulação de frete e reproduzir diversos cenários para a entrega do produto, como variar qual canal será usado como referência (A loja principal ou um marketplace, por exemplo), os itens, a quantidade, seu valor (caso haja adicional pelo tipo do produto, por exemplo, químicos) e o CEP, ou endereço, da entrega.

Este retornará os valores e as transportadoras que atendem à entrega, as dimensões e pesos dos produtos, o preço da entrega e o tempo estimado para ser realizada. Além dos detalhes adicionais sobre os valores da faixa do CEP, percentuais que variam de acordo com a faixa de peso do produto, volume, valores adicionais por grama excedente, custo para a doca, fator cúbico e peso cubado.

![simulador envio](//images.ctfassets.net/alneenqid6w5/5Chp5OU2vGVkHDXtQEayoL/d3a55f4de664d821c427933224346b54/simulador_envio.png)
- [Simulação de Frete](http://help.vtex.com/pt/tutorial/simulacao-de-frete)

## Inventário

Local para gerenciar e acompanhar a movimentação de estoque realizada nos produtos da loja. Tanto quanto as reservas que o produto possui naquele momento e se já foram confirmadas ou não.

![gerenciar inventario](//images.ctfassets.net/alneenqid6w5/7DXfGBySZsZmejB31WQBRK/c455c47a1c937d068901baee81e7cfd3/gerenciar_inventario.png)
- [Gerenciar Inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139)

## Envio por geolocalização

Geolocalização é o cadastro das localizações de entrega a partir da latitude e longitude dos endereços. Aqui é permitido criar “polígonos” para um atendimento logístico específico, normalmente utilizado em zonas rurais e industriais, onde se há a divisão por lotes, por exemplo, ou em áreas de risco, onde se faz necessário excluir determinados locais dentro de uma mesma região. 

![geolocalizaçao](//images.ctfassets.net/alneenqid6w5/4UrlnVmhHGhR2XEWU8bOwx/f3596617d3f5ba0bc5219ddd7515074f/geolocaliza__ao.png)
- [Geolocalização](http://help.vtex.com/pt/tutorial/gerenciar-geolocalizacao)

## Pontos de retirada

Em Pontos de retirada é possível excluir, editar e cadastrar um *Pickup Point*. Junto ao tradicinal "delivery" (entrega em domicílio), a feature de Pontos de Retirada agrega maior flexibilidade e melhor experiência de compra para o cliente ao permitir a ele a retirada do pedido em um ponto físico. 

![pontos retirada](//images.ctfassets.net/alneenqid6w5/t58ChaH55346tKGLDD1wu/4437f547b06d579f64ec05cabdb32356/pontos_retirada.png)

- [Configurar Pontos de Retirada](http://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points) 
## Feriados

Aqui é possivel cadastrar os dias que **não** serão considerados como úteis para a sua loja. O módulo irá considerar os feriado cadastrados no cálculo de entrega dos pedido e esses dias não serâo contabilizados no prazo de entrega. 

![feriado](//images.ctfassets.net/alneenqid6w5/naLgWqy2UVusNnzG9FdUc/89ac9ae473a1696eef05c80e214b3f66/feriado.png)
- [Cadastrar Feriado](http://help.vtex.com/pt/tutorial/cadastrar-feriados)

## Configurações

Aqui é possível realizar configurações que irão atuar na construção tanto dos valores quanto na estrutura da entrega para poder atender até o mais específico tipo de entrega que o cliente demandar. As possíveis configurações dessa seção são: 

- [Adicional no frete](https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV)
- [Remessa](https://help.vtex.com/pt/tutorial/como-funciona-a-remessa--tutorials_118)
- [Modal](/pt/tutorial/como-funciona-o-modal)
- [Divisão de Carga](/pt/tutorial/como-funciona-a-divisao-de-carga)
- [Alerta de Estoque Crítico](http://help.vtex.com/pt/tutorial/configurar-o-alerta-de-estoque-critico)
- [Pontos de retirada](http://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points)

