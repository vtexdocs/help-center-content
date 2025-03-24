---
title: 'Usando o Session Manager para rastrear sessões de navegação em lojas VTEX'
id: 1pA0tqsD4BFnJYhQ7ORQBd
status: ARCHIVED
createdAt: 2019-11-19T20:42:07.386Z
updatedAt: 2022-08-04T22:36:05.292Z
publishedAt: 
firstPublishedAt: 2019-11-19T22:44:09.933Z
contentType: tutorial
productTeam: Identity
author: 6LC2rhKOT6njHIo2w4cMu1
slugEN: using-session-manager-to-track-browsing-sessions-in-vtex-stores
locale: pt
legacySlug: usando-o-session-manager-para-rastrear-sessoes-de-navegacao-em-lojas-vtex
subcategoryId: dajK0sARX2c0MISKKoGoc
---

O Session Manager é um sistema que rastreia a sessão de navegação atual de todos clientes em plataformas VTEX. Informações importantes de sessão são capturadas automaticamente e armazenadas em um local seguro e facilmente acessível. Isto inclui dados como cookies relevantes, query strings, credenciais de autenticação, perfil atual e informações de precificação, se aplicáveis.

Antes do Session Manager ser criado, um desenvolvedor tinha que buscar informações em diversos lugares para realizar uma tarefa: obter informações de autenticação usando a [VTEX ID API](https://help.vtex.com/pt/tutorial/checking-which-user-is-currently-authenticated--4vLALC0yrsJydfaY56Zshq), obter preços calculados após uma simulação de carrinho usando a [Checkout API](https://developers.vtex.com/reference/checkout-api-overview), informações de campanhas usando a [Promotions & Taxes API](https://developers.vtex.com/reference/rates-and-benefits-api-overview) e assim por diante.  

Agora você pode fazer uma única requisição para a [Session Manager API](https://developers.vtex.com/reference/session-manager-api-overview) e receber um único pacote agregado com todas informações atualizadas que você precisar de um cliente específico, em vez de fazer múltiplas requisições para diferentes endpoints.

Este artigo tem como objetivo descrever o Session Manager de uma perspectiva de sistema. Para mais detalhes sobre como interagir com a Session Manager API, veja nossos [developer docs](https://developers.vtex.com/reference/session-manager-api-overview).

## Obtendo e armazenando informações de sessão
Sempre que um novo dispositivo entra em contato com a infraestrutura da VTEX, o Session Manager recebe uma requisição para criação de uma nova sessão. Eventos que disparariam esta requisição incluem visitas a páginas de loja, abertura do painel administrativo da VTEX e o carregamento da interface de vendedores do inStore, entre outros. Assim que uma nova sessão for criada, o Session Manager começará a receber todas as informações importantes associadas à navegação daquele dispositivo específico.

Usando a Session Manager API, você pode fazer uma requisição para receber os dados de sessão que você precisar para sua aplicação. Isto inclui inferências importantes feitas por módulos VTEX - veja a seção [Dados disponibilizados por apps VTEX](#dados-disponibilizados-por-apps-vtex) para mais informações.

Por exemplo, um usuário com um link de campanha específico pode ter uma tabela de preços promocional configurada na sua sessão, o que faria com que ele veja preços atualizados ao navegar pela loja que criou essa campanha.

Além de obter informações de sessão para um dispositivo que esteja navegando pela infraestrutura da VTEX, o Session Manager permite que você armazene *dados customizados* naquela sessão. Estas informações são facilmente recuperáveis e permitem que você evite fazer algo como configurar um cookie para registrar informações específicas sobre um usuário. 

>ℹ️ O Session Manager também foi construído para permitir que desenvolvedores criem seus próprios triggers e lógica de processamento. Ainda estamos finalizando o desenvolvimento desta solução extensível, mas no futuro você deverá poder configurar a execução condicional de código customizado, de acordo com a presença de valores específicos de parâmetros nos dados de sessão de um usuário.

## Agregação de dados de sessão: chamadas create e transform
Estritamente falando, o Session Manager é um sistema backend de API que armazena e processa dados de sessão contidos em objetos JSON. Cada conta VTEX tem configurações que indicam quais apps instaladas têm uma dependência de sessão e como elas pretendem processar estas informações.

Apps que têm uma dependência de sessão monitoram mudanças nas suas entradas e modificam parâmetros de sessão através das suas saídas. Quando um parâmetro de sessão muda, o Session Manager notifica todas as apps que o estiverem monitorando e aguarda por suas respostas, que indicariam se mais algum parâmetro precisaria ser atualizado como resultado. O Session Manager então atualiza os dados da sessão com um compilado das respostas enviadas por todas as apps, se necessário. Chamamos este ciclo notificação / resposta / atualização de **chamada transform** ou transform.

Transforms frequentemente disparam outras transforms, repetindo até que nenhuma atualização de parâmetro adicional seja enviada por apps. Esta operação é, naturalmente, cautelosamente monitorada para evitar condições de loop. O diagrama abaixo ilustra um exemplo de ciclo de transform:

![EN - Session Manager](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Apps/VTEX%20Session/usando-o-session-manager-para-rastrear-sessoes-de-navegacao-em-lojas-vtex_1.jpg)

1. Uma mudança foi feita no parâmetro de sessão X
2. A App A monitorava o parâmetro de sessão X, o que disparou a Transform 1
3. A Transform 1 levou a App A a modificar o parâmetro de sessão Y
4. As Apps B e C monitoravam o parâmetro de sessão Y, o que disparou a Transform 2
5. A Transform 2 levou a App B a modificar o parâmetro de sessão Z
6. A App C monitorava o parâmetro de sessão Z, o que disparou a Transform 3
7. A Transform 3 não teve efeitos colaterais em parâmetros monitorados por apps, portanto o ciclo se encerrou e a sessão foi salva até que outras mudanças sejam feitas.

>ℹ️ Chamadas transform são feitas para todas as apps simultaneamente para otimização de desempenho. É por isso que a App C foi afetada tanto pela Transform 2 quanto pela Transform 3 - ela não tinha como saber que o resultado da Transform 2 na App B levaria à necessidade de mudanças adicionais nos seus parâmetros de saída.

Quando uma nova sessão é criada, uma versão mais simples desse ciclo é executada, que chamamos de **chamada create**. Todas as apps que tiverem a configuração `RunOnCreate: true` serão notificadas para executar simultaneamente com uma entrada vazia. Se estas apps modificarem quaisquer parâmetros monitorados por outras apps, isto dispara um ciclo de transform que será executado até que as dependências de entrada sejam resolvidas.

## Dados disponibilizados por apps VTEX

### Store (vtex.store-session)

|     |     |
| --- | --- |
| **RunOnCreate** | true |
| **Inputs**        | `public`: cultureInfo, sc, locale |
|                   | `profile`: email, isAuthenticated |
| **Outputs**       | `store`: channel, countryCode, cultureInfo, currencyCode, currencySymbol |

Esta app é responsável por identificar o usuário atual na sessão (por e-mail, se houver algum) e solicitar a política comercial correspondente e informações relacionadas. 

Ela também é sensível ao parâmetro de entrada `sc`, que é interpretado como uma solicitação de política comercial; em outras palavras, se estiver presente, a app verifica se a política comercial consta como uma das possibilidades ativas para aquele usuário e a seleciona, se possível. Caso contrário, o usuário recebe um erro 401 se não estiver autenticado ou 403 se estiver.

Os parâmetros de entrada `locale` and `cultureInfo` são utilizados para sobrescrever o parâmetro de saída `cultureInfo` e garantir que o idioma da sessão possa ser ajustado segundo as preferências do usuário.

### Authentication (vtex.authentication-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `cookie`: VtexIdclientAutCookie, VtexIdclientAutCookie_.* |
| **Outputs**       | `authentication`: adminUserId, adminUserEmail, storeUserId, storeUserEmail |

Esta app é usada como nosso principal método de autenticação: obter o cookie VTEXID da requisição, validá-lo e extrair o ID de usuário ou admin.

### Profile (vtex.profile-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `public`: storeUserEmail |
|                   | `authentication`: storeUserId |
|                   | `impersonate`: storeUserId |
| **Outputs**       | `profile`: id, email, firstName, lastName, phone, document, priceTables, isAuthenticated |

Esta app assegura que as informações do usuário correspondem aos dados carregados na sessão.

Caso o parâmetro de entrada `storeUserEmail` seja definido no namespace `public`, assume-se que não há cookie de autenticação. Sendo assim, o parâmetro de saída `isAuthenticated` é definido como `false` e apenas as tabelas de preço (`priceTables`) são carregadas para aquele usuário. Por outro lado, caso o parâmetro de entrada `storeUserId` seja definido no namespace `authentication` ou `impersonate`, todas as informações relevantes são carregadas a partir do Master Data.

### Rates and Benefits (vtex.rnb-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `profile`: email |
|                   | `public`: utm_source, utm_campaign, postalCode |
| **Outputs**       | `rnb`: campaigns |

Esta app se integra com nosso sistema de Taxas e promoções, identificando as campanhas para as quais o usuário é elegível.

### Checkout (vtex.checkout-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `public`: regionId, country, postalCode, geoCoordinates |
| **Outputs**       | `checkout`: regionId, cartId |

A app checkout lida com tudo que é relacionado à experiência de compra do usuário. Atualmente, ela pesquisa a localização do usuário (para ser uma entrada válida, a localização deve incluir o país e o código postal ou as coordenadas geográficas). A saída também contém o ID do carrinho usado durante o processo de checkout.

### Impersonate (vtex.impersonate-session)

|     |     |
| --- | --- |
| **RunOnCreate** | false |
| **Inputs**        | `public`: vtex-impersonated-customer-email |
|                   | `cookie`: vtex-impersonated-customer-email |
|                   | `authentication`: adminUserEmail |
| **Outputs**       | `impersonate`: storeUserId, storeUserEmail, canImpersonate, account |

A app impersonate é a única app na estrutura da sessão que não faz parte do pacote padrão e deve ser instalada manualmente em cada loja. Ela habilita o recurso de personificação do cliente, que é particularmente útil para centrais telefônicas que precisam fazer compras em nome do cliente. Ela recebe o parâmetro vtex-impersonated-customer-email, através de POST direto ou cookie, e tenta personificar esse usuário usando as credenciais de administrador na sessão. Se esse par tiver permissão para personificar, o ID e o email do usuário personificado serão carregados na sessão.

