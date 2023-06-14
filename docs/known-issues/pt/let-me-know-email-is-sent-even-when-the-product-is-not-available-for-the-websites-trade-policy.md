---
title: Email de "Avise-me" é enviado mesmo quando o produto não está disponível para a política comercial do site
id: 577r3i32P5Yv9QIfVR5AYP
status: PUBLISHED
createdAt: 2021-02-22T20:44:52.444Z
updatedAt: 2022-12-22T20:40:56.942Z
publishedAt: 2022-12-22T20:40:56.942Z
firstPublishedAt: 2021-03-17T22:31:13.386Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: email-de-aviseme-e-enviado-mesmo-quando-o-produto-nao-esta-disponivel-para-a-politica-comercial-do-site
kiStatus: Backlog
internalReference: 
---

## Sumário

O cadastro de __Avise-me__ não considera a política comercial do cliente quando notifica a disponibilidade do item por email.

Ou seja, se o cliente se cadastrar no formulário __Avise-me__ através da política comercial 1 e se, no mesmo momento, o SKU possuir disponibilidade na política comercial 2, na próxima vez que o produto for indexado, o sistema disparará o email anunciando incorretamente a disponibilidade do item.

Se no ato do cadastro o item não possuir disponibilidade em qualquer política comercial, nada acontecerá. Porém, na próxima inclusão de estoque, independente da política comercial, o email será disparado para o usuário cadastrado no __Avise-me__, indicando disponibilidade do item e gerando uma expectativa errada.


## Simulação

1. Considere pelo menos duas políticas comerciais (*1* e *2*).
2. Configure duas docas (*Doca-A*__ e *Doca-B*). Relacione a *Doca-A* à *Política comercial 1* e a *Doca-B* à *Política comercial 2*.
3. Configure dois estoques (*Estoque-A* e *Estoque-B*). Relacione o *Estoque-A* à *Doca-A* e o *Estoque-B* à *Doca-B*.
4. Escolha um SKU e deixe-o ativo.
5. Adicione qualquer quantidade deste SKU no *Estoque-B*, que está relacionado à *Doca-B* e, consequentemente, à *Política comercial 2*.
6. Acesse o site (ou subconta) através da *Política comercial 1* e cadastre-se no __Avise-me__.
7. Force a indexação do SKU utilizado para o teste.
8. Observe que, após alguns instantes, o email de __Avise-me__ chegará, mas o link levará o usuário para o site na *Política comercial 1*, onde o item permanece indisponível. Neste contexto, o email é disparado incorretamente, pois o sistema identifica que há disponibilidade em outra política comercial.

## Workaround

Não existe workaround para este cenário. Se sua loja utiliza mais de uma política comercial na mesma conta ou em subcontas diferentes, o recomendado é não utilizar o recurso de __Avise-me__. Se sua loja utiliza políticas comerciais e estoques exclusivos para marketplaces, também não é recomendado utilizar este recurso.

É possível desenvolver uma integração para controlar este processo, porém o esforço é considerado de moderado a alto.

