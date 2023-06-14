---
title: 'A CallbackUrl sempre retorna 403 quando a conta do proprietário do conector foi desativada'
id: yHrPuhMrqMJpUQe5zK3p1
status: PUBLISHED
createdAt: 2023-03-21T18:37:46.361Z
updatedAt: 2023-03-21T18:37:46.871Z
publishedAt: 2023-03-21T18:37:46.871Z
firstPublishedAt: 2023-03-21T18:37:46.871Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-callbackurl-sempre-retorna-403-quando-a-conta-do-proprietario-do-conector-foi-desativada
kiStatus: Backlog
internalReference: 775235
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para conectores utilizando nosso PPP, a configuração do conector inclui um campo chamado `accountName` que especifica a conta utilizada para publicar o aplicativo. Normalmente, o valor `accountName` é o mesmo que o nome da conta do parceiro. Entretanto, quando o parceiro publica conectores com sua infra-estrutura, ele utiliza um ponto final específico, que não é relativo; é assim que os conectores que utilizam nossa infra-estrutura IO fazem.

Esta diferença nos métodos de publicação afeta a forma como o portal constrói a "callbackUrl", que utiliza o "nome da conta" para determinar o locatário. Como resultado, a construção do URL é inflexível, e há casos em que a conta associada ao accountName pode estar desativada e incapaz de aceitar solicitações. Isto leva a que cada pedido seja negado com um código 403, já que o gateway sempre utiliza esta conta para construir a URL.


##

## Simulação


Este cenário não pode ser simulado a menos que uma conta desativada esteja disponível.


##

## Workaround


Há algumas soluções para este cenário, incluindo a mudança do nome da conta onde o conector foi publicado e o envio de um novo pedido de publicação para mudar o conector para nossa nova solução de "invólucro". Do lado do provedor, eles podem substituir o locatário pela conta corrente ao solicitar uma ligação de retorno.





