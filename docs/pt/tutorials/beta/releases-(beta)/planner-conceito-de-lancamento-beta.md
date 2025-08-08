---
title: 'Lançamentos: conceito de lançamento (Beta)'
id: 4pWhQTXG0aIIsi2TYxxRkZ
status: PUBLISHED
createdAt: 2022-09-19T20:49:52.633Z
updatedAt: 2023-02-08T21:13:19.140Z
publishedAt: 2023-02-08T21:13:19.140Z
firstPublishedAt: 2022-09-19T23:25:39.523Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: planner-release-concept-beta
legacySlug: planner-conceito-de-lancamento-beta
locale: pt
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---

<div class="alert alert-info">
  <p>O <strong>Lançamentos</strong> está em fase beta, o que significa que estamos trabalhando para aprimorá-lo. Esta funcionalidade é válida somente para lojas que usam <a href="https://www.faststore.dev/">FastStore</a>.</p>
</div>

O gerenciamento de uma operação de ecommerce requer que o lojista faça uma série de atualizações na loja e muitas vezes elas estão relacionadas entre si. Um exemplo é a realização de uma campanha publicitária, em que diferentes elementos do storefront precisam ser configurados.

O **Lançamentos** é o módulo da VTEX que permite ao lojista [gerenciar seus lançamentos](https://help.vtex.com/pt/tutorial/planner-acoes-em-lancamentos-beta--1zsomdifPEQkdV6RW93JyW), de forma a coordenar o planejamento, criação, agendamento e publicação das alterações na loja. 

Um lançamento significa uma modificação ou um agrupamento de modificações que podem ser publicadas de forma conjunta. Os principais benefícios em utilizar lançamentos são:

* Otimização da performance da plataforma, pois a publicação de mudanças agrupadas elimina filas de processamento.
* Maior eficiência na operação ao simplificar o gerenciamento de alterações relacionadas.
* Maior controle ao testar e revisar modificações antes de sua publicação.
* Facilidade em agendar ou excluir grupos de modificações.

<div class="alert alert-warning">
  <p>Na fase beta, os lançamentos precisam estar relacionados ao <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2">CMS</a>, pois outros módulos da plataforma VTEX ainda não estão inclusos. Para utilizar o <strong>Lançamentos</strong>, é necessário configurar o CMS conforme descrito em <a href="https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS">Installing Releases on VTEX Headless CMS</a>.</p>
</div>

A funcionalidade pode ser acessada pelo menu de navegação do Admin VTEX **Lançamentos**, no qual existem as seguintes páginas:

* [Calendário](https://help.vtex.com/pt/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C): permite gerenciar lançamentos agendados, com visualização por semana ou mês.
* [Lançamentos](https://help.vtex.com/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw): permite gerenciar todos os lançamentos, com visualização em lista.

## Status de lançamentos

Um lançamento pode ter diferentes status desde a sua criação até a sua publicação ou exclusão, por exemplo. Nas páginas [Calendário](https://help.vtex.com/pt/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C) e [Lançamentos](https://help.vtex.com/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw), o status de cada lançamento é apresentado associado a uma cor, conforme apresentado na tabela abaixo:

| **Status** | **Cor** | **Definição** |
|:---:|:---:|:---:|
| `Agendado` | Azul | Existe uma data definida para a publicação do lançamento. |
| `Não agendado` | Cinza | Não existe uma data definida para a  publicação do lançamento. |
| `Em fila` | Verde  (piscando) | A publicação do lançamento está em etapa de implantação e nenhuma ação por parte do lojista é necessária para que o lançamento passe para o status seguinte, que pode ser `Publicando` ou `Publicação falhou`. |
| `Publicando` | Verde (piscando) | A plataforma VTEX está processando a solicitação de publicação do lançamento. Nenhuma ação por parte do lojista é necessária para que o lançamento passe para o status seguinte, que pode ser `Publicado` `Publicação falhou` ou `Despublicado`. |
| `Publicado` | Verde | O lançamento foi publicado e as modificações estão visíveis no storefront da loja. |
| `Despublicado` | Cinza | O lançamento não está mais publicado e, portanto, as modificações não estão mais visíveis no storefront da loja. O lançamento despublicado não é excluído, ele é arquivado e pode ser [publicado](https://help.vtex.com/pt/tutorial/planner-acoes-em-lancamentos-beta--1zsomdifPEQkdV6RW93JyW#publicar-lancamento) novamente a qualquer momento.  |
| `Publicação falhou` | Vermelho | Ocorreu um erro e o lançamento não foi publicado. Nestes casos, o lojista pode tentar [publicar o lançamento](https://help.vtex.com/pt/tutorial/planner-acoes-em-lancamentos-beta--1zsomdifPEQkdV6RW93JyW#publicar-lancamento) novamente ou [agendar uma nova data de publicação](https://help.vtex.com/pt/tutorial/planner-acoes-em-lancamentos-beta--1zsomdifPEQkdV6RW93JyW#reagendar). |

## Saiba mais

* [Lançamentos: ações em lançamentos](https://help.vtex.com/pt/tutorial/planner-acoes-em-lancamentos-beta--1zsomdifPEQkdV6RW93JyW)
* [Lançamentos: página Calendário](https://help.vtex.com/pt/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C)
* [Lançamentos: página Lançamentos](https://help.vtex.com/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw)
