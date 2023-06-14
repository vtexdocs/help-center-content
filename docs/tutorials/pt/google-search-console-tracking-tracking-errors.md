---
title: 'Rastreamento Google Search Console - Erros de rastreamento'
id: tutorials_568
status: PUBLISHED
createdAt: 2017-04-27T22:00:16.796Z
updatedAt: 2020-04-06T20:03:36.157Z
publishedAt: 2020-04-06T20:03:36.157Z
firstPublishedAt: 2017-04-27T23:03:39.657Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: rastreamento-google-search-console-erros-de-rastreamento
legacySlug: rastreamento-google-search-console-erros-de-rastreamento
subcategory: 1luKrYptdi8WoMYckakUaM
---

A sessão de **Erros de rastreamento** do Google Search Console tem a funcionalidade de listar todos os erros identificados pelos crawlers do Google.

A sessão de Erros de Rastreamento possui dois grupos de verificação **Erros de Site** e **Erros de URL**.

### Erros de Site

Verifica a qualidade dos principais meios de acesso ao site

- **DNS:** exibe o histórico de erros na requests ao DNS da loja.  
Em caso de erro no DNS identificado a loja deve verificar as configurações de DNS, se o DNS não for apontado direto para a VTEX também será necessário consultar a disponibilidade do serviço de hospedagem.
- **Conectividade do servidor:** exibe o histórico de erros de conectividade com   segmentados em Tempo limite da conexão, Falha na conexão e Sem resposta  
Em caso de erros de Conectividade do servidor identificados, será necessário analisar a continuidade dos erros. Se o erro é pontual pode ser relacionado a uma instabilidade da loja, já se o erro for continuo será necessária a verificação do servidor de hospedagem.
- **Busca de robots.txt:** exibe o histórico de erros nas consultas ao robots.txt da loja.
Em caso de erros identificados o usuário deverá consultar se o arquivo robots.txt está acessível através de sua URL de produção. Ex.: http://www.loja.com/robots.txt

### Erros de URL

Essa seção exibe os erros identificados pelo crawlers do Google segmentados por dispositivos desde da última ação de correção.

- **Desktop:** lista todos os erros identificados pelo crawler
- **Mobile:** lista os erros identificados apenas por crawlers que simulam os dispositivos mobile


## Otimizando a indexação

Para a otimização da indexação de sua loja no Google Search Console será necessário seguir os seguintes passos:

### Consulta

Continuamente os crawler do Google navega por todos os links identificados na Web, ao acessar uma link que retorna erro, o crawler cria um log nessa página.

O Google Search Console lista os logs desde da última correção no painel, se ainda não foi feita a correção ou há muito tempo não é feito, será necessário marcar todos os erros como corrigidos, assim todo o histórico é removido, possibilitando uma nova consulta e  correta identificação de URLs que permanecem com erro.

Os crawlers do Search Console identificam os seguintes erros:

- **301 – Moved Permanently:** É classificado como erro, mas é apenas um retorno indicando que a URL consultada é redirecionada para outra URL.
- **404 – Not Found:** Página não encontrada
- **500 – Internal Server Error:** &#8220;Huston, I have problem!&#8221; &#8211; há algum problema no seu servidor ou nos seus scripts, Geralmente erro 500 deve-se a alguma regra errada ou erro de sintaxy na URL indexada. Um parâmetro de filtro que não está mais disponível também pode gerar o erro.

### Correção

- **Mapeamento:** caso identifique URLs importantes e deseja manter o link indexado, será necessário criar uma mapeamento de URL no portal VTEX redirecionando o tráfego para URL acessível e relevante a URL identificada com erro. Saiba como criar mapeamento de URL na VTEX.
- **Exclusão de indexação:** caso identifique URLs com erro que não possuem importância na estratégia da loja, será necessário a exclusão da indexação da URL na opção "Excluir URL Indexada" do Google Search Console
