---
title: 'Escolher entre conta padrão, conta franquia ou Seller Portal'
id: 4S90HzzhMyZESsHqrnUs78
status: PUBLISHED
createdAt: 2022-04-20T14:15:50.164Z
updatedAt: 2024-09-16T16:41:20.164Z
publishedAt: 2024-09-16T16:41:20.164Z
firstPublishedAt: 2022-04-27T21:42:35.010Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: choosing-between-standard-account-franchise-account-or-seller-portal
legacySlug: escolher-entre-conta-padrao-conta-franquia-ou-seller-portal
locale: pt
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

A plataforma VTEX promove a colaboração entre marketplaces e sellers em diferentes cenários, de forma que você pode montar múltiplas [estratégias de marketplace](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex). O marketplace é o ambiente onde o produto é vendido, e o seller é o dono do estoque e o responsável pelo envio do pedido.

Na VTEX, existem três tipos de conta e cada uma permite atuar com um perfil de seller:

- **Conta padrão:** dispõe das configurações de todos os módulos da plataforma VTEX e atua como seller do tipo normal, recebendo nome de [seller VTEX](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#sendo-seller-vtex).
- **Conta franquia:** é criada associada a uma conta padrão, de quem ela herda o [catálogo](/pt/docs/tracks/arquitetura-do-catalogo), ou seja, categorias, produtos e especificações são importados para o ambiente da [conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia), que não cria produtos próprios. No entanto, ela pode configurar logística, pagamento e preços próprios. A conta franquia dispõe parcialmente dos módulos da plataforma VTEX e atua como [seller white label](/pt/docs/tutorials/seller-white-label) da conta padrão.
- **Seller Portal:** o [Seller Portal](/pt/docs/tutorials/seller-portal-primeiros-passos) é uma edição da plataforma VTEX que permite a sellers se conectarem e venderem produtos em marketplaces do ecossistema VTEX, independente do seller já ter ou não uma conta na VTEX. O Seller Portal permite acesso parcial aos módulos da plataforma e o seller pode ser do tipo normal ou [seller white label](/pt/docs/tutorials/seller-white-label).

  > ⚠️ O limite para cada conta do Seller Portal é de 100 mil produtos. Para mais informações, entre em contato com nosso [Suporte](https://support.vtex.com/hc/pt-br/requests).

A tabela a seguir apresenta os principais cenários de uso de cada tipo de conta:

| **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- |
| O [Seller Portal](/pt/docs/tutorials/seller-portal-primeiros-passos) é indicado quando o marketplace VTEX deseja se conectar a um seller externo, ou seja, que não possui conta na VTEX. A funcionalidade permite o [compartilhamento de produtos](/pt/docs/tutorials/seller-portal-produtos-compartilhados) do marketplace VTEX com o seller, diminuindo a fricção e simplificando o gerenciamento da operação. Cada ambiente do Seller Portal criado integra o seller a um único marketplace VTEX. | A conta padrão é indicada para lojas que desejam realizar sua operação de ecommerce de forma completa, utilizando estratégias de [comércio unificado](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv). A conta padrão pode atuar como seller VTEX, marketplace VTEX e se conectar a múltiplos marketplaces e [conectores nativos](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-conector-nativo-vtex). | A [conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia) é estratégica para operações que desejam expandir suas vendas com a integração de lojas físicas, com a facilidade de herdar o catálogo de uma conta padrão. A conta franquia é comumente adotada por franqueados e representantes da marca. |

> ℹ️ O que vai definir a melhor opção para você operar no ecossistema VTEX é o modelo e os objetivos do seu negócio. Saiba mais em [Estratégias de marketplace na VTEX](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex).

A seguir, há uma série de comparativos de como Seller Portal, conta padrão e conta franquia se relacionam com módulos e funcionalidades da plataforma VTEX:

## Conta

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Criar conta | A [criação de uma conta no Seller Portal](/pt/docs/tutorials/seller-portal-primeiros-passos-para-o-marketplace) pode ser feita tanto pelo Admin VTEX, quanto por [API](/pt/docs/tutorials/seller-portal-primeiros-passos-para-o-marketplace#acoes-por-api-rest). Primeiro, o marketplace VTEX solicita acesso ao Seller Portal junto ao seu Customer Success Manager (CSM). Após isso, o marketplace [convida](/pt/docs/tutorials/marketplace-convite-de-sellers) o seller e, depois do convite aceito, [ativa](/pt/docs/tutorials/marketplace-convite-de-sellers) o seller. | A VTEX e o cliente firmam um contrato e, após assinatura e aprovação interna, um novo ambiente é criado para o cliente na plataforma VTEX. | O cliente solicita a [criação da conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia#solicitar-criacao-de-conta-franquia) pelo [suporte](https://supporticket.vtex.com/support). É necessário ter o email do [usuário titular](/pt/docs/tracks/o-que-e-o-usuario-master) (Admin Master). |
| [Usuário titular](/pt/docs/tracks/o-que-e-o-usuario-master) (Admin Master) | Há somente um usuário titular. Por padrão, o email do usuário titular é aquele que recebe o convite para o Seller Portal, mas esse email pode ser alterado. Somente o usuário titular pode [criar appKeys e appTokens](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication). | Há um único usuário titular e, por padrão, ele é designado pelo email da pessoa que assinou o contrato com a VTEX. O usuário titular pode ser alterado e somente ele pode criar appKeys e appTokens. | Há um único usuário titular e, por padrão, ele é o mesmo da conta principal. O usuário titular pode ser alterado e somente ele pode criar appKeys e appTokens. |
| Gerenciar acesso de usuários com [perfis de acesso](/pt/tutorial/como-criar-perfil-de-acesso/) | Sim. | Sim. | Sim. |

## Catálogo

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Herdar Catálogo | O Seller Portal permite ao marketplace VTEX definir um sortimento de produtos para [compartilhar](/pt/docs/tutorials/seller-portal-produtos-compartilhados) com o seller, que então configura preço e estoque para os produtos. O gerenciamento é feito no Seller Portal pela página **Produtos Compartilhados**. O seller não pode alterar o catálogo do marketplace VTEX e também não pode vender os produtos compartilhados em outros marketplaces. | A conta padrão não herda catálogo, pois é responsável por criar e gerenciar o próprio sortimento de produtos. A conta padrão dispõe de todas as funcionalidades do módulo **Catálogo**. | A conta franquia herda o catálogo da conta principal e não possui o módulo **Catálogo**. Alterações de catálogo precisam ser feitas na conta principal. |
| Criar produto | O Seller Portal permite que o seller crie seus próprios produtos. Para isso, ele tem que ser [convidado](/pt/docs/tutorials/marketplace-convite-de-sellers) para o Seller Portal como um seller do tipo comum, e não um [seller white label](/pt/docs/tutorials/seller-white-label). Os produtos criados pelo seller precisam ser aprovados e [catalogados](/pt/docs/tutorials/sugerindo-e-aprovando-skus) pelo marketplace VTEX. | A conta padrão pode criar produtos e dispõe de todas as funcionalidades do módulo **Catálogo**. | A conta franquia não pode criar produtos e não dispõe do módulo **Catálogo**. |
| Adequar cadastro de produtos de acordo com critérios do marketplace VTEX | O seller pode ajustar o cadastro dos seus produtos de acordo com as solicitações do marketplace VTEX. Além disso, o marketplace pode [compartilhar produtos](/pt/docs/tutorials/seller-portal-produtos-compartilhados) com o seller, que importa as configurações dos produtos. | A conta padrão pode ajustar o cadastro dos seus produtos de acordo com as solicitações do marketplace. Além disso, marketplaces VTEX podem realizar ajustes para adequar o produto do seller ao seu catálogo. | A conta franquia não possui catálogo próprio, portanto não pode configurar o cadastro de produtos. |
| Associar produtos no marketplace VTEX | Os produtos podem ser associados pelo marketplace VTEX com produtos enviados por outros sellers. | Os produtos enviados por um seller com conta padrão podem ser associados pelo marketplace VTEX com produtos enviados por outros sellers. | Não se aplica, pois a conta franquia não tem catálogo próprio. |
| Sobrescrever imagem | Sim, é possível. | Sim, é possível. | Não se aplica, pois a conta franquia não tem catálogo próprio. |
| [Política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial) | Permite ter uma única política comercial. | Permite [contratar múltiplas políticas comerciais](/pt/docs/tutorials/contratacao-de-politica-comercial-adicional). | Permite ter uma única política comercial. |
| Modalidade [kit](/pt/docs/tutorials/cadastrar-kit) | Não é possível utilizar a modalidade kit. | Pode utilizar a modalidade kit. | Pode utilizar a modalidade kit. Caso um produto faça parte de um kit na conta principal e o estoque seja reabastecido, esse produto vai ser automaticamente considerado como disponível na conta franquia, mesmo que a princípio ele não devesse ser vendido pela conta franquia. |
| [Cadastrar anexo](/pt/docs/tutorials/cadastrar-um-anexo) | Não é possível cadastrar anexo. | É possível cadastrar anexo. | É possível cadastrar anexo na conta principal e isso se reflete na conta franquia. |

## Preço

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Herdar preço de outra conta | Quando o marketplace VTEX [convida](/pt/docs/tutorials/marketplace-convite-de-sellers) o seller para o Seller Portal escolhendo a opção [Seller White Label](/pt/docs/tutorials/seller-white-label), os produtos do seller herdam os preços do marketplace. No entanto, o seller pode editar os preços. | A conta padrão não herda preços de outra conta, é necessário cadastrá-los no seu próprio ambiente. | A conta franquia pode herdar preços da conta principal. |
| Marketplace VTEX poder sobrescrever preço do seller | Quando o seller criado via convite for um seller comum, o preço deste pode ser sobrescrito, mas se for Seller white label, o preço não pode ser sobrescrito. | Sim. | Não, o marketplace VTEX pode apenas definir regras comerciais para a conta franquia. |
| Dispor de [Manual Pricing](/pt/docs/tutorials/funcionalidades-de-televendas#inserir-preco-manual) | Sim. | Sim. | Sim. |

## Promoções

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Seller poder criar [promoções](/pt/docs/tracks/como-funcionam-as-promocoes) | O seller cria e configura promoções diretamente no Seller Portal. Para mais detalhes sobre o processo de criação, acesse [Seller Portal: Criar uma promoção](/pt/docs/tutorials/seller-portal-criar-uma-promocao). | Pode criar e configurar promoções, além de realizar simulações de promoções. |
| Determinar canal para promoção | O seller pode criar promoções. | Sim. | Sim. |
| Marketplace VTEX poder criar promoções para produtos do seller | Sim. | Sim. | Sim. |

## Pagamentos

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Refletir todos os meios de [pagamento](/pt/docs/tracks/configurar-um-conector-de-pagamentos) no Marketplace VTEX | Sim. | Sim. | Sim. |
| Configurar pagamento para que pedidos com produtos de mais de um seller ofereçam somente meios de pagamento comuns aos sellers (Mínimo Múltiplo Comum) | Sim. | Sim. | Sim. |
| Transacionar pagamento pelo seller | Sim. | Sim. | Sim. |
| Possuir provedor de vale compra | Não. | Sim. | Sim. |
| Configurar [pagamento com cartão da loja](/pt/docs/tutorials/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria) (private label) | Não. | Sim. | Sim, mas apenas quando todos os produtos do pedido pertencem à conta franquia. Se o pedido envolver diferentes sellers ([split de pedidos](/pt/docs/tutorials/split-de-pagamento)), a configuração de cartão da loja não aparece como disponível. |
| Dispor do módulo [Assinaturas](/pt/docs/tutorials/como-gerenciar-assinaturas) | Não. | Sim. | Sim. |
| Utilizar o [vale-compra (GiftCard)](/pt/docs/tutorials/gift-card) da VTEX | Sim, mas a configuração do [GiftCard](/pt/docs/tutorials/gift-card) é feita na conta do marketplace VTEX. Depois, é necessário habilitar a opção de pagamento no [**Gerenciamento de Sellers**](/pt/docs/tutorials/adicionar-seller), para o seller aceitar o vale-compra. | Sim, mas a configuração do GiftCard é feita na conta do marketplace VTEX. Depois, é necessário habilitar a opção de pagamento no **Gerenciamento de Sellers**, para o seller aceitar o vale-compra. | Sim, mas a configuração do GiftCard é feita na conta principal. Depois, é necessário habilitar a opção de pagamento no **Gerenciamento de Sellers**, para ele aceitar o vale-compra. |

## Logística

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Segmentar [estratégias de envio](/pt/docs/tutorials/estrategia-de-envio) para marketplaces diferentes | Não, pois o seller vende em um único marketplace VTEX. | Sim. | Não, somente para a conta principal. |
| Possuir estoque de segurança nativo da plataforma | Não. | Não. | Não. |
| Possuir capacidade de entrega para [Entregas Agendadas](/pt/docs/tutorials/entrega-agendada) | Sim. | Sim. | Sim. |
| Configurar [pontos de retirada](/pt/docs/tutorials/pontos-de-retirada) | Sim. | Sim. | Sim. |
| Cadastrar polígonos de [geolocalização](/pt/docs/tutorials/gerenciar-geolocalizacao) | Sim. | Sim. | Sim. |
| Priorizar um seller para atender o pedido | Não. | Não. | Não. |

## Master Data

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Seller poder acessar dados do consumidor ao vender em marketplace VTEX | O seller não tem acesso a dados nem email do consumidor. A troca de informações é entre consumidor e marketplace VTEX. | Quando a conta padrão vende no próprio ambiente, ela funciona tanto como seller quanto como marketplace, e tem acesso a dados do consumidor. O seller VTEX que vende em outro marketplace VTEX não tem acesso a dados do consumidor. | A conta franquia não tem acesso a dados nem email do consumidor. |

## CMS/IO/Fast Store

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Poder ter storefront | Não. | Sim. | Não. |

## Intelligent Search

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Ordenar busca com [Intelligent Search](/pt/docs/tracks/visao-geral-intelligent-search) no marketplace VTEX para apresentar resultados de 1P (first-party) antes de 3P (third-party) | Não. | Não. | Não. |

## Seller

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Conectar seller ao marketplace VTEX | O seller se conecta por meio de um [convite](/pt/docs/tutorials/marketplace-convite-de-sellers) enviado pelo marketplace VTEX. | O seller VTEX se conecta a um marketplace VTEX sendo [adicionado](/pt/docs/tutorials/adicionar-seller) pelo marketplace por meio do **Gerenciamento de Sellers**. | A conta franquia é criada automaticamente como seller da conta principal. |
| Marketplace VTEX poder alterar cadastro do seller no **Gerenciamento de Sellers** | Sim. | Sim. | Sim. |
| Marketplace VTEX poder cadastrar comissão para o seller no **Gerenciamento de Sellers** | Sim. | Sim. | Sim. |
| Víncular SKU do seller ao SKU do marketplace VTEX | Sim. | Sim. | Sim. |
| Marketplace VTEX poder integrar produtos recebidos do seller na página [**SKUs Recebidos**](/pt/docs/tutorials/sugerindo-e-aprovando-skus) | Produtos criados pelo seller precisam ser catalogados manualmente na página **SKUs Recebidos**. Já quando o marketplace VTEX [compartilha produtos](/pt/docs/tutorials/seller-portal-produtos-compartilhados) com o seller, a aprovação do [VTEX matcher](/pt/docs/tutorials/entendendo-a-pontuacao-do-vtex-matcher) é automática, e isso fica registrado na **SKUs Recebidos**. | Sim. A funcionalidade VTEX Matcher avalia os SKUs enviados pelos sellers e acelera o processo de catalogação. | Não, pois o catálogo é herdado da conta principal. |
| Precisar [mapear categorias, marcas e especificações no marketplace VTEX](/pt/docs/tutorials/mapeando-categorias-e-marcas-para-marketplace) | Quando o seller cria o produto, é necessário realizar o mapeamento. [Produtos compartilhados](/pt/docs/tutorials/seller-portal-produtos-compartilhados) não precisam ser mapeados. | Sim. | Não, pois o catálogo é herdado da conta principal. |

## Marketplace

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| Integrar com [marketplace externo](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-marketplace-externo) | Não. | Sim. | Não é possível integrar uma conta franquia a um marketplace externo, mas a conta franquia pode vender em marketplaces externos com a funcionalidade [Multilevel Omnichannel Inventory](/pt/docs/tutorials/multilevel-omnichannel-inventory). |
| Integrar com múltiplos marketplaces VTEX | Cada ambiente do Seller Portal está conectado a um único marketplace VTEX. | Sim. | A conta franquia vende no marketplace VTEX da conta principal e não pode integrar com outros marketplaces. No entanto, a conta franquia pode vender produtos em marketplaces VTEX com a funcionalidade [Multilevel Omnichannel Inventory](/pt/docs/tutorials/multilevel-omnichannel-inventory). |

## ERP

| **Aspecto** | **Seller Portal** | **Conta padrão** | **Conta franquia** |
| ---------- | ---------- | ---------- | ---------- |
| [Integrar com ERPs de mercado](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) | A integração de um ambiente no Seller Portal com [ERPs](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) só é possível por meio de [APIs](https://developers.vtex.com/vtex-rest-api/reference/marketplace-api-overview) e permite configurar preço, estoque e pedidos. Os produtos precisam ser criados manualmente no Seller Portal ou compartilhados com o marketplace VTEX. | Sim. | Sim. |
