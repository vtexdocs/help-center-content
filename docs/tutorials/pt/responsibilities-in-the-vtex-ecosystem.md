---
title: 'Responsabilidades no ecossistema VTEX'
id: 3vL9aWICDr3WR64DYi1fJ3
status: PUBLISHED
createdAt: 2024-01-31T17:08:24.444Z
updatedAt: 2024-02-16T17:22:16.507Z
publishedAt: 2024-02-16T17:22:16.507Z
firstPublishedAt: 2024-01-31T23:11:13.804Z
contentType: tutorial
productTeam: Billing
author: 1malnhMX0vPThsaJaZMYm2
slug: responsabilidades-no-ecossistema-vtex
locale: pt
legacySlug: responsabilidades-no-ecossistema-vtex
subcategory: 1VvCpaa8NCA6a0MK6W6oWg
---

O futuro do comércio digital é colaborativo, e parcerias bem sucedidas são indispensáveis para o sucesso da operação do lojista. Durante a operação de uma loja, é comum surgirem dúvidas sobre papéis e responsabilidades de cada player do ecossistema.

Para otimizar a operação da sua loja e garantir a eficiência da comunicação entre o lojista e o suporte da VTEX, esse artigo apresenta as responsabilidades dos principais players envolvidos em uma operação de comércio digital. Confira as responsabilidades em cada cenário a seguir:

* [Integrações back-office (ERP / PIM / WMS)](#integracoes-back-office-erp-pim-wms)
* [Integrações com provedores de pagamento](#integracoes-com-provedores-de-pagamento)
* [Agências implementadoras](#agencias-implementadoras)
* [Integrações com marketplaces](#integracoes-com-marketplaces)

## Integrações back-office (ERP / PIM / WMS)

Durante a configuração inicial da VTEX, caso a sua loja utilize [integrações externas com ERP / PIM / WMS](https://developers.vtex.com/docs/guides/erp-integration-guide),  é de responsabilidade desses sistemas enviar os produtos, preços e inventário da sua loja para a VTEX. Em seguida, é necessário desenvolver um middleware que será responsável por enviar e receber informações da VTEX de acordo com eventos da rotina de sua operação.

Uma vez configurada a integração inicial de produtos, preços e inventário, e desenvolvido o middleware, o fluxo de informações será conforme o diagrama a seguir.

![back-office-pt](https://images.ctfassets.net/alneenqid6w5/6M5KnqChk7RT99b034UY3L/6bc291243b2b38f8a570d404d88e055e/back-office-pt.PNG)

Durante a rotina da operação, as responsabilidades são divididas da seguinte forma:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <tr>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Player</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Responsabilidades</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>ERP / PIM / WMS</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">Envio das seguintes informações para a VTEX via integração:
        <ul>
          <li>Alterações no cadastro de produtos</li>
          <li>Preços</li>
          <li>Inventário</li>
          <li>Nota fiscal</li>
          <li>Informações de rastreio do pedido</li>
          <li>Alterações no pedido</li>
          <li>Cancelamentos</li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>VTEX</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">Envio das seguintes informações para o ERP, de acordo com o que for configurado pela loja via <a href="https://developers.vtex.com/docs/guides/orders-feed" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Orders Feed</a> ou <a href="https://developers.vtex.com/docs/guides/orders-feed" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Hook</a>:
        <ul>
          <li>Notificações de um novo pedido criado.</li>
          <li>Notificações do andamento do fluxo de um pedido.</li>
        </td>
    </tr>
  </tbody>
</table>

## Integrações com provedores de pagamento

Para realizar o processamento de pagamentos dos pedidos em uma loja VTEX, os integrantes da infraestrutura de pagamentos dividem as responsabilidades da seguinte forma:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <tr>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Player</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Responsabilidades</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Lojista</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Contratar o serviço de um provedor de pagamento (gateways, adquirentes ou subadquirentes).</li>
          <li>Contratar o serviço de um provedor de antifraude (opcional).</li>
          <li>Configurar na loja os provedores de pagamento e, antifraude com os quais possui contrato.</li>
          <li>Configurar na loja os meios e as condições de pagamento conforme as especificações de cada contrato
            estabelecido com os provedores de pagamento e antifraude.</li>
          <li>Realizar manualmente o cancelamento ou estorno de um pagamento, quando este não for executado de forma
            automática pelo provedor de pagamento ou em casos específicos onde for necessária a intervenção manual do
            lojista.</li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Provedores de pagamento (gateways, adquirentes ou
          subadquirentes)</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Desenvolver a integração do provedor de pagamento de acordo com as instruções disponíveis em <a
              href="https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Integrating a
              new payment provider on VTEX</a>.</li>
          <li>Obter a certificação <a
              href="https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">PCI-DSS</a> ou
            desenvolver integração com a VTEX utilizando o <a
              href="https://developers.vtex.com/docs/guides/payments-integration-secure-proxy" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Secure Proxy</a> para
            processar transações de pagamento contendo dados sensíveis, como em cartões de crédito, débito e co-branded.
          </li>
          <li>Processar transações financeiras de maneira segura e eficiente, permitindo:
            <ul>
              <li>Aprovar ou negar os pagamentos, conforme políticas internas.</li>
              <li>Capturar ou realizar o reembolso de pagamentos.</li>
              <li>Adquirente: processar pagamentos realizados por cartões de crédito e
                débito.</li>
              <li>Subadquirente: intermediar pagamentos entre adquirentes, provedores de antifraude e
                lojistas.</li>
              <li>Transmitir as informações de status das transações de pagamento para o gateway da VTEX.</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Provedor de antifraude</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Realizar análise de risco sobre atividades fraudulentas em transações com cartões de crédito, débito e
            co-branded.</li>
          <li>Transmitir informações das análises para o gateway da VTEX.</li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Gateway VTEX</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Criar transações de pagamento para novos pedidos.</li>
          <li>Enviar
            informações das transações e pedidos para os parceiros responsáveis por processar ou analisar os dados de
            pagamentos (provedores de pagamento e antifraude).</li>
          <li>Registrar nos logs da transação todas as ações realizadas pelos demais players no fluxo de uma transação de pagamento, como criação, aprovação, cancelamento, estorno, entre outros.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Ao detectar qualquer inconsistência ou erro durante a transação de pagamento de um pedido, o lojista deve:

1. Entrar em contato com o(s) responsável(is) pela respectiva transação (provedores de pagamento e antifraude).
2. Caso o assunto não seja resolvido, abrir um ticket no [Suporte VTEX](https://help.vtex.com/pt/support) informando os dados da ocorrência.

## Agências implementadoras

No caso das soluções de CMS nativas, é comum que o lojista conte com a parceria de uma agência implementadora para customizar a aparência e a experiência do cliente na frente de loja.

A VTEX possui as seguintes possibilidades de CMS nativas: o [Layout](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj#layout) para lojas [Portal CMS Legado](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), o [Site Editor](https://help.vtex.com/pt/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) para lojas usando o [Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework) e o [Headless CMS](https://help.vtex.com/pt/tutorial/headless-cms-visao-geral--3U5gvhHdQL0jczYH8gjX09) para lojas usando a [FastStore](https://www.faststore.dev/). Além disso, também é possível integrar o seu CMS externo com as APIs da VTEX de forma [headless](https://developers.vtex.com/docs/guides/headless-commerce).

Problemas relacionados a como o conteúdo está aparecendo para o usuário final devem sempre ser tratados inicialmente com o suporte da agência. Alguns exemplos desses problemas são:

* Imagens, títulos ou banners incorretos ou desatualizados.
* Produtos indisponíveis na frente de loja.
* Páginas em branco.
* Menu de categorias incorreto ou desatualizado.
* Resultados de busca ou de coleções incorretos ou incompletos.
* Botões de chamada para ação (por exemplo, Comprar, Avise-me, Adicionar ao carrinho) com comportamento não esperado.
* Preços de produtos ou valores de frete inconsistentes com o que está cadastrado na plataforma.

Se a agência verificar que o problema está em controles, apps ou componentes nativos da VTEX, acione nossos canais de comunicação, conforme a [Política de atendimento do suporte da VTEX](https://help.vtex.com/pt/faq/suporte-vtex-brasil--5q861sTw1n7H2BENOu7ls9), incluindo todas as evidências da investigação já feita pela agência.

## Integrações com marketplaces externos

A VTEX possui uma arquitetura multi-seller nativa que permite que lojas VTEX se tornem marketplaces ou sellers em outras lojas VTEX. Além disso, a plataforma também possui integrações nativas com marketplaces externos para ofertar seus produtos sem necessidade de desenvolvimento. Os marketplaces com integrações nativas podem ser encontrados no guia [Marketplaces e Integrações](https://help.vtex.com/pt/tutorial/marketplaces-e-integracoes--5AcBO1t29nhq7rBHas9b6V).

Ainda assim, podem existir lojas parceiras estratégicas para o seu negócio que operem fora dessa rede colaborativa nativa. Para casos como esse, a VTEX permite o desenvolvimento de [integrações com marketplaces externos](https://developers.vtex.com/docs/guides/external-marketplace-integration-guide), com conectores externos (hubs) responsáveis por fazer a comunicação entre uma loja VTEX e um marketplace externo não-nativo.

Para o suporte de uma operação nesse cenário, é importante que o lojista entenda quais as responsabilidades de cada participante dessa operação, detalhadas a seguir.

<div class="alert alert-warning">
  <p>As seções a seguir consideram uma loja que já está operando integrada com um marketplace externo via conector externo. Para saber como integrar o seu Catálogo da VTEX com um conector externo pela primeira vez, acesse o guia <a href="https://developers.vtex.com/docs/guides/external-marketplace-integration-catalog" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Catalog Integration</a>.</p>
</div>

### Atualização ou envio de novos produtos e SKUs

Veja a seguir as responsabilidades envolvidas em caso de atualização ou envio de novos produtos e SKUs para o marketplace externo:

| **Player** | **Responsabilidades** |
|---|---|
| **VTEX** | Enviar uma notificação de novo produto ou SKU criado ou atualizado para o endpoint de afiliado fornecido pelo hub e cadastrado na plataforma VTEX. |
| **Conector parceiro (hub de integração)** | Processar a notificação e enviar o produto ou SKU atualizado para o marketplace. <br /><br />Esse processamento engloba diversas etapas, incluindo verificar se esse SKU já existe no marketplace e registrar como um novo se necessário, validar se o produto está ativo e associado à política comercial do marketplace, fazer uma simulação de pedido para conferir preço e inventário do SKU atualizados, entre outras. |
| **Marketplace externo não-nativo** | Fornecer os endpoints necessários para o hub enviar o SKU atualizado, registrar o SKU recebido e responder o status para o conector. |

### Atualização ou criação de novos pedidos

Confira as responsabilidades envolvidas na atualização ou criação de pedidos de acordo com o fluxo do pedido.

1. O **marketplace** disponibiliza os produtos e o checkout para que o pedido seja realizado e notifica o conector sobre um novo pedido criado.
2. O **conector** é responsável por criar o pedido na VTEX.
3. A VTEX responde ao conector o status de criação do pedido, que pode ser sucesso ou falha. Nesta etapa, se houver falha na criação do pedido na VTEX, ou se pedido for criado com o status **Cancelado**, é necessário contatar o suporte do conector.
4. Uma vez que o pedido é criado na VTEX, a responsabilidade pela atualização do seu status no OMS depende da etapa do processo:

   * Se o pedido está preparando entrega ou faturado, por exemplo, é responsabilidade do **ERP** notificar a VTEX.
   * Se o pedido foi cancelado no marketplace, a responsabilidade é do **conector**.

Para mais informações sobre quem é responsável por cada etapa do fluxo de um pedido num cenário de marketplace externo, veja [Fluxo e status de pedidos - Fluxo do Seller](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#fluxo-do-seller).

#### Status do pedido 

Para entender qual suporte deve ser acionado caso haja algum problema na atualização do status do pedido, é preciso seguir o passo a passo:

1. No Admin VTEX, acesse **Pedidos > Todos os Pedidos**.
2. Clique no pedido desejado para acessar a [página de detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
3. Na seção **Histórico do pedido**, clique em `Ver interações` (botão ilustrado a seguir), e verifique se há alguma mensagem de erro. 

![ver-interacoes-pt](https://images.ctfassets.net/alneenqid6w5/2A2368gEpzx8T1VnDXsQ2C/6d50ebab0fb9de03850bc219ea7fbce8/ver-interacoes-pt.png)

Caso a mensagem de erro não seja autossuficiente, o lojista pode acionar nossos canais de comunicação, conforme a [Política de atendimento do suporte da VTEX](https://help.vtex.com/pt/faq/suporte-vtex-brasil--5q861sTw1n7H2BENOu7ls9). Recomendamos incluir a evidência da tela de interações e o ID do pedido, para que o time de especialistas ajude a identificar a origem do problema.
