---
title: Como funciona o protocolo de integração entre VTEX e empresas de antifraude
id: 4aZtmdpgFikcsQomWyqAOq
status: DRAFT
createdAt: 2018-05-08T20:11:35.705Z
updatedAt: 2023-02-02T21:41:15.348Z
publishedAt: 
firstPublishedAt: 2018-05-15T01:34:18.545Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: antifraud-provider
legacySlug: antifraud-provider
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

## O que é o Antifraud Provider Protocol?

O Antifraud Provider Protocol é o protocolo de integração entre a VTEX e empresas que realizam serviços de antifraude.

Por meio dele, a VTEX oferece um contrato público disponível para todos os provedores que desejam se integrar à nossa plataforma. Assim, os provedores ganham mais autonomia em relação à integração.

O protocolo conta com os seguintes recursos:
- Processamento da análise de risco síncrona e assíncrona.
- Webhook para notificação de status.

Você pode encontrar referências à API do protocolo [aqui](https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow).

## Conceitos
__Provider__: sistema de antifraude ou provedor que oferece esse tipo de serviço.

__Antifraud Provider Protocol__: protocolo de integração desenvolvido pela VTEX.

__Conector__: nome do provedor parceiro de integração com a VTEX.

## Primeiros passos
Em seguida, vamos apresentar passo a passo as informações referentes à integração de pagamentos com a VTEX.

### 1. Fase comercial
O primeiro passo é o contato comercial com a VTEX, que deve ser feito pelo [nosso site](http://partner.vtex.com). Após a conclusão do acordo comercial, o provedor é registrado e recebe um e-mail com os dados de acesso ao ambiente do provedor de antifraude, onde poderá fazer as configurações e testes necessários.

### 2. Implementando o protocolo
Antes de configurar o ambiente VTEX, o provedor deve implementar o serviço back-end necessário para processar o antifraude (API). Mais informações sobre a API do protocolo [aqui](https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow).  

### 3. Portal de administração do Antifraud Provider
Depois de receber os dados de acesso e implementar o back-end, o provedor pode acessar a ferramenta de aprovação por meio do Admin da VTEX. Para fazer isso, você deve intalar a App do Antifraud Provider no menu Apps:

![print5](//images.ctfassets.net/alneenqid6w5/50yLGa6LOU0cuIMUOeSOKq/c236baf425467b8e14aabff5d8655c05/print5.png)

Clique na App instalada ou acesse `https://{{AccountName}}.myvtex.com/admin/antifraud-provider`, substituindo `{{AccountName}}` pelo nome da sua conta na plataforma. Nesse ambiente, é possível registrar os dados de configuração do back-end do provedor e fazer testes de integração.

![print6](//images.ctfassets.net/alneenqid6w5/2ziFhnDDHWMKE6QSIOIW4W/a0d3301c92157971275546ca2745f7b1/print6.png)

### 4. Configurações iniciais
![print1](//images.ctfassets.net/alneenqid6w5/2RbsDjzeIgas064w8AKqS2/c0dc76877d74758ed5976bc729d26774/print1.png)

Ao acessar  o ambiente pelo link descrito no item anterior, você verá um formulário. Preencha os campos de acordo com as indicações abaixo:

- __Connector Name__: preencha com o nome que você deseja dar ao seu conector dentro da VTEX. Esse campo pode ser editado sempre que necessário.

- __Service URL__: defina a URL do seu serviço de provedor. Essa URL será o endereço base do protocolo e deve seguir o formato determinado por ele. Por exemplo, se a URL do serviço for *http: //10.10.10.10*, a URL completa para o endpoint */transactions* será *http://10.10.10.10/transactions*.

- __Application Key__: insira o valor de "X-PROVIDER-API-AppKey" do header do request do seu provedor, para fins de teste.

- __Application Token__: insira o valor de "X-PROVIDER-API-AppToken" do header do request do seu provedor, para fins de teste.

<div class="alert alert warning">
É importante lembrar que toda comunicação HTTPS deve ser sobre TLS 1.2 exclusivamente.
</div>

<div class="alert alert warning">
Seu provedor deve esperar dois headers: <strong>X-PROVIDER-API-AppKey</strong> e <strong>X-PROVIDER-API-AppToken</strong>. Essa combinação deve identificar um merchant. Todas as configurações que precisam ser feitas pelo merchant devem persistir em seu provedor. A única configuração que a VTEX guarda em relação aos merchants é a combinação de credenciais X-PROVIDER-API-AppKey e X-PROVIDER-API-AppToken.
</div>

Depois de preencher os campos corretamente, o sistema vai verificar as transações aprovadas através de uma chamada para o endpoint __*/transactions*__ do seu provedor. Veja a referência à API [aqui](https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow). 

Os testes que deverão ser feitos na sua integração antes de mandá-la para a avaliação da VTEX são exibidos no módulo seguinte. Você pode selecionar quais testes deseja rodar, mas para que sua integração passe pela análise da nossa equipe, __todos eles precisam ser realizados__. Portanto, recomendamos que todos eles permaneçam selecionados.

![print2](//images.ctfassets.net/alneenqid6w5/5EVuBF31ramsiYuKa2wkwO/91a84f94f4030507b9635b150067965f/print2.png)

### 5. Testes
Ao clicar no botão __Execute tests__, o Antifraud Provider vai aplicar os testes na sua integração para os diferentes cenários possíveis. É importante lembrar que __todos eles são obrigatórios__ e, para executá-los, seu serviço precisa estar em HTTPS. Os testes são:

- __Authorize__:  esse teste é feito em duas etapas. Primeiro, precisamos do status _received_ como resposta ao request de _Send Antifraud Data_ para `{{ServiceURL}}/transactions`. Depois, enviamos um request de _Get Antifraud Status_ (com o Transaction ID gerado na etapa anterior) para `{{ServiceURL}}/transactions/transactionId`, esperando como resposta o status _approved_.

- __Denied__: a exemplo do anterior, esse teste também é feito em duas etapas. Primeiro, precisamos do status _received_ como resposta ao request de _Send Antifraud Data_ para `{{ServiceURL}}/transactions`. Depois, enviamos um request de _Get Antifraud Status_ (com o Transaction ID gerado na etapa anterior) para `{{ServiceURL}}/transactions/transactionId`, esperando como resposta o status _denied_.

- __AsyncApproved__: esse teste é dividido em três etapas. Primeiro, precisamos do status _received_ como resposta ao request de _Send Antifraud Data_ para `{{ServiceURL}}/transactions`. Então, enviamos um request de _Get Antifraud Status_ (com o Transaction ID gerado na etapa anterior) para `{{ServiceURL}}/transactions/transactionId`, esperando como resposta o status _undefined_. Por fim, depois de 10 segundos, enviamos mais um request de _Get Antifraud Status_ (com o mesmo Transaction ID gerado na primeira etapa) para `{{ServiceURL}}/transactions/transactionId`, mas dessa vez esperando na resposta o status _approved_. 

- __AsyncDenied__: a exemplo do anterior, esse teste também é dividido em três etapas. Primeiro, precisamos do status _received_ como resposta ao request de _Send Antifraud Data_ para `{{ServiceURL}}/transactions`. Então, enviamos um request de _Get Antifraud Status_ (com o Transaction ID gerado na etapa anterior) para `{{ServiceURL}}/transactions/transactionId`, esperando como resposta o status _undefined_. Por fim, depois de 10 segundos, enviamos mais um request de _Get Antifraud Status_ (com o mesmo Transaction ID gerado na primeira etapa) para `{{ServiceURL}}/transactions/transactionId`, mas dessa vez esperando na resposta o status _denied_.

- __HookApproved__: esse teste é dividido em quatro etapas. Primeiro, precisamos do status _received_ como resposta ao request de _Send Antifraud Data_ para `{{ServiceURL}}/transactions`. Depois, enviamos um request de _Get Antifraud Status_ (com o Transaction ID gerado na etapa anterior) para `{{ServiceURL}}/transactions/transactionId`, esperando como resposta o status _undefined_. Então, esperamos por 10 segundos que o provedor do antifraude faça um POST na URL enviada no campo _hook_ da primeira etapa (o conteúdo do POST deve conter a resposta obtida nessa mesma etapa). Por fim, enviamos mais um request de _Get Antifraud Status_ (com o mesmo Transaction ID gerado na primeira etapa) para `{{ServiceURL}}/transactions/transactionId`, esperando na resposta o status _approved_.

- __HookDenied__: a exemplo do anterior, esse teste também é dividido em quatro etapas. Primeiro, precisamos do status _received_ como resposta ao request de _Send Antifraud Data_ para `{{ServiceURL}}/transactions`. Depois, enviamos um request de _Get Antifraud Status_ (com o Transaction ID gerado na etapa anterior) para `{{ServiceURL}}/transactions/transactionId`, esperando como resposta o status _undefined_. Então, esperamos por 10 segundos que o provedor do antifraude faça um POST na URL enviada no campo _hook_ da primeira etapa (o conteúdo do POST deve conter a resposta obtida nessa mesma etapa). Por fim, enviamos mais um request de _Get Antifraud Status_ (com o mesmo Transaction ID gerado na primeira etapa) para `{{ServiceURL}}/transactions/transactionId`, esperando na resposta o status _denied_.

<div class="alert alert info">
Para cada teste do Antifraud Provider Protocol, enviamos um final de ID específico para retornar a resposta esperada. São eles:<br>
<strong>Authorize:</strong> ID com final 1<br>
<strong>Denied:</strong> ID com final 2<br>
<strong>AsyncApproved:</strong> ID com final 3<br>
<strong>AsyncDenied:</strong> ID com final 4<br>
<strong>HookApproved:</strong> ID com final 5<br>
<strong>HookDenied:</strong> ID com final 6<br>
</div>

### 6. Resultados
Depois de executar os testes, o sistema retorna os resultados, tanto positivos quanto negativos. O sistema também traz a informação dos resultados esperados para cada teste. Assim, você tem mais visibilidade do que deve ser ajustado em caso de erro.

![print3](//images.ctfassets.net/alneenqid6w5/4k4uoEtGb6CeoAAWasM4Ya/c718a92d5196f553c5531511a7e14b92/print3.png)

Para visualizar de forma detalhada cada ação realizada pela integração (e, assim, identificar possíveis erros), basta clicar no link __Show logs__. Uma lista com as informações completas dos eventos que aconteceram durante o teste vai ser exibida abaixo dos resultados.

![print4](//images.ctfassets.net/alneenqid6w5/FeHanjGPxQqG8eoUw2MG0/a804453e7cc01ef7ef8d1b35e8960b94/print4.png)

Quando sua integração tiver passado em todos os testes com sucesso, basta abrir um ticket no [Help da VTEX](https://help.vtex.com/pt/support "VTEX Help") informando a conclusão. Porém, antes de abrir o ticket, certifique-se que você possui as seguintes informações:

- __Connector Name__: uma descrição do provedor. Use o máximo de 16 caracteres alfanuméricos. Este nome não pode ser modificado após publicado.
- __Partner contact__: endereço de email do parceiro para caso seja necessário comunicar alterações e novas funcionalidades do nosso protocolo.
- __Production Service Provider Endpoint__: o caminho base a ser utilizado para chamadas de API para o provedor, por exemplo, _https://vtex.pagadito.com_. Ele deve responder a pelo menos uma das seguintes rotas: `{{serviceUrl}}/manifest` ou `{{serviceUrl}}/payment-methods`. Este endpoint deve estar disponível publicamente. 
- __Sandbox Service Provider Endpoint__: o caminho base a ser utilizado no modo de teste para chamadas de API para o provedor. Por exemplo: _https://sandboxserviceproviderendpoint.com_. 
- __Owner account__: o nome da conta VTEX a ser utilizada em solicitações de retorno de chamada. Esta conta deve estar disponível em _{account}.myvtex.com_. 
- __Allowed Accounts__: informe quais contas VTEX deste provedor estarão disponíveis (todas as contas ou contas específicas).
- __New Payment methods__: informe se este conector suporta uma forma de pagamento que ainda não está disponível no VTEX Admin. 
- __New Payment method purchase flow__: se uma “Nova forma de pagamento” for suportada, informe se ela funciona com Redirect ou Payment App. Para maiores informações, accesse [Purchase Flows](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows).

O SLA necessário para que a equipe de pagamento efetue a homologação é de dia 30 dias.

## Credenciais VTEX
Ao chamar a `CallbackURL`, você deve especificar os headers de autenticação, que na VTEX são o _X-VTEX-API-AppKey_ e o _X-VTEX-API-AppToken_. Você pode encontrar essas credenciais  no módulo License Manager da VTEX. Essas credenciais são usadas pelo Antifraud Provider únicamente. 

Use a URL `https://{{AccountName}}.myvtex.com/admin/license-manager/#/home`, substituindo o `{{AccountName}}` pelo seu account name. Então, siga as instruções [deste tutorial](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) para aprender a criar appKeys e appTokens na nossa plataforma.

## Configuração nas lojas VTEX
Depois que a integração com seu antifraude estiver aprovada, um conector será disponibilizado para que os lojistas VTEX o configurem em seus respectivos websites. Para fazer isso, além do contrato com sua empresa, o lojista vai precisar ter em mãos duas chaves: "X-PROVIDER-API-AppKey" e "X-PROVIDER-API-AppToken". 

Um exemplo de como vai ficar a tela de configuração do antifraude para o lojista VTEX:
![print8](//images.ctfassets.net/alneenqid6w5/2v00lYz2UsW4YsaSycESio/1dc399bea5e2a75a04d1867646c4e223/print8.png)

Essas chaves devem ser disponibilizadas por você e vão servir para identificar a loja que contratou e está usando seu serviço de antifraude.

## Campo de documento do titular do cartão
Durante o processo de análise das transações de pagamento, alguns provedores de antifraude podem optar por não utilizar informações adicionais como: a identificação pessoal do titular do cartão. Nestes casos, o lojista tem a autonomia para decidir se irá solicitar ou não esta informação do seu cliente durante o procedimento de checkout.

<div class="alert alert-warning">
  A opção de configuração <b>Campo de documento do titular do cartão</b> somente será disponibilizada ao lojista, caso o provedor de antifraude declare no seu <a href="https://developers.vtex.com/vtex-rest-api/reference/manifest">manifesto</a> o campo do documento do titular do cartão (<code>cardholderDocument</code>) como <code>optional</code>. Saiba mais em <a href="https://developers.vtex.com/vtex-rest-api/docs/cardholder-document-configuration">Cardholder Document Configuration</a>.
  </div>

Para configurar a exibição do campo de documento do titular do cartão, siga os passos abaixo:

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Configurações__.
4. Na aba __Afiliações de Gateways__, clique no botão __`+`__.
5. Selecione o provedor de antifraude que deseja utilizar.
6. Na tela de configuração do antifraude, preencha as informações solicitadas.
7. Em __Campo de documento do titular do cartão__, selecione uma das opções disponíveis:

    - __Mostrar como campo obrigatório__: o campo será exibido no checkout com a informação “Obrigatório” e o cliente deve preencher as informações do titular do cartão para concluir o pedido.
    - __Mostrar como campo opcional__: o campo será exibido no checkout com a informação “Opcional” e o cliente decidirá se irá preencher ou não o campo. O não-preenchimento do campo não interfere na conclusão do pedido.
    - __Ocultar campo__: o campo não será exibido no checkout.

<ui>
  8. Clique em <b>Salvar.</b>
  </ui>

Depois de seguir os passos indicados, as configurações acima efetuadas podem demorar até 10 minutos para aparecer no checkout da sua loja.
