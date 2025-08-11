---
title: 'Versões antigas do script VTEX ID serão descontinuadas'
id: 1IHQ2NS5McYgKySOmyEmgU
status: PUBLISHED
createdAt: 2018-03-19T21:14:22.078Z
updatedAt: 2019-12-31T15:13:29.533Z
publishedAt: 2019-12-31T15:13:29.533Z
contentType: updates
productTeam: Identity
author: authors_24
slugEN: old-versions-of-the-vtex-id-script-will-be-deprecated
locale: pt
legacySlug: versoes-antigas-do-script-vtex-id-serao-descontinuadas
announcementImageID: ''
announcementSynopsisPT: 'A partir de 21 de maio, somente a versão mais atual do script do VTEX ID vai ter suporte da plataforma.'
---

Usar versões antigas do script do VTEX ID faz com que sua loja fique exposta a brechas de segurança já resolvidas pelas versões mais recentes. Pensando nisso, decidimos manter o suporte apenas para a última versão e descontinuar todas as anteriores. Esse processo será feito em etapas, conforme o calendário abaixo:

| Versões | Data final |
| ---------- | ---------- |
| 3.13.10 e anteriores | 07/05/2018 |
| 3.13.40 e anteriores | 21/05/2018 |

Para essa mudança acontecer, o script do VTEX ID deverá ser chamado a partir do seguinte link:
`https://vtexid.vtex.com.br/api/vtexid/pub/authentication/vtexid.min.js`

Esse novo método traz uma série de vantagens: ainda mais agilidade nas melhorias do script, garantia de que sua loja está usando a versão mais recente e o fim da necessidade de alterar a rota de chamada depois de uma atualização.

> ⚠️ **Atenção:**<br> Não recomendamos o uso do link com a versão hard-coded, porque em breve vamos suspender o suporte a esse modo de importação do script.

Como essas mudanças impactam diretamente no acesso do cliente à sua loja, recomendamos que você não espere o prazo final e passe a utilizar o novo método de chamada do script do VTEX ID o quanto antes.
