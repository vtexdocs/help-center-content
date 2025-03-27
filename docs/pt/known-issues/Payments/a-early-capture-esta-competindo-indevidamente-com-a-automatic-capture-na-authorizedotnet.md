---
title: 'A Early Capture está competindo indevidamente com a Automatic Capture na AuthorizeDotNet'
id: 2IDoJIBiGzhkVZGHurLsnj
status: PUBLISHED
createdAt: 2023-07-20T18:08:30.934Z
updatedAt: 2023-07-20T18:08:31.479Z
publishedAt: 2023-07-20T18:08:31.479Z
firstPublishedAt: 2023-07-20T18:08:31.479Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: early-capture-wrongfully-competing-with-automatic-capture-on-authorizedotnet
locale: pt
kiStatus: Backlog
internalReference: 866068
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Para que possamos entender esse comportamento, primeiro precisamos compreender a diferença entre captura automática e captura antecipada:

**Captura automática:** Chamará a solicitação de liquidação automaticamente assim que a data for atingida, independentemente de a transação ser ou não aprovada pelo adquirente e pela antifraude.

**Captura Antecipada: Chamará a solicitação de liquidação depois que a antifraude aprovar a transação, quando a quantidade de dias configurada for atingida.

Nesse conector, a captura automática é codificada para ocorrer após 4 dias, enquanto a captura antecipada pode ser configurada para um máximo de 10 dias após a aprovação da antifraude. Elas acabam competindo entre si e, se a captura antecipada for configurada com um valor maior que 4 dias, a captura automática sempre ocorrerá mais cedo, portanto, sempre será chamada primeiro.

Isso faz com que os valores permitidos na captura antecipada sejam inúteis se forem maiores que 4 dias.

## Simulação




1. Configure o conector AuthorizeDotNet em sua loja;
2. Defina o campo "Early Capture" (Captura antecipada) como um valor superior a 4 dias;
3. Faça uma transação de teste;
4. Vá para a interface do usuário da transação e veja como o valor da programação para a captura automática é chamado primeiro

## Workaround


N/A





