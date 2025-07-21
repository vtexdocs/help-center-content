---
title: "Mensagem de erro exibida ao adicionar ou remover coleções em Promoções"
id: 5AsFQ2TTsThgMDDIQumcGO
status: PUBLISHED
createdAt: 2024-09-10T12:49:19.503Z
updatedAt: 2024-09-10T12:49:21.587Z
publishedAt: 2024-09-10T12:49:21.587Z
firstPublishedAt: 2024-09-10T12:49:21.587Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: mensagem-de-erro-exibida-ao-adicionar-ou-remover-colecoes-em-promocoes
locale: pt
kiStatus: Backlog
internalReference: 1095440
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao adicionar ou remover coleções em promoções, uma mensagem de erro é exibida na interface do usuário: "Erro - Não é possível criar critérios de pesquisa!" Apesar da mensagem de erro, as alterações são salvas com êxito e a mensagem "Promoção salva com sucesso!" é exibida abaixo do erro. O problema é observado especificamente ao usar o seletor "_Different from:"_ com mais de uma coleção listada. Notavelmente, o erro não ocorre ao salvar uma promoção com o seletor _"Different from:"_ e apenas uma coleção listada.

## Simulação



1. Acesse a área de gerenciamento de promoções na interface de administração.
2. Crie ou edite uma promoção.
3. Use o seletor "_Different from:"_ para adicionar mais de uma coleção.
4. Tente salvar a promoção.
**Comportamento esperado**: A promoção deve ser salva sem mensagens de erro.
**Comportamento observado**: Uma mensagem de erro "Erro - Não é possível criar critérios de pesquisa!" é exibida, mas a promoção é salva com êxito.
5. Teste o cenário com apenas uma coleção listada no seletor "_Different from:"_.
**Comportamento observado**: O erro não ocorre e a promoção é salva sem problemas.



## Workaround


Na verdade, a promoção é salva corretamente, apesar da mensagem de erro. Os usuários podem ignorar a mensagem de erro e validar se as alterações foram aplicadas reabrindo as configurações da promoção.






