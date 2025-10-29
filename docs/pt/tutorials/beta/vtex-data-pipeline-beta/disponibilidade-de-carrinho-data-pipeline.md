---
title: 'Disponibilidade de carrinho Data Pipeline'
id: 1TU6rsMUlwmSoVVLs6Oom0
status: PUBLISHED
createdAt: 2025-10-29T19:55:21.659Z
updatedAt: 2025-10-29T21:24:36.539Z
publishedAt: 2025-10-29T21:24:36.539Z
firstPublishedAt: 2025-10-29T21:24:36.539Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: cart-availability-data-pipeline
legacySlug: 
locale: pt
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O modelo de dados de **Disponibilidade de carrinho** contém as informações mais recentes sobre o desempenho de uma loja em relação à sua métrica de disponibilidade de carrinho, avaliando qual porcentagem de carrinhos criados está realmente disponível para o comprador durante o checkout.

Esta seção inclui as seguintes informações:
- [Características dos dados](#características-dos-dados)  
- [Tabela: cart_availability_silver_by_sku](#tabela-cart_availability_silver_by_sku)  
- [Tabela: cart_availability_silver](#tabela-cart_availability_silver)  
- [Análises com cart availability](#analises-com-cart-availability)  
- [Correlações com outros dados](#correlacoes-com-outros-dados)  

### Características dos dados

| Característica | Descrição |
|---|---|
| Fonte de dados | Obtida das informações no formulário de pedido. |
| Disponibilidade | Esta métrica está disponível apenas através do Data Pipeline. |
| Histórico | O histórico de dados começa em outubro de 2025. |
| Intervalo mínimo de atualização | Uma hora. |

### Tabela: cart_availability_silver_by_sku

Os campos da tabela são descritos abaixo:

| Nome da coluna | Tipo da coluna | Descrição da coluna |
|---|---|---|
| main_account_name | varchar(50) | A main_account na qual o carrinho foi criado. Esta é a main_account do marketplace no qual o pedido está sendo criado, não do vendedor que está cumprindo o pedido. |
| account_name | varchar(50) | O store_name (ou subconta) no qual o carrinho foi criado. Este é o store_name do marketplace no qual o `order_form` é criado, não do vendedor que está cumprindo o pedido. |
| order_form_id | varchar(40) | Identificador único do carrinho onde os itens estão sendo adicionados. |
| updated_at | timestamp | Timestamp do evento de adição do item ao carrinho. Observe que: <ol> 1. Se um item for removido e adicionado novamente ao carrinho, apenas o primeiro evento é considerado. </ol> <ol> 2. É possível em alguns casos raros que múltiplas entradas do mesmo item sejam adicionadas a um carrinho (como em promoções, brindes e kits. </ol> Nesses casos, apenas o primeiro evento para o item é considerado. |
| af_session_id | varchar(127) | ID de sessão da aplicação Activity Flow relacionada ao carrinho. |
| sales_channel | integer | Atributo usado pelo comerciante para definir as condições de oferta de um produto. Também conhecido como política comercial. |
| sku_id | varchar(50) | Identificador único do SKU adicionado ao carrinho. Também conhecido como item_id. |
| quantity | double | Quantidade do sku adicionado. |
| seller_id | varchar(50) | ID do vendedor alocado para aquele item. |
| item_price | double | Preço do item. É o preço real pelo qual um item foi oferecido ao comprador. |
| added_price | double | Valor total dos itens adicionados ao carrinho. |
| postal_code | varchar(100) | Código postal fornecido pelo comprador no carrinho. |
| country | varchar(50) | País do endereço do comprador. Código ISO de três letras. |
| item_availability | varchar(40) | A disponibilidade do item. Se a disponibilidade for diferente de 'available', o item está indisponível. A disponibilidade é medida no momento em que um item é adicionado ao carrinho, desde que o carrinho tenha recebido um código postal. Se um item for adicionado antes que o comprador tenha fornecido um código postal, a disponibilidade é calculada no momento em que o comprador fornece o código postal. Valores possíveis: <ul> available: o item está disponível</ul> <ul> withoutStock: nenhum vendedor tem estoque para este item </ul> <ul> cannotBeDelivered: alguns vendedores têm estoques para este item, mas não há rota de entrega disponível para o código postal</ul> <ul> withoutPriceFulfillment: o vendedor alocado tem um preço mal configurado para o item </ul> <ul> maxNumberOfSellersReached: o número total de vendedores no carrinho está acima do parâmetro maxNumberOfSellers </ul> <ul> unavailableItemFulfillment: o vendedor que cumpre o item não retornou uma resposta válida para o item </ul> |
| has_delivery_channel_delivery | boolean | Se aquele item está disponível para entrega ou não. |
| has_delivery_channel_pickup | boolean | Se aquele item está disponível para retirada ou não. |
| is_item_addition | boolean | Campo obsoleto. |
| is_item_unavailability | boolean | Campo obsoleto. |
| is_last_state | boolean | Coluna auxiliar usada para a carga incremental. |
| batch_id | varchar(13) | Coluna auxiliar usada para a carga incremental. |
| record_created_at | timestamp | Timestamp de quando a entrada foi adicionada à tabela. |

### Tabela: cart_availability_silver

Os campos da tabela são descritos abaixo:

| Nome da coluna | Tipo da coluna | Descrição da coluna |
|---|---|---|
| main_account_name | varchar(50) | A main_account na qual o carrinho foi criado. Esta é a main_account do marketplace no qual o pedido está sendo criado, não do vendedor que está cumprindo o pedido. |
| account_name | varchar(50) | O store_name (ou subconta) no qual o carrinho foi criado. Este é o store_name do marketplace no qual o `order_form` é criado, não do vendedor que está cumprindo o pedido. |
| order_form_id | varchar(40) | Identificador único do carrinho onde os itens estão sendo adicionados. |
| updated_at | timestamp | Timestamp do evento de adição do item ao carrinho. Observe que: <ol> 1. Se um item for removido e adicionado novamente ao carrinho, apenas o primeiro evento é considerado.</ol> <ol> 2. É possível em alguns casos raros que múltiplas entradas do mesmo item sejam adicionadas a um carrinho. </ol> Nesses casos, apenas o primeiro evento para o item é considerado. |
| af_session_id | varchar(127) | ID de sessão da aplicação Activity Flow relacionada ao carrinho. |
| country | varchar(50) | País do endereço do comprador. Código ISO de três letras. |
| postal_code | varchar(100) | Código postal fornecido pelo comprador no carrinho. |
| sales_channel | integer | Atributo usado pelo comerciante para definir as condições de oferta de um produto. Também conhecido como política comercial. |
| added_price | double | O valor total dos itens adicionados àquele carrinho. É a soma do valor de todos os itens, se múltiplos itens foram adicionados. |
| cart_availability | varchar(50) | O carrinho é considerado "available" apenas se todos os itens nele também estiverem available. Esta disponibilidade é verificada quando um item é adicionado ao carrinho, desde que o comprador já tenha inserido um código postal. Se o código postal ainda não foi inserido, a disponibilidade é determinada no momento em que o comprador o fornece. Se pelo menos um item não estiver disponível, o carrinho em si é marcado como indisponível. Nesse caso, a disponibilidade do carrinho corresponderá ao status de disponibilidade do item indisponível, exceto quando existirem múltiplas razões de indisponibilidade diferentes, então o status do carrinho será multipleUnavailableReasons. <br> Exemplos: <ol> 1. Se dois itens disponíveis forem adicionados, o status do carrinho é available.</ol> <ol> 2. Se um item disponível e um item withoutStock forem adicionados, o status do carrinho é withoutStock.</ol> <ol>3. Se um item withoutStock e um item cannotBeDelivered forem adicionados, o status do carrinho é multipleUnavailableReasons. </ol> <ul> Valores possíveis: - available: todos os itens estão disponíveis. - withoutStock: nenhum vendedor tem estoque para este item. - cannotBeDelivered: alguns vendedores têm estoque para o item, mas nenhuma rota de entrega está disponível para o código postal. - withoutPriceFulfillment: o vendedor alocado tem um preço mal configurado para o item.  - maxNumberOfSellersReached: o número de vendedores no carrinho excede o máximo permitido. - unavailableItemFulfillment: o vendedor que cumpre o item não retornou uma resposta válida. - multipleUnavailableReasons: mais de uma razão de indisponibilidade diferente se aplica ao mesmo tempo. <br> |
| delivery_channel | varchar(33) | Os canais de entrega disponíveis para o carrinho são determinados considerando as opções de entrega de todos os itens nele. <br> Exemplo: <ul>Se o Item 1 estiver disponível apenas para pickup-in-point, e o Item 2 estiver disponível tanto para pickup-in-point quanto para delivery, então o canal de entrega do carrinho é definido como delivery. </ul></br>  Opções possíveis: <ul>- both-delivery-and-pickup-in-point: todos os itens podem ser entregues ou retirados em um ponto de retirada.</ul> <ul>- delivery: a entrega é a única opção disponível para o carrinho.</ul> <ul>- not-delivered: nenhum canal de entrega está disponível, o que significa que o carrinho está indisponível.</ul> <ul>- pickup-in-point: pickup-in-point é a única opção disponível para o carrinho.</ul> <ul>- mixed-channel-only: alguns itens só podem ser entregues, enquanto outros só podem ser retirados em um ponto de retirada.</ul> |
| has_item_unavailability | boolean | Campo obsoleto. |
| has_item_addition | boolean | Campo obsoleto. |
| is_single_item_simulation | boolean | Booleano que identifica se o carrinho tem apenas um item ou não. |
| batch_id | varchar(13) | Coluna auxiliar usada para a carga incremental. |
| record_created_at | timestamp | Timestamp de quando a entrada foi adicionada à tabela. |

### Análises com cart availability

Aqui estão algumas análises que você pode realizar usando as tabelas de cart availability:

- **Medir taxas de sucesso do carrinho**: Calcule a porcentagem de carrinhos criados que permanecem totalmente disponíveis durante o checkout, segmentados por loja, canal de vendas ou geografia.  
- **Identificar padrões de indisponibilidade**: Rastreie quais SKUs, categorias ou vendedores (incluindo Vendedores Externos) causam com mais frequência a indisponibilidade dos carrinhos, e quantifique o impacto financeiro dessas falhas.  
- **Avaliar restrições de entrega**: Compare com que frequência as restrições do canal de entrega (por exemplo, apenas pickup-in-point disponível) contribuem para o abandono, e analise as diferenças entre códigos postais.  
- **Monitorar erros de preço e configuração**: Detecte quando preços mal configurados ou problemas de cumprimento estão tornando os produtos sistematicamente indisponíveis, permitindo uma correção mais rápida.  
- **Comparar tendências sazonais**: Compare as taxas de disponibilidade do carrinho durante períodos de compras de pico (por exemplo, Black Friday) com as operações normais para antecipar pontos de pressão.  

### Correlações com outros dados

A disponibilidade do carrinho também se torna mais poderosa quando combinada com outras fontes de dados:

- **Com Estoque**: Vincular a disponibilidade do carrinho com dados de estoque em tempo real permite identificar com que frequência os carrinhos falham devido a situações de falta de estoque e quantificar vendas potenciais perdidas.  
- **Com Pedidos**: Ao comparar carrinhos indisponíveis com pedidos bem-sucedidos, você pode estimar quanto de receita é perdida porque os carrinhos não puderam ser cumpridos. Isso também ajuda a identificar vendedores ou regiões com desempenho inferior.  
- **Com Navegação**: Ao correlacionar caminhos de navegação com resultados do carrinho, você pode entender se certos percursos de usuário são mais propensos a terminar em carrinhos indisponíveis, o que é crucial para a otimização do funil.  
