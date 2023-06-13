---
title: Integração com Riachuelo
id: kpfxAgwEcANihHLT4iW81
status: PUBLISHED
createdAt: 2021-07-12T21:05:52.501Z
updatedAt: 2023-03-29T16:08:55.655Z
publishedAt: 2023-03-29T16:08:55.655Z
firstPublishedAt: 2021-07-12T21:56:47.310Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: integracao-com-riachuelo
legacySlug: integracao-com-riachuelo
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

A [Riachuelo](https://www.riachuelo.com.br), marca brasileira especializada em moda, é uma rede de lojas de departamento que figura entre as maiores varejistas do país. Após firmar uma parceria com a VTEX, a Riachuelo se tornou um [conector certificado](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro), também chamado de parceiro. Isso significa que agora é mais fácil para uma loja VTEX vender seus produtos no Riachuelo Marketplace.

Este artigo orienta como configurar a integração com a Riachuelo. O primeiro passo é entrar em contato com o parceiro por meio do [cadastro no Riachuelo Marketplace](https://www.riachuelo.com.br/marketplace). Para saber como prosseguir após o cadastro, você pode acessar a página da Riachuelo [PORTAL DO SELLER - CADASTRO DE SENHA E PRIMEIRO ACESSO](https://riachuelomarketplace.zendesk.com/hc/pt-br/articles/1500010648222-Portal-do-Seller-Cadastro-de-senha-e-primeiro-acesso).

Feito isso, dê continuidade às etapas da integração, que foram organizadas em três seções:

- [Configurações na plataforma VTEX](#configuracoes-na-plataforma-vtex)
- [Envio de informações para Riachuelo](#envio-de-informacoes-para-riachuelo)
- [Cadastro do Endpoint de Search do afiliado](#cadastro-do-endpoint-de-search-do-afiliado)

<div class="alert alert-info">
Você também pode conferir as orientações para a integração fornecidas pela Riachuelo na página <a href="https://riachuelomarketplace.zendesk.com/hc/pt-br/articles/1500008432221-Integra%C3%A7%C3%A3o-VTEX-Orienta%C3%A7%C3%B5es-gerais">MANUAL DE INTEGRAÇÃO VTEX</a>.
</div>

## Configurações na plataforma VTEX

Para integrar com a Riachuelo, é necessário realizar as seguintes etapas no seu Admin:

- [Definir política comercial](#definir-politica-comercial)
- [Criar afiliado](#criar-afiliado)
- [Definir Estratégia de Envio](#definir-estrategia-de-envio)
- [Criar novo access _key_ e _secret_](#criar-novo-access-key-e-secret)
- [Criar novo usuário](#criar-novo-usuario)

### Definir política comercial

A [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio da sua loja VTEX em um canal de venda. Se você deseja que as mesmas configurações da sua loja sejam utilizadas para seus produtos no Riachuelo Marketplace, não é necessário [criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) nova, pois uma mesma política comercial pode ser usada para diferentes canais de venda.

Caso seja do seu interesse ter configurações específicas para vender na Riachuelo, você pode [configurar uma política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace/). Não existe cobrança para a contratação de políticas comerciais adicionais para integrar lojas VTEX com conectores nativos, conectores certificados ou outras lojas VTEX. Saiba mais em [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/integrando-com-marketplace--tutorials_402).

<div class="alert alert-warning">
Os produtos que você deseja enviar para o Riachuelo Marketplace devem estar <a href="https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb">associados à política comercial</a> definida. Caso contrário, eles não serão integrados. 
</div>

### Criar afiliado

O [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o identificador de uma loja VTEX em um marketplace, sendo necessário que o seller tenha um ID do afiliado diferente para cada marketplace onde venda seus produtos. Ou seja, para a integração com a Riachuelo é preciso [configurar um afiliado](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187) exclusivo. Para criar um novo ID do afiliado, siga os passos abaixo:

1. No Admin, no menu `Configurações da loja > Pedidos`.
2. Clique em `Configurações`.
3. No topo da página, selecione `Afiliados`.
4. Clique em `+ Novo afiliado`.
5. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar`.

- **Nome:** designação do novo afiliado, a sugestão do parceiro é utilizar _rchlo marketplace_.
- **ID:** código identificador do afiliado, deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas. A sugestão é usar RCL.
- **Política Comercial:** número da política comercial que definirá o sortimento de catálogo, preço e estratégia de envio dos produtos enviados para a Riachuelo.
- **E-mail de Follow Up:** endereço eletrônico que receberá notificações sobre a integração.
- **Endpoint de Search:** URL da aplicação que receberá notificações de produtos, preço, estoque, dentre outros.

<div class="alert alert-danger">
Esta informação ficará pendente e será retomada na parte final deste artigo, em <a href="">Cadastro do Endpoint de Search do afiliado</a>.
</div>

- **Versão do Endpoint de Search:** só existe a opção padrão _1.x.x_.
- Deixe desmarcada a flag _Usar meu meio de pagamento_.

### Definir Estratégia de Envio

Para vender seus produtos no Riachuelo Marketplace é preciso determinar uma [Estratégia de Envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), ou seja, informar qual será a logística de entrega dos seus produtos. A Estratégia de Envio é composta de três etapas logísticas: [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), [Estoque ](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)e [Doca](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj?&utm_source=autocomplete).

A Política de Envio estabelece o conjunto de regras das condições de frete, ou seja, informações de custo, transporte e tempo de entrega. Além disso, é também por meio Política de Envio que é feita a associação de qual será o local de armazenamento dos seus produtos (Estoque), e qual será o espaço de escoamento desses produtos (Doca).

Se for do seu interesse utilizar a mesma Estratégia de Envio definida para sua loja VTEX na integração com a Riachuelo, não é necessário criar novas configurações de logística. Se, no entanto, você deseja criar uma Estratégia de Envio específica para o marketplace, é necessário realizar os seguintes passos:

1. [Cadastrar Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio), associada à política comercial usada na integração.
2. [Cadastrar Doca](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), associada à política comercial usada na integração.
3. [Cadastrar Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137), associado à Doca criada no passo anterior.

Caso você queira conferir se as configurações foram realizadas corretamente, você pode fazer uma [simulação de envio](https://help.vtex.com/pt/tutorial/simulacao-de-frete--tutorials_144). O Simulador de envio é uma ferramenta que possibilita checar as condições de entrega do produto sem de fato abrir um pedido.

### Criar novo access key e secret

A chave de integração, chamada de _access key_, é o que possibilita o fluxo de envio e atualização de informações entre sua loja VTEX e a Riachuelo. Somente o [usuário Titular da conta _(owner)_](https://help.vtex.com/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA?&utm_source=autocomplete) tem permissão para [criar um _access key_ e _secret_](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication), e a opção só é visível no Admin para este usuário. Para configurar uma nova chave, siga os passos abaixo:

1. No avatar de seu perfil, clique em _CONFIGURAÇÕES DA CONTA_.
2. Clique em `Conta`.
3. Em _Segurança_, clique em `Gerar access key e secret`.
4. Preencha com um nome para o novo _access key_ e clique em `Gerar novos secrets`.

<div class="alert alert-danger">
O <i>secret</i> gerado, também chamado de <i>appToken</i>, só aparece para o usuário esta única vez, não é possível recuperar a informação pelo sistema posteriormente. Portanto, tenha a certeza de guardá-lo em local seguro.
</div>

### Criar novo usuário

Um usuário é um perfil configurado para poder realizar determinadas ações na plataforma VTEX. Depois de ter gerado um novo _access key_ e _secret_, é necessário criar um usuário para conceder as permissões de acesso necessárias. Para isso, siga os passos abaixo:

1. No avatar de seu perfil, clique em _CONFIGURAÇÕES DA CONTA_.
2. Clique em `Usuários`.
3. Clique no botão `+ NOVO`.
4. Preencha o campo do email com a _access key_ criada.
5. Clique em `+ADICIONAR PERFIS`.
6. Selecione a flag correspondente a [`IntegrationProfile - Fulfillment Gateway Oms`](https://help.vtex.com/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#integrationprofile-fulfillment-gateway-oms).
7. Clique no botão `ADICIONAR PERFIS`.
8. Clique em `SALVAR`.

## Envio de informações para Riachuelo

Uma vez concluídas as configurações na plataforma VTEX, para dar continuidade à integração é necessário enviar alguns dados para a Riachuelo. Essas informações devem ser encaminhadas para o gerente da sua conta na Riachuelo, por meio do email _[marketplace@riachuelo.com.br](mailto:marketplace@riachuelo.com.br)_.

- **Nome da conta:** também chamado de _Account Name_, é o identificador da sua empresa no sistema da VTEX. Para encontrá-lo, acesse o Admin no módulo _CONFIGURAÇÕES DA CONTA > Gerenciamento da conta > Conta > Dados da empresa_.
- **Política comercial:** número da política comercial determinada na etapa [Definir política comercial](#definir-politica-comercial).
- **ID do afiliado:** identificador configurado na etapa [Criar afiliado](#criar-afiliado).
- **_Access key (appKey)_:** definido na etapa [Criar novo access key e secret](#criar-novo-access-key-e-secret).
- **_Secret (appToken)_:** definido na etapa [Criar novo access key e secret](#criar-novo-access-key-e-secret).

## Cadastro do Endpoint de Search do afiliado

Na etapa [Criar afiliado](#criar-afiliado), o preenchimento do campo Endpoint de Search havia ficado pendente e agora será realizado.

<div class="alert alert-danger">
O cadastro do <i>Endpoint de Search</i> só pode ser feito após a confirmação da Riachuelo de que o catálogo da sua loja VTEX foi integrado.
</div>

Uma vez recebida a confirmação do parceiro, realize os passos abaixo:

1. No Admin, no menu _Configurações de loja > Pedidos_.
2. Clique em `Configurações`.
3. No topo da página, selecione `Afiliados`.
4. Clique sobre o ID do afiliado definido na etapa [Criar afiliado](#criar-afiliado).
5. Preencha o campo _Endpoint de Search_ com a URL `https://vtex-notification-prd.azurewebsites.net/api/notification`.
6. Clique em `Salvar`.

Feito isso, a integração com a Riachuelo terá sido concluída. Vale ressaltar que o processo de _onboarding_ com conectores certificados é responsabilidade dos parceiros. A Riachuelo disponibiliza conteúdo de [treinamento sobre o Portal do Seller](https://riachuelomarketplace.zendesk.com/hc/pt-br/articles/1500010648222-Portal-do-Seller-Cadastro-de-senha-e-primeiro-acesso).

<div class="alert alert-info">
Você também pode conferir as orientações para a integração fornecidas pela Riachuelo pela página <a href="https://riachuelomarketplace.zendesk.com/hc/pt-br/articles/1500008432221-Integra%C3%A7%C3%A3o-VTEX-Orienta%C3%A7%C3%B5es-gerais">MANUAL DE INTEGRAÇÃO VTEX</a>. Em caso de dúvidas, entre em contato pela <a href="https://riachuelomarketplace.zendesk.com/hc/pt-br">central de ajuda da Riachuelo</a>.
</div>

