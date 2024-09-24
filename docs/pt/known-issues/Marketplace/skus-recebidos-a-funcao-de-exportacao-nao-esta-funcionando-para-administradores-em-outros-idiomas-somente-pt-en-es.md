---
title: 'Skus recebidos: A função de exportação não está funcionando para administradores em outros idiomas (somente PT, EN, ES)'
id: 2fV4YP1dpdQRBYqT9S7Lzi
status: PUBLISHED
createdAt: 2022-09-29T14:23:38.774Z
updatedAt: 2023-05-08T18:23:20.798Z
publishedAt: 2023-05-08T18:23:20.798Z
firstPublishedAt: 2022-09-29T14:23:46.858Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-export-function-not-working-for-admins-in-other-languages-only-pt-en-es
locale: pt
kiStatus: Fixed
internalReference: 668122
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O recurso de exportação para recuperar uma planilha com os skus pendentes, aprovados ou rejeitados por vendedor não está funcionando quando o administrador está definido para qualquer outro idioma que não seja PT, EN, ES.

A mensagem de erro que aparece é genérica. Um exemplo de mensagem em francês é:
`Une erreur s'est produite lors de l'exportation de la feuille, veuillez réessayer.`

## Simulação



1. Defina o administrador para um idioma diferente de PT, EN ou ES;
2. Vá para o módulo Received Skus;
3. Selecione um vendedor e exporte os skus na área pendente, aprovada ou rejeitada;
4. Verifique se aparecerá um erro genérico.



## Workaround


Altere o idioma do administrador para PT, EN ou ES e exporte a planilha.






