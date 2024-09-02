---
title: 'Integração com Conecta Lá'
id: 403fvPYdv2f6VeP0na3awP
status: DRAFT
createdAt: 2021-06-08T17:54:34.361Z
updatedAt: 2024-02-19T20:16:43.888Z
publishedAt: 
firstPublishedAt: 2021-06-08T18:36:46.591Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: integracao-com-conecta-la
locale: pt
legacySlug: integracao-com-conecta-la
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

A [Conecta Lá](https://www.conectala.com.br/) é uma empresa especializada em gestão e performance em marketplaces, responsável pelas várias etapas envolvidas no gerenciamento de vendas nestas plataformas.

Este artigo orienta sobre as etapas necessárias para integrar sua loja VTEX com a Conecta Lá, e é dividido em duas partes:

- [Configurações na plataforma VTEX](#configuracoes-na-plataforma-vtex)
- [Configurações na Conecta Lá](#configuracoes-na-conecta-la)

<div class="alert alert-info">
Você também pode conferir as orientações para a integração por meio do vídeo <a href="https://conectala.agidesk.com/br/central-de-ajuda/como-obter-os-dados-para-integracao">Como obter os dados para integração?</a> da Conecta Lá, ou consultar a documentação do parceiro fazendo o <a href="https://drive.google.com/uc?export=download&id=1jbKK7fR68jfH6rBNmy-gq5d1lQZ-2cBs">download Conecta La (documentacao parceiro).pdf</a>.
</div>

## Configurações na plataforma VTEX

Para integrar com a Conecta Lá, será necessário realizar as seguintes etapas no Admin da VTEX:

1. [Criar novo _access key e secret_](#criar-novo-access-key-e-secret).
2. [Configurar perfil de acesso](#configurar-perfil-de-acesso).
3. [Definir política comercial](#definir-politica-comercial).
4. [Criar ID do afiliado](#criar-id-do-afiliado).

### Criar novo access key e secret

A chave de integração, chamada de _access key_, é o que possibilita o fluxo de envio e atualização de informações entre sua loja VTEX e a Conecta Lá. **Somente o [usuário Titular da conta (owner)](https://help.vtex.com/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA?&utm_source=autocomplete) tem permissão para criar um _access key_ e _secret_,** e a opção só aparece disponível para ele. Para configurar uma nova chave, siga os passos abaixo:

1. No módulo _CONFIGURAÇÕES DA CONTA_ no seu Admin VTEX, clique em `Gerenciamento da Conta`.
2. Clique em `Conta`.
3. Em _Segurança_, clique em `Gerar access key e secret`.
4. Preencha com um nome para o novo _access key_ e clique em `Gerar novos secrets`.

<div class="alert alert-danger">
O <i/>secret</i> gerado, também chamado de <i/>appToken</i>, só aparece para o usuário esta única vez, não é possível recuperar a informação pelo sistema posteriormente. Portanto, tenha a certeza de guardá-lo em local seguro.
</div>

### Configurar perfil de acesso

Para facilitar o gerenciamento de acesso e permissões de usuários em uma conta, na VTEX existe o [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc). Um perfil de acesso é um conjunto de recursos definidos para atender determinado tipo de usuário.

Para a integração com a Conecta Lá, é recomendada a [criação de um perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso). Para realizar essa configuração, você deve seguir os passos abaixo:

1. No módulo _CONFIGURAÇÕES DA CONTA_ no seu Admin VTEX, clique em `Gerenciamento da Conta`.
2. Clique em `Perfis de acesso`.
3. Clique em `Novo Perfil`.
4. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar` (campos marcados com o símbolo * são obrigatórios).

   - **Escolher perfil de acesso:** no menu, escolha a opção _Custom_, para criar um perfil customizado.

   - **Nome do perfil*:** atribua um nome ao perfil criado, de preferência algo que faça menção ao tipo de acesso que está sendo concedido ao usuário.

   - **Escolha um produto:** é preciso configurar todos os recursos disponíveis para quatro produtos, são eles Catalog, Checkout, OMS e Pricing. Você deve selecionar no menu o produto _Catalog > Adicionar todos os produtos > Configurar outro produto_. Repita a operação com os demais produtos, no caso Checkout, OMS e Pricing.

   - **Adicionar usuários para este perfil de acesso:** é possível adicionar usuários ao perfil criado, basta preencher este campo com o email do usuário e clicar em _Adicionar_. É preciso adicionar um email por vez, caso se deseje adicionar mais de um usuário.

### Definir política comercial

Ao [criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE), você determina o sortimento de produtos, preços e estratégias de envio em um canal de venda. Ou seja, é preciso [configurar uma política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace/) para definir quais informações dos seus produtos serão enviadas para a Conecta Lá.

Só será necessário adquirir uma política comercial diferente daquela utilizada na sua loja VTEX se você quiser oferecer uma seleção diferente de produtos, ou enviar preços diferentes para a Conecta Lá.

Para [contratar políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta solicitar via ticket em nosso [Suporte](https://help.vtex.com/pt/support) selecionando a opção **Comercial** e o tipo de solicitação `Criação de Política Comercial`.

A contratação de política comercial adicional para integrar com [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), [conector certificado (parceiro)](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outras lojas VTEX é isenta de taxas.

### Criar ID do afiliado

O [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o identificador de uma loja VTEX em um marketplace, sendo necessário que o seller tenha um ID do afiliado diferente para cada marketplace onde venda seus produtos. Para integrar com a Conecta Lá, será preciso [configurar um afiliado](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187), conforme os passos a seguir:

1. No módulo _Configurações da loja_ > _Pedidos_ no seu Admin VTEX, clique em `Configurações`.
3. No topo da página, selecione a opção `Afiliados`.
4. Clique em `Novo afiliado`.
5. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar`.

   - **Nome:** designação do novo afiliado.

   - **ID:** código identificador do afiliado, que deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas. A sugestão é usar CNL.

   - **Política Comercial:** número da política comercial que definirá o sortimento de catálogo, preço e logística dos itens utilizados na integração.

   - **E-mail de Follow Up:** endereço eletrônico que receberá notificações sobre a integração.

   - **Endpoint de Search:** URL da aplicação que receberá notificações de produtos, preço, estoque, dentre outras. Você encontra esta informação no painel da Conecta Lá, e deve preenchê-la respeitando o uso de maiúsculas e minúsculas, pois o campo é _case sensitive_.

   - **Versão do Endpoint de Search:** só existe a opção padrão _1.x.x_.

   - Deixe desmarcada a flag _Usar meu meio de pagamento_.

## Configurações na Conecta Lá

Uma vez concluídas as configurações na plataforma VTEX, dê continuidade à integração no ambiente da [Conecta Lá](https://www.conectala.com.br/). Para isso, serão necessários os seguintes dados:

- **Secret key:** definido na etapa [Criar novo access key e secret](#criar-novo-access-key-e-secret).

- **Access key:** definido na etapa [Criar novo access key e secret](#criar-novo-access-key-e-secret).

- **Nome da conta:** esta informação pode ser encontrada no Admin da VTEX, no módulo _CONFIGURAÇÃO DA CONTA > Gerenciamento da Conta > Conta > Nome da conta_.

- **Política comercial:** determinada na etapa [Definir política comercial](#definir-politica-comercial).

- **ID afiliado:** configurado na etapa [Criar ID do afiliado](#criar-id-do-afiliado).

- **Endpoint de Search:** o mesmo que foi utilizado no cadastro da etapa [Criar ID do afiliado](#criar-id-do-afiliado).

<div class="alert alert-info">
Você também pode conferir as orientações para a integração por meio do vídeo <a href="https://conectala.agidesk.com/br/central-de-ajuda/como-obter-os-dados-para-integracao">Como obter os dados para integração?</a> da Conecta Lá, ou consultar a documentação do parceiro fazendo o <a href="https://drive.google.com/uc?export=download&id=1jbKK7fR68jfH6rBNmy-gq5d1lQZ-2cBs">download Conecta La (documentacao parceiro).pdf</a>.
</div>

Em caso de dúvidas, consulte a página da Conecta Lá sobre [treinamentos e perguntas frequentes](https://conectala.agidesk.com/br/central-de-ajuda).
