---
title: 'Integração com MadeiraMadeira'
id: J4QCENKiz4urYNfaMuE0i
status: PUBLISHED
createdAt: 2021-11-05T21:04:22.888Z
updatedAt: 2024-02-19T20:17:16.961Z
publishedAt: 2024-02-19T20:17:16.961Z
firstPublishedAt: 2021-11-05T21:34:03.556Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: integracao-com-madeiramadeira
locale: pt
legacySlug: integracao-com-madeiramadeira
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

[MadeiraMadeira](https://www.madeiramadeira.com.br/) é a maior loja online de móveis e decoração da América Latina com mais de 16 milhões de acessos por mês e 5 milhões de clientes atendidos no Brasil.

Este artigo orienta como configurar a integração com MadeiraMadeira. O primeiro passo é entrar em contato com o parceiro por meio do [cadastro na MadeiraMadeira Marketplace](https://www.madeiramadeira.com.br/marketplace). Após o cadastro, faça login no [Portal MadeiraMadeira Marketplace](https://painelmarketplace.madeiramadeira.com.br/).

Feito isso, dê continuidade às etapas da integração, que foram organizadas nas seguintes seções:

- [Configurações na plataforma VTEX](#configuracoes-na-plataforma-vtex)
- [Envio de informações para MadeiraMadeira](#envio-de-informacoes-para-madeiramadeira)

## Configurações na plataforma VTEX

Para integrar com a MadeiraMadeira, é necessário realizar as seguintes etapas no seu Admin:

- [Definir política comercial](#definir-a-politica-comercial)
- [Definir Estratégia de Envio](#definir-a-estrategia-de-envio)
- [Criar coleção](#criar-colecao)
- [Criar permissões Access key e secret](#criar-permissao-para-access-key-e-secret)
- [Criar perfil de acesso](#criar-perfil-de-acesso)
- [Criar afiliado](#criar-afiliado)

### Definir a política comercial

A [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio da sua loja VTEX em um canal de venda. Se você deseja que as mesmas configurações da sua loja sejam utilizadas para seus produtos na MadeiraMadeira, não é necessário [criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) nova, pois uma mesma política comercial pode ser usada para diferentes canais de venda.

Caso seja do seu interesse ter configurações específicas para vender na MadeiraMadeira, você pode [configurar uma política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace/).

A [contratação de políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X) para integrar com conectores certificados, certificados nativos ou outras lojas VTEX é isenta de taxas. Saiba mais sobre quem são esses parceiros em [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/integrando-com-marketplace--tutorials_402).

<div class="alert alert-warning">
Os produtos que você deseja enviar para a MadeiraMadeira devem estar <a href="https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb">associados à política comercial</a> definida. Caso contrário, eles não serão integrados. 
</div>

### Definir a Estratégia de Envio

Para vender seus produtos na MadeiraMadeira é preciso determinar uma Estratégia de Envio, ou seja, informar qual será a logística de entrega dos seus produtos. A Estratégia de Envio é composta de três etapas logísticas: [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), [Estoque](https://help.vtex.com/pt/tutorial/o-que-e-um-estoque--23kq5gUdY0QOymOu8QSGcA) e [Doca](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj?&utm_source=autocomplete).

É por meio da Doca que a Política de envio ([transportadora](https://help.vtex.com/pt/tutorial/o-que-e-uma-transportadora--7u9duMD5UQa2QQwukAWMcE)) é associada ao Estoque da sua loja. A doca é o ponto intermediário entre a transportadora e o armazenamento da sua loja, e por meio  dela, as condições entre envio e armazenagem são feitas.

Se for do seu interesse utilizar a mesma Estratégia de Envio definida para sua loja VTEX na integração com a MadeiraMadeira, não é necessário criar novas configurações de logística. Se, no entanto, você deseja criar uma Estratégia de Envio específica para o marketplace, é necessário realizar os seguintes passos:

1. [Cadastrar Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio), associada à política comercial usada na integração.
2. [Cadastrar Doca](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), associada à política comercial usada na integração.
3. [Cadastrar Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137), associado à Doca criada no passo anterior.

### Criar coleção

A Coleção é um recurso de agrupamento de produtos e existem diferentes [tipos de coleção](https://help.vtex.com/pt/tutorial/tipos-de-colecao--5tKnhh8tMGIrVL7Fqirq7n). É comum utilizá-la para realizar ações comerciais temáticas ou selecionar produtos com critérios semelhantes. Se você já possui uma coleção configurada, você pode utilizá-la na integração com MadeiraMadeira, não é necessário criar outra.

Se você ainda não possui uma coleção, há duas formas de configurar uma. É possível [criar uma coleção pelo módulo Coleções Beta](https://help.vtex.com/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye) ou fazer o [Cadastro de Coleções CMS](https://help.vtex.com/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L).

Com a coleção feita, você deverá [adicionar os produtos](https://help.vtex.com/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#selecao-de-produtos) que farão parte dela.

### Criar permissão para Access key e secret

A chave de integração, chamada de access key, é o que possibilita o fluxo de envio e atualização de informações entre sua loja VTEX e MadeiraMadeira. Somente o [usuário Master da conta (owner)](https://help.vtex.com/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA?&utm_source=autocomplete) tem permissão para criar um [_access key e secret_](https://help.vtex.com/pt/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet), e a opção só é visível no Admin para este usuário. 

Para configurar uma nova chave, siga os passos abaixo:

1. No avatar do seu perfil, clique em  *CONFIGURAÇÕES DA CONTA*.
2. Clique em **Conta**.
3. Em *Segurança*, clique em `Gerar access key e secret`.
4. Preencha com um nome para o novo access key.
5. Clique em `Gerar novos secrets`.

<div class="alert alert-warning">
O secret gerado, também chamado de appToken, só aparece para o usuário esta única vez, não é possível recuperar a informação pelo sistema posteriormente. Portanto, tenha a certeza de guardá-lo em local seguro.
</div>

### Criar perfil de acesso 

O próximo é criar um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete) para a MadeiraMadeira na plataforma VTEX. Os perfis de acesso são autorizações concedidas a usuários para utilizarem os recursos da plataforma VTEX. Para criar um perfil de acesso, siga os passos a seguir:

1. No avatar do seu perfil, clique em *CONFIGURAÇÕES DA CONTA*.
2. Selecione a opção `Usuário`.
3. Clique no botão `Novo Usuário`.
4. Preencha o campo __email__ com `vtexappkey-madeiramadeira-GFXVZH`
5. Selecione o perfil de acesso `IntegrationProfile - Fulfillment Oms`.
6. Clique em `Adicionar perfil de acesso`.
7. Clique em `Salvar`.

<div class= "alert aler-tinfo">
Se você não possui o perfil de acesso <a href= "https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#integrationprofile-fulfillment-oms"> IntegrationProfile-Fulfillment_Oms</a>, será necessário <a href= "https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso"> Criar o Perfil de acesso</a> manualmente.
</div>

### Criar afiliado

O [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o identificador de uma loja VTEX em um marketplace, sendo necessário que o seller tenha um ID do afiliado diferente para cada marketplace onde venda seus produtos. Isso significa que, para integrar com MadeiraMadeira, é preciso [configurar um afiliado exclusivo](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187). Para criar um novo ID do afiliado, siga os passos abaixo:

1. Acesse o Admin.
2. No menu *Configurações da loja > Pedidos*.
3. Selecione a opção **Configurações**.
4. Clique na aba de **Afiliados**.
5. Agora, clique no botão `+ Novo Afiliado`.
6. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar`.

- **Nome:** designação do novo afiliado, a sugestão do parceiro é utilizar MadeiraMadeira.
- **ID:** código identificador do afiliado, deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas. A sugestão é usar MDM.
- **Política Comercial:** número da política comercial que definirá o sortimento de catálogo, preço e estratégia de envio dos itens utilizados na integração com MadeiraMadeira.
- **E-mail de follow-up:** endereço eletrônico que receberá notificações sobre a integração.
- **Endpoint Search:** URL da aplicação que receberá notificações de produtos, preço, estoque, dentre outras. Utilize  

`https://iron-man.madeiramadeira.com.br/v1/vtex/produto/notificacao`

- **Versão do Endpoint Search:** Já preenchido com 1.x.x.
- **Usar meio de pagamento:** Deixar desmarcado porque ainda não é suportado para integrações com [Marketplace certificado](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#integrado-a-conector-certificado-parceiro).

## Envio de informações para MadeiraMadeira

Uma vez concluídas as configurações na plataforma VTEX, para dar continuidade à integração é necessário enviar alguns dados para a MadeiraMadeira. Essas informações devem ser encaminhadas para o [Suporte da MadeiraMadeira](https://madeiramadeira.zendesk.com/hc/pt-br/requests/new) ou para o seu gerente comercial.

- **Account Name:** é o identificador da sua empresa no sistema da VTEX. Para encontrá-lo, acesse o Admin no módulo *CONFIGURAÇÕES DA CONTA > Gerenciamento da conta > Conta > Dados da empresa*.
- **Sales Channel:** código da política comercial cadastrada na VTEX na etapa [Definir política comercial](#definir-a-politica-comercial).
- **ID do afiliado:** código identificador do afiliado configurado na etapa [Criar afiliado](#criar-afiliado).
- **E-mail do responsável pela integração:** preencha com um email do responsável pela integração da sua loja com a MadeiraMadeira.
- **Telefone do responsável pela integração:** cadastre um telefone para contato.
CNPJ da empresa: preencher com o CNPJ da sua loja.

### Reindexar base dos produtos

Depois de concluir o preenchimento do formulário com as informações solicitadas, o suporte do MadeiraMaderia enviará um e-mail solicitando a [reindexação da base](https://help.vtex.com/pt/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802) dos produtos. Entretanto, somente usuários Master conseguem realizar essa etapa. Para reindexar, siga os passos a seguir: 

1. Acesse a URL abaixo, substituindo *{accountname}* pelo nome da sua loja.

  `https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx`

2. Clique no botão `Reindexar Base`.

Uma vez que você tenha concluído todas as etapas anteriores, sua loja será integrada na plataforma da MadeiraMadeira e a integração será concluída pelo parceiro.

<div class="alert alert-info">
Você também pode conferir as orientações para integração fornecidas pela MadeiraMadeira pela página <a href="https://madeiramadeira.zendesk.com/hc/pt-br/articles/360016223591-Integra%C3%A7%C3%A3o-via-Vtex-In%C3%ADcio">Integração via VTEX - Início</a>.
</div>
