---
title: "Grupos dinâmicos"
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

Grupos dinâmicos permitem segmentar contatos de acordo com critérios definidos em uma busca. Eles são úteis, por exemplo, para reunir contatos com determinada idade, localização ou qualquer outra informação armazenada nos campos de contato.

Diferentemente dos grupos estáticos, os grupos dinâmicos não permitem adicionar ou remover contatos manualmente. A participação no grupo é determinada pela regra de busca: somente os contatos que atendem aos critérios definidos fazem parte dele.

## Criar um grupo dinâmico

Para criar um grupo dinâmico:

1. Acesse a página **Contatos**.
2. Na barra de busca, insira uma expressão usando campos de contato e operadores.
3. Confira os contatos retornados pela busca.
4. Clique no botão para salvar o grupo dinâmico.
5. Na janela exibida, insira um nome para o grupo e confirme.

## Definir uma regra de busca

As regras combinam campos de contato, valores e operadores. Entre os operadores disponíveis, estão:

- `AND`: exige que as duas condições sejam atendidas.
- `OR`: exige que pelo menos uma das condições seja atendida.
- `>`: maior que.
- `>=`: maior ou igual a.

Por exemplo, considere que os contatos tenham os campos `idade` e `sexo`. Para criar um grupo com contatos do sexo masculino maiores de 18 anos, você pode usar a seguinte expressão:

`idade > 18 AND (sexo = "M" OR sexo = "Masculino")`

Nesse exemplo:

- `idade > 18` seleciona contatos com idade acima de 18 anos.
- `(sexo = "M" OR sexo = "Masculino")` aceita qualquer um dos dois valores indicados para o campo `sexo`.
- `AND` determina que as duas condições devem ser atendidas.

Os nomes dos campos e os valores da expressão devem corresponder às informações cadastradas nos contatos.

## Gerenciar um grupo dinâmico

Depois de criar o grupo, você pode:

- Editar o nome.
- Exportar os contatos participantes.
- Excluir o grupo.
- Alterar a regra de participação.

Essas opções de gerenciamento seguem o mesmo processo usado para grupos estáticos.
