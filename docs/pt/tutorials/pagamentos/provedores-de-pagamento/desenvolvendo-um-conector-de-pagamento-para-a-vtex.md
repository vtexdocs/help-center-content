---
title: "Desenvolvendo um conector de pagamento para a VTEX"
createdAt: 2025-05-28T10:29:13.599Z
updatedAt: 2026-11-12T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: developing-a-payment-connector-for-vtex
locale: pt
hidden: false
---

Este artigo ajuda parceiros que desejam desenvolver [conectores de pagamentos](/pt/docs/tutorials/o-que-e-conector) compatíveis com a plataforma VTEX a escolher o caminho de integração mais adequado. O artigo explica quando e por que escolher cada opção, apresenta os passos de cada caminho e os requisitos que costumam surpreender os parceiros durante o processo, além de boas práticas para o desenvolvimento.

Este conteúdo é direcionado a:

- **Desenvolvedores e equipes técnicas de parceiros de pagamento:** responsáveis pela implementação das integrações.
- **Gerentes de produto e times de integração:** responsáveis pela coesão e pela operação dos conectores na plataforma.
- **Equipes de suporte técnico de provedores de pagamento, gateways e sistemas antifraude:** responsáveis pelo suporte contínuo, pela operação estável e pela conformidade das soluções.

## Visão geral

Na VTEX, um conector de pagamentos é o serviço externo que implementa o [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). Este protocolo permite a comunicação entre a plataforma e os provedores de pagamento (como gateways, adquirentes e soluções antifraude), possibilitando que lojistas processem transações de forma integrada e padronizada, sem a necessidade de desenvolver integrações personalizadas.

Para integrar um provedor de pagamento à VTEX, o parceiro toma duas decisões independentes:

1. **Onde o conector é hospedado:** em infraestrutura própria, implementando o PPP diretamente, ou no VTEX IO, usando o [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework). Nas duas opções, o conector implementa o PPP e passa pela homologação da VTEX.
2. **Como o comprador interage com o pagamento no checkout:** pelo checkout transparente padrão, por um [Payment App](https://developers.vtex.com/docs/guides/payments-integration-payment-app) ou por redirecionamento para uma página externa. Para um meio de pagamento novo, também é possível enviar à VTEX um layout personalizado para exibição no checkout.

> ℹ️ PPP, PPF, Payment App e layout personalizado não são alternativas entre si. O PPP é o protocolo que todo conector implementa. O PPF é uma forma de construir esse conector no VTEX IO. O Payment App e o layout personalizado são complementos de checkout, usados junto com o conector.

| Termo | O que é | É obrigatório? |
| --- | --- | --- |
| **PPP** (Payment Provider Protocol) | Protocolo que define as rotas e regras de comunicação entre a VTEX e o provedor de pagamento. | Sim, para todo conector. |
| **PPF** (Payment Provider Framework) | Boilerplate para criar o conector como um app do VTEX IO, com rotas, tipos e Secure Proxy já configurados. | Não. É a alternativa à infraestrutura própria. |
| **Payment App** | App do VTEX IO exibido em uma janela modal no checkout para interações adicionais com o comprador, como QR code ou autenticação. | Não, exceto para [3DS 2](/pt/docs/tutorials/configurar-fluxo-de-autenticacao-3ds-2) e para conectores que operam somente em lojas físicas. |
| **Layout personalizado** | Área informativa em HTML e CSS exibida quando o comprador seleciona um meio de pagamento novo no checkout. | Não. |

Confira as seções que você encontrará neste guia:

- [Requisitos técnicos obrigatórios](#requisitos-tecnicos-obrigatorios)
- [Benefícios da integração PPP](#beneficios-da-integracao-ppp)
- [Escolha do caminho de integração](#escolha-do-caminho-de-integracao)
- [Passo a passo de cada caminho](#passo-a-passo-de-cada-caminho)
- [Pontos de atenção](#pontos-de-atencao)
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

## Escolha do caminho de integração

As tabelas a seguir comparam as opções de cada decisão. O guia [Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex) traz os detalhes técnicos de todo o processo.

### Decisão 1: onde o conector é hospedado

| Critério | Infraestrutura própria (PPP) | VTEX IO (PPF) |
| --- | --- | --- |
| **Quando escolher** | A equipe já mantém infraestrutura própria, precisa receber os dados de cartão diretamente ou quer usar linguagens e ferramentas que o VTEX IO não suporta. | O parceiro não quer manter infraestrutura e quer aproveitar recursos do ecossistema VTEX, como eventos da plataforma, Master Data e componentes de front-end. |
| **Hospedagem e manutenção** | Responsabilidade do parceiro. | Responsabilidade da VTEX. |
| **Dados de cartão** | O conector recebe os dados diretamente, se tiver certificação PCI-DSS, ou usa o [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy). | O conector usa obrigatoriamente o Secure Proxy e não acessa os dados de cartão. |
| **Certificação PCI-DSS** | Obrigatória para processar cartões sem o Secure Proxy. O AOC (Attestation of Compliance) é enviado no ticket de homologação. | Não é exigida do conector. Porém, o endpoint de destino, como o do adquirente, precisa ser certificado e liberado no Secure Proxy por meio de um ticket com o AOC. |
| **Linguagens** | Livres. | Apenas as suportadas pelo VTEX IO, como Node e .NET. |
| **Ponto de partida** | [Referência da API do PPP](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). | [App de exemplo do PPF](https://github.com/vtex-apps/payment-provider-example), com rotas, tipos e Secure Proxy já configurados. |
| **Novos meios de pagamento e split** | Alterações solicitadas à VTEX, com prazo de até 30 dias. | Declarados no arquivo de configuração do app e enviados para homologação em uma nova versão. |
| **Publicação** | Homologação por ticket no Suporte VTEX. | Publicação na [VTEX App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-submitting-your-app-in-the-vtex-app-store), que tem um processo de homologação próprio, e homologação de pagamentos por ticket no Suporte VTEX. |
| **Homologação** | Sempre obrigatória. | Obrigatória, exceto quando o app é restrito a contas específicas e usa apenas meios de pagamento já disponíveis na VTEX. |
| **Prazo de homologação** | Até 30 dias, contados a partir do envio do contrato de parceria (MPA). | Até 30 dias, contados a partir do envio do contrato de parceria (MPA). |

### Decisão 2: experiência de pagamento no checkout

| Opção | Quando usar | O que exige | Aprovação da VTEX |
| --- | --- | --- | --- |
| **[Checkout transparente](/pt/docs/tutorials/o-que-e-checkout-transparente)** (padrão) | O comprador informa os dados e finaliza o pagamento no próprio checkout. É o fluxo mais usado. | Apenas o conector. | Apenas a homologação do conector. |
| **Payment App** | O pagamento exige uma interação adicional sem sair do checkout, como exibir um QR code, realizar o desafio do 3DS 2 ou aguardar a confirmação no app do banco. | Um app do VTEX IO em React, que pode ser separado ou ficar dentro do app do conector PPF. O conector informa qual Payment App abrir na resposta da autorização. | O app não passa pela homologação de pagamentos. Ele é publicado e instalado como qualquer app do VTEX IO, inclusive com a homologação da VTEX App Store, se for distribuído por ela. Se o meio de pagamento for novo, a VTEX precisa cadastrá-lo, mediante ticket. |
| **Redirect** | O provedor exige que o comprador conclua o pagamento em uma página externa. | O conector retorna a URL de redirecionamento. | Apenas a homologação do conector. É o fluxo menos recomendado, pois tem a menor taxa de conversão. |
| **Layout personalizado** | Um meio de pagamento novo precisa de identidade visual própria e de instruções para o comprador na lista de meios de pagamento do checkout. | Layout em HTML e CSS desenvolvido com o [Payment Mocker](https://developers.vtex.com/docs/guides/layout-development-guide-for-payment-methods-in-smart-checkout-vtex), seguindo os requisitos da VTEX. | A VTEX revisa e publica o layout após o envio por ticket. |

> ℹ️ O layout personalizado e o Payment App são independentes e podem ser usados juntos. O layout é a área informativa exibida quando o comprador seleciona o meio de pagamento. O Payment App é a janela modal aberta depois que o comprador clica em **Finalizar compra**.

## Passo a passo de cada caminho

Esta seção resume as etapas de cada caminho do ponto de vista do negócio. As instruções técnicas estão no guia indicado ao final de cada caminho.

Antes de começar qualquer caminho, confirme que a empresa tem um contrato de parceria ativo com a VTEX, sem pendências financeiras, e que atende às regulamentações financeiras dos países onde pretende operar.

### Conector em infraestrutura própria

1. A equipe técnica desenvolve o conector seguindo o PPP e define como tratar dados de cartão: com certificação PCI-DSS ou com o Secure Proxy.
2. A equipe testa o conector com as ferramentas de teste da VTEX até que todos os testes sejam aprovados.
3. O parceiro solicita a homologação por ticket no [Suporte VTEX](https://supporticket.vtex.com/support).
4. A VTEX conclui a homologação em até 30 dias após o envio do MPA.
5. Os lojistas configuram os [meios de pagamento](/pt/docs/tutorials/afiliacoes-de-gateway) do conector no Admin VTEX.

Instruções técnicas: [Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex).

### Conector no VTEX IO com PPF

1. A equipe técnica desenvolve o conector como um app do VTEX IO. Se o conector processar cartões, o parceiro solicita à VTEX a liberação do endpoint do adquirente no Secure Proxy.
2. A equipe testa o conector em uma loja de teste e com as ferramentas de teste da VTEX.
3. O parceiro publica o app na VTEX App Store, o que inclui a homologação da App Store.
4. O parceiro solicita a homologação de pagamentos por ticket no Suporte VTEX. A VTEX conclui essa homologação em até 30 dias após o envio do MPA.
5. Os lojistas instalam o app e configuram a nova [afiliação](/pt/docs/tutorials/afiliacoes-de-gateway) no Admin VTEX.

Instruções técnicas: [Payment Provider Framework](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework).

### Payment App

1. Se o meio de pagamento for novo, o parceiro solicita o cadastro dele na VTEX por ticket.
2. A equipe técnica prepara o conector para indicar qual Payment App abrir e desenvolve o Payment App como um app do VTEX IO.
3. A equipe testa o fluxo completo de compra em uma loja de teste.
4. O parceiro publica o app, que os lojistas instalam como qualquer outro app do VTEX IO.

Instruções técnicas: [Payment App](https://developers.vtex.com/docs/guides/payments-integration-payment-app).

### Layout personalizado

1. O parceiro confirma que o conector já está integrado e que o meio de pagamento é novo. Não é possível criar layouts para meios de pagamento já existentes nem para [meios de pagamento customizados](/pt/docs/tracks/configurar-pagamentos-customizados) do lojista, como notas promissórias e cartões de loja.
2. A equipe desenvolve o layout seguindo os requisitos visuais e de idioma da VTEX.
3. O parceiro envia o layout por ticket no Suporte VTEX.
4. A VTEX revisa o layout, solicita ajustes, se necessário, e o publica no checkout.

Instruções técnicas: [Layout development guide for payment methods in VTEX Smart Checkout](https://developers.vtex.com/docs/guides/layout-development-guide-for-payment-methods-in-smart-checkout-vtex).

## Pontos de atenção

Estes são os requisitos que mais costumam surpreender os parceiros durante a integração:

- **Contrato antes do prazo:** o prazo de até 30 dias da homologação só começa depois do envio do contrato de parceria (MPA). Sem ele, a análise pode demorar mais.
- **Homologação também no VTEX IO:** conectores desenvolvidos com PPF também passam pela homologação de pagamentos, salvo a exceção descrita na [tabela de infraestrutura](#decisao-1-onde-o-conector-e-hospedado).
- **Duas homologações para apps distribuídos pela App Store:** apps publicados na VTEX App Store passam também pela [homologação da App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-submitting-your-app-in-the-vtex-app-store), que avalia negócio, experiência do usuário, segurança e desempenho e pode levar até 45 dias. Considere esse prazo no planejamento.
- **Nome definitivo:** o nome do conector, com até 16 caracteres alfanuméricos, não pode ser alterado depois da publicação.
- **Payment App sempre no VTEX IO:** mesmo quando o conector é hospedado em infraestrutura própria, o Payment App é um app do VTEX IO. A equipe precisa conhecer o VTEX IO e React para desenvolvê-lo.
- **3DS 2 e lojas físicas:** o 3DS 2 só pode ser implementado por Payment App. Conectores que operam somente em lojas físicas, pelo [VTEX Sales App](/pt/docs/tracks/vtex-sales-app-primeiros-passos-e-configuracoes), também precisam usar Payment App.
- **Lojas headless:** apps do VTEX IO, incluindo Payment Apps, não funcionam em lojas headless. Nesses casos, é preciso usar uma webview do checkout ou uma integração direta com o provedor.
- **Confirmação da compra:** o Payment App precisa avisar o checkout quando a interação do comprador termina. Caso contrário, o e-mail de confirmação do pedido não é enviado.
- **Split de transação:** o [split de transação](/pt/docs/tutorials/split-de-pagamento) não é compatível com Payment Apps.
- **Layout personalizado:** o layout só é aplicado no Checkout v6, não pode ter scripts nem links e precisa ter textos em inglês dos Estados Unidos (en-US), além dos idiomas dos países onde o meio de pagamento será oferecido.
- **Mudanças em conectores de infraestrutura própria:** adicionar meios de pagamento ou ativar o split exige uma solicitação à VTEX, com prazo de até 30 dias.

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

- **Integração simplificada com Banco de Dados como Serviço:** conecta-se facilmente a bancos de dados como VBase e [Master data](/pt/docs/tutorials/master-data-pt) para gerenciar dados de maneira eficiente na sua aplicação.

- **Tratamento de dados de cartão pelo Secure Proxy:** conectores criados no VTEX IO usam obrigatoriamente o [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para tratar dados de cartão, de modo que o conector não acessa diretamente os dados sensíveis. Como usam o Secure Proxy, esses conectores não exigem certificação [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) do parceiro.

- **Ausência de manutenção de infraestrutura:** ao desenvolver o conector no VTEX IO, toda a gestão de infraestrutura é automatizada, permitindo que o desenvolvedor concentre-se exclusivamente nas regras de negócio, sem se preocupar com questões técnicas de infraestrutura.

- **Atualização por versionamento da app:** o próprio parceiro publica as atualizações do conector como novas versões do app. Mudanças de configuração, como novos meios de pagamento, são enviadas para homologação na nova versão.

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
- [VTEX Master Data - Help Center](/pt/docs/tutorials/master-data-pt)
- [Implementing a Payment Provider - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider)
- [Payment Provider Framework - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework)
- [Split Payouts on Payment Provider Protocol - Dev. Portal](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol)
- [PCI-DSS - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance)
- [Payment apps - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-app)
- [Integrating a new payment provider on VTEX - Dev. Portal](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex)
- [Layout development guide for payment methods in VTEX Smart Checkout - Dev. Portal](https://developers.vtex.com/docs/guides/layout-development-guide-for-payment-methods-in-smart-checkout-vtex)
- [Submitting your app to the VTEX App Store - Dev. Portal](https://developers.vtex.com/docs/guides/vtex-io-documentation-submitting-your-app-in-the-vtex-app-store)
- [What is VTEX IO - Dev. Portal](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io)
- [Exemplo de integração: payment-provider-example - GitHub](https://github.com/vtex-apps/payment-provider-example)
- [Developing services on VTEX IO - Learning Center](https://learn.vtex.com/docs/course-service-course-lang-en)
