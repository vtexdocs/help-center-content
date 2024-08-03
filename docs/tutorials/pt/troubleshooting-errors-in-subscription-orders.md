---
title: 'Como solucionar erros em pedidos de assinaturas'
id: uLL8AYBGdtAmbbdL5gRCf
status: PUBLISHED
createdAt: 2020-02-05T14:32:49.763Z
updatedAt: 2023-12-21T14:07:42.772Z
publishedAt: 2023-12-21T14:07:42.772Z
firstPublishedAt: 2020-02-11T15:00:00.666Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: como-solucionar-erros-em-pedidos-de-assinaturas
locale: pt
legacySlug: como-solucionar-pedidos-de-assinatura-com-erros
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

<div class = "alert alert-info">
É possível acessar informações somente de pedidos criados nos últimos dois anos, sendo o mesmo período válido para clientes acessarem pedidos pelo <a href="https://help.vtex.com/pt/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh">Minha Conta</a>.
</div>

É possível identificar e gerenciar erros em pedidos de assinaturas através do módulo de **Assinaturas** > **Dashboards** > **Pedidos de Assinatura** no Admin.

Existem dois tipos de erros que podem ocorrer com pedidos de assinaturas:

- [Ciclos com problema](#ciclos-com-problema)
- [Erros de Pagamento](#erros-de-pagamento)

## Ciclos com problema

Problemas em ciclos de assinaturas acontecem quando há um problema que impede a criação do pedido de assinatura, como um SKU indisponível no estoque. 

A aba **Ciclos com problema**, ilustrada na imagem abaixo, reúne os pedidos de assinaturas que apresentam problemas desse tipo.

![cicloscomproblema PT](https://images.ctfassets.net/alneenqid6w5/5ijnWeUeqRzKWa2agsxK7O/ee04171d3d9c785e049382f1e927b715/cicloscomproblema_PT.png)

A partir dessa aba, é possível gerenciar os pedidos que apresentam ciclos com problema e fazer novas tentativas manuais de criação de pedidos. Por exemplo, quando um produto está indisponível, você pode ajustar o estoque e, em seguida, fazer a nova tentativa.

Para visualizar os ciclos com problema e fazer novas tentativas de pedidos, siga os passos abaixo.

1. No Admin, acesse o módulo **Assinaturas**.
2. Clique na aba **Dashboards**.
3. Na seção **Pedidos de Assinatura**, clique em **Ciclos com problema**.
4. Identifique o pedido que você deseja corrigir e verifique qual é o problema informado na coluna **Erro**. Consulte a [tabela de erros](#erros) para mais informações.
5. Se necessário, corrija o problema indicado (exemplo: ajustar estoque).
6. Retorne para **Assinaturas** > **Dashboards** > **Pedidos de Assinatura** > **Ciclos com problema** e clique no botão <i class="fas fa-redo-alt"></i> na coluna **Tentar Novamente**. Se a nova tentativa funcionar, o pedido será criado no **Gerenciamento de pedidos**.

### Erros

Veja na tabela abaixo quais são os erros informados nos ciclos com problema e seus respectivos significados.

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
        <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Erro</em>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Significado</em>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Could not select a SLA for sku {ID do SKU}</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Não foram encontradas estratégias de envio associadas a determinado SKU dentro do pedido de assinatura.
                <p>
                Geralmente, este erro está atrelado à falta de disponibilidade de estoque do SKU em questão, ou alguma limitação na configuração logística.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">No SLAs were found for this subscription</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Não foram encontradas estratégias de envio associadas à assinatura como um todo.
                <p>
                Geralmente, este erro está atrelado à falta de disponibilidade de estoque dos itens que compõem a assinatura, ou alguma limitação na configuração logística, como ausência de geocoordenadas no perfil do cliente.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Request items length is zero after simulation</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Esta mensagem é exibida quando os primeiros passos da simulação do carrinho ocorrem com sucesso, mas em um segundo momento a simulação passa a não encontrar itens válidos para realizar a compra. Isso pode ocorrer até horas depois, no caso de uma nova tentativa de pagamento. Este é um cenário previsto e não é possível evitá-lo, a não ser que o estoque seja infinito e a política de envio permanente.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [ADDRESS_MISSING]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Erro atrelado a algum problema no endereço cadastrado pelo cliente para a assinatura, como CEP inválido ou inexistência dos dados de geocoordenadas.
                <p>
                Para corrigir o erro, é necessário entrar em contato com o cliente e pedir para que revise seus dados de endereço na página <strong>Minha Conta</strong>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [INVALID_PROFILE]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este erro ocorre quando há alguma informação faltando no perfil do cliente. Exemplo: se o cliente remover o CPF do perfil após a primeira compra, na próxima data do ciclo de assinatura, o pedido gerado terá este erro.
                <p>
                Para corrigir o erro, é necessário que o cliente preencha a informação no perfil da página <strong>Minha Conta</strong>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [PAYMENT_MISSING]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este erro significa que não há forma de pagamento cadastrada para a assinatura no perfil do usuário.
                <p>
                Para corrigir o erro, é necessário entrar em contato com o cliente e pedir para que preencha seus dados de pagamento na página <strong>Minha Conta</strong>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [ADDRESS_MISSING|PAYMENT_MISSING]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Esta mensagem de erro pode ter duas causas:
                <ul>
                    <li>Cadastro de cliente com dados de cartão de crédito incompletos ou inválidos e dados de endereço incompletos ou inválidoS.</li>
                    <li>Cadastro de cliente com número de CPF inválido.</li>
                </ul>        
                <p>
                Para corrigir o erro, é necessário entrar em contato com o cliente e pedir para que revise seus dados na página <strong>Minha Conta</strong>.​
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    PriceTag inválida</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Esta mensagem é exibida quando existe uma diferença de <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span> das respostas entre a <a href="https://developers.vtex.com/vtex-rest-api/reference/orderform">simulação do carrinho</a> e a criação de pedidos pela API de placeOrder. Divergências entre as respostas de cada momento podem impedir a criação do pedido.
                <p>
                A criação de pedidos pela API de placeOrder com promoção depende do envio das <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span>, que então especificam as promoções previamente obtidas na simulação.
                <p>
                Todas as <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span> aplicadas pelo sistema na criação do pedido precisam ser especificadas previamente na requisição à API. Caso contrário, o pedido não é criado e esta mensagem de erro é exibida, pois o sistema entende que as condições do contexto não são aplicáveis, já que elas dependem de todas as <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span> (incluindo as não declaradas).
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    O valor do pagamento é diferente do valor do pedido</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Esta mensagem é exibida quando há uma diferença entre o valor da <a href="https://developers.vtex.com/vtex-rest-api/reference/orderform">simulação do carrinho</a> e o valor do pedido criado via API de placeOrder.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Não foi possível se comunicar com o vendedor XXXXXX</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Esta mensagem é exibida quando o checkout não consegue se comunicar com o seller para fechar o pedido. Este erro geralmente tem caráter temporário e costuma ser resolvido pelas tentativas automáticas do módulo de <strong>Assinaturas</strong>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [ADDRESS_DATA]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este erro ocorre apenas em lojas que utilizam <strong>Assinaturas V2</strong>. A cada ciclo de assinatura, o app de <strong>Assinaturas V2</strong> faz uma validação extra que verifica se algum dos dados de endereço mudou desde a criação da assinatura. Se os dados de endereço não forem exatamente iguais, ocorre o erro.
                <p>
                Exemplo: se o cliente coloca um acento no nome da rua na aba <strong>Endereços </strong>da página <strong>Minha Conta</strong> após criar a assinatura, o módulo de <strong>Assinaturas V2</strong> detecta a mudança e exibe esse erro. 
                <p>
                Para corrigir o erro, é necessário entrar em contato com o cliente e pedir para que revise seus dados na página <strong>Minha Conta</strong>.​
            </td>
        </tr>
    </tbody>        
</table>

## Erro de Pagamento

Erros de pagamento são os que acontecem durante o fluxo de aprovação do pagamento, como a recusa de um cartão de crédito pelo gateway.

Pedidos com esse tipo de erro podem ser visualizados na aba **Erro de Pagamento**, ilustrada na imagem abaixo.

![errosdepagamento PT](https://images.ctfassets.net/alneenqid6w5/1RIw7xmqhpU4eWq0zHEnKG/305350275dedd4e7c7888814db9fab07/errosdepagamento_PT.png)

Para analisar erros de pagamento, confira o passo a passo a seguir.

1. No Admin, acesse o módulo **Assinaturas**.
2. Clique na aba **Dashboards**.
3. Na seção **Pedidos de Assinatura**, clique na aba **Erro de Pagamento**.
4. Identifique o pedido desejado e clique na ID do pedido, conforme ilustrado na imagem abaixo. Você será redirecionado à página de detalhes do pedido, no módulo de **Todos os pedidos**.
  ![PT Log Erro de pagamento](https://images.ctfassets.net/alneenqid6w5/7697GbtjQbOutzL1sgrpjV/afdaba25349564a26d46149b437aab2a/PT_Log_Erro_de_pagamento.png)
5. Uma vez na página de detalhes do pedido, clique em `Ver detalhes da transação`, no card de **Pagamento**. Você será redirecionado à página de **Transações**, no módulo de **Pagamentos**.
6. Na página de **Transações**, você poderá visualizar e analisar os eventos de transação do pedido. Leia o artigo [Visualizar detalhes da transação no Pagamentos](https://help.vtex.com/pt/tutorial/como-visualizar-detalhes-do-pedido) para mais informações.

Os pedidos com erros de pagamento passam por 5 novas tentativas automáticas, em um período de até 12 horas, de acordo com o fluxo do gateway de pagamentos. Não é possível fazer tentativas manuais para corrigir erros de pagamento no Admin.

Os clientes da sua loja podem editar suas assinaturas e realizar outras ações através da página [__Minha Conta__](https://help.vtex.com/pt/tutorial/como-funciona-o-my-account--2BQ3GiqhqGJTXsWVuio3Xh). Isso permite que alguns erros de pagamento sejam resolvidos pelos próprios clientes, mesmo após o período de novas tentativas automáticas, alterando a forma de pagamento.

#### **Saiba mais**

 * [Como gerenciar Assinaturas](https://help.vtex.com/pt/tutorial/como-gerenciar-assinaturas--6Jk50FPbv6iuz1OsFypv8x)
