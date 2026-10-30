---
title: 'Cadastrar provedores de pagamento e antifraude'
createdAt: 2017-04-27T22:05:18.209Z
updatedAt: 2026-10-15T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: registering-gateway-affiliations
locale: pt
hidden: false
---

Com a VTEX, você pode configurar diversos tipos de provedores, como gateways, adquirentes, subadquirentes, orquestradores e provedores de serviços de pagamento (PSPs), que permitem oferecer diferentes meios e condições de pagamento aos seus clientes, além de serviços de proteção antifraude. Anteriormente, essas configurações eram conhecidas em nosso sistema como afiliações de gateway.

> ℹ️ Para compreender as atribuições de cada instituição envolvida nas operações de pagamento, consulte [Agentes financeiros no fluxo de pagamento](https://help.vtex.com/pt/docs/tutorials/agentes-financeiros-no-fluxo-de-pagamento).

Por meio da tela de gerenciamento de provedores você pode:

- [Cadastrar um novo provedor](#cadastrar-provedor)
- [Visualizar provedores cadastrados](#visualizar-provedores-cadastrados)
- [Editar configurações de provedores](#editar-configuracoes-de-provedores)

![interface_provedor_PT_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/provedores-de-pagamento/afiliacoes-de-gateway_1.JPG)

## Cadastrar provedor

Para adicionar um novo provedor de pagamento ou antifraude em sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Clique em `Novo provedor`.
3. Digite o nome do provedor de pagamento ou antifraude desejado na barra de busca e clique sobre ele.
4. Preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações fornecidas pelo provedor.

    > ⚠️ Para alguns conectores, uma mensagem solicitará a instalação do app. Se ela aparecer, clique em `Instalar app` e siga as instruções.

5. Clique em `Salvar`.

> ℹ️ Alguns provedores exigem outros campos além da **Chave de aplicação** e do **Token de aplicação** (passo 4) ou a instalação de um app. Nesses casos, configure o provedor conforme o tutorial específico, disponível na [Lista de provedores de pagamento por país](/pt/docs/tutorials/lista-de-provedores-de-pagamento-por-pais).

> ❗ As credenciais utilizadas para preencher os campos **Chave de aplicação** e **Token de aplicação** devem ser fornecidas pelo provedor de pagamentos para identificar a loja. Não devem ser utilizadas [credenciais geradas no Admin](/pt/docs/tutorials/chaves-de-api#gerar-chaves-de-aplicacao-na-sua-conta), que se iniciam com `vtexappkey-`.

Depois de salvar, o provedor passa a ser exibido na tela de gerenciamento de provedores. Em seguida, defina em [Condições de pagamento](/pt/docs/tutorials/condicoes-de-pagamento) os meios de pagamento que ele vai processar e, se necessário, configure [condições especiais](/pt/docs/tutorials/condicoes-especiais) para esses meios.

![interface_provedor_PT_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/provedores-de-pagamento/afiliacoes-de-gateway_2.JPG)

## Visualizar provedores cadastrados

A tela principal de gerenciamento de provedores, disponível no Admin VTEX em __Configurações > Pagamentos > Provedores__, exibe todos os provedores de pagamento ou antifraude cadastrados em uma loja. Para acessar rapidamente um provedor específico, você pode buscar pelo nome ou aplicar filtros.

### Buscar provedores

Para localizar provedores pelo nome, acesse a página de gerenciamento de provedores e digite o nome do provedor desejado na barra de busca ou no filtro __Nome__.

![interface_provedor_PT_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/provedores-de-pagamento/afiliacoes-de-gateway_3.JPG)

### Filtrar provedores

Para selecionar a exibição de provedores por meio de filtros, acesse a página de gerenciamento de provedores e aplique um ou mais filtros indicados abaixo, conforme desejado.

- __Tipo__: selecione a exibição de provedores de pagamento, antifraude ou ambos.

![interface_provedor_PT_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/provedores-de-pagamento/afiliacoes-de-gateway_5.JPG)

- __Ambiente__: selecione a exibição de provedores pelo tipo de ambiente de operação cadastrado (produção ou teste).

![interface_provedor_PT_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/provedores-de-pagamento/afiliacoes-de-gateway_6.JPG)

> ❗ Para remover os filtros aplicados e voltar a visualizar todos os provedores cadastrados na loja, clique no botão `Limpar todos`.

## Editar configurações de provedores

Para editar configurações de provedores de pagamento ou antifraude já cadastrados na loja, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Clique no provedor de pagamento ou antifraude desejado.
3. Na tela de configuração do provedor, clique em `Editar`.
4. Realize as modificações necessárias e clique em `Salvar`.

![interface_provedor_PT_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/provedores-de-pagamento/afiliacoes-de-gateway_7.JPG)

> ❗ Alterações na configuração de um provedor, como nas credenciais de **Chave de aplicação** e **Token de aplicação**, no modo de processamento, no tipo de reembolso ou na opção **Ativar modo de teste**, afetam os pagamentos que ele processa na loja. Antes de salvar, confirme com o provedor que as novas informações estão corretas.
