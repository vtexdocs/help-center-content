---
title: 'Instruções'
id: formatting0004-pt
status: PUBLISHED
createdAt: 2025-12-27T15:00:00.388Z
publishedAt: 2025-12-27T15:00:00.388Z
firstPublishedAt: 2025-12-27T15:00:00.388Z
contentType: trackArticle
productTeam: Education
slugPT: instrucoes
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugPT: instrucoes
---

As instruções incluem uma sequência de passos para realizar uma tarefa. 

## Frases introdutórias

Comece uma instrução com uma frase introdutória para dar o contexto que não está no título da seção. As frases introdutórias ajudam o leitor a entender o objetivo, o escopo e os pré-requisitos de uma instrução antes de começar.

> ⚠️ Se o título explica as instruções e não é necessário nenhum contexto adicional, a introdução é dispensável.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| Antes de começar, certifique-se de que você tem acesso ao painel como administrador. | Esta seção explica como configurar o painel. |
| Siga as instruções abaixo para corrigir erros no fluxo de pagamento. | A seguir, apresentamos as etapas do fluxo de pagamento. |
| Instale o VTEX IO CLI para gerenciar e desenvolver o projeto da sua loja. | Esta seção explica como instalar o CLI. |

Ao explicar um passo a passo, use o imperativo para dar instruções claras e ajudar o usuário a identificar as ações. Evite começar com uma frase incompleta que dependa de etapas subsequentes para ser concluída.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| Para personalizar os botões, siga as instruções abaixo: | Para personalizar os botões: |
| Antes de fazer o deploy, certifique-se de que o aplicativo já foi publicado e testado. | Passos para fazer o deploy: |

A frase pode terminar com dois-pontos ou ponto final.

* Use dois-pontos se a frase introdutória preceder imediatamente o passo a passo.  
* Use ponto final se houver mais conteúdo (por exemplo: um callout ou uma captura de tela) entre a introdução e o passo a passo.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| Para gerenciar as categorias de produtos da loja, siga estes passos: | Passos para gerenciar as categorias de produtos da sua loja. |
| 1. Acesse o Admin VTEX. | Primeiro, acesse o Admin VTEX. |
| 2. ... | 2. ... |
| Instale as dependências do projeto para executá-lo localmente, seguindo as instruções abaixo. | Instale as dependências do projeto: |
| ⚠️ Certifique-se de que seu projeto tenha todos os pré-requisitos descritos na seção [Antes de começar]. | ⚠️ Certifique-se de que seu projeto tenha todos os pré-requisitos descritos na seção [Antes de começar]. |
| 1. Abra o terminal e execute `yarn install`. | Execute `yarn install`. |
| 2. ... | 2. ... |

## Conteúdo

Cada linha do passo a passo deve corresponder a uma ação que o usuário deve realizar.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| 1. Adicione o nome da categoria. | 1. Adicione o nome da categoria, clique em "Salvar" e volte para a página **Categorias**. |
| 2. Clique em `Salvar`. |  |
| 3. Volte para a página **Categorias**. |  |

Explique os conceitos separadamente (por exemplo: em callouts ou na introdução) e evite usar os passos exclusivamente para explicar conceitos.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| Os workspaces de desenvolvimento permitem que você vincule, publique e instale aplicativos. Para criar um workspace de desenvolvimento, siga os passos abaixo: | 1. Os workspaces de desenvolvimento permitem que você vincule, publique e instale aplicativos. Para criar um workspace de desenvolvimento, faça login em uma conta VTEX. |
| 1. Faça login na conta VTEX desejada. |  2. Crie um workspace de desenvolvimento executando o comando `vtex use {workspaceName}`. |
| 2. Crie um workspace de desenvolvimento executando o comando `vtex use {workspaceName}`. | |

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| 1. Abra um terminal. Inicie um servidor de desenvolvimento local para hospedar seu site executando `faststore dev`. | 1. Abra um terminal. |
| ℹ️ O comando `faststore dev`, parte da [FastStore CLI](https://developers.vtex.com/docs/guides/faststore/getting-started-3-faststore-cli), atualiza o projeto da loja com o pacote `@faststore/core`.    | 2. Inicie um servidor de desenvolvimento local para hospedar seu site executando `faststore dev`. |
|  | 3. O comando `faststore dev`, parte do [FastStore CLI](https://developers.vtex.com/docs/guides/faststore/getting-started-3-faststore-cli), atualiza o projeto da sua loja com o pacote `@faststore/core`.|


Inclua todas as ações necessárias. Não pule etapas nem assuma que o usuário já conheça um determinado passo.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| Digite **install**. Clique em `Enter` para iniciar a instalação. | 1. Digite **install**. *(Assume-se que o usuário sabe que deve clicar `Enter`)* |

Se um passo for muito longo, divida-o em vários outros. Você também pode combinar pequenas ações em um único passo usando colchetes angulares (>) para seleções sequenciais no menu.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| 1. Acesse **Catálogo > Atributos personalizados do produto > Tipos de serviço**. | 1. Acesse **Catálogo**. |
|  | 2. Vá para **Atributos personalizados do produto**. |
|  | 3. Depois, vá para **Tipos de serviço**. |

Mantenha a forma verbal consistente ao longo do passo a passo.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| 1. Configure o inventário. | 1. Configurando o inventário. |
| 2. Informe seu nome. | 2. Preencher seu nome. |
| 3. Clique em `Salvar`. | 3. Clique em `Salvar`. |

Indique o objetivo da ação e onde ela deve ser realizada antes de indicá-la.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| Para criar um novo documento no software, clique em **Arquivo > Novo > Documento**. | Clique em **Arquivo > Novo > Documento** para criar um novo documento no software. |

Caso haja mais de uma forma de realizar uma tarefa, faça o seguinte:

* Escreva o passo a passo que seja mais acessível para todos os usuários.  
* Se todos os passos precisarem ser documentados, deixe claro para o leitor que essa é uma maneira alternativa de realizar a mesma tarefa.  
* Use títulos, páginas ou guias separados para diferenciar os passos alternativos.

<details>

<summary><b>✅ Correto</b></summary>

```md  
## Enviar arquivos

1. Clique em **Enviar**.  
2. Selecione o arquivo.  
3. …

### Método alternativo: Enviar arquivos (CLI)

1. Abra o terminal.  
2. Execute `upload --file=<path>`.  
3. …
```

</details>

<details>

<summary><b>❌ Incorreto</b></summary>

```md  
## Enviar arquivos

1. Clique em Enviar ou execute `upload --file=<path>` no terminal.  
//(Mistura métodos sem uma diferenciação clara.)
```

</details>

Para um passo opcional, adicione (*Opcional*) no início da frase. 

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| (Opcional) String arbitrária. | (Opcional): String arbitrária. |

Evite usar linguagem direcional que faça referência ao layout visual (por exemplo: "acima", "abaixo", "à direita") para guiar o leitor. Esse tipo de linguagem não é eficaz para acessibilidade ou localização, pois depende da visão e de um layout de tela específico. Em vez disso, use texto descritivo que nomeie os elementos da interface do usuário por sua função ou título. 

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| 1. Clique no menu ☰. | 1. Clique no botão com três linhas. |
| 2. No diagrama a seguir, ... | 2. No diagrama abaixo, ... |

> ⚠️ Ao mencionar elementos da interface do Admin que tenham texto, transcreva o texto como aparece no Admin, mantendo as letras maiúsculas e minúsculas. Para mais informações, acesse [Interfaces de computador](/TBD).

### Passos secundários em instruções numeradas

Os passos secundários dividem instruções complexas em ações menores e sequenciais que devem ser concluídas em uma ordem específica. Eles usam uma distinção hierárquica (letras, algarismos romanos) para mostrar a dependência entre as ações, orientando os usuários por meio de etapas dependentes e claras.

#### Hierarquia e pontuação

* Passos principais: números (`1.`, `2.`).  
* Passos secundários: letras minúsculas (`a.`, `b.`).  
* Subpassos: algarismos romanos em minúsculas (`i.`, `ii.`)  
* Se um passo introduzir passos secundários, encerre-o com dois-pontos (`:`).  
* Se for um passo independente, use ponto final (`.`).

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| 1. Para adicionar uma instância de VM, faça o seguinte: | 1. Para adicionar uma instância de VM, faça o seguinte: |
| a. Clique em `Criar instância`. | a. Clique em `Criar instância`. |
| b. Insira um *Nome* para a instância de VM e depois: | b. Insira um *Nome* para a instância de VM e depois: |
| i. Selecione a *Região* que você deseja fazer o deploy da instância de VM. | c. Selecione a *Região* que você deseja fazer o deploy da instância de VM. |
| ii. Selecione o *Tipo de máquina*. | d. Selecione o *Tipo de máquina*. |
| c. Clique em `Criar`. | e. Clique em `Criar`. |
| 3. Para se conectar à instância de VM usando SSH, clique em `SSH`. | 2. Para se conectar à instância de VM usando SSH, clique em `SSH`. |

#### Ações não sequenciais

Para itens independentes que não exigem uma sequência específica, use uma lista dividida em tópicos. 

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| 1. Vá para **Configurações**. | 1. Vá para **Configurações**. |
| 2. Preencha os campos da tela listados abaixo, conforme necessário. | 2. Preencha os campos da tela listados abaixo, conforme necessário. |
| • ... | a. ... |
| • ... | b. ... |
| • ... | c. ... |
| 3. Clique em `Salvar`. | 3. Clique em `Salvar`. |

### Formatação

Ao criar instruções, é fundamental manter uma numeração contínua. Isso significa que as etapas devem fluir sem interrupções (exemplo: 1., 2., 3., etc.).

Para garantir clareza e manter o fluxo, verifique sempre se o conteúdo inserido — como capturas de tela, diagramas ou notas — não interrompe a progressão lógica das etapas. A inserção incorreta desses itens pode reiniciar acidentalmente a lista numerada, fazendo parecer que um novo procedimento começa a partir de `1.`, mesmo que você pretenda continuar a mesma sequência de instruções.

| ✅ Correto | ❌ Incorreto |
| :---- | :---- |
| 1. Abra o Admin VTEX. | 1. Abra o Admin VTEX. |
| 2. Acesse **Catálogo > Produtos e SKUs**.  | 2. Acesse **Catálogo > Produtos e SKUs**. |
| `Captura de tela da interface Produtos e SKUs.` | `Captura de tela da interface Produtos e SKUs.` |
| 3. Clique em `Adicionar produto`. | 1. Clique em `Adicionar produto`. |
