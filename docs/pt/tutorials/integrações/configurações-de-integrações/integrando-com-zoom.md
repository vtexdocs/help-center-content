---
title: 'Integração com Zoom'
id: 2OoQjigCVOIEWWkgOqwCK6
status: PUBLISHED
createdAt: 2017-05-19T17:47:11.266Z
updatedAt: 2025-08-26T17:51:12.618Z
publishedAt: 2025-08-26T17:51:12.618Z
firstPublishedAt: 2017-05-19T18:04:32.420Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: integrating-with-zoom
legacySlug: integrando-com-zoom
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

O [Zoom](https://www.zoom.com.br/) é um marketplace que conecta sellers e consumidores de todo o Brasil. A plataforma traz destaques de anúncios e oferece condições de compra estratégicas. Para mais informações sobre parcerias com o Zoom, confira a página da Mosaico [Tudo que você precisa saber para ser um Parceiro](https://guiadolojista.zoom.com.br/hc/pt-br/sections/360012666152-Tudo-que-voc%C3%AA-precisa-saber-para-ser-um-Parceiro).

Este artigo orienta sobre as etapas necessárias para integrar sua loja VTEX com o Zoom, e é dividido em duas partes principais:

- [Configurações na plataforma VTEX](#configuracoes-na-plataforma-vtex)
- [Envio de informações para o Zoom](#envio-de-informacoes-para-o-zoom)

## Configurações na plataforma VTEX

Para integrar com o Zoom, é necessário realizar as seguintes etapas:

- [Configurar perfil de acesso](#configurar-perfil-de-acesso)
- [Criar coleção](#criar-colecao)
- [Definir política comercial](#definir-politica-comercial)
- [Criar ID do afiliado](#criar-id-do-afiliado)
- [Configurar conector](#configurar-conector)
- [Reindexar base](#reindexar-base)

> ℹ️ Se for do seu interesse consultar a documentação do Zoom, faça o [download do arquivo Integração VTEX.pdf](https://drive.google.com/uc?export=download&id=1hZzqJgyQtozHNJKGBgDZiu6_5eKtHaU5). Em caso de dúvidas, você pode entrar em contato com o Zoom pelo email <i/>integracao@zoom.com.br</i>.

### Configurar perfil de acesso

Uma account VTEX utiliza [perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) para facilitar o gerenciamento de acesso e permissões de usuários em uma conta. Um perfil de acesso é um conjunto de recursos definidos para atender determinado tipo de usuário.

Para a integração com o Zoom, é necessário [criar um perfil de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso). Para realizar essa configuração, siga os passos abaixo:

1. No avatar do seu perfil acesse _CONFIGURAÇÕES DA CONTA_, clique em `Gerenciamento da Conta`.
3. Clique em `Perfis de acesso`.
4. Clique em `Novo Perfil`.
5. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar` (campos marcados com o símbolo * são obrigatórios).

   - **Escolher perfil de acesso:** clique no menu e escolha a opção _Custom_, para criar um perfil customizado.
   - **Nome do perfil*:** atribua um nome ao perfil criado. Como sugestão do Zoom, utilize _IntegrationProfile - Fulfillment Oms_. Usar esta nomenclatura pode facilitar a comunicação com a equipe do Zoom.
   - **Escolha um produto:** é preciso configurar todos os recursos disponíveis para três produtos, são eles OMS, VTEX Fulfilment e PCI Gateway. Você deve selecionar no menu o produto _OMS > Adicionar todos os produtos > Configurar outro produto_. Repita a operação com os demais produtos, no caso VTEX Fulfilment e PCI Gateway.
   - **Adicionar usuários para este perfil de acesso:** é possível incluir usuários ao perfil criado. Como sugestão do Zoom, preencha este campo com _vtexappkey-zoomtest-BHAOOW_. Utilizar esta nomenclatura pode facilitar a comunicação com a equipe do Zoom.

### Criar coleção

A Coleção é um recurso de agrupamento de produtos e existem diferentes [Tipos de Coleção](/pt/tutorial/tipos-de-colecao--5tKnhh8tMGIrVL7Fqirq7n). É comum utilizá-la para realizar ações comerciais temáticas ou selecionar produtos com critérios semelhantes. Se você já possui uma coleção configurada, você pode utilizá-la na integração com o Zoom, não é necessário criar outra.

Se você ainda não possui uma coleção, há duas formas de configurar uma. É possível [criar uma coleção pelo módulo Coleções Beta](/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye) (disponível somente a partir do Admin v3), ou fazer o [Cadastro de Coleções CMS](/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L).

### Definir política comercial

Ao [criar uma política comercial](/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE), você determina o sortimento de produtos, preços e estratégias de envio em um canal de venda. Ou seja, é preciso [configurar uma política comercial para marketplace](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/) para definir quais informações dos seus produtos serão enviadas para o Zoom.

Só será necessário ter uma política comercial diferente daquela utilizada na sua loja VTEX se você quiser oferecer uma seleção diferente de produtos ou enviar preços diferentes para o Zoom. Para [contratar políticas comerciais adicionais](/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta solicitar via ticket em nosso [Suporte](/pt/support) selecionando a opção **Comercial** e o tipo de solicitação `Criação de Política Comercial`.

A contratação de política comercial adicional para integrar com [conector nativo](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), [conector certificado (parceiro)](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outras lojas VTEX é isenta de taxas.

> ❗ Caso seja feita alguma alteração na sua política comercial, o Zoom deverá ser avisado. Você pode entrar em contato pelo email <i/>integracao@zoom.com.br</i>.

### Criar ID do afiliado

O [afiliado](/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o identificador de uma loja VTEX em um marketplace, sendo necessário que o seller tenha um ID do afiliado diferente para cada marketplace onde venda seus produtos. Para integrar com o Zoom, será preciso [configurar um afiliado](/pt/tutorial/como-configurar-afiliado--tutorials_187), conforme os passos a seguir:

1. Acesse o Admin.
2. Na página _Configurações da loja > Pedidos_, clique em `Configurações`.
4. No topo da página, selecione a opção `Afiliados`.
5. Clique em `Novo afiliado`.
6. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar`.

   - **Nome:** designação do novo afiliado, a sugestão é utilizar _Zoom_.
   - **ID:** código identificador do afiliado, que deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas. A sugestão é usar ZNN.
   - **Política Comercial:** ID da política comercial que definirá o sortimento de catálogo e valores dos itens utilizados na integração.
   - **E-mail de Follow Up:** endereço eletrônico que receberá notificações sobre a integração.
   - **Endpoint de Search:** este campo deve ser preenchido com a URL
`https://int-vtex.zoom.com.br/zvtexconnector/api/notification`.
   - **Versão do Endpoint de Search:** só existe a opção padrão _1.x.x_.
   - Deixe desmarcada a flag _Usar meu meio de pagamento_.

### Configurar conector

A configuração da integração com o Zoom é feita no Admin. Para realizá-la, siga as instruções abaixo:

1. Acesse o Admin.
2. No módulo _MARKETPLACE_, clique em `Integrações`.
3. Clique em `Configurações`.
4. No _card_ do Zoom, clique em `Integrar`.
5. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar configuração` (campos marcados com o símbolo * são obrigatórios).

   - **Id do afiliado:** preencha com o identificador definido na etapa [Criar ID do afiliado](#criar-id-do-afiliado).
   - **E-mail do afiliado:** notificações sobre a integração serão enviadas para este endereço eletrônico.
   - **Política comercial:** ID da política comercial que será utilizado na integração, determinada na etapa [Definir política comercial](#definir-politica-comercial).
   - **Taxa da Divergência de Preço*:** valor percentual que será aceito na diferença de preço do produto na sua loja VTEX e o preço dele no Zoom. Qualquer pedido que possua uma diferença entre o preço de venda no marketplace e o preço determinado pelo seller será comparado com esse valor percentual. Se a divergência for menor que o valor definido neste campo, o pedido será integrado normalmente. Caso contrário, o [pedido não será integrado](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado).

### Reindexar base

A indexação é um processo que prepara os dados do SKU e atualiza as informações para servir de base para pesquisas e outras funcionalidades. Ao reindexar a base, você entra em uma fila para iniciar o processo de indexação dos seus produtos. Durante esse período, que varia devido a vários fatores, os produtos da loja seguem disponíveis no site da loja e continuam à venda.

É importante ressaltar que **somente o [usuário Titular da conta (owner)](/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA?&utm_source=autocomplete) tem permissão para reindexar a base.** Para realizar esta ação, siga os passos abaixo:

1. Acesse a página _{nomedaloja}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx_, substituindo `{nomedaloja}` pelo nome da sua loja/ambiente.
2. Clique no botão `Reindexar Base`.

Feito isso, o processo é iniciado automaticamente e pode ser acompanhado pelo Admin, no módulo _PRODUTOS > Catálogo > Relatórios._ Para mais informações, veja o artigo [Limpar base de dados da loja](/pt/tutorial/entendendo-a-manutencao-da-base-de-dados--34P9LGs7BCIQK6acQom802).

## Envio de informações para o Zoom

Uma vez que todas as etapas das [Configurações na plataforma VTEX](#configuracoes-na-plataforma-vtex) tenham sido realizadas, para concluir a integração, é necessário enviar para o Zoom (email _integracao@zoom.com.br_) as seguintes informações:

   - **ID store:** código identificador da sua loja, composto de uma série de números e letras. Ele pode ser encontrado no Admin no módulo _CONFIGURAÇÕES DA CONTA > Gerenciamento da conta > Conta_.
   - **Política comercial:** ID da política comercial utilizada na etapa [Configurar conector](#configurar-conector).
   - **ID do afiliado:** o mesmo configurado na etapa [Criar ID do afiliado](#criar-id-do-afiliado).
   - **Dados bancários:** conta para a qual deve ser feito o repasse de vendas.
   - **Logotipo da sua loja:** a imagem deve ter alta resolução e, preferencialmente, ser em formato .png.

> ℹ️ Você pode consultar a documentação do Zoom sobre a integração, para isso faça o [download do arquivo Integração VTEX.pdf](https://drive.google.com/uc?export=download&id=1hZzqJgyQtozHNJKGBgDZiu6_5eKtHaU5). Em caso de dúvidas, entre em contato com o Zoom pelo email <i/>integracao@zoom.com.br</i>.
