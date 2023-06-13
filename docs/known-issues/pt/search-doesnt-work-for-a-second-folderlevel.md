---
title: Busca não funciona para um segundo nível de diretório
id: 6oAmtEIyyWWciICgSuYC00
status: PUBLISHED
createdAt: 2017-04-11T22:25:02.223Z
updatedAt: 2022-12-22T20:43:21.872Z
publishedAt: 2022-12-22T20:43:21.872Z
firstPublishedAt: 2017-04-11T22:32:49.385Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: busca-nao-funciona-para-um-segundo-nivel-de-diretorio
kiStatus: Backlog
internalReference: 
---

## Sumário

<div class = "alert alert-warning">
  <strong>Atenção</strong>: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.
</div>

Na [documentação da Busca da VTEX](http://help.vtex.com/tutorial/como-funciona-a-busca-da-vtex/), temos o seguinte cenário contemplado:

De acordo com o termo buscado, o sistema pode renderizar o conteúdo de um layout caso o diretório tenha o nome igual ao termo buscado.

Se o termo buscado corresponder exatamente com o nome de uma pasta configurada no Gerenciador de Portal (landing page), essa pasta será renderizada.

Contudo, para uma estrutura feita no portal em que uma landing page está dentro de outro diretório, essa funcionalidade não funciona:
`/pasta1/pasta2`
`http://www.sualoja.com.br/pasta1/landingpage`


## Simulação

Criar um segundo nível de diretório no Portal.

1. Catalog > Portal > Web Sites > Selecione o Web Site > "/" 
2. Dentro de uma pasta, criar uma nova pasta
3. Atribuir um layout a essa nova pasta
4. Buscar no seu site pelo nome da nova pasta - o resultado deve ser: 404 Page Not Found

## Workaround

Atualmente não existe workaround para esse problema.

