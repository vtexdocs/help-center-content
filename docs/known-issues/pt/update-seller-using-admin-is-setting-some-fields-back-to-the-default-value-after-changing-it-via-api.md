---
title: 'Atualizar vendedor usando Admin está definindo alguns campos de volta para o valor padrão depois de modificá-lo via API'
id: 2gtqnZmCW59OKoqRpU3UaQ
status: PUBLISHED
createdAt: 2022-06-30T12:21:23.852Z
updatedAt: 2024-02-16T20:28:26.435Z
publishedAt: 2024-02-16T20:28:26.435Z
firstPublishedAt: 2022-06-30T12:21:24.538Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: atualizar-vendedor-usando-admin-esta-definindo-alguns-campos-de-volta-para-o-valor-padrao-depois-de-modificalo-via-api
locale: pt
kiStatus: No Fix
internalReference: 608120
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Após utilizar as APIs do registro de vendedor para modificar campos como trustPolicy, SecutityPrivacyPolicy, ArchiveId e MerchantName e voltar para a administração de administração de vendedor e salvar o vendedor por lá, as informações desses campos serão ajustadas de volta ao valor padrão.



## Simulação



1. Use a API "Update Seller By Seller Id" e modifique o campo "trustPolicy" para "AllowEmailSharing" ao invés de "Default";
2. Aguarde o tempo de cache e verifique usando a API "Get Seller Data By Id" para ter certeza de que o campo foi atualizado.
3. Vá até a interface de gerenciamento do vendedor na Administração e salve o vendedor por lá (não há necessidade de alterar nada);
4. Aguarde o tempo de cache e verifique usando a API "Get Seller Data By Id" se o campo está de volta ao valor padrão, neste caso "Default";



## Workaround


De momento, não há solução.

