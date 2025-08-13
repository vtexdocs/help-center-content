---
title: 'Payment Provider Protocol'
id: RdsT2spdq80MMwwOeEq0m
status: PUBLISHED
createdAt: 2018-01-02T15:40:00.920Z
updatedAt: 2025-02-19T20:31:05.883Z
publishedAt: 2025-02-19T20:31:05.883Z
firstPublishedAt: 2018-01-02T17:53:48.934Z
contentType: tutorial
productTeam: Financial
author: 4PrB9ACaQ8S0oO4wOmOuUu
slugEN: payment-provider-protocol
legacySlug: payment-provider-protocol
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

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

Para implementação, publicação e atualização de um conector de pagamentos na VTEX é necessário a assinatura de um contrato de parceria __específico para serviços financeiros__ que cubram as especificidades do tema e as regulações dentro da plataforma. Se você ainda não tem um contrato de parceria, mas tem interesse em se tornar um provedor de pagamento, entre em contato com o nosso time pelo [site](https://vtex.com/br-pt/partner).

### Ter acesso a um ambiente VTEX

Para publicação de um conector é necessário ter um ambiente VTEX. Isso só é possível com a assinatura de um contrato de parcerias para serviços financeiros. O ambiente VTEX é necessário para que possa publicar, homologar, atualizar e ter acesso ao nosso suporte para o desenvolvimento e a manutenção do conector.

Se o parceiro for SI (Service Implementer) que desenvolva integrações para clientes ou outros provedores de pagamento, a conta VTEX utilizada deve ser a do principal fornecedor do meio de pagamento e não a da agência que foi contratada.

### Requisitos de métodos de pagamento
#### Provedores de pagamentos com cartões de crédito, débito ou cobranded (soluções transparentes)

Para se tornar um provedor VTEX integrado, é necessário utilizar uma das seguintes soluções:

- A infraestrutura onde o conector será construído precisa ter o certificado PCI-DSS assinado por um QSA (Qualified Security Assessor). Maiores informações no [Conselho de Normas de Segurança do PCI](https://www.pcisecuritystandards.org/).
- Caso não possua o certificado, implementar o provedor utilizando o [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy).

Se o provedor for certificado ou já iniciou o processo de certificação, é possível entrar em contato com a equipe de negócios da VTEX para começar a integração.

O provedor deve encaminhar à VTEX, o [AOC](https://www.pcisecuritystandards.org/document_library) (Attestation of Compliance for Onsite Assessments – Service Provider Version) totalmente preenchido, observando os seguintes pontos:

- __Nome da empresa__: o campo “URL” (Parte 1a.) deve ser o mesmo da empresa que está solicitando o procedimento de integração. Caso seja preenchido com outro nome (exemplo: empresa adquirida por outra), será necessário encaminhar a documentação extra que comprove a relação entre as empresas, e que a URL de serviço do provedor foi avaliada pelo PCI DSS.
- __Assinatura__: Documento assinado pelo representante da empresa e pelo QSA.
- __Data de expiração__: a validade do AOC é de 1 ano após a data de assinatura.  Um AOC emitido a mais de 11 meses não deve ser encaminhado à VTEX, ou seja, com tempo inferior a 30 dias para a data de expiração.

> ❗ Os documentos SAQ (Self-Assessment Questionnaire) e AOC (Attestation of Compliance for Onsite Assessments – Merchants Version) não são aceitos no processo de integração da VTEX.

#### Provedores de pagamentos com boletos, promissórias ou cartões de loja com bandeira própria (Private Label ou cartões em geral, mas que envolvam soluções com redirect)

Para estes tipos de provedores, a VTEX não solicita a comprovação de certificação PCI DSS. Basta entrar em contato com a equipe de negócios da VTEX para começar a sua integração.

## Primeiros passos
Em seguida, vamos apresentar passo a passo as informações referentes à integração de pagamentos com a VTEX.

### 1. Implementando o protocolo
Antes de configurar o ambiente VTEX, o provedor deve implementar o serviço back-end necessário para receber e processar os pagamentos (API). Mais informações sobre o fluxo de pagamento do protocolo podem ser encontradas na seção [Fluxo do protocolo de pagamento](/pt/tutorial/payment-provider-protocol#fluxo-do-protocolo-de-pagamento). Você pode encontrar referências à API do protocolo [aqui](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).  

### 2. Casos de uso específicos
Há casos em que conectores podem ser construídos para atender alguma solução específica. Abaixo se encontram referências na nossa documentação para instruir sobre esses casos:

- [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework): Solução para implementação de conectores através do VTEX IO a partir de um boilerplate. O boilerplate já vem com grande parte do trabalho feito, incluindo os endpoints do protocolo. A utilização do VTEX IO também acelera o processo de desenvolvimento e testes na loja.
- [Payment Provider Protocol aplicado a pagamentos com POS](https://developers.vtex.com/docs/guides/payments-integration-ppp-applied-to-pos): Aplicação do PPP para pagamentos em lojas físicas utilizando um terminal de pagamento (POS). Pode ser utilizado com cartões de crédito e débito. O fluxo do pagamento se inicia com uma compra feita no [VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) e então será feita a comunicação com o POS, onde o cliente irá inserir o cartão.

### 3. Homologação do Payment Provider
Depois de receber os dados de acesso e implementar o back-end, o provedor deve instalar a app Payment Provider Test Suite para acessar a ferramenta de testes. A instalação é feita por meio de [VTEX App Store](https://apps.vtex.com/vtex-payment-provider-test-suite/p "VTEX App Store"). 

![ppp-vtex-store-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payments-overview/payment-provider-protocol_1.png)

> ⚠️ Para passar no processo de homologação, é necessário implementar uma lógica específica para lidar com os requisitos do teste. Nas requisições enviadas ao Test Suite, utilize o header extra `X-VTEX-API-Is-TestSuite = true` para identificá-las e mascarar qualquer cenário exigido.<br>Toda comunicação com servidores, seja durante o processo de homologação ou em produção, deve ocorrer via HTTPS, que por padrão utiliza a porta 443. É importante lembrar que toda comunicação HTTPS deve ser exclusivamente sobre TLS 1.2. 

Após a instação, clique no item Apps no painel lateral esquerdo do Admin. Em seguida, selecione o app Payment Provider Test Suite para configurá-lo corretamente.

Dependendo da versão do Admin utilizada na conta da loja, o app não estará visível na lista de apps. Para acessá-lo, utilize o endereço `https://{{accountName}}.myvtex.com/admin/test-suite/payment-provider`, substituindo `{{accountName}}` pelo Nome da Conta da sua loja.

Feito isso, você encontrará um formulário com três seções: __Service info__, __Payment method__ e __Test cases__. Preencha os campos de acordo com as instruções abaixo.

#### Service info

* **Service URL:** Defina a URL do seu serviço de provedor. Essa URL será o endereço base do protocolo e deve seguir o formato determinado por ele. Por exemplo, se a URL do serviço for `https://example.com/`, a URL completa para o endpoint /payments será `https://example.com/payments`.
* **AppKey e AppToken:** O botão Test with AppKey and AppToken permite que você escolha entre configurar os valores desses campos ou não, o que pode facilitar os testes durante a etapa de desenvolvimento. Se não habilitar essa opção, as credenciais serão enviadas nos headers como uma string vazia.

> ℹ️ O Gateway armazena as credenciais das lojas configuradas na afiliação e as envia nos headers X-VTEX-API-AppKey e X-VTEX-API-AppToken. A exceção para isso são as integrações desenvolvidas com VTEX IO. Para elas, os headers serão enviados como x-provider-api-appKey e x-provider-api-appToken. Se você está desenvolvendo com o [Payment Provider Framework (IO)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework), isso é configurado pela opção usesProviderHeadersName. Veja as configurações disponíveis [aqui](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework#available-configurable-options). 

#### Payment method

Após preeencher o campo Service URL, o Test Suite irá validar o [endpoint Manifest](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#get-/manifest) e fazer uma verificação para os métodos de pagamento declarados. Eles irão aparecer como opções nesse campo. Selecione os meios de pagamento no qual você deseja realizar os testes.

#### Test cases

Nessa seção, você deve selecionar os casos que deseja testar. Se você está testando um método de cartão de crédito, a sua integração deve passar nos casos Approved, Denied, Cancellation, Async Approved e Async Denied. Para um método de pagamento com [redirecionamento](https://developers.vtex.com/docs/guides/payments-integration-purchase-flows#redirect), apenas o Redirect flow é necessário.

![ppp-config-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payments-overview/payment-provider-protocol_2.png)

### 4. Testes

Quando você clicar no botão `Run Test`, o Test Suite irá chamar a **Service URL** fornecida e executar os casos de teste selecionados. Os testes são:

* **Approved flow:** Este teste é dividido em três estágios. No primeiro, nós enviamos uma requisição [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) para `{{ServiceURL}}/payments`, esperando pelo status approved como resposta. No segundo, uma requisição [Settle Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments/-paymentId-/settlements) é enviada para `{{ServiceURL}}/payments/{paymentId}/settlements` e esperamos uma resposta com o `settleId` preenchido. E no último, nós enviamos uma requisição [Refund Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments/-paymentId-/refunds) para `{{ServiceURL}}/payments/{paymentId}/refunds` esperando por uma resposta com `refundId` preenchido.
* **Denied flow:** Neste teste, nós enviamos uma requisição [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) para `{{ServiceURL}}/payments`, esperando pelo status denied como resposta.
* **Cancellation flow:** Para este teste, primeiro nós precisamos do status approved em resposta à requisição de [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) para `{{ServiceURL}}/payments`. Nós então enviamos uma requisição [Cancel Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments/-paymentId-/cancellations) para `{{ServiceURL}}/payments/{paymentId}/cancellations` e esperamos uma resposta com status canceled.
* **Async Approved flow:** Este teste é divido em dois passos. No primeiro, nós enviamos uma requisição [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) para `{{ServiceURL}}/payments`, esperando pelo status undefined como resposta. Após 15 segundos, nós esperamos receber outra resposta no mesmo formato através de um `POST` da URL enviada no campo callbackUrl e com o status approved. Com a integração em produção, esta última chamada feita por `callbackUrl` é autenticada com as chaves de ambiente do parceiro: `vtex-app-key` e `vtex-app-token`. Mais detalhes sobre o fluxo de callback podem ser encontrados na seção [Autorização de pagamento](#autorizacao-de-pagamento).
* **Async Denied flow:** Este teste é dividido em dois passos, assim como o anterior. No primeiro, nós enviamos uma requisição [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) para `{{ServiceURL}}/payments`, esperando pelo status undefined como resposta. Após 15 segundos, nós esperamos receber outra resposta no mesmo formato através de um `POST` da URL enviada no campo callbackUrl e com o status denied. Com a integração em produção, esta última chamada feita por `callbackUrl` é autenticada com as chaves de ambiente do parceiro: `vtex-app-key` e `vtex-app-token`. Mais detalhes sobre o fluxo de callback podem ser encontrados na seção [Autorização de pagamento](#autorizacao-de-pagamento).
* **Bank Invoice flow** Neste teste, nós enviamos uma requisição[ Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) para `{{ServiceURL}}/payments`, esperando por uma resposta com status undefined e o campo `bankIssueInvoiceUrl` preenchido com a URL do ticket. Após 15 segundos, nós esperamos receber outra resposta no mesmo formato através de um POST da URL enviada no campo callbackUrl e com o status approved. Com a integração em produção, esta última chamada feita por `callbackUrl` é autenticada com as chaves de ambiente do parceiro: `vtex-app-key` e `vtex-app-token`. Mais detalhes sobre o fluxo de callback podem ser encontrados na seção [Autorização de pagamento](#autorizacao-de-pagamento).
* **Redirect flow:** Este teste é dividido em dois passos. No primeiro, nós enviamos uma requisição [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) para {{ServiceURL}}/payments, esperando por uma resposta com status undefined e o campo redirectUrl preenchido com a URL que será utilizada para redirecionar o cliente. Após 15 segundos, nós esperamos receber outra resposta no mesmo formato através de um POST da URL enviada no campo `callbackUrl` e com o status approved. Com a integração em produção, esta última chamada feita por `callbackUrl` é autenticada com as chaves de ambiente do parceiro: `vtex-app-key` e `vtex-app-token`. Mais detalhes sobre o fluxo de callback podem ser encontrados na seção [Autorização de pagamento](#autorizacao-de-pagamento). Para o conector que irá utilizar o Redirect, não há necessidade de passar em todos os testes do Test Suite, apenas no de Redirect.

> ⚠️ No caso dos cartões de crédito, os testes obrigatórios são: Authorize, Denied, Cancel, Async Approved e Async Denied.

Para identificar como responder corretamente a cada um dos testes com cartão de crédito, utilize estes números específicos:

| Número do cartão | Status da resposta                         |
| ---------------- | ------------------------------------------ |
| 4444333322221111 | __approved__                                   |
| 4444333322221112 | __denied__                                     |
| 4222222222222224 | __undefined__, `callbackUrl` com status __approved__ |
| 4222222222222225 | __undefined__, `callbackUrl` com status __denied__   |

### 5. Resultados
Após executar os testes, o sistema irá mostrar o Test Report, onde você pode ver os resultados detalhados de cada caso de teste. Desse modo, você tem mais visibilidade sobre o que deve ser ajustado caso ocorra algum erro.

![Payment Provider Test Suite 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payments-overview/payment-provider-protocol_3.png)

Para ver as mensagens transmitidas entre o Test Suite e a implementação do seu provedor de pagamento, clique no botão Inspect Log do caso de teste desejado. Um modal irá se abrir para mostrar a lista de mensagem transmitidas e o payload de cada requisição e resposta. O botão no canto superior direito da seção de código facilita a cópia do código para a área de transferência.

![Payment Provider Test Suite Logs](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payments-overview/payment-provider-protocol_4.png)

## Fluxo do protocolo de pagamento
Aqui vamos explicar o fluxo de pagamento integrado em detalhes. A imagem abaixo ilustra todo o fluxo, mostrando o fluxo de um pagamento e as responsabilidades do seu fornecedor.

Tudo começa com a solicitação de um novo pagamento, após a criação de um novo pedido. A VTEX cria uma nova representação do pagamento e avança para o processamento dos pagamentos.

![fluxo-atualizado-ppp](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payments-overview/payment-provider-protocol_5.png)

> ℹ️ O período padrão de 7 dias para novas tentativas de pagamento assíncronas só é aplicado quando o usuário não especifica um valor no campo `delayToCancel` do endpoint [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) ou ao enviar o callbackURL.

> ⚠️ O valor máximo permitido para o campo `delayToCancel` é de 30 dias (2592000 segundos). Entretanto, em pagamentos realizados por meio do PIX, os valores devem ser configurados obrigatoriamente entre 15 e 60 minutos (900 e 3600 segundos).  

### Autorização de pagamento
Nesse ponto a VTEX chama o endpoint __*/payments*__ e envia um payload com os dados de pagamento para o seu provedor. O provedor deve processar esses dados e enviar de volta a resposta, que deve conter um dos valores de status: __approved__, __denied__ ou __undefined__.

O status __undefined__ representa o estado em que o provedor não pôde terminar de processar o pagamento. Isso pode ser devido a uma longa execução de processamento ou a algum processamento assíncrono.

Seja qual for o caso, uma vez que o processamento termine e o provedor tenha um status final (__approved__ ou __denied__), ele deve chamar a nossa `callbackUrl`. Nós enviamos a `callbackUrl` no body do request __/payments__. Existem dois fluxos possíveis com o uso da `callbackUrl` dependendo se a sua integração é hospedada na infraestrutura do parceiro ou no VTEX IO:

- __Sem VTEX IO:__ A `callbackUrl` contém um endpoint de callback para que o provedor notifique o Gateway com o status atualizado.
- __Com VTEX IO:__ A `callbackUrl` contém um endpoint de retentativa (__retry__). Quando o provedor usa esse endpoint para chamar o Gateway, ocorre uma nova requisição de Create Payment (__/payments__) do Gateway para o provedor, e então o Gateway recebe o status de pagamento atualizado na resposta desta requisição.

O fluxo completo com status undefined e uso de notificação pode ser visto abaixo:

![Payment authorization callback notification flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payments-overview/payment-provider-protocol_6.png)

1. A autorização do pagamento é iniciada quando o Gateway chama o endpoint Create Payment (__/payment__) para o Provider. No body do request, é enviado no campo `callbackUrl` a URL para fazer a notificação.
2. O pagamento ocorre de forma assíncrona (não gera o status definitivo no momento em que a transação é iniciada). Então o Gateway recebe a resposta com status __undefined__ e fica esperando a conclusão do processamento do pagamento e, por fim, atualizar com o status definitivo (__approved__ ou __denied__).
3. Quando o pagamento é processado, o Acquirer aciona um webhook ao Provider com o novo status.
4. O Provider, ao receber o chamado pelo webhook, chama o endpoint de notificação e entrega o status atualizado para o Gateway.

O fluxo completo com status __undefined__ e uso do __retry__ pode ser visto abaixo:

![Payment authorization callback retry flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payments-overview/payment-provider-protocol_7.png)

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

Veja abaixo, um exemplo de payload encaminhado junto ao callback URL:

```json
{"paymentId":"8B3BA2F4352545A8B1C5A215F356A01C","status":"approved","authorizationId":"184520","nsu":"21705348","tid":"21705348","acquirer":"pagarme","code":"0000","message":"Transação aprovada com sucesso","delayToAutoSettle":1200, "delayToAutoSettleAfterAntifraud":1200, "delayToCancel":86400,"cardBrand":"Mastercard","firstDigits":"534696","lastDigits":"6921","maxValue":16.6}
```

> ℹ️ Os valores dos parâmetros enviados no payload do callback substituem os valores originais informados na chamada do [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).

> ⚠️ Caso os parâmetros de tempo de espera (*delayToAutoSettle* e *delayToAutoSettleAfterAntifraud*) não sejam enviados com a callback URL, os valores serão automaticamente configurados para 24 horas.

Ao fazer a solicitação de callback, recomendamos que os provedores de pagamento utilizem a callback URL exatamente como recebida, o que garante que todos os parâmetros estejam incluídos.

Ao chamar a CallbackURL, seu provedor deve enviar no request os headers *X-VTEX-API-AppKey* e *X-VTEX-API-AppToken*. Mais informações sobre isso na [seção de credenciais VTEX](/pt/tutorial/payment-provider-protocol#credenciais-vtex).

> ❗ Além da CallbackURL, se o status for **undefined**, a VTEX tentará novamente chamar o endpoint da autorização de pagamento. Se o status retornado nessas chamadas permanecer como **undefined**, as chamadas continuarão por até 7 dias. Por isso, **é importante que seu provedor esteja pronto para receber a mesma autorização de pagamento várias vezes**.

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

> ❗ Seu provedor deve estar preparado para receber a mesma chamada de liquidação várias vezes.

Se a chamada de liquidação funcionar bem, movemos a transação de pagamento para o status *Finalizado*, e o fluxo termina com sucesso.

Mais informações sobre a API de liquidação [aqui](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

## Credenciais VTEX
Ao chamar a `CallbackURL`, você deve especificar os headers de autenticação, que na VTEX são o _X-VTEX-API-AppKey_ e o _X-VTEX-API-AppToken_. Você pode encontrar essas credenciais (que são únicas para sua conta) no módulo License Manager da VTEX. 

Use a URL `https://{{AccountName}}.myvtex.com/admin/license-manager/#/home`, substituindo o `{{AccountName}}` pelo seu account name. Então, siga as instruções [deste tutorial](https://developers.vtex.com/docs/guides/authentication-overview) para aprender a criar appKeys e appTokens na nossa plataforma.
