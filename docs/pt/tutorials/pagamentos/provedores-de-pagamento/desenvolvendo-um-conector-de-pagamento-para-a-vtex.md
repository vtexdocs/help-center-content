---
title: "Desenvolvendo um conector de pagamento para a VTEX"
createdAt: 2025-05-28T10:29:13.599Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: developing-a-payment-connector-for-vtex
locale: pt
hidden: false
---

Este artigo apresenta os requisitos, as opções de infraestrutura e as boas práticas para parceiros que desejam desenvolver [conectores de pagamentos](/pt/docs/tutorials/o-que-e-conector) compatíveis com a plataforma VTEX. O objetivo é garantir uma integração eficiente e padronizada, que permita usar os conectores em todas as lojas da plataforma.

Este conteúdo é direcionado a:

- **Desenvolvedores e equipes técnicas de parceiros de pagamento:** responsáveis pela implementação das integrações.
- **Gerentes de produto e times de integração:** responsáveis pela coesão e pela operação dos conectores na plataforma.
- **Equipes de suporte técnico de provedores de pagamento, gateways e sistemas antifraude:** responsáveis pelo suporte contínuo, pela operação estável e pela conformidade das soluções.

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

- Autorização de pagamentos (síncrona ou assíncrona)
- Cancelamento de autorizações antes da captura de valores
- Captura de valores (imediata ou agendada)
- Reembolso de valores após a captura
- Notificações assíncronas de status transacional, que atualizam automaticamente o status do pagamento na VTEX
- Certificação [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) para processar cartões de crédito, débito ou [co-branded](/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/1wWt35dRwEboRs1nrSx7G0#cartoes-da-loja-co-branded), ou implementação do conector com a solução [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) da VTEX, que dispensa essa certificação
- Alta disponibilidade e abrangência regional do conector, conforme o contrato de parceria firmado com a VTEX
- Endpoints do conector desenvolvidos segundo boas práticas de criação de APIs

## Benefícios da integração PPP

A implementação de conectores desenvolvidos por meio do [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) oferece as seguintes vantagens:

- **Otimização de esforço técnico:** reduz a necessidade do desenvolvimento de integrações customizadas.
- **Escalabilidade:** novos meios de pagamento podem ser adicionados rapidamente. Uma vez publicado, o conector de um parceiro torna-se disponível a todos os lojistas da VTEX, potencializando o alcance e a adoção da solução.
- **Maior conversão de vendas:** flexibilidade para adaptar-se às particularidades e necessidades específicas de cada lojista.
- **Gestão centralizada:** as informações de configuração do conector podem ser administradas diretamente no Admin VTEX.

## Fases de desenvolvimento do conector

O guia [Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex) é a referência para o processo completo de criação de um conector. Em resumo, o parceiro implementa os endpoints do PPP, valida o conector com os [casos de teste do Payment Provider Test Suite](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation) e faz [testes de compra](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework#placing-an-order-with-your-new-connector) em uma loja de teste. Quando todos os casos de teste são aprovados, o parceiro solicita a homologação abrindo um ticket no [Suporte VTEX](https://supporticket.vtex.com/support), o que exige um contrato ativo e nenhuma pendência financeira com a VTEX. Depois que o conector é homologado e publicado, os lojistas podem configurar os [meios de pagamento](/pt/docs/tutorials/afiliacoes-de-gateway) em suas lojas pelo [Admin VTEX](/pt/docs/tutorials/admin-vtex-comece-aqui).

## Escolha da infraestrutura para o conector

Ao implementar os endpoints, o parceiro escolhe se o conector será hospedado em infraestrutura própria ou no VTEX IO. Confira as características de cada opção:

### Infraestrutura própria

#### Benefícios

- **Liberdade na escolha das ferramentas de desenvolvimento:** como a infraestrutura é totalmente controlada pelo desenvolvedor, ele tem plena liberdade para selecionar as ferramentas que melhor atendem às suas necessidades, como linguagens de programação, bancos de dados e outros recursos tecnológicos.

- **Recebimento direto de dados de cartão no conector:** ao desenvolver um conector em sua própria infraestrutura, em conformidade com os padrões [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), é possível receber os dados de cartão diretamente, caso seja necessário para o negócio. Isso elimina a necessidade de utilizar funcionalidades como o [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para captura desses dados.

#### Aspectos a considerar

- **Necessidade de manutenção de infraestrutura:** ao desenvolver o conector em sua própria infraestrutura, o time de desenvolvimento assume a responsabilidade pela manutenção, escalabilidade e estabilidade do sistema, o que aumenta a carga de trabalho para garantir seu bom funcionamento.

- **Menor autonomia para realizar mudanças:** ao desenvolver um conector fora da infraestrutura VTEX IO, alterações como a adição de novos meios de pagamento ou a ativação de [split](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol) exigem que o desenvolvedor entre em contato com a equipe da VTEX para solicitar modificações. Esse processo está sujeito a um SLA definido pela equipe de pagamentos da VTEX, podendo durar até 30 dias.

### Infraestrutura VTEX IO

#### Benefícios

- **[Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework):** guia completo para a construção de conectores utilizando o VTEX IO.

- **Uso além de meios de pagamento:** o VTEX IO pode ser usado em outros tipos de integração além de meios de pagamento e permite implementar personalizações adicionais no conector, quando necessário.

- **Diversas opções de personalização:** possibilita a criação de componentes de front-end para o [Store Framework](https://developers.vtex.com/docs/guides/store-framework), incluindo banners na página inicial da loja, páginas de categorias, upsell, entre outros.

- **Desenvolvimento integrado ao ecossistema VTEX:** permite criar apps que interagem com todas as APIs e eventos da plataforma, como a captação de dados de CRM, detalhamento das informações do carrinho e checkout, dados de logística, entre outros.

- **Acesso a eventos em tempo real:** apps do VTEX IO podem [receber e tratar eventos](https://developers.vtex.com/docs/guides/services-2-handling-and-receiving-events) disparados por ações realizadas na plataforma.

- **Integração simplificada com Banco de Dados como Serviço:** conecta-se facilmente a bancos de dados como VBase e [Master data](/pt/docs/tutorials/master-data) para gerenciar dados de maneira eficiente na sua aplicação.

- **Tratamento de dados de cartão pelo Secure Proxy:** conectores criados no VTEX IO usam obrigatoriamente o [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para tratar dados de cartão, de modo que o conector não acessa diretamente os dados sensíveis. Como usam o Secure Proxy, esses conectores não exigem certificação [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) do parceiro.

- **Ausência de manutenção de infraestrutura:** ao desenvolver o conector no VTEX IO, toda a gestão de infraestrutura é automatizada, permitindo que o desenvolvedor concentre-se exclusivamente nas regras de negócio, sem se preocupar com questões técnicas de infraestrutura.

- **Atualização automatizada por versionamento da app:** as atualizações do conector são realizadas de forma automatizada, sem necessidade de intervenção do time da VTEX.

#### Recursos operacionais

- **Estrutura Serverless:** o VTEX IO opera diretamente no ambiente VTEX, eliminando a necessidade de infraestrutura externa.

- **GraphQL + REST APIs:** oferece suporte a diversas formas de comunicação, proporcionando flexibilidade na integração.

#### Aspectos a considerar

- **Impossibilidade de acesso direto aos dados de cartão pelo conector**: como o ambiente do VTEX IO não é certificado [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), conectores desenvolvidos nessa plataforma não acessam diretamente os dados de cartão e precisam usar o [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para tratá-los. Caso o modelo de negócio precise processar os dados do cartão antes de enviá-los à adquirente, o VTEX IO pode não ser a melhor opção.

- **Limitações nas linguagens e frameworks suportados**: o VTEX IO é compatível apenas com algumas linguagens e frameworks específicos, como React, Node e .NET. Desenvolvedores que não estão familiarizados com essas tecnologias precisarão se adaptar ao ambiente, o que pode demandar tempo adicional para aprendizado e ajustes no fluxo de trabalho.

- **Necessidade de aprendizado do VTEX IO**: o [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) tem características específicas, e desenvolvedores sem experiência prévia na plataforma precisam de um tempo de adaptação para aprendê-las.

Nas duas opções, o conector implementa o [PPP](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). A diferença está na hospedagem e no nível de customização: na infraestrutura própria, o parceiro mantém o ambiente e pode receber dados de cartão diretamente, enquanto no VTEX IO a infraestrutura é gerenciada pela plataforma e há mais recursos para customizações avançadas. A escolha depende das necessidades de cada integração e do nível de personalização desejado.

Na definição da infraestrutura, considere o know-how da equipe como um fator estratégico. Trabalhar com tecnologias familiares reduz riscos, acelera a entrega e aumenta a eficiência operacional.

## Boas práticas no desenvolvimento de conectores: confiabilidade e valor agregado

A seguir, são apresentadas boas práticas para o desenvolvimento de conectores: uma característica técnica e recursos de negócio que contribuem para a eficácia e a qualidade da integração. Essas práticas refletem a experiência da VTEX ao longo de anos de colaboração com adquirentes, agências e provedores de antifraude.

### Diferencial técnico: idempotência

A [idempotência](http://pt.wikipedia.org/wiki/Idempot%C3%AAncia) no conector garante que múltiplas requisições com os mesmos parâmetros tenham o mesmo efeito, independentemente de quantas vezes sejam enviadas. Esse comportamento é essencial em fluxos críticos, como o transacional. Além disso, a VTEX realiza tentativas automáticas de chamadas idênticas (retry), o que pode resultar em múltiplas requisições com o mesmo `paymentId` para atualizar o status da transação.

As seguintes características operacionais são observadas em conectores que possuem idempotência:

- Cobranças duplicadas são evitadas quando a VTEX reenvia automaticamente uma requisição, pois cada transação é processada uma única vez.

- Em casos de falha na rede (comunicação), a confiabilidade da integração é assegurada.

- Quando um lojista ou adquirente reporta um problema transacional, a idempotência garante que os logs e as respostas sejam consistentes e previsíveis.

- O número de chamadas desnecessárias ao provedor é reduzido. Caso o pagamento já tenha sido processado, o conector pode simplesmente retornar a resposta previamente registrada, evitando a necessidade de uma nova requisição ao adquirente.

#### Implementar a idempotência

Para implementar a idempotência, siga estas orientações durante o desenvolvimento do conector:

1. Garanta um identificador único para cada transação (`paymentId`).
2. Armazene e reutilize a resposta (sucesso, falha, pendente) da requisição em caso de reenvio.
3. Defina um tempo de expiração para os registros idempotentes.
4. Mantenha a idempotência também para cancelamentos e estornos.
5. Se o conector usar a infraestrutura VTEX IO:
   - Considere usar o VBase para armazenar a resposta com base no `paymentId` enviado pelo gateway de pagamento na rota [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).
   - Ao receber uma nova chamada, verifique no VBase se uma requisição semelhante já foi registrada e, em caso positivo, retorne a resposta registrada. Confira este [exemplo de implementação](https://github.com/vtex-apps/payment-provider-example/blob/main/node/connector.ts#L53).

### Recursos estratégicos para o negócio

Além da confiabilidade técnica, alguns recursos funcionais podem ampliar significativamente o impacto comercial do conector. A seguir, destacamos funcionalidades que contribuem diretamente para o sucesso da operação, promovendo maior segurança, eficiência e conversão.

#### Suporte a carteiras digitais (Apple Pay, NuPay, Google Pay, PayPal)

O uso crescente de carteiras digitais (wallets) traz mais segurança e conveniência para os consumidores. Conectores que suportam essas carteiras oferecem os seguintes benefícios:

- **Checkout mais fluido:** reduz a fricção no pagamento, já que os dados do cartão estão armazenados na carteira digital.
- **Segurança aprimorada:** o uso de autenticação biométrica e tokenização minimiza fraudes e chargebacks.
- **Maior conversão:** menos etapas no checkout resultam em menor abandono de carrinho.

#### Suporte ao Google Pay com tokenização DPAN (Device Primary Account Number)

O suporte ao Google Pay com [tokenização DPAN](/pt/docs/tutorials/dpan-e-fpan-entendendo-a-seguranca-no-fluxo-de-pagamentos-tokenizados-online) proporciona vantagens importantes para a segurança e a experiência do usuário:

- **Maior segurança:** os dados reais do cartão não são compartilhados, reduzindo riscos de fraude.
- **Menor fricção em compras recorrentes:** DPANs podem ser reutilizados (pagamentos recorrentes) sem necessidade de solicitar novamente os dados do usuário.
- **Compatibilidade com múltiplos dispositivos:** permite o uso do mesmo cartão em diferentes dispositivos sem nova autenticação.
- **Redução de custos com fraudes:** a tokenização evita o uso indevido de credenciais, o que pode diminuir o número de chargebacks.

> ⚠️ O suporte ao Google Pay com DPAN só está disponível por meio da [carteira Google Pay nativa da VTEX](/pt/docs/tracks/google-pay).

#### Suporte a pagamento via POS (VTEX Sales App)

Conectores compatíveis com pagamentos via [POS](<https://pt.wikipedia.org/wiki/Caixa_(varejo)>) no [VTEX Sales App](https://help.vtex.com/pt/docs/tracks/vtex-sales-app-primeiros-passos-e-configuracoes) viabilizam transações [omnichannel](/pt/docs/tracks/comercio-unificado-101) entre o ambiente físico e digital. Entre os benefícios, estão:

- **Integração entre canais:** o cliente pode iniciar uma compra online e finalizá-la na loja física utilizando o mesmo meio de pagamento.
- **Redução de erros operacionais:** como o pagamento é integrado ao VTEX Sales App, não é necessário registrar transações manualmente no [ERP](https://pt.wikipedia.org/wiki/Sistema_integrado_de_gest%C3%A3o_empresarial).
- **Melhoria na experiência de compra:** vendedores conseguem processar pagamentos rapidamente em um único sistema.
- **Suporte a diferentes opções de pagamento:** o POS pode aceitar cartões de crédito, débito, Pix via QR Code e carteiras digitais.

#### Suporte ao split de recebíveis

Conectores com funcionalidade de [split de recebíveis](/pt/docs/tutorials/split-de-pagamento#split-de-recebiveis) permitem dividir automaticamente o valor de uma transação entre diferentes destinatários no momento da autorização ou da captura, dependendo da configuração do provedor. Essa funcionalidade é essencial para marketplaces e operações omnichannel.

- **Distribuição automatizada de pagamentos**: o valor da transação é dividido de forma automática, garantindo eficiência e menor risco operacional.
- **Redução de custos e complexidade**: elimina repasses manuais, reduz custos administrativos e acelera a conciliação financeira.
- **Flexibilidade para diferentes modelos de negócio**: viabiliza operações com modelos como marketplace, ship-from-store e dropshipping.

## Saiba mais

- [VTEX Payment Provider Protocol - Help Center](/pt/docs/tutorials/payment-provider-protocol)
- [Secure Proxy - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy#custom-supported-operators)
- [VTEX Master Data - Help Center](/pt/docs/tutorials/master-data)
- [Implementing a Payment Provider - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider)
- [Payment Provider Framework - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework)
- [Split Payouts on Payment Provider Protocol - Dev. Portal](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol)
- [PCI-DSS - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance)
- [Payment apps - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-app)
- [What is VTEX IO - Dev. Portal](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io)
- [Exemplo de integração: payment-provider-example - GitHub](https://github.com/vtex-apps/payment-provider-example)
- [Developing services on VTEX IO - Learning Center](https://learn.vtex.com/docs/course-service-course-lang-en)
