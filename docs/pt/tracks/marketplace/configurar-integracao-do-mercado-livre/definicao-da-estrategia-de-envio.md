---
title: 'Definição da Estratégia de Envio'
id: 6T5EBd0pXLftDqGvWxarR8
status: PUBLISHED
createdAt: 2021-08-10T20:43:41.794Z
updatedAt: 2024-12-18T02:05:19.046Z
publishedAt: 2024-12-18T02:05:19.046Z
firstPublishedAt: 2021-08-10T20:55:40.994Z
contentType: trackArticle
productTeam: Channels
slugEN: defining-the-shipping-strategy
locale: pt
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugEN: configurar-integracao-do-mercado-livre
order: 4
---

Para vender seus produtos no Mercado Livre é preciso determinar uma [Estratégia de Envio](/pt/docs/tutorials/estrategia-de-envio), ou seja, informar qual será a operação de entrega dos seus produtos. A Estratégia de Envio é composta de três etapas logísticas: [Política de Envio](/pt/docs/tutorials/politica-de-envio), [Estoque](/pt/docs/tutorials/estoque) e [Doca](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj?&utm_source=autocomplete). 

É por meio da Doca que a Política de envio (transportadora) é associada ao Estoque da sua loja. A doca é o ponto intermediário entre a transportadora e o armazenamento da sua loja, e através da doca as condições entre transportadora e armazenagem são feitas.

Se for do seu interesse utilizar a mesma Estratégia de Envio definida para sua loja VTEX na integração com o Mercado Livre, não é necessário criar novas configurações de logística. Se, no entanto, você deseja criar uma Estratégia de Envio específica para o marketplace, é necessário realizar os seguintes passos:

> ⚠️ A Política comercial que será utilizada na integração com o Mercado Livre deve ser associada a uma única doca. Caso a Política comercial seja associada a mais de uma doca, os pedidos recebidos podem não integrar com o sistema VTEX.

1. [Cadastrar Política de envio](/pt/docs/tutorials/politica-de-envio#cadastrar-uma-politica-de-envio), associada à política comercial usada na integração.
2. [Cadastrar Doca](/pt/docs/tutorials/gerenciar-doca), associada à política comercial usada na integração.
3. [Cadastrar Estoque](/pt/docs/tutorials/gerenciar-estoque), associado à Doca criada no passo anterior.
4. Associar a política comercial do Mercado Livre à doca.

Caso você queira conferir se as configurações foram realizadas corretamente, você pode fazer uma [Simulação de envio](/pt/docs/tutorials/simulador-de-envio). O Simulador de envio é uma ferramenta que possibilita checar as condições de entrega do produto sem de fato abrir um pedido.
