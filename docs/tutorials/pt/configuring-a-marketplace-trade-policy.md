---
title: 'Configurar política comercial para marketplace'
id: tutorials_404
status: CHANGED
createdAt: 2017-04-27T22:06:38.350Z
updatedAt: 2024-06-14T14:19:35.130Z
publishedAt: 2024-05-15T00:18:56.253Z
firstPublishedAt: 2017-04-27T23:03:23.796Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: configurando-a-politica-comercial-para-marketplace
locale: pt
legacySlug: configurando-a-politica-comercial-para-marketplace
subcategory: 5AxJjgQO1Uc0kWKMwyi08W
---

Na VTEX, [políticas comerciais](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) agrupam as configurações de catálogo, preços, promoções, logística, segmentação de clientes e pagamentos para diferentes estratégias de venda. Lojas que atuam como sellers configuram políticas comerciais para aplicar condições específicas para cada marketplace em que vendem produtos. 

Confira como políticas comerciais podem ser configuradas nos seguintes módulos, quando sua loja atua como seller:

- [Configurações da Loja](#configuracoes-da-loja)  
- [Gerenciamento de Pedidos](#gerenciamento-de-pedidos)  
- [Promoções](#promocoes)  
- [Pagamentos](#pagamentos)  
- [Catálogo](#catalogo)  
- [Preços](#precos)  
- [Estratégia de Envio](#estrategia-de-envio)  
- [Integrações](#integracoes)  

Para [contratar políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta solicitar via ticket em [*Suporte*](https://help.vtex.com/pt/support), selecionando a opção **Comercial** e o tipo de solicitação `Criação de Política Comercial`.

A contratação de política comercial adicional para integrar com um [conector certificado](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outras lojas VTEX é isenta de taxas.

<div class=alert alert-warning>
Se a mesma política comercial for usada em um conector certificado e em um conector parceiro, não há isenção de taxas.</div>

## Configurações da Loja 
Criar uma nova política comercial é o primeiro passo para definir as condições aplicadas a cada marketplace em que um seller atua. Sellers podem criar múltiplas políticas comerciais, ou aplicar a mesma política em mais de um marketplace. 

Essa configuração é feita no módulo Configurações da Loja, na aba Políticas comerciais. É necessário [criar uma nova política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) quando as configurações de catálogo, preços, promoções, logística e pagamentos forem diferentes entre os marketplaces em que os sellers vendem seus produtos. 

![PT Add Politica comercial](https://images.ctfassets.net/alneenqid6w5/7sIaT2Sf52QFfZ5qOfESLa/a9be66bd901619b68280ad8ceec4d552/PT_Add_Politica_comercial.jpg)

## Gerenciamento de Pedidos
Após a criação de uma política comercial, é preciso associá-la a cada marketplace em que o seller vende produtos ao cadastrar [afiliados](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0). É assim que sellers identificam qual política comercial está atuando em cada marketplace. Se sua loja vende produtos em três marketplaces diferentes, é necessário criar três afiliados, cada um representando um marketplace. 

Essa ação é feita na aba *Configurações* do módulo *Gerenciamento de Pedidos* da sua loja ao cadastrar afiliados. Mesmo criando várias, é importante notar que somente uma política comercial atuará no marketplace por vez. 

![PT Afiliado](https://images.ctfassets.net/alneenqid6w5/44WIEfxcntAXCrsoveWKv2/3004320aeb44502e68cceac90c472d6c/PT_Afiliado.jpg)

*No exemplo acima o afiliado "Amazon" está vinculado à política comercial "1".* 

## Promoções
Sellers podem criar promoções com condições diferentes para os marketplaces em que vendem produtos. Ao criar uma promoção, as políticas comerciais indicam em que marketplaces serão aplicadas. Se sua loja deseja criar uma promoção para um marketplace que oferece uma menor comissão sobre seus produtos, é necessário indicar em qual política comercial a promoção atuará.

Essa configuração é feita no módulo de *Promoções* em todas as [promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/4W2AA8MWwIy80z5UCYw0f9) que sua loja oferece como seller. Para isso:

1. Selecione a política comercial no campo **Restringir políticas comerciais**. 
2. Configure a origem das promoções como `fulfillment / Entregue por mim`. 

Se nenhuma política comercial for selecionada, a promoção estará disponível em todos os canais de venda.

![PT Promoções Politica Comercial](https://images.ctfassets.net/alneenqid6w5/78iUQ59I9DDJS1lI4mJjA1/8d011fccf8af4cf5bc088cbd77a7b914/PT_Promo____es_Politica_Comercial.jpg)

*No exemplo acima, a promoção será aplicada somente a pedidos das políticas comerciais "Marketplace-BRL" e "Argentina-ARS", onde a loja atua como seller. A promoção não estará disponível no storefront da loja VTEX.* 

## Pagamentos
Sellers que transacionam o pagamento das vendas de seus produtos em um marketplace podem criar [condições especiais](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456) de pagamento e aplicá-las em marketplaces específicos por meio de políticas comerciais. Se sua loja deseja oferecer mais opções de parcelamento para pedidos em marketplaces parceiros, é necessário criar uma condição especial e associá-la à política comercial vigente nesses marketplaces. 

Essa configuração é feita no módulo de *Pagamentos*, ao [criar uma condição especial](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456) e ao associá-la às políticas comerciais desejadas. Se nenhuma restrição é feita, a política comercial será aplicada em todos os canais de venda. 

![PT Pagamento Politica comercial](https://images.ctfassets.net/alneenqid6w5/1B0eL9YPiRsRSgQUSgHqBJ/bd8e088166a9fa0f1fabc0c410f18409/PT_Pagamento_Politica_comercial.jpg)

*No exemplo acima, a condição de pagamento está associada à política comercial "Marketplace". Isso torna a condição de pagamento disponível apenas aos canais de venda associados a essa política comercial.*

## Catálogo 
Sellers podem restringir a disponibilidade dos produtos em seu catálogo por meio de políticas comerciais diferentes. É assim que os sellers determinam quais produtos serão vendidos em cada marketplace em que atuam. Se sua loja vende produtos eletrônicos e roupas, para vender em um marketplace exclusivo de eletrônicos, é necessário segmentar o sortimento de produtos, excluindo as roupas. 

Essa configuração é feita no *Catálogo* da VTEX, ao [cadastrar produtos](https://help.vtex.com/pt/tutorial/cadastrando-produtos--tutorials_2567), indicando para cada produto quais políticas comerciais estão vinculadas a ele. Se nenhuma restrição é feita na criação do produto, o produto estará disponível em todas as políticas comerciais. 

<div class="alert alert-warning">
Não é recomendado vincular políticas comerciais a coleções, para determinar o sortimento de produtos, sobretudo em casos de marketplaces externos à VTEX. Quando um produto é retirado da coleção da política comercial, o sistema VTEX não avisa o marketplace dessa atualização, fazendo com que o produto continue disponível no marketplace. 
</div>  

![Pt Catálogo Politica](https://images.ctfassets.net/alneenqid6w5/cXoXS1QSCxmbh89SwVfVP/63eea6b22e93fa4e94840a5c9a88db94/Pt_Cat__logo_Politica.jpg)

*No exemplo acima, o produto estará disponível apenas para canais de venda utilizando as políticas comerciais "Carrefour" e "Marketplace".* 

## Preços
Sellers podem definir uma estratégia de precificação diferente para cada marketplace em que atuam. Vamos supor que o marketplace A cobra 5% de comissão sobre produtos do seller, e o marketplace B cobra 10% - é possível ajustar preços para compensar a diferença no markup. 

Essa configuração é feita no módulo de *Preços* da VTEX, utilizando políticas comerciais. Ao definir preços para seus produtos, sellers devem levar em consideração que cada política comercial é criada com sua própria tabela de preços. Para diferenciar a precificação entre políticas comerciais, é possível usar:

- [Regras de preço](https://help.vtex.com/pt/tutorial/configurar-regra-de-preco-para-politica-comercial--5LQMLwcUcEGCWK6SMI6cEM): para determinar um markup para categorias e marcas específicas
- [Preços fixos](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy): para diferenciar preços em produtos específicos

![PT Regra de preço](https://images.ctfassets.net/alneenqid6w5/lBoM4E1z07YLbsZfJhP1V/6344b89e4698e8834febd6dcbc4374cc/PT_Regra_de_pre__o.jpg)

*No exemplo acima, a regra de preço aplicou um markup à política comercial "Marketplace" para produtos dentro da categoria "Fera-Fashion*. 

## Estratégia de Envio

Sellers podem configurar [rotas logísticas](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/1xo0jmMDcnAUU5ZOavdQ7M) específicas para cada marketplace em que vendem seus produtos. Isso significa vincular uma combinação de estoque, inventário, política de envio (transportadora) e até pontos de retirada a diferentes políticas comerciais. Se sua loja fornece produtos do *Estoque 1* para o *Marketplace A*, é preciso realizar esse vínculo ao configurar docas e estoques.

Ambas configurações são realizadas no módulo *Estratégia de Envio*. Ao criar uma [doca](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj), é preciso indicar quais políticas comerciais ela atenderá. Isso torna as políticas de envio associadas a essa doca disponíveis para as políticas comerciais vinculadas. Em seguida, é necessário relacionar o [estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque) desejado a uma doca, para tornar seu inventário disponível para todas as políticas comerciais associadas à doca. 

![PT Doca Politica](https://images.ctfassets.net/alneenqid6w5/1peTICHA1NJwPUAvPbsoMb/2f40ca4bb8723eff8218e24ad2b81c8f/PT_Doca_Politica.jpg)
*No exemplo acima, a doca está associada à política comercial "Marketplace", que serão atendidas pela transportadora "Transportadora A".*

![PT Estoque Politica](https://images.ctfassets.net/alneenqid6w5/6ZyxXxLtPVaFgkb5LY9cVi/634a9269e2b94cc8102fe4037f8b7136/PT_Estoque_Politica.jpg)
*No exemplo acima, o estoque está associado a "Doca A", portanto esse será o estoque que as políticas comerciais vinculadas à "Doca A" utilizarão.* 

## Integrações
As políticas comerciais também são aplicadas em todas as integrações em que sua loja vende produtos. É por meio delas que sellers indicam quais condições de preço, catálogo, promoções, logística, pagamento e estratégia de envio estarão disponíveis para a venda na integração com a Netshoes, ou Google Shopping, por exemplo. 

Essas [integrações](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#vender-em-marketplace) são feitas na aba de *Configurações* do módulo *Integrações*. Cada canal costuma requerer condições comerciais específicas, porém, é possível que canais diferentes compartilhem da mesma política comercial. 

![PT integracao politica](https://images.ctfassets.net/alneenqid6w5/2Zg5NRNmE30MNvB7cxXyso/50d0f55f7ed3ab4c1a776224151fb6bf/PT_integracao_politica.jpg)

*No exemplo acima, a política comercial "Marketplace" está aplicada na integração com o Google Shopping.*

## Saiba mais

- [Criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)  
- [Como funciona uma política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)
- [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)

