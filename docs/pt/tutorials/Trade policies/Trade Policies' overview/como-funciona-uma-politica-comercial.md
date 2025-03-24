---
title: 'Como funciona uma Política Comercial'
id: 6Xef8PZiFm40kg2STrMkMV
status: PUBLISHED
createdAt: 2021-05-25T20:05:42.155Z
updatedAt: 2024-06-20T22:52:38.544Z
publishedAt: 2024-06-20T22:52:38.544Z
firstPublishedAt: 2021-05-25T20:17:12.408Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-trade-policies-work
locale: pt
legacySlug: como-funciona-uma-politica-comercial
subcategoryId: 6J3wx7KM4oysymsWuUACyY
---

Na VTEX, políticas comerciais agrupam as configurações de catálogo, preços, promoções, logística, segmentação de clientes e pagamentos para diferentes estratégias de venda. É necessário [criar uma nova política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) quando uma dessas configurações for diferente entre os canais de venda em que sua loja atua, o tempo de resposta (SLA) para criação de uma política comercial é de três dias úteis (72 horas). 

Políticas comerciais permitem diferenciar condições de venda para lojas que atuam como [marketplaces](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404), para lojas que atuam como sellers, para lojas com ecommerce próprio, lojas físicas, ou lojas B2B, por exemplo. 

Políticas comerciais moldam a navegação do site de uma loja para o tipo de usuário que o acessa, segmentando condições de venda para cada público. Portanto, por mais que diferentes canais de venda possam compartilhar a mesma política comercial, nunca teremos mais de uma política comercial atuando ao mesmo tempo em um canal de vendas.

Confira como diferentes configurações da VTEX se relacionam com políticas comerciais:

- [Catálogo](#catalogo)    
- [Preços](#precos)    
- [Promoções](#promocoes)    
- [Estratégia de Envio](#estrategia-de-envio)    
- [Pagamentos](#pagamentos)    
- [Master data](#master-data)  
- [Gerenciamento da Conta](#gerenciamento-da-conta)  

Para [contratar políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta solicitar via ticket em [*Suporte*](https://help.vtex.com/pt/support), selecionando a opção **Comercial** e o tipo de solicitação `Criação de Política Comercial`, o tempo estimado de resposta (SLA) é de 48 horas úteis.

A contratação de política comercial adicional para integrar com [conector certificado](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#integrado-a-conector-certificado-parceiro) ou outras lojas VTEX é isenta de taxas.

Cada cliente na plataforma VTEX é regido por um contrato que define os parâmetros para a contratação de políticas comerciais. Essas políticas são projetadas para oferecer benefícios específicos, complementando a política comercial nativa incluída automaticamente em cada conta. A VTEX estabelece [Regras de Cobrança](#regras-de-cobranca) e [Regras de Isenção](#regras-de-isencao) para algumas políticas comerciais adicionais, promovendo o fortalecimento das integrações dentro do seu ecossistema.

<div class=alert alert-warning>
Se a mesma política comercial for usada em um conector certificado e em um conector parceiro, não há isenção de taxas.</div>

## Catálogo
Ao [cadastrar produtos](https://help.vtex.com/pt/tutorial/cadastrando-produtos--tutorials_2567) no catálogo, é possível restringir sua disponibilidade para determinadas políticas comerciais. Dessa forma, o catálogo é segmentado de acordo com diferentes estratégias de negócio. Essas estratégias podem incluir a segmentação de produtos por região, para um marketplace, ou para tipos específicos de clientes, como funcionários, por exemplo. Saiba mais sobre a configuração do [catálogo](https://help.vtex.com/pt/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ).

## Preços
É possível definir preços diferentes para o mesmo SKU a partir da política comercial. Essa aplicação da política comercial não é equivalente a criar uma promoção, pois depende da estratégia de precificação do seu negócio. Pode ser usada para diferenciar preços entre clientes B2C e B2B, ou entre lojas físicas e venda em um marketplace. É possível aplicar [regras de preço](https://help.vtex.com/pt/tutorial/configurar-regra-de-preco-para-politica-comercial--5LQMLwcUcEGCWK6SMI6cEM) e [preços fixos](https://help.vtex.com/pt/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy)  para diferenciar preços e markups entre produtos, categorias ou marcas específicas. Saiba mais sobre a configuração de [preços](https://help.vtex.com/pt/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP).

## Promoções
É possível restringir a disponibilidade de promoções para certas políticas comerciais. Ao criar uma promoção exclusiva para vendas por aplicativo, para loja física, ou para marketplaces selecionados, a política comercial é o que determina [quais produtos estarão inclusos na promoção](https://help.vtex.com/pt/tutorial/promocao-regular--tutorials_327?&utm_source=autocomplete#politica-comercial). Saiba mais sobre a configuração de [promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/4W2AA8MWwIy80z5UCYw0f9). 

## Estratégia de Envio
É possível definir [rotas logísticas](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/1xo0jmMDcnAUU5ZOavdQ7M) específicas para cada canal de venda, vinculando-as a diferentes políticas comerciais. As [docas](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj) e os [estoques](https://help.vtex.com/pt/tutorial/gerenciar-estoque) fazem a conexão entre uma rota logística e a política comercial em que ela será aplicada. É por meio dessa conexão que as diferentes funcionalidades do módulo Estoque e Entrega  identificam quais produtos atendem. Saiba mais sobre a configuração da sua [estratégia de envio](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx). 

## Pagamentos
Ao criar uma condição de pagamento, é possível restringir sua disponibilidade em certas políticas comerciais por meio de [condições especiais](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456). Isso possibilita determinar uma condição de parcelamento específica para funcionários, restringir a forma de pagamento para determinados sellers, ou disponibilizar formas de pagamento específicas para adquirentes parceiros da sua loja.

Ao criar condições de pagamento diferentes sobre o mesmo produto, elas irão concorrer entre si e o sistema do checkout selecionará a opção mais benéfica, considerando o público em questão. Se nenhuma restrição é feita, a política comercial será aplicada em todos os canais de venda. Saiba mais sobre a configuração de [pagamentos](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG). 

## Master data
É possível limitar o acesso de uma loja para públicos específicos, como em um site B2B que só permite que empresas cadastradas naveguem, ou quando o site possui um ambiente para clientes exclusivos. Essa configuração  pode ser atendida por meio de um [cluster de clientes no Master Data](https://help.vtex.com/tutorial/como-criar-um-cluster-de-clientes) e da política comercial utilizada na loja. Saiba mais sobre a configuração do [Master Data](https://help.vtex.com/tutorial/what-is-master-data--4otjBnR27u4WUIciQsmkAw). 

## Gerenciamento de Conta

<div class=alert alert-warning>
Para clientes com muitas subcontas, ou com operação de loja física que possibilitam retirada em loja, ou  com ship from store, criar múltiplas políticas comerciais não é a melhor solução. Sugerimos abrir novas <a href="https://help.vtex.com/pt/tutorial/o-que-e-store-name">store names</a> para cada uma das lojas operando dentro de uma <a href="https://help.vtex.com/pt/tutorial/o-que-e-account-name">account</a>. 
</div>

O excesso de políticas comerciais em um ambiente VTEX faz com que o processo de indexação de produtos na vitrine da loja e a simulação de frete no checkout fiquem mais lentos, possivelmente afetando a conversão de pedidos. Ao segmentar o catálogo por múltiplas políticas comerciais em vez de criar store names com inventário próprio, a loja também pode perder oportunidades de venda e melhores condições de entrega, ao restringir a oferta de produtos. Saiba mais sobre [como criar um store name](https://help.vtex.com/pt/tutorial/como-criar-um-store-name).

## Regras de Cobrança
Cada cliente VTEX possui valores estabelecidos em seu contrato para a contratação de políticas comerciais adicionais e essas possuem custo. Ressaltamos que cada conta na VTEX já possui uma [política comercial nativa](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV?&amp;utm_source=autocomplete), que não se enquadra nessas regras de cobrança.

A Política Comercial será passível de cobrança a partir do momento da sua criação mesmo que não haja pedidos sendo realizados. Caso seja totalmente utilizada para integrações diretas com lojas VTEX ou Marketplaces certificados, a bonificação ocorrerá automaticamente na fatura.

## Regras de Isenção
As regras de isenção das políticas comerciais são um benefício estratégico concedido pela VTEX, visando incentivar o fortalecimento das integrações dentro do nosso ecossistema. Essas regras podem ser atualizadas ao longo do tempo. Hoje a isenção é aplicada para as políticas que possuem pedidos em conector certificado ou integração direta com outras lojas VTEX.

## Saiba mais

- [Políticas comerciais para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)  
- [Criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)

