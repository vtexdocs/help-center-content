---
title: 'Integração com Renner e Camicado'
id: 5qf2wloosKlmIB8o2AitnT
status: PUBLISHED
createdAt: 2021-07-02T19:25:31.689Z
updatedAt: 2025-08-26T17:49:30.086Z
publishedAt: 2025-08-26T17:49:30.086Z
firstPublishedAt: 2021-07-02T21:07:36.096Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: integrating-with-renner-and-camicado
legacySlug: integracao-com-renner-e-camicado
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A [Renner](https://www.lojasrenner.com.br/) é uma marca do segmento fashion, e a [Camicado](https://www.camicado.com.br/) uma empresa do segmento de casa e decoração. Ambas fazem parte da corporação brasileira Lojas Renner S.A., um ecossistema de moda e lifestyle.

Tanto a Renner quanto a Camicado firmaram uma parceria com a VTEX e se tornaram [conectores certificados](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro), também chamados de parceiros. Este artigo orienta como configurar a integração com a Renner ou a Camicado.

> ℹ️ Caso seja do seu interesse integrar sua loja VTEX tanto com a Renner quanto com a Camicado, você deverá realizar uma integração para cada um dos parceiros.

Cada marketplace possui um método de cadastro:

- **Camicado:** primeiro é necessário [preencher o formulário](https://www.camicado.com.br/novo-seller) disponibilizado pelo parceiro.
- **Renner:** o passo inicial é [realizar o cadastro através do portal](https://www.lojasrenner.com.br/cadastro-seller).

Feito isso, você pode dar continuidade às etapas da integração, sendo que parte do processo é feito no ambiente VTEX, e parte dele depende da Renner e da Camicado:

- [Configurações na plataforma VTEX](#configuracoes-na-plataforma-vtex)
- [Envio de informações para Renner e Camicado](#envio-de-informacoes-para-renner-e-camicado)

## Configurações na plataforma VTEX

Para integrar com a Renner ou a Camicado, é necessário realizar as seguintes etapas:

- [Definir política comercial](#definir-politica-comercial)
- [Criar novo _AppKey_ e _AppToken_](#criar-novo-AppKey-e-AppToken)
- [Criar ID do afiliado](#criar-id-do-afiliado)

### Definir política comercial

A [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio da sua loja VTEX em um canal de venda. Se você deseja que as mesmas configurações da sua loja sejam utilizadas para seus produtos na Renner ou na Camicado, não é necessário [criar uma política comercial](/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) nova, pois uma mesma política comercial pode ser usada para diferentes canais de venda.

Caso seja do seu interesse ter configurações específicas para vender na Renner ou na Camicado, você pode [configurar uma política comercial para marketplace](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/). Não existe cobrança para a contratação de políticas comerciais adicionais para integrar sua loja VTEX com conectores nativos, conectores certificados, tais como a Renner e a Camicado, ou outras lojas VTEX.

### Criar novo AppKey e AppToken

A chave de integração, chamada de _access key_, é o que possibilita o fluxo de envio e atualização de informações entre sua loja VTEX e a Renner e Camicado. Somente o [usuário Titular da conta (_owner_)](/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA?&utm_source=autocomplete) tem permissão para [criar um *AppKey e AppToken*](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication), e a opção só é visível no Admin para este usuário. 

Se você for integrar com os dois parceiros, Renner e Camicado, será necessário criar um *AppKey e AppToken* para cada um deles. Para configurar uma nova chave, siga os passos abaixo:

1. No Admin, no módulo __Configurações da conta__, clique em `Chaves de aplicação`. 
2. Clique no botão `Gerenciar minhas chaves`.  
3. Clique no botão `Gerar chave`.  
4. Preencha o campo __Rótulo__ com um nome para o novo *AppKey*.  
5. Clique em `Adicionar perfis` e selecione os perfis desejados.  
6. Clique em `Gerar`.  

> ❗ O *secret* gerado, também chamado de *appToken*, só aparece para o usuário esta única vez, não é possível recuperar a informação pelo sistema posteriormente. Portanto, tenha a certeza de guardá-lo em local seguro.

### Criar ID do afiliado

O [afiliado](/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o identificador de uma loja VTEX em um marketplace, sendo necessário que o seller tenha um ID do afiliado diferente para cada marketplace onde venda seus produtos. Isso significa que, para integrar com a Renner ou a Camicado, é preciso [configurar um afiliado](/pt/tutorial/como-configurar-afiliado--tutorials_187) exclusivo. Para criar um novo ID do afiliado, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pedidos > Configurações__, ou digite Pedidos na barra de busca no topo da página e e selecione *Configurações da loja / Pedidos*.  
2. Na aba __Afiliados__, Clique em `+Novo afiliado`.  
3. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar`.  

   - **Nome:** designação do novo afiliado.
   - **ID:** código identificador do afiliado, deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas. A sugestão é usar RNN para a Renner, e CMD para a Camicado.
   - **Política Comercial:** número da política comercial que definirá o sortimento de catálogo, preço e estratégia de envio dos itens utilizados na integração com a Renner ou a Camicado.
   - **E-mail de Follow Up:** endereço eletrônico que receberá notificações sobre a integração.
   - **Endpoint de Search:** URL da aplicação que receberá notificações de produtos, preço, estoque, dentre outras. Você será informado sobre este dado pelo próprio parceiro, seja a Renner ou a Camicado.
   - **Versão do Endpoint de Search:** só existe a opção padrão _1.x.x_.
   - Deixe desmarcada a flag _Usar meu meio de pagamento_.

## Envio de informações para Renner e Camicado

Uma vez concluídas as configurações na plataforma VTEX, para dar continuidade à integração é necessário enviar alguns dados para a Renner e a Camicado. O contato para onde essas informações devem ser enviadas é fornecido pelos próprios parceiros. 

Existem três categorias de dados que devem ser fornecidas, são elas: 

- [Dados gerais](#dados-gerais)
- [Dados de contato](#dados-de-contato)
- [Informações da plataforma VTEX](#informacoes-da-plataforma-vtex)

### Dados gerais

Trata-se de informações sobre a sua empresa. Você deve comunicar qual a Razão Social (nome comercial) e qual o CNPJ (Cadastro Nacional da Pessoa Jurídica) do seu negócio.

### Dados de contato 

Você deve informar os contatos pelos quais será feita a comunicação da sua empresa com a Renner ou a Camicado. É necessário fornecer o telefone (com DDD) de uma área específica da sua empresa, e o email do responsável por ela. Existem quatro áreas dentre as quais você pode escolher:

- Comercial
- Tecnologia da informação
- Operacional
- Financeira

| **Exemplo** | |
| ---------- | ---------- |
| Área | comercial |
| Telefone | (61) 3551-5678 |
| Email | responsavel_comercial@sualoja.com.br |

A exigência é de que você informe no mínimo o contato de um responsável por uma das áreas citadas. No entanto, para facilitar a comunicação entre sua loja e o parceiro, é recomendável enviar até dois contatos de responsáveis de diferentes áreas. Ou seja, se você optar por oferecer todos os contatos possíveis, haverá contatos de oito profissionais, sendo dois de cada uma das quatro áreas citadas. É muito recomendável mandar o maior número de contatos possível, pois isso aumenta as chances de uma comunicação eficiente com a Renner ou Camicado.

### Informações da plataforma VTEX

Alguns dos dados a serem enviados são encontrados no seu Admin, são eles:

- **Nome da conta:** identificador da sua empresa no sistema da VTEX. Para encontrá-lo, acesse o Admin no módulo _CONFIGURAÇÕES DA CONTA > Gerenciamento da conta > Conta > Dados da empresa_.
- **Dados de autenticação do sistema:** _token_ e _appKey_ definidos na etapa [Criar novo AppKey e AppToken](#criar-novo-AppKey-e-AppToken).
- **ID do afiliado:** identificador configurado na etapa [Criar ID do afiliado](#criar-id-do-afiliado).
- **Política comercial:** número da política comercial determinada na etapa [Definir política comercial](#definir-politica-comercial).
- **ID do Seller:** se você estiver integrando a partir da sua conta principal, o valor a ser informado é o número 1. Caso sua loja possua contas franquia e você esteja realizando a integração a partir de uma delas, é necessário enviar o ID do Seller dessa conta. Para encontrá-lo, acesse o Admin no módulo _MARKETPLACE > Sellers > Gerenciamento > ID do Seller_.

Uma vez que você tenha reunido esses dados, você deverá enviá-los para o contato informado pela Renner ou pela Camicado, e a integração será concluída pelo parceiro. Vale ressaltar que o processo de _onboarding_ com conectores certificados é responsabilidade dos próprios parceiros.

> ℹ️ A Camicado disponibiliza documentação sobre a integração. Para consultá-la, faça o download do [Tutorial de Auxílio ao parceiro.pdf](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tutorials/integrações/configurações-de-integrações/Tutorial_de_Aux_lio_ao_parceiro.pdf).  

Caso você tenha dúvidas sobre a integração com a Renner, você pode utilizar o [formulário de suporte Renner](https://atendimento.lojasrenner.com.br/hc/pt-br/requests/new?ticket_form_id=360004738294). Se as dúvidas forem relativas à Camicado, entre em contato pelo email _suporte_marketplace@camicado.com.br_.
