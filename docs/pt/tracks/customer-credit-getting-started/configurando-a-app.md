---
title: 'Configurando o Customer Credit '
id: 21ok0GBwmcIeaY2IukYMOg
status: PUBLISHED
createdAt: 2018-11-07T17:11:22.823Z
updatedAt: 2024-02-08T18:03:14.738Z
publishedAt: 2024-02-08T18:03:14.738Z
firstPublishedAt: 2018-11-07T17:23:16.520Z
contentType: trackArticle
productTeam: Financial
slugEN: setting-up-the-app
locale: pt
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugPT: customer-credit-como-comecar
---

Após instalar a app do Customer Credit, você deve realizar as seguintes configurações:

- [Primeiro acesso](#configuracoes-do-primeiro-acesso)
- [App](#configuracoes-da-app) 
- [Condições de pagamento](#condicoes-de-pagamento)

## Configurações do primeiro acesso

Para realizar as configurações iniciais do Customer Credit, siga os passos abaixo:

1. No Admin VTEX, acesse __Aplicativos > Customer Credit > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na seção __Pendente__, uma ou mais das configurações listadas abaixo podem ser exibidas:
<br>
<ul>
<br>
    	<li><b>Ativar emails transacionais no Message Center</b>: clique em <b>Ativar</b> para instalar os templates de emails transacionais relativos ao Customer Credit no <a href="https://help.vtex.com/pt/tutorial/conhecendo-o-message-center--tutorials_84">Message Center</a>.</li>
    	<li><b>Configurar condições de pagamento do checkout</b>: clique em <b>Configurar</b> para permitir a definição as regras de prazo e parcelamento da loja.</li>
  	<li><b>Appkey e appToken da afiliação não definidos</b>: clique em <b>Autenticar</b> para ser redirecionado a tela de configuração onde você deverá preencher as informações <b>Application Key</b> e <b>Application Token</b>. Esta ação permitirá que pagamentos realizados por meio de Customer Credit possam ser processados em sua loja. Saiba mais em <a href="https://developers.vtex.com/docs/guides/authentication">Authentication</a>.</li>
</ul>

![CC_Configurações_1_PT](https://images.ctfassets.net/alneenqid6w5/6cDl5QeEatvpLW3kYxV7Yd/b1505293c33db8cd9f7d8cf1d7802496/CC_Configura__es_1_PT.JPG)

## Configurações da app

Em seguida, ainda na mesma tela do Admin VTEX (__Aplicativos > Customer Credit > Configurações__), você deve verificar as seguintes opções de configurações:

- [Tolerância](#tolerancia)
- [Criação automática de conta](#criacao-automatica-de-conta) 
- [Página Meus Créditos](#pagina-meus-creditos)
- [Instruções de pagamento](#instrucoes-de-pagamento)
- [Informações de identificação](#informacoes-de-identificacao)

### Tolerância

Ativar esta opção permite que uma compra seja concluída mesmo que o seu valor ultrapasse o limite de crédito disponível do cliente. No momento da criação da conta é possível cadastrar um percentual excedente de crédito (tolerância) para cada cliente.

Por exemplo, para uma conta criada com o limite de crédito de R$ 1.000,00 e tolerância de 10%, o cliente poderá realizar um pedido no valor máximo de R$ 1.100,00 utilizando o Customer Credit como meio de pagamento. Caso o cliente deseje utilizar o crédito para pagar um pedido no valor de R$ 1.250,00, o sistema não permitirá a conclusão da compra.

>⚠️ Os valores de tolerância são configurados em números decimais, sendo 0 a representação de 0% e 1, a representação de 100%. Exemplo: para utilizar uma tolerância de 5%, o valor a ser configurado é de 0.05.

![CC_Configurações_2_PT](//images.ctfassets.net/alneenqid6w5/3kjEQ2OblMKqwumNWSFnSt/1fde698cc193dda7e6ed82de51f7c19e/CC_Configura__es_2_PT.JPG)

### Criação automática de conta 

Esta opção permite que qualquer cliente da loja possa utilizar o Customer Credit como meio de pagamento, mesmo que o você não tenha previamente criado uma conta para ele no app do Customer Credit. Ao ativar esta funcionalidade, você também deve definir qual o limite de crédito inicial poderá ser utilizado para pedidos realizados por clientes sem conta no Customer Credit.

![CC_Configurações_3_PT](//images.ctfassets.net/alneenqid6w5/1TX1ArtNwm8toa84UqNCHZ/692229716909844ecc30b605e629301e/CC_Configura__es_3_PT.JPG)

### Página Meus Créditos

Ao realizar a instalação da página __Meus Créditos__, você permitirá que os clientes possam visualizar e gerenciar informações sobre os créditos e títulos disponíveis em sua conta.

O cliente poderá acessar esta página no site da sua loja em __Minha Conta > Meus Créditos__.

![CC_Configurações_4_PT](//images.ctfassets.net/alneenqid6w5/59SuH9h84mmgaHmcDB2Bbl/8bf45b5c1708a3861ea92a729c2b9d22/CC_Configura__es_4_PT.JPG)

### Instruções de pagamento  

Esta configuração permite você possa inserir instruções relacionadas ao pagamento nos títulos que forem emitidos pelo Customer Credit. Para editar a mensagem a ser exibida no título, insira as informações na caixa de texto e clique em `Atualizar`.

>⚠️ A mensagem cadastrada nessa configuração será replicada em todos os títulos emitidos para todas as contas de clientes do Customer Credit. Não é possível configurar uma mensagem única para cada cliente ou título específico.

![CC_Configurações_5_PT](//images.ctfassets.net/alneenqid6w5/6UkZi827KKQqH8Yk1mmPKj/b2c97be162320e8ed8ef2da3729ecedd/CC_Configura__es_5_PT.JPG)

### Informações de identificação

Esta opção permite selecionar quais informações de identificação da loja devem ser exibidas na parte superior dos títulos emitidos.

![CC_Configurações_6_PT](//images.ctfassets.net/alneenqid6w5/6ADAtBnrZQS6sCzkwPSqFt/d85d0bf4bf69a520f923844d36f304bb/CC_Configura__es_6_PT.JPG)

![CC_Configuration_8_PT](//images.ctfassets.net/alneenqid6w5/54WcXTGpAGppAyGxxoa8gx/ec7b597cdf26bc9aeb17012047849f44/CC_Configuration_8_PT.JPG)

## Condições de pagamento 

Assim que as configurações do Customer Credit estiverem concluídas, é necessário indicar quais serão as opções de prazo e parcelamentos disponíveis a serem exibidos aos clientes na tela do Checkout.

Para criar as condições de pagamento de títulos do Customer Credit, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Selecione a opção __Customer Credit__.
4. Preencha o campo __Nome da condição__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. Em __Configure as condições de prazo e parcelamento__, indique o número de parcelas, período de vencimento (em dias) e a taxa de juros simples a ser aplicada em cada parcela. Para criar mais de uma condição de pagamento, clique em `Adicionar nova condição`.

![CC_Configuration_9_PT](//images.ctfassets.net/alneenqid6w5/3P3JMnSiAPXNprYvgaNFNh/337edcc2678c80f6e1504def51efceaf/CC_Configuration_9_PT.JPG)

<blockquote><ui>7. Se desejar, você também pode <a href="https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456">configurar condições especiais de pagamento</a>.</ui>

<blockquote><ui>8. Clique em <b>Salvar</b>.</ui>

>⚠️ Não é possível configurar taxa de juros para uma condição de pagamento criada com apenas uma única parcela.
