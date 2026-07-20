---
title: 'Master Data'
createdAt: 2018-04-02T19:01:38.026Z
updatedAt: 2026-07-20T00:00:00.000Z
publishedAt: 2025-08-29T14:19:54.707Z
firstPublishedAt: 2018-04-02T20:54:18.272Z
contentType: tutorial
productTeam: Master Data
slugEN: master-data
locale: pt
---

O Master Data é uma solução da plataforma VTEX para banco de dados, que é altamente customizável, permitindo também a criação de aplicações.

Por padrão, o Master Data é usado para armazenar e organizar dados de clientes da sua loja. Ele conta com um poderoso motor de busca, permitindo que você armazene, busque, expanda e personalize dados.

Neste artigo você saberá mais detalhes sobre cada versão disponível do Master Data, conceitos importantes e como utilizar.

> ℹ️ Note que a depender da funcionalidade e versão que deseja utilizar, você deverá entrar em contato com o time de desenvolvimento da sua operação.

## Versões disponíveis

Atualmente existem duas versões disponíveis e você pode escolher aquela que melhor se adequa às necessidades da sua operação. A principal diferença entre as duas é que a v2 não possui interface gráfica, podendo ser utilizada apenas por meio da [API do Master Data v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2), ainda que possua outras funcionalidades relevantes, como o uso de [JSON schemas](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema).

> ℹ️ A VTEX automaticamente salva dados de clientes da sua loja no Master Data v1.

Confira a tabela abaixo para saber mais sobre as funcionalidades de cada versão versões se diferem.

| **Funcionalidade** | **v1** | **v2** | **Saiba mais** |
| :--- | :--- | :--- | :--- |
| Interface gráfica | ✅ Sim | ❌ Não | - |
| API | ✅ Sim | ✅ Sim | - [Master Data API v1](https://developers.vtex.com/docs/api-reference/masterdata-api)<br>- [Master Data API v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2#overview) |
| Importação e exportação de planilhas | ✅ Sim | ❌ Não | - [Importar dados para o Master Data v1](/pt/docs/tutorials/importar-dados-no-master-data-v1)<br>- [Exportar dados do Master Data v1](/pt/docs/tutorials/exportando-dados) |
| Anexos (imagens) | ✅ Sim | ❌ Não | - |
| Triggers | ✅ Sim | ✅ Sim | - [Triggers](#triggers)<br>- [Criando triggers com Master Data v1](/pt/docs/tutorials/criando-trigger-no-master-data)<br>- [Criando triggers com Master Data v2](https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2) |
| JSON Schemas | ❌ Não | ✅ Sim | - [JSON Schemas](http://json-schema.org/)<br>- [Entendendo JSON schemas](https://json-schema.org/understanding-json-schema)<br>- [Começando a trabalhar com JSON schemas no Master Data v2](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema)<br>- [Ciclo de vida do schema no Master Data v2](https://developers.vtex.com/docs/guides/master-data-schema-lifecycle) |
| Propriedades aninhadas | ❌ Não | ✅ Sim | - [Propriedades aninhadas](#propriedades-aninhadas) |
| Entidades de dados | Referenciadas por acrônimos compostos de duas letras maiúsculas. Por exemplo, a entidade 'CL' armazena dados de clientes da loja e 'AD' de endereços. Não podem ser criadas por API. | Referenciadas por seus nomes. Por exemplo, 'Notification'. Só podem ser criadas por API. | - [Entidades de dados](#entidades-de-dados)<br>- [Entidades de dados no Master Data v1](/pt/docs/tutorials/entidade-de-dados)<br>- [Criando relações entre entidades de dados do Master Data v2](https://developers.vtex.com/docs/guides/creating-relationships-between-data-entities-using-api) |
| Campos | Devem ser preenchidos no formato específico configurado na entidade de dados. | A princípio, não há restrição de campos e formatos. A validação do formato acontece por meio de JSON schemas. | - [Tipos de campos no Master Data v1](/pt/docs/tutorials/entidade-de-dados#entendendo-os-tipos)<br>- [JSON schemas](#v2-schemas) |
| Índices | ✅ Sim | ✅ Sim | - [Configurar índices no Master Data v1](/pt/docs/tutorials/indices-no-master-data)<br>- [Configurar índices com a API do Master Data v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2#put-/api/dataentities/-dataEntityName-/indices) |

> ❗ Note que as entidades de dados das duas versões são independentes, mesmo que algumas possam ser análogas. Isso significa que um dado criado em uma entidade da v1 não pode ser consultado nem editado usando recursos da v2 e vice versa.

## Componentes básicos

Ambas as versões do Master Data utilizam alguns componentes básicos, podendo ser equivalentes a conceitos encontrados em outras soluções de base de dados, com outros nomes como registro ou tabela. Abaixo você encontra mais detalhes sobre:
- [Entidades de dados](#entidades-de-dados)
- [Documentos](#documentos)
- [Campos](#campos)
- [Índices](#indices)

### Entidades de dados

Entidades de dados são como tabelas onde são registrados documentos e campos.

Entidades de dados do Master Data v1 são referenciadas por acrônimos compostos de duas letras maiúsculas. Na v2, você pode usar o nome da entidade de dados. Por exemplo, na v1 a entidade `CL` armazena dados de clientes da loja e a `AD` guarda dados dos endereços de clientes. Entidades equivalentes na v2 podem ser referenciadas com nomes como `Client` e `Address`.

Em uma data entidade de dados, as informações se estruturam em [documentos](#documentos) e [campos](#campos).

### Documentos

Documentos são registros em uma entidade de dados. Se entidades de dados são como tabelas, cada documento é uma linha em uma tabela.

Por exemplo, dentro de uma entidade que armazena dados de clientes da loja, como `CL` ou `Client`, cada documento contém informações de um cliente.

Cada documento tem um ID gerado automaticamente pela plataforma no momento da sua criação, um código único que identifica aquele registro.

### Campos

Os atributos que compõem documentos do Master Data são chamados de campos. Na comparação de entidades de dados como tabelas, podemos pensar nos campos como as colunas de uma tabela.

Por exemplo, em uma entidade que guarda dados de clientes da loja, como `CL` ou `Client`, podemos preencher campos como **nome**, **email**, **data de nascimento** e **documento**.

No Master Data v1, campos devem ser preenchidos no formato específico configurado na entidade de dados. Saiba mais sobre os [tipos de campos no Master Data v1](/pt/docs/tutorials/entidade-de-dados#entendendo-os-tipos).

Já na v2, não há restrição de campos e formatos a princípio. Validação de formato acontece por meio de [JSON schemas](#v2-schemas).

#### Propriedades aninhadas

A v2 do Master Data permite que você estruture os dados com propriedades aninhadas, estrutura frequentemente encontrada no formato [JSON](https://www.json.org/json-en.html). Esse conceito consiste na possibilidade de criar campos compostos de outros campos, para melhor estruturação dos dados. Por exemplo, um perfil de cliente pode ter o campo `Documento` que por sua vez é composto das propriedades `Tipo` e `Número`. Também é possível criar [triggers](#triggers) aninhados.

### Índices

Índices são usados para especificar um documento a ser acessado, indicado por um campo indexado ao invés do seu ID.

Como mencionado acima, cada documento tem um ID gerado automaticamente pela plataforma no momento da sua criação. Caso você queira consultar um documento mas não sabe o seu ID, pode usar índices.

Por exemplo, é possível consultar um documento com informações de um cliente especificando o valor do campo `email` referente ao cliente.

> ℹ️ Saiba mais sobre como [configurar índices no Master Data v1](/pt/docs/tutorials/indices-no-master-data) ou [configurar índices com a API do Master Data v2](https://developers.vtex.com/vtex-rest-api/reference/putindices).

## Triggers

Um trigger do Master Data é um mecanismo que executa uma ação após a criação ou atualização de um documento, dado que satisfeitas as condições estabelecidas na configuração. Estas ações podem ser de três tipos:

- Enviar requisição HTTP.
- Enviar email.
- Salvar documento em outra entidade de dados.

Saiba mais sobre como [configurar triggers no Master Data v1](/pt/docs/tutorials/criando-trigger-no-master-data) ou como [configurar triggers com a API do Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2)

## v2 schemas

Com a v2 do Master Data, você pode definir formatos de dados com JSON schemas. Este formato indica como o Master Data deve validar e indexar documentos.

> ℹ️ Saiba mais sobre [JSON schemas](https://json-schema.org/).

Você pode salvar um documento em qualquer entidade de dados se o conteúdo for um JSON válido. Uma entidade de dados pode ou não ter múltiplos JSON schemas associados.

![Master Data schemas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/conceitos-básicos-do-master-data/master-data_1.jpg)

> ℹ️ Um documento pode ser compatível com múltiplos JSON Schemas, mas também com nenhum.

## Entidades nativas do Master Data

Algumas entidades de dados são criadas automaticamente pela VTEX para suportar funcionalidades nativas da plataforma.

### Entidades nativas do Master Data v1

| **Entidade** | **Descrição** |
|-----------|----------|
| `ad` | Endereços de clientes |
| `ae` |  |
| `al` |  |
| `AS` | Availability Notifier |
| `au` | Log de auditoria |
| `bb` | Buzz billing |
| `bk` | Bucket (chave/valor genérico) |
| `bo` | BridgeOrder |
| `bx` | Buzz extract |
| `cl` | Contas de clientes |
| `CS` | Casino Gift Card |
| `gc` | Gift cards |
| `gt` | Restrições de gift card |
| `hl` | Feriados |
| `il` | Logs internos |
| `iw` | Avisos internos |
| `iy` | Item de disponibilidade |
| `mb` | BridgeOrderMarketplace |
| `od` | Pedidos |
| `rd` | Pedido (espelho) |
| `sb` | BridgeOrderSeller |
| `se` | - |
| `sl` | - |
| `so` | Lojas |
| `SP` | Middleware Smiles Checkout |

### Entidades nativas do Master Data v2

| **Entidade** | **Descrição** |
|-----------|----------|
| `account` | Moeda digital |
| `affiliates` | Afiliados |
| `affiliatesOrders` | Serviço de comissão de afiliados |
| `agentchangeappstate` | Alteração de estado do app pelo agente |
| `aggregateddayorders` | Pedidos agregados por dia |
| `audit` | Entidade de auditoria da v2 |
| `b2b_profiles` | Permissões de storefront |
| `b2b_quote_marketplace` | b2b_quote_marketplace |
| `b2b_roles` | Permissões de storefront |
| `b2b_seller_quote` | b2b_seller_quote |
| `b2b_users` | Permissões de storefront (owner) |
| `badges` | Badges |
| `bulkstatus` | Status em massa |
| `business` | Serviço de piloto automático de vendas |
| `BusinessOrganization` | Easy Setup (seeder B2B legado) |
| `BusinessPermission` | Easy Setup (seeder B2B legado) |
| `BusinessRole` | Easy Setup (seeder B2B legado) |
| `buyerOrgConfiguration` | VTEX B2B Core |
| `buyerOrgMember` | VTEX B2B Core |
| `campaigns` | Serviço de campanhas de opt-in (compartilhado com o listener de campanhas de opt-in) |
| `CANCEL_ORDER_FISCAL_CODE` | Notificação de pedidos por SMS |
| `charge` | Moeda digital |
| `checkoutcustom` | Checkout UI Custom |
| `clients` | Clientes |
| `commissionBySKU` | Serviço de comissão de afiliados |
| `commissioningreportentry` | Entrada de relatório de comissionamento |
| `commissioninvoices` | Comissões financeiras do marketplace |
| `contact_information` | contact_information |
| `cost_centers` | B2B Organizations GraphQL |
| `creditAccount` | Moeda digital |
| `custom_prices` | Preços personalizados (B2B) |
| `customFieldSettings` | Configurações de campos personalizados da v2 |
| `customFieldValues` | Valores de campos personalizados da v2 |
| `dataentitysettings` | Configurações da entidade de dados |
| `defaultValues` | defaultValues |
| `eventinfo` | Worldline Global Collect |
| `eventRegistry` | Spreadsheet Event Broadcaster |
| `evolutionAppsUpdateEvent` | Account Updates |
| `evolutiondeloreanupdateevent` | Evento de atualização do Delorean (Evolution) |
| `evolutionworkspacepromotion` | Promoção de workspace (Evolution) |
| `exemption` | Avalara |
| `externalinvoices` | Comissões financeiras do marketplace |
| `fbeconfiguration` | Configuração de FBE |
| `fulfillment-points` | Admin de capacidade operacional |
| `giftCardList` | Lista de gift cards |
| `import_session` | Importação de produtos |
| `import_session_config` | Importação de produtos |
| `instoreSettings` | Admin do inStore (POS) |
| `interaction` | Rastreador de envios |
| `inventory` | Inventário |
| `itemavailability` | Disponibilidade de item |
| `leyGondolas` | Admin da Ley de Góndolas ARG |
| `logisticsorderinfo` | Informações logísticas do pedido |
| `mcf_admin_app` | Amazon MCF Admin |
| `module` | Serviço de piloto automático de vendas |
| `multiTransaction` | Smiles Payment Provider MD |
| `myWishlist` | Lista de desejos v2 |
| `myWishlists` | myWishlists |
| `notify` | Availability Notifier |
| `onboarding` | Adyen Platforms |
| `onboarding_modifications` | Orders GraphQL |
| `ORDER_FISCAL_CODE` | Notificação de pedidos por SMS |
| `orderInfo` | Octopia (casino) |
| `orders` | Entidade de pedidos da v2 |
| `orders_items` | Itens de pedidos |
| `orders_logistics` | Logística de pedidos |
| `ordersWithExternalPromotions` | External Promotion Monitoring GraphQL |
| `organization_requests` | B2B Organizations GraphQL |
| `organizations` | B2B Organizations GraphQL |
| `packages` | Pacotes |
| `paymentid2c2p` | Pagamento 2C2P |
| `payuStatus` | Conector PayU Europa |
| `pickup_points` | Pontos de retirada |
| `pins` | Sales Performance GraphQL |
| `productInfo` | Octopia (casino) |
| `productReviews` | Avaliações e classificações |
| `productsWithError` | Serviço de monitoramento de produtos |
| `promotionsCron` | Serviço de campanhas de opt-in |
| `promotionsTrack` | Serviço de campanhas de opt-in |
| `proposal` | Serviço de piloto automático de vendas |
| `queuemessagevo` | Objeto de valor de mensagem de fila da v2 |
| `quotes` | B2B Quotes GraphQL |
| `rangeSafelist` | Listener de campanhas de opt-in |
| `report_generations` | Gerações de relatórios |
| `report_maps` | Mapas de relatórios |
| `Reseller` | Easy Setup (seeder B2B legado) |
| `ReturnApp` | ReturnApp |
| `returnRequest` | Return App |
| `scheduler` | Agendador da v2 |
| `schema` | Esquema |
| `sellerInfo` | Vertex O Series |
| `sellersdashboards` | Comissões financeiras do marketplace |
| `shipment` | Rastreador de envios |
| `shopper` | Perfil do comprador da v2 |
| `smilesProductMapping` | Smiles Payment Provider MD |
| `smilesSellerConfiguration` | Smiles Payment Provider MD |
| `smilesTransaction` | Smiles Payment Provider MD |
| `smsMessagesSchema` | Integração de SMS Orange |
| `SNA` | Seller Notification App |
| `srapi` | SRAPI |
| `statisticsdashboards` | Comissões financeiras do marketplace |
| `stores` | Lojas |
| `subscription` | Assinatura da v2 (recurrent commerce) |
| `subscription_cohort` | Cohort de assinaturas |
| `subscription_history` | Histórico de assinaturas |
| `subscription_metric` | Métrica de assinaturas |
| `subscription_orders` | Pedidos de assinaturas |
| `subscription_preferences` | Preferências de assinaturas |
| `subscriptions` | Assinaturas |
| `subscriptions_execution` | Execução de assinaturas |
| `subscriptions_group` | Grupo de assinaturas |
| `subscriptions_thin` | Assinaturas (versão reduzida) |
| `templates` | Serviço de piloto automático de marketing |
| `tms_orders` | Pedidos do TMS |
| `tradePolicyConfig` | Vertex O Series |
| `trainingBanners` | Training Banners App |
| `transaction` | Moeda digital |
| `transportation_order` | Pedido de transporte |
| `undefined` |  |
| `userAffiliation` | Afiliados |
| `UserOrganization` | Easy Setup (seeder B2B legado) |
| `vendors` | Vendors |
| `vendors_carts` | Carrinhos de vendors |
| `views` | Sales Performance GraphQL |
| `vtable` |  |
| `vtex_admin_cms_graphql_builder` | Admin CMS GraphQL builder |
| `vtex_admin_cms_graphql_content` | Admin CMS GraphQL (declarada como nativa da v2) |
| `vtex_admin_cms_graphql_contentVariant` | Admin CMS GraphQL (declarada como nativa da v2) |
| `vtex_admin_media_image` | Admin de mídia (imagem) |
| `vtex_affiliates_affiliates` | Afiliados |
| `vtex_affiliates_commission_service_affiliatesorders` | Serviço de comissão de afiliados |
| `vtex_affiliates_commission_service_commissionbysku` | Serviço de comissão de afiliados |
| `vtex_affiliates_useraffiliation` | Afiliados |
| `vtex_b2b_core_buyerorgconfiguration` | VTEX B2B Core |
| `vtex_b2b_core_buyerorgmember` | VTEX B2B Core |
| `vtex_badges_badges` | Badges |
| `vtex_builder_hub_appid_to_schema` | Builder Hub |
| `vtex_builder_hub_appversion_to_mostrecentschema` | Builder Hub |
| `vtex_connector_payu_payustatus` | Conector PayU Europa |
| `vtex_defense_mode_threats` | Ameaças do Defense Mode |
| `vtex_gift_card_list_giftcardlist` | Lista de gift cards |
| `vtex_innoship` | Innoship |
| `vtex_list_graphql_userlistitems` | Itens de listas de usuários (List GraphQL) |
| `vtex_list_graphql_userlists` | Listas de usuários (List GraphQL) |
| `vtex_list_graphql_users` | Usuários (List GraphQL) |
| `vtex_onboarding_seller_sellerinvitations` | Convites de sellers (onboarding de sellers) |
| `vtex_orders_graphql_onboardingusers` | Usuários de onboarding (Orders GraphQL) |
| `vtex_pagespeed_graphql_top_pages` | Páginas principais (PageSpeed GraphQL) |
| `vtex_pagespeed_graphql_toppages` | Páginas principais (PageSpeed GraphQL) |
| `vtex_pagespeed_graphql_tracked_pages` | Páginas monitoradas (PageSpeed GraphQL) |
| `vtex_pagespeed_graphql_trackedpages` | Páginas monitoradas (PageSpeed GraphQL) |
| `vtex_ppp_stripe_connect_sellerorders` | Pedidos de sellers (Stripe Connect) |
| `vtex_products_monitoring_service_productswitherror` | Serviço de monitoramento de produtos |
| `vtex_return_app_returnrequest` | Return App |
| `vtex_sales_performance_graphql_pins` | Sales Performance GraphQL |
| `vtex_sales_performance_graphql_views` | Sales Performance GraphQL |
| `vtex_spreadsheet_event_broadcaster_eventregistry` | Spreadsheet Event Broadcaster |
| `vtex_wishlist_io_wishlistitems` | Wishlist IO |
| `vtex_wishlist_io_wishlists` | Wishlist IO |
| `wishlist` | Lista de desejos (legado .NET) |
| `wishlistitems` | Wishlist IO |
| `wishlists` | Wishlist IO |

## Entidades de dados personalizadas

Além das [entidades nativas](#entidades-nativas-do-master-data) criadas automaticamente pela VTEX, como `CL` (clientes), `AD` (endereços) e demais entidades padrão da plataforma de comércio, sua operação pode criar entidades de dados personalizadas para armazenar informações específicas do seu negócio.

Entidades personalizadas podem ser criadas:

- Na v1, pelo Admin VTEX. Veja como [criar uma entidade de dados](/pt/docs/tutorials/entidade-de-dados).
- Na v2, exclusivamente via [API do Master Data v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2).

### Cobrança

O uso de entidades nativas é gratuito. O uso de entidades personalizadas é cobrado mensalmente, em faixas que variam conforme o volume total de documentos armazenados. Para fins de cobrança, cada arquivo de até 100KB é contabilizado como um documento.

Para conhecer os valores aplicáveis à sua operação, consulte seu contrato comercial ou entre em contato com o [suporte VTEX](https://help.vtex.com/pt/support).

A cada pagamento realizado durante a vigência do contrato, é concedido um crédito de faturamento equivalente a 2% do valor líquido pago pelos produtos VTEX Commerce Platform e CX Commerce Platform. Os créditos acumulam ao longo do contrato e ficam disponíveis para uso até o seu encerramento.

A medição e a cobrança seguem um ciclo mensal:

- Ao final de cada mês, é gerado um snapshot do volume de documentos armazenados em entidades não nativas.
- Até o dia 30 de cada mês, a VTEX calcula os valores referentes ao uso do Master Data e os créditos aplicáveis para a próxima fatura.

> ℹ️ Para monitorar o volume de documentos em entidades personalizadas ao longo do mês, consulte o dashboard **Master Data usage** no Admin VTEX. Este dashboard é atualizado semanalmente e destinado apenas ao acompanhamento do uso. Para saber como acessá-lo, veja [Consultar o uso do Master Data no Admin VTEX](/pt/docs/tutorials/consultar-o-uso-do-master-data-no-admin-vtex).

> ℹ️ Para consultar o detalhamento de cobranças, veja como [fazer o download das faturas da VTEX](/pt/docs/tutorials/como-fazer-download-faturas-da-vtex).

### Excluir entidade x excluir documentos

Ao tentar reduzir o volume contabilizado no snapshot mensal de cobrança, é importante distinguir a exclusão da **entidade de dados** (estrutura no Admin VTEX) da exclusão dos **documentos** (registros armazenados).

> ⚠️ Excluir uma entidade de dados personalizada pela interface do Master Data v1 remove a definição da entidade, mas **não** exclui os documentos (registros) já armazenados. O volume faturado permanece inalterado até que os registros sejam removidos pela API. Para excluir documentos e reduzir a cobrança, consulte o guia [Deleting documents in Master Data v1](https://developers.vtex.com/docs/guides/deleting-documents-in-master-data-v1) no portal de desenvolvedores.

## Casos de uso

Ambas versões do Master Data são nativamente adequadas para gerenciar dados de clientes da sua loja. Mas como mencionado acima, são extremamente flexíveis, possibilitando atender diversas necessidades da sua loja. Confira abaixo alguns exemplos de aplicação das funcionalidades do Master Data para além do gerenciamento básico de dados de clientes.

### Testes A/B

Com triggers da v2, você pode estabelecer múltiplas ações para um mesmo trigger, configurando a porcentagem de carga que cada ação deve receber. Com isso é possível testar comparativamente o impacto de diferentes automações na sua loja.

Saiba como configurar [testes A/B com Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-an-ab-test-with-master-data-v2-trigger).

### Carrinho abandonado

O Master Data também pode ser utilizado para criar integrações de carrinho abandonado. Ou seja, a realização de ações automáticas sempre que um cliente adicionar produtos no carrinho da sua loja e terminar sua sessão sem finalizar a compra.

Para saber mais veja este guia sobre [configuração de carrinho abandonado](/pt/docs/tutorials/configurar-carrinho-abandonado)
