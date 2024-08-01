---
title: 'Cadastrar provedores de pagamento e antifraude'
id: tutorials_444
status: PUBLISHED
createdAt: 2017-04-27T22:05:18.209Z
updatedAt: 2024-01-22T20:37:11.273Z
publishedAt: 2024-01-22T20:37:11.273Z
firstPublishedAt: 2017-04-27T23:03:24.823Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: afiliacoes-de-gateway
locale: pt
legacySlug: afiliacoes-de-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Com a VTEX, você pode realizar a configuração de diversos provedores: gateways, adquirentes, subadquirentes, [orquestradores](https://www.y.uno/br), [PSPs](https://en.wikipedia.org/wiki/Payment_service_provider), entre outros. Estes lhe permitem oferecer diferentes métodos e condições de pagamentos aos seus clientes, bem como serviços de proteção de antifraude. Anteriormente, essas configurações eram conhecidas em nosso sistema como afiliações de gateway.

Por meio da tela de gerenciamento de provedores você pode:

- [Cadastrar um novo provedor](#cadastrar-provedor)
- [Visualizar provedores cadastrados](#visualizar-provedores-cadastrados)
- [Editar configurações de provedores](#editar-configuracoes-de-provedores)

![interface_provedor_PT_1](//images.ctfassets.net/alneenqid6w5/6721j5gbs4JkxAFJ9QPQve/d997ea6d0bf7807c1219d307933467e6/interface_provedor_PT_1.JPG)

## Cadastrar provedor

Para adicionar um novo provedor de pagamento ou antifraude em sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Clique em `Novo provedor`.
3. Clique no provedor de pagamento de sua preferência.
4. Preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações fornecidas pelo provedor de pagamento.
5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão __Instalar app__ e siga as instruções de instalação. Esta mensagem é exibida somente para alguns tipos de afiliações de gateway.
6. Clique em `Salvar`.

<div class = "alert alert-info">
  <p>Caso haja outros campos a serem preenchidos além do <b>Chave de aplicação</b> e <b>Token de aplicação</b> (Passo 6), o provedor deve ser configurado conforme tutorial específico. Para maiores informações, verifique a subseção <a href="https://help.vtex.com/pt/subcategory/configuracoes-de-pagamentos--3tDGibM2tqMyqIyukqmmMw">Configurações de Pagamento</a>.</p>
</div>

<div class = "alert alert-danger">
  As credenciais utilizadas para preencher os campos <strong>Chave de aplicação</strong> e <strong>Token de aplicação</strong> devem ser fornecidas pelo provedor de pagamentos para identificar a loja. Não devem ser utilizadas <a href="https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet#gerar-chaves-de-aplicacao-na-sua-conta">credenciais geradas no Admin</a>, que se iniciam com <code>vtexappkey-</code>.
</div>

Para configurar os métodos de pagamento a serem processados pelo provedor de pagamento escolhido, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete).

![interface_provedor_PT_2](//images.ctfassets.net/alneenqid6w5/2uzCrSICV4zlbieq13Vky0/03ec92c0a18fd9cc8b368fd27a4eeee2/artigo_interface_provedor_PT_2.JPG)

## Visualizar provedores cadastrados

A tela principal de gerenciamento de provedores, disponível no Admin VTEX em __Configurações > Pagamentos > Provedores__, exibe todos os provedores de pagamento ou antifraude cadastrados em uma loja. Para permitir o acesso rápido a informações de provedores específicos é possível realizar uma busca ou utilizar um filtro.

### Buscar provedores

Para localizar provedores pelo nome, acesse a página de gerenciamento de provedores e digite o nome do provedor desejado.

![interface_provedor_PT_3](//images.ctfassets.net/alneenqid6w5/1AVxMc8gzpBLTaoOM3DqJt/b7489e1bd5b8f23cf1c41190266c7178/interface_provedor_PT_3.JPG)

### Filtrar provedores

Para selecionar a exibição de provedores por meio de filtros, acesse a página de gerenciamento de provedores e aplique um ou mais filtros indicados abaixo, conforme desejado.

- __Nome__: selecione a exibição de provedores de pagamento por meio do nome, ativando a caixa de texto ou digitando na barra de busca do menu.

![interface_provedor_PT_4](//images.ctfassets.net/alneenqid6w5/3HWuAtg2Ei867PMhqqXTpZ/b994729bad2abcc7fff53dbae2c45788/interface_provedor_PT_4.JPG)

- __Tipo__: selecione a exibição de provedores de pagamento, antifraude ou ambos.

![interface_provedor_PT_5](//images.ctfassets.net/alneenqid6w5/34wou6AALCHGCAMSufWpxZ/52542c9cbf58ab10d6527e5b5c8efd17/interface_provedor_PT_5.JPG)

- __Ambiente__: selecione a exibição de provedores pelo tipo de ambiente de operação cadastrado (produção ou teste).

![interface_provedor_PT_6](//images.ctfassets.net/alneenqid6w5/36BloW94uLYLN7qGFO1HeP/fe3d094d3ce7e5463841694309b28a52/interface_provedor_PT_6.JPG)

<div class = "alert alert-danger">
Para remover os filtros aplicados e voltar a visualizar todos os provedores cadastrados na loja, clique no botão <code>Limpar todos</code>.</div>

### Editar configurações de provedores

Para editar configurações de provedores de pagamento ou antifraude já cadastrados na loja, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Clique no provedor de pagamento ou antifraude desejado.
3. Na tela de configuração do provedor, clique em `Editar`.
4. Realize as modificações necessárias e clique em `Salvar`.

![interface_provedor_PT_7](//images.ctfassets.net/alneenqid6w5/49bqIpjzfjB6VGrjwMiYEK/1852b341c59e2ac6419504214fcfdee0/artigo_interface_provedor_PT_7.JPG)

<div class = "alert alert-danger">
Antes de realizar qualquer alteração na configuração de um provedor, como por exemplo: dados de autorização, modo de processamento ou tipo de reembolso, certifique-se de que as novas informações a serem inseridas não irão prejudicar o seu desempenho operacional na loja.</div>

