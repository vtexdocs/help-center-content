---
title: 'Editor de fluxo e suas ferramentas'
id: 5vaaCPNxAy3f21esjfeb84
status: PUBLISHED
createdAt: 2025-09-16T16:40:08.008Z
updatedAt: 2025-10-03T14:20:03.921Z
publishedAt: 2025-10-03T14:20:03.921Z
firstPublishedAt: 2025-10-03T14:20:03.921Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: flow-editor-and-tools
legacySlug: editor-de-fluxo-e-suas-ferramentas
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

O editor de fluxo é o ambiente onde criamos as cartas e montamos o nosso fluxo. Nele, temos toda a liberdade de criar e editar conexões, decisões e ações para a nossa conversa.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_1.gif)

Neste artigo, falaremos sobre as ferramentas que existem dentro deste editor para facilitar a criação dos nossos fluxos.

### Simulador
Uma das ferramentas mais utilizadas na criação e edição de fluxos é o simulador. Com ele, podemos simular em tempo real uma conversa que aconteceria com a execução do fluxo que estamos criando.

Para acessar o simulador, basta clicar no botão com o símbolo de um telefone celular, no canto direito da tela.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_2.png)

Ao clicar no botão, você verá o simulador, que aparece no formato de um telefone celular no canto direito da tela, com a execução do fluxo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_3.png)

Agora, você pode enviar mensagens como resposta para o seu fluxo usando a barra de texto (1), reiniciar a simulação quando quiser utilizando o botão reiniciar do simulador (2), enviar anexos como fotos, áudios e vídeos utilizando o botão de anexos (3), habilitar o modo WhatsApp (4) e encerrar o uso do simulador quando achar melhor (5).

Caso você deseje uma versão mais completa do simulador, basta apertar no botão @ (6) que irá transformar o simulador para esse novo modo:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_4.png)

Permitindo que você consiga acompanhar em tempo real as mudanças das expressões que estão envolvidas com aquela execução de fluxo. Para saber mais sobre expressões, leia o artigo expressões clicando [aqui](https://docs.weni.ai/l/pt/fluxos/express-es).

### Versões da Edição
Outra ferramenta muito útil é o registro de versões da edição. Cada modificação que você faz em um fluxo, desde a criação de uma nova carta, até realinhar esteticamente o seu fluxograma, tem a sua alteração gravada em uma lista de versões da edição. Utilizando essa lista, conseguimos voltar as modificações de um fluxo para qualquer momento passado, evitando retrabalho para desfazer modificações indesejadas.

Para acessar as versões da edição, basta clicar no botão do relógio logo abaixo do botão do simulador.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_5.png)

Você pode selecionar uma das opções da lista para ver as versões antigas do fluxo, e caso queira retroceder para aquela versão, basta clicar no botão _R_ _everter_.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_6.png)

### Botão Começar Fluxo
O botão ""Disparar Fluxo"" é essencial para determinados testes e validações. Com ele, podemos iniciar manualmente um fluxo utilizando contatos ou grupos já existentes na plataforma.

Diferente do simulador, esse fluxo será realmente executado para o contato em seu canal preferencial.

O botão se encontra no canto direito, um pouco acima das outras ferramentas mostradas no artigo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_7.png)

Antes de lançarmos esses contatos no fluxo, podemos configurar alguns detalhes:
  1. Decidir se preferimos escolher contatos/grupos de forma específica, ou se preferimos criar alguma regra para filtrar os contatos que desejamos;
  2. Decidir se, caso um contato já esteja ativo no fluxo em questão, esse fluxo será reiniciado ou não;
  3. Decidir se, caso um contato já esteja ativo em algum outro fluxo, esse fluxo será interrompido ou não;

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_8.png)

### Menu de configurações
Além disso, temos uma série de opções no menu de configurações, que podemos achar facilmente ao lado do botão Começar Fluxo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_9.png)

  1. **Resultados:** Opção para analisar e exportar resultados dos fluxos, com base na utilização pelos contatos. Um meio de verificar quais contatos passaram pelo fluxo.
  2. **Copy UUID** : Opção que permite você obter o identificador do fluxo. Sendo assim, cada fluxo possui um UUID específico
  3. **Editar:** Opção que permite a edição das configurações iniciais do fluxo, como o nome, triggers, e expiração do fluxo (por quanto tempo ele irá esperar por uma resposta).
  4. **Copiar:** Opção que cria uma cópia exata do fluxo. Esse fluxo-cópia aparecerá na sua lista de fluxos seguindo o padrão de nomenclatura _Copy - Nome do fluxo copiado_
  5. **Deletar:** Opção que te permite deletar o fluxo em questão. Tome cuidado, pois essa operação não pode ser desfeita.
  6. **Exportar defini ção:** Opção que te redireciona para a página de exportação de fluxos. Para saber mais, visite o artigo sobre [exportação e importação de fluxos](/l/pt/fluxos/importar-e-exportar-fluxos)
  7. **Exportar tradu ção**: Opção que possibilita você importar a tradução do idioma na plataforma
  8. **Importar tradu ção**: Opção que possibilita você exportar a tradução de um determinado idioma na plataforma

### Barra de Ferramentas
Nesta parte do Editor de Fluxos, você encontrará algumas ferramentas que facilitarão seu trabalho. Basta clicar e utilizá-las.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/editor-de-fluxo-e-suas-ferramentas_10.png)

  1. **Selecionar e Arrastar:** Essas funções irão ajudar a selecionar cards (botão em formato de seta) e navegar pelo fluxo (botão em formato de mão). Também é possível utilizar a tecla ""v"" para alternar entre essas funções mais facilmente.
  2. **Criar Bloco:** Nesse botão você pode criar qualquer card para o seu fluxo.
  3. **Copiar:** Selecione um ou mais cards e clique neste botão para copiá-los. Utilize as teclas Ctrl + V para colar. Essa função permite colar os cards copiados em outro fluxo. Também é possível copiar usando as teclas Ctrl + C.
  4. **Busca:** Pesquise por elementos dentro dos cards, como o nome do card, o texto de uma mensagem ou o nome de um resultado. Esta função pode ser ativada com as teclas Ctrl + F.
  5. **Zoom:** Permite aumentar ou diminuir o zoom. Ao clicar na seta para cima, você será direcionado ao início do fluxo. Pode ser acionado com Ctrl + Scroll.

Com isso, agora você pode criar os seus fluxos utilizando todos os recursos que nosso editor pode oferecer!
