---
title: 'Cartas de decisão'
id: 3V6NZBfEuJpNQCumY3p5Sg
status: PUBLISHED
createdAt: 2025-09-16T16:52:15.475Z
updatedAt: 2025-10-03T14:20:03.824Z
publishedAt: 2025-10-03T14:20:03.824Z
firstPublishedAt: 2025-10-03T14:20:03.824Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: decision-cards
legacySlug: cartas-de-decisao
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

As cartas de decisão são parte muito importante para as construções lógicas dos nossos fluxos. Na [introdução a fluxos](https://docs.weni.ai/l/pt/fluxos/introducao-a-fluxos) conversamos um pouco sobre o conceito dessas cartas, e agora vamos entender um pouco mais sobre sua anatomia e os tipos que existem dentro da plataforma.

Para facilitar a navegação por esse artigo, caso queira ir diretamente para algum tópico em especifico, basta clicar no nome dele baixo:
  * Rotas e regras de decisão
  * Resultados de fluxo
  * Aguarde a resposta do contato
  * Dividir por uma expressão customizada
  * Dividir por campo de contato
  * Dividir por resultado do fluxo
  * Dividir aleatoriamente
  * Dividir por filiação de grupo
  * Dividir por tipo de URN
  * Dividir por intenção
  * Classificar automaticamente
  * Aguarde por resposta Inteligente

### Rotas e regras de decisão

#### O que são rotas?

O maior diferencial entre as cartas de decisão e as cartas de ação são a criação de rotas. Essas rotas são possíveis caminhos que uma conversa pode tomar de acordo com alguma resposta ou algum dado do contato, ou seja, a finalidade de todas as cartas de decisão é criar rotas para cada regra, e assim criar as ramificações do nosso fluxo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_1.png)

Cada rota possui um **_nome/categoria_** _e_ obedece uma **_regra de decis ão_**. Você pode ver nas conexões de suas rotas a quantidade de contatos que já seguiram aquele caminho pelo seu fluxo.

A rota **_Outro_** é uma rota padrão, que existe para o caso de o valor analisado não corresponder a nenhuma das regras de decisão criadas. Todas as cartas de decisão, ao terem uma regra definida, também criam a rota Other.

#### Regras de decisão

As regras de decisão são um conjunto de regras que utilizamos para criar rotas, ou seja, parâmetros que vão ser verificados para decidir se um contato deve ou não deve passar por aquele caminho.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_2.png)

Para utilizar uma regra de decisão, basta selecionar o tipo da regra, depois, colocar o valor para comparação e por último definir a categoria/nome da rota a qual essa regra pertence. Cada nome diferente de categoria, gerará uma nova rota com aquele mesmo nome. Caso você crie mais de uma regra, mas nomeie ela com a mesma categoria, todas as regras apontarão para a rota com aquele nome.

As regras são testadas pela plataforma em forma de pilha, de cima para baixo. Caso você tenha regras mais especificas, mas que possam ser englobadas por opções mais genéricas, é importante que você coloque as suas regras especificas no topo e as mais genéricas no fim da lista.

Atualmente, existem 24 regras de decisão na plataforma, que podem ser agrupadas em 4 categorias. Confira abaixo:

  1. **Palavras e frases:**
São as regras que analisam frases e/ou palavras, comparando a resposta/valor do contato com as frases/palavras escolhidas.

São essas:
  * **tem alguma das palavras:** Caso a resposta/valor possua qualquer uma das palavras escolhidas, ele irá seguir a rota indicada. Todas as palavras devem ser separadas por um espaço.
  * **tem todas as palavras:** Caso a resposta/valor possua todas as palavras escolhidas, ele irá seguir a rota indicada. Todas as palavras devem ser separadas por um espaço.
  * **tem a frase**:** Caso a resposta/valor possua aquela frase em algum momento do seu texto, ele seguirá rota indicada
  * **tem apenas a frase:** Caso a resposta/valor seja exatamente aquela frase, ele seguirá a rota indicada.
  * **começa com:** Caso a resposta/valor comece com aquela frase, ele seguirá a rota indicada.
  * **tem algum texto:** Caso a resposta/valor esteja preenchida (não esteja vazia), independentemente da informação contida, ele seguirá a rota indicada.

Você pode utilizar essas regras para verificar nomes de pessoas, organizações, estabelecimentos, etc.

  1. **Números e operações:**
São as regras que envolvem números e/ou operações numéricas, comparando a resposta/valor do contato com os números/regras numéricas escolhidas.
São essas:
  * **tem um número:** Caso a resposta/valor seja um número, independentemente do número, ele seguirá a rota indicada.
  * **tem um número entre:** Caso a resposta/valor esteja entre os 2 números escolhidos, ele seguirá a rota indicada.
  * **tem um número abaixo:** Caso a resposta/valor for menor que o número escolhido, ele seguirá a rota indicada.
  * **tem um número igual ou abaixo:** Caso a resposta/valor for menor ou igual ao número escolhido, ele seguirá a rota indicada.
  * **tem um número igual a** Caso a resposta/valor for igual ao número escolhido, ele seguirá a rota indicada.
  * **tem um número igual ou acima:** Caso a resposta/valor for maior ou igual ao número escolhido, ele seguirá a rota indicada.
  * **tem um número acima****:** Caso a resposta/valor for maior que o número escolhido, ele seguirá a rota indicada.

Essas regras podem ser úteis para filtros por idade.
  1. **Data e hora:**

São as regras que envolvem data e hora, comparando as datas inseridas pelo usuário ou de outros acontecimentos com as datas escolhidas.

Um detalhe importante sobre as regras de comparação de data (_antes, igual a e depois_) é que todas as comparações não são feitas por uma data absoluta, mas sim por uma data em relação ao dia atual, no formato **(****_today + n_****)** onde **_today_** é o dia de hoje e **_n_** é a quantidade de dias para frente ou para trás.

As regras são:
  * **tem uma data:** Caso a resposta/valor do contato possua uma data, independentemente da data, ele seguirá a rota indicada. A data deve possuir um formato de data válido (exemplo: DD/MM/AAAA).
  * **tem uma data antes:** Caso a resposta/valor possua uma data anterior a data escolhida, ele seguirá a rota indicada.
  * **tem uma data igual a:** Caso a resposta/valor possua uma data igual a data escolhida, ele seguirá a rota indicada.
  * **tem uma data depois:** Caso a resposta/valor possua uma data após a data escolhida, ele seguirá a rota indicada.
  * **tem um tempo:** Caso a resposta/valor possua um horário, independentemente do horário, ele seguirá a rota indicada. O horário deve possuir um formato de hora válido (exemplo: HH:MM).

Boa forma de verificar a data de compra dos seus produtos.

1. **Formatos personalizados:**

São regras utilizadas para validar formatações de texto personalizadas, seja para obedecer alguma regra de formatação de números, documentos, etc.

A plataforma nos dá suporte ao uso de expressões regulares, ou regex, que é uma linguagem de busca de padrões. Assim, conseguimos criar regras de padrões personalizados para vários tipos de formatação, como CPF, CNPJ, CNH, etc. Um bom site para criar suas regex é o <https://regex101.com/>.

As regras são:
  * **tem um número de telefone:** Caso a resposta/valor possua um formato válido para telefone celular (exemplo: 5582999999999), ele seguirá rota indicada.
  * **tem um email:** Caso a resposta/valor possua um formato válido para e-mail (exemplo: no-reply@ilhasoft.com.br), ele seguirá a a rota indicada.
  * **corresponde a regex:** Caso a resposta/valor siga a regra da expressão regular escolhida, ele seguirá a rota indicada.

Quer validar o formato de um CPF? Essas regras são o caminho.

### Resultados de fluxo

Toda carta de decisão, escolhe uma rota no fim da sua execução, e isso gera para nós um _**resultado de fluxo**_. Cada resultado de fluxo contém informações como:
  * Valor que foi utilizado para a decisão;
  * Categoria de rota escolhida após as regras;
  * Data e hora que esse resultado foi salvo;
  * Conteúdos extras e anexos enviados junto com o valor;
  * Entre outros.

Você pode acessar esses valores de fluxo utilizando as variáveis da plataforma (para saber mais acesse o artigo sobre [expressões e variáveis](/l/pt/fluxos/introdu-o-de-express-es-e-vari-veis) ) e também pode ver esses resultados em forma de gráficos na área de resultados no editor de fluxo (para saber mais acesse o artigo sobre o [editor de fluxo e suas ferramentas](/l/pt/fluxos/editor-de-fluxo-e-suas-ferramentas)).

Por padrão, os nomes dos resultados serão sempre **_(Result + n)_** onde n é o número de resultados que existem no seu fluxo, porém, isso pode ser facilmente mudado no campo de Result name.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_3.png)

Sempre mude o nome dos seus resultados de fluxo para nomes que você consiga entender de forma simples e intuitiva!

### Aguarde a resposta do contato

A primeira e mais usada das cartas de decisão. As rotas são decididas a partir do texto inserido por um contato. Além disso, possui a opção para criar uma rota caso o usuário não responda, marcando a caixa de seleção no rodapé da carta e escolhendo o tempo de espera para a resposta.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_4.png)

Carta muito utilizada para tratar respostas de perguntas feitas para o usuário.

Avançado
Se estiver usando este card para coletar uma informação obrigatória no fluxo, tenha cuidado ao selecionar a opção ""continuar quando não houver resposta."" Se quiser lembrar o contato de responder, você pode criar um loop, o que evitará que o contato avance para o próximo card sem fornecer a resposta. Caso a opção ""Sem resposta"" não esteja conectada a outro card, o fluxo será encerrado quando o tempo de espera expirar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_5.png)

### Dividir por uma expressão customizada

As rotas são decididas a partir de uma expressão customizada criada pelo usuário. Essa expressão customizada pode ser construída a partir do uso de variáveis e funções. (Para saber mais sobre [expressões e funções](/l/pt/fluxos/express-es) vá para o artigo sobre)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_6.png)

Permite personalizar alguns tratamentos, como, verificar o horário de funcionamento para atendimento.

### Dividir por campo de contato

Aqui, todas as regras de decisão analisam um campo do contato. Basta selecionar qual campo do contato você pretende verificar, e assim definir as regras em questão.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_7.png)

Boa forma para classificar contatos através dos seus dados.

### Dividir por resultado no fluxo

O foco aqui é criar rotas a partir dos resultados de fluxo, podendo ser tanto os criados por outras cartas de decisão quanto os criados manualmente pela carta de ação responsável. Basta selecionar o nome do resultado de fluxo que vai ser analisado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_8.png)

Essa carta pode ser usada para analisar se alguma resposta do usuário deve ser salva em um campo de contato.

### Dividir aleatoriamente

Aqui, a rota escolhida é feita de forma aleatória, basta escolher a quantidade de rotas que você deseja e esperar o resultado. Nesse caso, não existe regra de decisão, e apenas o nome da rota pode ser personalizado, junto com a quantidade de rotas que vão existir.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_9.png)

Você pode criar várias mensagens de saudação e despedidas que vão ser diferentes a cada execução por um contato.

### Dividir por filiação de grupo

Cria rotas a partir de grupos que o contato participa. Para isso, basta selecionar um dos grupos de contato existentes na organização.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_10.png)

Pode ser usada para limitar o acesso de certos grupos a partes especificas de fluxos.

### Dividir por tipo de URN

Cria rotas baseadas em qual canal o contato está utilizando no momento. Basta selecionar o tipo do canal que estão entre os disponíveis e salvar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_11.png)

Deseja fazer tratamentos diferentes de acordo com o canal do contato? Use essa carta

### Classificar automaticamente

Com o cartão **Classificar automaticamente** , você pode utilizar uma expressão ou variáveis como a entrada para a classificação da intenção (Classe) do usuário. Normalmente esse cartão é usado quando você já tem um texto para tratar e não precisa aguardar uma resposta do usuário antes de consultar a Inteligência artificial:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_12.png)

Utilize frases de comando claras e objetivas para ajudar a classificar corretamente. Saiba mais no artigo sobre [Zero Shot](/l/pt/ia/zero-shot).

### Aguarde por resposta Inteligente

Com o cartão **Aguarde por resposta inteligente** , você consegue aguardar pela resposta do usuário e enviar essa resposta direto para a sua Classificação de IA, assim você cria suas categorias e trata cada intenção como desejar:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_13.png)

Utilize frases de comando claras e objetivas para ajudar a classificar corretamente. Saiba mais no artigo sobre [Zero Shot](/l/pt/ia/zero-shot).

### Dividir por intenção

No cartão **Dividir por Intenção**, você selecionará a inteligência de classificação que será utilizada, conforme descrito no artigo [**Dividir por Intenções**](/l/pt/fluxos/split-by-intent). Com base na intenção(1) e no nível de confiança(2) configurados no card, a entrada/mensagem será devidamente classificada.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-decisao_14.png)
