---
title: 'Performance de Páginas Web'
id: 4cRiiTByzNMulixZec5YaG
status: ARCHIVED
createdAt: 2023-03-29T21:07:26.003Z
updatedAt: 2024-05-29T20:37:59.664Z
publishedAt: 
firstPublishedAt: 2023-03-29T21:11:57.287Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: web-page-performance
locale: pt
legacySlug: performance-de-paginas-web
subcategoryId: 1TIJqw8kV2Yok4iQe4SAkq
---

<div class="info info-alert">
O módulo Performance de Páginas Web foi descontinuado. Saiba mais em <a href="https://help.vtex.com/announcements/descontinuacao-performance-de-paginas-web--4zrnpCSC8R8OFpahiaf2sE">Descontinuação do módulo Performance de Páginas Web</a>  
</div>

O [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) é uma ferramenta desenvolvida pelo Google para gerar relatórios sobre o desempenho de uma página, tanto em dispositivos móveis quanto em computadores, fornecendo sugestões sobre como essa página pode ser aprimorada. A ferramenta usa as [Principais métricas da web do Google](https://web.dev/vitals/#core-web-vitals) para avaliar o desempenho online. 

A tela “Performance das páginas web” disponibiliza a ferramenta [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) do Google em seu Admin VTEX. Assim, é possível monitorar o desempenho das URLs do seu ecommerce. O novo recurso ajuda os lojistas a monitorar a experiência de desempenho das principais páginas do seu ecommerce e, ao mesmo tempo, descobrir as razões por trás de um desempenho mais lento. 

Embora o dashboard “Performance das páginas web” ofereça as mesmas funcionalidades da ferramenta PageSpeed Insights do Google, somente no Admin VTEX os comerciantes conseguem adicionar várias URLs e monitorá-las continuamente. 

![Web page performance Dash PT](https://images.ctfassets.net/alneenqid6w5/4EHCyrE0JQxGgxhk1YVdMY/69b6c76024c031cda5ec2a557620d067/Screen_Shot_2022-06-29_at_15.37.19.png)

## Por que você deve ficar de olho no desempenho de uma página web?

No mercado do comércio digital, oferecer uma experiência que não consuma muito tempo do para encontrar as informações de que precisa ou para concluir um pedido pode ser a vantagem competitiva entre as marcas que disputam a atenção do mesmo usuário.

Uma prática importante recomendada às empresas é otimizar a velocidade da loja virtual. Assim, é possível ser mais ainda competitivo em um mercado em que segundos de tempo de carregamento de página fazem a diferença.

A ferramenta PageSpeed Insights do Google define uma maneira de avaliar uma boa experiência do usuário na Internet, garantindo que as páginas sejam rápidas, responsivas e tenham boa usabilidade. 

Uma boa experiência do usuário costuma gerar melhores resultados nos negócios e nas conversões de vendas. As [Principais métricas da web do Google](https://web.dev/vitals/#core-web-vitals) também formam parte dos sinais de classificação da experiência de uma página na Pesquisa Google. É por isso que melhorar suas pontuações nessas métricas é outra forma de fazer com que mais usuários encontrem seu site.

## Dados

As métricas de desempenho são obtidas através de dois tipos de dados:

* **Dados de campo:** monitoram usuários reais, que de fato carregam e interagem com a página. Esse tipo de dados é importante para entender o desempenho do seu site sob condições variáveis, como funcionalidades de rede, e qual a experiência de pessoas reais em sua página. Os dados de campo encontram-se disponíveis na seção Principais métricas da web da página. Obtidos pelo [Relatório de experiência do usuário do Chrome](https://developers.google.com/web/tools/chrome-user-experience-report), tais dados são extraídos a partir de dados coletados das URLs adicionadas durante um período médio de 28 dias, ou seja, levará um tempo para que as melhorias incorporadas à sua página sejam refletidas nos números dos dados de campo. Recomendamos usar dados de laboratório para avaliar os resultados a curto prazo.
* **Dados de laboratório:** usam ferramentas para simular o carregamento de uma página em tempo real, em um ambiente consistente e controlado. Esse tipo de dados é importante ao desenvolver novas funcionalidades, a fim de testar o desempenho antes de liberá-las ao público. Os dados de laboratório encontram-se disponíveis na seção Desempenho da página.

Eles são obtidos a partir de simulações com o [Lighthouse](https://github.com/GoogleChrome/lighthouse) para fins de diagnóstico. Além disso, é possível atualizar manualmente o relatório e, assim, obter dados quase em tempo real nessas seções.

Não compare os resultados desses dois tipos de dados. Como eles vêm de fontes diferentes e servem propósitos diferentes, não é possível compará-los. Saiba mais sobre a aplicação de cada tipo de dado na documentação [Métricas de desempenho centradas no usuário](https://web.dev/user-centric-performance-metrics/#how-metrics-are-measured) do Google.

>ℹ️ O PageSpeed Insights analisa a atividade do 75º percentil dos carregamentos de páginas, diferenciando dispositivos móveis e computadores, para garantir que seu site atinja as metas recomendadas para todas as métricas.

### Como usar dados de campo e de laboratório para otimizar as principais métricas da web

É possível alternar entre dados de laboratório e de campo para testar diferentes hipóteses e, acima de tudo, otimizar as principais métricas da sua página. Sugerimos seguir essas etapas gerais em seu projeto:

1. Avalie o estado atual dos dados de campo.
2. Defina uma meta para melhorar a experiência do usuário.
3. Defina uma hipótese para alcançá-la. 
4. Reúna provas com as principais métricas da web.
5. Teste as possíveis soluções com dados de laboratório.
6. Lance uma nova versão.
7. Valide com dados de campo ao longo do tempo.
8. Repita o processo.

## Lista de URLs

Com a Performance das páginas web, é possível adicionar várias URLs para avaliar o desempenho de cada página constantemente. 

A URL é exibida em um card junto com:
- __Avaliação:__ resultado da avaliação de desempenho da URL, incluindo avaliações das principais métricas da web: Reprovado, Bom, Não aplicável e Sem dados suficientes. Saiba mais na seção Principais métricas da web deste artigo.   
- __Impressões:__ quantidade de vezes em que as 10 principais URLs do seu site de ecommerce foram acessadas nos últimos 28 dias.  

Navegue pelos links adicionados e selecione um deles para ser exibido na tela “Performance das páginas web”. Feito isso, analise as métricas de desempenho do link selecionado. Clique no ícone de menu <i class='fa-solid fa-ellipsis-vertical'></i>. Além disso, é possível acessar as opções `Copiar URL` e `Visitar página`; basta clicar nos botões correspondentes no card da URL.

>ℹ️ O PageSpeed Insights do Google também exibe métricas relacionadas a todo o domínio da URL inserida, caso não haja dados suficientes a serem exibidos para determinada página. O dashboard Performance das páginas web, por sua vez, exibe dados referentes apenas à URL, o que torna sua avaliação mais prática.

### Quais URLs monitorar? 
Se seu storefront estiver incorporado à VTEX, a página exibe, por padrão, as 10 principais páginas com mais acesso em sua loja. 

Se este não for o caso, recomenda-se monitorar as URLs com maior impacto nos negócios, como, por exemplo, aquelas presentes no seu funil de vendas, como carrinho de compras, checkout ou páginas de pagamento.

Além disso, é possível editar a lista ao adicionar ou excluir URLs. Adicione URLs de campanhas ou promoções recentes, ou até mesmo de concorrentes que atuam no segmento da sua loja. 

### Como adicionar uma URL

1. No Admin VTEX, acesse **Dashboards > Performance das páginas web**,  ou digite *Performance das páginas web* na barra de busca no topo da página.    
2. Na parte superior da página, clique em + **Adicionar**.  
3. Digite o link desejado no campo.   

    > O link deve seguir o formato abaixo: `https://www.exemplo.com/`.

4. Clique em + Adicionar URL e cole o link desejado para adicionar mais de uma URL.  
5. Para excluir uma URL, clique no ícone de lixeira <i class='fa-solid fa-trash-can'></i>.  
6. Clique em **Adicionar**.    

### Como excluir uma URL

Observação: não é possível excluir as 10 páginas mais acessadas do seu ecommerce. Só é possível excluir as páginas que você mesmo adicionou. 

1. No Admin VTEX, acesse **Dashboards > Performance das páginas web**, ou digite *Performance das páginas web* na barra de busca no topo da página.   
2. Se a URL que aparece na página não é a que deseja excluir, clique nela e navegue pela lista de URLs adicionadas.  
3. Clique na URL desejada para selecioná-la.  
4. Clique no botão `Excluir`.  

## Principais métricas da web

![Core web vitals PT](//images.ctfassets.net/alneenqid6w5/2dqXPGBXhoqAOlu98GvSjg/a7221d5dc9e5197b55069697fbd3f758/Screen_Shot_2022-06-29_at_15.48.06.png)

Para cada URL, o dashboard Performance das páginas web exibe as [Principais métricas da web do Google](https://web.dev/vitals/#core-web-vitals) referentes à página em questão. 

Essas métricas são o subconjunto de [métricas da web](https://web.dev/vitals/) que se aplica a todas as páginas ao avaliar as métricas relacionadas à experiência do usuário na página. Cada uma delas representa um aspecto diferente da experiência do usuário, podendo ser avaliada no campo.

Cada uma dessas métricas está associada à usabilidade, com o objetivo de diagnosticar a capacidade da página de oferecer ou não uma experiência ideal aos usuários. Clique no link abaixo para consultar a documentação do Google e saber mais sobre cada uma das principais métricas:

<table>
  <tr>
   <td><strong>Principais métricas da web</strong>
   </td>
   <td><strong>Experiência do usuário</strong>
   </td>
  </tr>
  <tr>
   <td><a href="https://web.dev/lcp/">Maior Renderização de Conteúdo (LCP)</a>
   </td>
   <td>Carregamento: <em>está carregando?</em>
   </td>
  </tr>
  <tr>
   <td><a href="https://web.dev/fid/">Latência na primeira entrada  (FID)</a>
   </td>
   <td>Interatividade: <em>é responsiva?</em>
   </td>
  </tr>
  <tr>
   <td><a href="https://web.dev/cls/">Mudança de layout cumulativa (CLS)</a>
   </td>
   <td>Estabilidade visual: <em>é agradável?</em>
   </td>
  </tr>
</table>

### Intervalos e avaliações das principais métricas da web

Cada uma dessas métricas possui um [intervalo numérico](https://web.dev/defining-core-web-vitals-thresholds/) que define sua classificação. Os intervalos podem caracterizar essas páginas como:

* **Boas:**  o código de cor é verde. 
* **Precisam de melhorias:** o código de cor é laranja.
* **Ruins:** o código de cor é vermelho. 

Ao clicar no botão `Ver detalhes`, o card expande-se e mostra os intervalos de cada métrica, como na imagem abaixo. Para cada intervalo, a página exibe o percentual de dados que caiu para cada categoria.

Além disso, há uma avaliação geral de todos os intervalos de classificação das métricas, ou um “resultado” da combinação desses números. As categorias de **avaliação das principais métricas da web** dividem-se em:

* **Aprovado:** ocorre quando três das principais métricas ficam dentro do intervalo “bom”.  
* **Reprovado:** ocorre se, ao menos uma das principais métricas encontra-se fora do intervalo “bom”.   
* **Sem dados:** ocorre se a página não obteve uma quantidade suficiente de acessos nos últimos 28 dias para validar a avaliação.  
* **Sem dados suficientes para análise:** ocorre caso algumas das principais métricas tenham uma quantidade suficiente de acessos para serem avaliadas, mas outras não.  

No dashboard de Performance das páginas web, você encontra os limites e as avaliações.   

## Oportunidades

 O card de oportunidades indica a quantidade de oportunidades de melhoria encontradas pelo PageSpeed Insights, com base em [auditorias de desempenho](https://web.dev/lighthouse-performance/). Ao clicar em `Ver detalhes`, uma janela aparece com a Pontuação de desempenho diagnosticada pelo Lighthouse. No modal, clique no ícone de seta para expandir cada linha. Clique em `Saiba mais` para ver uma breve descrição e um link para a documentação do Google.

 ## Pontuação de desempenho / Métricas de diagnóstico

 Na seção Desempenho, você encontra uma pontuação que sintetiza o desempenho simulado da página. Essa pontuação é definida pelo [Lighthouse do Google](https://developer.chrome.com/docs/lighthouse/overview/), que coleta dados de laboratório e analisa as informações de diagnóstico sobre a página. As pontuações são classificadas como:

 * **Boas**: acima de 90. O código de cor é verde.
* **Precisam de melhorias:** de 50 a 90. O código de cor é laranja.
* **Ruins**: abaixo de 50. O código de cor é vermelho.

>⚠️ Observação: há uma variação significativa de desempenho entre as lojas e esta variação depende de como a arquitetura do seu storefront foi projetada. Storefronts complexos, com vários scripts e recursos externos, tendem a apresentar um desempenho com pontuações menores. Para lojas desenvolvidas com VTEX IO, consulte [VTEX IO: Debugging Performance Issues](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-debugging-performance-issues) (Depurando problemas de desempenho, em inglês). Para lojas que usam o [FastStore](https://www.faststore.dev/), há um [relatório automatizado do Lighthouse sobre visualizações de implantação](https://www.faststore.dev/releases/2022/04/22/webops).

Abaixo da pontuação são exibidas as pontuações individuais em uma lista de métricas da web, junto com o código de cor que indica o seu intervalo. Para atualizar manualmente a pontuação, clique no ícone de atualização <i class='fa fa-refresh'></i>.

## Saiba mais

* [VTEX IO: Getting Started with Lighthouse (VTEX IO: Primeiros passos com o Lighthouse, em inglês)](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-getting-started-with-lighthouse)  
* [Tracking Changes in Lighthouse Performance Score (Monitoramento de alterações na pontuação de desempenho do Lighthouse, em inglês)](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-tracking-changes-in-lighthouse-performance-score)  

