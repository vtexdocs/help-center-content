---
title: 'Transportadoras na VTEX'
id: 7u9duMD5UQa2QQwukAWMcE
status: PUBLISHED
createdAt: 2019-01-24T20:45:39.775Z
updatedAt: 2023-03-31T01:00:22.710Z
publishedAt: 2023-03-31T01:00:22.710Z
firstPublishedAt: 2019-01-24T22:14:26.579Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: transportadoras-na-vtex
legacySlug: o-que-e-uma-transportadora
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Transportadoras são empresas que realizam entregas de cargas e de encomendas. No contexto de ecommerce, as transportadoras entregam os pedidos para os clientes. Cada transportadora possui seu perfil de operação, e os lojistas devem atentar-se a eles para configurar a logística das suas entregas.

O lojista cadastra as transportadoras na VTEX de acordo com suas condições de envio: tipos de entrega, prazos, preços, localização da operação, dimensões aceitas, tipo do produto (modal) e entrega agendada. Com as condições de envio configuradas, a plataforma seleciona as melhores opções de entrega para o cliente. 

Na VTEX, o cadastro de transportadoras é feito através da criação de [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#). Há duas formas de fazê-lo:

* Via Admin VTEX: utilizando a seção **[Políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)** da página  **[Estratégia de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)**. 
* Via API: utilizando a API de [Shipping Policies](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies).

    Em ambos os casos, são utilizadas as configurações definidas na [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), que é baseada no contrato que a sua loja tem com uma transportadora, um prestador de serviço ou qualquer outro tipo de contrato de serviço de frete que sua loja ofereça aos clientes.

Atente-se aos casos em que é preciso cadastrar mais de uma política de envio para uma mesma transportadora, por exemplo:

* A transportadora oferece diferentes [tipos de entrega ](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126)para uma localidade.
* A transportadora oferece [entrega agendada](https://help.vtex.com/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi) e entrega sem agendamento.
* A tarifa varia de acordo com o modal.

### Artigos relacionados
- [Estratégia de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
- [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)
