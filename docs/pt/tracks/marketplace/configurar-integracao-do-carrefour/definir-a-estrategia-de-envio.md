---
title: 'Definir a Estratégia de Envio'
id: 4WKC9WpPyZHpb7ZoyPlCbV
status: PUBLISHED
createdAt: 2021-12-27T16:06:07.972Z
updatedAt: 2021-12-29T17:27:16.191Z
publishedAt: 2021-12-29T17:27:16.191Z
firstPublishedAt: 2021-12-27T17:12:14.077Z
contentType: trackArticle
productTeam: Channels
slugEN: defining-the-shipping-strategy-carrefour
locale: pt
trackId: 2wYlj07cNuA8k8mmwY86K2
trackSlugEN: configurar-integracao-do-carrefour
order: 4
---

Para vender seus produtos no Carrefour é preciso determinar uma [Estratégia de Envio](/pt/docs/tutorials/estrategia-de-envio), ou seja, informar qual será a operação de entrega dos seus produtos. A Estratégia de Envio é composta de três etapas logísticas: [Política de Envio](/pt/docs/tutorials/politica-de-envio), [Estoque](/pt/tutorial/o-que-e-um-estoque--23kq5gUdY0QOymOu8QSGcA) e [Doca](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj). 

É por meio da Doca que a Política de envio (transportadora) é associada ao Estoque da sua loja. A doca é o ponto intermediário entre a transportadora e o armazenamento da sua loja, e através da doca as condições entre transportadora e armazenagem são feitas.

Se for do seu interesse utilizar a mesma Estratégia de Envio definida para sua loja VTEX na integração com o Carrefour, não é necessário criar novas configurações de logística. Se, no entanto, você deseja criar uma Estratégia de Envio específica para o marketplace, é necessário realizar os seguintes passos:

1. [Cadastrar Política de envio](/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio), associada à política comercial usada na integração.
2. [Cadastrar Doca](/pt/docs/tutorials/gerenciar-doca), associada à política comercial usada na integração.
3. [Cadastrar Estoque](/pt/docs/tutorials/gerenciar-estoque), associado à Doca criada no passo anterior.
4. [Associar a política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404#estrategia-de-envio) do Carrefour à doca.

Caso você queira conferir se as configurações foram realizadas corretamente, você pode fazer uma [simulação de envio](/pt/docs/tutorials/simulador-de-envio). O Simulador de envio é uma ferramenta que possibilita checar as condições de entrega do produto sem de fato abrir um pedido.
