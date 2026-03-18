---
title: "O front-end da minha loja apresenta problemas de layout"
createdAt: 2026-03-09T15:40:27.806Z
locale: pt
slugPT: o-front-end-da-minha-loja-apresenta-problemas-de-layout
tags:
  - Front-end
  - CMS
  - Layout
---

Este artigo ajuda você a investigar problemas de layout no front-end de sua loja. Ao seguir as instruções deste guia, você poderá comparar diferentes versões da vitrine, isolar a origem dos problemas de layout e reunir evidências para compartilhar com o Suporte VTEX ou com seu parceiro de implementação, caso necessário.

## Solução

Para investigar problemas de layout, considere as seguintes soluções:

* **[Bloqueando customizações para isolar problemas de front-end](#bloqueando-customizações-para-isolar-problemas-de-front-end):** desative temporariamente as customizações para verificar se o problema é causado por código customizado.
* **[Comparando diferentes versões do front-end de sua loja](#comparando-versões-do-front-end):** compare o layout atual de sua loja com uma versão alternativa para verificar se o problema está relacionado a alguma customização específica.

### Bloqueando customizações para isolar problemas de front-end

Essa solução ajuda a verificar se um problema de front-end é causado por código customizado (por exemplo, JavaScript, CSS ou script de terceiros), pois, ao bloquear customizações temporariamente, você testa a loja apenas com o comportamento nativo da VTEX.

Para executar esse teste, você deve remover as customizações por meio da ferramenta de desenvolvimento nativa do próprio navegador. Aqui mostraremos como fazer no navegador Google Chrome, com a ferramenta **DevTools**.

Para configurar o [Chrome DevTools](https://developer.chrome.com/docs/devtools/), siga os passos a seguir. 

1. Abra o [Google Chrome](https://www.google.com/intl/pt-BR/chrome/) no seu computador.
2. Aperte o botão `F12` do seu teclado ou clique com o botão direito do mouse em qualquer parte da tela e selecione **Inspecionar**.
3. Clique nos três pontos verticais na parte superior direita da página, conforme indicado na imagem abaixo.
4. Selecione **Mais ferramentas** e, em seguida, **Condições de solicitação** para bloquear todas as customizações feitas por meio de CSS, JavaScript e Google Tag Manager. 

  ![legado-02](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-11914/docs/pt/faq/shopping/legado-02.png) 

5. A aba **Condições de solicitação** abrirá em seguida, como mostra a imagem abaixo:

  ![request-conditions](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-11914/docs/pt/faq/shopping/request-conditions.png) 

6. Clique em `Adicionar regra` para definir que o primeiro recurso será bloqueado. Para adicionar mais recursos, clique em `+` e, depois de definir, clique em `Adicionar`. Essa configuração precisa ser feita apenas uma vez no seu navegador. Inclua os itens abaixo:

 * `*:/arquivos/*.js`
 * `*:/files/*js`
 * `*:/arquivos/*.css`
 * `*:/files/*.css`
 * `*://www.googletagmanager.com/gtm.js*`

  ![request-conditions-02](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-11914/docs/pt/faq/shopping/request-conditions.png) 

7. Marque a opção **Ativar bloqueio e limitação** e habilite todos os checkboxes ao lado de cada recurso configurado. Essa será a configuração padrão, com todas as opções de bloqueio habilitadas.
8. Agora, atualize a página. Ela será exibida sem os componentes customizados.

Para voltar a visualizar as customizações, desmarque a opção **Ativar bloqueio e limitação** e atualize a página.

Verifique se o comportamento indesejado que você observou originalmente ocorre apenas com a customização ativa. Se for o caso, entre em contato com o time responsável pelo seu front-end para que verifique o que está ocorrendo.

Se, mesmo com as customizações bloqueadas, o comportamento indesejado persistir, abra um chamado ao [suporte da VTEX](https://supporticket.vtex.com/support).

### Comparando versões do front-end

Essa solução deve ser utilizada quando você deseja testar a URL da página com problema no layout nativo da VTEX ou com um layout diferente do atual, alterando o template ou os controles. Para realizar esse teste, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Layout > CMS** e crie um novo template em **HTML Templates**. É importante que o novo template seja do mesmo tipo que o template atual utilizado na página com o problema. Por exemplo, se o problema ocorre em uma página de categoria, você deve criar um novo template de categoria. Para mais detalhes sobre como criar um template, veja o guia [Criar e editar um template de página](https://help.vtex.com/pt/docs/tutorials/como-criar-um-template-de-pagina).
2. No template criado, mantenha a estrutura básica do layout e use apenas os [controles nativos](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) necessários para renderizar a página.
3. Acesse a área de layouts em **CMS > Sites and Channels** e localize a pasta da página com problema. Por exemplo, se o problema é em uma página de categoria, você deve:
   * Clicar no website desejado.
   * Clicar na pasta raiz (`/`).
   * Clicar na pasta **Categoria > @categoria@**.
   * Na janela ao lado, clique em `new layout` para criar um novo layout.
5. Associe o template criado ao novo layout. Para mais detalhes, veja o guia [Associando um template a um layout](https://help.vtex.com/pt/docs/tutorials/associando-um-template-a-um-layout).
6. Na seção **Properties** do novo layout, identifique o LID.
7. Acesse a página com o problema e adicione o LID do layout criado como uma `QueryString` (`?` ou `&`) à URL na barra de endereços do navegador.

Caso o problema não ocorra no layout nativo, indica que ocorre devido à customização. Se o problema persistir, abra um chamado ao [suporte da VTEX](https://supporticket.vtex.com/support).
