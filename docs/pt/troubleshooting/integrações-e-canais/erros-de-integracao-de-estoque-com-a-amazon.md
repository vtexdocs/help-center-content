---
title: 'Erros de integração de estoque com a Amazon'
id: 3t05cXK2vDbKCA6rifMMWj
status: PUBLISHED
createdAt: 2021-10-28T13:54:04.797Z
updatedAt: 2026-10-07T22:20:00.000Z
publishedAt: 2023-03-29T14:38:55.490Z
firstPublishedAt: 2021-10-28T18:41:30.731Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: amazon-inventory-integration-errors
legacySlug: erros-de-integracao-de-estoque-com-a-amazon
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

Quando ocorre um erro de integração de estoque entre a **Amazon** e uma loja, uma mensagem de erro é informada para cada SKU. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Estoque** ou digite **Estoque** na barra de busca.

Os erros mais comuns de integração de estoque com a Amazon são:

- **ID do seller inválida**
- **SKU fora do catálogo**
- **Marca não aprovada**
- **Uso indevido do campo Marca**
- **Conta inelegível**
- **Acesso a feeds negado**
- **Token inválido**

## Solução

Para corrigir erros de integração de estoque com a Amazon, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Invalid seller id**|O seller ID usado na configuração da integração foi considerado inválido.|Confirme o código correto com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/). No Admin VTEX, acesse **Marketplace > Conexões > Configurações**, clique no ícone de engrenagem do card da Amazon, escolha **Editar configuração**, preencha o campo _Amazon Seller Id_ e clique em **Salvar configuração**. Depois, reprocesse o SKU em **Marketplace > Conexões > Estoque**, clicando em **Ações > Reprocessar**.|
|**This SKU is not in the Amazon catalog. If you are receiving this message after submitting a multi-marketplace inventory file and the designated marketplace for this error is different than the marketplace in which you submitted your file, this error is an indication that the Detail page for this item does not exist in the designated marketplace. Amazon is attempting to create the Detail Page for this item on your behalf. If successful, your listing will be created in the designated marketplace within 48 hours.**|O SKU não foi exportado para o catálogo da Amazon, em geral porque a planilha de mapeamento não foi preenchida corretamente.|Exporte novamente a categoria do SKU, conforme [Envio de produtos para a Amazon](/pt/docs/tracks/envio-de-produtos-para-amazon), e [atualize o estoque](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque). A atualização é refletida automaticamente na Amazon, sem reprocessamento manual.|
|**Amazon must approve your brand before you can use it to list products. Brands should be registered through Brand Registry, but if your brand is not eligible for Brand Registry, you can obtain an exception by contacting Seller Support and mentioning error code 5665.**|A Amazon só veicula o produto depois de aprovar a marca.|Registre a marca no [Cadastro de marcas da Amazon](https://brandservices.amazon.com.br/eligibility). Se a marca não for elegível, conforme a [Política de nome de marca da Amazon](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ), solicite uma exceção pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/) informando o código de erro 5665 e os dados pedidos pela política.|
|**We have identified you may be misusing the Brand field and not complying with the Brand Name Policy. If you believe you are complying with our policy, please contact Seller Support and mention error code 5661.**|A marca do produto foi considerada em desacordo com a política de nome de marca da Amazon.|Confira a [Política de nome de marca da Amazon](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ). Se a origem do problema não ficar clara, entre em contato pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/) e informe o código de erro 5661 e as demais informações pedidas pela política.|
|**The seller does not have an eligible Amazon account to call Amazon MWS.**|A conta da Amazon foi considerada inelegível por dados cadastrais incorretos, problema de token ou violação da política do marketplace.|Entre em contato com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/). Consulte também [Gerenciar Conta da AWS](https://docs.aws.amazon.com/pt_br/accounts/latest/reference/managing-accounts.html) e [Segurança em AWS Gerenciamento de contas](https://docs.aws.amazon.com/pt_br/accounts/latest/reference/security.html).|
|**Access to Feeds. SubmitFeed is denied.**<br>**Feed rejected**|O envio do feed foi negado por pendência ou erro de cadastro, ou porque o token da integração expirou ou foi considerado suspeito.|Entre em contato com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/). Saiba mais sobre [Data feeds](https://docs.aws.amazon.com/pt_br/marketplace/latest/userguide/data-feed.html).|
|**AuthToken is not valid for SellerId and AWSAccountId**<br>**Access denied**|O token foi considerado inválido, por exemplo porque expirou ou houve suspeita de ameaça à segurança.|Trate o token diretamente com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/).|
