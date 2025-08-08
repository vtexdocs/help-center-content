---
title: 'Gerenciamento de Serviços'
id: 3sGqSI93t878ETAWzCZ0E2
status: PUBLISHED
createdAt: 2021-07-07T18:14:19.507Z
updatedAt: 2021-07-07T18:21:59.145Z
publishedAt: 2021-07-07T18:21:59.145Z
firstPublishedAt: 2021-07-07T18:17:34.523Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: service-management
legacySlug: gerenciamento-de-servicos
locale: pt
subcategoryId: 7GypxQ3HDmFVCHTNTwyhr0
---

Os serviços no VTEX Tracking são as coletas, atendimentos ou entregas realizadas pelo seu negócio. Para acompanhar o andamento e informações dos serviços cadastrados na plataforma, o sistema dispõe da aba **Serviços** no módulo **Cadastro**. É possível acompanhar o status de um serviço, excluir, alterar ou  finalizar um serviço já cadastrado na plataforma.

Para acessar a funcionalidade vá em **Cadastro > Serviços.**

Depois de acessar a aba você pode:

* Visualizar os serviços cadastrados na plataforma pela [Lista de Serviços](#lista-de-servicos);
* Utilizar os [Filtros](#filtros) disponíveis para selecionar um serviço específico ou um conjunto de serviços;
* [Finalizar serviços](#finalizar-servicos);
* [Deletar serviços](#deletar-servicos);

<div class="alert alert-info">
Não recomendamos o cadastro de novos serviços por essa aba.  Para cadastrar serviços pela plataforma utilize a Importação de Serviços
</div>

## Lista de Serviços

Ao acessar a aba, a página **Consultar Serviços** é  aberta e a lista com todos os serviços cadastrados da plataforma. As informações disponíveis pela lista são:

* **Portador:** nome do responsável pela entrega.
* **Cliente:** nome do cliente. 
* **Parceiro:** nome do parceiro (caso exista) que é o contratante do serviço.
* **NF:** número da nota fiscal.
* **Data de Cadastro:** data de cadastro do serviço na plataforma.
* **Descrição:** descrição do serviço e observações.
* **Status:** pode ser **Ativo, Realizado, Cancelado pelo BackOffice, Em Andamento, Não Realizado, Roteirizado, Pausado, Retornado ao Remetente** e **Cancelado pelo Cliente.**
* **Motivo Serviço Realizado:** descrição da realização do serviço.
* **Motivo Serviço Não Realizado:** justificativa do serviço não realizado.

Pela lista você pode visualizar os detalhes de um serviço específico, alterá-lo ou  excluí-lo. Para isso clique no   <i class="fas fa-ellipsis-v"></i>   à esquerda da coluna do **Portador:**

* **Visualização dos detalhes** ao clicar em `Detalhes`:
    1. Na página **Detalhes do Serviços,** confira as informações desejadas.
    2. No topo da página, clique em `Voltar para Lista` caso queira voltar a página **Consultar Serviços** e ter a lista de serviços. 
    3. Se quiser editar o serviço que está visualizando, no topo da página clique em `Editar`. Na página **Editar Serviços** Altere os itens desejados e clique em `Salvar`.
* **Alteração do serviço** ao clicar em `Editar`:
    1. Na página **Editar Serviços** altere os itens desejados;
    2. Clique em Salvar. 
* **Exclusão do serviço:** ao clicar em `Excluir`. Na página Detalhes do Serviços clique em `Apagar` no canto superior esquerdo da tela.

<div class="alert alert-warning"> 
Só é possível excluir e editar um serviço que possui status <b>Ativo</b>.
</div>

## Filtros

Para facilitar a busca de serviços específicos há na parte superior da página **Consultar Serviços** filtros de busca:

* **Tipo:** o tipo de serviço entre Entrega, Atendimento e Coleta.
* **Data Início:** filtro da data do cadastro.
* **Data Fim:** filtro da data da finalização do serviço.
* **Portador:** proprietário da NF/ serviço .
* **Cliente:** nome do cliente. 
* **Status:** Ativo, Realizado,Cancelado pelo BackOffice, Em Andamento, Não Realizado, Roteirizado, Pausado, Retornado ao Remetente, Cancelado pelo Cliente.
* **Nota Fiscal:** número da nota fiscal.
* **Transportadora:** empresa responsável pela realização da entrega.

## Finalizar Serviços

Para finalizar serviços manualmente pela plataforma web do VTEX Tracking:

1. Acesse o menu esquerdo e vá em **Cadastro > Serviços;**
2. Clique no botão `Ações`;
3. Selecione `Finalizar Serviços`;
4. Uma nova janela abrirá com uma lista dos serviços que não possuem status de finalizado. Pela janela você poderá:
    * Filtrar o serviço por: `Data de Início`, `Data de Fim`, `Portador, Cliente`, `Nota Fiscal` e `Status`. Ao selecionar e preencher o filtro desejado, clique em Filtrar;
    * Selecionar  <i class="far fa-check-square"></i>  um ou mais serviços que deseja finalizar. É possível selecionar todos os serviços que ainda não foram finalizados selecionando a caixa na coluna **Selecionar Todos.**
    * Clique em `Alterar status`;
    * Selecione a **Justificativa** para a mudança; 
    * Selecione e o novo **Status** que os serviços receberão;
    * Confira os serviços que estão selecionados, e clique em `Salvar`.

## Deletar Serviços

Para deletar um serviço pela plataforma web do VTEX Tracking:

1. Acesse o menu esquerdo e vá em **Cadastro > Serviços;**
2. Clique no botão `Ações`;
3. Selecione `Deletar Serviços`; 
4. Uma nova janela abrirá com uma lista dos serviços que não possuem status **Ativo**. Pela janela você poderá:
    * Filtrar os serviços desejados pelas **data de início** e **data de fim:** selecione as datas e clique em <i class="fas fa-search"></i>;
    * Selecione os serviços que deseja deletar clicando em <i class="far fa-check-square"></i>;
    * Clique em `Deletar`;
