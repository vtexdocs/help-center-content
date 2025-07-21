---
title: 'Como bloquear customizações para investigar problemas no front-end da loja'
id: 5c1a4bvVK8rAvKLczhkCnY
status: PUBLISHED
createdAt: 2020-04-20T12:59:14.576Z
updatedAt: 2023-04-12T14:38:14.185Z
publishedAt: 2023-04-12T14:38:14.185Z
firstPublishedAt: 2020-04-20T13:31:24.105Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 4iKDU1m0huXy1qFWff7vY5
slugEN: blocking-customizations-to-troubleshoot-front-end-issues
locale: pt
legacySlug: como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja
---

<div class="alert alert-warning">
 Tutorial válido apenas para lojas CMS Portal Legado.
</div>

Neste artigo, você vai aprender como verificar a origem de um problema front-end. O primeiro passo é bloquear as customizações de front-end. A partir da resposta do site, será possível entender se o problema está na informação que a VTEX entrega de forma nativa ou na customização da sua página.

Para fazer isso, vamos ensinar como retirar as customizações por meio de uma ferramenta nativa do próprio Chrome, o **DevTools**. Existe também a opção de usar apps e extensões do Chrome que retiram as customizações, porém a solução nativa tende a ser mais segura e eficiente.

## Como configurar o DevTools

Para configurar o [Chrome DevTools](https://developer.chrome.com/docs/devtools/), siga os passos abaixo. 

1. Abra o [Google Chrome](https://www.google.com/intl/pt-BR/chrome/) no seu computador.
2. Clique no botão `F12` do seu teclado ou com o botão direito do mouse em qualquer lugar da tela e selecione **Inspecionar**.
3. Clique nos três pontos verticais na parte superior direita da página, conforme indicado na imagem abaixo.
![Customizations1 - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_1.png)
4. Selecione **Mais ferramentas** e, em seguida, **Bloqueios de solicitação de rede** para bloquear todas as customizações feitas via CSS, JavaScript e Google Tag Manager. 
![Customizations2 - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_2.png)
5. A aba **Bloqueios de solicitação de rede** abrirá em seguida como mostra a imagem abaixo:
![Customizations3 - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_3.png)
6. Clique em `Adicionar padrão` para definir o primeiro recursos será bloqueado. Para adicionar mais recursos, clique em `+` e, depois de defini-lo, clique em `Adicionar`. Essa configuração precisa ser feita apenas uma vez no seu navegador. Inclua os itens abaixo:

 * `*/arquivos/*.js`
 * `*/files/*js`
 * `*/arquivos/*.css`
 * `*/files/*.css`
 * `*gtm.js*`

![Customizations4 - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_4.png)
<ol start ="7">
<li>Marque a opção <b>Ativar bloqueio de solicitação de rede</b> e habilite todos os checkboxes abaixo. Essa será a configuração que ficará definida por padrão, com todas as opções habilitadas para bloqueio.</li>
<li>Agora atualize a página. Ela será exibida sem os componentes customizados.</li>
</ol>

Para voltar a visualizar as customizações, desmarque oa opção **Ativar bloqueio de solicitação de rede** e atualize a página novamente.

Verifique se o comportamento indesejado que você observou originalmente acontece apenas com a customização ativada. Se for o caso, entre em contato com o time responsável pelo seu front-end para que eles verifiquem o que está ocorrendo.

Se mesmo com as customizações bloqueadas o comportamento indesejado permanecer, abra um chamado para o suporte da VTEX detalhando o que está acontecendo.

