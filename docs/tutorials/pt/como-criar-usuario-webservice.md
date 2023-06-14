---
title: 'Criar usuário Web Service'
id: frequentlyAskedQuestions_529
status: DRAFT
createdAt: 2019-01-24T20:45:54.201Z
updatedAt: 2020-06-04T01:35:43.759Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:11:35.477Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: como-criar-usuario-webservice
locale: pt
legacySlug: como-criar-usuario-webservice
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

<div class="alert alert-danger"><p>Atenção: somente os métodos SOAP pertinentes ao <strong>catálogo</strong> são válidos.</p>
<p><strong>Todos os outros métodos do Web Service serão descontinuados no dia 28/02/2017.</strong></p>
<p>Use as APIs REST equivalentes, disponíveis em nosso <a href="//help.vtex.com/developer-docs/">Developer Docs</a>.</p></div>

A criação de credenciais para integrações com o Web Service deve ser feita pelo License Manager, com a funcionalidade de appKey e appToken.

Para a criação dessas chaves, veja o artigo [Criar appKey e appToken para autenticar integrações](/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes).

É necessário que as chaves tenham permissão ao perfil de acesso __WebService__.

No contexto do Web Service, o usuário é o appKey e a senha é o appToken.

Para acessar o Web Service deve ser usada a URL `https://webservice-ACCOUNTNAME.vtexcommerce.com.br/service.svc?wsdl`.
