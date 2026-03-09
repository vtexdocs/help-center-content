---
title: 'Como bloquear customizações para investigar problemas no front-end da loja'
id: 5c1a4bvVK8rAvKLczhkCnY
status: PUBLISHED
createdAt: 2020-04-20T12:59:14.576Z
updatedAt: 2026-03-09T13:14:58.230Z
publishedAt: 2023-04-12T14:38:14.185Z
firstPublishedAt: 2020-04-20T13:31:24.105Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 4iKDU1m0huXy1qFWff7vY5
slugEN: blocking-customizations-to-troubleshoot-front-end-issues
locale: pt
legacySlug: como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja
---

> ⚠️ Tutorial válido apenas para lojas CMS Portal (Legado).

Neste artigo, você vai aprender a identificar a origem de um problema front-end. O primeiro passo é bloquear as customizações de front-end. Com base na resposta do site, será possível entender se o problema está na informação fornecida nativamente pela VTEX ou na customização da sua página.

Para fazer isso, vamos ensinar a remover as customizações por meio de uma ferramenta nativa do próprio Chrome, o **DevTools**.

## Como configurar o DevTools

Para configurar o [Chrome DevTools](https://developer.chrome.com/docs/devtools/), siga os passos a seguir. 

1. Abra o [Google Chrome](https://www.google.com/intl/pt-BR/chrome/) no seu computador.
2. Clique no botão `F12` do seu teclado ou clique com o botão direito do mouse em qualquer parte da tela e selecione **Inspecionar**.
3. Clique nos três pontos verticais na parte superior direita da página, conforme indicado na imagem abaixo.
4. Selecione **Mais ferramentas** e, em seguida, **Request conditions** para bloquear todas as customizações feitas por meio de CSS, JavaScript e Google Tag Manager. 

  ![legado-02](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-11914/docs/pt/faq/shopping/legado-02.png)

5. A aba **Request conditions** abrirá em seguida, como mostra a imagem abaixo:

  ![request-conditions](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-11914/docs/pt/faq/shopping/request-conditions.png)

6. Clique em `Add rule` para definir que o primeiro recurso será bloqueado. Para adicionar mais recursos, clique em `+` e, depois de definir, clique em `Adicionar`. Essa configuração precisa ser feita apenas uma vez no seu navegador. Inclua os itens abaixo:

 * `*:/arquivos/*.js`
 * `*:/files/*js`
 * `*:/arquivos/*.css`
 * `*:/files/*.css`
 * `*://www.googletagmanager.com/gtm.js*`

  ![request-conditions-02](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-11914/docs/pt/faq/shopping/request-conditions.png)

7. Marque a opção **Enable blocking and throttling** e habilite todos os checkboxes ao lado de cada recurso configurado. Essa será a configuração padrão, com todas as opções habilitadas para bloqueio.
8. Agora, atualize a página. Ela será exibida sem os componentes customizados.

Para voltar a visualizar as customizações, desmarque a opção **Enable blocking and throttling** e atualize a página.

Verifique se o comportamento indesejado que você observou originalmente ocorre apenas com a customização ativa. Se for o caso, entre em contato com o time responsável pelo seu front-end para que verifique o que está ocorrendo.

Se, mesmo com as customizações bloqueadas, o comportamento indesejado persistir, abra um chamado ao [suporte da VTEX](https://supporticket.vtex.com/support).
