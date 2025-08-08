---
title: 'Desenvolvendo um conector de pagamento para a VTEX'
id: 4QXXdhv3HQSMbvzTbgnv0G
status: PUBLISHED
createdAt: 2025-05-28T10:29:13.599Z
updatedAt: 2025-06-17T11:08:47.238Z
publishedAt: 2025-06-17T11:08:47.238Z
firstPublishedAt: 2025-05-29T17:10:05.040Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: developing-a-payment-connector-for-vtex
legacySlug: desenvolvendo-um-conector-de-pagamento-para-a-vtex
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Este artigo oferece um guia completo para parceiros que desejam desenvolver [conectores de pagamentos](https://help.vtex.com/pt/tutorial/o-que-e-conector--3lze0Cu0bmyC6u2o2iaeEA) compatíveis com a plataforma VTEX. O foco é garantir uma integração eficiente e padronizada, permitindo que os conectores sejam usados em todas as lojas da plataforma.

Ao adotar as diretrizes apresentadas, os parceiros garantem que sua integração atenda aos mais altos padrões de qualidade, agregando valor tanto para os lojistas quanto para seus clientes, e promovem a inovação e a competitividade no comércio digital.

Este conteúdo é direcionado a:

- __Desenvolvedores e equipes técnicas de parceiros de pagamento:__ responsáveis pela implementação de soluções de integração eficientes. 
- __Gerentes de produto e times de integração:__ encarregados de garantir a coesão e a operação eficaz dos conectores dentro da plataforma.
- __Equipes de suporte técnico de provedores de pagamento, gateways e sistemas antifraude:__ oferecem suporte contínuo, assegurando a operação estável e a conformidade das soluções.

## Visão geral

Na VTEX, um conector de pagamentos é o serviço externo que implementa o [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). Este protocolo permite a comunicação entre a plataforma e os provedores de pagamento (como gateways, adquirentes e soluções antifraude), possibilitando que lojistas processem transações de forma integrada e padronizada, sem a necessidade de desenvolver integrações personalizadas.

Confira as seções que você encontrará neste guia:

- [Requisitos técnicos obrigatórios](#requisitos-tecnicos-obrigatorios)
- [Benefícios da integração PPP](#beneficios-da-integracao-ppp)
- [Fases de desenvolvimento do conector](#fases-de-desenvolvimento-do-conector)
- [Escolha da infraestrutura para o conector](#escolha-da-infraestrutura-para-o-conector)
- [Boas práticas no desenvolvimento de conectores](#boas-praticas-no-desenvolvimento-de-conectores-confiabilidade-e-valor-agregado)

## Requisitos técnicos obrigatórios

Os parceiros que desejam desenvolver um conector de pagamento na VTEX devem implementar as seguintes funcionalidades em suas integrações:

- Autorização de pagamentos (síncrona ou assíncrona).
- Cancelamento de autorizações antes da captura de valores.
- Captura de valores (imediata ou agendada).
- Reembolso de valores após a captura, caso a transação já tenha sido efetivada.
- Notificações assíncronas de status transacional (atualização automática do status do pagamento na VTEX).
- Conformidade com a certificação [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), caso deseje processar meios de pagamento como cartões de crédito, débito ou [co-branded](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/1wWt35dRwEboRs1nrSx7G0#cartoes-da-loja-co-branded). Caso não possua esta certificação, é necessário implementar o conector utilizando a solução [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) da VTEX.
- Assegurar a alta disponibilidade e a abrangência regional do conector, em conformidade com as disposições estabelecidas no contrato de parceria firmado com a VTEX.
- Desenvolver os endpoints do conector segundo as melhores práticas para criação de APIs.

## Benefícios da integração PPP

A implementação de conectores desenvolvidos por meio do [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) oferece as seguintes vantagens:

- __Otimização de esforço técnico:__ reduz a necessidade do desenvolvimento de integrações customizadas.
- __Escalabilidade:__ novos meios de pagamento podem ser adicionados rapidamente. Uma vez publicado, o conector de um parceiro torna-se disponível a todos os lojistas da VTEX, potencializando o alcance e a adoção da solução.
- __Maior conversão de vendas:__ flexibilidade para adaptar-se às particularidades e necessidades específicas de cada lojista.
- __Gestão centralizada:__ as informações de configuração do conector podem ser administradas diretamente no Admin VTEX.

## Fases de desenvolvimento do conector

O processo de desenvolvimento de um conector VTEX pode ser dividido em quatro fases:

<blockquote><ui>1. <b>Implementação da API:</b> os endpoints são desenvolvidos de acordo com o <a href="https://developers.vtex.com/docs/api-reference/payment-provider-protocol">VTEX Payment Provider Protocol (PPP)</a>, incorporando definições como ambiente de operação, infraestrutura e fluxo de compra.</ui>  

<blockquote><ui>2. <b>Realização de testes:</b> o conector é validado por meio de testes pré-definidos que asseguram seu funcionamento adequado. Esta etapa é crucial, pois erros identificados podem impactar o SLA de entrega originalmente previsto.</ui>

<blockquote><div class="alert alert-info">Após a conclusão dos <a href="https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#4-testes">testes iniciais</a> e o envio do conector para homologação, recomendamos iniciar os <a href="https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework#placing-an-order-with-your-new-connector">testes de compra</a> em ambiente de teste. Essa ação é fundamental para identificar inconsistências que possam interferir no progresso da homologação.</div></blockquote>

<blockquote><ui>3. <b>Homologação:</b> o parceiro desenvolvedor do conector abre uma solicitação, que será tratada pela equipe de Partner Support da VTEX. A partir dessa etapa, inicia-se o processo de validação interna e a publicação do conector no ambiente VTEX.</ui>

<blockquote><div class="alert alert-warning">Para iniciar o processo de <a href="https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex#7-homologation-and-go-live">homologação de um conector de pagamento</a> na plataforma é necessário ter um contrato ativo e não possuir pendências financeiras com a VTEX.</div></blockquote>

<blockquote><ui>4. <b>Ativação do conector:</b> uma vez homologado e publicado, os lojistas poderão configurar os <a href="https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway--tutorials_444">meios de pagamento</a> em suas lojas por meio do <a href="https://help.vtex.com/pt/tutorial/admin-vtex-comece-aqui--531cHtUCUi3puRXNDmKziw">Admin VTEX</a>.</ui></blockquote>

Para mais detalhes sobre o fluxo de criação de um conector, acesse [Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex). 

## Escolha da infraestrutura para o conector

Durante a fase de implementação da API, o parceiro pode definir o tipo de infraestrutura que deseja utilizar para integrar o conector na VTEX.

Veja abaixo as características de cada uma das opções de infraestrutura disponíveis:

### Infraestrutura própria

#### Benefícios:

- __Liberdade na escolha das ferramentas de desenvolvimento:__ como a infraestrutura é totalmente controlada pelo desenvolvedor, ele tem plena liberdade para selecionar as ferramentas que melhor atendem às suas necessidades, como linguagens de programação, bancos de dados e outros recursos tecnológicos.

- __Recebimento direto de dados de cartão no conector:__ ao desenvolver um conector em sua própria infraestrutura, em conformidade com os padrões [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), é possível receber os dados de cartão diretamente, caso seja necessário para o negócio. Isso elimina a necessidade de utilizar funcionalidades como o [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para captura desses dados.  

#### Aspectos a considerar:  

- __Necessidade de manutenção de infraestrutura:__ ao desenvolver o conector em sua própria infraestrutura, o time de desenvolvimento assume a responsabilidade pela manutenção, escalabilidade e estabilidade do sistema, o que aumenta a carga de trabalho para garantir seu bom funcionamento.

- __Menor autonomia para realizar mudanças:__ ao desenvolver um conector fora da infraestrutura VTEX IO, alterações como a adição de novos meios de pagamento ou a ativação de [split](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol) exigem que o desenvolvedor entre em contato com a equipe da VTEX para solicitar modificações. Esse processo está sujeito a um SLA definido pela equipe de pagamentos da VTEX, podendo durar até 30 dias.

### Infraestrutura VTEX IO 

#### Benefícios:

- __[Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework):__ guia completo para a construção de conectores utilizando o VTEX IO.

- __Flexibilidade total:__ pode ser utilizado para qualquer tipo de integração, não se limitando apenas a meios de pagamento. Além disso, oferece facilidade para implementar personalizações adicionais no conector, quando necessário.

- __Diversas opções de personalização:__ possibilita a criação de componentes de front-end para o [Store Framework](https://developers.vtex.com/docs/guides/store-framework), incluindo banners na página inicial da loja, páginas de categorias, upsell, entre outros.

- __Desenvolvimento integrado ao ecossistema VTEX:__ permite criar apps que interagem com todas as APIs e eventos da plataforma, como a captação de dados de CRM, detalhamento das informações do carrinho e checkout, dados de logística, entre outros.

- __Acesso a eventos em tempo real:__ utiliza o [Event Bus](https://medium.com/dev-axe/aws-amazon-eventbridge-event-bus-explained-ad52ec36d185) para acompanhar ações realizadas na plataforma.

- __Integração simplificada com Banco de Dados como Serviço:__ conecta-se facilmente a bancos de dados como VBase e [Master data](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) para gerenciar dados de maneira eficiente na sua aplicação.

- __Dispensa a necessidade de desenvolvedores PCI-DSS:__ conectores criados no VTEX IO utilizam o [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para o tratamento de dados de cartão, garantindo que o conector não tenha acesso direto aos dados sensíveis, embora o parceiro ainda precise ser [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance).

- __Ausência de manutenção de infraestrutura:__ ao desenvolver o conector no VTEX IO, toda a gestão de infraestrutura é automatizada, permitindo que o desenvolvedor concentre-se exclusivamente nas regras de negócio, sem se preocupar com questões técnicas de infraestrutura.

- __Atualização automatizada por versionamento da app:__ as atualizações do conector são realizadas de forma automatizada, sem necessidade de intervenção do time da VTEX.  

#### Recursos operacionais:

- __Estrutura Serverless:__ o VTEX IO opera diretamente no ambiente VTEX, eliminando a necessidade de infraestrutura externa.

- __GraphQL + REST APIs:__ oferece suporte a diversas formas de comunicação, proporcionando flexibilidade na integração.

#### Aspectos a considerar:

- __Impossibilidade de acesso direto aos dados de cartão pelo conector__: o VTEX IO não é compatível com os requisitos do [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), portanto, conectores desenvolvidos nesta plataforma não têm acesso direto aos dados de cartão. Para tratar essas informações, é necessário usar a funcionalidade [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy). Caso o modelo de negócio precise processar os dados do cartão antes de enviá-los à adquirente, o VTEX IO pode não ser a melhor opção, já que não permite esse nível de acesso.

- __Limitações nas linguagens e frameworks suportados__: o VTEX IO é compatível apenas com algumas linguagens e frameworks específicos, como React, Node e .NET. Desenvolvedores que não estão familiarizados com essas tecnologias precisarão se adaptar ao ambiente, o que pode demandar tempo adicional para aprendizado e ajustes no fluxo de trabalho.

- __Necessidade de aprendizado do VTEX IO__: embora o VTEX IO seja intuitivo e fácil de usar, ele possui características específicas que exigem que o desenvolvedor compreenda seu funcionamento para aproveitar seu potencial total. Para aqueles sem experiência prévia, será necessário um tempo de adaptação para aprender as particularidades da plataforma. 

A escolha entre desenvolver um conector na infraestrutura própria ou no VTEX IO depende das necessidades de cada integração e do nível de personalização desejado. O [PPP](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) é obrigatório para meios de pagamento, enquanto o VTEX IO oferece mais flexibilidade para customizações avançadas.

Na definição da infraestrutura, considere o know-how da equipe como um fator estratégico. Trabalhar com tecnologias familiares reduz riscos, acelera a entrega e aumenta a eficiência operacional.

## Boas práticas no desenvolvimento de conectores: confiabilidade e valor agregado

A seguir, são apresentadas as melhores práticas para o desenvolvimento de conectores, abrangendo uma característica técnica e recursos de negócios essenciais para garantir a eficácia e a qualidade da integração. As características descritas refletem as melhores abordagens observadas ao longo dos anos de colaboração com adquirentes, agências e provedores de antifraude, visando sempre a construção de soluções de alta performance e confiabilidade. 

### Diferencial técnico: Idempotência  

A [idempotência](http://pt.wikipedia.org/wiki/Idempot%C3%AAncia) no conector garante que múltiplas requisições com os mesmos parâmetros tenham o mesmo efeito, independentemente de quantas vezes sejam enviadas. Esse comportamento é essencial em fluxos críticos, como o transacional. Além disso, a VTEX realiza tentativas automáticas de chamadas idênticas (retry), o que pode resultar em múltiplas requisições com o mesmo `paymentId` para atualizar o status da transação.

As seguintes características operacionais são observadas em conectores que possuem idempotência:

- Pagamentos duplicados são evitados em caso de reenvio automático. Este comportamento assegura o processamento único de uma transação, evitando duplicidades. Caso o conector não seja idempotente, podem ocorrer cobranças duplicadas, gerando inconsistências.

- Em casos de falha na rede (comunicação), a confiabilidade da integração é assegurada.

- Quando um lojista ou adquirente reporta um problema transacional, a idempotência garante que os logs e as respostas sejam consistentes e previsíveis.

- O número de chamadas desnecessárias ao provedor é reduzido. Caso o pagamento já tenha sido processado, o conector pode simplesmente retornar a resposta previamente registrada, evitando a necessidade de uma nova requisição ao adquirente.

#### Implementando a idempotência

Para implementar a idempotência é necessário adotar as seguintes especificações durante o desenvolvimento do conector: 

1. Garantir um identificador único para cada transação (`paymentId`).
2. Armazenar e reutilizar a resposta (sucesso, falha, pendente) da requisição em caso de reenvio.
3. Definir um tempo de expiração para os registros idempotentes.
4. Assegurar que a idempotência seja mantida também para cancelamentos e estornos.
5. Em caso de utilização da infraestrutura VTEX IO:
   - Considere utilizar o VBase para armazenar a resposta com base no `paymentId` enviado pelo Gateway de pagamento, através da rota [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).
   - Ao receber uma nova chamada, o conector pode verificar no VBase se uma requisição semelhante já foi registrada. Se sim, a resposta previamente registrada pode ser retornada. Veja este [exemplo de implementação](https://github.com/vtex-apps/payment-provider-example/blob/main/node/connector.ts#L53).

### Recursos estratégicos para o negócio 

Além da confiabilidade técnica, alguns recursos funcionais podem ampliar significativamente o impacto comercial do conector. A seguir, destacamos funcionalidades que contribuem diretamente para o sucesso da operação, promovendo maior segurança, eficiência e conversão.

#### Suporte a carteiras digitais (Apple Pay, NuPay, Google Pay, PayPal)

O uso crescente de carteiras digitais (wallets) traz mais segurança e conveniência para os consumidores. Conectores que suportam essas carteiras oferecem os seguintes benefícios:  

- __Checkout mais fluido:__ reduz a fricção no pagamento, já que os dados do cartão estão armazenados na carteira digital.
- __Segurança aprimorada:__ o uso de autenticação biométrica e tokenização minimiza fraudes e chargebacks.
- __Maior conversão:__ menos etapas no checkout resultam em menor abandono de carrinho.  

#### Suporte ao Google Pay com tokenização DPAN (Device Primary Account Number)

O suporte ao Google Pay com [tokenização DPAN](https://help.vtex.com/pt/tutorial/dpan-e-fpan-entendendo-a-seguranca-no-fluxo-de-pagamentos-tokenizados-online--3RM7RvhKZ057wja5xVEOqb) proporciona vantagens importantes para a segurança e a experiência do usuário:  

- __Maior segurança:__ os dados reais do cartão não são compartilhados, reduzindo riscos de fraude.
- __Menor fricção em compras recorrentes:__ DPANs podem ser reutilizados (pagamentos recorrentes) sem necessidade de solicitar novamente os dados do usuário.
- __Compatibilidade com múltiplos dispositivos:__ permite o uso do mesmo cartão em diferentes dispositivos sem nova autenticação.
- __Redução de custos com fraudes:__ a tokenização evita o uso indevido de credenciais, o que pode diminuir o número de chargebacks.  

<div class="alert alert-warning">
O suporte ao Google Pay com DPAN só está disponível por meio da <a href="https://help.vtex.com/pt/tracks/carteira-digital-e-wallet--6X8YyZBoVJpz5R8oXciTyu/61JMBvM5Vanqj6RaJsP8CT">carteira Google Pay nativa da VTEX</a>.
</div>  

#### Suporte a pagamento via POS (VTEX Sales App) 

Conectores compatíveis com pagamentos via [POS](https://pt.wikipedia.org/wiki/Caixa_(varejo)) no [VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc) viabilizam transações [Omnichannel](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) entre o ambiente físico e digital. Entre os benefícios, estão:

- __Integração entre canais:__ o cliente pode iniciar uma compra online e finalizá-la na loja física utilizando o mesmo meio de pagamento.
- __Redução de erros operacionais:__ como o pagamento é integrado ao VTEX Sales App, não é necessário registrar transações manualmente no [ERP](https://pt.wikipedia.org/wiki/Sistema_integrado_de_gest%C3%A3o_empresarial).
- __Melhoria na experiência de compra:__ vendedores conseguem processar pagamentos rapidamente em um único sistema.
- __Suporte a diferentes opções de pagamento:__ o POS pode aceitar cartões de crédito, débito, Pix via QR Code e carteiras digitais.  

#### Suporte ao split de recebíveis

Conectores com funcionalidade de [split de recebíveis](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx#split-de-recebiveis) permitem dividir automaticamente o valor de uma transação entre diferentes destinatários no momento da autorização ou da captura, dependendo da configuração do provedor. Essa funcionalidade é essencial para marketplaces e operações omnichannel.

- __Distribuição automatizada de pagamentos__: o valor da transação é dividido de forma automática, garantindo eficiência e menor risco operacional.
- __Redução de custos e complexidade__: elimina repasses manuais, reduz custos administrativos e acelera a conciliação financeira.
- __Flexibilidade para diferentes modelos de negócio__: viabiliza operações com modelos como marketplace, ship-from-store e dropshipping.

## Saiba mais

- [VTEX Payment Provider Protocol - Help Center](https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m)
- [Secure Proxy - Help Center](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy#custom-supported-operators)
- [VTEX Master Data - Help Center](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw)
- [Implementing a Payment Provider - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider)
- [Payment Provider Framework - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework)
- [Split Payouts on Payment Provider Protocol - Dev. Portal](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol)
- [PCI-DSS - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance)
- [Payment apps - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-app)
- [Whats is VTEX IO - Dev. Portal](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io)
- [Exemplo de integração: payment-provider-example - GitHub](https://github.com/vtex-apps/payment-provider-example)
- [Developing services on VTEX IO - Learning Center](https://learn.vtex.com/docs/course-service-course-lang-en)

