---
title: 'Erro ao aprovar skus que foram rejeitados ou revisados pelo Offer Quality'
id: 7fRMTxq7CFRkyZeK08AGIg
status: PUBLISHED
createdAt: 2023-11-23T13:46:30.453Z
updatedAt: 2024-03-25T12:22:46.687Z
publishedAt: 2024-03-25T12:22:46.687Z
firstPublishedAt: 2023-11-23T13:46:31.370Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: erro-ao-aprovar-skus-que-foram-rejeitados-ou-revisados-pelo-offer-quality
locale: pt
kiStatus: Fixed
internalReference: 940998
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um sku é reprovado nas regras de Qualidade da Oferta criadas pelo Marketplace, ele vai diretamente para a "Guia Revisão" ou "Guia Rejeitado" dos Skus Recebidos.

No entanto, ao tentar aprovar o sku, uma mensagem de erro é retornada: "Desculpe, algo deu errado no Catálogo. Tente novamente ou entre em contato com a VTEX se o problema persistir."

Isso acontece porque o módulo Matcher não conseguiu preencher as informações do produto e do sku depois de enviar o sku para essas guias (você pode verificar isso usando as APIs):
 ![](https://vtexhelp.zendesk.com/attachments/token/0Dti3ak7twOpuVzvzntmPCGit/?name=image.png)

## Simulação



1. Crie uma regra opcional ou obrigatória sobre a qualidade da oferta;
2. Aguarde até que um sku falhe na regra e vá para a guia Review/Rejected (Revisar/Rejeitado);
3. Tente aprovar o sku e receba uma mensagem de erro;
4. Verificar via API se o objeto de correspondência está preenchido como na imagem acima

## Workaround


Aprovar o sku via API passando manualmente as informações corretas do produto e do sku.





