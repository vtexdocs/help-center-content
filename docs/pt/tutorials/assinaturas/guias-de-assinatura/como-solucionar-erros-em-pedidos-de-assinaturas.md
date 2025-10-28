---
title: 'Como solucionar erros em pedidos de assinaturas'
id: uLL8AYBGdtAmbbdL5gRCf
status: PUBLISHED
createdAt: 2020-02-05T14:32:49.763Z
updatedAt: 2025-09-03T20:28:04.306Z
publishedAt: 2025-09-03T20:28:04.306Z
firstPublishedAt: 2020-02-11T15:00:00.666Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: troubleshooting-errors-in-subscription-orders
legacySlug: como-solucionar-pedidos-de-assinatura-com-erros
locale: pt
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

> ℹ️ É possível acessar informações somente de pedidos criados nos últimos dois anos, sendo o mesmo período válido para clientes acessarem pedidos pelo [Minha Conta](/pt/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).

É possível identificar e gerenciar erros em pedidos de assinaturas através do módulo de **Assinaturas** > **Dashboards** > **Pedidos de Assinatura** no Admin.

Existem dois tipos de erros que podem ocorrer com pedidos de assinaturas:

- [Ciclos com problema](#ciclos-com-problema)
- [Erros de Pagamento](#erros-de-pagamento)

## Ciclos com problema

Problemas em ciclos de assinaturas acontecem quando há um problema que impede a criação do pedido de assinatura, como um SKU indisponível no estoque. 

A aba **Ciclos com problema**, ilustrada na imagem abaixo, reúne os pedidos de assinaturas que apresentam problemas desse tipo.

![cicloscomproblema PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/assinaturas/guias-de-assinatura/como-solucionar-erros-em-pedidos-de-assinaturas_1.png)

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

| Erro | Significado |
|------|-------------|
| `Could not select a SLA for sku {ID do SKU}` | Não foram encontradas estratégias de envio associadas a determinado SKU dentro do pedido de assinatura.<br>Geralmente, este erro está atrelado à falta de disponibilidade de estoque do SKU em questão, ou alguma limitação na configuração logística. |
| `No SLAs were found for this subscription` | Não foram encontradas estratégias de envio associadas à assinatura como um todo.<br>Geralmente, este erro está atrelado à falta de disponibilidade de estoque dos itens que compõem a assinatura, ou alguma limitação na configuração logística, como ausência de geocoordenadas no perfil do cliente. |
| `Request items length is zero after simulation` | Esta mensagem é exibida quando os primeiros passos da simulação do carrinho ocorrem com sucesso, mas em um segundo momento a simulação passa a não encontrar itens válidos para realizar a compra. Isso pode ocorrer até horas depois, no caso de uma nova tentativa de pagamento. Este é um cenário previsto e não é possível evitá-lo, a não ser que o estoque seja infinito e a política de envio permanente. |
| `Subscription has invalid data to place order: [ADDRESS_MISSING]` | Erro atrelado a algum problema no endereço cadastrado pelo cliente para a assinatura, como CEP inválido ou inexistência dos dados de geocoordenadas.<br>Para corrigir o erro, é necessário entrar em contato com o cliente e pedir para que revise seus dados de endereço na página **Minha Conta**. |
| `Subscription has invalid data to place order: [INVALID_PROFILE]` | Este erro ocorre quando há alguma informação faltando no perfil do cliente. Exemplo: se o cliente remover o CPF do perfil após a primeira compra, na próxima data do ciclo de assinatura, o pedido gerado terá este erro.<br>Para corrigir o erro, é necessário que o cliente preencha a informação no perfil da página **Minha Conta**. |
| `Subscription has invalid data to place order: [PAYMENT_MISSING]` | Este erro significa que não há forma de pagamento cadastrada para a assinatura no perfil do usuário.<br>Para corrigir o erro, é necessário entrar em contato com o cliente e pedir para que preencha seus dados de pagamento na página **Minha Conta**. |
| `Subscription has invalid data to place order: [ADDRESS_MISSING\|PAYMENT_MISSING]` | Esta mensagem de erro pode ter duas causas:<br>- Cadastro de cliente com dados de cartão de crédito incompletos ou inválidos e dados de endereço incompletos ou inválidos.<br>- Cadastro de cliente com número de CPF inválido.<br><br>Para corrigir o erro, é necessário entrar em contato com o cliente e pedir para que revise seus dados na página **Minha Conta**. |
| `PriceTag inválida` | Esta mensagem é exibida quando existe uma diferença de `priceTags` das respostas entre a [simulação do carrinho](https://developers.vtex.com/vtex-rest-api/reference/orderform) e a criação de pedidos pela API de placeOrder. Divergências entre as respostas de cada momento podem impedir a criação do pedido.<br>A criação de pedidos pela API de placeOrder com promoção depende do envio das `priceTags`, que então especificam as promoções previamente obtidas na simulação.<br>Todas as `priceTags` aplicadas pelo sistema na criação do pedido precisam ser especificadas previamente na requisição à API. Caso contrário, o pedido não é criado e esta mensagem de erro é exibida, pois o sistema entende que as condições do contexto não são aplicáveis, já que elas dependem de todas as `priceTags` (incluindo as não declaradas). |
| `O valor do pagamento é diferente do valor do pedido` | Esta mensagem é exibida quando há uma diferença entre o valor da [simulação do carrinho](https://developers.vtex.com/vtex-rest-api/reference/orderform) e o valor do pedido criado via API de placeOrder. |
| `Não foi possível se comunicar com o vendedor XXXXXX` | Esta mensagem é exibida quando o checkout não consegue se comunicar com o seller para fechar o pedido. Este erro geralmente tem caráter temporário e costuma ser resolvido pelas tentativas automáticas do módulo de **Assinaturas**. |
| `Subscription has invalid data to place order: [ADDRESS_DATA]` | Este erro ocorre apenas em lojas que utilizam **Assinaturas V2**. A cada ciclo de assinatura, o app de **Assinaturas V2** faz uma validação extra que verifica se algum dos dados de endereço mudou desde a criação da assinatura. Se os dados de endereço não forem exatamente iguais, ocorre o erro.<br>Exemplo: se o cliente coloca um acento no nome da rua na aba **Endereços** da página **Minha Conta** após criar a assinatura, o módulo de **Assinaturas V2** detecta a mudança e exibe esse erro.<br>Para corrigir o erro, é necessário entrar em contato com o cliente e pedir para que revise seus dados na página **Minha Conta**. |

## Erro de Pagamento

Erros de pagamento são os que acontecem durante o fluxo de aprovação do pagamento, como a recusa de um cartão de crédito pelo gateway.

Pedidos com esse tipo de erro podem ser visualizados na aba **Erro de Pagamento**, ilustrada na imagem abaixo.

![errosdepagamento PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/assinaturas/guias-de-assinatura/como-solucionar-erros-em-pedidos-de-assinaturas_2.png)

Para analisar erros de pagamento, confira o passo a passo a seguir.

1. No Admin, acesse o módulo **Assinaturas**.
2. Clique na aba **Dashboards**.
3. Na seção **Pedidos de Assinatura**, clique na aba **Erro de Pagamento**.
4. Identifique o pedido desejado e clique na ID do pedido, conforme ilustrado na imagem abaixo. Você será redirecionado à página de detalhes do pedido, no módulo de **Todos os pedidos**.
  ![PT Log Erro de pagamento](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/assinaturas/guias-de-assinatura/como-solucionar-erros-em-pedidos-de-assinaturas_3.png)
5. Uma vez na página de detalhes do pedido, clique em `Ver detalhes da transação`, no card de **Pagamento**. Você será redirecionado à página de **Transações**, no módulo de **Pagamentos**.
6. Na página de **Transações**, você poderá visualizar e analisar os eventos de transação do pedido. Leia o artigo [Visualizar detalhes da transação no Pagamentos](/pt/tutorial/como-visualizar-detalhes-do-pedido) para mais informações.

Os pedidos com erros de pagamento passam por 5 novas tentativas automáticas, em um período de até 12 horas, de acordo com o fluxo do gateway de pagamentos. Não é possível fazer tentativas manuais para corrigir erros de pagamento no Admin.

Os clientes da sua loja podem editar suas assinaturas e realizar outras ações através da página [__Minha Conta__](/pt/tutorial/como-funciona-o-my-account--2BQ3GiqhqGJTXsWVuio3Xh). Isso permite que alguns erros de pagamento sejam resolvidos pelos próprios clientes, mesmo após o período de novas tentativas automáticas, alterando a forma de pagamento.

#### **Saiba mais**

 * [Como gerenciar Assinaturas](/pt/tutorial/como-gerenciar-assinaturas--6Jk50FPbv6iuz1OsFypv8x)
