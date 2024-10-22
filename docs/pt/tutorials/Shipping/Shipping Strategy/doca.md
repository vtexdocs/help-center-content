---
title: 'Doca'
id: 5DY8xHEjOLYDVL41Urd5qj
status: PUBLISHED
createdAt: 2021-09-23T20:48:21.165Z
updatedAt: 2021-09-23T21:32:42.402Z
publishedAt: 2021-09-23T21:32:42.402Z
firstPublishedAt: 2021-09-23T21:20:17.177Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: loading-dock
locale: pt
legacySlug: doca
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

A doca é parte do sistema logístico e geralmente funciona como ponto intermediário entre estoques e transportadoras. Na doca, as transportadoras recolhem os itens para entregá-los para seus destinatários. 

Na VTEX, a doca é um intermediador entre o armazenamento de itens e a entrega dos pedidos do seu negócio. É pela doca que ocorre a integração das partes necessárias para a logística da sua loja: [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb),  [Política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) e [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140).

![Doca PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/Shipping Strategy/doca_1.svg)

>ℹ️ O Estoque é o espaço físico de armazenamento das mercadorias vendidas pela loja; a Política comercial é a configuração das estratégias de venda da loja; e a Política de envio é um conjunto de regras que definem as opções e condições de frete.
> A ordem de cadastro sugerida na plataforma VTEX para o funcionamento esperado do sistema logístico é:
> <body>
> <ol>
> <li>[Política comercial](https://help.vtex.com/pt/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE);</li>
> <li>[Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140);</li>
> <li>Doca;</li>
> <li>[Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb).</li>

## Casos de uso

A criação e configuração das docas na plataforma atendem a diferentes cenários logísticos. A maneira como as docas serão configuradas dependerá da estratégia de logística da sua loja.

Uma única loja pode ter diferentes casos de uso de docas, e lojas distintas podem utilizar esse recurso de diferentes formas.

Exemplo: se um sítio produz frutas, verduras e legumes e vende para diferentes tipos de comércios, o armazém do sítio pode funcionar como estoque, e diferentes docas podem ser configuradas para atender a um único armazém e escoar a produção. Seria possível definir, por exemplo, uma doca específica para frutas e outra para verduras e legumes.

Os principais casos de uso de docas são:

* Quando uma loja tem diferentes pontos de saída para um único estoque. Você pode cadastrar um estoque e várias docas na plataforma, adicionar o estoque que alimenta cada doca e a transportadora (Política de Envio) que fará a entrega.
* Quando as docas funcionam como centros de distribuição. Nesse caso, a doca não é apenas o ponto de passagem para a entrega dos itens, mas também cumpre o papel de armazém temporário.
* Quando a doca e o estoque coincidem fisicamente. São os casos em que não há distinção entre o local de armazenagem e o local de saída dos itens para transporte.
* Quando a doca não existe fisicamente e o conceito é utilizado apenas para delimitar os horários de retirada de itens do estoque pela transportadora. Mesmo nesse caso, é necessário cadastrar a doca na plataforma VTEX, pois as rotas de entrega só são possíveis com as docas configuradas.
* Quando é preciso precificar o custo do serviço de manuseio dos itens do estoque para a transportadora.

Para saber como gerenciar uma doca pelo Admin VTEX, confira o artigo [Gerenciar Doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW).

