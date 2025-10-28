---
title: 'Introdução a fluxos'
id: 5XxzVEJtDzXXEOS0SXANeS
status: PUBLISHED
createdAt: 2025-09-16T16:38:04.873Z
updatedAt: 2025-10-03T14:20:03.960Z
publishedAt: 2025-10-03T14:20:03.960Z
firstPublishedAt: 2025-10-03T14:20:03.960Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: flows-introduction
legacySlug: introducao-a-fluxos
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Um fluxo é um conjunto de passos organizados em formato de fluxograma. Esses passos são aplicados aos seus contatos quando eles entram no fluxo, ou seja, quando começam uma conversa.
Nos fluxos, esses passos podem ser **a ções** ou **decis ões**, que permitem a criação e o desenrolar das conversas a partir disso. Neste artigo, falaremos um pouco mais sobre a anatomia e estrutura desses fluxos.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/introducao-a-fluxos_1.png)

### Anatomia dos fluxos
Na imagem acima, temos um exemplo de um fluxo para uma pesquisa simples. Nele, podemos ver **cartas de decis ão**, **cartas de a ção**, e **cartas para notas** que juntas formam a estrutura para a seguinte conversa: manda uma pergunta, que precisa ser respondida com sim ou não, e a partir disso teremos uma resposta para cada opção.
#### Cartas de ação
As cartas de ação representam algumas operações/ações que conseguimos fazer em uma conversa. Alguns desses comandos são:
  * Enviar uma mensagem para o contato;
  * Marcar uma mensagem do contato;
  * Gerir contatos em grupos;
  * Começar outros fluxos;
  * Editar informações do contato;

Ou seja, as cartão de ação disparam comandos que são executados imediatamente, seguindo uma ordem de pilha.*
_* O primeiro na ordem de cartas, sempre ser á o primeiro a ser executado._

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/introducao-a-fluxos_2.png)

#### Cartas de Decisão
As cartas de decisão são as responsáveis pelas mais diversas conexões durante o fluxo. Elas são as responsáveis por criar as condições de decisão que permitem as nossas conversas trilharem caminhos diferentes, dependendo dos dados informados pelo contato.
Algumas formas de criar decisões são:
  * A resposta do contato a uma pergunta;
  * Um grupo que o contato pertence;
  * Alguma informação do contato;
  * Algum resultado criado no fluxo;

Essas decisões são tomadas em cima de **regras de decis ão** existentes na carta, que podem ser:
  * Verificar existência de palavras específicas em uma resposta/valor;
  * Verificar existência de frases especificas em uma resposta/valor;
  * Verificar existência de números específicos ou regras numéricas em uma resposta/valor;
  * Verificar existência de uma formatação específica (como data, e-mails, telefones) em uma resposta/valor;

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/introducao-a-fluxos_3.png)

#### Cartas para notas (comentários)
As cartas para comentário permitem a criação de notas, semelhantes a post-its, em nossos fluxos. Que podem ser utilizadas como forma de comunicação entre você e um colega que também está trabalhando no mesmo projeto, seja para explicar sobre como uma parte do fluxo funciona, ou para alertá-lo de que talvez seja melhor não alterar aquela etapa.

Para criar uma carta de nota, basta clicar duas vezes em um lugar vazio no fluxo. Depois disso, você consegue mover livremente as suas notas, mudar as cores de fundo e posicionar onde achar melhor.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/introducao-a-fluxos_4.png)

###  E agora?
Agora que conhecemos melhor o conceito de fluxo e entendemos como ele é formado, podemos nos aprofundar em cada uma das cartas que existem, além de algumas outras configurações dentro do nosso editor.

Caso queira se aprofundar mais, acesse nosso artigo sobre [criação de fluxos](https://docs.weni.ai/l/pt/fluxos/como-criar-um-fluxo).
