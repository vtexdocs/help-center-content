---
title: 'Integração com Enjoei '
id: 3mV9uhw1AdqFol8K2tfwly
status: PUBLISHED
createdAt: 2021-11-05T19:27:31.160Z
updatedAt: 2023-03-29T15:54:34.785Z
publishedAt: 2023-03-29T15:54:34.785Z
firstPublishedAt: 2021-11-05T20:49:41.372Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: integracao-com-enjoei
legacySlug: integracao-com-enjoei
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

O [Enjoei](https://www.enjoei.com.br/) é uma plataforma de e-commerce que funciona como um comércio de consumo colaborativo que conta com mais de 7,5 milhões de usuários cadastrados. Os produtos mais vendidos na plataforma são vestidos, calças e blusas.

Este artigo orienta como configurar a integração com o Enjoei. O primeiro passo é entrar em contato com o parceiro por meio do cadastro no [Enjoei Marketplace](https://www.enjoei.com.br/quero-vender), você poderá escolher entre duas opções de usuário no Enjoei:

- [Enjoei](https://www.enjoei.com.br/ajuda/sobre-o-enjoei) (padrão)
- [Enjoei Pro](https://www.enjoei.com.br/ajuda/sobre-o-enjoei-pro)

Feito isso, dê continuidade às etapas da integração, que foram organizadas nas seguintes seções:

- [Configurações na plataforma VTEX](#configuracoes-na-plataforma-vtex)
- [Envio de informações para o Enjoei](#envio-de-informacoes-para-o-enjoei)

## Configurações na plataforma VTEX

Para integrar com o Enjoei, é necessário realizar as seguintes etapas no seu Admin:

- [Definir política comercial](#definir-a-politica-comercial)
- [Definir Estratégia de Envio](#definir-a-estrategia-de-envio)
- [Criar permissões Access key e secret](#criar-permissao-para-access-key-e-secret)
- [Criar perfil de acesso](#criar-perfil-de-acesso)
- [Criar afiliado](#criar-afiliado)

### Definir a política comercial

A [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio da sua loja VTEX em um canal de venda. Se você deseja que as mesmas configurações da sua loja sejam utilizadas para seus produtos no Enjoei, não é necessário [criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) nova, pois uma mesma política comercial pode ser usada para diferentes canais de venda.

Caso seja do seu interesse ter configurações específicas para vender no Enjoei, você pode [configurar uma política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace/).

A [contratação de políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X) para integrar com conectores certificados, certificados nativos ou outras lojas VTEX é isenta de taxas. Saiba mais sobre quem são esses parceiros em [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/integrando-com-marketplace--tutorials_402).

<div class="alert alert-warning">
Os produtos que você deseja enviar para o Enjoei devem estar <a href="https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb">associados à política comercial</a> definida. Caso contrário, eles não serão integrados. 
</div>

### Definir a Estratégia de Envio

Para vender seus produtos no Enjoei é preciso determinar uma Estratégia de Envio, ou seja, informar qual será a logística de entrega dos seus produtos. A Estratégia de Envio é composta de três etapas logísticas: [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), [Estoque](https://help.vtex.com/pt/tutorial/o-que-e-um-estoque--23kq5gUdY0QOymOu8QSGcA) e [Doca](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj?&utm_source=autocomplete).

É por meio da Doca que a Política de envio ([transportadora](https://help.vtex.com/pt/tutorial/o-que-e-uma-transportadora--7u9duMD5UQa2QQwukAWMcE)) é associada ao Estoque da sua loja. A doca é o ponto intermediário entre a transportadora e o armazenamento da sua loja, e por meio  dela, as condições entre envio e armazenagem são feitas.

Se for do seu interesse utilizar a mesma Estratégia de Envio definida para sua loja VTEX na integração com o Enjoei, não é necessário criar novas configurações de logística. Se, no entanto, você deseja criar uma Estratégia de Envio específica para o marketplace, é necessário realizar os seguintes passos:

1. [Cadastrar Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio), associada à política comercial usada na integração.
2. [Cadastrar Doca](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), associada à política comercial usada na integração.
3. [Cadastrar Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137), associado à Doca criada no passo anterior.

### Criar permissão para Access key e secret

A chave de integração, chamada de access key, é o que possibilita o fluxo de envio e atualização de informações entre sua loja VTEX e o Enjoei. Somente o [usuário Master da conta (owner)](https://help.vtex.com/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA?&utm_source=autocomplete) tem permissão para criar um [_access key e secret_](https://help.vtex.com/pt/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet), e a opção só é visível no Admin para este usuário.

Para configurar uma nova chave, siga os passos abaixo:

1. No seu avatar de perfil, acesse *CONFIGURAÇÕES DA CONTA*.
2. Clique em **Conta**.
3. Em *Segurança*, clique em `Gerar access key e secret`.
4. Preencha com um nome para o novo access key.
5. Clique em `Gerar novos secrets`.

<div class="alert alert-warning">
O secret gerado, também chamado de appToken, só aparece para o usuário esta única vez, não é possível recuperar a informação pelo sistema posteriormente. Portanto, tenha a certeza de guardá-lo em local seguro.
</div>

### Criar perfil de acesso 

O próximo é criar um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete) para o Enjoei na plataforma VTEX. Os perfis de acesso são autorizações concedidas a usuários para utilizarem os recursos da plataforma VTEX. Para criar um perfil de acesso, siga os passos a seguir:

1. No avatar de seu perfil > *CONFIGURAÇÕES DA CONTA*.
2. Selecione a opção `Usuário`.
3. Clique no botão `Novo`.
4. Preencha os campos da seguinte forma: 
   * **Email:** preencha com o código do Access key obtido na etapa anterior.
   * **Nome Completo:** preencha com o nome do responsável pela conta.
5. Selecione o perfil de acesso `IntegrationProfile - Fulfillment Oms`.
6. Clique em `Adicionar perfil de acesso`.
7. Clique em `Salvar`.

### Criar afiliado

O [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o identificador de uma loja VTEX em um marketplace, sendo necessário que o seller tenha um ID do afiliado diferente para cada marketplace onde venda seus produtos. Isso significa que, para integrar com Enjoei, é preciso [configurar um afiliado exclusivo](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187). Para criar um novo ID do afiliado, siga os passos abaixo:

1. Acesse o Admin.
2. No menu *configurações da loja > Pedidos*.
3. Selecione a opção **Configurações**.
4. Clique na aba de **Afiliados**.
5. Agora, clique no botão `+ Novo Afiliado`.
6. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar`.

- **Nome:** nome que deseja dar ao afiliado, sugerimos nomeá-lo como Enjoei.
- **ID:** código identificador do afiliado, deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas. A sugestão é usar NJD.
- **Política Comercial:** número da política comercial que definirá o sortimento de catálogo, preço e estratégia de envio dos itens utilizados na integração com Enjoei.
- **E-mail de follow-up:** endereço eletrônico que receberá notificações sobre a integração.
- **Endpoint Search:** URL da aplicação que receberá notificações de produtos, preço, estoque, dentre outras. Utilize 

`https://api.enjoei.com.br/vtex/webhook`

- **Versão do Endpoint Search:** Já preenchido com 1.x.x.
- **Usar meio de pagamento:** Deixar desmarcado porque ainda não é suportado para integrações com [Marketplace certificado](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#integrado-a-conector-certificado-parceiro).

## Envio de informações para o Enjoei

Uma vez concluídas as configurações na plataforma VTEX, para dar continuidade à integração é necessário enviar alguns dados para o Enjoei, dividido em duas etapas:

- [Ativar integração no Enjoei](#ativar-a-integracao-no-enjoei)
- [Reindexar base de produtos](#reindexar-base-dos-produtos)

### Ativar a integração no Enjoei

Você deve enviar os seguintes dados para o Enjoei por meio do seguinte [formulário](https://docs.google.com/forms/d/1DZHeJa622pG0AuNM58B5YxHEoUa-04KXD30B-U44TEg/viewform?edit_requested=true). Todas as informações solicitadas no formulário devem ser preenchidas corretamente e revisadas antes do envio para evitar problemas fiscais, de repasse financeiro, ou no [SLA](https://help.vtex.com/pt/tutorial/o-que-e-o-sla-de-operacao-da-plataforma--2cIFrsY5S8usk84OU4QOKm?&utm_source=autocomplete) de integração com a VTEX. São elas:

- **Nome da conta:** identificador da sua empresa no sistema da VTEX. Para encontrá-lo, acesse o Admin no módulo *CONFIGURAÇÕES DA CONTA > Gerenciamento da conta > Conta > Dados da empresa*.
- **Dados de autenticação do sistema:** token e appKey definidos na etapa [Criar novo access key e secret](#criar-permissao-para-access-key-e-secret).
- **ID do afiliado:** identificador configurado na etapa Criar ID do afiliado.
- **Política comercial:** número da política comercial determinada na etapa [Definir política comercial](#definir-a-politica-comercial).
- **ID do Seller:** se você estiver integrando a partir da sua conta principal, o valor a ser informado é o número 1. Caso sua loja possua [contas franquia](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa?&utm_source=autocomplete#o-que-e-uma-conta-franquia) e você esteja realizando a integração a partir de uma delas, é necessário enviar o ID do Seller dessa conta. Para encontrá-lo, acesse o Admin no módulo *MARKETPLACE > Sellers > Gerenciamento > ID do Seller*.
- **Atributos do produto:** nomes dos atributos Cor e Tamanho como estão cadastrados na VTEX. Para encontrá-lo, acesse o Admin no módulo *PRODUTO > Catálogo > Categorias*. Selecione a categoria do produto, acesse *Ações > Campo do produto*.

### Reindexar base dos produtos

Depois de concluir o preenchimento do formulário com as informações solicitadas, o suporte do Enjoei enviará um e-mail solicitando a [reindexação da base](https://help.vtex.com/pt/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802) dos produtos. Entretanto, somente usuários Master conseguem realizar essa etapa. Para reindexar, siga os passos a seguir: 

1. Acesse a URL abaixo, substituindo *{accountname}* pelo nome da sua loja.

  `https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx`

2. Clique no botão `Reindexar Base`.

Uma vez que você tenha concluído todas as etapas anteriores, sua loja será integrada na plataforma do Enjoei e a integração será concluída pelo parceiro.

<div class="alert alert-info">
Você também pode conferir as orientações para integração fornecidas pelo Enjoei na documentação <a href="https://drive.google.com/uc?export=download&id=1bOR_Kc37kRXWWy8b68tShnb2TNbW9BUp">Configuração VTEX</a>.
</div>
