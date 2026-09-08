---
title: 'Eventos disponíveis no Audit'
id: 6r1Mzcu5NmkmmDLJlz9CCZ
status: PUBLISHED
createdAt: 2022-06-22T16:05:16.214Z
updatedAt: 2026-08-25T00:00:00.000Z
publishedAt: 2025-08-25T18:20:54.585Z
firstPublishedAt: 2022-06-22T16:28:52.801Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: events-available-in-audit
legacySlug: eventos-disponiveis-no-audit
locale: pt
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

Confira a seguir a lista dos possíveis eventos disponíveis no [Audit](/pt/docs/tutorials/audit) por aplicação.

* [OMS](#oms)
* [Pedidos](#pedidos)
* [Autorização de pedido](#autorizacao-de-pedido)
* [Estoque e entrega](#estoque-e-entrega)
* [Catálogo (Admin)](#catalogo-admin)
* [Catálogo (API)](#catalogo-api)
* [Catálogo (Control Plane)](#catalogo-control-plane)
* [Preços](#precos)
* [Promoções](#promocoes)
* [Assinaturas](#assinaturas)
* [Carteiras](#carteiras)
* [Vale-presente](#vale-presente)
* [Checkout](#checkout)
* [Portal CMS](#portal-cms)
* [Profile System](#profile-system)
* [License Manager](#license-manager)
* [VTEX ID](#vtex-id)
* [Master Data](#master-data)
* [Headless CMS (Legacy)](#headless-cms)
* [Gerenciamento de sellers](#gerenciamento-de-sellers)
* [Site Editor](#site-editor)
* [Ad Network](#ad-network)
* [Tokens de cartão](#tokens-de-cartao)
* [Unidades organizacionais](#unidades-organizacionais)

> ℹ️ Caso você visualize no Audit algum evento que não esteja listado aqui, por favor nos informe usando a [página de feedback de documentação](https://docs.google.com/forms/d/e/1FAIpQLSfmnotPvPjw-SjiE7lt2Nt3RQgNUe10ixXZmuO2v9enOJReoQ/viewform).

> ⚠️ Nas opções de filtros do Audit, você pode encontrar **Opções de envio**, **Profile System** e **Billing** além das aplicações citadas abaixo. Essas opções se referem a recursos internos ou funcionalidades em fase beta fechada, portanto, a maior parte das contas não terão eventos associados.

## OMS

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Start Handling | Ação que sinaliza para a VTEX que a loja iniciou o manuseio de um  dado pedido. Isso desencadeia a continuidade do fluxo deste pedido. | ID do pedido. |
| Change Status | Mudança de status de um pedido. | ID do pedido. |
| Shipping Notification | Notificação de envio para um dado pedido. | ID do pedido. |
| Payment Notification | Envio de notificação de pagamento para um dado pedido. | ID do pedido. |
| Save Configuration | Alteração de configuração do módulo de Pedidos. | Descrição curta da alteração. |
| Resend Last Email | Reenvio do último email relacionado àquele pedido no Message Center. | ID do pedido. |

## Pedidos

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Change State | Mudança de status do pedido. | ID do pedido. |
| Order Cancellation | Cancelamento de pedido. | ID do pedido. |
| Start Handling | Ação que sinaliza para a VTEX que a loja iniciou o manuseio de um dado pedido. Isso desencadeia a continuidade do fluxo deste pedido. | ID do pedido. |
| Notify Payment | Envio de notificação de pagamento para um dado pedido. | ID do pedido. |
| GetUnmaskedPersonalInformation | Leitura de informação pessoal desmascarada em um pedido. | ID do pedido. |
| UpdatePersonalInformation | Atualização de informação pessoal em um pedido. | ID do pedido. |

## Autorização de pedido

| Ação |  Descrição do evento |  Detalhes do evento |
|---|---|---|
| Create Rule |  Criação de regra de divergência de valores. | ID da regra. |
| New Dimension |  Criação de dimensões para aprovações de pedidos, como intervalo do valor do pedido, lista de e-mails autorizados a executar a aprovação do pedido, entre outros. | ID da dimensão. |
| Delete Dimension |  Exclusão de dimensões para aprovações de pedidos, como intervalo do valor do pedido, lista de e-mails autorizados a executar a aprovação do pedido, entre outros. | ID da dimensão. |
| Update Dimension |  Atualização de dimensões para aprovações de pedidos, como intervalo do valor do pedido, lista de e-mails autorizados a executar a aprovação do pedido, entre outros. | ID da dimensão. |
| Update Rule |  Edição de regra de divergência de valores. | ID da regra. |
| Delete Rule |  Exclusão de regra de divergência de valores. | ID da regra. |

## Estoque e entrega

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Carrier Create | Criação de transportadora. | ID da transportadora. |
| Carrier Update | Atualização de transportadora. | ID da transportadora. |
| Dock Create | Criação de doca. | ID da doca. |
| Dock Update | Atualização de doca. | ID da doca. |
| Warehouse Update | Atualização de estoque. | ID do estoque. |
| warehouse deactivate | Desativação de estoque. | ID do estoque. |
| Pickup Point Save | Criação ou alteração de ponto de retirada. | ID do ponto de retirada. |
| UPDATE-ITEM-AVAILABILITY | Edição de disponibilidade de um item. | Quantidade anterior e nova do item, ID do SKU e ID do estoque. Exemplo: `The quantity of 17_andreia-estoque-sp was updated from 30.0 to 200.0.` |
| item-availability-delete | Exclusão da disponibilidade de um item. | ID do SKU e ID do estoque. Exemplo: `112233_andreia-estoque-sp was deleted.` |
| Item Availability Update | Edição de disponibilidade de um item. | Quantidade anterior e nova do item, ID do SKU e ID do estoque. Exemplo: `The quantity of 17_andreia-estoque-sp was updated from 30.0 to 200.0.` |
| Pickup Point Delete | Exclusão de ponto de retirada. | ID do ponto de retirada. |
| Carrier New Freight Values | Edição de planilha de frete. | ID da política de envio. |
| Holiday Update | Edição de feriado. | ID do feriado. |
| Polygon Create | Criação de polígono. | ID do polígono. |
| Holiday Create | Criação de feriado. | ID do feriado. |
| Holiday Delete | Exclusão de feriado. | ID do feriado. |
| Reservation Create | Criação de reserva de SKU. | Quantidade do item, ID do SKU e ID do estoque. Exemplo: `A quantity of 1.0 from 1_1_1 was reserved.` |
| Reservation Cancel | Cancelamento de reserva de SKU. | Quantidade do item, ID do SKU e ID do estoque. Exemplo: `The reservation of 1.0 from 2000534_1_1 was canceled.` |

## Catálogo (Admin)

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Product Activation | Ativação de produto. Este evento é registrado somente quando a alteração acontece no Admin. Alterações por planilha não são registradas neste evento. | ID do produto. |
| Product Commercial Condition Change | Mudanças em condições comerciais de um produto. | ID do produto e lista de condições alteradas. |
| SKU Attachment Association  | Associação de anexo a SKU. | ID do SKU, nome e ID do anexo. |
| Archive Upload  | Envio de arquivo. | Nome do arquivo. |
| Field Activation  | Ativação de campo de catálogo. | Nome, ID e status do campo. |
| SKU Seller Binding  | Ligação de um SKU a um seller. | ID do seller, ID do SKU no catálogo do seller e ID do SKU no catálogo do marketplace. |
| SKU Seller Unbinding | Remoção de ligação de um SKU a um seller. | ID do seller, ID do SKU no catálogo do seller e ID do SKU no catálogo do marketplace. |
| SKU Seller Removal | Remoção de SKU de seller. | ID do SKU no catálogo do seller. |

## Catálogo (API)

| Ação | Descrição | Detalhes do evento |
|---|---|---|
| SKU Seller Binding Removal | Remoção de vínculo de SKU. | ID do SKU no seller e ID do seller. |
| Seller Update | Atualização de seller. | ID do seller. |
| Seller Creation | Criação de seller. | ID do seller. |
| SKU Seller Binding Activation | Ativação de vínculo de SKU. | ID do SKU no seller e ID do seller. |
| SKU Seller Binding Inactivation | Inativação de vínculo de SKU. | ID do SKU no seller e ID do seller. |
| GiftCard Create | Criação de um vale-presente nativo. | ID do vale-presente e ID do autor da ação. |
| GiftCard List All Paged |  Consulta da listagem de vale-presentes. | ID do autor da ação e os IDs dos vale-presentes. |

## Catálogo (Control Plane)

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Product Activation | Ativação de produto. | ID do produto. |
| Product Deactivation | Desativação de produto. | ID do produto. |
| Admin Product Import | Importação de produto via Admin. | Nome do arquivo de importação. |
| Admin Image Import | Importação de imagem via Admin. | Nome do arquivo de importação. |
| Admin SkuSpecification Import | Importação de especificação de SKU via Admin. | Nome do arquivo de importação. |
| Admin ProductSpecification Import | Importação de especificação de produto via Admin. | Nome do arquivo de importação. |
| Create Brand | Criação de marca. | ID da marca. |
| Update Brand | Atualização de marca. | ID da marca. |
| Create Category | Criação de categoria. | ID da categoria. |
| Update Category | Atualização de categoria. | ID da categoria. |
| Create Attachment | Criação de anexo. | ID do anexo. |
| Update Attachment | Atualização de anexo. | ID do anexo. |
| Delete Attachment | Exclusão de anexo. | ID do anexo. |
| Create Field | Criação de campo de catálogo. | ID do campo. |
| Update Field | Atualização de campo de catálogo. | ID do campo. |
| Create Field Group | Criação de grupo de campos. | ID do grupo de campos. |
| Update Field Group | Atualização de grupo de campos. | ID do grupo de campos. |
| Create Field Value | Criação de valor de campo. | ID do valor do campo. |
| Update Field Value | Atualização de valor de campo. | ID do valor do campo. |
| Delete Non Structured Field | Exclusão de campo não estruturado. | ID do campo. |
| Create Product | Criação de produto. | ID do produto. |
| Update Product | Atualização de produto. | ID do produto. |
| Create Sales Policy | Criação de política comercial. | ID da política comercial. |
| Delete Sales Policy | Exclusão de política comercial. | ID da política comercial. |
| Create Similar Category | Criação de categoria similar. | ID da categoria similar. |
| Delete Similar Category | Exclusão de categoria similar. | ID da categoria similar. |
| Create Product Specification | Criação de especificação de produto. | ID da especificação do produto. |
| Upsert Product Specification | Criação ou atualização de especificação de produto. | ID da especificação do produto. |
| Delete Product Specification | Exclusão de especificação de produto. | ID da especificação do produto. |
| Delete All Product Specifications | Exclusão de todas as especificações de produto. | ID do produto. |
| Create Sku Kit | Criação de kit de SKU. | ID do kit de SKU. |
| Delete Sku Kit | Exclusão de kit de SKU. | ID do kit de SKU. |
| Create Sku Service | Criação de serviço de SKU. | ID do serviço de SKU. |
| Update Sku Service | Atualização de serviço de SKU. | ID do serviço de SKU. |
| Delete Sku Service | Exclusão de serviço de SKU. | ID do serviço de SKU. |
| Create Sku Service Type | Criação de tipo de serviço de SKU. | ID do tipo de serviço de SKU. |
| Update Sku Service Type | Atualização de tipo de serviço de SKU. | ID do tipo de serviço de SKU. |
| Delete Sku Service Type | Exclusão de tipo de serviço de SKU. | ID do tipo de serviço de SKU. |
| Create Sku Service Value | Criação de valor de serviço de SKU. | ID do valor de serviço de SKU. |
| Update Sku Service Value | Atualização de valor de serviço de SKU. | ID do valor de serviço de SKU. |
| Delete Sku Service Value | Exclusão de valor de serviço de SKU. | ID do valor de serviço de SKU. |
| Create Sku Service Type Attachment | Criação de anexo de tipo de serviço de SKU. | ID do anexo de tipo de serviço de SKU. |
| Delete Sku Service Type Attachment | Exclusão de anexo de tipo de serviço de SKU. | ID do anexo de tipo de serviço de SKU. |
| Create Sku Attachment | Criação de anexo de SKU. | ID do anexo de SKU. |
| Delete Sku Attachment | Exclusão de anexo de SKU. | ID do anexo de SKU. |
| Create Sku Complement | Criação de complemento de SKU. | ID do complemento de SKU. |
| Delete Sku Complement | Exclusão de complemento de SKU. | ID do complemento de SKU. |
| Create Supplier | Criação de fornecedor. | ID do fornecedor. |
| Update Supplier | Atualização de fornecedor. | ID do fornecedor. |
| Delete Supplier | Exclusão de fornecedor. | ID do fornecedor. |
| Update Report Status | Atualização de status de relatório. | ID do relatório. |
| Create Sku | Criação de SKU. | ID do SKU. |
| Update Sku | Atualização de SKU. | ID do SKU. |
| Create Sub Collection | Criação de subcoleção. | ID da subcoleção. |
| Update Sub Collection | Atualização de subcoleção. | ID da subcoleção. |
| Delete Sub Collection | Exclusão de subcoleção. | ID da subcoleção. |
| Create Brand Sub Collection | Criação de subcoleção de marca. | ID da subcoleção de marca. |
| Delete Brand Sub Collection | Exclusão de subcoleção de marca. | ID da subcoleção de marca. |
| Create Category Sub Collection | Criação de subcoleção de categoria. | ID da subcoleção de categoria. |
| Delete Category Sub Collection | Exclusão de subcoleção de categoria. | ID da subcoleção de categoria. |
| Create Field Value Sub Collection | Criação de subcoleção de valor de campo. | ID da subcoleção de valor de campo. |
| Delete Field Value Sub Collection | Exclusão de subcoleção de valor de campo. | ID da subcoleção de valor de campo. |
| Create Sku Sub Collection | Criação de subcoleção de SKU. | ID da subcoleção de SKU. |
| Delete Sku Sub Collection | Exclusão de subcoleção de SKU. | ID da subcoleção de SKU. |
| Create Collection | Criação de coleção. | ID da coleção. |
| Update Collection | Atualização de coleção. | ID da coleção. |
| Delete Collection | Exclusão de coleção. | ID da coleção. |
| Bulk Sku Collection | Atualização em massa de coleção de SKUs. | ID da coleção e IDs dos SKUs. |
| Import Insert Sku In Collection | Importação para inserir SKUs em uma coleção. | ID da coleção e nome do arquivo de importação. |
| Import Delete Sku In Collection | Importação para excluir SKUs de uma coleção. | ID da coleção e nome do arquivo de importação. |
| Create Sku Ean | Criação de EAN de SKU. | ID do SKU e EAN. |
| Delete Sku Ean | Exclusão de EAN de SKU. | ID do SKU e EAN. |
| Create Sku Specification | Criação de especificação de SKU. | ID da especificação do SKU. |
| Upsert Sku Specification Value | Criação ou atualização de valor de especificação de SKU. | ID do valor da especificação do SKU. |
| Update Sku Specification | Atualização de especificação de SKU. | ID da especificação do SKU. |
| Delete Sku Specification | Exclusão de especificação de SKU. | ID da especificação do SKU. |
| Delete All Sku Specifications | Exclusão de todas as especificações de SKU. | ID do SKU. |
| Create Sku Attribute | Criação de atributo de SKU. | ID do atributo de SKU. |
| Update Sku Attribute | Atualização de atributo de SKU. | ID do atributo de SKU. |
| Delete Sku Attribute | Exclusão de atributo de SKU. | ID do atributo de SKU. |
| Delete All Sku Attributes | Exclusão de todos os atributos de SKU. | ID do SKU. |
| Create Sku File | Criação de arquivo de SKU. | ID do arquivo de SKU. |
| Update Sku File | Atualização de arquivo de SKU. | ID do arquivo de SKU. |
| Delete Sku File | Exclusão de arquivo de SKU. | ID do arquivo de SKU. |
| Delete All Sku Files | Exclusão de todos os arquivos de SKU. | ID do SKU. |
| Associate Sku File | Associação de arquivo de SKU. | ID do SKU e ID do arquivo de SKU. |
| Disassociate Sku File | Desassociação de arquivo de SKU. | ID do SKU e ID do arquivo de SKU. |
| Reorder Sku Files | Reordenação de arquivos de SKU. | ID do SKU. |
| Copy Sku Files | Cópia de arquivos de SKU. | IDs dos SKUs de origem e destino. |
| Create Product Form | Criação de formulário de produto. | ID do formulário de produto. |
| Update Product Form | Atualização de formulário de produto. | ID do formulário de produto. |
| Move Skus To Product | Movimentação de SKUs para outro produto. | IDs dos SKUs e ID do produto de destino. |
| Enqueue Translation | Enfileiramento de tradução. | ID da tradução. |
| Enqueue Product Translation | Enfileiramento de tradução de produto. | ID do produto. |
| Create Assortment | Criação de sortimento. | ID do sortimento. |
| Update Assortment | Atualização de sortimento. | ID do sortimento. |
| Delete Assortment | Exclusão de sortimento. | ID do sortimento. |
| Add Included Collection Assortment | Coleção incluída adicionada ao sortimento. | ID do sortimento e ID da coleção. |
| Remove Included Collection Assortment | Coleção incluída removida do sortimento. | ID do sortimento e ID da coleção. |
| Add Excluded Collection Assortment | Coleção excluída adicionada ao sortimento. | ID do sortimento e ID da coleção. |
| Remove Excluded Collection Assortment | Coleção excluída removida do sortimento. | ID do sortimento e ID da coleção. |
| Brand Activation | Ativação de marca. | ID da marca. |
| Brand Deactivation | Desativação de marca. | ID da marca. |
| Category Activation | Ativação de categoria. | ID da categoria. |
| Category Deactivation | Desativação de categoria. | ID da categoria. |

## Preços

| Ação | Descrição | Detalhes do evento |
|---|---|---|
| Put Price | Criação ou alteração de preço para um dado SKU. | ID do SKU. |
| Save Price Table | Criação ou alteração de tabela de preços. | Identificação da tabela criada ou alterada. |
| Save Price Tables | Criação ou alteração de múltiplas tabelas de preços. | Identificação das tabelas criadas ou alteradas. |
| Price Deleted | Exclusão de preço para um dado SKU. | ID do SKU. |
| Save Config | Criação ou alteração de configuração de preço. | Identificação da configuração criada  ou alterada. |
| Fixed Price Modified | Alteração de preço fixo. | Identificação do preço fixo alterado. |
| Put Catalog Step | Criação ou alteração de uma regra de preço | Regra de preço criada ou alterada. |
| Deleted Fixed Prices From Table | Exclusão de preço fixo da respectiva tabela de preços. | Identificação da tabela e do preço excluído. |
| Compatibility Post Prices | Alteração de preço utilizando a API de compatibilidade com o contrato do PricingV1 | Identificação do preço alterado. |
| Change Rnb Config  | Alteração de configuração de preços em novas contas. | Nome da conta que fez a alteração. |

## Promoções

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Archive Coupon | Arquivamento de cupom. | Código do cupom. |
| Unarchive Coupon | Desarquivamento de cupom. | Código do cupom. |
| Change Rate Configuration | Alteração de configuração de taxa. | ID da configuração da taxa. |
| Change Promotion Configuration | Alteração de configuração de promoção. | ID da configuração da promoção. |
| Change Coupon Configuration | Alteração em cupom. | Código do cupom. |
| Unarchived Calculator | Desarquivamento de promoção ou taxa. | ID da configuração da promoção ou taxa. |
| Archived Calculator | Arquivamento de promoção ou taxa. | ID da configuração da promoção ou taxa. |

## Assinaturas

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| SubscriptionGroup Update | Atualização de um grupo de assinatura. | ID do grupo de assinatura. |
| Subscription Create | Criação de assinatura. | ID da assinatura. |
| SubscriptionGroup Place Order | Criação de um pedido de assinatura dentro de um grupo de assinatura. | ID do grupo de assinatura. |
| SubscriptionGroup Retry | Execução de uma retentativa de gerar um ciclo de assinatura. | ID do grupo de assinatura. |
| Subscription Delete | Exclusão de assinatura. | ID da assinatura. |
| Plan Create | Criação de um plano de assinatura, onde lojas podem associar itens e SKUs diferentes. | ID do plano de assinatura. |
| Plan Update | Atualização de um plano de assinatura, onde lojas podem associar itens e SKUs diferentes. | ID do plano de assinatura. |
| Subscriber Fetch By Email | Auditoria de quem pesquisou dados do perfil de um cliente da loja que realizou assinaturas, a partir do email do cliente. | ID do usuário que realizou a pesquisa. |
| SubscriptionGroup Create For Order | Criação de um grupo de assinatura para um pedido existente. | ID do grupo de assinatura. |
| Plan Delete | Exclusão de um plano de assinatura. | ID do plano de assinatura. |
| Store Payments Update | Atualização das formas de pagamento que a loja aceita para fazer assinaturas. | Nome de conta. |

## Carteiras

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| TOGGLE_WALLET | Ativar ou desativar uma carteira digital. | toggle-wallet-action |

## Vale-presente

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| LIST_GIFT_CARD | Visualização da lista de vales-presente. | list-gift-card |
| EXPORT_GIFT_CARD | Exportação de vale-presente. | export-gift-card |
| EDIT_GIFT_CARD | Edição de valor de vale-presente. | add-gift-card-value |
| CREATE_GIFT_CARD | Criação de vale-presente. | create-multiple-gift-cards |
| LIST_CARDS_FROM_API | Busca por vale-presentes nativos. | list-gift-card-api |
| LIST_GIFT_CARD_TRANSACTIONS | Visualização das transações de vale-presente. | ID do vale-presente. |
| VIEW_GIFT_CARD_CONDITIONS | Visualização das condições de vale-presente. | ID do vale-presente. |
| CREATE_GIFT_CARD_CONDITIONS | Criação das condições de vale-presente. | ID do vale-presente. |
| EDIT_GIFT_CARD_CONDITIONS | Edição das condições de vale-presente. | ID do vale-presente. |
| EDIT_GIFT_CARD_CONFIGURATION | Edição da configuração de vale-presente. | ID do vale-presente.. |
| CREATE_GIFT_CARD_CANCELLATION | Registro de cancelamento de vale-presente. | ID do vale-presente. |
| CREATE_GIFT_CARD_SETTLEMENT | Registro de liquidação de vale-presente. | ID do vale-presente. |
| INSERT_GIFT_CARD_CREDITS | Inserção de créditos em vale-presente. | ID do vale-presente. |
| GET_UNMASKED_PII | Visualização de informações de identificação pessoal (PII) sem máscara. | ID do vale-presente. |

## Checkout

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| SaveOrderFormConfiguration | Alteração de configurações do OrderForm, objeto que rege o funcionamento do checkout da loja. | Descrição da ação ("configurated OrderForm") |

## Portal CMS

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| File Update | Alteração de arquivo do portal. | Nome e ID do arquivo alterado. |
| File Upload | Upload de arquivo do portal. | Nome do arquivo alterado. |
| File Deleted | Exclusão de arquivo. | Nome e ID do arquivo alterado. |

## Profile System

| Ação | Descrição do evento | Detalhes do evento |
| ---- | ---- | ---- |
| EmailRectification | Alteração de email existente. | ID do usuário cujo email foi alterado. |

## License Manager

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Block AppToken | Bloqueio de chave de aplicação. | Chave de aplicação bloqueada. |
| Accept Sponsor Invite | Aceite de convite para se tornar usuário titular. | ID do usuário que aceitou o convite. |
| Save User | Criação de usuário ou alteração de informações de usuário. | ID do usuário. |
| Save Account | Criação de conta ou edição de informações de conta. | Conta criada ou alterada. |
| Change Role | Edição de perfil de acesso. | Perfil de acesso editado. |
| Delete Role | Exclusão de perfil de acesso. | Perfil de acesso excluído. |
| Unblock AppToken | Desbloqueio de chave de aplicação. | Chave de aplicação desbloqueada. |
| Resource Access Allowed | Acesso a recurso permitido. | Chave do recurso e ID do usuário ao qual foi permitido. |
| Cancel Sponsor Invite | Cancelamento de convite para usuário titular. | ID do usuário convidado. |
| Delete User | Exclusão de usuário. | ID do usuário excluído. |
| Update Binding | Atualização de binding. | Binding atualizado. |
| Resource Access Denied | Acesso a recurso negado. | Chave do recurso e ID do usuário ao qual foi negado. |
| Create New AppToken | Criação de chave de aplicação. | Chave de aplicação criada. |
| Create Sponsor Invite | Criação de convite para usuário titular. | ID do usuário convidado. |
| Create Storefront Custom Resource | Criação de recurso customizado de frente de loja. | Recurso customizado de frente de loja criado. |
| Delete Storefront Custom Resource | Exclusão de recurso customizado de frente de loja. | Recurso customizado de frente de loja excluído. |
| Create Storefront Custom Role | Criação de role customizada de frente de loja. | Role customizada de frente de loja criada. |
| Delete Storefront Custom Role | Exclusão de role customizada de frente de loja. | Role customizada de frente de loja excluída. |
| Update Storefront Custom Role | Atualização de role customizada de frente de loja. | Role customizada de frente de loja atualizada. |

## VTEX ID

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| PasswordCreated | Usuário registra uma senha pela primeira vez na loja ou no Admin VTEX. | ID do usuário. |
| PasswordUpdated | Usuário altera sua senha da loja ou do Admin VTEX. | ID do usuário. |
| UserLogin | Login do usuário no Admin VTEX. | ID do usuário, login do usuário, endereço IP, audience, se o usuário é administrador, provedor de identidade, se MFA foi utilizado, host, cabeçalho X-Forwarded-For, agente de usuário e referer. |
| UserLogout | Logout do usuário do Admin VTEX. | ID do usuário, login do usuário, audience, se o usuário é administrador, host, cabeçalho X-Forwarded-For, agente de usuário e referer. |
| IdentityProviderChanged | Mudança de configurações de provedor de identidade. Por exemplo: criação de integração OAuth customizada, alteração de informações em configuração de OAuth existente, entre outros. | Provedor de identidade. |

## Master Data

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| ReadPersonalInformation | Leitura de informações pessoais. Aplicável apenas a interações com as entidades de dados CL e AD na interface do CRM. | ID do documento. |
| CreatePersonalInformation | Criação de informações pessoais. Aplicável apenas a interações com as entidades de dados CL e AD na interface do CRM. | ID do documento. |
| UpdatePersonalInformation | Atualização de informações pessoais. Aplicável apenas a interações com as entidades de dados CL e AD na interface do CRM. | ID do documento. |
| DeleteDocument | Exclusão de documento. | ID do documento. |
| DeletePersonalInformation | Exclusão de informações pessoais. | ID do documento. |
| SearchPersonalInformation | Busca de informações pessoais. Aplicável apenas a interações com as entidades de dados CL e AD na interface do CRM. | Detalhes da consulta de busca. |
| UpdateSchema | Criação ou edição de schema no Master Data v2. | Nome do schema. |
| DeleteSchema | Exclusão de schema no Master Data v2. | Nome do schema. |

## Headless CMS (Legacy)

| Ação | Descrição | Detalhes do evento |
|---|---|---|
| TRY_PUBLISHING | Tentativa de publicar uma página. | ID do evento. |
| TRY_PUBLISH_IN_RELEASE | Tentativa de publicar um lançamento. | ID do evento. |
| TRY_UNPUBLISHING | Tentativa de publicar uma página. | ID do evento. |
| RESTORE_CONTENT | Restauração de conteúdo. | ID do evento. |
| TRY_UPDATING_DRAFT | Tentativa de atualizar um rascunho. | ID do evento. |
| TRY_UNPUBLISHING_AND_OVERWRITING | Tentativa de despublicar e sobrescrever uma página. | ID do evento. |
| done.invoke.deleteContent | Exclusão de conteúdo. | ID do evento. |
| done.invoke.deleteContentVariant | Exclusão de uma versão do conteúdo. | ID do evento. |
| Create new media | Criação de arquivo de mídia. | ID do evento. |
| Delete media | Exclusão de arquivo de mídia. | ID do evento. |

Na coluna **Ação**, todos os eventos do Headless CMS (Legacy) também apresentam as seguintes informações:

* **CONTENT_ID:** código identificador único do conteúdo.
* **VARIANT_ID:** código identificador único da versão do conteúdo.
* **WORKSPACE:** workspace em que a alteração foi realizada.

## Gerenciamento de sellers

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Update Seller | Edição de um seller. | ID do seller. |
| Save Seller | Criação de um novo seller. | ID do seller. |

## Site Editor

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Schedule change | Agendamento de edição no conteúdo. | ID da entidade alterada. |
| Edit content block | Edição de bloco de conteúdo. | ID da entidade alterada. |
| Create content block | Criação de bloco de conteúdo. | ID da entidade alterada. |
| Activate content block version | Ativação de versão de bloco de conteúdo. | ID da entidade alterada. |
| Reset content block version | Redefinição de versão de bloco de conteúdo. | ID da entidade alterada. |
| Delete content block version | Exclusão de versão de bloco de conteúdo. | ID da entidade alterada. |
| Edit style | Edição de estilo. | ID da entidade alterada. |
| Create new style | Criação de um novo estilo. | ID da entidade alterada. |
| Select main style | Seleção de estilo principal. | ID da entidade alterada. |
| Delete style | Exclusão de estilo. | ID da entidade alterada. |
| Copy binding content | Cópia de conteúdo de binding. | ID da entidade alterada. |

## Ad Network

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| Create ads | Criação de um novo anúncio. | ID do anúncio. |
| Create campaign | Criação de uma nova campanha. | ID da campanha. |
| Update ads | Atualização de um anúncio. | ID do anúncio. |
| Update campaign | Atualização de uma campanha. | ID da campanha. |

## Tokens de cartão

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| CreateToken | Criação de um novo token de cartão. | ID do token de cartão, perfil do cliente associado ao token e ação realizada. |
| GetToken | Leitura de um token de cartão. | ID do token de cartão, perfil do cliente associado ao token e ação realizada. |
| UpdateToken | Atualização de um token de cartão. | ID do token de cartão, perfil do cliente associado ao token e ação realizada. |
| DeleteToken | Exclusão de um token de cartão. | ID do token de cartão, perfil do cliente associado ao token e ação realizada. |

## Unidades organizacionais

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| RemoveValueFromScope | Remoção de valores de um escopo de uma unidade organizacional. | ID do escopo. |
| DeleteOrganizationScope | Exclusão de um escopo de uma unidade organizacional. | ID do escopo e ID da unidade organizacional. |
| DeleteOrganizationScopes | Exclusão de todos os escopos de uma unidade organizacional. | ID da unidade organizacional. |
| SaveOrganizationUnitScope | Criação de escopo para uma unidade organizacional. | ID do escopo criado e ID da unidade organizacional. |
| UpdateOrganizationUnitScope | Atualização de um escopo de uma unidade organizacional. | ID do escopo criado e ID da unidade organizacional. |
| DeleteOrganizationUnit | Exclusão de uma unidade organizacional. | ID da unidade organizacional. |
| SaveOrganizationUnit | Criação de uma unidade organizacional. | ID da unidade organizacional. |
| UpdateOrganizationUnit | Atualização do nome de uma unidade organizacional. | ID da unidade organizacional. |
| MoveOrganizationUnit | Criação de hierarquia entre unidades organizacionais. | ID da unidade organizacional de nível superior e ID da unidade organizacional de nível inferior. |

