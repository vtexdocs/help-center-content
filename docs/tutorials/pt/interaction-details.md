---
title: 'Gerenciamento de anúncios: detalhes da interação'
id: 5qC6XPkyUsYPd0dqKHQNlf
status: DRAFT
createdAt: 2021-03-17T01:16:13.273Z
updatedAt: 2024-06-20T21:43:33.011Z
publishedAt: 
firstPublishedAt: 2021-03-17T01:20:58.901Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: detalhes-da-interacao
locale: pt
legacySlug: detalhes-da-interacao
subcategory: 
---

>ℹ️ Para evoluir sua experiência ao sincronizar e atualizar anúncios, o time da VTEX está desenvolvendo uma nova funcionalidade que irá substituir o atual módulo **Gerenciamento de anúncios**.
> Por este motivo, o Gerenciamento de anúncios não receberá novas atualizações ou manutenção. 
> Para conectores e marketplaces que já se integraram com o módulo, solicitamos que entre em contato com nosso time de desenvolvimento através do email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> Para os conectores com interesse em iniciar a integração, solicitamos que aguardem o lançamento do novo módulo, assim que disponível avisaremos a todos os clientes através do [Developer portal na página de release notes](https://developers.vtex.com/updates/release-notes) e [VTEX Help Center na página de novidades](https://help.vtex.com/pt/en/announcements).   

A página de **Detalhes da interação**, do módulo [Gerenciamento de anúncios](https://help.vtex.com/pt/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE), permite que sellers visualizem de forma mais completa as interações ocorridas a um anúncio durante seu processo de envio e sincronização com um canal. Cada interação do anúncio fica disponível por dez dias a partir do seu registro.

Para acessar a página de **Detalhes da interação**:

1. No Admin VTEX, acesse **Marketplace > Conexões > Gerenciamento de anúncios**. 
2. Selecione o anúncio desejado.  
3. Na aba **Interações**, clique na interação desejada. 

A página **Detalhes da interação** apresenta as seguintes seções:  
- [Cabeçalho](#cabecalho)    
- [Resultado da Interação](#resultado-da-interacao)    
- [Linha do tempo](#linha-do-tempo)     

<div class = "alert alert-info">
O <b>Gerenciamento de anúncios</b> permite acompanhar anúncios com o <a href="https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq">Mercado Livre</a> (Classic e Premium), <a href="https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm">Netshoes</a> e marketplaces VTEX. Para conectores que desejam integrar via API, existe o <a href="https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors">Guia de integração da Gerenciamento de anúncios</a>.
</div>

## Cabeçalho
![Interaction details PT cabeçalho](https://images.ctfassets.net/alneenqid6w5/7zEocS2MW5dSRzZaaqNDUc/13e23260eaabde52ec1c38246a05be68/Interaction_details_PT_cabe__alho.jpg)
O *cabeçalho* traz informações principais do anúncio para rápida visualização, como nome do SKU, logo do canal para onde foi enviado, seu ID na VTEX e ID no canal.

## Resultado da Interação

As interações, ou atualizações de  um [anúncio](https://help.vtex.com/pt/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) que podem ser do tipo `Catálogo`, `Preço` ou `Estoque`, são compostas por uma série de eventos do sistema, chamados de registros. Cada registro traz evidências detalhadas a respeito das etapas ocorridas durante o envio e sincronização do anúncio, dando mais contexto técnico para o monitoramento e correção de erros em anúncios.

O bloco de *Resultado da Interação* informa o efeito que a interação teve sobre o anúncio, calculado a partir da combinação de registros que formam a interação. O resultado de uma interação faz com o que o sistema determine o status daquele anúncio, indicando se foi possível enviá-lo e sincronizá-lo ao canal, ou não. Resultados das interações incluem: 

### Resultado: Sucesso
![Interaction details PT resultado sucesso](https://images.ctfassets.net/alneenqid6w5/72PZOesROTjIZbmFOTQ8jk/4c0f6f4dacc479647a334304f46156ba/Interaction_details_PT_resultado_sucesso.jpg)
O status de uma interação é *Sucesso* quando interações cumprem com o seu efeito esperado. Isso significa que foi possível enviar o anúncio ao canal corretamente, ou que de fato geraram atualizações em um anúncio em termos de preço, estoque ou catálogo. 

### Resultado: Falha
![Interaction details PT resultado falha](https://images.ctfassets.net/alneenqid6w5/1ZR16rSnDEVY0812xY4XFZ/3818ba5ecd25b3aed73ad7c8d27950b3/Interaction_details_PT_resultado_falha.jpg)
O status de uma interação é *Falha* quando interações não são realizadas por causa de um erro identificado pelo sistema. Resultados desse tipo acabam gerando o status *Erro* em um anúncio, impedindo-o de ser enviado ou atualizado corretamente no canal. 

Caso o resultado da interação seja *Falha*, o bloco aponta uma lista com as falhas detectadas, onde cada uma pode ser expandida para que o seller acesse mais informações sobre o que ocorreu.

### Resultado: Aviso
![Interaction details PT resultado aviso](https://images.ctfassets.net/alneenqid6w5/7kwwswW5m4kVL3fXWzxKSV/6eb5baa530de97d609c827f07344eb38/Interaction_details_PT_resultado_aviso.jpg)
O status de uma interação é *Aviso* quando existem interações que trazem mais visibilidade para as etapas ocorridas no processo de envio e atualização de um anúncio, mas não geraram atualizações de fato.

### Resultado: Processando
![Interaction details PT resultado processing](https://images.ctfassets.net/alneenqid6w5/1gilFQQUmLVzTznTQDNv7G/754b810e1c0feaeed6f79203fab2bea1/Interaction_details_PT_resultado_processing.jpg)
O status de uma interação é *Processando* quando uma interação não foi concluída e ainda deve receber mais ações. Esse é um estado transitório, considerando que quando um evento é fechado, só pode terminar em `sucesso`, `falha`, ou `aviso` como seu resultado. 

## Linha do tempo

![Interaction details PT linha do tempo](https://images.ctfassets.net/alneenqid6w5/6rLi24P5ltS8XFIEBIn6hb/13786eef8d2ec669080b995324c507d8/Interaction_details_PT_linha_do_tempo.jpg)
Uma interação é aberta pelo sistema para dar início a uma atualização e contém uma série de registros para realizar as ações necessárias para que isso aconteça. 

A linha do tempo na **Detalhes da interação** organiza cronologicamente os registros que ocorreram dentro de cada interação, sendo que as informações ficam disponíveis para consulta por dez dias. A interação é fechada pelo sistema quando seu objetivo é concluído e não existem mais registros a serem feitos. A linha do tempo da apresenta os seguintes dados:

- **Registros:** etapas dentro de uma interação, que podem ser do tipo:    
  - *Sucesso*: registros que concluíram o objetivo da interação com sucesso. Por exemplo, registros que concluíram de fato uma atualização em preço, catálogo, ou estoque.    
  - *Info:* registros que expõem as ações de uma interação trazendo visibilidade para investigações mais técnicas. Podem incluir processos internos de um sistema, ou chamadas entre dois sistemas, por exemplo, posicionar um anúncio na fila, indicar que um anúncio está sendo processado, indicar que uma chamada ao Catálogo foi feita.  
  - *Advertência:* registros nos quais a comunicação entre dois sistemas falha e não existem ações que o usuário possa realizar para resolvê-la. Geralmente são casos onde o sistema faz a retentativa automática, por exemplo serviços não disponíveis, throttling, etc.  
  - *Falha:*  registros que detectam erros que evitam que um anúncio seja enviado e sincronizado corretamente no canal e requerem resolução manual do usuário. Erros podem originar do lado do seller VTEX, como descrições de produtos que excedem o limite de caracteres, e do lado do marketplace, como chamadas de API que falharam.  
- **Data:** data em que o registro ocorreu.  
- **Descrição**: texto contendo mais detalhes sobre o evento.  
- **Agente**: sistema ou agente responsável pela ação.   
- **Evidência:** `cURL`  da chamada de API realizada entre dois sistemas (clique no ícone de lupa para acessar as evidências de cada registro).   

## Saiba mais

-  [Módulo Gerenciamento de Anúncios](https://help.vtex.com/pt/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE)       
-  [Gestão de anúncios: detalhes do anúncio](https://help.vtex.com/pt/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P)    
