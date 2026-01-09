---
title: 'Pedidos Data Pipeline'
id: 2f3GlRJ5L5IRGVIxOmzrFv
status: PUBLISHED
createdAt: 2024-02-02T17:58:53.962Z
updatedAt: 2025-09-04T16:18:29.713Z
publishedAt: 2025-09-04T16:18:29.713Z
firstPublishedAt: 2024-05-27T19:26:59.238Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: orders-data-pipeline-beta
legacySlug: pedidos-data-pipeline-beta
locale: pt
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados de Pedidos é composto por duas tabelas principais: a `orders_historical` e a `orders_latest`, as tabelas incluem diversos campos `SUPER` englobando uma variedade de informações como itens adquiridos, detalhes de envio, vendedores envolvidos, pagamentos, entre outros.

Devido à natureza de relação 1-para-N entre muitos desses campos `SUPER` e os pedidos, e à quantidade de informações contidas neles, implementamos tabelas auxiliares especializadas, como `orders_shipping` e `orders_items`, para facilitar a gestão desses dados.

Para realizar análises, é comum realizar seleções diretas dentro desses campos `SUPER` no Redshift, destacando partes específicas que desejamos extrair como colunas. Alternativamente, também podemos realizar junções entre uma das tabelas principais (`orders` ou `latest`) e as tabelas auxiliares, utilizando `orderid` como chave de ligação. Esse método permite a extração eficiente de informações específicas, possibilitando uma análise detalhada dos pedidos e de seus componentes associados.  

Nesta seção você encontra as seguintes informações:  

- [Características dos dados de pedidos](#caracteristicas-dos-dados-de-pedidos)
- [Tabela orders_latest](#tabela-orders_latest)
- [Tabela orders_historical](#tabela-orders_historical)
- [Tabela orders_totals](#tabela-orders_totals)
- [Tabela orders_shipping](#tabela-orders_shipping)
- [Tabela orders_sellers](#tabela-orders_sellers)
- [Tabela orders_rateandbenefitsidentifiers](#tabela-orders_rateandbenefitsidentifiers)
- [Tabela orders_payments](#tabela-orders_payments)
- [Tabela orders_packages](#tabela-orders_packages)
- [Tabela orders_items](#tabela-orders_items)
- [Tabela orders_extra_info](#tabela-orders-extra-info)
- [Tabela orders_custom_fields](#tabela-orders-custom-fields)
- [Tabela orders_custom_apps](#tabela-orders-custom-apps)
- [Análise com dados de pedidos](#analises-com-dados-de-navegacao)
- [Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados  

| **Característica** | **Descrição** |
|:---:|:---:|
| **Origem do dado** | Os dados do conjunto de Pedidos, são originados do OMS (Order Management System). |
| **Disponibilidade** | Os dados de Pedidos podem ser acessados através do relatório de Orders no Admin da VTEX e também por APIs de Orders. É importante ressaltar que os dados disponibilizados pela API podem não estar estruturados exatamente como neste conjunto de dados do Data Pipeline. |
| **Histórico** | Os dados são mantidos por dois anos, a partir de 2022 para clientes que já utilizam a plataforma VTEX. |
| **Menor intervalo de atualização possível** | Uma hora. |

## Tabela `orders_latest`

A tabela `orders_latest` armazena o status mais recente de cada pedido, incluindo detalhes como data de atualização, ID do pedido e informações do cliente. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| orderid | character varying(16383) | Identificador único do pedido. |
| hostname | character varying(16383) | Nome do host relacionado ao pedido. |
| value | double precision | Valor total do pedido. |
| totals | super | Detalhes agregados sobre os totais do pedido, como subtotal, impostos, descontos, etc. |
| creationdate | timestamp with time zone | Data e hora de criação do pedido. |
| items | super | Informações detalhadas sobre os itens do pedido. |
| clientprofiledata_userprofileid | character varying(65535) | ID do perfil do usuário no sistema de gestão do cliente. |
| shippingdata_address_city | character varying(65535) | Cidade de entrega do pedido. |
| shippingdata_address_state | character varying(65535) | Estado de entrega do pedido. |
| shippingdata_address_country | character varying(65535) | País de entrega do pedido. |
| shippingdata_logisticsinfo | super | Informações logísticas sobre o envio do pedido. |
| sellers | super | Dados sobre os vendedores envolvidos no pedido. |
| storepreferencesdata_countrycode | character varying(65535) | Código do país da loja. |
| storepreferencesdata_timezone | character varying(65535) | Fuso horário da loja. |
| storepreferencesdata_currencycode | character varying(65535) | Código da moeda usada na loja. |
| packages | super | Detalhes sobre as embalagens dos itens do pedido. |
| origin | character varying(16383) | Origem do pedido. |
| iscompleted | boolean | Indica se o pedido está completo. |
| affiliateid | character varying(16383) | ID do afiliado associado ao pedido. |
| status | character varying(16383) | Status atual do pedido. |
| authorizeddate | timestamp with time zone | Data e hora da autorização do pedido. |
| invoiceddate | timestamp with time zone | Data e hora da emissão da fatura do pedido. |
| marketplaceorderid | character varying(16383) | ID do pedido no marketplace. |
| marketplaceservicesendpoint | character varying(16383) | Endpoint de serviços do marketplace. |
| lastchange | timestamp with time zone | Data e hora da última alteração no pedido. |
| marketingdata_utmsource | character varying(65535) | Fonte UTM para fins de marketing. |
| marketingdata_utmmedium | character varying(65535) | Meio UTM para fins de marketing. |
| marketingdata_utmcampaign | character varying(65535) | Campanha UTM para fins de marketing. |
| marketingdata_utmpartner | character varying(65535) | Parceiro UTM para fins de marketing. |
| marketingdata_utmipage | character varying(65535) | Página UTM para fins de marketing. |
| marketingdata_utmipart | character varying(65535) | Parte UTM para fins de marketing. |
| marketingdata_utmicampaign | character varying(65535) | Campanha UTM alternativa para fins de marketing. |
| marketingdata_coupon | character varying(65535) | Código de cupom de desconto aplicado ao pedido. |
| marketingdata_marketingtags | super | Tags de marketing associadas ao pedido. |
| marketplace_name | character varying(65535) | Nome do marketplace associado ao pedido. |
| marketplace_iscertified | super | Indica se o marketplace é certificado. |
| marketplace_baseurl | character varying(65535) | URL base do marketplace. |
| contextdata_loggedin | super | Indica se o usuário estava logado durante a realização do pedido. |
| contextdata_useragent | character varying(65535) | Agente do usuário usado durante a realização do pedido. |
| contextdata_userid | character varying(65535) | ID do usuário que realizou o pedido. |
| rateandbenefitsidentifiers | super | Identificadores de tarifas e benefícios aplicados ao pedido. |
| transactions | super | Detalhes das transações financeiras do pedido. |
| giftcards | super | Informações sobre cartões-presente usados no pedido. |
| saleschannel | character varying(16383) | Canal de vendas pelo qual o pedido foi realizado. |
| batch_id | character varying(13) | Identificador referente ao carregamento dos dados na tabela para controle de qualidade da ingestão de dados |
| sellerorderid | character varying(16383) | ID do pedido atribuído pelo vendedor. |
| ordergroup | character varying(16383) | Grupo de pedidos ao qual este pedido pertence. |
| workflowisinerror | boolean | Indica se houve algum erro no fluxo de trabalho do pedido. |
| clientprofiledata_email | character varying(256) | Email do perfil do cliente associado ao pedido. |
| changesattachment_id | character varying(256) | ID do anexo de alterações do pedido. |
| changesattachment_changesdata | super | Dados de alterações feitas no pedido. |
| shippingdata_postal_code | character varying(256) | Código postal do endereço de entrega do pedido. |
| seller_parent_account|character varying(100)| Indica a conta principal da loja em questão. Se a loja atual for a principal, o valor será nulo.|

## Tabela `orders_historical`

A tabela `orders_historical` armazena um registro completo de todas as atualizações dos pedidos. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| orderid | character varying(16383) | Identificador único para cada pedido, normalmente utilizado como chave primária. |
| hostname | character varying(16383) | Nome do host associado ao pedido, indicando o servidor ou domínio que gerencia o pedido. |
| value | double precision | Valor monetário total do pedido, possivelmente incluindo impostos, descontos e custos de envio. |
| totals | super | Informações agregadas sobre os totais do pedido, possivelmente divididos em subtotais, impostos, descontos, etc. |
| creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo o fuso horário. |
| items | super | Informações detalhadas sobre os itens no pedido, potencialmente incluindo SKU, quantidade, preço e descontos específicos dos itens. |
| clientprofiledata_userprofileid | character varying(65535) | Identificador do perfil do usuário do cliente que realizou o pedido. |
| shippingdata_address_city | character varying(65535) | Parte da cidade do endereço de entrega do pedido. |
| shippingdata_address_state | character varying(65535) | Parte do estado ou região do endereço de entrega do pedido. |
| shippingdata_address_country | character varying(65535) | Parte do país do endereço de entrega do pedido. |
| shippingdata_logisticsinfo | super | Informações logísticas relacionadas ao envio do pedido, possivelmente incluindo detalhes do transportador e informações de rastreamento. |
| sellers | super | Informações sobre os vendedores envolvidos no pedido, que podem incluir IDs e nomes dos vendedores. |
| storepreferencesdata_countrycode | character varying(65535) | Código do país da loja onde o pedido foi realizado. |
| storepreferencesdata_timezone | character varying(65535) | Fuso horário da loja onde o pedido foi realizado. |
| storepreferencesdata_currencycode | character varying(65535) | Código da moeda utilizada na transação do pedido. |
| packages | super | Detalhes sobre a embalagem dos itens do pedido, que podem incluir tipos e dimensões da embalagem. |
| origin | character varying(16383) | Origem do pedido, indicando onde ou como o pedido foi iniciado. |
| iscompleted | boolean | Indica se o pedido foi completado. |
| affiliateid | character varying(16383) | Identificador de um afiliado ou fonte de referência associada ao pedido. |
| status | character varying(16383) | O status atual do pedido, como 'pendente', 'enviado' ou 'completado'. |
| authorizeddate | timestamp with time zone | Data e hora em que o pedido foi autorizado. |
| invoiceddate | timestamp with time zone | Data e hora em que a fatura do pedido foi emitida. |
| marketplaceorderid | character varying(16383) | Identificador do pedido dentro de um marketplace, se aplicável. |
| marketplaceservicesendpoint | character varying(16383) | Endpoint ou URL para serviços de marketplace relacionados ao pedido. |
| lastchange | timestamp with time zone | Data e hora da última alteração feita no pedido. |
| marketingdata_utmsource | character varying(65535) | Parâmetro UTM de fonte em dados de marketing, indicando a origem do tráfego ou campanha. |
| marketingdata_utmmedium | character varying(65535) | Parâmetro UTM de meio em dados de marketing, indicando o meio da campanha (por exemplo, e-mail, social). |
| marketingdata_utmcampaign | character varying(65535) | Parâmetro UTM de campanha em dados de marketing, especificando o nome ou código específico da campanha. |
| marketingdata_utmpartner | character varying(65535) | Parâmetro UTM de parceiro, indicando uma parceria ou colaborador em esforços de marketing. |
| marketingdata_utmipage | character varying(65535) | Parâmetro UTM de página, potencialmente indicando a página específica ou local da campanha. |
| marketingdata_utmipart | character varying(65535) | Parâmetro UTM de parte, potencialmente indicando um componente ou seção específica da campanha de marketing. |
| marketingdata_utmicampaign | character varying(65535) | Parâmetro UTM de campanha alternativo para acompanhamento adicional da campanha. |
| marketingdata_coupon | character varying(65535) | Código de cupom usado, se houver, para descontos no pedido. |
| marketingdata_marketingtags | super | Tags ou palavras-chave associadas aos esforços de marketing do pedido. |
| marketplace_name | character varying(65535) | Nome do marketplace onde o pedido foi realizado, se aplicável. |
| marketplace_iscertified | super | Indica se o marketplace onde o pedido foi realizado é certificado ou reconhecido. |
| marketplace_baseurl | character varying(65535) | URL base do marketplace onde o pedido foi realizado. |
| contextdata_loggedin | super | Indica se o usuário estava logado ao realizar o pedido. |
| contextdata_useragent | character varying(65535) | String do agente do usuário do navegador ou dispositivo usado ao realizar o pedido. |
| contextdata_userid | character varying(65535) | ID do usuário que realizou o pedido. |
| rateandbenefitsidentifiers | super | Identificadores de tarifas e benefícios aplicados ao pedido, como pontos de fidelidade ou descontos de associados. |
| transactions | super | Informações detalhadas sobre as transações financeiras associadas ao pedido. |
| giftcards | super | Informações sobre quaisquer cartões-presente usados no pedido. |
| saleschannel | character varying(16383) | Canal de vendas pelo qual o pedido foi realizado, por exemplo, loja online, loja física. |
| batch_id | character varying(13) | Identificador referente ao carregamento dos dados na tabela para controle de qualidade da ingestão de dados |
| sellerorderid | character varying(16383) | Um ID de pedido atribuído pelo vendedor, diferente do ID principal do pedido. |
| ordergroup | character varying(16383) | O grupo de pedidos ao qual este pedido pertence, usado para agrupar vários pedidos juntos. |
| workflowisinerror | boolean | Indica se houve um erro no fluxo de trabalho de processamento do pedido. |
| clientprofiledata_email | character varying(256) | O endereço de e-mail do cliente associado ao pedido. |
| changesattachment_id | character varying(256) | Identificador único para uma operação de alteração associada ao pedido. |
| changesattachment_changesdata | super | Detalhes sobre alterações feitas no pedido, como adições de itens, remoções ou modificações. |
| shippingdata_postal_code | character varying(256) | O código postal do endereço de entrega do pedido. |
| seller_parent_account|character varying(100)| Indica a conta principal da loja em questão. Se a loja atual for a principal, o valor será nulo.|

## Tabela `orders_totals`

A tabela `orders_totals` fornece um resumo dos valores totais associados a cada pedido, incluindo valor total do pedido, descontos aplicados, e impostos. Veja a seguir os campos que compõem essa tabela.  

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| orderid | character varying(16383) | Identificador único para cada pedido. Comumente unido com a coluna `orderid` da tabela `vtex.orders_latest` para análises cruzadas. |
| hostname | character varying(16383) | Nome do host associado ao pedido, indicando o servidor ou domínio que gerencia o pedido. |
| creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo o fuso horário. |
| lastchange | timestamp with time zone | Data e hora da última alteração feita no pedido, refletindo a mais recente atualização de status ou conteúdo. |
| status | character varying(16383) | Status atual do pedido. Frequentemente unido com a coluna `status` da tabela `vtex.orders_latest` para rastrear mudanças de status. |
| totals_id | character varying(65535) | Identificador único para os totais do pedido, usado para referenciar detalhes específicos do total do pedido. |
| totals_name | character varying(65535) | Nome ou descrição dos totais do pedido, oferecendo uma visão geral do que o total representa (por exemplo, subtotal, impostos, descontos). |
| totals_value | double precision | Valor numérico associado aos totais do pedido, como o valor total, subtotal, impostos, descontos, etc. |
| batch_id | character varying(13) | Identificador referente ao carregamento dos dados na tabela para controle de qualidade da ingestão de dados |

## Tabela `orders_shipping`

A tabela de `orders_shipping` detalha as informações de envio de pedidos, como endereço de entrega, custos de envio e prestadores de serviços logísticos. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| orderid | character varying(16383) | Identificador único para cada pedido. |
| hostname | character varying(16383) | Nome do host associado ao pedido. Frequentemente unido com `hostname` da tabela `vtex.client_registry_gold`. |
| creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo o fuso horário. |
| lastchange | timestamp with time zone | Data e hora da última alteração no pedido. |
| status | character varying(16383) | Status atual do pedido. |
| shippingdata_address_city | character varying(65535) | Cidade no endereço de entrega do pedido. |
| shippingdata_address_state | character varying(65535) | Estado no endereço de entrega do pedido. |
| shippingdata_address_country | character varying(65535) | País no endereço de entrega do pedido. |
| deliveryids | super | Identificadores associados à entrega do pedido. |
| shippingestimate | character varying(65535) | Estimativa do tempo de envio do pedido. |
| pickupstoreinfo_ispickupstore | boolean | Indica se o local de retirada é uma loja física. |
| pickupstoreinfo_friendlyname | character varying(65535) | Nome amigável do local de retirada. |
| pickupstoreinfo_dockid | character varying(65535) | Identificador do local de retirada. |
| deliverychannel | character varying(65535) | Canal de entrega utilizado para o pedido. |
| deliverywindow | character varying(65535) | Janela de tempo estimada para a entrega. |
| sellingprice | double precision | Preço de venda do item no pedido. |
| listprice | double precision | Preço de lista do item no pedido. |
| price | double precision | Preço final do item no pedido. |
| shippingestimatedate | timestamp with time zone | Data estimada para o envio do pedido. |
| selecteddeliverychannel | character varying(65535) | Canal de entrega selecionado para o pedido. |
| selectedsla | character varying(65535) | Acordo de nível de serviço (SLA) selecionado para o pedido. |
| deliverychannels | super | Canais de entrega disponíveis para o pedido. |
| slas | super | SLAs disponíveis para o pedido. |
| pickupdistance | double precision | Distância para o local de retirada do pedido. |
| batch_id | character varying(13) | Identificador referente ao carregamento dos dados na tabela para controle de qualidade da ingestão de dados. |
| shippingdata_postal_code | character varying(256) | Código postal no endereço de entrega do pedido. |

## Tabela `orders_sellers`

A tabela de `orders_sellers` armazena a lista dos vendedores envolvidos em cada pedido. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| orderid | character varying(16383) | Identificador único para cada pedido. Frequentemente unido com a coluna `orderid` da tabela `vtex.orders_historical` para análises cruzadas. |
| hostname | character varying(16383) | Nome do host associado ao pedido, indicando o servidor ou domínio que gerencia o pedido. |
| creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo o fuso horário. |
| lastchange | timestamp with time zone | Data e hora da última alteração feita no pedido, refletindo a mais recente atualização de status ou conteúdo. |
| status | character varying(16383) | Status atual do pedido. |
| id | character varying(65535) | Identificador único, geralmente usado para referenciar um elemento específico dentro de um contexto maior. |
| name | character varying(65535) | Nome ou título do elemento referenciado, fornecendo uma identificação legível por humanos. |
| logo | character varying(65535) | Caminho ou URL para o logotipo associado, frequentemente usado em contextos de branding ou identificação visual. |
| fulfillmentendpoint | character varying(65535) | Endpoint ou URL para serviços de fulfillment, indicando onde as operações de cumprimento de pedidos são gerenciadas. |
| subsellerid | character varying(65535) | Identificador para um subseller ou vendedor secundário associado ao pedido ou operação. |
| batch_id | character varying(13) | Identificador referente ao carregamento dos dados na tabela para controle de qualidade da ingestão de dados. |

## Tabela `orders_rateandbenefitsidentifiers`

A tabela de `orders_rateandbenefitsidentifiers` contém dados sobre promoções e benefícios aplicados aos pedidos. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| orderid | character varying(16383) | Identificador único para cada pedido. |
| hostname | character varying(16383) | Nome do host associado ao pedido, indicando o servidor ou domínio que gerencia o pedido. |
| creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo o fuso horário. |
| lastchange | timestamp with time zone | Data e hora da última alteração feita no pedido, refletindo a mais recente atualização de status ou conteúdo. |
| status | character varying(16383) | Status atual do pedido. |
| rateandbenefitsidentifiers_id | character varying(65535) | Identificador único para os identificadores de taxas e benefícios associados ao pedido. |
| rateandbenefitsidentifiers_name | character varying(65535) | Nome ou título dos identificadores de taxas e benefícios, fornecendo uma identificação clara do benefício ou taxa. |
| rateandbenefitsidentifiers_featured | boolean | Indica se os identificadores de taxas e benefícios são destacados ou têm uma característica especial. |
| rateandbenefitsidentifiers_description | character varying(65535) | Descrição detalhada dos identificadores de taxas e benefícios, explicando seus recursos ou benefícios. |
| batch_id | character varying(13) | Identificador referente ao carregamento dos dados na tabela para controle de qualidade da ingestão de dados. |

## Tabela `orders_payments`

A tabela de `orders_payments` registra detalhes dos métodos de pagamento utilizados. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| orderid | character varying(16383) | Identificador único para cada pedido. Frequentemente unido com a coluna `orderid` da tabela `vtex.orders_latest`. |
| hostname | character varying(16383) | Nome do host associado ao pedido, indicando o servidor ou domínio que gerencia o pedido. |
| creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo o fuso horário. |
| lastchange | timestamp with time zone | Data e hora da última alteração feita no pedido, refletindo a mais recente atualização de status ou conteúdo. |
| status | character varying(16383) | Status atual do pedido. |
| transactions_merchantname | character varying(65535) | Nome do comerciante associado à transação do pedido. |
| group | character varying(65535) | Grupo ou categoria a que o pedido ou elemento pertence. |
| installments | integer | Número de parcelas para o pagamento do pedido. |
| value | double precision | Valor monetário associado à transação ou elemento do pedido. |
| transactions_paymentsystemname | character varying(65535) | Nome do sistema de pagamento utilizado na transação. |
| transactions_paymentsystem | character varying(65535) | Identificador do sistema de pagamento utilizado na transação. |
| giftcards_id | character varying(65535) | Identificador único do cartão-presente utilizado no pedido. |
| giftcards_name | character varying(65535) | Nome do cartão-presente utilizado. |
| giftcards_caption | character varying(65535) | Descrição ou legenda do cartão-presente utilizado. |
| giftcards_value | double precision | Valor monetário do cartão-presente. |
| giftcards_balance | double precision | Saldo restante no cartão-presente após o uso. |
| giftcards_provider | character varying(65535) | Provedor ou emissora do cartão-presente. |
| giftcards_groupname | character varying(65535) | Nome do grupo ou categoria a que o cartão-presente pertence. |
| giftcards_inuse | boolean | Indica se o cartão-presente está em uso ou foi utilizado no pedido. |
| giftcards_isspecialcard | boolean | Indica se o cartão-presente é um tipo especial ou promocional. |
| batch_id | character varying(13) | Identificador referente ao carregamento dos dados na tabela para controle de qualidade da ingestão de dados. |
| transactions_transactionid | character varying(65535) | Identificador único da transação financeira associada ao pedido. |
| transactions_referencevalue | double precision | Valor de referência da transação, possivelmente o valor total antes de descontos ou acréscimos. |

## Tabela `orders_packages`

A tabela de `orders_packages` armazena informações sobre a embalagem e expedição de produtos. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| orderid | character varying(16383) | Identificador único para cada pedido. |
| hostname | character varying(16383) | Nome do host associado ao pedido, indicando o servidor ou domínio que gerencia o pedido. |
| creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo o fuso horário. |
| lastchange | timestamp with time zone | Data e hora da última alteração feita no pedido, refletindo a mais recente atualização de status ou conteúdo. |
| status | character varying(16383) | Status atual do pedido. |
| courier | character varying(65535) | Nome da empresa de courier ou serviço de entrega associado ao pedido. |
| invoicenumber | character varying(65535) | Número da fatura associada ao pedido. |
| invoicevalue | double precision | Valor total indicado na fatura do pedido. |
| invoiceurl | character varying(65535) | URL para acessar a fatura eletrônica do pedido. |
| issuancedate | timestamp with time zone | Data de emissão da fatura do pedido. |
| trackingnumber | character varying(65535) | Número de rastreamento associado à entrega do pedido. |
| invoicekey | character varying(65535) | Chave única identificadora da fatura do pedido. |
| trackingurl | character varying(65535) | URL para rastreamento da entrega do pedido. |
| embeddedinvoice | character varying(65535) | Informações incorporadas ou detalhes da fatura do pedido. |
| type | character varying(65535) | Tipo ou categoria do elemento ou serviço associado ao pedido. |
| courierstatus_delivereddate | timestamp with time zone | Data de entrega do pedido conforme registrado pelo serviço de courier. |
| courierstatus_status | character varying(65535) | Status atual da entrega conforme registrado pelo serviço de courier. |
| courierstatus_finished | boolean | Indica se o processo de entrega foi concluído. |
| courierstatus_data | super | Dados detalhados sobre o status da entrega fornecidos pelo serviço de courier. |
| cfop | character varying(65535) | Código Fiscal de Operações e Prestações associado à transação do pedido. |
| packages_lastchange | timestamp with time zone | Data e hora da última alteração registrada nos pacotes do pedido. |
| volumes | integer | Número total de volumes ou pacotes no pedido. |
| batch_id | character varying(13) | Identificador referente ao carregamento dos dados na tabela para controle de qualidade da ingestão de dados. |

## Tabela `orders_items`

A tabela de `orders_items` armazena detalhes dos itens individuais em cada pedido, incluindo SKU, quantidade, preço e descontos. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| orderid | character varying(16383) | Identificador único para cada pedido. Comumente unido com a coluna `orderid` da tabela `vtex.orders_latest`. |
| hostname | character varying(16383) | Nome do host associado ao pedido, frequentemente unido com colunas de outras tabelas como `vtex.client_registry_gold.hostname`. |
| creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo o fuso horário. |
| lastchange | timestamp with time zone | Data e hora da última alteração feita no pedido. |
| status | character varying(16383) | Status atual do pedido. |
| tax | double precision | Valor do imposto aplicado ao pedido. |
| id | character varying(65535) | Identificador único, frequentemente unido com `sku_id` da tabela `vtex.fulfillment_simulations_ca_silver`. |
| productid | character varying(65535) | Identificador do produto associado ao pedido. |
| quantity | integer | Quantidade do produto no pedido. |
| seller | character varying(65535) | Identificador ou nome do vendedor do produto. |
| sellersku | character varying(65535) | SKU do produto conforme listado pelo vendedor. |
| pricevaliduntil | timestamp with time zone | Data e hora até a qual o preço do produto é válido. |
| name | character varying(65535) | Nome do produto. |
| additionalinfo_brandname | character varying(65535) | Nome da marca do produto. |
| additionalinfo_brandid | character varying(65535) | Identificador da marca do produto. |
| additionalinfo_caregoriesid | character varying(65535) | Identificadores de categorias associadas ao produto. |
| additionalinfo_dimension_cubicweight | double precision | Peso cúbico do produto para fins de envio. |
| additionalinfo_dimension_height | double precision | Altura do produto. |
| additionalinfo_dimension_length | double precision | Comprimento do produto. |
| additionalinfo_dimension_weight | double precision | Peso do produto. |
| additionalinfo_dimension_width | double precision | Largura do produto. |
| price | double precision | Preço do produto. |
| pricetags | super | Tags de preço associadas ao produto, possivelmente incluindo descontos e ofertas. |
| sellingprice | double precision | Preço de venda do produto. |
| listprice | double precision | Preço de lista do produto. |
| imageurl | character varying(65535) | URL da imagem do produto. |
| measurementunit | character varying(65535) | Unidade de medida do produto. |
| unitmultiplier | double precision | Multiplicador de unidade para o produto, usado em cálculos de preço e quantidade. |
| batch_id | character varying(13) | Identificador referente ao carregamento dos dados na tabela para controle de qualidade da ingestão de dados. |
|uniqueid|character varying(65535)|ID único do item em questão, que pode ser usado para unir esta linha com outras tabelas.|

## Tabela `orders_extra_info`

Contém informações gerais do pedido registradas no sistema OMS, incluindo dados de criação, última modificação, identificação do cliente, itens do pedido, dados personalizados, anexos de alterações e controle de lote.  

| Nome da Coluna                      | Tipo da Coluna               | Descrição                                                                                              |
|------------------------------------|-------------------------------|---------------------------------------------------------------------------------------------------------|
| orderid                             | character varying(255)        | Identificador único do pedido no sistema OMS. Usado como chave de ligação com outras tabelas.         |
| hostname                            | character varying(255)        | Host onde o pedido foi criado. Usado com orderid como chave de ligação.                               |
| creationdate                        | timestamp with time zone      | Data e hora em que o pedido foi criado no sistema OMS.                                                |
| lastchange                          | timestamp with time zone      | Data e hora da última modificação feita no pedido.                                                    |
| clientprofiledata_corporatename    | character varying(65535)      | Razão social do cliente em uma venda B2B ou pessoa jurídica.                                          |
| clientprofiledata_corporatedocument| character varying(65535)      | Documento corporativo do cliente (CNPJ/ID Fiscal) em vendas B2B.                                      |
| clientprofiledata_iscorporate      | boolean                       | Indica se o pedido é de um cliente corporativo (pessoa jurídica) ou pessoa física.                    |
| items                               | super                         | Estrutura JSON com informações detalhadas dos itens do pedido.                                        |
| customdata_customapps              | super                         | Estrutura JSON com dados personalizados de apps específicos associados ao pedido.                     |
| customdata_customfields            | super                         | Estrutura JSON com campos personalizados adicionais do pedido.                                        |
| changesattachment_id               | character varying(65535)      | Identificador único de anexos relacionados às alterações no pedido.                                   |
| changesattachment_changesdata      | super                         | Estrutura JSON com dados detalhados sobre alterações e anexos no pedido.                              |
| batch_id                            | character varying(13)         | Identificador de lote de processamento para ingestão e controle de atualização.                       |
| changesattachment_href             | character varying(65535)      | URL ou referência ao anexo relacionado às alterações feitas no pedido.                                |
| has_change_v2                       | boolean                       | Indica se há alterações na nova versão (v2) do anexo de alterações.                                   |

## Tabela `orders_custom_fields`

Armazena os campos personalizados configurados para pedidos no OMS. Inclui o tipo e o valor de cada campo, vinculados a entidades específicas como pedidos ou itens, permitindo maior flexibilidade na modelagem dos dados.  

| Nome da Coluna         | Tipo da Coluna               | Descrição                                                                                  |
|------------------------|-------------------------------|---------------------------------------------------------------------------------------------|
| orderid                | character varying(255)        | Identificador único do pedido no OMS.                                                      |
| hostname               | character varying(255)        | Nome do host/conta onde o pedido foi criado.                                               |
| creationdate           | timestamp with time zone      | Data e hora de criação do pedido no OMS.                                                   |
| lastchange             | timestamp with time zone      | Data e hora da última modificação no pedido.                                               |
| linked_entity_id       | character varying(65535)      | Identificador da entidade à qual o campo personalizado está vinculado.                     |
| linked_entity_type     | character varying(65535)      | Tipo da entidade vinculada (por exemplo: pedido, item etc.).                               |
| field_key              | character varying(65535)      | Nome/chave do campo personalizado (gerado via UNPIVOT).                                    |
| field_value            | character varying(65535)      | Valor correspondente ao campo personalizado.                                               |
| batch_id               | character varying(13)         | Identificador do lote de processamento.                                                    |

## Tabela `orders_custom_apps`

Registra dados personalizados vindos de aplicações específicas integradas ao pedido. Cada entrada representa um campo da aplicação com sua respectiva versão, valor e chave, permitindo rastrear extensões customizadas do OMS.  

| Nome da Coluna         | Tipo da Coluna               | Descrição                                                                                  |
|------------------------|-------------------------------|---------------------------------------------------------------------------------------------|
| orderid                | character varying(255)        | Identificador único do pedido no OMS.                                                      |
| hostname               | character varying(255)        | Nome do host/conta onde o pedido foi criado.                                               |
| creationdate           | timestamp with time zone      | Data e hora de criação do pedido no OMS.                                                   |
| lastchange             | timestamp with time zone      | Data e hora da última modificação no pedido.                                               |
| customapps_id          | character varying(65535)      | Identificador único do aplicativo personalizado.                                           |
| customapps_major       | character varying(65535)      | Versão principal ou classificação do aplicativo personalizado.                             |
| field_key              | character varying(65535)      | Nome/chave do campo no objeto JSON do app (gerado via UNPIVOT).                           |
| field_value            | character varying(65535)      | Valor correspondente à chave do campo.                                                     |
| batch_id               | character varying(13)         | Identificador do lote de processamento.                                                    |

## Análise com dados de Pedidos  

Os dados de Pedidos podem ser empregados nas seguintes análises:  

**- Análise de vendas do ecommerce:** avaliar o volume de vendas, identificar produtos mais vendidos, analisar tendências sazonais e entender o comportamento do consumidor.  
**- Análise de taxa de cancelamento de pedidos:** investigar as razões dos cancelamentos, identificar padrões relacionados a produtos específicos ou problemas logísticos, e desenvolver estratégias para reduzir as taxas de cancelamento.  
**- Performance de SKU:** analisar a performance de SKUs individuais, entender a demanda do mercado, e fazer ajustes no inventário e estratégias de marketing.  

## Correlações com outros dados

O conjunto de dados de Pedidos possui correlações com os seguintes conjuntos do  ecossistema de dados da VTEX:

**- Catálogo:** integração direta para entender como variações no catálogo impactam os pedidos. Por exemplo, mudanças nos SKUs ou descrições de produtos podem influenciar tendências de compra.  
**- Navegação:** os dados de navegação podem ser correlacionados com os pedidos para analisar o comportamento do consumidor e a jornada de compra, ajudando a otimizar a experiência do usuário.  
**- Promoções:** a interação com dados de promoções é crucial para avaliar a eficácia das campanhas promocionais nos volumes e tipos de pedidos.  
**- Transações:** a análise conjunta com dados de transações pode revelar padrões de pagamento, preferências do consumidor e eficiência no processamento de pagamentos.

### Conheça outros Conjuntos de dados

- [Inventário](/pt/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navegação](/pt/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pagamentos](/pt/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)   
- [Preços](/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)
- [Promoção](/pt/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Vale-presente](/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Logs do Bridge](/pt/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

