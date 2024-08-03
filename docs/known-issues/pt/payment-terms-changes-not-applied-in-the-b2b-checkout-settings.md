---
title: 'Alterações nas condições de pagamento não aplicadas nas configurações de checkout B2B'
id: 12PfZx6O0MIUSIFdpQdUdI
status: PUBLISHED
createdAt: 2024-04-18T19:07:22.743Z
updatedAt: 2024-07-25T21:47:29.442Z
publishedAt: 2024-07-25T21:47:29.442Z
firstPublishedAt: 2024-04-18T19:07:23.644Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: alteracoes-nas-condicoes-de-pagamento-nao-aplicadas-nas-configuracoes-de-checkout-b2b
locale: pt
kiStatus: Fixed
internalReference: 1019548
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A atualização das condições de pagamento na UI de detalhes da organização para uma organização não se aplica às configurações de checkout B2B.

Esse comportamento ocorre porque a atualização ocorre apenas para a organização, mas as configurações de checkout B2B usam informações do centro de custo, que não são atualizadas pela interface do usuário de detalhes da organização.

## Simulação



- Crie uma organização;
- Na interface do usuário de detalhes da organização, atualize as condições de pagamento;
- Acesse o site, monte um carrinho e acesse o checkout; os Termos de pagamento permanecerão os mesmos

## Workaround



- Acesse o GraphQL IDE e selecione vtex.b2b-organizations-graphql;
- Use a consulta abaixo para obter os detalhes do centro de custo:

    { getCostCenterById (id: "insira aqui o id do centro de custo"){ name addresses{ addressId addressType addressQuery postalCode country receiverName city state street number complement neighborhood geoCoordinates reference } phoneNumber businessDocument customFields{ name type value dropdownValues{ value label } useOnRegistration } stateRegistration paymentTerms{ id name } }}

- Use a consulta abaixo para obter as condições de pagamento da organização:

    { getOrganizationById(id: "insira aqui o id da organização"){ paymentTerms{ id name } }}



- Envie uma mutação para atualizar o centro de custo, adicionando as condições de pagamento da organização à resposta do centro de custo:

    mutation updateCostCenter($id: ID!, $input: CostCenterInput!) { updateCostCenter( id: $id input: $input ){ id status }}{ "id": "", "input": { "name": "", "addresses": [{ "addressId": "", "addressType": "", "addressQuery": "", "postalCode": "", "country": "", "receiverName": "", "city": "", "state": "", "street": "", "number": "", "complement": null, "neighborhood": "", "geoCoordinates": [], "reference": null } ], "phoneNumber": "", "businessDocument": "", "customFields": [], "stateRegistration": "", "paymentTerms": [{"id": "", "name": "" }, {"id": "", "name": "" }] }}







