---
title: 'Testes de penetração e avisos de vulnerabilidade'
id: 6jodF6s1I50Fg84ZwutOCb
status: PUBLISHED
createdAt: 2022-11-30T14:20:37.453Z
updatedAt: 2024-08-28T19:20:39.486Z
publishedAt: 2024-08-28T19:20:39.486Z
firstPublishedAt: 2022-11-30T14:42:44.449Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: penetration-testing-and-vulnerability-notice
locale: pt
legacySlug: avaliacoes-de-seguranca-e-relatorios-de-vulnerabilidade
subcategoryId: vONCJSxwN5qZiElOEtKkH
---

>ℹ️ Esta funcionalidade faz parte do produto [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). Se já é cliente da VTEX e deseja adotar o VTEX Shield no seu negócio, entre em contato com o [Suporte Comercial](https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

>⚠️ Se desejar uma análise do seu relatório de teste de penetração pela equipe de Segurança da VTEX, é necessário ter o VTEX Shield. Além disso, todos os testes de penetração devem ser previamente [agendados com a VTEX](#agendar-teste-de-penetracao). Qualquer teste realizado de forma autônoma sem aviso prévio à VTEX será considerado uma tentativa de ação não autorizada.

A VTEX avalia rigorosamente os recursos da plataforma, testando e identificando vulnerabilidades por meio de escaneamento e testes de penetração recorrentes. Essas verificações de vulnerabilidade são executadas periodicamente.

Além das verificações padrão,  lojas que utilizam o [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) podem realizar um teste de penetração  e reportar alguma vulnerabilidade encontrada, desde que façam o agendamento com a VTEX com antecedência.

O teste de penetração, ou pentest, é um ataque simulado a um sistema de computador, rede ou aplicativo da Web para identificar e corrigir vulnerabilidades de segurança. Esse teste é realizado de forma ética para avaliar a segurança de um sistema sem causar nenhum dano real.

Neste guia, explicamos o procedimento para agendar um teste de penetração e reportar uma possível vulnerabilidade na plataforma:

- [Agendar teste de penetração](#agendar-teste-de-penetracao)
  - [Relatórios de testes de penetração](#relatorios-de-testes-de-penetracao)
  - [Procedimentos não permitidos](#procedimentos-nao-permitidos)
- [Reportar vulnerabilidade](#reportar-vulnerabilidade)
  - [Definição de vulnerabilidade](#definicao-de-vulnerabilidade)
  - [Resposta da VTEX](#resposta-da-vtex)

## Agendar teste de penetração

>⚠️ Somente lojas com o [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) podem agendar testes de penetração e obter uma resposta do time de Segurança, com acesso a uma análise profunda do relatório do teste, conforme descrito nos procedimentos deste guia.

Para realizar um teste de penetração no ambiente da sua loja, é necessário alinhar o cronograma de testes com a VTEX, para organização interna e planejamento da equipe de segurança. Siga as instruções abaixo:

1. Abra um ticket com o [Suporte VTEX](https://help.vtex.com/pt/support), informando que você deseja agendar um teste de penetração.
2. Nossa equipe solicitará as informações necessárias para o agendamento, incluindo o [acordo de confidencialidade](https://assets.ctfassets.net/alneenqid6w5/5iw8rN7CdSn7PHKvMMcO19/ab46ae4025d506e052dcef5974f9007f/Pentest_NDA_.zip) assinado pelos responsáveis pela loja.

    Se a loja contratar uma empresa terceirizada para realizar o teste, os responsáveis pela empresa parceira também precisam assinar o acordo de confidencialidade.

    A VTEX recomenda que os clientes realizem seus testes de penetração com parceiros que tenham equipes com um nível mínimo de certificação na área, com atenção aos [procedimentos não permitidos](#procedimentos-nao-permitidos).

    Empresas com profissionais certificados em programas como o [Certified Ethical Hacker](https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/) do EC-Council, [CompTIA PenTest+](https://www.comptia.org/pt/certificacoes/pentest) e [GIAC Exploit Researcher and Advanced Penetration Tester](https://www.giac.org/certifications/exploit-researcher-advanced-penetration-tester-gxpn/) tendem a entregar relatórios mais detalhados e padronizados, o que melhora a comunicação e a qualidade da avaliação.

3. Atualize seu ticket com as informações solicitadas pela VTEX, anexando o [acordo de confidencialidade](https://assets.ctfassets.net/alneenqid6w5/5iw8rN7CdSn7PHKvMMcO19/ab46ae4025d506e052dcef5974f9007f/Pentest_NDA_.zip) assinado pelos responsáveis pela loja e pelos responsáveis pela empresa contratada para realizar o teste.
4. Salve o número do ticket. Você precisará dele para comunicações futuras.
5. Após receber as informações, a equipe VTEX entrará em contato para confirmar a execução do teste de penetração em até dois dias úteis.
6. Realize o teste na data agendada, mediante a autorização da VTEX.
7. Envie um relatório com os resultados no mesmo ticket para o [Suporte VTEX](https://help.vtex.com/pt/support).

  >⚠️ É obrigatório seguir as orientações descritas em [Relatórios de testes de penetração](#relatorios-de-testes-de-penetracao) para que o prazo de análise seja cumprido pela VTEX.

   Nomeie uma pessoa de sua equipe de segurança para ser o ponto de contato da equipe de segurança da VTEX no processo de análise do relatório do teste.

A equipe de segurança da VTEX se dedica a realizar uma análise abrangente de todas as descobertas relatadas pelo cliente durante testes de penetração previamente autorizados e agendados pela VTEX.

Em até 10 dias úteis após o recebimento do [relatório](#relatorios-de-testes-de-penetracao), a equipe identificará falsos positivos e reclassificará a gravidade das ameaças identificadas conforme necessário, seguindo as práticas recomendadas da VTEX. Cada decisão nesse processo será acompanhada de uma justificativa detalhada para garantir total transparência e compreensão.

>⚠️ Lojas que estão se preparando para o go-live e desejarem realizar um teste de penetração também precisam agendá-lo com antecedência. Nesse caso, é obrigatório enviar o relatório com os resultados para o [Suporte VTEX](https://help.vtex.com/pt/support) pelo menos **45 dias** antes da data planejada para o go-live. Neste período, a VTEX vai analisar o resultado e endereçar qualquer vulnerabilidade identificada no processo.

### Relatórios de testes de penetração

Para que o prazo de 10 dias úteis de análise do relatório seja cumprido pela VTEX, é necessário seguir as diretrizes abaixo ao criar o relatório do teste de penetração:

* **Detalhamento de qual foi o ponto afetado**:

  Inclua informações sobre onde o problema foi detectado (URL, fluxo de funcionalidade, entre outros).
* **Detalhamento do impacto nos negócios**:

  Descreva o que esse problema de segurança causa e quais são as vantagens do invasor.
* **Detalhamento dos critérios para classificar a vulnerabilidade**:

  Utilize uma estrutura ou um documento que detalhe os critérios usados para classificar a criticidade da suposta vulnerabilidade identificada.
* **Descrição do problema**:

  Adicione imagens para ilustrar o problema.
* **Descrição das etapas para reproduzir ou prova de conceito**:

  Descreva os procedimentos para replicar o problema de segurança, de preferência com imagens.
* **Descrição do ataque** (opcional):

  Se o relatório relatar um ataque, inclua uma explicação de quais problemas de segurança foram utilizados para fomentar o ataque, com imagens de evidências (vídeos são opcionais).

### Procedimentos não permitidos

Recomendamos utilizar somente os testes autorizados para identificar vulnerabilidades. Não permitimos os seguintes procedimentos:

* Realizar testes de penetração sem autorização e sem agendamento junto à VTEX.
* Realizar ações que possam afetar de forma negativa a VTEX, seus produtos ou usuários. Por exemplo, Spam, Brute Force, Denial of Service e outras ações informadas no [acordo de confidencialidade relativo a testes de segurança](https://assets.ctfassets.net/alneenqid6w5/5iw8rN7CdSn7PHKvMMcO19/ab46ae4025d506e052dcef5974f9007f/Pentest_NDA_.zip).
* Acessar ou tentar acessar dados ou informações que não pertencem a sua conta.
* Destruir ou tentar corromper dados ou informações que pertençam à VTEX.
* Realizar qualquer tipo de ataque físico ou eletrônico ao pessoal ou propriedades da VTEX.
* Técnicas de engenharia social.
* Violar quaisquer leis e regulamentos ou violar quaisquer acordos para descobrir vulnerabilidades.

## Reportar vulnerabilidade

Nossos clientes são encorajados a reportar, de modo responsável, quaisquer vulnerabilidades de segurança que acreditam ter encontrado durante testes autorizados.

Aqueles que desejarem reportar uma vulnerabilidade devem antes trabalhar com suas próprias equipes de segurança e desenvolvimento para realizar uma avaliação de segurança e eliminar  falsos positivos ou problemas oriundos de configurações personalizadas. Somente casos compatíveis com a [definição de vulnerabilidade](#definicao-de-vulnerabilidade) serão verificados.

>⚠️ Consulte o documento [Práticas de Segurança da VTEX](https://vtex.com/br-pt/security/security-practices/) e nossa [FAQ de Segurança](https://help.vtex.com/pt/tutorial/the-risk-assessment-process--4K97IpqkpCpDYsZOSxtfkX#risk-assessment-na-vtex) antes de reportar qualquer vulnerabilidade. Estes documentos esclarecem nossos processos e ajudam a eliminar falsos positivos.

Após esse procedimento, caso haja uma vulnerabilidade, siga estes passos:

1. [Baixe o modelo](https://assets.ctfassets.net/alneenqid6w5/7FNzoEpl67wH6crmW98If2/5edb235d1afe34aabf08ab73d67ad8f8/Modelo_-_Comunica____o_de_Vulnerabilidade_-_PT.pdf) para comunicação de vulnerabilidades.
2. Preencha o modelo de comunicação de vulnerabilidades com os detalhes de cada vulnerabilidade encontrada. Adicione o maior número possível de detalhes para explicar a suspeita identificada, disponibilizando evidências e imagens que nos ajudem a compreender, reproduzir e validar o problema.

  As vulnerabilidades devem ser reportadas individualmente, seguindo o modelo estabelecido. Caso tenha encontrado mais de uma vulnerabilidade em seu teste, preencha múltiplos modelos e anexe ao seu chamado.

  >⚠️ Todas as informações devem ser preenchidas e são importantes para a avaliação. Comunicações de vulnerabilidade fora do padrão estabelecido não serão endereçadas pelo time de Segurança da VTEX.

3. Abra uma solicitação para o nosso [Suporte](https://help.vtex.com/pt/support) para registrar o aviso de vulnerabilidade de segurança. Não esqueça de anexar o modelo de comunicação de vulnerabilidades preenchido neste chamado.
4. Salve o número do seu chamado, pois você poderá precisar dele em futuras comunicações.

### Definição de vulnerabilidade

A VTEX considera uma vulnerabilidade de segurança qualquer falha em um dos nossos componentes que possa permitir que a confidencialidade, integridade ou disponibilidade de produto ou infraestrutura seja comprometida de alguma forma.

Não consideramos como uma vulnerabilidade os seguintes casos: 

* Presença ou ausência de cabeçalhos HTTP (X-Frame-Options, CSP, nosniff, entre outros).
* Ausência de atributos de segurança em cookies.
* Problemas relacionados a cache.
* Mensagens de erro de _stack_.
* Injeção de conteúdo por usuários administrativos.
* Partes customizadas da loja.
* Preenchimento automático ativado.

### Resposta da VTEX

A VTEX não se compromete a responder a relatórios em massa gerados por verificadores automatizados. Caso sua análise se baseie em um processo automatizado de identificação de vulnerabilidades, recomendamos que os relatórios sejam analisados por um profissional de segurança para garantir a validade do que foi encontrado antes de comunicar as vulnerabilidades à VTEX.

A VTEX se compromete a responder os avisos recebidos pelo [Suporte](https://help.vtex.com/pt/support) o mais breve possível, notificar sobre a correção de vulnerabilidades ou fornecer motivos coerentes pelos quais análises ou correções eventualmente não possam ser realizadas.

A VTEX está dedicada a analisar, verificar e solucionar quaisquer vulnerabilidades que nos sejam relatadas e possam comprometer a sua segurança.
