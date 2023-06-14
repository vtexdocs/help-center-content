---
title: "Revise as entradas CAA da sua loja"
id: 4mBSMpdCByI4c6G64G82Um
status: PUBLISHED
createdAt: 2018-11-01T14:32:53.355Z
updatedAt: 2019-12-31T15:13:16.147Z
publishedAt: 2019-12-31T15:13:16.147Z
contentType: updates
productTeam: Reliability
author: 245tA425AIeioKAk2eaiwS
slug: confira-as-entradas-caa-da-sua-loja
legacySlug: confira-as-entradas-caa-da-sua-loja
announcementImageID: ""
announcementSynopsisPT: Recomendamos que você atualize as entradas CAA dos seus gerenciadores de DNS até 9/11.
---

Com a aproximação da __Black Friday__, recomendamos que você atualize as entradas CAA dos seus gerenciadores de DNS até __9 de novembro__. Essa ação é necessária para que o certificado SSL seja gerado e/ou renovado. Só assim é possível usar a CDN da VTEX.

<div class="alert alert-warning">
<strong>Atenção:</strong> esses tipos de entrada podem não estar disponíveis na interface do seu gerenciador de DNS, mas muitas vezes é possível gerenciá-los através de chamados no suporte da ferramenta específica.
</div>


## O que você precisa fazer?
Nas configurações do __Gerenciador de DNS__, confira (ou peça para o responsável pela gestão do domínio da sua loja) se as entradas abaixo estão configuradas assim:

- `domain.com.    CAA     0   issue   “letsencrypt.org”`
- `domain.com.    CAA     0   issue   “comodoca.com”`
- `domain.com.    CAA     0   issue   “digicert.com”`
- `domain.com.    CAA     0   issue   “globalsign.com”`


## Qual o impacto?
Cadastrar as novas entradas apenas permite que as entidades __Digicert__, __Comodo__, __Globalsign__ e __Let's encrypt__ possam gerar e renovar certificados para seu domínio. __Esses certificados são fundamentais para que sua loja possa usar a CDN da VTEX e ter uma performance superior.__ Se a atualização não for feita, sua loja pode ter problemas de performance e demorar mais para ser carregada.

<div class="alert alert-info">
Lojas que não têm nenhuma entrada CAA configurada <strong>não precisam fazer a configuração</strong> e <strong>não serão afetadas</strong>.
</div>


## Conteúdos úteis
- [https://letsencrypt.org/docs/caa/](https://letsencrypt.org/docs/caa/)
- [https://sslmate.com/caa/](https://sslmate.com/caa/)
- [https://sslmate.com/caa/about](https://sslmate.com/caa/about)
