---
title: 'Gerenciar políticas de envio'
id: 30nynylgbWieimhaMtGTIE
status: PUBLISHED
createdAt: 2024-01-30T16:15:33.582Z
updatedAt: 2024-01-31T13:48:35.723Z
publishedAt: 2024-01-31T13:48:35.723Z
firstPublishedAt: 2024-01-31T00:54:58.302Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: managing-shipping-policies
locale: pt
legacySlug: gerenciar-politicas-de-envio
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

[Política de envio](/pt/tutorial/politica-de-envio--tutorials_140) é um conjunto de regras e configurações que definem quais opções de envio serão apresentadas aos clientes no checkout. A relação entre política de envio, [estoque](/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e [doca](/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) é o que compõe a sua [estratégia de envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) na VTEX, conforme a imagem abaixo:

![shipping_strategy_PT](https://images.ctfassets.net/alneenqid6w5/1LdEuL3gjF12uwFj4ya6OL/c60984b010b96980383798cffad3527f/shipping_strategy_PT.png)

Este artigo apresenta como acompanhar e gerenciar suas políticas de envio. No Admin VTEX, em **Envio > Estratégia de envio**, a aba **Políticas de envio** é onde você realiza as seguintes ações:

* [Visualizar lista de políticas de envio](#visualizar-lista-de-politicas-de-envio)
* [Pesquisar política de envio](#pesquisar-politica-de-envio)
* [Filtrar políticas de envio](#filtrar-politicas-de-envio)
* [Ver Painel de Transportadoras](#ver-painel-de-transportadoras-opcional) (opcional)
* [Editar política de envio](#editar-politica-de-envio)
* [Ativar ou desativar política de envio](#ativar-ou-desativar-politica-de-envio)
* [Excluir política de envio](#excluir-politica-de-envio)

<div class = "alert alert-info">
Também é possível criar políticas de envio, confira o passo a passo no artigo <a href="https://help.vtex.com/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT">Criar uma política de envio</a>.
</div>

## Visualizar lista de políticas de envio

No Admin VTEX, ao acessar **Envio > Estratégia de envio**, na aba **Políticas de envio** você encontra uma lista como na imagem abaixo:

![shipping_policy_PT](https://images.ctfassets.net/alneenqid6w5/uiwwWTGlS60kPjMDLNfzY/8f71ffc10c5e9e530c7f7d122de84005/shipping_policy_PT.png)

As informações apresentadas nessa página estão descritas na tabela a seguir: 

| **Coluna** | **Descrição** |
| :---: | :--- |
| Política de envio | Nome que identifica a sua [política de envio](/pt/tutorial/politica-de-envio--tutorials_140) para usuários com acesso ao seu Admin VTEX. Saiba mais no artigo [Criar uma política de envio](/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT). |
| Tipo de envio | <p><a href="https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-envio--tutorials_126">Tipo de envio</a>, ou método de envio, é o nome que você configura na política de envio que aparece para os clientes no checkout. Por isso, é importante utilizar nomes intuitivos ao criar uma política de envio.</p><p>Exemplo: <code>Entrega expressa</code> e <code>Entrega normal</code>.</p> |
| Docas | Identifica quais [docas](/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) estão associadas à [política de envio](/pt/tutorial/politica-de-envio--tutorials_140). Ao passar o mouse sobre o número nesta coluna, você visualiza os nomes de todas as docas associadas à política de envio. |
| Status | <p>Status de ativação da política de envio, que pode ser:</p><p><ul><li><b>Ativa:</b> a política de envio está ativada e é considerada válida no <a href="https://help.vtex.com/pt/tutorial/como-funciona-o-calculo-de-envio--tutorials_116">cálculo</a> para o envio de pedidos.</li><li><b>Inativa:</b> a política de envio está desativada e não é válida para envios.</li></ul></p> |
| Transportadora (opcional) | Este campo aparece somente no Admin VTEX de lojas que ativaram o [VTEX Shipping Network Correios](/pt/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa) ou que contrataram o [VTEX Shipping Network](/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs), e identifica exclusivamente os Correios. |
| Contrato (opcional) | <p>Este campo aparece somente no Admin VTEX de lojas que ativaram o <a href="https://help.vtex.com/pt/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa">VTEX Shipping Network Correios</a>.</p><p>Os valores possíveis são:<ul><li><b>VTEX:</b> a loja contratou uma tabela dos Correios intermediada pela VTEX.</li><li><b>Próprio:</b> a loja contratou uma tabela por conta própria antes de ativar o VTEX Shipping Network Correios.</li></ul></p> |

## Pesquisar política de envio

Na caixa de busca com o ícone lupa <i class="fas fa-search"></i>, é possível buscar políticas de envio pelo nome. Ao digitar um caractere na barra de busca, a pesquisa é imediatamente realizada. Para limpar a busca, clique no ícone fechar <i class="far fa-times-circle"></i>.

<div class = "alert alert-info">
Caso não haja um resultado para a pesquisa, verifique a ortografia usada na busca e se existe algum filtro selecionado.
</div>

## Filtrar políticas de envio

É possível filtrar políticas pelo seu status, que pode ser `Ativa` ou `Inativa`, veja a seguir o passo a passo:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio**, ou digite **Estratégia de envio** na barra de busca no topo da página.
2. Na aba **Políticas de envio**, clique em `Status`.
3. Selecione uma das opções de status, que pode ser:
    * **Ativa:** a política de envio está ativada e é considerada válida no [cálculo](/pt/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) para o envio de pedidos.
    * **Inativa:** a política de envio está desativada e não é válida para envios.
4. Clique em `Aplicar`.

Para remover o filtro aplicado, clique em `Status` e depois em `Limpar`.

### Filtro para tipos de contrato (opcional)

As lojas que contrataram o [VTEX Shipping Network](/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs) ou ativaram o [VTEX Shipping Network Correios](/pt/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa) podem pesquisar por tipo de contrato, os valores existentes são:

* `VTEX`: a contratação da tabela dos Correios foi intermediada pela VTEX.
* `Próprio`: a contratação da tabela dos Correios foi feita pela própria loja.

## Ver Painel de Transportadoras (opcional)

As lojas que contrataram o [VTEX Shipping Network](/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs) ou ativaram o [VTEX Shipping Network Correios](/pt/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa) têm na página de **Políticas de envio** o botão `Painel de Transportadoras`. Clicando nele, o usuário é redirecionado para o [Painel VTEX Shipping Network](/pt/tutorial/painel-vtex-shipping-network--51e8tx1IehiN4ZtURRWU92), onde gerencia a operação das transportadoras usadas nesses produtos.

## Editar política de envio

Para editar uma política de envio, realize os passos abaixo:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio**, ou digite **Estratégia de envio** na barra de busca no topo da página.
2. Na aba **Políticas de envio**, na linha correspondente à política desejada, clique no ícone menu <i class="fas fa-ellipsis-v"></i>. Você pode [pesquisar](#pesquisar-politica-de-envio) ou [filtrar](#filtrar-politicas-de-envio) políticas.
3. Clique em `Editar`.
4. Realize as alterações desejadas. Para informações sobre os campos, veja o artigo [Criar uma política de envio](/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT).
5. Clique em `Salvar alterações`.

## Ativar ou desativar política de envio

Para ativar ou desativar uma política de envio, realize os passos abaixo:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite **Estratégia de envio** na barra de busca no topo da página.
2. Na aba **Políticas de envio**, na linha correspondente à política desejada, clique no ícone menu <i class="fas fa-ellipsis-v"></i>. Você pode [pesquisar](#pesquisar-politica-de-envio) ou [filtrar](#filtrar-politicas-de-envio) políticas.
3. Clique em `Ativar` ou `Desativar`, conforme desejar.
4. No modal aberto, clique novamente em `Ativar` ou `Desativar`.

## Excluir política de envio

Para excluir uma política de envio, realize os passos abaixo:

<div class="alert alert-danger">
A ação de excluir uma política de envio é permanente e não pode ser desfeita.
</div>

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite **Estratégia de envio** na barra de busca no topo da página.
2. Na aba **Políticas de envio**, na linha correspondente à política desejada, clique no ícone menu <i class="fas fa-ellipsis-v"></i>. Você pode [pesquisar](#pesquisar-politica-de-envio) ou [filtrar](#filtrar-politicas-de-envio) políticas.
3. Clique em `Excluir`.
4. No modal aberto, clique novamente em `Excluir`.

