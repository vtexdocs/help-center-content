---
title: CEP como condição em uma promoção não considera o país
id: 5rPGioNAiWaEmAIMQSACaM
status: PUBLISHED
createdAt: 2017-04-05T12:24:01.042Z
updatedAt: 2022-12-22T15:18:27.889Z
publishedAt: 2022-12-22T15:18:27.889Z
firstPublishedAt: 2017-05-26T19:46:14.665Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_41
tag: Pricing & Promotions
slug: cep-como-condicao-em-uma-promocao-nao-considera-o-pais
kiStatus: Backlog
internalReference: 
---

## Sumário

Quando preencher o campo CEP como condição na promoção não é possível selecionar o país, o que prejudica a criação de promoções.

Esse campo não tem um tratamento de UI, como uma máscara ou trava de validação de quantidade de caracteres, o que afeta a usabilidade do recurso.


## Simulação

- Acessar o módulo __Pricing__
- Cadastrar promoção
- Colocar CEP como condição da promoção
- Cadastre um CEP de São Paulo (04500000) sem o zero inicial (4500000) 

O efeito disso é que outra região (45000000) receberá o benefício.

__OBS__: O módulo Logistics já entende que se um CEP do Brasil é preenchido com 7 caracteres, um 0 deve ser colocado no início da cadeia, e não no fim. __Este problema conhecido é restrito ao ambiente de promoção.__


## Workaround

Não temos uma medida paliativa para esse cenário. O que pode ser feito é o preenchimento dos CEPs com muito cuidado para que não falte nenhum caractere e assim não ocorra o cenário exposto acima.

