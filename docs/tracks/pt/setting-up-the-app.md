---
title: 'Configurar Customer Credit '
id: 21ok0GBwmcIeaY2IukYMOg
status: PUBLISHED
createdAt: 2018-11-07T17:11:22.823Z
updatedAt: 2022-01-07T13:30:23.058Z
publishedAt: 2022-01-07T13:30:23.058Z
firstPublishedAt: 2018-11-07T17:23:16.520Z
contentType: trackArticle
productTeam: Financial
slug: configurando-a-app
locale: pt
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugPT: customer-credit-como-comecar
---

## Configurações do primeiro acesso

Agora vamos configurar o Customer Credit. 

O primeiro passo é acessar a página de configurações do aplicativo no Admin. 

Feito isso, logo no início da tela, você verá três comandos dentro do box “Pendente”.

1. __“Ativar emails transacionais no Message Center”__: instala os templates de e-mails transacionais relativos ao Customer Credit no Message Center. Para acioná-lo, clique no botão “Ativar”;
2. __“Configurar condições de pagamento do checkout”__: define as regras de prazo e parcelamento da loja. Para acioná-lo, clique no botão “Configurar”;
3. __“AppKey e appToken da afiliação não definidos”__:  o Customer Credit com uma forma de pagamento. Para acioná-lo, clique no botão “Autenticar”. Logo em seguida, você será direcionado para a página de “Afiliações de Gateways” em que você deve preencher os campos vazios com os seus Key e Token para aquela loja. Para saber mais detalhes, consulte nosso artigo de como gerar [o appKey e o appToken](https://help.vtex.com/pt/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations--43tQeyQJgAKGEuCqQKAOI2 "o appKey e o appToken"). 

Desse modo, o Customer Credit estará disponível como forma de pagamento no SmartCheckout da sua loja.

## Configurações da app 

Em seguida, você terá quatro opções de customização da experiência que o seu consumidor terá na loja. 

Confira detalhes de cada uma delas a seguir.

### Tolerância

Esta opção permite que uma compra seja fechada mesmo que ela ultrapasse o crédito disponível do usuário. Vale ressaltar que é possível cadastrar um percentual excedente do crédito disponível para cada conta cadastrada.

Por exemplo, digamos que uma conta tenha R$ 1.000,00 de crédito disponível e uma tolerância de 10%. Desse modo, o sistema permitirá que pedidos sejam feitos em até R$ 1.100,00.

<div class="alert alert-warning">
Os valores de tolerância são configurados em números decimais, sendo 0 a representação de 0% e 1, a representação de 100%. Exemplo: para uma tolerância de 5%, o valor a ser configurado é de 0.05.
</div>

Para configurar a tolerância, confira o passo a passo:

1. Acesse o __Admin__.
2. Clique em __Customer Credit__.
3. Em seguida, clique em __Contas__.
4. Clique sobre a conta do cliente na qual deseja configurar a tolerância.
5. Em __Tolerância__, clique em __Editar__.
6. Preencha o valor da tolerância (em decimais).
7. Clique em __Atualizar__.

### Criação automática de conta 

Essa flag permite que clientes finalizem uma compra utilizando o Customer Credit como forma de pagamento, mesmo que eles não tenham uma conta prévia com limite de crédito definido. 

Na página de Configurações, você tem a opção de definir um limite de crédito padrão para os clientes que terão suas contas criadas automaticamente no SmartCheckout.

### Página Meus Créditos

É a interface pela qual seu usuário final terá acesso às informações de sua conta.

Nela, o usuário visualiza seus limites disponíveis, títulos em aberto e pagos, extrato da conta e a possibilidade de adicionar ou remover dependentes. 

Quando a página for habilitada, ficará disponível na área logada - MyAccount - do cliente.

### Instruções de pagamento  

Aqui, o usuário pode inserir instruções de pagamento nos documentos dos seus títulos. Para isso, basta clicar em “Editar” e escrever a orientação que preferir. Não esqueça de clicar no botão azul “Atualizar” para salvar as configurações.

Além disso, ressaltamos que a mesma instrução será replicada em todas as faturas da loja, independente da conta a qual o título está vinculado e o seu status.

## Condições de pagamento 

Nesse momento, o Customer Credit está devidamente instalado e configurado na sua loja. Agora, você pode criar condições de pagamento que serão apresentadas no SmartCheckout.

É possível definir diferentes cenários de negócio para essas condições de pagamento. Isso implica, também, em quais serão os prazos e os parcelamentos disponibilizados para seus clientes. 

Alguns prazos utilizados são:

- Pagamentos realizados em 7, 28 e 45 dias;
- Pagamento feitos em 45 dias; 
- Parcelamentos de 30, 60 e 90 dias. 

Desse modo, confira o passo a passo:

1. Acesse o __Admin__;
2. Clique em __Pagamentos__;
3. Em seguida, clique em __Configurações__;
4. Certifique-se que você está na aba __Condições de Pagamento__;
5. Do lado direito da tela, clique no botão verde __“+”__;
6. Localize e clique na opção __Customer Credit__;
7. Do lado direito, defina os critérios no box __Configure as regras de prazo e parcelamento__.

Caso você queira estabelecer mais de uma regra, basta clicar no botão azul “Adicionar nova regra”. Clique no botão “Salvar” para atualizar as configurações.

Além disso, da mesma forma que outras formas de pagamento, o Customer Credit também permite a configuração de [condições especiais](https://help.vtex.com/pt/tutorial/condicoes-especiais?locale=pt "condições especiais"). Isso faz o usuário defina os contextos de compra serão aplicados para cada condição de pagamento configuradas na loja.

### Juros

Por fim, você também pode definir taxas de juros simples para as regras de parcelamento configuradas na sua loja. Atualmente, é possível aplicar essas taxas para pedidos que serão pagos em duas ou mais parcelas.

<div class="alert alert-warning">
<strong>Atenção</strong>: as taxas de juros <strong>não</strong> são aplicáveis para pedidos que serão pagos em apenas uma parcela.
</div>  

Entretanto, apenas um valor de juros aplicado aos parcelamentos será exibido no SmartCheckout.

Por exemplo, digamos que você tenha configurado três parcelamentos para o Customer Credit, cada um deles com uma taxa de juros diferente: a primeira com 10%, a segunda com 15% e a terceira com 20%.

Como a configuração de 10% é a mais vantajosa para o consumidor final, essa será a única opção de pagamento exibida no SmartCheckout.
