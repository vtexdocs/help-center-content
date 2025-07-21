---
title: 'Configurar pagamento com easypay marketplace'
id: 3YllWiITcPEOpteuToEdO7
status: PUBLISHED
createdAt: 2023-09-19T12:04:31.528Z
updatedAt: 2025-02-20T21:56:26.715Z
publishedAt: 2025-02-20T21:56:26.715Z
firstPublishedAt: 2023-09-19T12:05:03.795Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-easypay-marketplace
locale: pt
legacySlug: configurar-pagamento-com-easypay-marketplace
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, você pode integrar com o provedor de pagamento easypay. Por meio deste conector, sua loja pode efetuar vendas utilizando a easypay, MBWay e MultiBanco.

Para utilizar a afiliação easypay no seu marketplace, é necessário:

- [Instalar o app easypay](#instalar-o-app-easypay)
- [Configurar o app easypay](#configurar-o-app-easypay)
- [Configurar Webhook easypay](#configurar-webhook-easypay)
- [Configurar afiliação easypay](#configurar-afiliacao-easypay)

<div class="alert alert-warning" role="alert">Caso sua loja não seja um marketplace, acesse os artigos <a href="https://help.vtex.com/pt/tutorial/configurar-pagamento-com-easypay--3xJQqjMIn0ARDI1HcwK88J">Configurar pagamento com easypay</a> ou <a href="https://help.vtex.com/pt/tutorial/configurar-pagamento-com-easypay-seller--5mYMCM1tiRiZO6PozuUncE">Configurar pagamento com easypay seller</a>.</div>

## Instalar o app easypay

Para instalar o app easypay, siga os passos abaixo:

1. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute o comando `vtex login nomedaconta` para realizar o login em sua conta.
2. Instale o app easypay por meio do comando `vtex install easypaypartnerpt.payment-provider-easypay`.

## Configurar o app easypay

Após realizar a instalação do app easypay, você precisa configurá-lo. Para acessar a tela de configurações, siga os passos abaixo:

1. No Admin VTEX, acesse __Hub de Extensões > Gerenciamento de Aplicativos__, ou digite __Gerenciamento de Aplicativos__ na barra de busca no topo da página.
2. Localize o app __Easypay Payment Provider__ e clique em __Configurações__.

As informações de configuração estão divididas em quatro seções:

- [Credenciais easypay (obrigatório)](#credenciais-easypay)
- [Pagamento (obrigatório)](#pagamento)
- [Personalização do Checkout easypay (opcional)](#personalizacao-do-checkout-easypay)
- [Modo sandbox](#modo-sandbox)

![easypay_pt_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_1.png)

<div class="alert alert-warning" role="alert">Você deve realizar as configurações abaixo no <a href="https://backoffice.easypay.pt/">ambiente easypay</a>. O controle destas configurações é de responsabilidade da easypay, e portanto, a VTEX não garante que os passos abaixo estejam atualizados permanentemente. Utilize este documento como uma referência e consulte sua conta no <a href="https://backoffice.easypay.pt/">ambiente easypay</a> para informações atualizadas.</div>

### Credenciais easypay

As informações desta seção devem ser preenchidas obrigatoriamente.

__Key ID e Key Value__: valor e ID da chave easypay.

<blockquote><ui>1. No <a href="https://backoffice.easypay.pt/">ambiente easypay</a>, clique no logotipo da easypay localizado no canto superior esquerdo da tela, e na seta da conta <b>Marketplace</b>.</ui>

![easypay_pt_10](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_2.PNG)

<blockquote><ui>2. Acesse <b>Web Services > Configuração API 2.0</b>.</ui>

<blockquote><ui>3. No menu <b>Alias</b>, opção <b>Criar Dados de Pagamentos</b>, clique em <b>Chaves</b>.</ui>

![easypay_pt_11](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_3.png)

<blockquote><ui>4. Copie e salve as informações <b>ID</b> e <b>Chave</b>. Caso deseje criar uma nova chave, clique em <b>+ Nova</b>.</ui>

![easypay_pt_12](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_4.PNG)

__Merchant account UID__: identificação da conta do comerciante onde serão depositados os valores das compras dos produtos efetuados na loja. Caso não haja uma conta comerciante separada, é possível utilizar o “Account UID” da conta de pagamentos.

<blockquote><ui>1. No <a href="https://backoffice.easypay.pt/">ambiente easypay</a>, clique no logotipo da easypay localizado no canto superior esquerdo da tela, e depois na conta “COMERCIANTE 1”, clique na seta.</ui>

![easypay_pt_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_5.PNG)

  <blockquote><ui>2. Copie e salve as informações do <b>Account UID</b>.</ui>

![easypay_pt_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_6.PNG)

__Margin account UID__: identificação da conta de margens. 

1. No menu lateral do <a href="https://backoffice.easypay.pt/">ambiente easypay</a>, clique em __Beneficiário__.
2. Copie as informações e salve as informações do __Account UID__ disponíveis em __Conta de Margens__.

![easypay_pt_13](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_7.PNG)

__Refund account ID e Refund account key__: easypay refund keys ID e value.

<blockquote><ui>1. No menu lateral do <a href="https://backoffice.easypay.pt/">ambiente easypay</a>, acesse <b>Web Services > Configuração API 2.0</b>.</ui>

<blockquote><ui>2. No menu <b>Alias</b>, opção <b>Conta de margens</b>, clique em <b>Chaves</b>.</ui>

![easypay_pt_14](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_8.PNG)

<blockquote><ui>3. Clique em <b>+ Nova</b>.</ui>

![easypay_pt_15](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_9.PNG)

<blockquote><ui>4. Preencha o campo <b>Nome</b> com <b>Refund Account</b>.</ui>

![easypay_pt_16](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_10.png)

<blockquote><ui>5. Clique em <b>Salvar</b>.</ui>

<blockquote><ui>6. Copie e salve as informações <b>ID</b> e <b>Chave</b>.</ui>

![easypay_pt_17](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_11.png)

<div class="alert alert-warning" role="alert">Os reembolsos são debitados diretamente de uma conta pertencente ao marketplace. Posteriormente, o marketplace deve solicitar ao seller o valor reembolsado.</div>

### Pagamento

Nesta seção, você deve indicar se a sua loja utilizará pagamentos assíncronos, síncronos ou ambos. Acesse a documentação easypay para verificar os [métodos de pagamentos](https://docs.quality-utility.aws.easypay.pt/concepts/payment-methods) disponíveis e suas respectivas [siglas](https://docs.quality-utility.aws.easypay.pt/checkout/reference) de identificação.

![easypay_pt_7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_12.png)

__Tipos de pagamento assíncronos aceites__: métodos de pagamento assíncronos disponíveis para o cliente. Preencha apenas com as siglas dos tipos de Assíncronos, separados por vírgula, sem pontos e sem espaços.

Exemplo:

| Correto | Incorreto |
| ---------------- | ---------------- |
| mb,dd,vi | mb, dd, vi |

<div class="alert alert-warning" role="alert">Caso este campo seja preenchido, será obrigatório o preenchimento do campo <b>Dias para expiração de pagamentos assíncronos</b>.</div>

__Tipos de pagamento síncronos aceites__: métodos de pagamento síncronos disponíveis para o cliente. Preencha apenas com as siglas dos tipos de Síncronos, separados por vírgula, sem pontos e sem espaços.

Exemplo:

| Correto | Incorreto |
| ---------------- | ---------------- |
| cc,mbw | cc, mbw |

__Dias para expiração de pagamentos assíncronos__: tempo de expiração (em dias) de pagamentos assíncronos. Preencha apenas o número de dias desejados. 

Exemplo:

| Correto | Incorreto |
| ---------------- | ---------------- |
| 10 | 10 dias, Dez ou 10/05/2023 |

### Personalização do Checkout easypay

A easypay possui um layout de Checkout nativo configurado no app. Veja abaixo:

![easypay_pt_8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_13.png)

Caso deseje realizar algum tipo de personalização no Checkout nativo da easypay, preencha um ou mais dos campos nesta seção:

- __Checkout logo URL__: logotipo a ser exibido no Checkout easypay. Preencha com o link do endereço da imagem a ser utilizada.
- __Checkout background color__: cor do background. Preencha o código HEX da cor desejada. Padrão nativo: #ffffff.
- __Checkout accent color__: cor dos destaques, padrão de botões e bordas dos inputs. Preencha o código HEX da cor desejada. Padrão nativo: #0d71f9.
- __Checkout error color__: cor das mensagens de erros. Preencha o código HEX da cor desejada. Padrão nativo: #ff151f.
- __Checkout input background color__: cor do background dos inputs. Preencha o código HEX da cor desejada. Padrão nativo: transparent.
- __Checkout input border color__: cor da borda dos inputs. Preencha o código HEX da cor desejada. Padrão nativo: a mesma cor utilizada no __accent color__.
- __Checkout input border radius__: permite definir o arredondamento das bordas dos inputs. Preencha com o valor desejado em pixels (apenas números). Padrão nativo: 50 pixels.

Exemplo:

| Correto | Incorreto |
| ---------------- | ---------------- |
| 35 | 35px |

- __Checkout button background color__: cor do background dos botões. Preencha o código HEX da cor desejada. Padrão nativo: a mesma cor utilizada no __accent color__.
- __Checkout button border radius__: permite definir o arredondamento das bordas dos botões. Preencha com o valor desejado em pixels (apenas números). Padrão nativo: 50 pixels.

Exemplo:

| Correto | Incorreto |
| ---------------- | ---------------- |
| 30 | 30px |

- __Checkout button box shadow__: opção que permite ativar ou desativar a sombra nos botões.
- __Checkout font family__: fontes utilizadas em textos. Preencha com o _generic family name_, _web safe font_ ou link da fonte . Padrão nativo: Overpass. Exemplo correto: sans-serif, verdana, ou https://fonts.gstatic.com/s/overpass/v12/qFda35WCmI96Ajtm83upeyoaX6QPnlo6_PPbM5qKl8Kuo8AzesE.woff2

- __Checkout base font size__: permite definir o tamanho da fonte no elemento raíz. Preencha com o valor desejado em pixels (apenas números). Padrão nativo: 10 pixels.

Exemplo:

| Correto | Incorreto |
| ---------------- | ---------------- |
| 11 | 11px |

<div class="alert alert-warning" role="alert">Não utilize fontes acima de 12 pixels, pois poderão distorcer a visualização do layout.</div>

### Modo Sandbox

Para habilitar o ambiente de testes de desenvolvimento, selecione a opção __Ativar modo sandbox__. Você deve utilizar credenciais de teste.

Após concluir o preenchimento dos campos de configuração, clique em __Salvar__.

## Configurar webhook easypay

Para configurar o webhook da easypay, sig os passos abaixo:

<blockquote><ui>1. No [ambiente easypay](https://backoffice.easypay.pt/), clique no logotipo da easypay localizado no canto superior esquerdo da tela, e depois clique na seta da conta marketplace.</ui>

![easypay_pt_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_14.PNG)

<blockquote><ui>2. Acesse <b>Web Services > Configuração URL</b>.</ui>

<blockquote><ui>3. Em <b>URL: Notificar</b>, preencha com o link abaixo, modificando apenas a informação do nome real de sua loja marketplace.</ui>

`https://{nome-da-sua-conta}.myvtex.com/_v/easypaypartnerpt.payment-provider-easypay/webhook`

![easypay_pt_9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-easypay-marketplace_15.PNG)

<div class="alert alert-warning" role="alert">Caso haja mais de uma conta de pagamento em seu marketplace, adicione um link para cada uma das contas existentes.</div>

<blockquote><ui>4. Clique em <b>Submeter</b>.</ui>

## Configurar afiliação easypay

Para configurar a afiliação easypay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba Afiliações de Gateways, clique no botão `+`.
3. Clique no conector __easypay__.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta easypay.
5. Em __Captura Automática de Pagamento__, selecione a opção __Use O Comportamento Recomendado Pelo Processador de Pagamentos__.
6. Em __Ativar divisão e enviar recebedores?__, selecione a opção __Sim__.
7. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela easypay, acesse [Condições de Pagamento](/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector easypay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

