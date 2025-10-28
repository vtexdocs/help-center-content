---
title: 'Grupos dinâmicos'
id: 51C5xzAp6Y00sK42SAGCSL
status: PUBLISHED
createdAt: 2025-09-12T17:30:05.020Z
updatedAt: 2025-10-03T14:21:49.200Z
publishedAt: 2025-10-03T14:21:49.200Z
firstPublishedAt: 2025-10-03T14:21:49.200Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: dynamic-groups
legacySlug: grupos-dinamicos
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

### Grupo dinâmico e pesquisas de contato

Na aba de contatos, existe uma barra de busca. Essa barra de busca pode ser utilizada para achar e filtrar contatos que obedecem às regras definidas na barra. Normalmente, utilizamos campos de contato e alguns operadores para fazer a expressão de busca, ou se
ja:

Se no meu grupo existe o campo de contato ""Idade"" e o campo de contato ""Sexo"" e eu quero saber quantos contatos do sexo masculino são maiores de 18 anos, posso utilizar a seguinte expressão na busca:

`idade > 18 AND (sexo = ""M"" OR sexo = ""Masculino"")`

Abaixo, seguem alguns dos operadores que podemos utilizar nessas buscas:

- AND (-e- obedece as duas regras ao mesmo tempo)- OR (-ou

- obedece uma das regras)

-  > , >= (Maior que, maior ou igual a)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/est%C3%BAdio/grupos-dinamicos_1.png)

Ou seja, um grupo dinâmico é um tipo de grupo onde não conseguimos adicionar e/ou remover usuários manualmente. Todos os usuários adicionados entram no grupo se obedeceram a regra da busca realizada.

Caso você clique no botão para salvar seu grupo dinâmico, um pop-up aparecerá para escolher o nome do seu novo grupo

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/est%C3%BAdio/grupos-dinamicos_2.png)

Caso você queira editar o nome do grupo, exportar os contatos participantes, deletar o grupo ou até mesmo modificar a regra para participação, o processo é o mesmo que o dos grupos estáticos.
