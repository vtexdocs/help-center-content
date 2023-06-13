---
title:  XML - Símbolo de moeda em campo "Parcelamento"
id: 4s7hBA1MAUgeEC2Q4K8gKM
status: PUBLISHED
createdAt: 2017-06-26T15:22:31.980Z
updatedAt: 2022-12-22T20:48:49.927Z
publishedAt: 2022-12-22T20:48:49.927Z
firstPublishedAt: 2017-06-26T23:18:58.653Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: xml-simbolo-de-moeda-em-campo-parcelamento
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao configurar uma moeda em um XML, a mesma se aplica a todos os campos, exceto o campo **Parcelamento**.

O campo **Parcelamento** sempre mostra a moeda "R$", independentemente do fato de que a moeda configurada seja diferente.

![Parcelamento](//files.slack.com/files-pri/T02BCPD0X-F5WHSHM5E/image.png)

## Simulação

1. Acessar o módulo "Catalog";
2. Acessar o menu "Configuração";
3. Acessar o "XML";
4. Clicar em **Novo XML** (ou modificar um existente clicando no botão **Alterar**);
5. Atribuir um valor diferente de "R$" al campo "Símbolo de moeda nos preços";
6. Marcar "Exibir o conteúdo" no campo "Parcelamento";
7. Taggear o campo "Parcelamento";
8. Clicar no botão __Salvar__";
9. Revisar o XML criado.

## Workaround

Atualmente, para alterar a moeda no campo **Parcelamento** não há uma solução paliativa.

