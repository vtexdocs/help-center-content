---
title: 'Erros de integração de estoque com o Mercado Livre'
id: 3pWA3vRePuGmJ5tquY4fva
status: PUBLISHED
createdAt: 2021-10-04T19:04:23.285Z
updatedAt: 2026-10-07T22:20:00.000Z
publishedAt: 2023-03-29T14:36:13.584Z
firstPublishedAt: 2021-11-01T22:14:56.937Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: mercado-livre-inventory-integration-errors
legacySlug: erros-de-integracao-de-estoque-com-o-mercado-livre
locale: pt
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Logística
  - Integrações
symptomFilters:
  - Erro de sincronização
  - Configuração incorreta
---

Quando ocorre um erro de integração de estoque entre o **Mercado Livre** e uma loja, uma mensagem de erro é informada para cada SKU. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Estoque** ou digite **Estoque** na barra de busca.

Os erros mais comuns de integração de estoque com o Mercado Livre são:

- **Item sem estoque**
- **ProductId não encontrado**
- **Anúncio finalizado**
- **Anúncio sob revisão**
- **Usuário sem autorização**
- **Logística Fulfillment**
- **GTIN obrigatório**
- **Token inválido**
- **Usuário inativo**

## Solução

Para corrigir erros de integração de estoque com o Mercado Livre, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Validation error. Is not possible to activate an item without stock.**|Não há estoque para o item, o SKU está inativo ou o item não está na coleção ou na política comercial do Mercado Livre.|[Atualize a quantidade de SKUs em estoque](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque) e reprocesse o erro em **Marketplace > Conexões > Estoque**, clicando em **Ações > Reprocessar**. Se o erro continuar, verifique o status do SKU em **Catálogo > Produtos e SKUs**. Se necessário, consulte [Associação de SKU à Política Comercial](/pt/docs/tutorials/associacao-de-sku-a-politica-comercial).|
|**ProductId not found.**|As flags **Exibir no site** e **Mostrar produto esgotado** não estão ativas no cadastro do produto, então os SKUs não são integrados.|Ao [preencher os campos de cadastro do produto](/pt/docs/tutorials/adicionar-ou-editar-produto), marque **Exibir no site** e **Mostrar produto esgotado** como ativas.|
|**Estoque não atualizado pois o anúncio no Mercado Livre está finalizado**|O anúncio foi finalizado, por exemplo porque o período de veiculação terminou ou o anúncio descumpre a política do marketplace.|Não é possível atualizar o estoque de um anúncio finalizado. Entre em contato com o Mercado Livre para saber o motivo. Saiba mais em [ajuda com anúncios](https://www.mercadolivre.com.br/ajuda/anuncios_644).|
|**Cannot update item XXX [status:under_review, has_bids:false] variations is not modifiable.**<br>**Cannot update item XXX [status:under_review, has_bids:false] available quantity is not modifiable.**|O anúncio está sob revisão porque violou as condições do Mercado Livre, e o estoque não pode ser integrado enquanto a revisão durar.|Entre em contato com o Mercado Livre para corrigir o anúncio em revisão.|
|**The caller is not authorized to access this resource.**|O usuário está suspenso e a autorização para integrar estoque foi interrompida. A suspensão pode ocorrer por pendência financeira ou expiração do token.|Entre em contato com o Mercado Livre para identificar a causa e reativar a autorização.|
|**A quantidade disponível não é modificável em items com logística Fulfillment**|O seller usa o [Mercado Envios Full](/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full), então o Mercado Livre controla o estoque e a entrega.|Não há ação na VTEX para atualizar o estoque desse anúncio. O controle de quantidade fica com o Mercado Livre.|
|**The attributes [GTIN] are required for category.**|O GTIN, também chamado de EAN na VTEX, é obrigatório para a categoria e está ausente, incorreto ou inválido no cadastro do SKU.|Corrija o código de barras no [cadastro de SKU](/pt/docs/tutorials/adicionar-ou-editar-sku). O GTIN correto deve ser obtido com o fornecedor ou fabricante.|
|**Error validating grant. Your authorization code or refresh token may be expired or it was already used.**<br>**Error converting access token**|O código de autorização ou o token de acesso expirou, já foi usado ou foi considerado inválido.|Trate o token com o Mercado Livre. Depois, [autorize novamente a integração](/pt/docs/tracks/autorizar-integracao-do-mercado-livre-no-painel-da-vtex). Se o erro continuar, refaça a [configuração do cadastro do conector](/pt/docs/tracks/cadastro-da-integracao-do-mercado-livre) e autorize a integração outra vez.|
|**User not active**|O usuário foi desativado no Mercado Livre por dados cadastrais incorretos ou por conduta em desacordo com a política do marketplace.|Entre em contato com o Mercado Livre para reativar o usuário.|
