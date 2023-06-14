---
title: 'Como integrar a solução Navegg'
id: frequentlyAskedQuestions_590
status: DRAFT
createdAt: 2017-04-27T22:33:23.709Z
updatedAt: 2019-12-31T14:25:17.464Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:23.530Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slug: como-integrar-a-solucao-navegg
locale: pt
legacySlug: 
---

A Navegg é uma empresa do grupo Buscapé totalmente dedicada à segmentação de audiência online. Por meio da análise de comportamento de navegação, suas soluções criam segmentos de audiência preparados para receber conteúdo e publicidade personalizados, em qualquer parte da web. Entre os segmentos estão grupos sócio-demográficos, intenção de compra e interesse de conteúdo.

Antes de integrar Navegg à plataforma VTEX é necessário, primeiramente, configurar o Google Tag Manager de acordo com os passos descritos no artigo [Integração com o Google Tag Manager](/hc/pt-br/articles/204902998 "Integração com o Google Tag Manager").
Em seguida, basta incluir a tag da Navegg no Google Tag Manager conforme os passo descritos abaixo:
**ATENÇÃO:** a inclusão da tag da Navegg no Google Tag Manager possui particularidades e alguns detalhes devem ser obedecidos para o sucesso da integração. Observe atentamente as orientações.

1. É necessário utilizar a tag completa da Navegg, conforme exemplificado a seguir:

`
&lt;script type="text/javascript"&gt;
var nvgId = "ID_NAVEGG";
var nvgAsync = false;
(function() {
var nvg = document.createElement('script');
nvg.id="navegg";
nvg.type = 'text/javascript';
nvg.async = nvgAsync;
nvg.src = document.location.protocol+'//tag.navdmp.com/tm'+nvgId+'.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(nvg, s);
})();
&lt;/script&gt;`

* O `ID NAVEGG` indicado na tag, é único para sua conta e é informado durante o cadastro na Navegg, além de ficar sempre disponível nas configurações do painel de controle.

2. Acesse o Google Tag Manager, faça o login, e vá para a área “Overview”;

3. Clique no botão **New tag** e preencha as informações solicitadas em cada um dos campos conforme exemplo a seguir;

[![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM-560x456.png)](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM.png "![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM-560x456.png)")
É necessário criar uma regra para que a tag comece a ser impressa.

4. Adicione uma regra para iniciar a impressão da tag clicando em **Add Rule**:

[![Adiciona_tag_GMT_regra](/wp-content/uploads/help-antigo/2014/02/Adiciona_tag_GMT_regra-560x459.png)](/wp-content/uploads/help-antigo/2014/02/Adiciona_tag_GMT_regra.png "![Adiciona_tag_GMT_regra](/wp-content/uploads/help-antigo/2014/02/Adiciona_tag_GMT_regra-560x459.png)")

* Sugerimos que a tag da Navegg esteja em todas as páginas para que a análise seja completa

5. Salve as configurações e aguarde a geração do primeiro relatório, que deve acontecer em aproximadamente 72 horas.Antes de integrar Navegg à sua plataforma de e-commerce VTEX é necessário, primeiramente, configurar o Google Tag Manager de acordo com os passos descritos no artigo [Integração com o Google Tag Manager](/hc/pt-br/articles/204902998 "Integração com o Google Tag Manager").
Em seguida, basta incluir a tag da Navegg no Google Tag Manager conforme os passo descritos abaixo:

* NOTA: A inclusão da tag da Navegg no Google Tag Manager possui particularidades, e alguns detalhes devem ser obedecidos para o sucesso da integração. Observe atentamente as orientações.

1. É necessário utilizar a tag completa da Navegg, conforme exemplificado a seguir:

`
&lt;script type="text/javascript"&gt;
var nvgId = "ID_NAVEGG";
var nvgAsync = false;
(function() {
var nvg = document.createElement('script');
nvg.id="navegg";
nvg.type = 'text/javascript';
nvg.async = nvgAsync;
nvg.src = document.location.protocol+'//tag.navdmp.com/tm'+nvgId+'.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(nvg, s);
})();
&lt;/script&gt;`

* O ID NAVEGG indicado na tag, é único para sua conta e é informado durante o cadastro na Navegg, além de ficar sempre disponível nas configurações do painel de controle.

2. Acesse o Google Tag Manager, faça o login, e vá para a área “Overview”;

3. Clique no botão “New tag” e preencha as informações solicitadas em cada um dos campos conforme exemplo a seguir;

[![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM-560x456.png)](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM.png "![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM-560x456.png)")

* Atenção: É necessário criar uma regra para que a tag comece a ser impressa.

4. Adicione uma regra para iniciar a impressão da tag clicando em “Add Rule”:

[![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM1-560x456.png)](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM1.png "![Adicionar-tag-no-GTM](/wp-content/uploads/help-antigo/2014/02/Adicionar-tag-no-GTM1-560x456.png)")

* Sugerimos que a Tag da Navegg esteja em todas as páginas para que a analise seja completa

5. Salve as configurações e aguarde a geração do primeiro relatório, que deve acontecer em aproximadamente 72 horas.

