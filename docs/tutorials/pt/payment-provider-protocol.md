---
title: Payment Provider Protocol
id: RdsT2spdq80MMwwOeEq0m
status: PUBLISHED
createdAt: 2018-01-02T15:40:00.920Z
updatedAt: 2023-05-31T14:44:41.300Z
publishedAt: 2023-05-31T14:44:41.300Z
firstPublishedAt: 2018-01-02T17:53:48.934Z
contentType: tutorial
productTeam: Financial
author: 4PrB9ACaQ8S0oO4wOmOuUu
slug: payment-provider-protocol
legacySlug: payment-provider-protocol
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

## O que é o Payment Provider Protocol?
O Payment Provider Protocol é o protocolo de integração entre a VTEX e outras empresas que processam pagamentos.

Por meio dele, a VTEX oferece um contrato público disponível para todos os provedores que desejam se integrar à nossa plataforma. Assim, os provedores obtêm maior autonomia em relação à integração.

O protocolo conta com os seguintes recursos:

- Processo de homologação on-line.
- Suporte de pré-autorização (captura de 2 passos).
- Mecanismo de tentativa de autorização de pagamento.
- Suporte a fluxo de redirecionamento de pagamento (3P).
- Suporte ao protocolo OAuth para autenticação.

Mais informações sobre o fluxo de pagamento do protocolo podem ser encontradas na seção [Fluxo do protocolo de pagamento](/pt/tutorial/payment-provider-protocol#fluxo-do-protocolo-de-pagamento).
Você pode encontrar referências à API do protocolo [aqui](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

## Conceitos
__Provider:__ sistema de pagamento, gateway ou provedor que processa pagamentos.

__Payment Provider Protocol:__ protocolo de integração desenvolvido pela VTEX.

__Conector:__ nome do provedor parceiro de integração com a VTEX.

__Oauth:__ protocolo de autorização para APIs web projetado para permitir que aplicativos do cliente acessem um recurso protegido em nome de um usuário.

__Adquirente:__ empresa especializada em processar pagamentos. É responsável por repassar os valores cobrados do cliente pelo banco emissor para a conta da sua loja.

## Pré-requisitos para implementação
### Assinatura de um contrato de parceria comercial para Serviços Financeiros

Para implementação, publicação e atualização de um conector de pagamentos na VTEX é necessário a assinatura de um contrato de parceria __específico para serviços financeiros__ que cubram as especificidades do tema e as regulações dentro da plataforma. Se você ainda não tem um contrato de parceria, mas tem interesse em se tornar um provedor de pagamento, entre em contato com o nosso time pelo [site](https://vtex.com/br-pt/partner/).

### Ter acesso a um ambiente VTEX

Para publicação de um conector é necessário ter um ambiente VTEX. Isso só é possível com a assinatura de um contrato de parcerias para serviços financeiros. O ambiente VTEX é necessário para que possa publicar, homologar, atualizar e ter acesso ao nosso suporte para o desenvolvimento e a manutenção do conector.

Se o parceiro for SI (Service Implementer) que desenvolva integrações para clientes ou outros provedores de pagamento, a conta VTEX utilizada deve ser a do principal fornecedor do meio de pagamento e não a da agência que foi contratada.

### Requisitos de métodos de pagamento
#### Provedores de pagamentos com cartões de crédito, débito ou cobranded (soluções transparentes)

Para se tornar um provedor VTEX integrado, é necessário utilizar uma das seguintes soluções:

- A infraestrutura onde o conector será construído precisa ter o certificado PCI-DSS assinado por um QSA (Qualified Security Assessor). Maiores informações no [Conselho de Normas de Segurança do PCI](https://www.pcisecuritystandards.org/).
- Caso não possua o certificado, implementar o provedor utilizando o [Secure Proxy](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-secure-proxy).

Se o provedor for certificado ou já iniciou o processo de certificação, é possível entrar em contato com a equipe de negócios da VTEX para começar a integração.

O provedor deve encaminhar à VTEX, o [AOC](https://www.pcisecuritystandards.org/document_library) (Attestation of Compliance for Onsite Assessments – Service Provider Version) totalmente preenchido, observando os seguintes pontos:

- __Nome da empresa__: o campo “URL” (Parte 1a.) deve ser o mesmo da empresa que está solicitando o procedimento de integração. Caso seja preenchido com outro nome (exemplo: empresa adquirida por outra), será necessário encaminhar a documentação extra que comprove a relação entre as empresas, e que a URL de serviço do provedor foi avaliada pelo PCI DSS.
- __Assinatura__: Documento assinado pelo representante da empresa e pelo QSA.
- __Data de expiração__: a validade do AOC é de 1 ano após a data de assinatura.  Um AOC emitido a mais de 11 meses não deve ser encaminhado à VTEX, ou seja, com tempo inferior a 30 dias para a data de expiração.

<div class="alert alert-danger">
Os documentos SAQ (Self-Assessment Questionnaire) e AOC (Attestation of Compliance for Onsite Assessments – Merchants Version) não são aceitos no processo de integração da VTEX.
</div>

#### Provedores de pagamentos com boletos, promissórias ou cartões de loja com bandeira própria (Private Label ou cartões em geral, mas que envolvam soluções com redirect)

Para estes tipos de provedores, a VTEX não solicita a comprovação de certificação PCI DSS. Basta entrar em contato com a equipe de negócios da VTEX para começar a sua integração.

## Primeiros passos
Em seguida, vamos apresentar passo a passo as informações referentes à integração de pagamentos com a VTEX.

### 1. Implementando o protocolo
Antes de configurar o ambiente VTEX, o provedor deve implementar o serviço back-end necessário para receber e processar os pagamentos (API). Mais informações sobre o fluxo de pagamento do protocolo podem ser encontradas na seção [Fluxo do protocolo de pagamento](/pt/tutorial/payment-provider-protocol#fluxo-do-protocolo-de-pagamento). Você pode encontrar referências à API do protocolo [aqui](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).  

### 2. Casos de uso específicos
Há casos em que conectores podem ser construídos para atender alguma solução específica. Abaixo se encontram referências na nossa documentação para instruir sobre esses casos:

- [Payment Provider Framework (PPF)](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-provider-framework): Solução para implementação de conectores através do VTEX IO a partir de um boilerplate. O boilerplate já vem com grande parte do trabalho feito, incluindo os endpoints do protocolo. A utilização do VTEX IO também acelera o processo de desenvolvimento e testes na loja.
- [Payment Provider Protocol aplicado a pagamentos com POS](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-ppp-applied-to-pos): Aplicação do PPP para pagamentos em lojas físicas utilizando um terminal de pagamento (POS). Pode ser utilizado com cartões de crédito e débito. O fluxo do pagamento se inicia com uma compra feita no [VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) e então será feita a comunicação com o POS, onde o cliente irá inserir o cartão.

### 3. Homologação do Payment Provider
Depois de receber os dados de acesso e implementar o back-end, o provedor deve instalar a app Payment Provider Test Suite para acessar a ferramenta de testes. A instalação é feita na [VTEX App Store](https://apps.vtex.com/vtex-payment-provider-test-suite/p "VTEX App Store"). 

![print1](//images.ctfassets.net/alneenqid6w5/2sZn44SfDSGcUkgouQ2iyu/d9d72ca9a6fa585f959fa932412930d7/print1.png)

<div class="alert alert-warning">
Toda comunicação com servidores, seja durante o processo de homologação ou em produção, deve ocorrer via HTTPS, que por padrão utiliza a porta 443. É importante lembrar que toda comunicação HTTPS deve ser exclusivamente sobre <strong>TLS 1.2</strong>.
</div> 

Após a instalação, basta conferir o módulo Outros no menu lateral esquerdo do Admin. Em seguida, selecione a opção Payment Provider para configurá-la corretamente.

Desse modo, você verá dois formulários: “Service Information” e “Tests”. 

Preencha os campos de cada um de acordo com as indicações abaixo:

Ao acessar o ambiente pelo link descrito no item anterior, você verá um formulário. Preencha os campos de acordo com as indicações abaixo:

#### Service Information

- __Service URL__: defina a URL do seu serviço de provedor. Essa URL será o endereço base do protocolo e deve seguir o formato determinado por ele. Por exemplo, se a URL do serviço for https://10.10.10.10, a URL completa para o endpoint /payments será https://10.10.10.10/payments.
- __Connector Name__: preencha com o nome que você deseja dar ao seu conector dentro da VTEX. Ressaltamos o que o nome só pode conter letras minúsculas, numerais e hífen.
- __X-VTEX-API-AppKey__: insira o valor de "PROVIDER-API-AppKey" do header do request do seu provedor, para fins de teste.
- __X-VTEX-API-AppToken__: insira o valor de "PROVIDER-API-AppToken" do header do request do seu provedor, para fins de teste.

<div class="alert alert-warning">
Seu provedor deve esperar os headers: <strong>X-VTEX-API-AppKey</strong> e <strong>X-VTEX-API-AppToken</strong>. Essa combinação são as credenciais para identificar um lojista. O Gateway armazena as credenciais dos lojistas e os outros parâmetros utilizados na configuração da afiliação, os quais serão enviados para o provedor nas transações.
</div>

![Payment Provider Test Suite 0](//images.ctfassets.net/alneenqid6w5/3V1eMOFEQ8Mg4ygC46G4AY/15d41dae35aaa91f3dd9b55e1bdcee1f/Payment_Provider_Test_Suite_0.jpg)

#### Tests

Depois de revisar todos os campos, clique no botão __CHECK URL__. O sistema vai verificar os métodos de pagamento através de uma chamada para o endpoint __/manifest__ do seu provedor. Veja a referência à API [aqui](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#get-/manifest). 

Após a chamada, os endpoints das operações disponíveis no seu provedor serão identificados e os testes respectivos a cada operação serão habilitados automaticamente.

Você pode selecionar quais testes deseja rodar, mas para que sua integração passe pela análise da nossa equipe, __todos os testes habilitados automaticamente precisam ser realizados__. Portanto, recomendamos que todos eles permaneçam selecionados.

![Payment Provider Test Suite 1](//images.ctfassets.net/alneenqid6w5/5LROAprSeFd1O64M2WCisC/af4e2408feb2d1e5dfb9b9bac7067f6d/Payment_Provider_Test_Suite_1.jpg)

### 4. Testes
Ao clicar no botão __RUN TESTS__, o Payment Provider vai aplicar os testes na sua integração para os diferentes cenários possíveis. É importante lembrar que, para executá-los, seu serviço precisa estar em HTTPS.  Os testes são:

- __Authorize__: esse teste é dividido em três etapas. Na primeira, enviamos um request de _Create Payments_ para `{{ServiceURL}}/payments`, esperando como resposta o status _approved_. Na segunda, um request de _Settle Payment_ é enviado para `/payments/{PAYMENT_ID}/settlements` e esperamos uma resposta com o _settleId_ preenchido. Por fim, enviamos um request de _Refund Payment_ para `/payments/{PAYMENT_ID}/refunds`, esperando uma resposta com o _refundId_ preenchido.

- __Denied__: nesse teste, enviamos um request de _Create Payments_ para `{{ServiceURL}}/payments`, esperando como resposta o status _denied_.

- __Cancel__: para esse teste, precisamos primeiro do status _approved_ como resposta ao request de _Create Payments_ para `{{ServiceURL}}/payments`. Depois, enviamos um request de _Cancel Payment_ para `/payments/{PAYMENT_ID}/cancellations` e esperamos uma resposta com o status _cancelled_.

- __AsyncApproved__: esse teste é dividido em duas etapas. Na primeira, enviamos um request de _Create Payments_ para `{{ServiceURL}}/payments`, esperando como resposta o status _undefined_. Então, esperamos receber em até 15 segundos a mesma resposta, só que com status _approved_ em um POST na URL enviada no campo _callbackUrl_. Em seguida, um request de _Capture Payment_ é enviado para `/payments/{PAYMENT_ID}/settlements` e esperamos uma resposta com o _settleId_ preenchido. Por fim, enviamos um request de _Refund Payment_ para `/payments/{PAYMENT_ID}/refunds`, esperando uma resposta com o _refundId_ preenchido. Depois que a integração está em produção, essa chamada feita por callbackUrl é autenticada com as chaves do ambiente do parceiro: _vtex-app-key_ e _vtex-app-token_.

- __AsyncDenied__: a exemplo do anterior, esse teste também é dividido em duas etapas. Na primeira, enviamos um request de _Create Payments_ para `{{ServiceURL}}/payments`, esperando como resposta o status _undefined_. Então, esperamos receber em até 15 segundos a mesma resposta, só que com status _denied_ em um POST na URL enviada no campo _callbackUrl_. Depois que a integração está em produção, essa última chamada feita por callbackUrl é autenticada com as chaves do ambiente do parceiro: _vtex-app-key_ e _vtex-app-token_. 

- __BankInvoice__: nesse teste, enviamos um request de _Create Payments_ para `{{ServiceURL}}/payments`, esperando que a resposta venha com o status _undefined_ e o campo `bankIssueInvoiceUrl` preenchido com a URL do boleto. Depois, esperamos receber em até 15 segundos a mesma resposta, só que com status _approved_ em um POST na URL enviada no campo _callbackUrl_. Quando a integração estiver em produção, essa última chamada feita por callbackUrl será autenticada com as chaves do ambiente do parceiro: _vtex-app-key_ e _vtex-app-token_.

- __Redirect__: esse teste é dividido em duas etapas. Na primeira, enviamos um request de _Create Payments_ para `{{ServiceURL}}/payments`, esperando que a resposta venha com o status _undefined_ e o campo `redirectUrl` preenchido com a URL que vai ser usada para redirecionar o cliente. Então, esperamos receber em até 15 segundos a mesma resposta, só que com status _approved_ em um POST na URL enviada no campo _callbackUrl_. Quando a integração estiver em produção, essa última chamada feita por callbackUrl será autenticada com as chaves do ambiente do parceiro: _vtex-app-key_ e _vtex-app-token_. Para o conector que utilizará o Redirect, não existe a necessidade de aprovação em todos os testes do Test Suit, somente no do Redirect.

Todos os requests são enviados desde o IP 54.236.214.202

<div class="alert alert-warning">
No caso dos cartões de crédito, os testes obrigatórios são: <strong>Authorize</strong>, <strong>Denied</strong>, <strong>Cancel</strong>, <strong>AsyncApproved</strong> e <strong>AsyncDenied</strong>.
</div>

<div class="alert alert-info">
Para cada teste com cartões de crédito, enviamos um número específico para retornar a resposta esperada. São eles:<br>
<strong>Resposta com status approved:</strong> cartão numero 4444333322221111<br>
<strong>Resposta com status denied:</strong> cartão numero 4444333322221112<br>
<strong>Resposta com status undefined e retorno no callbackUrl com status approved:</strong> cartão numero 4222222222222224<br>
<strong>Resposta com status undefined e retorno no callbackUrl com status denied:</strong> cartão numero 4222222222222225<br>
</div>

### 5. Resultados
Depois de executar os testes, o sistema retorna os resultados, tanto positivos quanto negativos. O sistema também traz a informação dos resultados esperados para cada teste. Assim, você tem mais visibilidade do que deve ser ajustado em caso de erro.

![Payment Provider Test Suite 2](//images.ctfassets.net/alneenqid6w5/6o9b9Wz3tSKiU6mwEssEgs/38e5f5d1391d10ca831eba5682c5544b/Payment_Provider_Test_Suite_2.jpg)

Para visualizar de forma detalhada cada ação realizada pela integração (e, assim, identificar possíveis erros), basta clicar no botão __TRY LOADING AGAIN?__. Uma lista com as informações completas dos eventos que aconteceram durante o teste vai ser exibida abaixo dos resultados.

![Payment Provider Test Suite Logs](//images.ctfassets.net/alneenqid6w5/3FCFc1FA7L6ILyXB8NSmA3/12a0a237d1c8725b8eeb9bb61eb48fbc/Payment_Provider_Test_Suite_Logs.jpg)

![Payment Provider Test Suite 3](//images.ctfassets.net/alneenqid6w5/7svc9sEJaMiwsYK0ykU0SS/590453ef17cda1dab3b1bb4342f1d9d1/Payment_Provider_Test_Suite_3.jpg)

Quando sua integração tiver passado em todos os testes com sucesso, basta abrir um ticket no [Help da VTEX](/pt/support "VTEX Help") informando a conclusão. Porém, antes de abrir o ticket, certifique-se que você possui as seguintes informações:

- __Connector Name__: uma descrição do provedor. Use o máximo de 16 caracteres alfanuméricos. Este nome não pode ser modificado após publicado.
- __Partner contact__: endereço de email do parceiro para caso seja necessário comunicar alterações e novas funcionalidades do nosso protocolo.
- __Production Service Provider Endpoint__: o caminho base a ser utilizado para chamadas de API para o provedor, por exemplo, _https://vtex.pagseguro.com_. Ele deve responder à rota `{{serviceUrl}}/manifest`. Este endpoint deve estar disponível publicamente. 
- __Sandbox Service Provider Endpoint__: o caminho base a ser utilizado no modo de teste para chamadas de API para o provedor. Por exemplo: _https://sandboxserviceproviderendpoint.com_. 
- __Owner account__: o nome da conta VTEX a ser utilizada em solicitações de retorno de chamada. Esta conta deve estar disponível em _{account}.myvtex.com_. 
- __Allowed Accounts__: informe quais contas VTEX deste provedor estarão disponíveis (todas as contas ou contas específicas).
- __New Payment methods__: informe se este conector suporta uma forma de pagamento que ainda não está disponível no VTEX Admin. 
- __New Payment method purchase flow__: se uma “Nova forma de pagamento” for suportada, informe se ela funciona com Redirect ou Payment App. Para maiores informações, accesse [Purchase Flows](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows).

<div class="alert alert-warning">
O SLA necessário para que a equipe de pagamento efetue a homologação é de dia 30 dias. Este prazo será iniciado somente após o envio do documento <b>Master Partner Agreement for Financial Services (MPA)</b>. Para solicitações de homologação sem a utilização do MPA, o prazo do SLA poderá ser estendido devido a necessidade de análise adicional da equipe de pagamentos.
</div>

## Fluxo do protocolo de pagamento
Aqui vamos explicar o fluxo de pagamento integrado em detalhes. A imagem abaixo ilustra todo o fluxo, mostrando o fluxo de um pagamento e as responsabilidades do seu fornecedor.

Tudo começa com a solicitação de um novo pagamento, após a criação de um novo pedido. A VTEX cria uma nova representação do pagamento e avança para o processamento dos pagamentos.

![fluxo-atualizado-ppp](//images.ctfassets.net/alneenqid6w5/7lQZhSFEff1iaN7t2UVVNE/2890bc7073210c268d7d429d0162c9b7/FLUXO1.png)

### Autorização de pagamento
Nesse ponto a VTEX chama o endpoint __*/payments*__ e envia um payload com os dados de pagamento para o seu provedor. O provedor deve processar esses dados e enviar de volta a resposta, que deve conter um dos valores de status: __approved__, __denied__ ou __undefined__.

O status __undefined__ representa o estado em que o provedor não pôde terminar de processar o pagamento. Isso pode ser devido a uma longa execução de processamento ou a algum processamento assíncrono.

Seja qual for o caso, uma vez que o processamento termine e o provedor tenha um status final (__approved__ ou __denied__), ele deve chamar a nossa `callbackUrl`. Nós enviamos a `callbackUrl` no body do request __/payments__. Existem dois fluxos possíveis com o uso da `callbackUrl` dependendo se a sua integração é hospedada na infraestrutura do parceiro ou no VTEX IO:

- __Sem VTEX IO:__ A `callbackUrl` contém um endpoint de callback para que o provedor notifique o Gateway com o status atualizado.
- __Com VTEX IO:__ A `callbackUrl` contém um endpoint de retentativa (__retry__). Quando o provedor usa esse endpoint para chamar o Gateway, ocorre uma nova requisição de Create Payment (__/payments__) do Gateway para o provedor, e então o Gateway recebe o status de pagamento atualizado na resposta desta requisição.

O fluxo completo com status undefined e uso de notificação pode ser visto abaixo:

![Payment authorization callback notification flow](//images.ctfassets.net/alneenqid6w5/2jMjUV7EZuzqN5L1OCQgIJ/90500ae3bc824ff831193cf7cdf59c64/image1.png)

1. A autorização do pagamento é iniciada quando o Gateway chama o endpoint Create Payment (__/payment__) para o Provider. No body do request, é enviado no campo `callbackUrl` a URL para fazer a notificação.
2. O pagamento ocorre de forma assíncrona (não gera o status definitivo no momento em que a transação é iniciada). Então o Gateway recebe a resposta com status __undefined__ e fica esperando a conclusão do processamento do pagamento e, por fim, atualizar com o status definitivo (__approved__ ou __denied__).
3. Quando o pagamento é processado, o Acquirer aciona um webhook ao Provider com o novo status.
4. O Provider, ao receber o chamado pelo webhook, chama o endpoint de notificação e entrega o status atualizado para o Gateway.

O fluxo completo com status __undefined__ e uso do __retry__ pode ser visto abaixo:

![Payment authorization callback retry flow](//images.ctfassets.net/alneenqid6w5/5kGkX4QGLUPNfclwMdibax/66f6fe3be218a9fe6e2584e75bb18640/image2.png)

1. A autorização do pagamento é iniciada quando o Gateway chama o endpoint Create Payment (__/payment__) para o Provider. No body do request, é enviado no campo `callbackUrl` a URL do endpoint __retry__.
2. O pagamento ocorre de forma assíncrona (não gera o status definitivo no momento em que a transação é iniciada). Então o Gateway recebe a resposta com status __undefined__ e fica esperando a conclusão do processamento do pagamento e, por fim, atualizar com o status definitivo (__approved__ ou __denied__).
3. Quando o pagamento é processado, o Acquirer aciona um webhook ao Provider com o novo status.
4. O Provider, ao receber o chamado pelo webhook, chama o endpoint __retry__ para o Gateway, dizendo para ele chamar novamente o endpoint __/payment__. O __retry__ não exige nenhum payload.
5. Após receber o retry, o Gateway chama novamente o endpoint /payment. Por fim, o Gateway recebe a resposta do Provider com o novo status (__approved__ ou __denied__).

## Callback URL

O campo `callbackUrl` contém uma URL que o provedor de pagamento usa para fazer um callback e informar nosso gateway sobre o status do pagamento final: `aprovado` ou `negado`.  

Esta URL tem alguns parâmetros de consulta, incluindo o `X-VTEX-signature`. Este parâmetro é obrigatório e contém um token de assinatura para identificar que o pedido foi gerado pela VTEX como uma medida de segurança. O token de assinatura tem no máximo 32 caracteres. Você pode verificar um exemplo de callback URL com o token de assinatura abaixo: 

```
https://gatewayqa.vtexpayments.com.br/api/pvt/payment-provider/transactions/8FB0F111111122222333344449984ACB/payments/A2A9A25B11111111222222333327883C/callback?accountName=teampaymentsintegrations&X-VTEX-signature=R123456789aBcDeFGHij1234567890tk
```

Na [página de Transações do Admin](https://help.vtex.com/pt/tutorial/como-visualizar-detalhes-do-pedido--tutorials_452), o token de assinatura aparece mascarado por questões de segurança, como neste exemplo: `X-VTEX-signature=Rj******tk`. 

Ao fazer a solicitação de callback, recomendamos que os provedores de pagamento utilizem a callback URL exatamente como recebida, o que garante que todos os parâmetros estejam incluídos.

Ao chamar a CallbackURL, seu provedor deve enviar no request os headers *X-VTEX-API-AppKey* e *X-VTEX-API-AppToken*. Mais informações sobre isso na [seção de credenciais VTEX](/pt/tutorial/payment-provider-protocol#credenciais-vtex).

<div class="alert alert-danger">
Além da CallbackURL, se o status for <strong>undefined</strong>, a VTEX tentará novamente chamar o endpoint da autorização de pagamento. Se o status retornado nessas chamadas permanecer como <strong>undefined</strong>, as chamadas continuarão por até 7 dias. Por isso, <strong>é importante que seu provedor esteja pronto para receber a mesma autorização de pagamento várias vezes</strong>.
</div>

Uma vez que o pagamento foi processado pelo seu provedor, de forma direta ou assíncrona, movemos a transação de pagamento dentro da VTEX para o status *autorizado* ou *cancelado*, de acordo com o status da resposta do processamento.

Mais referências à API de autorização [aqui](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

### Reembolso/Cancelamento
Após a primeira chamada à autorização de pagamento, a loja pode cancelar o pedido a qualquer instante. No momento do cancelamento, podem ocorrer as seguintes situações:

1. __Transação de pagamento já foi liquidada__: o pedido de cancelamento então resultará em uma chamada de reembolso ao endpoint _/payments/{id}/refunds_ do provedor, onde _{id}_ significa o ID do pagamento na VTEX. 
2. __Transação de pagamento ainda não foi liquidada__: chamaremos o endpoint _/payments/{id}/cancellations_ do provedor, onde _{id}_ é o ID do pagamento na VTEX. Caso haja alguma dificuldade no processamento do cancelamento automático, um e-mail será encaminhado ao lojista para que ele efetue o cancelamento manualmente.

O Payment Provider Protocol também permite reembolsos parciais. Por exemplo, se após a finalização de uma compra no valor de R$ 1.000,00, for necessário reembolsar o cliente no valor de R$ 300,00, dois cenários são possíveis:

1. __Pagamento já foi liquidado__:será feito um reembolso parcial no valor de R$ 300,00 ao cliente. O valor restante (R$ 700,00) permanece a disposição do lojista.
2. __Pagamento ainda não foi liquidado__:será efetuado um cancelamento de liquidação no valor de R$ 300,00 e uma aprovação de liquidação parcial no valor de R$ 700,00 para o lojista.     

Mais informações sobre a API de cancelamento [aqui](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

### Liquidação
Se a transação de pagamento for autorizada no Gateway da VTEX, ela poderá receber solicitações de liquidação. Quando recebemos um pedido de liquidação, chamamos o endpoint __/payments/{id}/settlements__ do provedor, onde *{id}* é o ID do pagamento na VTEX.

Quando o provedor recebe um pedido de liquidação, ele deve liquidar o pagamento e responder com informações de liquidação. Se essa chamada falhar, fazemos algumas retentativas, por até 1 dia.

<div class="alert alert-danger">
Seu provedor deve estar preparado para receber a mesma chamada de liquidação várias vezes.
</div>

Se a chamada de liquidação funcionar bem, movemos a transação de pagamento para o status *Finalizado*, e o fluxo termina com sucesso.

Mais informações sobre a API de liquidação [aqui](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

## Credenciais VTEX
Ao chamar a `CallbackURL`, você deve especificar os headers de autenticação, que na VTEX são o _X-VTEX-API-AppKey_ e o _X-VTEX-API-AppToken_. Você pode encontrar essas credenciais (que são únicas para sua conta) no módulo License Manager da VTEX. 

Use a URL `https://{{AccountName}}.myvtex.com/admin/license-manager/#/home`, substituindo o `{{AccountName}}` pelo seu account name. Então, siga as instruções [deste tutorial](https://developers.vtex.com/docs/guides/authentication-overview) para aprender a criar appKeys e appTokens na nossa plataforma.
