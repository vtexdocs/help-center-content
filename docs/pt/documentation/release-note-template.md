---
title: 'Release notes'
id: edu0009-pt
status: PUBLISHED
createdAt: 2025-11-25T19:24:22.388Z
updatedAt: 2025-11-25T11:55:00.388Z
publishedAt: 2025-11-25T19:24:22.388Z
firstPublishedAt: 2025-11-25T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugPT: release-notes
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugPT: release-notes
---

Um release note (ou nota de versão) informa os usuários sobre atualizações, melhorias e correções de bugs em uma nova versão do produto. Neste guia, você verá orientações gerais sobre como escrever um release note e o modelo de release note.

> ℹ️ Revise as diretrizes em [Melhores práticas para escrever documentação](https://contentguide.vtex.com/docs/documentation/documentation-overview#best-practices-for-writing-documentation).

> ℹ️ Este tipo de conteúdo é somente criado em inglês.

## Como escrever um release note

| **Tema** | **Descrição** |
| --------- | --------------- |
| **Introdução** | <ol><li>Comece o primeiro parágrafo com uma visão geral, explicando a mudança e seu impacto.</li><li>Deixe claro para o leitor como as mudanças apresentadas no release afetarão as operações da loja.</li></ol> |
| **"O que mudou?"** | Explique as alterações feitas na versão. |
| **"Por que fizemos esta mudança?"** | Explique o que motivou a VTEX a realizar a mudança e os problemas solucionados. |
| **"O que precisa ser feito?"** | <ol><li>Oriente os usuários sobre como aproveitar esses novos recursos ou se adaptar às mudanças.</li><li>Adicione um call to action para indicar ao usuário onde encontrar informações adicionais.</li></ol> |

## Modelo de release note

O release note deve ter as seguintes tags no início:

| **Nome da tag** | **Ícone** | **Descrição** |
| ------------ | -------- | --------------- |
| `added`      | `+`      | Novos recursos, funcionalidades ou componentes adicionados à versão. |
| `deprecated` | `➖` | Um recurso, função ou componente que não é mais recomendado para uso. |
| `info` | `ℹ` | Informações relevantes ou atualizações que não estão vinculadas a alterações específicas, mas são importantes para os usuários. |
| `fixed` | `✔` | Bugs ou problemas que foram resolvidos nesta versão. |
| `removed` | `x` | Um recurso, funcionalidade ou componente que foi excluído. |
| `improved` | `^` | Melhorias ou otimizações feitas em funcionalidades ou produtos existentes. |

<details>
<summary><b>Modelo de release note</b></summary>

```md
# Nome da funcionalidade: resumo
 
Criamos/modificamos essa funcionalidade para <incluir o principal benefício> para que você possa <tarefa a ser realizada>.

## O que mudou?

Antes, você precisava/era necessário <como o usuário resolvia o problema>. Agora, você pode/é possível usar <novo botão/tela> para <benefício>.

## Por que fizemos esta mudança?

Para <facilitar a tarefa a ser realizada>, desenvolvemos <assunto>. Este recurso está disponível para <usuários específicos ou todos os usuários?>.

## O que precisa ser feito?
Para <usar este novo recurso>, você deve <instalar algo ou ajustar uma configuração>.

Para saber mais <sobre o recurso/módulo/produto>, confira <o artigo>.
```

</details>

> Veja exemplos de release notes no [Developer Portal](https://developers.vtex.com/updates/release-notes).
