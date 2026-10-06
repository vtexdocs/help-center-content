---
title: 'Ativar o Delivery Promise'
createdAt: 2026-10-05T12:00:00.000Z
updatedAt: 2026-10-05T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: activate-delivery-promise
locale: pt
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

A ativação do [Delivery Promise](https://help.vtex.com/pt/docs/tutorials/delivery-promise-beta) é feita diretamente no Admin VTEX, em um fluxo guiado de quatro etapas. Nesse fluxo, você testa a funcionalidade sem afetar a loja em produção, revisa as opções de envio usadas nos filtros, configura os componentes na frente de loja e, por fim, publica o Delivery Promise para os seus compradores.

Neste artigo, você vai entender cada etapa da ativação:

1. [Ative o modo de teste](#etapa-1-ative-o-modo-de-teste)
2. [Revise as Opções de Envio](#etapa-2-revise-as-opções-de-envio)
3. [Configure na loja](#etapa-3-configure-na-loja)
4. [Publique em produção](#etapa-4-publique-em-produção)

Você também encontra [como desativar o Delivery Promise](#desativar-o-delivery-promise) e [o que fazer quando a conta não é compatível](#conta-não-compatível-com-o-delivery-promise).

## Antes de começar

Confira os pontos a seguir antes de iniciar a ativação:

* **Compatibilidade da conta:** ao acessar a página **Delivery Promise** no Admin VTEX, a plataforma verifica automaticamente se a conta atende aos [requisitos do Delivery Promise](https://help.vtex.com/pt/docs/tutorials/delivery-promise-beta#requisitos). Consulte esses requisitos para verificar se a sua conta é compatível. Se ela for elegível, você poderá usar o Delivery Promise sem custo adicional.
* **Acesso ao código da loja:** as [etapas 3](#etapa-3-configure-na-loja) e [4](#etapa-4-publique-em-produção) exigem alterações no código da frente de loja. Para acessá-lo, entre em contato com a equipe responsável pelo desenvolvimento da loja ou com um [parceiro de implementação](https://help.vtex.com/pt/docs/tracks/contas-e-arquitetura#parceiros-de-implementacao). Se você não tiver acesso ao código, peça à equipe responsável para fazer as alterações necessárias.
* **Permissão para publicar:** apenas usuários com o perfil Super Admin da conta podem publicar o Delivery Promise em produção. Saiba mais em [Perfis de acesso](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso).

Para iniciar, no Admin VTEX, acesse a página **Delivery Promise**. Nela, você poderá verificar a compatibilidade da conta e iniciar o fluxo de ativação.

>ℹ️ Você pode sair do fluxo e voltar depois. As etapas concluídas ficam marcadas na lateral esquerda da página, com um resumo das escolhas feitas, como as políticas comerciais selecionadas e as opções de envio destacadas.

## Etapa 1: Ative o modo de teste

Nesta etapa, você escolhe onde o Delivery Promise será usado e confirma as condições de uso. O modo de teste não afeta a sua loja em produção.

Preencha as seções a seguir:

1. **Políticas Comerciais:** selecione as [políticas comerciais](https://help.vtex.com/pt/docs/tutorials/como-funciona-uma-politica-comercial) em que o Delivery Promise será usado. Você pode selecionar até quatro políticas comerciais.
2. **Condições de Uso:** marque a opção **Estou ciente de que não poderei ativar essas funcionalidades enquanto o Delivery Promise estiver ativo**. O Delivery Promise não é compatível com as seguintes funcionalidades, e usá-las pode causar problemas no funcionamento da loja:
    * [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/docs/tutorials/multilevel-omnichannel-inventory)
    * [Capacidade Operacional](https://help.vtex.com/pt/docs/tutorials/capacidade-operacional)
    * VTEX Shipping Network
    * [Assembly Options](https://help.vtex.com/pt/docs/tutorials/assembly-options) para sellers externos

    Para entender o impacto de cada funcionalidade não suportada na sua loja e o que fazer para usar o Delivery Promise, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support).
3. **Integração de sellers externos:** marque a opção **Estou de acordo com essa necessidade**. Se a sua conta tiver sellers externos, eles precisam informar a disponibilidade dos produtos pela [Delivery Promise Notification API](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api). Sem essa integração, os produtos desses sellers podem ficar indisponíveis na loja.
4. Clique em `Ativar`.

>⚠️ Depois de concluir esta etapa, não é possível alterar as políticas comerciais pelo Admin. Para incluir mais políticas comerciais ou alterar as selecionadas, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support).

## Etapa 2: Revise as Opções de Envio

Esta etapa é opcional, mas é necessária para que os compradores possam usar os filtros de prazo de envio na loja.

O Delivery Promise usa as [Opções de Envio](https://help.vtex.com/pt/docs/tutorials/opcoes-de-envio-beta) cadastradas na sua conta para montar os filtros exibidos aos compradores. Nesta etapa, revise e ative as sugestões:

1. Clique em `Acessar Opções de Envio`.
2. Na tela de preferências das Opções de Envio, escolha quais opções devem aparecer como filtro na loja (até três) e defina a ordem de exibição. A primeira opção da lista recebe mais destaque quando o filtro for ativado na frente de loja.
3. Salve as alterações e volte à página **Delivery Promise**.
4. Clique em `Avançar`.

## Etapa 3: Configure na loja

Nesta etapa, você configura o Delivery Promise na frente de loja. As instruções variam conforme a tecnologia usada pela sua loja. Selecione a aba correspondente: **VTEX IO**, **FastStore** ou **Headless**.

>⚠️ Para esta etapa, é necessário ter acesso ao código da loja.

### VTEX IO

1. **Ative na versão de teste:** crie uma workspace de desenvolvimento e, no app **GraphQL resolver for the VTEX store APIs**, habilite a opção `enableDeliveryPromisePreview`. Para isso, acesse a URL a seguir, substituindo `{workspace}` pelo nome da workspace e `{conta}` pelo nome da sua conta:

    ```
    https://{workspace}--{conta}.myvtex.com/admin/apps/vtex.search-resolver/setup
    ```

2. **Instale e adeque os componentes ao tema da sua loja:** escolha quais componentes vão aparecer na loja, como seleção de localização, método de entrega e ponto de retirada, e ajuste o comportamento de cada um, por exemplo, se o CEP é obrigatório ou se a geolocalização é permitida. Saiba mais em [Setting up Delivery Promise components](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components).

### FastStore

>⚠️ A FastStore não tem uma versão de teste isolada. Para ver o Delivery Promise funcionando na loja, é preciso concluir a [etapa 4](#etapa-4-publique-em-produção).

1. **Ative no código da loja:** ative o Delivery Promise no arquivo `discovery.config.js` da loja. Saiba mais em [Delivery Promise for FastStore](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise).
2. **Instale e adeque os componentes ao tema da sua loja:** no Headless CMS, escolha quais componentes vão aparecer na loja, como seleção de localização, método de entrega e ponto de retirada, e ajuste o comportamento de cada um, por exemplo, se o CEP é obrigatório ou se a geolocalização é permitida.

### Headless

1. **Implemente a API em modo de teste:** nas buscas feitas pela loja, inclua o parâmetro `dpPreview=true` junto com os parâmetros de localização do comprador (`deliveryZonesHash` e `pickupPointsHash`). Assim, você visualiza o Delivery Promise ativo em teste. Veja um exemplo:

    ```
    https://{{accountName}}.vtexcommercestable.com.br/api/intelligent-search/v1/product-search?sc=1&deliveryZonesHash=0ecce2ea9d3b57d4ef994efba4fe3ee9&pickupPointsHash=0b79d8a9979a5f4f5f30a7849da5da16&dpPreview=true
    ```

    Os valores do exemplo são ilustrativos. Os parâmetros de localização são gerados a partir da localização informada pelo comprador.

    >❗ Use o parâmetro `dpPreview=true` apenas em ambiente de teste, nunca em chamadas de produção.

2. **Implemente os componentes:** implemente a captura da localização do comprador para gerar os parâmetros do Delivery Promise e monte a interface de filtros de entrega e retirada com os dados retornados pela Intelligent Search API. Saiba mais em [Delivery Promise for headless stores](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores).

Ao concluir a configuração, clique em `Avançar`.

## Etapa 4: Publique em produção

Nesta etapa, você publica o Delivery Promise para os compradores da sua loja.

>⚠️ Para esta etapa, é necessário ter acesso ao código da loja. Apenas usuários com o perfil Super Admin da conta podem publicar o Delivery Promise em produção.

1. **Publique a versão da sua loja em produção:** publique a versão da loja que contém o componente de captura de CEP, para que o CEP do comprador seja informado na busca.
2. **Ative o Delivery Promise em produção na busca:** marque a opção **Estou ciente de que sellers externos precisam informar a disponibilidade via protocolo para o Delivery Promise funcionar corretamente**.
3. Clique em `Ativar em produção`.
4. Na janela de confirmação, clique em `Publicar`.

>⚠️ O Delivery Promise é publicado em todas as frentes de loja das políticas comerciais selecionadas na etapa 1. Não é possível publicar em apenas uma frente de loja por vez. Para saber como reverter a publicação, veja [Desativar o Delivery Promise](#desativar-o-delivery-promise).

A ativação pode levar até cinco minutos. Ao final, a página exibe a mensagem **Delivery Promise está em produção na loja**, com a lista das políticas comerciais em que a funcionalidade está ativa. Clique em `Concluir` para finalizar.

A partir desse momento, quando a loja identificar a localização do comprador (pelo CEP ou por outros dados de localização), os resultados da busca passam a mostrar apenas os produtos disponíveis para entrega naquele endereço.

>ℹ️ Se a ativação falhar, a página exibe a mensagem **Algo deu errado**. Clique em `Tentar novamente`. Se o erro continuar, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support).

Para ativar o Delivery Promise em outras políticas comerciais, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support).

## Desativar o Delivery Promise

No momento, não é possível desativar o Delivery Promise pela página **Delivery Promise** no Admin. Para reverter a publicação, faça uma das ações a seguir:

* Entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support) e solicite a desativação.
* Remova da frente de loja o componente de captura de CEP ou deixe de enviar o CEP e os parâmetros de localização do comprador na busca. Para isso, é necessário ter acesso ao código da loja.

## Conta não compatível com o Delivery Promise

Se a sua conta não atender aos requisitos do Delivery Promise, a página exibe a mensagem **Sua conta não é compatível com Delivery Promise no momento**, e as etapas de ativação ficam indisponíveis. A tabela a seguir mostra os motivos possíveis e o que fazer em cada caso:

| Motivo | O que fazer |
| ----- | ----- |
| A conta não usa o [Intelligent Search](https://help.vtex.com/pt/docs/tutorials/intelligent-search-visao-geral). | Passe a usar o Intelligent Search e solicite a ativação novamente. |
| A funcionalidade [Capacidade Operacional](https://help.vtex.com/pt/docs/tutorials/capacidade-operacional) está ativada. | Desative a Capacidade Operacional e entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support) para solicitar uma nova avaliação. |
| Um ou mais sellers conectados à conta não são compatíveis com o Delivery Promise. | Ajuste a configuração dos sellers e entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support) para solicitar uma nova avaliação. |

## Saiba mais

* [Delivery Promise (Beta)](https://help.vtex.com/pt/docs/tutorials/delivery-promise-beta)
* [Delivery Promise: FAQ](https://help.vtex.com/pt/docs/tutorials/delivery-promise-faq)
* [Opções de Envio (Beta)](https://help.vtex.com/pt/docs/tutorials/opcoes-de-envio-beta)
