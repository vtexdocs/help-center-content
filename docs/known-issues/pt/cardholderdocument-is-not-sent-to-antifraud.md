---
title: cardholderDocument não é enviado para o antifraude.
id: 4KiYd2Duw9Njxl96zuIOIX
status: PUBLISHED
createdAt: 2023-05-22T18:24:46.148Z
updatedAt: 2023-05-22T18:24:46.652Z
publishedAt: 2023-05-22T18:24:46.652Z
firstPublishedAt: 2023-05-22T18:24:46.652Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: cardholderdocument-nao-e-enviado-para-o-antifraude
kiStatus: Backlog
internalReference: 829864
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Ao criar o payload a ser enviado para análise antifraude, não estamos instanciando o cardholderDocument de acordo com os dados do doc, Send Antifraud Data, mesmo que a configuração no manifesto seja feita de acordo com a nossa documentação, o comprador será obrigado a colocá-lo no checkout se assim for configurado na afiliação do antifraude, mas em hipótese alguma informará sobre o documento do titular do cartão a ser enviado ao provedor antifraude na análise de risco.


## Simulação



1. Configure o menu suspenso "Cardholder document field" (Campo de documento do titular do cartão) como obrigatório ou opcional;
2. Registre uma regra com o antifraude configurado;
3. Faça uma compra preenchendo as informações do CPF na interface do usuário do cartão no checkout
4. Verifique se, no corpo do Send Anti-fraud Data, o cardholderDocument não é enviado.



## Workaround


Não há nenhuma solução alternativa disponível





