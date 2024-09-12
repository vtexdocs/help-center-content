---
title: 'FAQ - Segurança 2'
id: 1ayXEtqawI9yuxFXutiITh
status: ARCHIVED
createdAt: 2022-05-26T13:33:48.633Z
updatedAt: 2024-05-28T16:48:10.138Z
publishedAt: 
firstPublishedAt: 2022-06-09T22:09:20.893Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: faq-seguranca-2
locale: pt
legacySlug: faq-seguranca-2
subcategoryId: unknown-subcategory
---

# FAQ - Segurança 2

Tópicos:
- [Controles criptográficos](#controles-criptograficos)
- [Segregação de ambientes](#segregacao-de-ambientes)
- [Classificação e proteção de dados](#classificacao-e-protecao-de-dados)
- [Segurança de rede](#seguranca-de-rede)
- [Arquitetura de segurança](#arquitetura-de-seguranca)
- [Segurança física e data center](#seguranca-fisica-e-data-center)
- [Gestão de vulnerabilidade](#gestao-de-vulnerabilidade)
- [Monitoramento de segurança](#monitoramento-de-seguranca)
- [Resposta e mitigação a incidentes](#resposta-e-mitigacao-a-incidentes)
- [Disaster recovery e continuidade de negócios](#disaster-recovery-e-continuidade-de-negocios)

Confira outros tópicos na parte 1 deste FAQ. Insira abaixo seu nome de conta VTEX para acessar a documentação.
<iframe src="https://help.vtex.com/insertaccountname?id=7AmPOGXykmE9SYyYDzdAZ4" title="Insira seu nome de conta e clique no botão." frameBorder="0" width="400" height="50"></iframe>

## Controles criptográficos
### Quais são todas as opções de criptografia configuráveis e os níveis de criptografia permitidos pela solução?

A VTEX possui padrões de criptografia definidos para todos os seus clientes tanto para dados em repouso quanto para dados em trânsito. Os dados em trânsito requerem TLS 1.2 ou superior para garantir que apenas métodos de criptografia seguros sejam usados. Esse canal é a melhor opção para proteger esse tipo de informação, pois essa abordagem simplifica a implementação ao não colocar muita responsabilidade nos clientes que podem variar de serviços pesados do lado do servidor a aplicativos JavaScript de navegador leves. Ao trabalhar com armazenamento ou dados em repouso, a VTEX pode usar um dos seguintes algoritmos para suportar aplicativos que precisam criptografar dados:
- Criptografia bidirecional
RSA com chaves de 2048 bits
AES-256

- Criptografia unidirecional
PBKDF2 baseada em SHA-256 

### As chaves de criptografia são armazenadas em lugar seguro? 

Chaves de criptografia são providas pelo serviço da AWS. Chaves de acesso são armazenadas em ambiente segregado com devida proteção criptográfica. Por exemplo, senhas de login têm seu hash calculado (algoritmo PBKDF2 baseado em SHA-256) e apenas esse valor é armazenado. 

## Segregação de ambientes
### Existe uma segregação dos ambientes dentro da companhia? 

Nosso ambiente é um ambiente multi-tenant de nuvens, que serve diferentes características e módulos de nossa plataforma. A plataforma implementa um processo e arquitetura de alto nível para segregação lógica, o que significa que, em circunstâncias comuns, o software do cliente, as informações e os dados fornecidos pelo cliente não são compartilhados entre si. Em termos de produção x estágio x pré-produção e/ou outros ambientes, aplicados em diferentes estágios de nosso DLC, mantemos ambientes segregados em nível de conta. Além disso a VTEX opera 100% na nuvem da AWS, nossa infraestrutura é segmentada através de sub-redes VPC (Amazon Virtual Private Cloud), Security Groups e ACL`s. Além disso, qualquer acesso ao ambiente de produção é feito por meio de uma VPN (Virtual Private Network). 

## Classificação e proteção de dados
### A VTEX utiliza a anonimização dos dados? 

Em relação à anonimização de dados, a VTEX vem utilizando a tokenização como mecanismo para substituir qualquer dado sensível por outro valor. Basicamente, os dados originais são completamente irrecuperáveis. 

## Segurança de rede
### As redes internas de produção são segregadas de alguma forma, por exemplo, restringindo e/ou filtrando o tráfego entre as redes?

As redes de produção são completamente isoladas das redes externas. Os funcionários da VTEX responsáveis pela operação dos ambientes de produção podem precisar de eventual conexão VPN (Virtual Private Network) para acessar a rede de produção. Os Load Balancers acessados externamente são os únicos objetos acessados através da DMZ e  as camadas da plataforma e banco de dados residem em sub-redes separadas da DMZ, e possuem camadas de proteção  para que sejam acessadas.  

### A VTEX utiliza proteção de acesso às redes através de firewalls implementados? 

Sim, além dos firewalls locais dos sistemas operacionais nos servidores, contamos com AWS Security Groups, configuração ELB e roteamento VPC para obter a funcionalidade do firewall. Como a implantação de nossos aplicativos é feita automaticamente e todos os logs são coletados e concentrados, nem mesmo nossa equipe precisa de acesso diário aos nossos servidores. O acesso usual ao ambiente de produção ocorre usando o console AWS ou nossos próprios aplicativos web e APIs. Por esse motivo, nossos Grupos de Segurança e ELBs são configurados para que apenas o acesso HTTP e HTTPS seja permitido para ELBs que expõem algum recurso publicado. Quando algum acesso adicional for eventualmente necessário, poderá ser solicitado e disponibilizado temporariamente para o efeito específico. 

### Que controles a VTEX utiliza para mitigar ataques DDoS (Distributed Denial of Service)?

A defesa contra o ataque DDoS e Brute Force acontece em duas camadas. Ele é composto por uma camada no nível CDN e uma regra de limitação adaptativa que é implementada no proxy frontal que fica na frente de cada um dos microsserviços VTEX. Ataques DDoS também são mitigados pelo AWS shield. 

### A solução possui IDS e IPS? Se sim, com que frequência as regras IDS / IPS são revisadas?

Utilizamos como solução IDS/IPS a ferramenta Lacework. A ferramenta não é baseada em regras, ela faz a detecção de intrusão baseada em machine learning. O método do Lacework se baseia em gerar modelos baseados no acesso comum (que acontece diariamente) e notificar em caso de acessos “diferentes”. Com isso a gente não precisamos ficar criando regras, as regras são criadas automaticamente dado o uso da plataforma. 

## Arquitetura de segurança 
### Como funciona o processo de Hardening? 

A VTEX sempre cria seus ambientes usando a AMI (imagem de máquina da Amazon ) mais recente fornecida pela AWS para cada serviço de implantação, seja Elastic Beanstalk, OpsWorks ou simples Cloud Formation. Ao fazer isso, aproveitamos nossa segurança na proteção que a AWS já oferece para instâncias implantadas por seus serviços e complementamos  as configurações de segurança com nossos processos de hardenização especificos para cada tipo de ativo. 

### Quais são os recursos de segurança da infraestrutura que hospeda a plataforma?

A plataforma VTEX é uma solução SaaS (Software as a Service) e fica hospedada em um ambiente controlado e com controles regidos de segurança implementados, incluindo: Proteção de Rede (filtragem e proteção de tráfego de entrada e saída, WAF, monitoramento automatizado em tempo real e alerta de ambientes), baseline, hardenização dos ativos e controles de acessos físicos e lógicos e todos os outros necessários para garantir que a plataforma esteja cada vez mais seguro e em conformidade.  

### Como funciona a configuração inicial de segurança da solução? 

Por padrão, o ambiente e as instâncias implantadas que receberão solicitações de locatário já estarão protegidos, pois são compartilhados entre todos os locatários e implantados de acordo com nosso processo automatizado.
A configuração do locatário do ambiente também pode afetar a segurança, e a documentação está disponível no [VTEX Help Center](https://help.vtex.com/) para garantir que as configurações adequadas sejam aplicadas.  

## Segurança física e data center
### A VTEX possui medidas de segurança para a proteção física dos dispositivos e equipamentos de rede? 

A VTEX é uma empresa 100% Cloud Commerce (AWS), não possuindo nenhum servidor/máquina física utilizada para prestar os serviços.
Os nossos dados e dos nossos clientes estão  hospedados na Amazon (Amazon Web Services) um provedor de serviços de infraestrutura em nuvem pública, A VTEX tem acordos com esses fornecedores para garantir uma linha de base de segurança física e proteção ambiental para executar nossos serviços. Verifique [os controles de segurança fisícos que a AWS disponibiliza]( https://aws.amazon.com/pt/compliance/data-center/controls/). 

### Como a VTEX aplica medidas de segurança física para a proteção do Data Center?

A VTEX é uma empresa 100% Cloud Commerce  que utiliza como provedor de Data Center a AWS. A AWS opera seus datacenters em conformidade com as [diretrizes do Tier III+](https://aws.amazon.com/pt/compliance/uptimeinstitute/).

Sobre segurança em seus escritórios, a VTEX possui escritórios espalhados pelo mundo inteiro, possuímos controle de segurança física, tais como monitoramento e controle de acessos em todos os escritórios da VTEX. O acesso físico é controlado nos pontos de entrada do edifício pela equipe de segurança profissional que utiliza sistemas de vigilância, como catracas e outros meios eletrônicos. Esses equipamentos registram as saídas e entradas das pessoas autorizadas através dos registros. 

Os escritórios possuem Câmera de Televisão de Circuito Fechado (CFTV). As imagens são mantidas de acordo com os requisitos legais e de conformidade. Também possuímos controles de energia e supressão de incêndio que estão alinhados com as medidas líderes do setor para ajudar a evitar falhas e surtos elétricos.  

### Em quais países e localidades os data centers estão localizados?

A VTEX usa principalmente as seguintes regiões de dados dentro da AWS para cada finalidade respectiva:
 - AWS Northern Virginia: Armazenamento de dados primário
 - AWS norte da Califórnia: Local de backup 

## Gestão de vulnerabilidade
### Qual é o tempo de correção de vulnerabilidades? 

O nosso procedimento de gestão de vulnerabilidade, estabelece um tempo para correção varia de acordo com a criticidade e complexidade da vulnerabilidade. 

### A VTEX permite os clientes realizem verificações de vulnerabilidade através de scans, varreduras e pentest independentes pré-organizadas por um consultor independente?

Como as instâncias VTEX são hospedadas na infraestrutura da AWS, não é possível realizar auditorias pessoais dos sistemas. A AWS possui vários [programas de conformidade](https://aws.amazon.com/compliance/programs/) que garantem que as instâncias sejam mantidas em um ambiente seguro. A VTEX não permite acesso às instalações e arquivos com o intuito da condução de auditoria nos sistemas e procedimentos internos. A VTEX possui relatórios elaborados por empresa de auditoria especializada independente. Para fins de demonstração da conformidade e comprometimento da empresa com privacidade, segurança, compliance e governança são disponibilizados documentos, políticas e certificações no [portal de segurança VTEX](https://vtex.com/us-en/trust/). Além disso, reforçando seu comprometimento em garantir uma infraestrutura segura para seus clientes, a VTEX está sempre em busca de novas certificações.

Em relação às varreduras de vulnerabilidades, o cliente pode realizar tais testes em seu ambiente a qualquer momento, desde que sejam seguidas duas condições:
- O cliente não pode usar ataques reais para tentar derrubar sistemas de produção
- O locatário não pode tentar acessar dados que não lhe pertençam 

### A VTEX realiza regularmente scans de vulnerabilidade, eles são realizados em qual periodicidade?

As verificações de vulnerabilidade são executadas continuamente. Cada uma delas deve ser executada novamente até que sejam aprovados, sem problemas apontados para serem aceitos pelo auditor durante nossos períodos de recertificação. 

### Explique o processo de divulgação de vulnerabilidades da plataforma para os clientes, em particular como e quando os clientes são notificados e quais informações serão compartilhadas?

A VTEX possui um Plano Gestão de Vulnerabilidades documentado que inclui alertas automáticos e engenheiros de plantão para mitigar quaisquer problemas que surjam. Além da mitigação imediata, todos os detalhes relacionados a um incidente serão coletados e compartilhados com os inquilinos afetados o mais rápido possível, incluindo um cronograma de eventos, ações tomadas e riscos potenciais. 

### Como o gerenciamento de vulnerabilidades é realizado de forma concreta? O processo está documentado? Até que ponto as vulnerabilidades identificadas são gerenciadas e corrigidas? 

As varreduras de vulnerabilidade são realizadas continuamente, sendo restritas a um número autorizado de pessoas e utilizando sistemas aprovados e dedicados. As vulnerabilidades do sistema e do software serão corrigidas usando um processo de gerenciamento de patches. A equipe garante a coordenação entre todos os desenvolvedores envolvidos e ajuda a reproduzir e, se necessário, desenvolver um patch de segurança. Após a implantação, outro teste é executado para garantir que a correção seja efetiva. Se forem alcançados resultados positivos, a questão é encerrada e, se necessário, uma autópsia é criada de forma semelhante à fase de Gerenciamento de Problemas. Além disso, nossos clientes podem realizar varreduras de vulnerabilidades sempre que julgarem necessário e compartilhar o resultado com a VTEX para ajudar a mitigar as vulnerabilidades encontradas. O tempo exato necessário varia de acordo com a vulnerabilidade. Alguns sistemas sensíveis também contam com IDS e antivírus para detecção e gerenciamento de incidentes. Muitos lojistas também encomendam seus próprios testes de penetração regularmente, o que significa que a plataforma VTEX é exaustivamente testada várias vezes por mês. Após o pentesting, realizamos planos de ação para mitigar eventuais problemas. 

### As customizações ou configurações do produto realizadas pelos clientes poderá introduzir vulnerabilidades de segurança na plataforma? Se sim, como a eventualidade será gerenciada?

Os clientes  podem realizar quaisquer personalizações e/ou customizações na plataforma em seu ambiente. 
As vulnerabilidades envolvendo os sistemas da VTEX são tratadas de forma ágil por nossa equipe de segurança e desenvolvimento. Lembrando que como a plataforma é personalizável é de responsabilidade do cliente vulnerabilidades envolvendo customizações realizadas no desenvolvimento.  

### Explique o processo de divulgação de vulnerabilidades dessa solução para clientes, em particular como/quando os clientes são notificados e quais informações serão compartilhadas?

A VTEX possui um Plano Gestão de Vulnerabilidades documentado que inclui alertas automáticos e engenheiros de plantão para mitigar quaisquer problemas que surjam. Além da mitigação imediata, todos os detalhes relacionados a um incidente serão coletados e compartilhados com os tenants afetados o mais rápido possível, incluindo um cronograma de eventos, ações tomadas e riscos potenciais. 

## Monitoramento de segurança 
### Os logs dos sistemas são protegidos contra alterações, falsificações ou acessos indevidos?

As nossas aplicações possuem logs de auditoria e coleta logs relevantes para que sejam armazenamos e correlacionados. Esses logs são mantidos de acordo com  as nossas normas e lesgilações aplicavéis. 
Os eventos e a autenticação (falhas de login, sucessos e bloqueios de contas) da plataforma são registrados de acordo com a necessidade regulatória, de segurança, privacidade e para nossas análises internas. 

### A companhia mantém os logs das requisições de acessos?

Todas as mudanças no ambiente produtivo são autenticadas, logadas e auditáveis, através do AWS Cloudtrail. Temos um processo in-place para gerenciamento de acessos, o que inclui acesso aos ambientes produtivos e ambientes relacionados. Outros baselines de segurança, como segregação de ambientes e duplo fator de autenticação fazem parte de alguns sistemas e estão em fase de rollout para todas os sistemas da VTEX.

### Sua companhia registra os eventos de segurança?

Utilizamos uma ferramenta para centralizar os logs, e também como forma de implementar features de SIEM. Logs são, em geral, mantidos por 18 meses. Utilizamos soluções próripias e da AWS como ferramentas de análise contínua de segurança e análise de vulnerabilidades em Nuvem. Quando não contínuas, o uso dessas ferramentas é de frequência mínima trimestral.  A VTEX se encarrega de disponibilizar e atualizar regularmente a solução com novas funcionalidades e monitorar por completo seu funcionamento. Além disso, existe uma equipe especializada que garante o potencial de escala da solução em ações sazonais ou aumento da demanda e um monitoramento constante da performance na loja baseada em uma heurística própria.

### Você protege seu servidor de e-mail contra spoofing?

A VTEX utiliza o Google Workspace como ferramenta de comunicação. Para proteger nosso servidor de e-mail contra falsificação, configuramos tanto o SPF, que especifica os servidores e domínios autorizados a enviar e-mails em nome de nossa organização, quanto o DKIM, que adiciona uma assinatura digital a cada mensagem enviada. Dessa forma, os servidores de destino podem confirmar que a mensagem veio de nossa organização. 

### Vocês utilizam antivírus no ambiente corporativo? 

Sim, possuímos uma tecnologia de antivírus e exigimos a obrigatoriedade em todos os endpoints e servidores com o objetivo de garantir a nossa segurança e a dos nossos clientes.  

## Resposta e mitigação a incidentes
### Existe um Plano de Resposta a Incidentes formal?

Sim, a VTEX possui  um procedimento de Resposta a Incidente de Segurança documentado e contemplando as principais etapas do processo: Preparação, Identificação do Incidente, Contenção, Erradicação, Recuperação e Pós-Incidente. O procedimento também considera um plano de comunicação que permeia todas as etapas de Resposta. Além disso possuímos playbooks de atendimento e testes de invasão (Gray Box) anual.  

### O Plano de Resposta a Incidentes exige a notificação ao terceiro quando o acesso não autorizado aos Sistemas e Dados com Escopo for confirmado?

Sim, possuímos um prazo de 24 horas para notificar clientes afetados por incidentes de Segurança. 

### A companhia possui um calendário de testes de penetração? Qual a periodicidade?

Os pentests são realizados com periodicidade anual dentro da companhia Além disso, os clientes têm o direito de realizar testes de penetração e varreduras de vulnerabilidade em seu ambiente sempre que desejar e desde que seja avisado com antecedência. Você pode então compartilhar os resultados com a VTEX, para que possamos resolver quaisquer problemas potenciais. Por questões de segurança não compartilhamos os resultados dos nosso pentests.  

### A VTEX possui um procedimento de Resposta a Incidentes envolvendo vazamento de dados e em conformidade com as leis de proteção de dados pessoais?

 A VTEX possui um procedimento interno implementado de Resposta a Incidentes com Dados Pessoais. Ele determina as regras para a detecção, verificação, investigação, classificação, notificação e remediação deste tipo de incidente.  

### Quais controles a VTEX utiliza para mitigar ataques Ransomware?

Utilizamos diversas soluções de monitoramento as quais geram alertas que são monitorados 24x7 por uma equipe qualificada e treinada para que qualquer mitigação necessária possa ser executada no mesmo momento que foi identificado alguma suspeita. Além disso realizamos scans de vulnerabilidades em nosso ambiente trimestralmente e comissionamos um teste de penetração anual com o objetivo de mitigar vulnerabilidades. Para ransomware, especificamente, também empregamos estratégias de backup de segurança. 

### Quais providências são tomadas em eventuais roubos de credenciais de um cliente (detectação, revogação, evidências para ações)?

Assim que detectamos um possível incidente, temos profissionais sempre em alerta para dar auxílio para o cliente que foi prejudicado com o incidente e prontamente começamos com ações internas relacionadas com esse tipo de incidente (classificação do incidente, plano de resposta, plano de comunicação e etc.). Isso é possível porque possuímos um time de segurança on call disponível 24x7 atendendendo diversos fusos diferentes. 

### Como são tratados os incidentes no âmbito da comunicação com os clientes (Email, Telefone, Portal Web)?

Temos um procedimento de resposta a incidente, agimos de forma rápida e eficaz para que a os serviços dos nossos clientes não fiquem indisponíveis, informamos aos nossos clientes através do portal VTEX e nos raros casos de maior atenção com um comunicado após o incidente. 

## Disaster recovery e continuidade de negócios
### A VTEX possui um Plano de Continuidade de Negócio? 

A VTEX possui um plano de continuidade de negócio que foi elaborado para preparar a companhia para lidar com os efeitos de uma emergência. Pretende-se que a existência deste documento forneça a base para um retorno relativamente rápido e indolor a rotina comum de funcionamento dos negócios, independentemente da causa. 

### A VTEX possui um Plano de Disaster Recovery?

A VTEX possui um plano de Recuperação de Desastres focado em garantir a continuidade das operações e a disponibilidade de recursos críticos em caso de um desastre. 
Nosso plano contém instruções sobre quais ações e como responder a incidentes não planejados e caracterizado como uma crise, esses incidentes podem estar relacionados a desastres naturais, ataques cibernéticos e quaisquer outros eventos disruptivos. Nosso plano possui etapas importantes de recuperação como a definição dos indicadores RPO e RTO e os testes de backup. 

### Qual é RTO (Recovery Time Objective) e RPO (Recovery Point Objetive) para recuperação de desastres?

Referenciado pela sigla RPO, é a idade máxima dos dados de backup antes de deixarem de ser úteis. Ele está diretamente conectado à política de retenção de backup. O RPO de linha de base para VTEX é de 24 horas. No entanto, este tempo é o RPO geral para a plataforma e refere-se à frequência de backup do Catálogo de Produtos. Sistemas transacionais, como o Checkout, utilizam abordagens que podem trazer o ponto de recuperação para a última transação salva. Referenciado pela sigla RTO, é o tempo máximo que deve ser permitido para que os serviços normais sejam retomados. O tempo de inatividade do serviço pode estar relacionado à interrupção do aplicativo, corrupção ou perda de dados, falha do servidor de dados ou interrupção da zona ou região de disponibilidade da AWS. RTO de linha de base para VTEX é:
- Interrupção do aplicativo: 10 minutos
- Corrupção de dados / perda de dados: 30 minutos
- Falha no servidor de dados: 1 hora
- Interrupção da zona de disponibilidade da AWS: 4 horas
- Interrupção na região da AWS: 24 horas 

### Quais são as tecnologias utilizadas na VTEX para o devido monitoramento e alertas em caso da existência de uma indisponibilidade na plataforma?

Somos uma plataforma cloud commerce 100% hospedada na AWS. Na nossa arquitetura de recuperação de desastre estabelecemos uma relação de dependência com a provedora da nuvem. Para nos apoiar no processo de DR possuímos o VTEX Healthcheck, um robô que atua então como um cliente da loja, navegando e comprando, por meio de diferentes cenários de uso. Sendo assim, a nossa tecnologia de monitoramento com VTEX Healthcheck nos apoia na identificação de possíveis falhas e indisponibilidade, e caso haja mais de três falhas subsequentes nossos alertas são acionados e as equipes responsáveis atuam na verificação e identificação da causa. 
Além disso uma camada adicional possuímos também VTEX Store Dash que monitora a navegação real e os dados de pedidos coletados de todas as lojas atendidas pela VTEX. Uma queda repentina no contador de pedidos por segundo indica um possível problema com a plataforma e os alertas serão acionados para que as equipes responsáveis atuem na verificação.  

### A VTEX teste periodicamente o Plano de Recuperação de Desastre? 

O Plano de Disaster Recovery é  testado pelo menos uma vez por ano para que seja eficaz quando necessário. Todo o plano não precisa ser testado em um único evento. Diferentes componentes ou processos com ciclos de vida independentes podem ser testados de acordo com a sua relevância e recorrência necessária. Cada uma dessas partes, no entanto, deve ser testada na frequência anual exigida. Se qualquer parte do plano for considerada ineficaz, uma nova versão do processo deve ser produzida para resolver o problema. Os eventos que antecedem a Black Friday e a Cyber Monday são a oportunidade usual para realizarmos as rotinas de testes de recuperação de desastres.

