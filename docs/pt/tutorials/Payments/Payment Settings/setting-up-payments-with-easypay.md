---
title: 'Configurar pagamento com easypay'
id: 3xJQqjMIn0ARDI1HcwK88J
status: PUBLISHED
createdAt: 2023-09-18T16:48:21.184Z
updatedAt: 2024-06-17T15:38:51.146Z
publishedAt: 2024-06-17T15:38:51.146Z
firstPublishedAt: 2023-09-18T18:53:57.235Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-easypay
locale: pt
legacySlug: configurar-pagamento-com-easypay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, você pode integrar com o provedor de pagamento easypay. Por meio deste provedor, sua loja pode efetuar vendas utilizando a easypay, MBWay e MultiBanco.

Para utilizar easypay, é necessário:

- [Instalar o app easypay](#instalar-o-app-easypay)
- [Configurar o app easypay](#configurar-o-app-easypay)
- [Configurar Webhook easypay](#configurar-webhook-easypay)
- [Configurar afiliação easypay](#configurar-afiliacao-easypay)
- [Configurar pagamento com Apple Pay na easypay (opcional)](#configurar-pagamento-com-apple-pay-na-easypay-opcional)    

>⚠️ Caso você seja um marketplace ou seller, acesse os artigos [Configurar pagamento com easypay no Marketplace](https://help.vtex.com/pt/tutorial/configurar-pagamento-com-easypay-marketplace--3YllWiITcPEOpteuToEdO7) ou [Configurar pagamento com easypay seller](https://help.vtex.com/pt/tutorial/configurar-pagamento-com-easypay-seller--5mYMCM1tiRiZO6PozuUncE).

## Instalar o app easypay

Para instalar o app easypay, siga os passos abaixo:

1. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute o comando `vtex login nomedaconta` para realizar o login em sua conta.
2. Instale o app easypay por meio do comando `vtex install easypaypartnerpt.payment-provider-easypay`. 

## Configurar o app easypay

Após realizar a instalação do App easypay, você precisa configurá-lo. Para acessar a tela de configurações, siga os passos abaixo:

1. No Admin VTEX, acesse __Hub de Extensões > Gerenciamento de Aplicativos__, ou digite __Gerenciamento de Aplicativos__ na barra de busca no topo da página.
2. Localize o app __Easypay Payment Provider__ e clique em __Configurações__.

As informações de configuração estão divididas em quatro seções:

- [Credenciais easypay (obrigatório)](#credenciais-easypay)
- [Pagamento (obrigatório)](#pagamento)
- [Personalização do Checkout easypay (opcional)](#personalizacao-do-checkout-easypay)
- [Modo sandbox](#modo-sandbox)

![easypay_pt_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-0.png)

>⚠️ Você deve realizar as configurações abaixo no [ambiente easypay](https://backoffice.easypay.pt/). O controle destas configurações é de responsabilidade da easypay, e portanto, a VTEX não garante que os passos abaixo estejam atualizados permanentemente. Utilize este documento como uma referência e consulte sua conta no [ambiente easypay](https://backoffice.easypay.pt/) para informações atualizadas.

### Credenciais easypay

As informações desta seção devem ser preenchidas obrigatoriamente.

__Key ID e Key Value__: valor e ID da chave easypay.

<blockquote><ui>1. No <a href="https://backoffice.easypay.pt/">ambiente easypay</a>, clique no logotipo da easypay localizado no canto superior esquerdo da tela, e na seta da conta desejada.</ui>

![easypay_pt_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-1.PNG)

<blockquote><ui>2. Acesse <b>Web Services > Configuração API 2.0 > Chaves</b>.</ui>

![easypay_pt_3](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-2.PNG)

<blockquote><ui>3. Copie e salve as informações <b>ID</b> e <b>Chave</b>.</ui>

![easypay_pt_4](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-3.PNG)

__Merchant account UID__: identificação da conta do comerciante onde serão depositados os valores das compras dos produtos efetuados na loja. Caso não haja uma conta comerciante separada, é possível utilizar o “Account UID” da conta de pagamentos.

<blockquote><ui>1. No <a href="https://backoffice.easypay.pt/">ambiente easypay</a>, clique no logotipo da easypay localizado no canto superior esquerdo da tela, e depois na conta “COMERCIANTE 1”, clique na seta.</ui>

![easypay_pt_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-4.PNG)

<blockquote><ui>2. Copie e salve as informações do <b>Account UID</b>.</ui>

![easypay_pt_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-5.PNG)

__Margin account UID__: identificação da conta de margens. 

>ℹ️ Este campo somente deverá ser preenchido quando a loja for um marketplace e realizar split de pagamentos. Saiba mais em [Configurar pagamento com easypay no Marketplace](https://help.vtex.com/pt/tutorial/configurar-pagamento-com-easypay-marketplace--3YllWiITcPEOpteuToEdO7).

__Refund account ID e Refund account key__: caso não exista conta específica de reembolso, o valor do __Key ID__ deverá ser preenchido no campo __Refund account ID__, e o valor de __Key value__ em __Refund account key__.

### Pagamento

Nesta seção, você deve indicar se a sua loja utilizará pagamentos assíncronos, síncronos ou ambos. Acesse a documentação easypay para verificar os [métodos de pagamentos](https://docs.quality-utility.aws.easypay.pt/concepts/payment-methods) disponíveis e suas respectivas [siglas](https://docs.quality-utility.aws.easypay.pt/checkout/reference) de identificação.

![easypay_pt_7](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-6.PNG)

__Tipos de pagamento assíncronos aceites__: métodos de pagamento assíncronos disponíveis para o cliente. Preencha apenas com as siglas dos tipos de Assíncronos, separados por vírgula, sem pontos e sem espaços.

Exemplo:

| Correto | Incorreto |
| ---------------- | ---------------- |
| mb,dd,vi,sc | mb, dd, vi, sc |

>⚠️ Caso este campo seja preenchido, será obrigatório o preenchimento do campo **Dias para expiração de pagamentos assíncronos**.

__Tipos de pagamento síncronos aceites__: métodos de pagamento síncronos disponíveis para o cliente. Preencha apenas com as siglas dos tipos de Síncronos, separados por vírgula, sem pontos e sem espaços.

Exemplo:

| Correto | Incorreto |
| ---------------- | ---------------- |
| cc,mbw,uf | cc, mbw, uf |

__Dias para expiração de pagamentos assíncronos__: tempo de expiração (em dias) de pagamentos assíncronos. Preencha apenas o número de dias desejados. 

Exemplo:

| Correto | Incorreto |
| ---------------- | ---------------- |
| 10 | 10 dias, Dez ou 10/05/2023 |

### Personalização do Checkout easypay

A easypay possui um layout de Checkout nativo configurado no app. Veja abaixo:

![easypay_pt_8](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-7.PNG)

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

>⚠️ Não utilize fontes acima de 12 pixels, pois poderão distorcer a visualização do layout.</b>

### Modo Sandbox

Para habilitar o ambiente de testes de desenvolvimento, selecione a opção __Ativar modo sandbox__. Você deve utilizar credenciais de teste.

Após concluir o preenchimento dos campos de configuração, clique em __Salvar__.

## Configurar webhook easypay

Para configurar o webhook da easypay, sig os passos abaixo:

<blockquote><ui>1. No <a href="https://backoffice.easypay.pt/">ambiente easypay</a>, clique no logotipo da easypay localizado no canto superior esquerdo da tela, e depois clique na seta da conta desejada.</ui>

![easypay_pt_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-8.PNG)

<blockquote><ui>2. Acesse <b>Web Services > Configuração URL</b>.</ui>

<blockquote><ui>3. Em <b>URL: Notificar</b>, preencha com o link abaixo, modificando apenas a informação do nome real de sua loja.</ui>

`https://{nome-da-sua-conta}.myvtex.com/_v/easypaypartnerpt.payment-provider-easypay/webhook`

![easypay_pt_9](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/configurar-pagamento-com-easypay-9.PNG)

<blockquote><ui>4. Clique em <b>Submeter</b>.</ui>

## Configurar afiliação easypay

Para configurar a afiliação easypay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __easypay__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta easypay.
5. Em __Captura Automática de Pagamento__, selecione a opção __Use O Comportamento Recomendado Pelo Processador de Pagamentos__.
6. Em __Ativar divisão e enviar recebedores?__, selecione a opção __Sim__.
7. Clique em `Salvar`.

## Configurar pagamento com Apple Pay na easypay (opcional) 

Para processar pagamentos com Apple Pay na easypay você precisa primeiramente realizar configurações para habilitar sua loja no ambiente da Apple Pay. Saiba mais em [Setting up Merchant ID in Apple Pay](https://developers.vtex.com/docs/guides/setting-up-merchant-id-in-apple-pay).

Para configurar outros métodos de pagamento a serem processados pela easypay, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector easypay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

