---
title: 'Varejo de destino'
createdAt: 2026-09-30T00:00:00.000Z
updatedAt: 2026-09-30T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: destination-retail
locale: pt
---

Seu site pode receber tráfego de campanhas offsite configuradas pela equipe do [VTEX Ads](/pt/docs/tracks/retail-media) na conta do anunciante. Na tela **Varejo de destino,** você define em quais campanhas seu site aparece como destino e como seus dados de conversão são compartilhados.

Uma campanha offsite exibe o anúncio fora da sua loja e leva o usuário até ela. Para que a compra resultante desse acesso seja atribuída à campanha, o VTEX Ads precisa registrar a chegada do usuário na sua vitrine ou no seu app. A tela trata, portanto, de dois assuntos distintos: a decisão de participar como destino e a coleta de dados que registra o acesso.

A tela está disponível apenas para contas do tipo publisher, identificadas pelo selo **Retail Media Publisher** no Admin.

> ℹ️ O publisher, também chamado de publicador, é o varejista que oferece espaços publicitários para monetização. Para entender esse e os demais papéis envolvidos em Retail Media, consulte [Papéis e atribuições em Retail Media](/pt/docs/tracks/papeis-e-atribuicoes-em-retail-media).

> ⚠️ Participar como destino e ter a coleta funcionando são estados independentes. Ativar o toggle **Disponível para novas campanhas** declara a intenção de receber tráfego de campanhas offsite, mas não instala nem valida nenhuma coleta. A coleta passa a funcionar somente quando o script Web ou o SDK mobile está implementado e o VTEX Ads recebe o sinal correspondente. É possível manter o toggle ativo com as duas superfícies em **Não detectado**. Nesse caso, a atribuição de que os anunciantes dependem não acontece.

## Antes de começar

- Sua loja precisa estar cadastrada no VTEX Ads como publisher e ter o Publisher ID (UUID) fornecido pela equipe do VTEX Ads. A criação da conta publisher, a emissão do Publisher ID e, quando aplicável, a vinculação à conta VTEX são feitas pela equipe do VTEX Ads.
- Para que a atribuição das campanhas offsite funcione, a coleta precisa estar implementada em pelo menos uma superfície (web ou app mobile). Isso não é condição para acessar a tela nem para ativar o toggle de participação. Os procedimentos completos estão nos guias do Portal do Desenvolvedor indicados na seção [Instalação](#instalacao) deste artigo.

## Acessar a tela Varejo de Destino

Para acessar a tela de **Varejo de Destino,** siga os passos abaixo:

1. Acesse o painel Admin para publishers do **VTEX Ads.**
2. Clique no ícone do menu no canto esquerdo superior.
3. Clique em **Varejo de Destino,** que fica na seção **Configurações.**

## Listar como varejista de destino

O card **Listar como varejista de destino** controla a participação da sua loja como destino de campanhas offsite. O controle do card é o toggle **Disponível para novas campanhas.**

Com o toggle ativo, sua loja fica disponível como destino de novas campanhas offsite, e seus dados de conversão são compartilhados com o VTEX Ads para medir performance.

Com o toggle desativado, sua loja deixa de aparecer na lista de destinos disponíveis para novas campanhas offsite. Campanhas que já estavam em andamento no momento da desativação continuam rodando normalmente e não são interrompidas.

## Instalação

No card **Instalação**, você configura o rastreamento nos canais que recebem tráfego (web e mobile), para que seja possível atribuir a performance das campanhas offsite que direcionam para a sua loja.

O card lista duas superfícies, **Web** e **App mobile**, cada uma com o próprio status de coleta. O status **Não detectado** indica que o VTEX Ads ainda não recebeu sinal de coleta daquela superfície.

> ℹ️ O status de uma superfície não depende da posição do toggle **Disponível para novas campanhas**, e o toggle não depende do status das superfícies. Uma superfície em **Não detectado** continua sem coleta mesmo com o toggle ativo.

### Web

A tela apresenta dois casos de instalação para a superfície **Web**:

- **Loja nativa VTEX:** instalar o app VTEX Ads Agent e definir o Publisher ID nas configurações do app.
- **Vitrine independente:** adicionar um script nas páginas da vitrine. A tela exibe o script pronto para copiar.

O procedimento de instalação está descrito em [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script).

### App mobile

Se você tem um app mobile, instale o Activity Flow SDK para capturar compras originadas de campanhas offsite. O procedimento está em [Installing Activity Flow in mobile apps](https://developers.vtex.com/docs/guides/installing-activity-flow-in-mobile-apps), que se desdobra nos guias de React Native e de Flutter. O card também exibe o botão `Ver documentação do SDK mobile`.

## Como sua loja é escolhida como destino

Durante a configuração de uma campanha offsite, um anunciante ou o time do **VTEX Ads** vê varejos de destino que:

- Estejam com o toggle **Listar como varejista de destino** ativado.
- Tenham pelo menos uma superfície de coleta ativa nas últimas 72 horas.

## Anunciantes enviando tráfego de campanhas offsite para seu site

O card **Anunciantes enviando tráfego de campanhas offsite para seu site** lista os anunciantes que estão veiculando campanhas offsite com destino na sua loja. Em cada linha da tabela você encontra as seguintes informações:

- **Anunciante:** Nome do anunciante que está enviando tráfego de campanhas offsite para a sua loja.
- **Campanhas ativas:** Número de campanhas offsite ativas desse anunciante que direcionam tráfego para a sua loja.

## Saiba mais

- [Métricas e atribuição do VTEX Ads](/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads)
- [Glossário de Retail Media](/pt/docs/tracks/glossario-de-retail-media)
- [VTEX Ads: primeiros passos](/pt/docs/tracks/vtex-ads-primeiros-passos)
- [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script)
- [Installing Activity Flow in mobile apps](https://developers.vtex.com/docs/guides/installing-activity-flow-in-mobile-apps)

