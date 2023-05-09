---
title: Atualize a sua loja para o Google Analytics 4
id: 01mmrSck8nvXAKsypecT9V
createdAt: 2023-04-28T14:42:52.792Z
updatedAt: 2023-05-03T17:47:48.884Z
publishedAt: 2023-05-03T17:47:48.884Z
contentType: updates
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slug: atualize-a-sua-loja-para-o-google-analytics-4
legacySlug: atualize-a-sua-loja-para-o-google-analytics-4
announcementImageID: 
announcementSynopsisPT: atualize-a-sua-loja-para-o-google-analytics-4
---

A partir de 1º de julho de 2023, o [Google Analytics 4](https://support.google.com/analytics/answer/10089681) (GA4) vai substituir o Universal Analytics, versão anterior da ferramenta de análise de dados do Google. Confira detalhes sobre a mudança [neste comunicado do Google](https://support.google.com/analytics/answer/11583528).

Para continuar rastreando dados sobre a navegação em sua loja VTEX, será necessário criar um registro no GA4 e adaptar algumas configurações na sua loja, se você utilizar o [CMS - Portal Legado](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) ou o [VTEX IO](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2).

## O que mudou?
O Universal Analytics não irá mais processar eventos a partir do dia 1º de julho de 2023. Portanto, a única versão funcional da ferramenta será o Google Analytics 4.

Para garantir a compatibilidade de lojas VTEX com a nova versão do Google Analytics, você precisa criar um registro no Google Analytics 4 e ajustar as configurações da sua conta no Google Tag Manager, conforme descrito no guia [Configurar Google Analytics 4 em loja VTEX](https://help.vtex.com/pt/tutorial/como-configurar-google-analytics-em-loja-vtex--G2P0rmSrEiqCcmUMyUUwG).

Lojas que utilizam VTEX IO também precisam configurar [o app Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager) para ter a integração com o Google Analytics 4. 

## Por que fazer essa mudança?

Essa mudança é necessária para possibilitar que sua loja VTEX que utiliza o [CMS - Portal Legado](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) ou o [VTEX IO](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2) continue compatível com o Google Analytics 4. Dessa forma, ainda será possível obter dados relevantes sobre navegação através da versão mais atual da ferramenta do Google.

## O que precisa ser feito?

Para tornar a sua loja compatível com a nova versão da ferramenta de análise de dados do Google, siga as instruções do guia [Configurar Google Analytics 4 em loja VTEX](https://help.vtex.com/pt/tutorial/como-configurar-google-analytics-em-loja-vtex--G2P0rmSrEiqCcmUMyUUwG).

Se a sua loja utiliza [VTEX IO](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), será necessário ativar uma configuração no VTEX Admin, `Send events in GA4 format`, e configurar o app para receber atualizações do Google Analytics 4. Para mais informações, acesse o guia [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).
