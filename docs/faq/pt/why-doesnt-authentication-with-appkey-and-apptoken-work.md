---
title: 'Por que a autenticação utilizando appKey e appToken não funciona? '
id: 3oReWVLDgLjXoKsMrUSy4m
status: PUBLISHED
createdAt: 2019-03-12T21:06:30.165Z
updatedAt: 2023-03-28T20:26:16.769Z
publishedAt: 2023-03-28T20:26:16.769Z
firstPublishedAt: 2019-03-12T21:13:49.769Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: TAUXpa4XWCsIaUOoksGIE
slug: por-que-a-autenticacao-utilizando-appkey-e-apptoken-nao-funciona
locale: pt
legacySlug: por-que-a-autenticacao-do-request-utilizando-appkey-e-apptoken-nao-funciona
---

Na VTEX, a autenticação de integrações via [APIs](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-list-of-rest-apis) é realizada por meio de [appKey e appToken](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication). Entretanto, existem alguns casos em que uma integração pode falhar por conta de erros relacionados a essas chaves de autenticação. Veja abaixo como solucionar alguns problemas comuns relacionados à autenticação por appKey e appToken:

## Associação de appKey e appToken

Ao acessar __Perfis de acesso__, dentro do menu de [Configurações da conta]( https://help.vtex.com/tutorial/visao-geral-configuracoes-da-conta--6USYxLuzNt4uAkvjdPF7I8), é possível configurar [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) com níveis de acesso diferentes à plataforma.

Todo par de appKey e appToken quando criado não é vinculado a um perfil de acesso. Dessa forma, __é necessário vincular ambas chaves a um perfil de acesso desejado__. 

Um dos motivos de erro na autenticação pode ser a falta de vínculo das chaves criadas a um perfil de acesso. Outro possível erro é a vinculação do appKey e appToken um perfil que, embora cadastrado, não tenha acesso para exercer determinada ação na plataforma.

<div class="alert alert-info">
Apenas o <a href="https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy">usuário Titular</a> tem permissão para manipular as chaves, isso é, criar a appKey e o appToken usados em integrações com a loja.
</div>

## Erro de digitação

Ambas chaves devem ser preenchidas nos seus respectivos campos, sem espaçamento e mantendo a caixa das letras - __case sensitive__. Um pequeno erro no preenchimento pode impedir o funcionamento da integração.

Você pode verificar possíveis erros de digitação nos campos no módulo __Gerenciamento de conta__, em [Usuários](https://help.vtex.com/pt/tutorial/gerenciando-usuarios--tutorials_512). 

<div class="alert alert-warning">
O appToken é exibido para o usuário apenas no momento da sua criação, não podendo ser recuperado posteriormente.
</div>

