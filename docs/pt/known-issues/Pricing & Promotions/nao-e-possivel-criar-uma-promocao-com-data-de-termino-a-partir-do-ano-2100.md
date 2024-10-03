---
title: 'Não é possível criar uma promoção com data de término a partir do ano 2100'
id: hYQQFkOsEMqmg5DMzBAhM
status: DRAFT
createdAt: 2023-05-29T21:43:04.471Z
updatedAt: 2023-05-29T21:43:04.471Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: it-is-not-possible-to-create-a-promotion-with-end-date-from-the-year-2100-onwards
locale: pt
kiStatus: Backlog
internalReference: 833957
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Ao criar uma promoção, se você selecionar uma data final após 2100, a interface do usuário (UI) entenderá que a data final é menor que a data inicial e não será possível salvar a promoção, mesmo que os outros campos estejam preenchidos corretamente.

_*Esse problema não ocorre quando o idioma do administrador selecionado é o português.

## Simulação



1-Acesse o módulo Promoções;
2-Clique em "Create Promotion" (Criar promoção) e selecione um dos tipos de promoção;
3-Selecione qualquer data final a partir do ano 2100 (a interface do usuário mostrará a mensagem "Attention: A data de término não pode ser anterior à data de início");
4-Preencha os outros campos obrigatórios;
5-Tente salvar a promoção (a interface do usuário exibirá o erro "Error - The beginDate must be smaller than the endDate")

## Workaround


Se possível, selecione como data final qualquer ano antes de 2100, como 2099, por exemplo.





mo 2099, por exemplo.





