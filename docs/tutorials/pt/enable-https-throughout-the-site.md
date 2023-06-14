---
title: Ativar HTTPS em todo o site
id: 1igIyCv5IiGWGIekqYYI02
status: PUBLISHED
createdAt: 2017-08-18T16:26:40.067Z
updatedAt: 2022-05-03T20:42:34.297Z
publishedAt: 2022-05-03T20:42:34.297Z
firstPublishedAt: 2017-08-19T00:17:36.439Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: ativar-https-em-todo-o-site
legacySlug: ativar-https-em-todo-o-site
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

O protocolo HTTPS faz com que os dados trafegados entre o site e o usuário estejam criptografados. É essencial para a segurança, especialmente em páginas que possuem formulários com coleta de dados.

Cada vez mais o Google, que naturalmente é um grande influenciador das tecnologias na web, vem estimulando a adoção do protocolo seguro. Hoje em dia, já é bastante importante que o site trafegue 100% em HTTPS.

Por padrão as lojas VTEX vêm com HTTPS ativado somente nas páginas do checkout, mas todo o site conta com certificado SSL (criado no momento de [apontar o domínio à VTEX](/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex), bastando então configurar o protocolo cada página do site. Ao concluir a configuração, sempre que for acessada uma página em HTTP o usuário será redirecionado para a mesma página em HTTPS.

Para isso devemos:

1. Atender aos [requisitos](/pt/tutorial/ativar-https-em-todo-o-site#requisitos);
2. [Verificar se o site funciona em HTTPS](/pt/tutorial/ativar-https-em-todo-o-site#verificar-se-o-site-funciona-em-https);
3. [Ativar o HTTPS nas páginas](/pt/tutorial/ativar-https-em-todo-o-site#ativar-o-https-nas-paginas).

## Requisitos

Antes de ativar o HTTPS é preciso que o seu layout esteja adequado ao uso do protocolo. Qualquer chamada em HTTP numa página HTTPS será barrada, pois caracteriza conteúdo misto (mixed content). 

Mais informações sobre este cenário podem ser encontradas no artigo [O que é mixed content?](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content?hl=pt-br), do próprio Google.

Nessas chamadas HTTP se enquadram: referências a imagens, arquivos CSS, JS e qualquer recurso por meio do qual seu front-end fará download e também comunicação com outras páginas e APIs (Ajax/XHR). Naturalmente, o não carregamento destes recursos pode ser prejudicial à página, impedindo a exibição de certas imagens, o carregamento de estilos do CSS ou das funções do JS.

### Exemplos

- Chamar um script com o seguinte snippet resultaria em problemas: `<script src="http://www.site.com/arquivos/funcao.js"></script>`
- A implementação correta seria: `<script src="https://www.site.com/arquivos/funcao.js"></script>`
- Também é possível usar o protocolo relativo, de modo a seguir o mesmo em que a página for acessada: `<script src="//www.site.com/arquivos/funcao.js"></script>`
- Para arquivos hospedados na VTEX sempre deve ser usado o seguinte formato, que é relativo ao protocolo e ao domínio acessado: `<script src="/arquivos/funcao.js"></script>`

**Atenção:** para chamar rotas externas à VTEX, verifique antes se o destino suporta HTTPS.

## Verificar se o site funciona em HTTPS

A forma mais prática de saber se o site atende aos requisitos é navegando pelas páginas em HTTPS. Para fazer isso sem efetivamente ativá-lo basta utilizar o ambiente beta (`{NOMEDALOJA}.vtexcommercebeta.com.br`), onde toda a navegação é forçada para passar por HTTPS. 

Qualquer caso de conteúdo misto será reportado pelo navegador. As requisições barradas serão reportadas na seção Network do Dev Tools.

## Ativar o HTTPS nas páginas

Após conferir e adequar (se necessário) todo o layout, páginas e recursos do site, já podemos habilitar o HTTPS sem ter problemas. 

Todas as páginas do site podem ser alteradas individualmente conforme o artigo [Como alterar o protocolo HTTP ou HTTPS das páginas do meu site](/pt/tutorial/como-ter-o-protocolo-https-nas-paginas-da-minha-loja). Note que todas as páginas do checkout já vem com HTTPS ativo por padrão.

É possível alterar o protocolo em todas as pastas de uma única vez com o uso de nossa API, documentada [nesta coleção do Postman](https://developers.vtex.com/reference/change-uri-schema).

<div class="alert alert-warning">
<p><strong>Atenção:</strong> evite ter o protocolo HTTPS ativado somente em algumas páginas. Ao acessar uma página HTTPS, depois ir para uma página HTTP da mesma loja, o navegador tentará fazer a leitura dos seus recursos forçadamente em HTTPS, e isso pode gerar problemas.</p>
<p>O adequado é ativar o HTTPS em todo o site de uma única vez.</p>
<p>O mesmo vale para websites desktop e mobile (website filho), aonde é necessário tratar o HTTPS de ambos ao mesmo tempo.</p></div>

## Limitações

### Perda de parâmetros

Este [problema conhecido](/pt/known-issues/parametros-de-campanhas-sendo-perdidos-em-redirecionamento-de-http-para-https) foi solucionado! Com o uso da [nova CDN da VTEX](http://help.vtex.com/pt/tutorial/ativar-nova-cdn-da-vtex), o redirecionamento entre páginas mantém os parâmetros originais.

### URLs do XML

Este [problema conhecido](/pt/known-issues/nao-e-possivel-criar-feed-xml-em-https) foi solucionado! Agora as URLs do XML irão seguir o mesmo protocolo configurado para a página de produto.
