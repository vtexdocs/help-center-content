---
title: 'Web Application Firewall (WAF)'
id: 6BZYLlU03ws72iqIFF6jdn
status: PUBLISHED
createdAt: 2024-04-25T00:17:16.172Z
updatedAt: 2024-10-18T17:04:59.360Z
publishedAt: 2024-10-18T17:04:59.360Z
firstPublishedAt: 2024-04-25T01:16:27.468Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: web-application-firewall-waf
legacySlug: web-application-firewall-waf
locale: pt
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️ Esta funcionalidade faz parte do produto [VTEX Shield](/pt/docs/tutorials/vtex-shield). Se já é cliente da VTEX e deseja adotar o VTEX Shield no seu negócio, entre em contato com o [Suporte Comercial](/pt/docs/tracks/suporte-comercial). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/pt-br/contato/).

O Web Application Firewall (WAF) é uma camada de segurança projetada para proteger aplicações web por meio do monitoramento e da filtragem do tráfego da Internet.

O WAF é direcionado especificamente para comunicações que ocorrem pelos protocolos HTTP (Hypertext Transfer Protocol) e HTTPS (HTTP Secure), examinando os dados de entrada para detectar e bloquear possíveis ameaças.

![waf-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_1.png)

A operação do WAF começa com a definição de [regras de segurança](#regras-de-seguranca), que são determinadas pelo time de Segurança da VTEX a partir da análise de padrões de circulação de informações. A partir dessas regras, o WAF monitora continuamente o tráfego da web. Quando detecta uma atividade potencialmente prejudicial, ele pode bloquear o tráfego, evitando assim a exploração de vulnerabilidades no aplicativo web.

## Regras de segurança

Lojas que utilizam o VTEX Shield e optarem pelo WAF contam com as regras de segurança a seguir contra ameaças no site:

| Ameaça | Medida de segurança |
|---|---|
| Remote File Inclusions (RFI) | Detecta tentativas de incluir arquivos, geralmente por meio de scripts no servidor da web. |
| Directory Traversal | Verifica e valida nomes de arquivos fornecidos pelos usuários, evitando acesso não autorizado a arquivos e pastas sensíveis. |
| Cross-Site Scripting (XSS) | Impede a injeção de scripts do lado do cliente nas páginas visualizadas por seus visitantes. |
| Upload de arquivos | Detecta tentativas de upload de arquivos para o servidor da web. |
| Truques de evasão | Protege contra alguns truques de codificação usados para tentar burlar os mecanismos de proteção. |
| Acesso indesejado | Detecta tentativas de acesso a páginas administrativas ou vulneráveis, bots e ferramentas de varredura de segurança. |
| Ataques identificados | Previne vários tipos de ataques comuns e vulnerabilidades conhecidas que devem ser bloqueadas. |
| Filtro de IP | Consulta uma lista de endereços IPs que possuem permissões ou bloqueios de acesso. |
| Bloqueio da rede Tor | Impede o acesso ao site utilizando o navegador Tor. |

> ℹ️ A seleção de regras e os nomes exibidos variam conforme a configuração definida no provedor de WAF e eventuais customizações solicitadas pelo lojista.

## Solicitar ativação do WAF

Para solicitar a ativação do WAF na sua loja, entre em contato com o [Suporte VTEX](https://supporticket.vtex.com/support). Inclua as informações a seguir no ticket:

* URLs a serem adicionadas ao WAF.
* Nome e informações de contato (email e telefone) da pessoa que será o ponto de contato com a equipe de Segurança da VTEX durante o processo de ativação.
* Provedor: para ter acesso ao WAF, todo o tráfego de URLs da loja deve passar pelo provedor atualmente utilizado pela VTEX. Se isso não ocorrer, é preciso seguir um procedimento com a equipe de Tráfego da VTEX, que pode durar entre 1 e 2 semanas.

Após a solicitação, o prazo para a ativação do WAF nas URLs da loja é de 4 semanas, além do período necessário para migrar para o provedor, quando aplicável.

## Métricas do WAF

O VTEX Shield disponibiliza um dashboard para monitoramento em tempo real das métricas e atividades do WAF. Para visualizar o dashboard no Admin VTEX, acesse **Aplicativos > Shield > WAF**, ou digite **WAF** na barra de busca.

O dashboard apresenta as seguintes informações e recursos:

* [Filtro de período](#filtro-de-periodo)
* [Métricas gerais](#metricas-gerais)
* [Ações](#acoes)
* [Regras](#regras)
* [Tipos de ataque](#tipos-de-ataque)
* [Países de origem](#paises-de-origem)
* [Dispositivos](#dispositivos)

### Requisitos

Para visualizar a página, é necessário:

* Ter o WAF [ativado](#solicitar-ativacao-do-waf) previamente.

* Ser um usuário associado a um [perfil de acesso](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso) com o [recurso do License Manager](https://help.vtex.com/pt/docs/tutorials/recursos-do-license-manager) a seguir:

   * **Produto**: *CDN API*
   * **Categoria**: *WAF Control*
   * **Recurso**: *View WafControl Metrics*

### Filtro de período

No canto superior direito, você pode selecionar o período de visualização dos dados clicando no período atual. As opções disponíveis são:

* **Hoje**
* **Ontem**
* **Últimos 7 dias**
* **Últimos 14 dias**
* **Últimos 30 dias**
* **Período personalizado** permite selecionar datas específicas de início e fim, com intervalo máximo de 30 dias, limitado aos últimos 60 dias.

Após selecionar o período desejado, clique em `Aplicar` para atualizar as métricas do dashboard.

### Métricas gerais

A seção superior do dashboard apresenta três métricas principais:

* **Todas as requisições:** número total de requisições analisadas pelo WAF no período selecionado.
* **Bloqueadas:** quantidade e percentual de requisições que foram bloqueadas pelo WAF antes de chegar à aplicação por serem identificadas como ameaças.
* **Liberadas:** quantidade e percentual de requisições permitidas pelo WAF e encaminhadas para a aplicação após análise, consideradas seguras.

![waf-2-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_2.png)

### Ações

O gráfico de **Ações** apresenta a evolução temporal das atividades do WAF, mostrando o volume de requisições por **hora do dia**, consolidado ao longo de todo o período selecionado. Ele permite identificar picos de tráfego em horários específicos.

O gráfico exibe três métricas principais:

* **Bloqueios** (linha azul): requisições bloqueadas pelo WAF.
* **Permissões** (linha roxa): requisições permitidas.
* **Total** (linha cinza): volume total de requisições analisadas.

![waf-3-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_3.png)

### Regras

O gráfico de **Regras** detalha quais regras de segurança foram acionadas durante o período selecionado. É possível visualizar os dados de duas formas, selecionáveis no canto superior direito do gráfico:

* **Tempo:** evolução temporal da aplicação de cada regra.
* **Resumo:** visão consolidada da quantidade de ações por regra.

![waf-4-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_4.png)

> ℹ️ A seleção de regras e os nomes exibidos variam conforme a configuração definida no provedor de WAF e eventuais customizações solicitadas pelo lojista.

### Tipos de ataque

A seção **Tipos de ataque** apresenta um gráfico de barras horizontais com os principais tipos de ameaças detectadas e o volume de ocorrências.

Os tipos de ataque exibidos correspondem aos mais relevantes para a loja, ou seja, aqueles com maior incidência, e não necessariamente aos definidos na lista. Saiba mais sobre os ataques comuns no [OWASP Top 10](https://owasp.org/Top10).

![waf-5-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_5.png)

### Países de origem

O gráfico de **Países de origem** mostra a distribuição geográfica das requisições, permitindo identificar de quais países originam os acessos ao seu site analisados pelo WAF. Os países são listados por código de três letras, com barras horizontais indicando o volume de requisições de cada localidade.

![waf-6-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_6.png)

### Dispositivos

O gráfico de **Dispositivos** apresenta a distribuição percentual dos tipos de dispositivos utilizados para acessar o site nas requisições analisadas pelo WAF:

* **Desktop:** acessos via computadores desktop.
* **Mobile:** acessos via dispositivos móveis.
* **Tablet:** acessos via tablets.
* **Desconhecido:** dispositivos não identificados.

Os dados são exibidos em um gráfico de pizza com as respectivas porcentagens. 

![waf-7-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_7.png)

## Saiba mais

* [VTEX Shield](/pt/docs/tutorials/vtex-shield)
