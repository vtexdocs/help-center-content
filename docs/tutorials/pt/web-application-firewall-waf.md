---
title: 'Web Application Firewall (WAF)'
id: 6BZYLlU03ws72iqIFF6jdn
status: PUBLISHED
createdAt: 2024-04-25T00:17:16.172Z
updatedAt: 2024-04-30T15:03:41.186Z
publishedAt: 2024-04-30T15:03:41.186Z
firstPublishedAt: 2024-04-25T01:16:27.468Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: web-application-firewall-waf
locale: pt
legacySlug: web-application-firewall-waf
subcategory: jrgbOxKaOW0kdZs7rdgvS
---

>ℹ️ Esta funcionalidade faz parte do produto [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). Se já é cliente da VTEX e deseja adotar o VTEX Shield no seu negócio, entre em contato com o [Suporte Comercial](https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

O Web Application Firewall (WAF) é uma camada de segurança projetada para proteger aplicações web por meio do monitoramento e da filtragem do tráfego da Internet.

O WAF é direcionado especificamente para comunicações que ocorrem pelos protocolos HTTP (Hypertext Transfer Protocol) e HTTPS (HTTP Secure), examinando os dados de entrada e saída para detectar e bloquear possíveis ameaças.

![waf-pt](https://images.ctfassets.net/alneenqid6w5/6yRQRFGEYBnfbynGxcNJrU/9eb9944bfed9b23421e053f2c6102825/waf-pt.png)

A operação do WAF começa com a definição de [regras de segurança](#regras-de-seguranca), que são definidas pelo time de Segurança da VTEX a partir da análise de padrões de circulação de informações. A partir dessas regras, o WAF monitora continuamente o tráfego da web. Quando detecta uma atividade potencialmente prejudicial, ele pode bloquear o tráfego, evitando assim a exploração de vulnerabilidades no aplicativo web.

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

## Solicitar ativação do WAF

Para solicitar a ativação do WAF na sua loja, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support). Inclua as informações a seguir no ticket:

* URLs a serem adicionadas ao WAF.
* Nome e informações de contato da pessoa que será o ponto de contato com a equipe de Segurança da VTEX durante o processo de ativação.
* Provedor: para ter acesso ao WAF, todo o tráfego de URLs da loja deve passar pela [Azion](https://www.azion.com/), o provedor atualmente utilizado pela VTEX. Se isso não ocorrer, é preciso seguir um procedimento com a equipe de Tráfego da VTEX, que pode durar entre 1 e 2 semanas.

Após a solicitação, o prazo para a ativação do WAF nas URLs da loja é de 4 semanas, além do período necessário para migrar para a [Azion](https://www.azion.com/), quando aplicável.

## Saiba mais

* [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
