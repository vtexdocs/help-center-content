---
title: 'Gerenciamento de anúncios: detalhes do anúncio '
id: 4FF9QYAewqAn610mDHwb0P
status: DRAFT
createdAt: 2021-03-17T01:07:12.412Z
updatedAt: 2024-06-20T21:34:45.076Z
publishedAt: 
firstPublishedAt: 2021-03-17T01:13:19.773Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: offer-details
locale: pt
legacySlug: detalhes-do-anuncio
subcategoryId: 2zVauFUkYn8vgS0y0MfWeK
---

>ℹ️ Para evoluir sua experiência ao sincronizar e atualizar anúncios, o time da VTEX está desenvolvendo uma nova funcionalidade que irá substituir o atual módulo **Gerenciamento de anúncios**.
> Por este motivo, o Gerenciamento de anúncios não receberá novas atualizações ou manutenção. 
> Para conectores e marketplaces que já se integraram com o módulo, solicitamos que entre em contato com nosso time de desenvolvimento através do email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> Para os conectores com interesse em iniciar a integração, solicitamos que aguardem o lançamento do novo módulo, assim que disponível avisaremos a todos os clientes através do [Developer portal na página de release notes](https://developers.vtex.com/updates/release-notes) e [VTEX Help Center na página de novidades](https://help.vtex.com/pt/en/announcements).  

Anúncio é um SKU de um seller que teve seu  preço e estoque configurados e foi enviado para diferentes canais de venda. É no módulo [Gerenciamento de anúncios](https://help.vtex.com/pt/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE) que sellers supervisionam o envio e sincronização de seus anúncios para marketplaces.

A página de **Detalhes do anúncio** é onde todas as informações sobre um anúncio específico são visualizadas. É a partir dela que o seller visualiza as interações ocorridas com um anúncio, os [detalhes de cada interação](https://help.vtex.com/pt/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf) o e os erros detectados. Cada interação do anúncio fica disponível por dez dias a partir do seu registro.

Para acessar a página **Detalhes do anúncio**, siga as instruções abaixo:  

1. No Admin VTEX, acesse **Marketplace > Conexões > Gerenciamento de anúncios**. 
2. Clique no anúncio desejado.  

A página **Detalhes do anúncio** apresenta as seguintes seções:
- [Cabeçalho](#cabecalho)  
- [Status do anúncio](#status-do-anuncio)  
- [Lista de Interações](#lista-de-interacoes)

>ℹ️ O **Gerenciamento de anúncios** permite acompanhar anúncios com o [Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) (Classic e Premium), [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) e marketplaces VTEX. Para conectores que desejam integrar via API, existe o [Guia de integração da Gerenciamento de anúncios](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).

## Cabeçalho

![Offer details PT cabecalho](//images.ctfassets.net/alneenqid6w5/6XRh7RmJr7rfGUfVHER580/1d3d99d4aa6204871518904c7abbef2b/Offer_details_PT_cabecalho.jpg)

O cabeçalho traz algumas informações principais do anúncio para rápida visualização, como imagem, canal nome, status, ID na VTEX e ID no canal. Permite também realizar as seguintes interações por meio do botão `Editar`:

- Editar dados do produto  
- Editar preço   
- Editar estoque     

Ao clicar no botão de `Editar`, você será redirecionado para a página correspondente a cada alteração na VTEX.  

## Status do anúncio

O bloco de _Status do anúncio_ traz mais detalhes sobre o status do anúncio, que pode variar entre _Sincronizado_, _Erro_, _Indisponível_ e _Enviando_.   

### Status: Sincronizado

![Offer details PT status sucesso](//images.ctfassets.net/alneenqid6w5/6s1o33PAsB6H7X3Z0UJxaY/ee786de0eeee54fd2f5ee39fbc4e9d2e/Offer_details_PT_status_sucesso.jpg)

O status *Sincronizado* significa que o anúncio foi recebido com sucesso em um canal e está sendo atualizado tanto pelo marketplace quanto pelo seller, em tempo real.   

### Status: Erro

![Offer details PT status erro](//images.ctfassets.net/alneenqid6w5/5M2tBMrTbrBloZ1093Jdjw/99e44f5378b0fcec010e122d48c2ad12/Offer_details_PT_status_erro.jpg)

O status *Erro* significa que o sistema encontrou um problema que previne um anúncio de ser enviado ou atualizado em um canal, portanto é necessário que o seller o corrija. Erros podem originar do lado do seller VTEX, como descrições de produtos que excedem o limite de caracteres, e do lado do marketplace, como chamadas de API que falharam.   

Caso o status do anúncio seja *Erro*, o bloco de Status do Anúncio irá apontar uma lista com os erros detectados, onde cada erro pode ser expandido para que o seller acesse mais informações sobre o que ocorreu, e como resolvê-lo. Cada erro listado contém:  

- **Nome do erro:** título que resume o erro identificado.
- **Data:** data e hora em que o erro foi identificado.
- **Código:** número identificador desse erro específico, atribuído pelo sistema do _Gerenciamento de anúncios_.
- **Descrição:** parágrafo com mais contexto sobre a falha e sua resolução. 
- **Origem:** o sistema em que a interação ocorreu. Pode ser Catálogo, Estoque ou Preço. 
- **Ajustar Preço/Ajustar Catálogo/Ajustar Estoque**: botão que redireciona o seller para a página correspondente a cada alteração na VTEX, para corrigir o erro. 
- **Ver Interação**: acessa a página de [Detalhes da interação](https://help.vtex.com/pt/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf), para investigar o erro de forma mais granular.

Se ainda existirem erros para serem corrigidos, ou se todos forem corrigidos mas estiverem processando novamente, o status do anúncio continua como erro. O status permanecerá como *Erro* até que as [interações](https://help.vtex.com/pt/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf) sejam finalizadas.  

### Status: Indisponível

![Offer details PT status indisponivel](//images.ctfassets.net/alneenqid6w5/5ASZDWJU36WcdTJPL4HyWh/89c9d4be9f3ce73bc9d39c462895588e/Offer_details_PT_status_indisponivel.jpg)

O status *Indisponível* ocorre quando o anúncio é descartado, por estar inativo ou não incluído na [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) determinada para o canal.

### Status: Enviando

![Offer details PT status enviando](//images.ctfassets.net/alneenqid6w5/4sIUmJ2FxZ02SlOCPNYEi6/e0d021f8201b4188eb386d6de06bf4e5/Offer_details_PT_status_enviando.jpg)

O status *Enviando* é um estado intermediário, quando anúncios ainda estão no processo de envio para o canal. Esse status envolve anúncios que estão sendo enviados pela primeira vez ao marketplace, estão migrando para um novo canal, ou foram reenviados após serem descartados em um canal.   

## Lista de Interações

![Offer details PT lista interacoes](//images.ctfassets.net/alneenqid6w5/78sdw5zgXZJL8aM9wMKqVE/323c0c9d2a17e850dca69cc70a4a00fb/Offer_details_PT_lista_interacoes.jpg)

A lista de *Interações* reúne todas as atualizações de `estoque`, `preço` ou `catálogo` que aquele SKU sofreu. É possível filtrar por origem e por status, além de ajustar quantos itens são mostrados por página. Cada linha corresponde a uma interação ocorrida àquele anúncio, e inclui os seguintes dados:

- **Data:** data e horário em que a interação ocorreu.  
- **Origem:** o sistema em que a interação ocorreu. Pode ser Catálogo, Estoque ou Preço.   
- **Novo valor:** valor de preço ou estoque atualizado, após a interação ter sido realizada com sucesso.   
- **Resultado:** informa o efeito que a interação teve sobre o anúncio. O resultado de uma interação faz com o que o sistema determine o status daquele anúncio, indicando se foi possível enviá-lo e sincronizá-lo ao canal, ou não. Resultados incluem:   
  - **Sucesso:** quando interações fecham seu ciclo de vida corretamente, e geram atualizações em um anúncio em termos de preço, estoque ou catálogo.   
  - **Falha:** quando interações não são realizadas por causa de um erro identificado pelo sistema.   
  - **Aviso:** quando existem interações com aquele evento que trazem mais visibilidade para o processo, mas não geraram atualizações de fato.  
  - **Processando:** quando um evento aberto não foi concluído e ainda deve receber mais detalhes. Esse é um estado transitório, considerando que quando um evento é fechado, só pode terminar em `sucesso`, `falha`, ou `aviso` como seu resultado.   

Para acessar informações mais detalhadas sobre um anúncio, clique na interação desejada para acessar a página [Detalhes da interação](https://help.vtex.com/pt/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf).

## Saiba mais

-  [Módulo Gerenciamento de anúncios](https://help.vtex.com/pt/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE)        
-  [Gerenciamento de anúncios: detalhes da interação](https://help.vtex.com/pt/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf) 

