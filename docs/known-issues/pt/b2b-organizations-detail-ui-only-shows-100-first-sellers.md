---
title: 'A interface de usuário detalhada das organizações B2B mostra apenas 100 primeiros vendedores'
id: 6gZm70bIF0p92u6WtDZqdO
status: PUBLISHED
createdAt: 2024-01-15T21:29:19.105Z
updatedAt: 2024-08-26T13:48:07.233Z
publishedAt: 2024-08-26T13:48:07.233Z
firstPublishedAt: 2024-01-15T21:29:19.660Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: a-interface-de-usuario-detalhada-das-organizacoes-b2b-mostra-apenas-100-primeiros-vendedores
locale: pt
kiStatus: Fixed
internalReference: 966450
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A interface de usuário de detalhes das organizações B2B mostra apenas os 100 primeiros vendedores; a interface de usuário não tem paginação, tornando impossível selecionar um vendedor se não estiver na primeira página

## Simulação



- Certifique-se de que a conta tenha mais de 100 vendedores registrados;
- Acesse a guia vendedor na interface de usuário de detalhes de organizações B2B;
- Somente os 100 primeiros vendedores serão exibidos

## Workaround



- Execute um getOrganizationById via graphQL usando o aplicativo:

    { getOrganizationById(id:""){ id name tradeName status collections { id } paymentTerms { id } priceTables customFields { name type value useOnRegistration } salesChannel sellers { id name }}}

- Executar uma mutação usando os dados do graphQL anterior:

    mutation { updateOrganization ( id: "", name: "" tradeName: "" status: "active" collections: [] paymentTerms: [] priceTables: [] customFields: [] salesChannel: null sellers: [{ id: "", name: "" }] ) { id }}





