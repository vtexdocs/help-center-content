---
title: 'Reportar vulnerabilidade'
id: 2veBKt7ZGkjdqlMU3F0JYC
status: PUBLISHED
createdAt: 2025-04-16T18:54:42.584Z
updatedAt: 2025-04-16T19:00:52.236Z
publishedAt: 2025-04-16T19:00:52.236Z
firstPublishedAt: 2025-04-16T19:00:52.236Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: reporting-vulnerabilities
legacySlug: reportar-vulnerabilidade
locale: pt
subcategoryId: vONCJSxwN5qZiElOEtKkH
---

Nossos clientes são encorajados a reportar, de modo responsável, quaisquer vulnerabilidades de segurança que acreditam ter encontrado durante o uso comum da plataforma.

Aqueles que desejarem reportar uma vulnerabilidade devem antes trabalhar com suas próprias equipes de segurança e desenvolvimento para realizar uma avaliação de segurança e eliminar  falsos positivos ou problemas oriundos de configurações personalizadas. Somente casos compatíveis com a [definição de vulnerabilidade](#definicao-de-vulnerabilidade) serão verificados.

> ⚠️ Consulte o documento [Práticas de Segurança da VTEX](https://vtex.com/br-pt/security/security-practices/) e nossa [FAQ de Segurança](/pt/tutorial/the-risk-assessment-process--4K97IpqkpCpDYsZOSxtfkX#risk-assessment-na-vtex) antes de reportar qualquer vulnerabilidade. Estes documentos esclarecem nossos processos e ajudam a eliminar falsos positivos.

Após esse procedimento, caso haja uma vulnerabilidade, siga estes passos:

1. [Baixe o modelo](https://assets.ctfassets.net/alneenqid6w5/7FNzoEpl67wH6crmW98If2/5edb235d1afe34aabf08ab73d67ad8f8/Modelo_-_Comunica____o_de_Vulnerabilidade_-_PT.pdf) para comunicação de vulnerabilidades.
2. Preencha o modelo de comunicação de vulnerabilidades com os detalhes de cada vulnerabilidade encontrada. Adicione o maior número possível de detalhes para explicar a suspeita identificada, disponibilizando evidências e imagens que nos ajudem a compreender, reproduzir e validar o problema.

  As vulnerabilidades devem ser reportadas individualmente, seguindo o modelo estabelecido. Caso tenha encontrado mais de uma vulnerabilidade em seu teste, preencha múltiplos modelos e anexe ao seu chamado.

  > ⚠️ Todas as informações devem ser preenchidas e são importantes para a avaliação. Comunicações de vulnerabilidade fora do padrão estabelecido não serão endereçadas pelo time de Segurança da VTEX.

3. Abra uma solicitação para o nosso [Suporte](/pt/support) para registrar o aviso de vulnerabilidade de segurança. Não esqueça de anexar o modelo de comunicação de vulnerabilidades preenchido neste chamado.
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

A VTEX se compromete a responder os avisos recebidos pelo [Suporte](/pt/support) o mais breve possível, notificar sobre a correção de vulnerabilidades ou fornecer motivos coerentes pelos quais análises ou correções eventualmente não possam ser realizadas.

A VTEX está dedicada a analisar, verificar e solucionar quaisquer vulnerabilidades que nos sejam relatadas e possam comprometer a sua segurança.
