---
title: 'Navegação Data Pipeline'
id: 4X4hK0zdIHN0Xn5x2MLYYd
status: PUBLISHED
createdAt: 2024-02-02T17:48:16.639Z
updatedAt: 2025-12-16T15:00:01.968Z
publishedAt: 2025-12-16T11:30:01.968Z
firstPublishedAt: 2024-05-27T19:26:59.542Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: navigation
legacySlug: navegacao-data-pipeline-beta
locale: pt
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

Um conjunto de dados de navegação contém o conjunto de ações de navegação que acontecem no site ou aplicativo móvel da loja (para aplicativos móveis e lojas headless, deve ter o SDK do Activity Flow instalado). É o registro de como os compradores se movem pela experiência: quais telas eles abrem, quais páginas visitam e como sua jornada se desenvolve da entrada até a saída.

## Características dos dados

| Característica | Descrição |
| --- | --- |
| Fonte de dados | Os dados deste conjunto vêm de um script que roda no frontend da loja e registra informações de sessão do usuário e atividade. |
| Disponibilidade | Esta métrica está disponível apenas através do Data Pipeline. |
| Histórico | Devido ao volume significativo deste Modelo de Dados, só podemos enviar pipelines incrementais, não dados históricos. Isso significa que assim que você adquirir o produto, começaremos a entregar seus dados a partir desse ponto. Diferente de outros Modelos de Dados, não podemos incluir dados históricos na carga inicial. |
| Intervalo mínimo de atualização | Uma hora. |

## Tabela: page_views

Os campos da tabela são descritos abaixo:

| Nome da coluna | Tipo da coluna | Descrição da coluna |
| --- | --- | --- |
| mac_id | string | ID único (UUID) para identificar usuários recorrentes. Dura 1 ano sendo atualizado enquanto o usuário muda de páginas. |
| session_id | string | ID único da sessão, durando 30 minutos sendo atualizado enquanto o usuário muda de páginas. |
| account_name | string | Conta VTEX da loja que está gerando esta sessão. |
| url | string | URL completa da visualização de página. |
| ref | string | URL da página que referiu o comprador para esta página. |
| workspace | string | Workspace que o usuário está visitando (ex: master). Relevante para AB Testing na Plataforma IO. |
| checkout_type | string | Esta coluna indica o tipo de checkout usado por essa respectiva loja nesse tipo de requisição. |
| storefront | string | O ambiente da VTEX usado para renderizar a página. Atualmente, temos três plataformas possíveis: 'portal', 'store_framework' e 'fast_store'. |
| is_new_user | boolean | Especifica se esta é a primeira visualização de página do comprador nesta loja. |
| is_first_event | boolean | Especifica se esta é a primeira visualização de página do comprador em sua sessão atual. |
| user_agent | string | String user-agent extraída do navegador do comprador. |
| event_time | timestamp | Timestamp de quando este evento foi ingerido (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |

## Tabela: session_order

Os campos da tabela são descritos abaixo:

| Nome da coluna | Tipo da coluna | Descrição da coluna |
| --- | --- | --- |
| session_id | string | ID único da sessão, durando 30 minutos sendo atualizado enquanto o usuário muda de páginas. |
| account_name | string | Conta VTEX da loja que está gerando esta sessão. |
| order_group | string | Grupo de pedido ao qual este pedido pertence (que também pode ser encontrado no Modelo de Dados de Pedidos, para unir dados de Navegação com dados de Pedidos). |
| record_created_at | timestamp | Quando este registro foi criado (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |
| record_updated_at | timestamp | Quando este registro foi atualizado (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |
| batch_id | timestamp | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados. (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |

## Tabela: session_user_agent

Os campos da tabela são descritos abaixo:

| Nome da coluna | Tipo da coluna | Descrição da coluna |
| --- | --- | --- |
| account_name | string | Conta VTEX da loja que está gerando esta sessão. |
| session_id | string | ID único da sessão, durando 30 minutos sendo atualizado enquanto o usuário muda de páginas. |
| browser_family | string | Família do navegador, extraída do user_agent. |
| browser_version | string | Versão do navegador, extraída do user_agent. |
| operating_system_family | string | Família do sistema operacional, extraída do user_agent. |
| operating_system_version | string | Versão do sistema operacional, extraída do user_agent. |
| device_family | string | Família do dispositivo, extraída do user_agent. |
| device_brand | string | Marca do dispositivo, extraída do user_agent. |
| device_model | string | Modelo do dispositivo, extraído do user_agent. |
| device_type | string | Tipo de dispositivo, extraído do user_agent. |
| record_created_at | timestamp | Quando este registro foi criado (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |
| record_updated_at | timestamp | Quando este registro foi atualizado (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |
| batch_id | timestamp | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados. (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |

## Tabela: url

Os campos da tabela são descritos abaixo:

| Nome da coluna | Tipo da coluna | Descrição da coluna |
| --- | --- | --- |
| account_name | string | Conta VTEX da loja que está gerando esta sessão. |
| url | string | URL completa da visualização de página. |
| request_type | string | O tipo de página que o usuário está visualizando. Pode ser um dos seguintes:<br><b>- homeView</b>: <code>&lt;domain&gt;/</code><br><b>- productView</b>: <code>&lt;domain&gt;/&lt;product-name&gt;/p</code><br><b>- checkout</b>: <code>&lt;domain&gt;/checkout#/checkout</code><br><b>- cart</b>: <code>&lt;domain&gt;/checkout#/cart</code><br><b>- email</b>: <code>&lt;domain&gt;/checkout#/email</code><br><b>- login</b>: <code>&lt;domain&gt;/login?returnUrl=&lt;checkout&gt;</code><br><b>- profile</b>: <code>&lt;domain&gt;/checkout#/profile</code><br><b>- shipping</b>: <code>&lt;domain&gt;/checkout#/shipping</code><br><b>- payment</b>: <code>&lt;domain&gt;/checkout#/payment</code><br><b>- orderPlaced</b>: <code>&lt;domain&gt;/checkout#/orderPlaced</code><br><b>- otherView</b>: <code>&lt;domain&gt;/&lt;other-path&gt;</code> |
| product_id | bigint | ID do produto exibido na página, usado para unir com o Modelo de Dados do Catálogo. Presente apenas se request_type for productView. |
| product_name | string | Nome do produto exibido na página, usado para unir com o Modelo de Dados do Catálogo. Presente apenas se request_type for productView. |
| category_id | bigint | ID da categoria exibida na página, usado para unir com o Modelo de Dados do Catálogo. Presente apenas se request_type for categoryView. |
| category_name | string | Nome da categoria exibida na página, usado para unir com o Modelo de Dados do Catálogo. Presente apenas se request_type for categoryView. |
| order_group | string | Grupo de pedido ao qual este pedido pertence (que também pode ser encontrado no Modelo de Dados de Pedidos, para unir dados de Navegação com dados de Pedidos). |
| traffic_type | string | Define 'Paid' ou 'Organic' de acordo com o padrão da URL. |
| url_utm_medium | string | UTM Medium, extraído da url. |
| url_utm_source | string | UTM Source, extraído da url. |
| url_utm_campaign | string | UTM Campaign, extraído da url. |
| url_utm_content | string | UTM Content, extraído da url. |
| url_utm_term | string | UTM Term, extraído da url. |
| url_gclid_found | boolean | Verdadeiro se um código gclid (ID do Google Ads) foi encontrado na url. |
| url_fbcid_found | boolean | Verdadeiro se um código fbclid (ID do Facebook Ads) foi encontrado na url. |
| record_created_at | timestamp | Quando este registro foi criado (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |
| record_updated_at | timestamp | Quando este registro foi atualizado (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |
| batch_id | timestamp | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados. (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |

## Tabela: web_vitals

Os campos da tabela são descritos abaixo:

| Nome da coluna | Tipo da coluna | Descrição da coluna |
| --- | --- | --- |
| mac_id | string | ID único (UUID) para identificar usuários recorrentes. Dura 1 ano sendo atualizado enquanto o usuário muda de páginas. |
| session_id | string | ID único da sessão, durando 30 minutos sendo atualizado enquanto o usuário muda de páginas. |
| metric_id | string | ID único para este evento de core web vital. |
| account_name | string | Conta VTEX da loja que está gerando esta sessão. |
| url | string | URL completa da visualização de página. |
| ref | string | URL da página que referiu o comprador para esta página. |
| workspace | string | Workspace que o usuário está visitando (ex: master). Relevante para AB Testing na Plataforma IO. |
| checkout_type | string | Esta coluna indica o tipo de checkout usado por essa respectiva loja nesse tipo de requisição. |
| is_new_user | boolean | Especifica se esta é a primeira visualização de página do comprador nesta loja. |
| is_first_event | boolean | Especifica se esta é a primeira visualização de página do comprador em sua sessão atual. |
| navigation_type | string | Tipo de navegação dado por este evento. Este campo aceita as seguintes opções: 'navigate', 'reload', 'back-forward', 'back-forward-cache', 'prerender', 'restore'. |
| ttfb_value | float | Time to First Byte (TTFB): Mede quanto tempo o navegador espera antes de receber o primeiro byte de dados do servidor. |
| cls_value | float | Cumulative Layout Shift (CLS): Avalia a estabilidade visual medindo mudanças inesperadas no layout. |
| inp_value | float | Interaction to Next Paint (INP): Mede quão rapidamente a interface responde a qualquer interação do usuário, capturando a latência até a próxima atualização visual. |
| lcp_value | float | Largest Contentful Paint (LCP): Mede o tempo de carregamento do maior elemento visível. |
| event_time | timestamp | Timestamp de quando este evento foi ingerido (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |
| client_time | timestamp | Timestamp do evento do dispositivo do comprador (que pode ser inconsistente, já que compradores podem configurar seus próprios valores de data e hora). |
| record_created_at | timestamp | Quando este registro foi criado (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |
| record_updated_at | timestamp | Quando este registro foi atualizado (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |
| batch_id | timestamp | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados. (Usado exclusivamente para propósitos de avaliação de qualidade interna da VTEX). |

## Análises com navegação

Os dados de navegação podem ser usados para as seguintes análises:

- **Taxa de conversão geral:** Calcular a proporção de sessões que resultaram em uma compra em relação ao número total de sessões para avaliar a eficácia geral do site em converter visitantes em compradores.
- **Análise do funil de conversão:** Agrupar visualizações de página por estágios do funil e contar quantas sessões passaram por cada estágio, identificando onde os usuários abandonaram sua jornada.
- **Páginas mais visitadas:** Contar o número de visualizações de página para cada tipo de página (home, categoria, produto) para identificar as páginas que atraem mais atenção e otimizá-las para conversão.
- **Rastreamento do caminho do usuário:** Seguir a sequência das visualizações de página para cada sessão para entender o caminho percorrido pelo usuário e descobrir padrões de navegação comuns.
- **Fonte de tráfego:** Analisar a URL de referência de cada sessão para determinar a fonte de tráfego e obter insights sobre quais canais de marketing são mais eficazes.
- **Taxa de rejeição por tipo de página:** Identificar sessões que terminam após uma única visualização de página e calcular a taxa de rejeição por tipo de página para melhorar o conteúdo ou design dessas páginas.

## Correlações com outros dados

Os dados de navegação da VTEX têm interações significativas com outros conjuntos de dados que enriquecem a análise do comportamento do usuário, por exemplo:

- **Interação com dados de pedidos:** A análise comparativa entre navegação e conversões de pedidos revela o impacto das jornadas do usuário nas decisões de compra.
- **Relacionamento com SKUs:** A interação do usuário com páginas de produtos e categorias oferece insights sobre a popularidade e eficácia da apresentação de produtos.
- **Dados de marketing e campanhas:** A correlação entre navegação e campanhas de marketing ajuda a avaliar quão eficientes são as campanhas em atrair tráfego e gerar conversões.
