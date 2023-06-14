---
title: Caracteres especiais não podem ser usados para busca CNPJ em MasterData
id: 4sgob00QXkGYPC3TjSpQeN
status: PUBLISHED
createdAt: 2022-06-21T15:35:26.675Z
updatedAt: 2022-11-25T22:13:02.870Z
publishedAt: 2022-11-25T22:13:02.870Z
firstPublishedAt: 2022-06-21T15:35:27.341Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: caracteres-especiais-nao-podem-ser-usados-para-busca-cnpj-em-masterdata
kiStatus: Backlog
internalReference: 602054
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os tipos de campo CNPJ e CPF são utilizados entre várias partes da VTEX e são campos essenciais presentes também na entidade MasterData CL.

Estes campos devem ser formatados de forma muito específica e seus caracteres especiais (como "." e "/") não são atualmente compatíveis com a busca presente tanto na API ( ) como na IU.





## Simulação



1. Ir para os masterdados de sua conta myaccount.vtexcrm.com.br
2. Nas aplicações listadas acesse seu formulário para "Cleintes".
3. Nos filtros, procurar por "CNPJ".
4. Digite um caractere especial em sua busca, como "/", por exemplo
5. Uma janela "Erro Inesperado" irá aparecer




## Workaround


Utilize campos alternativos para a busca ou somente caracteres aplanuméricos quando pesquisar com cpf e cnpf

