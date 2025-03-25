---
title: 'Navegação Data Pipeline '
id: 4X4hK0zdIHN0Xn5x2MLYYd
status: PUBLISHED
createdAt: 2024-02-02T17:48:16.639Z
updatedAt: 2024-09-13T17:51:19.060Z
publishedAt: 2024-09-13T17:51:19.060Z
firstPublishedAt: 2024-05-27T19:26:59.542Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: navigation
locale: pt
legacySlug: navegacao-data-pipeline-beta
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados de navegação opera com duas tabelas principais: `pageviews` e `sessions`. Uma `pageview` refere-se a cada nova página acessada pelo usuário durante a navegação na loja, enquanto uma `session` é definida como o conjunto de todos os `pageviews` realizados por um usuário em uma única visita.  
Cada `session` permanece ativa até que não ocorra uma nova `pageview` por um período de 30 minutos.  

>⚠️ O conjunto de dados de navegação não captura todos os tipos de eventos que ocorrem durante a navegação.</br>
> Ex: cliques específicos, eventos especiais e interações com o mini carrinho.</br>

- [Características dos dados de navegação](#caracteristicas-dos-dados-de-navegacao)
- [Tabela sessions](#tabela_sessions)
- [Tabela pageviews](#tabela_pageviews)
- [Análise com dados de navegação](#analises-com-dados-de-navegacao)
- [Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados de navegação

| **Característica** | **Descrição** |
|:---:|:---:|
| Origem do dado | O conjunto de dados se origina via <i>script</i> executado no <i>frontend</i> da loja, é ele quem registra as informações das sessões e atividades dos usuários. |
| Disponibilidade | Os dados de navegação podem ser acessados no <a href="https://help.vtex.com/pt/tutorial/visao-geral-da-loja--P8ahguoRs0U3PzmXg2wuQ#dados">dashboard Visão Geral</a> no Admin da VTEX, concentrando-se no total de sessões e no funil de conversão, ou por meio de ferramentas terceiras, como Google Analytics. |
| Histórico | Os dados são mantidos por dois anos, a partir de 2022 para clientes que já utilizam a plataforma VTEX. |
| Menor intervalo de atualização possível | Uma hora. |  

>⚠️ O <i>script</i> em um site não é capaz de capturar dados de sessões que se originam em marketplaces, aplicativos ou implementações <i>headless</i>, nas quais não gerenciamos o <i>frontend</i>. Além disso, personalizações realizadas no <i>frontend</i> da loja podem interferir ou mesmo inativar o <i>script</i> levando à falta de registro de algumas sessões, ou taxa de conversão observada no dashboard.</br>
> Para minimizar o impacto no desempenho da loja, o <i>script</i> é configurado para ser o último elemento a carregar na página, o que significa que sessões muito breves podem não ser capturadas.</br>

## Tabela `sessions`

Esta tabela contém apenas sessões fechadas, seja por inatividade ou porque terminaram em uma compra. E é ordenada por `session_id`, `session_end_time` e `store_name`; portanto, evite filtrar grandes intervalos de dados por colunas que não estão nesta estratégia de ordenação. Veja os campos que compõem a tabela.  

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| batch_id | character varying(13) | ID de controle da ingestão de dados. |
| session_id | character varying(127) | UUID único identificando esta sessão, correspondente ao cookie VtexRCSessionIdv7. |
| store_name | character varying(127) | Nome da loja que produziu as visualizações de página desta sessão. |
| account_name | character varying(127) | Conta do License Manager à qual a loja desta sessão pertence. |
| economic_group_id | character varying(127) | Identificador do grupo econômico no contexto de cobrança. |
| economic_group_name | character varying(1024) | Nome do grupo econômico no contexto de cobrança. |
| company_id | character varying(127) | Identificador da empresa no contexto de cobrança. |
| company_name | character varying(1024) | Nome da empresa no contexto de cobrança. |
| main_account_name | character varying(127) | Nome da conta principal do License Manager relacionada à loja desta sessão. |
| os_family | character varying(1023) | Família do sistema operacional, extraída do user_agent. |
| os_major | character varying(1023) | Versão principal do sistema operacional, extraída do user_agent. |
| os_minor | character varying(1023) | Versão secundária do sistema operacional, extraída do user_agent. |
| os_patch | character varying(1023) | Patch do sistema operacional, extraído do user_agent. |
| os_patch_minor | character varying(1023) | Patch menor do sistema operacional, extraído do user_agent. |
| device_brand | character varying(1023) | Marca do dispositivo, extraída do user_agent. |
| device_family | character varying(1023) | Família do dispositivo, extraída do user_agent. |
| device_model | character varying(1023) | Modelo do dispositivo, extraído do user_agent. |
| browser_family | character varying(1023) | Família do navegador, extraída do user_agent. |
| browser_major | character varying(1023) | Versão principal do navegador, extraída do user_agent. |
| browser_minor | character varying(1023) | Versão secundária do navegador, extraída do user_agent. |
| browser_patch | character varying(1023) | Patch do navegador, extraído do user_agent. |
| user_id | character varying(16383) | Identificador único do comprador, mapeado pelo cookie VtexRCMacIdv7. |
| pageviews_count | integer | Contagem de visualizações de página nesta sessão. |
| views_home | integer | Contagem de visualizações da página inicial nesta sessão. |
| views_category | integer | Contagem de visualizações de páginas de categoria nesta sessão. |
| views_department | integer | Contagem de visualizações de páginas de departamento nesta sessão. |
| views_search | integer | Contagem de visualizações de páginas de busca nesta sessão. |
| views_product | integer | Contagem de visualizações de páginas de produto nesta sessão. |
| views_checkout | integer | Contagem de visualizações de páginas de checkout nesta sessão. |
| views_other | integer | Contagem de visualizações de outras páginas nesta sessão. |
| views_checkout_cart | integer | Contagem de visualizações de páginas de checkout no estágio do carrinho. |
| views_checkout_payment | integer | Contagem de visualizações de páginas de checkout no estágio de pagamento. |
| views_checkout_shipping | integer | Contagem de visualizações de páginas de checkout no estágio de envio. |
| views_checkout_profile | integer | Contagem de visualizações de páginas de checkout no estágio de perfil. |
| views_checkout_orderplaced | integer | Contagem de visualizações de páginas de checkout no estágio de pedido realizado. |
| views_checkout_email | integer | Contagem de visualizações de páginas de checkout no estágio de email. |
| workspace | character varying(16383) | Workspace da VTEX, geralmente o principal. |
| user_agent | character varying(16383) | String do User-Agent extraída do lado do servidor da requisição. |
| is_first_visit | boolean | Indica se é a primeira visita do usuário (não conta para visitantes recorrentes em diferentes navegadores). |
| session_start_time | timestamp without time zone | Data e hora do início da sessão. |
| entrance_page_url | character varying(16383) | URL da primeira visualização de página nesta sessão. |
| entrance_page_type | character varying(16383) | Tipo de página da primeira visualização nesta sessão. |
| entrance_page_checkout_step | character varying(16383) | Etapa de checkout da primeira visualização de página nesta sessão. |
| session_end_time | timestamp without time zone | Data e hora do fim da sessão. |
| exit_page_url | character varying(16383) | URL da última visualização de página nesta sessão. |
| exit_page_type | character varying(16383) | Tipo de página da última visualização nesta sessão. |
| exit_page_checkout_step | character varying(16383) | Etapa de checkout da última visualização de página nesta sessão. |

## Tabela `pageviews`

Cada item nesta tabela corresponde a uma página visualizada pelo comprador, como a página inicial, página de produto e etapa de checkout.  
Uma visualização de página é contabilizada após o navegador do comprador carregar a página, em vez de quando o pedido ou clique acontece.  

Cada página possui atributos específicos e, como esta tabela reúne tudo em um único esquema, muitos valores nulos aparecerão. Por exemplo, espera-se que os atributos das páginas de produtos sejam nulos quando a visualização da página corresponder a uma etapa do carrinho de compras. Veja a seguir os campos que compõem a tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| client_date | timestamp without time zone | Data e hora do servidor da visualização da página. |
| session_id | character varying(127) | Identificador único de uma sessão, mapeando diretamente para o cookie VtexRCSessionIdv7. |
| page_type | character varying(127) | Tipo da página acessada, com valores predefinidos como 'home', 'category', 'product', entre outros. |
| checkout_step | character varying(127) | Etapa de checkout da página, válida quando page_type é 'checkout'. |
| economic_group_id | character varying(127) | Identificador do grupo econômico no contexto de cobrança. |
| economic_group_name | character varying(1024) | Nome do grupo econômico no contexto de cobrança. |
| company_id | character varying(127) | Identificador da empresa no contexto de cobrança. |
| company_name | character varying(1024) | Nome da empresa no contexto de cobrança. |
| main_account_name | character varying(127) | Conta principal do License Manager à qual a loja pertence. |
| account_name | character varying(127) | Conta do License Manager à qual a loja pertence. |
| store_name | character varying(127) | Nome da loja que produziu o evento de visualização de página. |
| url | character varying(16383) | URL completa da visualização da página. |
| store_host | character varying(127) | Hostname extraído da URL. |
| page_url | character varying(16383) | URL limpa da visualização da página, sem parâmetros de consulta. |
| ref | character varying(16383) | URL da página que referenciou o comprador a esta página. |
| workspace | character varying(127) | Workspace da VTEX, geralmente 'master'. |
| workspace_ab_test_id | character varying(127) | ID de teste AB extraído do nome do workspace. |
| user_agent | character varying(16383) | String do User-Agent extraída do lado do servidor. |
| os_family | character varying(1023) | Família do SO extraída do user_agent. |
| os_major | character varying(1023) | Versão principal do SO extraída do user_agent. |
| os_minor | character varying(1023) | Versão secundária do SO extraída do user_agent. |
| os_patch | character varying(1023) | Patch do SO extraído do user_agent. |
| os_patch_minor | character varying(1023) | Patch menor do SO extraído do user_agent. |
| device_brand | character varying(1023) | Marca do dispositivo extraída do user_agent. |
| device_family | character varying(1023) | Família do dispositivo extraída do user_agent. |
| device_model | character varying(1023) | Modelo do dispositivo extraído do user_agent. |
| browser_family | character varying(1023) | Família do navegador extraída do user_agent. |
| browser_major | character varying(1023) | Versão principal do navegador extraída do user_agent. |
| browser_minor | character varying(1023) | Versão secundária do navegador extraída do user_agent. |
| browser_patch | character varying(1023) | Patch do navegador extraído do user_agent. |
| user_id | character varying(127) | Identificador único do comprador. |
| is_first_visit | boolean | Indica se é a primeira visita do usuário. |
| category_id | character varying(127) | Identificador da categoria. |
| category_name | character varying(16383) | Nome da categoria. |
| department_id | character varying(127) | Identificador do departamento. |
| department_name | character varying(16383) | Nome do departamento. |
| product_id | character varying(127) | Identificador do produto. |
| product_reference_id | character varying(1024) | Referência do produto. |
| product_name | character varying(16383) | Nome do produto. |
| product_brand_id | integer | Identificador da marca do produto. |
| product_brand_name | character varying(1024) | Nome da marca do produto. |
| product_department_id | integer | Identificador do departamento do produto. |
| product_department_name | character varying(1024) | Nome do departamento do produto. |
| product_category_id | integer | Identificador da categoria do produto. |
| product_category_name | character varying(1024) | Nome da categoria do produto. |
| product_list_price | numeric(22,4) | Preço de lista do produto. |
| product_price | numeric(22,4) | Preço do produto. |
| seller_id | character varying(127) | Identificador do vendedor. |
| seller_ids | character varying(16383) | Identificadores do vendedor. |
| site_search_term | character varying(16383) | Termo de busca no site. |
| site_search_form | character varying(16383) | Formulário de busca no site. |
| site_search_category | character varying(127) | Categoria de busca no site. |
| site_search_results | integer | Resultados da busca no site. |
| sales_channel | character varying(10) | Canal de vendas. |
| order_form_id | character varying(127) | Identificador do formulário de pedido. |
| order_form_shipping | numeric(22,4) | Custo de envio no formulário de pedido. |
| order_form_total | numeric(22,4) | Total no formulário de pedido. |
| order_form_tax | numeric(22,4) | Imposto no formulário de pedido. |
| campaign_name | character varying(16383) | Nome da campanha. |
| campaign_source | character varying(16383) | Fonte da campanha. |
| campaign_medium | character varying(16383) | Meio da campanha. |
| internal_campaign_name | character varying(16383) | Nome da campanha interna. |
| internal_campaign_part | character varying(16383) | Parte da campanha interna. |
| order_form_payment_type | character varying(127) | Tipo de pagamento no formulário de pedido. |
| order_group | character varying(127) | Grupo de pedido. |
| transaction_id | character varying(127) | Identificador da transação. |
| visitor_login_state | character varying(16383) | Estado de login do visitante. |
| visitor_type | character varying(16383) | Tipo de visitante. |
| visitor_optin_news_letter | boolean | Opt-in do visitante para newsletter. |
| profile_id | character varying(127) | ID do perfil do comprador, recebido do sistema VTEX Profile. |
| batch_id | character varying(13) | ID de controle da ingestão de dados. |
| id | character varying(36) | UUID gerado na ingestão de dados. |
| transaction_products | super | Produtos na transação. |
| transaction_total | numeric(22,4) | Total da transação. |

## Análises com dados de Navegação

Os dados de navegação podem ser utilizados para as seguintes análises:  

**- Taxa de conversão geral:** calcule a proporção de sessões que resultaram em uma compra em relação ao total de sessões para avaliar a eficácia geral do site em converter visitantes em compradores.  
**- Análise de funil de conversão:** agrupe pageviews por etapas do funil (home, pesquisa, produto, carrinho, checkout) e conte quantas sessões passaram por cada etapa, identificando onde os usuários desistem.  
**- Páginas mais visitadas:** conte o número de pageviews para cada tipo de página (home, categoria, produto) para identificar quais páginas atraem mais atenção e otimizá-las para conversão.  
**- Rastreamento de caminhos do usuário:** sequencie as pageviews para cada sessão para entender o caminho percorrido pelo usuário e descobrir padrões de navegação comuns.  
**- Origem do tráfego:** analise a URL de referência de cada sessão para determinar a fonte do tráfego e entender quais canais de marketing estão mais eficazes.  
**- Taxa de rejeição por tipo de página:** identifique sessões que terminam após uma única pageview e calcule a taxa de rejeição por tipo de página para melhorar o conteúdo ou design dessas páginas.  

## Correlações com outros dados

Nos dados de navegação da VTEX, observamos interações significativas com outros conjuntos de dados que enriquecem a análise do comportamento do usuário, por exemplo:  

**- Interação com fados de pedidos:** análise comparativa entre navegação e conversões de pedidos revela o impacto das jornadas do usuário nas decisões de compra.  
**- Relação com os SKUs:** a interação dos usuários com as páginas de produtos e categorias oferece insights sobre a popularidade e eficácia da apresentação dos produtos.  
**- Dados de marketing e campanhas:** a correlação entre a navegação e as campanhas de marketing ajuda a avaliar a eficiência dessas campanhas na atração de tráfego e na geração de conversões.  

### Conheça outros Conjuntos de dados

- [Inventário](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)   
- [Pagamentos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Preços](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promoção](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Vale-presente](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Logs do Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
