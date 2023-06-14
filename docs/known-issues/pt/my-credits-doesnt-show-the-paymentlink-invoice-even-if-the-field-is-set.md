---
title: Meus Créditos não mostram a fatura PaymentLink mesmo que o campo esteja definido
id: YQ2hkDciJqNZiAfqdNO4t
status: PUBLISHED
createdAt: 2022-03-18T21:29:25.136Z
updatedAt: 2022-11-25T22:04:43.897Z
publishedAt: 2022-11-25T22:04:43.897Z
firstPublishedAt: 2022-03-18T21:29:25.618Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: meus-creditos-nao-mostram-a-fatura-paymentlink-mesmo-que-o-campo-esteja-definido
kiStatus: Fixed
internalReference: 546267
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O link do campo PaymentLink não está sendo exibido na página Meus Créditos, dentro da MyAccount, embora tenha sido configurado e disponível na página de Faturas de Crédito do Cliente, dentro da Admin.


## Simulação



1. Utilize o terminal Change Invoice do Developers Portal para configurar um `paymentLink` para uma Fatura existente
2. Atualize a página de fatura e o link estará disponível no campo "Comentários".
3. Ir para a loja e fazer login
4. Ir para a página Meus Créditos, em Minha Conta
5. O campo "Comentários" estará vazio.



## Workaround


Mesmo sabendo que esta não é a melhor solução, uma solução possível é enviar o campo "observação" com o link, utilizando o endpoint Change Invoice. O campo "Observações" também é adicionado no campo "Comentários", mas pode ser visto dentro da página Meus Créditos.

