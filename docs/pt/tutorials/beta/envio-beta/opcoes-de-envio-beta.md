---
title: 'Opções de envio (Beta)'
id: 1fRDJFcHCtpTnk7GNyaRDY
status: PUBLISHED
createdAt: 2025-08-22T17:00:47.486Z
updatedAt: 2025-08-22T20:35:40.852Z
publishedAt: 2025-08-22T20:35:40.852Z
firstPublishedAt: 2025-08-22T20:33:50.257Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: delivery-options-beta
legacySlug: opcoes-de-envio-beta
locale: pt
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com [nosso Suporte](https://help.vtex.com/pt/support).

A **Opções de envio** é uma página do Admin VTEX que permite configurar ofertas de entrega flexíveis e precisas durante a jornada de compra, como definir diferentes tipos de disponibilidade de entrega e de zonas geográficas, e controlar como e quando essas opções são exibidas para o cliente. 

Assim, os lojistas ganham autonomia para criar, configurar e gerenciar opções de entrega como um conteúdo estratégico dentro da plataforma VTEX. Essa abordagem oferece mais flexibilidade para alinhar as capacidades logísticas com os objetivos comerciais, aprimorando a experiência de compra dos clientes.

As opções de envio consomem as informações já cadastradas nas [políticas de envio](/pt/tutorial/politica-de-envio--tutorials_140) da loja. Caso não tenha essas configurações definidas ou nenhuma atende às metas de prazos das opções de envio, leia o artigo [Criar uma política de envio](/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT).

Esta página permite que você realize as seguintes ações:

- [Criar](#criar-opcao-de-envio)
- [Editar](#editar-uma-opcao-de-envio)
- [Desativar](#desativar-uma-opcao-de-envio)
- [Ativar](#ativar-uma-opcao-de-envio)
- [Deletar](##deletar-uma-opcao-de-envio)
- [Buscar](#buscar-uma-opcao-de-envio)
- [Filtrar](#filtrar-uma-opcao-de-envio)
- [Configurar preferências](#preferencias-de-opcao-de-envio)

![delivery-options-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/opcoes-de-envio-beta_1.png)

A página apresenta as seguintes informações em uma tabela:

| Colunas | Descrição |
|---|---|
| Nome | Nome que identifica a opção de envio que será exibida no frente da loja. |
| Meta de prazo | Período de tempo do prazo de entrega da opção de envio. |
| Zona de entrega | Localizações onde a opção de envio estará disponível. |
| Status | Situação da opção de envio, que pode ser:<br><ul><li>Ativa: a opção de envio está disponível para o cliente.</li><li>Inativa: a opção de envio não está disponível para o cliente.</li></ul> |

## Criar opção de envio

Para criar uma nova opção de envio, siga os passos abaixo.

1. No Admin VTEX, acesse **Envio > Opções de envio** ou digite **Opções de envio** na barra de busca no topo da página.
2. Clique em `Criar opção de envio`.
3. Preencha os campos do formulário:
  ![delivery-options-form-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/opcoes-de-envio-beta_2.png)
   - **Método de envio:** selecione o tipo de método de envio (**Entrega**, **Entrega agendada**, **Retirada**, **Retirada agendada**).
   - **Nome da opção:** digite o nome da opção que será visualizada pelo cliente durante a compra.
   - **Usar opção como filtro na vitrine da loja**: ative para permitir que os clientes filtrem os produtos por esta opção de envio por meio dos [filtros do Intelligent Search](/pt/tutorial/filtros--k24mQQa9SjmhNWSwdqIMB).
   - **Formato de prazo**: selecione qual medida de tempo (**Dias** ou **Horas**) deve ser utilizada para a entrega.
   - **Condição**: define qual a condição (**A partir de**, **Em até**, **Entre**) para o prazo da opção de envio.
   - **Prazo mínimo:** quantidade mínima de horas ou dias para a opção de envio.
   - **Prazo máximo:** quantidade máxima de horas ou dias para a opção de envio.
   - **Zonas de envio**: clique no botão `+ Adicionar zonas` e selecione as zonas de envio que deseja que sejam atendidas pela opção de envio. É possível buscar por uma zona de envio por meio da barra de busca. Clique em `Salvar` para fechar a janela.
4. Clique em `Criar opção de envio.`

Feito isso, a opção de envio estará ativa e disponível para os clientes da loja.

## Editar uma opção de envio

Para editar uma opção de envio, siga os passos abaixo.

1. No Admin VTEX, acesse **Envio > Opções de envio** ou digite **Opções de envio** na barra de busca no topo da página.
2. Na opção de envio que deseja editar, clique em <i class="fas fa-ellipsis-v"></i>.
3. Clique em <i class="fas fa-pencil-alt"></i> `Editar opção de envio`.
4. Edite as informações que deseja alterar da opção de envio.
5. Clique em `Salvar opção de envio`.

Feito isso, a opção de envio estará ativa e atualizada.

## Desativar uma opção de envio

Para desativar uma opção de envio, siga os passos abaixo.

1. No Admin VTEX, acesse **Envio > Opções de envio** ou digite **Opções de envio** na barra de busca no topo da página.
2. Na opção de envio que deseja desativar, clique em <i class="fas fa-ellipsis-v"></i>.
3. Clique em <i class="fas fa-pause-circle"></i> `Desativar opção de envio`.
4. Clique em `Desativar opção`.

Feito isso, a opção de envio estará desativada.

## Ativar uma opção de envio

Para ativar uma opção de envio que está desativada, siga os passos abaixo.

1. No Admin VTEX, acesse **Envio > Opções de envio** ou digite **Opções de envio** na barra de busca no topo da página.
2. Na opção de envio que deseja ativar, clique em <i class="fas fa-ellipsis-v"></i>.
3. Clique em <i class="fas fa-play-circle"></i> `Ativar opção de envio`.
4. Clique em `Ativar opção`.

Feito isso, a opção de envio estará ativa e disponível para os clientes da loja.

## Deletar uma opção de envio

Para deletar uma opção de envio, siga os passos abaixo.

1. No Admin VTEX, acesse **Envio > Opções de envio** ou digite **Opções de envio** na barra de busca no topo da página.
2. Na opção de envio que deseja deletar, clique em <i class="fas fa-ellipsis-v"></i>.
3. Clique em <i class="fas fa-trash-alt"></i> `Excluir opção de envio`.
4. Clique em `Excluir opção`. Lembre-se que a exclusão é irreversível e pode alterar a experiência de compra caso a opção de envio esteja ativa.

Feito isso, a opção de envio será deletada.

## Buscar uma opção de envio

Para buscar uma opção de envio, clique na barra de busca e digite o nome da opção de envio que deseja encontrar.

## Filtrar uma opção de envio

Para filtrar a lista de opções de envio, clique em um dos filtros descritos abaixo e selecione as opções desejadas.

- **Método de envio:** filtra pelos métodos de envio, **Entrega**, **Entrega agendada, Retirada** e **Retirada Agendada**, cadastrados nas opções de envio.

- **Zona de entrega:** filtra pelas zonas de entrega configuradas nas opções de envio. É possível procurar pelo nome de uma zona de entrega na barra de busca.

- **Status: filtra pelos status, **Ativa** ou **Inativa**, das opções de envio.

- **Exibição na vitrine**: filtra as opções de envio que estão configuradas, **Habilitadas** ou **Não habilitadas**, como [filtro na vitrine da loja](#filtrar-uma-opcao-de-envio).

Clique em `Aplicar` para salvar o filtro selecionado. Para remover a seleção de filtros, clique em `Limpar` em cada filtro aplicado.

## Preferências de opção de envio

Configure as opções de envio na frente da loja para personalizar a experiência do cliente e otimizar a visualização. Siga os passos de configuração para aplicar suas preferências.

1. No Admin VTEX, acesse **Envio > Opções de envio** ou digite **Opções de envio** na barra de busca no topo da página.
2. Clique em `Preferências`.
3. Selecione a forma que deseja exibir as suas opções de envio na loja.
   ![delivery-options-preferencias-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/opcoes-de-envio-beta_3.png)
   - **Exibir sempre todas as opções disponíveis para o produto:** todas as opções de envio que estão disponíveis nas condições de entrega serão exibidas na página de produto e no checkout da loja.
   - **Exibir apenas a opção de menor custo e a de menor prazo:** apenas as opções de envio com menor custo ou com menor prazo serão exibidas na página de produto e no checkout da loja.
4. Clique em `Salvar` para finalizar.
