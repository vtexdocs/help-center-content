---
title: 'Risk Assessment'
id: 4K97IpqkpCpDYsZOSxtfkX
status: PUBLISHED
createdAt: 2022-05-26T13:08:53.479Z
updatedAt: 2024-08-08T21:07:08.119Z
publishedAt: 2024-08-08T21:07:08.119Z
firstPublishedAt: 2022-05-26T13:17:48.374Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: risk-assessment
locale: pt
legacySlug: o-processo-de-risk-assessment
subcategory: vONCJSxwN5qZiElOEtKkH
---

O processo de Risk Assessment é fundamental para o bom funcionamento de um programa de gestão de risco de fornecedores. O procedimento é composto de questionários de avaliação de risco de terceiros, projetados para ajudar uma organização a identificar potenciais riscos entre seus fornecedores e parceiros terceirizados.

Os questionários são direcionados à VTEX a fim de:

* Avaliar se a VTEX atende os requisitos de segurança estabelecidos pelo cliente.
* Conhecer detalhes técnicos sobre a arquitetura de segurança.
* Aferir potenciais riscos da plataforma.

Para apoiar as avaliações de risco de seus clientes, a VTEX disponibiliza páginas de FAQ com as principais perguntas e respostas relacionadas à estrutura e à segurança da plataforma.

Clique nos itens a seguir para acessar a FAQ referente a cada assunto:

* [Políticas e conformidade](#politicas-e-conformidade)
* [Educação e conscientização sobre segurança](#educacao-e-conscientizacao-sobre-seguranca)
* [Gestão de ativos](#gestao-de-ativos)
* [Privacidade e dados](#privacidade-e-dados)
* [Criptografia](#criptografia)
* [Controle de acesso, identificação e autenticação](#controle-de-acesso-identificacao-e-autenticacao)
* [Segurança da plataforma](#seguranca-da-plataforma)
* [Auditoria de logs](#auditoria-de-logs)
* [Desenvolvimento seguro](#desenvolvimento-seguro)
* [Segurança física e data centers](#seguranca-fisica-e-data-centers)
* [Gerenciamento de vulnerabilidades](#gerenciamento-de-vulnerabilidades)
* [Resposta e mitigação a incidentes](#resposta-e-mitigacao-a-incidentes)
* [Disaster Recovery e continuidade de negócios](#disaster-recovery-e-continuidade-de-negocios)

Algumas informações sobre segurança são restritas a usuários logados no Admin VTEX, por isso não estão presentes no VTEX Help Center. Para acessá-las, insira abaixo seu nome de conta VTEX:

<iframe src="https://help.vtex.com/insertaccountname?id=7AmPOGXykmE9SYyYDzdAZ4" title="Insira seu nome de conta e clique no botão." frameBorder="0" width="400" height="50"></iframe>

<div class="alert alert-warning">
  Se está tendo dificuldades para acessar o conteúdo dos FAQs, tente instalar a versão mais recente do aplicativo <code>vtex.admin-docs</code> usando a <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-installation-and-command-reference">CLI da VTEX</a> e repetir o processo.
</div>

## FAQ - Segurança

### Políticas e conformidade

#### A VTEX possui uma política de Segurança da Informação? Se sim, com qual periodicidade ela é revisada? A política foi distribuída e comunicada para toda companhia?

A VTEX adota uma abordagem rigorosa em relação à Segurança da Informação, revisando anualmente sua política de Segurança da Informação por meio do processo de gestão de documentos. Todos os colaboradores formalmente aceitam essa política, a qual é comunicada em toda a empresa por meio de nossos canais internos. Alinhada à norma ISO IEC 27001 e a frameworks reconhecidos pelo mercado, a política segue as melhores práticas de segurança, cumprindo também com as leis de proteção de dados e outras obrigações pertinentes à VTEX.

#### Os controles de Segurança da Informação da VTEX são auditados por empresas terceiras? Quais certificações que a VTEX possui?

A VTEX, comprometida com a transparência e a excelência em suas práticas, submete regularmente seus controles de Segurança da Informação a auditorias conduzidas por profissionais independentes. Esses auditores atuam de forma imparcial e objetiva, garantindo uma avaliação rigorosa e isenta das medidas implementadas pela VTEX.

A importância dessa prática reside na validação externa das políticas e procedimentos, assegurando que estão alinhados com as normas, frameworks e melhores práticas de segurança. A auditoria por profissionais independentes fortalece a confiança dos clientes, parceiros e demais partes interessadas, demonstrando o compromisso da VTEX em manter padrões elevados de Segurança da Informação. Atualmente possuímos as seguintes certificações:

* SOC 1 - Tipo 2: relatório que abrange os controles internos sobre os sistemas de relatórios financeiros.
* SOC 2 - Tipo 2: relatório cobrindo Segurança, Disponibilidade, Integridade, Confidencialidade e Privacidade.
* PCI DSS: validação de controles em torno dos dados do titular do cartão para reduzir a fraude de cartão de crédito.

Todas essas certificações estão disponíveis na página [Compliance](https://vtex.com/br-pt/compliance) no [VTEX Trust Hub](https://vtex.com/br-pt/trust/).

Além disso, a VTEX, como uma empresa de capital aberto, implementa os controles exigidos pela lei SOX (Sarbanes-Oxley).

#### Quem é responsável por gerenciar o programa de Segurança da Informação da VTEX?

Em nossa organização, contamos com lideranças executivas encarregadas do programa de Segurança da Informação, além de um Data Protection Officer (DPO) encarregado de coordenar o programa de Privacidade. As equipes, compostas por engenheiros e analistas altamente especializados em Segurança da Informação, estão estruturadas de maneira dedicada para oferecer suporte aos principais processos de segurança.

#### As políticas de Segurança da Informação são analisadas criticamente e mantidas para fazer cumprir as obrigações de segurança cibernética legais, regulamentares ou contratuais aplicáveis? Com qual frequência elas são revisadas?

Nossas políticas e procedimentos de Segurança da Informação foram elaborados com base nas melhores práticas e diretrizes de mercado, como a norma ISO IEC 27001. Realizamos a gestão desses instrumentos através de ferramentas internas da VTEX. Eles são revisados anualmente por profissionais especialistas em segurança e lideranças.

#### Como é gerenciado o calendário de auditorias e certificações da VTEX?

A VTEX conta com uma equipe especializada em segurança dedicada à gestão de certificações, garantindo a conformidade com todos os requisitos necessários. Esta equipe se empenha em assegurar que todas as certificações aplicáveis sejam atendidas de maneira eficaz, sendo renovadas sempre que necessário, reforçando o compromisso da empresa com os mais elevados padrões de segurança.

#### Quantas pessoas compõem a equipe de Segurança da Informação?

A VTEX conta com um time composto por gerentes, engenheiros e analistas altamente especializados em Segurança da Informação. Nossa equipe é organizada de forma estruturada e dedicada para oferecer suporte aos principais processos de segurança. Operando em regime de prontidão 24x7 e com presença em diferentes fusos horários, a equipe de segurança assegura uma cobertura contínua que vai além do horário comercial.

Além da equipe de Segurança da Informação, outros times da VTEX também contam com pessoas dedicadas que atuam nos processos de segurança, demonstrando o comprometimento global da organização com a integridade e proteção dos dados.

#### As políticas e controles de Segurança da Informação são aplicados contratualmente aos provedores terceiros?

Todos os fornecedores e parceiros envolvidos no processamento das nossas informações, ou de nossos clientes, são submetidos a acordos contratuais que incluem cláusulas de segurança. Esses contratos estabelecem diretrizes e requisitos específicos para garantir a proteção adequada dos dados, assegurando o comprometimento de todas as partes com elevados padrões de Segurança da Informação.

Saiba mais sobre nossos [provedores terceiros de infraestrutura](https://vtex.com/br-pt/subprocessors/).

### Educação e conscientização sobre segurança

#### A VTEX possui processos e procedimentos para a conscientização em segurança da informação?

A VTEX possui diversos treinamentos recorrentes de segurança da informação:

* Onboarding de segurança para todos os novos funcionários, abrangendo tópicos como a estrutura do time de segurança, canais de comunicação, documentos normativos, políticas, ferramentas homologadas e obrigações externas; boas práticas de segurança, senha segura, engenharia social e gestão de documentos.
* Treinamento mensal sobre boas práticas de segurança e dicas de práticas diárias. 
* Reuniões globais mensais sobre tópicos emergentes de segurança da informação, informações e atualizações sobre controles de segurança e boas práticas de segurança da informação.
* Phishings simulados enviados periodicamente, ferramenta para reporte de phishing e treinamento para todos que clicam nos testes.
* Iniciativas presenciais durante eventos sobre boas práticas de segurança, controles físicos e técnicos.

Há também um documento normativo específico para a área de conscientização e treinamento em segurança da informação, que descreve as iniciativas acima descritas.

#### Existem treinamentos técnicos para o time de Segurança?

São realizados treinamentos internos relacionados a práticas de desenvolvimento seguro, controles de segurança da informação, resposta a incidentes e outros treinamentos que abordam contexto técnico de segurança e privacidade. 

#### A VTEX adota um programa de conscientização focada na mitigação e proteção contra malwares? Os funcionários são instruídos sobre esse tema?

A empresa possui programas internos para aumentar a conscientização sobre malware e as possíveis consequências dele. Todos os funcionários da VTEX são informados regularmente por meio de comunicações internas e treinamento sobre os riscos associados ao malware, como o malware pode se instalar em um dispositivo e os indicativos de que a máquina foi infectada por malware. Em caso de suspeita de malware, os funcionários são instruídos a entrar em contato com a equipe responsável.

Adicionalmente, a proteção contra malware é feita com monitoramento constante por meio de nossas ferramentas de segurança.

O malware em ambientes de produção é monitorado ativamente pelo software anti-malware instalado nas instâncias. Caso um malware seja detectado, a instância afetada é encerrada para que os processos de escalonamento automático criem uma instância limpa do zero.

### Gestão de ativos

#### Como a VTEX gerencia os ativos mais críticos da sua organização?

Os ativos são gerenciados centralmente por meio de um sistema de gerenciamento de inventário que armazena e rastreia o proprietário, a localização, o status, a manutenção e as informações descritivas dos ativos de propriedade da AWS. Após a aquisição, os ativos são verificados e rastreados, e os ativos em manutenção são verificados e monitorados quanto à propriedade, status e resolução.

#### Como a VTEX inventaria os ativos dentro da companhia?

A VTEX opera 100% na nuvem e é a maior parceira da AWS na América Latina. Assim, não há necessidade de inventário de ativos físicos. Para inventário de software, usamos o inventário do AWS Systems Manager, que fornece visibilidade em nosso ambiente de computação da AWS. No cenário corporativo, utilizamos uma solução dedicada para realizar a gestão dos endpoints e aplicar regras de segurança.

#### Como a VTEX realiza a destruição e descarte dos seus ativos (mídias removíveis, pen drives e etc)?

Os dispositivos de armazenamento de mídia usados para armazenar dados do cliente são classificados como Críticos e tratados adequadamente, como de alto impacto, ao longo de seus ciclos de vida. Existem padrões rigorosos sobre como instalar, fazer manutenção e, eventualmente, destruir os dispositivos quando eles não forem mais úteis. Quando um dispositivo de armazenamento chega ao fim de sua vida útil, ele é desativado usando técnicas detalhadas no NIST 800-88.

### Privacidade e dados

#### A companhia possui uma Política de Privacidade e Proteção de Dados? Se sim, com qual periodicidade ela é revisada? A política foi distribuída e comunicada para toda companhia?

Sim, a VTEX possui Políticas de Privacidade e Proteção de Dados, que são revisadas anualmente. As Políticas de Privacidade Interna e Externa foram distribuídas e comunicadas para toda a companhia através do nosso canal de anúncios internos. A Política de Privacidade Interna é mantida na nossa ferramenta de documentos corporativos internos, para possibilitar o livre acesso pelos colaboradores. A [Política de Privacidade Externa](https://vtex.com/br-pt/privacy-and-agreements/external-notice/) pode ser acessada no website da VTEX.

#### A organização possui um DPO (Data Protection Officer) ou Encarregado de Proteção de Dados, com autoridade, missão, responsabilidade e recursos para coordenar, desenvolver e implementar os requisitos de privacidade aplicáveis e gerenciar os riscos de privacidade por meio do programa de privacidade?

Sim, a VTEX possui uma DPO responsável por coordenar o programa de privacidade: Angela Fonseca ([dpo@vtex.com.br](mailto:dpo@vtex.com.br)).

#### Que tipo de dados pessoais a VTEX trata em nome dos seus clientes?

Como operadora de dados, a VTEX trata dados pessoais de compradores somente quando necessário, em conformidade com os requisitos de cada módulo da plataforma para realizar operações de ecommerce. Confira a seguir a lista de dados pessoais que podem ser tratados pela VTEX:

* Nome
* Email
* Endereço IP
* Informações de navegação ([cookies](https://vtex.com/br-pt/privacy-and-agreements/vtex-platform-cookies-information/))
* Informações do carrinho
* Informações e histórico do pedido
* Endereço de entrega
* Número de identidade (quando exigido pelo país em que a loja opera)
* Histórico do cartão-presente
* Carrinho não utilizado
* Conversas do [Conversation Tracker](https://help.vtex.com/pt/tutorial/conversation-tracker)
* Senhas de sessões (criptografadas)
* Tokens gerados

A lista de dados acima está descrita no [Data Processing Addendum (DPA)](https://help.vtex.com/pt/tracks/data-and-privacy--4Lc0i0an0DgnEtB0AUwlcq/5f8hTEw3xOALgqzus9VXKd#data-processing-addendum-dpa).

#### Como a VTEX cumpre a LGPD (Lei Geral de Proteção de Dados) e o GDPR (_General Data Protection Regulation_)?

A VTEX está comprometida a cumprir todos os regulamentos de proteção de dados aplicáveis, incluindo a LGPD e o GDPR. Você pode ler mais sobre nossas políticas, contratos e compromisso com o compliance em proteção de dados em nosso website, na página [Privacidade & Contratos](https://vtex.com/br-pt/privacy-and-agreements/). 

Confira nosso [Data Processing Addendum (DPA)](https://vtex.com/br-pt/privacy-and-agreements/data-processing-addendum/), ou Adendo ao Tratamento de Dados Pessoais para compreender como tratamos os dados pessoais na VTEX.

#### Quais direitos dos titulares são garantidos pela plataforma VTEX?

A VTEX atua como operadora de dados em relação aos dados dos consumidores finais tratados por seus clientes (lojistas). Por isso, a VTEX não poderá responder às solicitações dos titulares diretamente. Caso receba alguma solicitação de titular (ou de seus representantes), a VTEX comunicará ao lojista, conforme indicado pelo titular.

Como controlador, o lojista define as bases legais e finalidades de tratamento de dados. Caso você não possa atender à solicitação por razões técnicas, contratuais, ou legais, é possível justificar o motivo da recusa.

Se você deseja assistência a respeito do exercício dos direitos dos titulares de algum dos consumidores da sua loja, acesse [Exclusão de dados de clientes](https://help.vtex.com/pt/tutorial/exclusao-de-dados-de-clientes--1R9Fn7A06Ifj4R9YD4JTKU). 

#### A VTEX possui uma política de Classificação da Informação?

A VTEX estabeleceu uma política de classificação de informações com o objetivo de guiar seus colaboradores sobre a correta categorização das informações, de acordo com seu nível de criticidade. Nossa política visa garantir a segurança, integridade e confidencialidade dos dados da VTEX, além de ajudar a gerenciar o acesso a essas informações de maneira apropriada.

Nossa política estabelece os níveis de classificação em público, interno e confidencial, e, especifica as medidas de segurança associadas a cada categoria.

#### Como os dados podem entrar em contato com terceiros, trabalhos terceirizados ou subcontratados e como essas interações são protegidas e monitoradas?

A infraestrutura da VTEX é inteiramente dependente de provedores terceirizados, assegurando que os dados dos locatários permaneçam inacessíveis para esses parceiros externos. Confira a lista completa de nossos subprocessadores em [Subprocessadores - VTEX](https://vtex.com/br-pt/privacy-and-agreements/subprocessors).

A segurança do processamento e envio de dados a terceiros é uma prioridade fundamental para a VTEX. Empregamos uma abordagem abrangente que combina tecnologia avançada, rigorosos processos de segurança e treinamento contínuo de nossa equipe. Utilizamos medidas tecnológicas, como criptografia robusta, para proteger os dados durante o envio e processamento. Além disso, implementamos processos rigorosos de segurança da informação e controles de acesso para garantir que apenas as pessoas autorizadas tenham acesso aos dados. Investimos constantemente em atualizações e melhorias para garantir a proteção eficaz dos dados que são compartilhados com parceiros terceirizados, entre outras medidas. Você pode conhecer nossas medidas de segurança em vigor em [Práticas de Segurança](https://vtex.com/br-pt/security/security-practices/).

#### Você pode garantir que os dados não migrem além de uma região geográfica definida?

Atualmente, a maioria dos dados armazenados pela VTEX são baseados na AWS us-east-1. Isso significa que o cliente não pode definir a região geográfica, mas também significa que, a menos que autorizado pelo cliente, a VTEX não migrará os dados para fora dessa região.

#### A VTEX utiliza a anonimização dos dados?

Em relação à anonimização de dados, a VTEX vem utilizando a tokenização como mecanismo para substituir qualquer dado sensível por outro valor. Basicamente, os dados originais são completamente irrecuperáveis.

#### Quais portas e protocolos a VTEX utiliza para transferir dados? Como cada um é protegido?

A VTEX não transfere dados via servidores, portanto, todos os nossos dados são transferidos via HTTPS via porta 443. Todos os dados sensíveis são armazenados com criptografia. Os dados em trânsito são criptografados com TLS 1.2 e os dados em repouso com algoritmo AES-256 ou RSA com chaves de pelo menos 2048 bits.

### Criptografia

#### Quais são as opções de criptografia em trânsito e em repouso?

A VTEX possui padrões de criptografia definidos para todos os seus clientes tanto para dados em repouso quanto para dados em trânsito. Para atender aos requisitos de certificações como PCI e SOC 2, a VTEX mantém os dados dos usuários sempre criptografados, tanto em armazenamento quanto em trânsito.

Os dados em trânsito são protegidos pelo padrão de segurança TLS 1.2, e conexões utilizando métodos de criptografia mais antigos e inseguros são negadas.

Ao trabalhar com armazenamento ou dados em repouso, a VTEX pode usar um dos seguintes algoritmos para suportar aplicativos que precisam criptografar dados:

* Criptografia bidirecional
    * RSA com chaves de 2048 bits ou superiores
    * AES-256
* Criptografia unidirecional
    * PBKDF2 baseada em SHA-256

Todos os sistemas relevantes realizam backups automáticos, sendo que a frequência padrão é diária, mas pode ser ajustada conforme necessário para garantir a integridade e disponibilidade dos dados. 

#### As chaves de criptografia são armazenadas em lugar seguro?

Para garantir um alto nível de segurança, as chaves de criptografia são fornecidas pelo serviço da AWS, reconhecido por sua confiabilidade e robustez em termos de segurança. Além disso, as chaves de acesso são armazenadas em um ambiente segregado, com proteção criptográfica adequada, garantindo a confidencialidade e a integridade das informações.

Um exemplo disso é o tratamento das senhas de login: antes de serem armazenadas, as senhas passam por um processo de hash utilizando o algoritmo PBKDF2 baseado em SHA-256. Nesse processo, apenas o valor resultante do hash é armazenado, garantindo que as senhas originais permaneçam seguras e não sejam acessíveis diretamente. Essas medidas adicionais de segurança garantem a proteção dos dados sensíveis e a tranquilidade dos usuários quanto à confidencialidade de suas informações.

### Controle de acesso, identificação e autenticação

#### A VTEX possui uma política de Gestão de Acessos Lógicos? Descreva de modo geral como funcionam seus processos relacionados a gestão de acesso.

A VTEX realiza a gestão de acesso lógico de maneira eficiente, garantindo o controle adequado e monitoramento das permissões de acesso aos sistemas e dados.

Nossas práticas asseguram a conformidade com políticas de segurança, implementando medidas como o Princípio do Mínimo Privilégio e Segregação de Funções para garantir que os usuários tenham acesso somente às informações necessárias para desempenhar suas funções específicas, baseando-se em necessidades legítimas.

Nosso procedimento de revogação de acessos é acionado de maneira imediata, com envolvimento direto do time de Segurança da VTEX.

Para o ambiente corporativo, adotamos uma política de Gestão de Acesso desenvolvida conforme as melhores práticas de mercado, incluindo a implementação de duplo fator de autenticação para acessar nossos servidores e a utilização de VPN, quando necessário.

#### No ambiente corporativo, como é operacionalizada a concessão de acessos aos sistemas internos da VTEX?

No ambiente corporativo, o processo de Gestão de Acessos, desde a concessão até a revogação, é conduzido por uma equipe centralizada encarregada de estabelecer as métricas e executar procedimentos de concessão de acesso. 

Dentro dessa equipe, existem grupos específicos que são designados para gerenciar sistemas críticos da empresa. Dessa forma, quando um colaborador necessita de acesso, ele inicia o processo através do nosso canal de atendimento digital, centralizado e automatizado.

O pedido então passa por uma avaliação, para garantir que o colaborador em questão deve e necessita receber o acesso solicitado. O fluxo passa por diversas etapas de autenticação, validação e aprovação formal da solicitação antes de ser concedido.

#### A VTEX limita o acesso de acordo com o princípio do privilégio mínimo?

A VTEX restringe o acesso de acordo com o princípio do privilégio mínimo. Isso significa que os usuários recebem [permissões de acesso](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) apenas ao estritamente necessário para desempenhar suas funções, minimizando o risco de exposição indevida de informações sensíveis e fortalecendo a segurança dos sistemas e dados.

#### Como é a arquitetura de autenticação e gestão de identidade disponível na plataforma da VTEX?

A plataforma VTEX possui uma solução de identidade pronta para uso, chamada VTEX ID. Também oferecemos suporte à integração de [provedores externos de identidade para SSO](https://developers.vtex.com/docs/guides/login-integration-guide) no Admin e no site da loja.

O Admin conta com [SAML 2.0](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2) como protocolo de autenticação, onde clientes da VTEX podem integrar um provedor de identidade existente usando esse padrão. O site da loja pode integrar com provedores externos de identidade pelo protocolo [OAuth 2.0](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2).

Temos um processo para [gerenciamento de acessos](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc), o que inclui acesso aos ambientes produtivos e ambientes relacionados.

Disponibilizamos links com conteúdos técnicos mais profundos sobre nossos controles de autenticação:

* [Login integration guide](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide)
* [SAML 2 integration](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide-admin-saml2)
* [OAuth 2.0 integration](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide-webstore-oauth2)

#### Quais os recursos de segurança na autenticação e gerenciamento de identidade relevantes estão disponíveis na plataforma? Por exemplo, complexidade de senha, reutilização de senha, tempo limite de sessão, bloqueio de conta, redefinição de senha e multifator de autenticação.

As senhas sob VTEX ID têm os seguintes requisitos:

* Comprimento mínimo de 8 + Token MFA de 6 dígitos.
* Mínimo de 1 caractere maiúsculo.
* Mínimo de 1 dígito.
* Mínimo de 1 caractere especial.
* Não é possível repetir as últimas 4 senhas usadas.

Os lojistas podem optar por [aplicar a expiração de senha](https://help.vtex.com/pt/tutorial/autenticacao--21CkKHLKP1o41lUpGhuRUs#aplicar-expiracao-de-senha) após um período específico para usuários do Admin, que pode ser 15, 30 ou 90 dias.

Os lojistas também podem optar por integrar um provedor de identidade externo, permitindo que definam suas próprias políticas de senha de forma personalizada. Confira [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) para mais informações.

No caso de bloqueios de conta devido a várias tentativas com senha incorreta (medida de segurança), usuários legítimos podem ainda realizar login por meio de outros métodos, como receber um token via e-mail ou usar um [login social integrado](https://help.vtex.com/pt/tutorial/configurar-login-com-facebook-e-google--tutorials_513) (Google ou Facebook), evitando assim possíveis explorações por força bruta de senhas fracas.

#### A plataforma da VTEX oferece logon único Single Sign-On (SSO)?

Oferecemos como uma camada adicional de segurança o recurso de Single Sign On (SSO), disponível tanto no Admin VTEX (ambiente administrativo) da loja quanto na autenticação dos clientes na própria loja.

O Security Assertion Markup Language (SAML) é adotado como padrão para a troca de dados de autenticação e autorização entre diferentes domínios. O SAML 2.0, um protocolo baseado em XML, facilita o SSO em navegadores web. Este protocolo utiliza tokens seguros, assinados digitalmente e mensagens criptografadas para a transmissão de dados entre partes confiáveis.

Para informações mais detalhadas, consulte o [guia de integração do SAML 2](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide-admin-saml2).

#### A plataforma possui a identificação, controle de acesso e a segregação dos dados dos clientes por meio de controles físicos ou lógicos?

A VTEX mantém a segregação dos dados dos clientes por meio de controles lógicos robustos. Todas as nossas aplicações são multilocatárias (_multitenant_) e exigem identificar a loja de origem em cada requisição, registrando todas as informações específicas de cada loja com o seu identificador correspondente. Dessa forma, toda a nossa infraestrutura de servidores é compartilhada entre todos os clientes. 

É importante ressaltar que não há nenhum método integrado de acesso; cada cliente tem acesso exclusivo às suas próprias informações, garantindo a segurança e privacidade dos dados.

Essa abordagem nos permite agilidade nas melhorias e correções de bugs, ao mesmo tempo em que possibilita escalabilidade eficiente para atender as necessidades específicas de cada cliente, sempre mantendo a segurança e resiliência.

#### Como o acesso do usuário é administrado na plataforma incluindo mover, adicionar, alterar e excluir contas?

A gestão de usuários administrativos é realizada de forma direta através do Admin VTEX. Os usuários administrativos são designados para perfis de acesso que podem conter uma ou várias [permissões](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3), as quais são estabelecidas pelo [usuário titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy) da conta ou por usuários com o perfil de acesso [User Administrator - RESTRICTED](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) ou com um perfil customizado que contenha o [recurso](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) _Save User_. Saiba mais no artigo [Gerenciar usuários](https://help.vtex.com/pt/tutorial/managing-users--tutorials_512).

#### A plataforma possui funcionalidades para gerenciar, organizar e customizar as permissões de gerenciamento na loja?

Toda ação na VTEX, como acessar uma página no Admin ou fazer uma chamada de API, envolve uma requisição à nossa infraestrutura. Para garantir a segurança dessas operações, existe o **License Manager**, um sistema responsável por verificar se um usuário possui as permissões adequadas para realizar uma ação na plataforma. Para facilitar o gerenciamento dessas permissões, o License Manager é baseado em recursos e perfis de acesso.

Um recurso é uma entidade associada a uma ação ou informação dentro de nossa infraestrutura. Por exemplo, o recurso**_ Product management_** permite que um usuário acesse e edite o formulário de cadastro de produtos no **Catálogo**. Para detalhes sobre cada recurso disponível, veja [Recursos do License Manager](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).

Um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) determina o conjunto de recursos que um grupo de usuários pode acessar na VTEX. Cada usuário administrativo pode ser associado a um ou mais perfis de acesso. Ao criar um novo perfil de acesso, você tem a opção de utilizar um dos [perfis predefinidos ](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy)disponibilizados pela VTEX ou de [criar um perfil customizado](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy), selecionando cada recurso necessário.

### Segurança da plataforma

#### A plataforma utiliza certificados SSL (Secure Sockets Layer)?

O SSL (Secure Sockets Layer) é um protocolo desenvolvido para elevar a segurança dos dados transmitidos pela internet. As conexões via SSL são particularmente recomendadas para envio de informações como números de cartão de crédito, senhas e qualquer outra informação sigilosa via internet.

Não é necessário solicitar a compra do certificado SSL. A VTEX gera um certificado SSL para a sua loja e garante sua renovação automática. O certificado é emitido via Let’s Encrypt e sua criação é responsabilidade da VTEX no momento do go-live da loja. Saiba mais em [Certificado de segurança (SSL)](https://help.vtex.com/pt/tutorial/certificado-de-seguranca-ssl--tutorials_1308).

#### Como é feito o gerenciamento de Patches de Segurança?

Nossos clientes não são responsáveis por aplicar patches, pois a VTEX conduz um processo de gerenciamento de patches que assegura o uso da mesma versão do software por todos os _tenants_.

A VTEX administra os lançamentos de software em atualizações principais, secundárias e de patches. As atualizações de patches e secundárias não impactam os contratos de API, podendo ser lançadas para todos os clientes sem afetar a funcionalidade das lojas.

Os componentes do sistema operacional e do aplicativo, como bibliotecas, são regularmente atualizados e passam por rigorosas verificações de segurança.

#### A plataforma é monitorada quanto a avaliação de performance? Quais variáveis definem a escalabilidade da plataforma?

A Plataforma da VTEX é uma solução SaaS (Software as a Service) e pode ser acessada utilizando qualquer navegador de Internet. A VTEX se encarrega de disponibilizar e atualizar regularmente a solução com novas funcionalidades e monitorar por completo seu funcionamento. Além disso, existem equipes especializadas que garantem escalabilidade da plataforma, através da realização de um monitoramento constante da performance de cada loja.

#### A plataforma restringe os acessos a IPs públicos da Internet?

O bloqueio de acesso ao ambiente administrativo da loja (Admin VTEX) para IPs específicos é possível. No entanto, o site da loja permanece sempre aberto ao público em geral. Para solicitar bloqueios específicos, favor entre em contato com o nosso [Suporte](https://help.vtex.com/pt/support).

#### A solução trabalha com protocolo seguro (HTTPS)?

A plataforma VTEX trabalha com protocolo seguro HTTPS e esse protocolo garante que a comunicação entre os componentes do sistema se mantenham protegidos e os dados sejam transportados de modo seguro.

#### A solução utiliza WAF?

Oferecemos a solução de WAF como parte do produto adicional [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). Confira a documentação do [WAF](https://help.vtex.com/pt/tutorial/web-application-firewall-waf--6BZYLlU03ws72iqIFF6jdn) para mais informações.

#### A plataforma VTEX utiliza o conceito API-First?

A VTEX prioriza o desenvolvimento da API first, onde todos os dados transacionados dentro da plataforma podem ser manipulados através de APIs. Saiba mais sobre as [APIs da VTEX](https://developers.vtex.com/docs/api-reference).

A VTEX segrega as camadas de back-end, APIs, front-end e componentes, garantindo que cada parte responsável interaja somente com a camada que lhe compete. A documentação de apoio ao desenvolvedor pode ser acessada no [Developer Portal](https://developers.vtex.com/).

#### A solução fornece detecções de anomalias, ou seja, possui a habilidade de detectar comportamentos incomuns e possíveis tráficos maliciosos, além de comportamento de contas de usuário?

A plataforma VTEX é constantemente monitorada por um sistema de monitoramento, gerenciado pelo time de Segurança da VTEX. Temos um conjunto abrangente de controles que abarca toda a plataforma e está conectado aos sistemas 100% do tempo para detectar uma ampla gama de anomalias. Esse monitoramento é um esforço contínuo e gradual, e nossa equipe responsável está constantemente trabalhando para adicionar novas regras e alertas.

Alguns desses alertas são encaminhados para nossas equipes internas, enquanto outros são direcionados diretamente para os responsáveis de cada loja. Alguns alertas são apenas registrados e não geram notificações. Por exemplo, as tentativas de login com falha são limitadas e registradas, mas não geram alertas. No entanto, o proprietário da conta receberá um e-mail se um usuário modificar as credenciais de administrador.

O produto adicional [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) gera alguns alertas extras para fortalecer ainda mais a sua segurança e confere mais independência para que os lojistas possam fazer seu próprio monitoramento.

#### Como a plataforma é monitorada quanto a avaliação de performance? Quais variáveis definem a escalabilidade da solução?

Nossa plataforma é equipada com diversos indicadores de desempenho que nos alertam sobre possíveis problemas. Alguns exemplos desses indicadores incluem a medição da CPU e memória dos servidores, o tempo de resposta de cada requisição e o volume médio de vendas. Mantemos um monitoramento constante desses e de vários outros indicadores, com o suporte de uma inteligência artificial baseada em uma heurística proprietária. Essa IA identifica e notifica nossa equipe sempre que há um desvio em relação ao padrão esperado.

Para lidar com esses alertas, contamos com uma equipe de engenharia disponível 24 horas por dia, 7 dias por semana. Essa equipe está sempre de plantão e pronta para intervir em caso de ocorrências técnicas, garantindo assim a estabilidade e o bom funcionamento contínuo da nossa plataforma.

### Auditoria de logs

#### Qual é o conteúdo mínimo dos logs que são registrados pela plataforma?

Todas as operações sensíveis que ocorrem na plataforma são automaticamente registradas em logs e não é possível desabilitar essa funcionalidade. A VTEX armazena todos os logs de erros da plataforma VTEX em um software SIEM (Security Information and Event Management), cujos dados são acessados pelo time VTEX com finalidade de análise e melhoria do produto. Além disso, a VTEX mantém monitores para determinados padrões nos logs da aplicação e da infraestrutura que indiquem potencial risco de segurança para o sistema, emitindo alertas ou até mesmo contramedidas automáticas quando eles são identificados.

Além disso, a VTEX registra diversas operações, seus autores e os horários em que elas ocorreram no [Audit](https://help.vtex.com/pt/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA), um módulo disponível no Admin VTEX para pesquisar e investigar este histórico com o auxílio de filtros. Cada módulo da plataforma possui uma equipe de desenvolvimento dedicada que analisa e decide quais informações são registradas neste módulo. Confira a lista de [eventos disponíveis no Audit](https://help.vtex.com/pt/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ).

#### Como os clientes da VTEX podem obter acesso em tempo real a todos os logs da plataforma?

A VTEX não concede acesso aos seus sistemas internos, a fim de preservar a privacidade e a segurança dos nossos clientes, além de garantir conformidade com as normas e legislações em vigor.

No entanto, disponibilizamos logs de diversos [eventos](https://help.vtex.com/pt/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ) no [Audit](https://help.vtex.com/pt/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA) e permitimos que nossos clientes solicitem logs de eventos específicos ao [Suporte](https://help.vtex.com/pt/support). Além disso, eles podem optar por implementar uma camada de proxy reverso antes da VTEX, o que proporciona uma maior visibilidade sobre as solicitações que chegam ao seu ambiente. Essa abordagem permite que os clientes tenham um controle mais detalhado e personalizado sobre o fluxo de dados em sua infraestrutura, mantendo a segurança e a privacidade conforme necessário.

### Desenvolvimento seguro

#### Quais são as boas práticas de segurança para desenvolvimento que a companhia utiliza?

O processo de desenvolvimento de software segue etapas automatizadas para garantir eficiência. Quando uma equipe de desenvolvimento finaliza uma parte do software, ela é marcada com uma identificação no sistema de controle de versão. Isso desencadeia automaticamente a sua implementação em um ambiente de teste chamado `BETA` ou em produção real, conhecido como `STABLE`.

Além dos testes feitos por especialistas ou até mesmo pelos próprios clientes no ambiente `BETA`, há testes automáticos que são atualizados para se ajustarem a novidades no software ou em sua infraestrutura. Esses testes são essenciais para detectar problemas que possam surgir na versão nova ou devido a questões técnicas. Essa abordagem assegura a estabilidade e a qualidade do software durante todo o seu ciclo de vida.

#### Os ambientes de Desenvolvimento, de Staging/QA e de Produção são totalmente segregados? Os desenvolvedores da companhia não possuem acesso ao ambiente de produção?

Sim, todos os ambientes são totalmente segregados. O ambiente de produção só pode ser implantado por meio do processo de gerenciamento de mudanças, que é automatizado.

#### Existem diretrizes e padrões de codificação de segurança usados para o desenvolvimento de aplicativos?

Os desenvolvedores na VTEX seguem os princípios do OWASP para garantir a qualidade e a segurança do código. A revisão por pares é obrigatória, o que adiciona uma camada adicional de garantia de qualidade e segurança. Além disso, cada código de produção passa pela aprovação de pelo menos dois desenvolvedores com conhecimento em segurança.

Os engenheiros da VTEX adotam os métodos delineados no OWASP Top 10 para prevenir a inserção de código malicioso. Para reforçar ainda mais a segurança, a VTEX implementou um sistema de escaneamento de código no repositório, que conta com uma revisão dedicada de especialistas em Segurança.

Todos os membros da equipe são treinados em desenvolvimento seguro, e esse conhecimento é continuamente aprimorado através de treinamentos e testes periódicos.

#### A companhia realiza análise de vulnerabilidades em bibliotecas e pacotes de Software?

Sim, a VTEX possui um processo de análise de vulnerabilidades em bibliotecas e pacotes de software implementado como parte de suas práticas de segurança. Esta análise é conduzida regularmente para identificar quaisquer vulnerabilidades ou falhas de segurança presentes nas bibliotecas e pacotes utilizados no desenvolvimento de software. Essa abordagem proativa ajuda a garantir que apenas componentes seguros e livres de vulnerabilidades sejam integrados aos sistemas da empresa, fortalecendo assim a segurança de suas soluções e protegendo os dados dos clientes.

### Segurança física e data centers

#### A VTEX possui medidas de segurança para a proteção física dos dispositivos e equipamentos de rede?

A plataforma VTEX é uma solução SaaS (Software as a Service) hospedada em um ambiente altamente controlado e seguro. Como parte de nossa política de gestão de riscos, os fornecedores são periodicamente reavaliados em relação às suas práticas de segurança e conformidade. É importante ressaltar que a VTEX é uma empresa 100% Cloud Commerce, operando exclusivamente na infraestrutura da Amazon Web Services (AWS). Não possuímos servidores físicos próprios para prestação de serviços.

Todos os dados, tanto os nossos quanto os de nossos clientes, são hospedados na AWS, um dos principais provedores de serviços de infraestrutura em nuvem pública do mundo. Mantemos acordos com a AWS para garantir uma linha de base de segurança física e proteção ambiental para a execução de nossos serviços. Recomendamos que os clientes verifiquem os [controles de segurança física fornecidos pela AWS](https://aws.amazon.com/pt/compliance/data-center/controls/), como parte de sua diligência ao considerar a segurança de seus dados na plataforma VTEX.

#### Como a VTEX aplica medidas de segurança física para a proteção do Data Center?

A VTEX é uma empresa inteiramente baseada em Cloud Commerce, utilizando a Amazon Web Services (AWS) como provedora de seus data centers. A AWS opera seus data centers em conformidade com as [diretrizes do Tier III+](https://aws.amazon.com/pt/compliance/uptimeinstitute/), garantindo assim um alto padrão de confiabilidade e segurança.

Em relação à segurança de nossos escritórios, a VTEX mantém escritórios em várias partes do mundo, e implementa rigorosos controles de segurança física em todas as suas instalações. Isso inclui monitoramento e controle de acesso em todos os escritórios, supervisionados por uma equipe de segurança profissional. O acesso físico é estritamente controlado nos pontos de entrada dos edifícios, utilizando sistemas de vigilância como catracas e outros dispositivos eletrônicos. Todos os acessos autorizados são registrados de forma a garantir um controle completo sobre as entradas e saídas.

Além disso, nossos escritórios são equipados com sistemas de Câmeras de Televisão de Circuito Fechado (CFTV), garantindo uma vigilância contínua e registro de imagens de acordo com os requisitos legais e de conformidade. Também implementamos controles avançados de energia e supressão de incêndios, alinhados com as melhores práticas do setor, a fim de evitar falhas e surtos elétricos, garantindo a segurança e integridade de nossas instalações físicas.

#### Em quais países e localidades os data centers estão localizados?

A VTEX utiliza principalmente as seguintes regiões de dados dentro da AWS para cada finalidade a seguir:

* AWS Northern Virginia: Armazenamento de dados primário
* AWS norte da Califórnia: Local de backup

### Gerenciamento de vulnerabilidades

#### A VTEX realiza regularmente scans de vulnerabilidade, eles são realizados em qual periodicidade?

As verificações de vulnerabilidade são executadas continuamente. Cada uma delas deve ser executada novamente até que sejam aprovadas, sem problemas apontados para serem aceitos pelo auditor durante nossos períodos de recertificação.

#### As customizações ou configurações do produto realizadas pelos clientes poderão introduzir vulnerabilidades de segurança na plataforma? Se sim, como a eventualidade será gerenciada?

Os lojistas e quaisquer agências implementadoras contratadas por eles têm a liberdade de realizar personalizações e customizações na plataforma dentro de seus próprios ambientes. No caso de identificação de vulnerabilidades nos sistemas da VTEX, nossa equipe de segurança e desenvolvimento atua de forma ágil para tratar essas questões. Devido à natureza personalizável da plataforma, é de responsabilidade do lojista e da agência implementadora lidar com as vulnerabilidades que possam surgir em decorrência de customizações feitas durante o desenvolvimento. Confira [Responsabilidades no ecossistema VTEX](https://help.vtex.com/pt/tutorial/responsabilidades-no-ecossistema-vtex--3vL9aWICDr3WR64DYi1fJ3#agencias-implementadoras) para mais informações.

### Resposta e mitigação a incidentes

#### Existe um Plano de Resposta a Incidentes formal?

Sim, a VTEX conta com um protocolo formalizado para Resposta a Incidentes de Segurança, abrangendo as etapas essenciais do processo: Preparação, Identificação do Incidente, Contenção, Erradicação, Recuperação e Pós-Incidente. Esse procedimento também inclui um plano de comunicação integrado que é aplicado em todas as fases da resposta. Além disso, mantemos playbooks detalhados para orientar a equipe de atendimento e realizamos testes de invasão (Gray Box) anualmente para avaliar e fortalecer constantemente nossas medidas de segurança.

#### A companhia possui um calendário de testes de penetração? Qual a periodicidade?

Os pentests são conduzidos semestralmente na VTEX. Lojistas que desejam realizar testes de penetração e varreduras de vulnerabilidade em seus ambientes precisam contratar o produto adicional [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) e são incentivadas a compartilhar os resultados com a VTEX, permitindo que nossa equipe de Segurança aborde quaisquer possíveis problemas identificados.

#### A VTEX possui um procedimento de Resposta a Incidentes envolvendo vazamento de dados e em conformidade com as leis de proteção de dados pessoais?

Sim, o Plano de Resposta a Incidentes de Segurança da VTEX prevê incidentes relacionados a vazamento de dados e está em conformidade com as leis de proteção de dados pessoais. Ele abrange as etapas essenciais do processo: Preparação, Identificação do Incidente, Contenção, Erradicação, Recuperação e Pós-Incidente. Esse procedimento também inclui um plano de comunicação integrado que é aplicado em todas as fases da resposta. 

#### Quais controles a VTEX utiliza para mitigar ataques Ransomware?

A VTEX utiliza uma abordagem abrangente para mitigar ataques de ransomware, empregando medidas como antivírus avançados, firewalls, e filtros de conteúdo para bloquear o malware. Além disso, mantemos backups regulares de dados críticos, garantindo a capacidade de restauração sem ceder a exigências de criminosos. Atualizações de segurança e treinamento de conscientização para funcionários são prioridades, juntamente com monitoramento constante de atividades em busca de comportamentos suspeitos. Essas medidas combinadas formam uma defesa robusta contra a ameaça crescente de ransomware.

### Disaster Recovery e continuidade de negócios

#### A VTEX possui um Plano de Continuidade de Negócios?

A VTEX possui um plano de continuidade de negócios cuidadosamente elaborado para enfrentar os desafios decorrentes de emergências. Este plano visa estabelecer uma base sólida para a rápida e eficaz retomada das operações habituais, independentemente da natureza da emergência, garantindo assim uma transição suave e minimizando possíveis impactos.

#### A VTEX possui um Plano de Disaster Recovery?

A VTEX adota um plano de Recuperação de Desastres centrado na garantia da continuidade operacional e na disponibilidade de recursos críticos em situações de emergência. Este plano abrange diretrizes detalhadas sobre como agir diante de incidentes não planejados, caracterizados como crises, que podem surgir de desastres naturais, ataques cibernéticos ou quaisquer outros eventos disruptivos. Incorporamos etapas cruciais de recuperação, incluindo a definição dos objetivos RPO (Recovery Point Objective) e RTO (Recovery Time Objective), bem como a realização de testes de backup, assegurando a eficácia e prontidão do plano em cenários reais.

#### A VTEX testa periodicamente o Plano de Recuperação de Desastres?

O Plano de Recuperação de Desastres é submetido a testes pelo menos uma vez por ano para garantir sua eficácia. Não testamos todo o plano em um único evento; diferentes componentes ou processos com ciclos de vida independentes são testados conforme sua relevância e frequência exigida. De qualquer forma, cada parte passa por testes anuais.

Se alguma parte do plano for considerada ineficaz, uma nova versão do processo é desenvolvida para resolver o problema. Tradicionalmente, os eventos que antecedem a Black Friday e a Cyber Monday oferecem a oportunidade ideal para conduzirmos os testes de recuperação de desastres.
