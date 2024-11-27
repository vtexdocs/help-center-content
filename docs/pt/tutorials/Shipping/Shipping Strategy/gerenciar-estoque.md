---
title: 'Gerenciar Estoque'
id: tutorials_137
status: PUBLISHED
createdAt: 2017-04-27T22:16:29.061Z
updatedAt: 2024-11-05T17:55:49.337Z
publishedAt: 2024-11-05T17:55:49.337Z
firstPublishedAt: 2017-04-27T23:00:45.952Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: managing-warehouses
locale: pt
legacySlug: gerenciar-estoque
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---


O estoque é o espaço físico de armazenamento do ecommerce. Na plataforma VTEX, você pode adicionar itens aos estoques cadastrados na sua loja. Com os itens em estoque, é possível controlar movimentações, disponibilidade e gerenciar o envio dos itens pelas docas e [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140). 

>ℹ️ Para entender melhor como a plataforma VTEX interpreta e define o funcionamento do estoque, consulte o artigo de [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb).

Além disso, é possível cadastrar o estoque, as docas que escoarão os produtos, o tempo que os itens levam para ser transportados do estoque até a doca e o valor cobrado por esse transporte.

Este artigo contém as informações necessárias para:

* [Cadastrar um novo estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#cadastrar-estoque).  
* [Preencher os campos de cadastro no estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#campos-de-cadastro).  
* [Editar um estoque existente](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#editar-estoque).  
* [Excluir um estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#excluir-estoque).  

>⚠️ A ordem de cadastro sugerida na plataforma VTEX para o funcionamento esperado do sistema logístico é:
> <body>
>
> [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)
>
> 2. [Doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
>
> [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)
>
> </body>

## Cadastrar estoque

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.  
2. Clique na aba `Estoques`.  
3. Clique no botão `Criar estoque`.  
4. Confira se o botão <i class="fas fa-toggle-on"></i> está como **Ativo** no canto superior direito. Caso não esteja mude-o para **Ativo**.  
5. Preencha os [campos de cadastro](#campos-de-cadastro).  
6. Clique no botão `Salvar alterações`.  

### Campos de cadastro

* **Nome**: nome do estoque.
* **ID** (Opcional): identificador do estoque. Se não for preenchido, será criado automaticamente.
* **Origem**: relaciona o estoque a uma doca. Selecione uma [doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) existente: 
    * Clique no botão `Adicionar doca` .
    * Selecione pelo <i class="fas fa-check-square"></i> qual doca (ou docas) deseja.
    * Depois de selecionar clique em `Salvar alterações`.
    * Depois de selecionada a doca, preencha o campo **Dias e horas de processamento.** Neste campo você deve configurar o tempo de manuseio do pedido (em dias e horas) para transportá-lo do estoque à doca. O campo deve ser preenchido com o número de dias clicando em <i class="fas fa-minus"></i> e <i class="fas fa-plus"></i> e a quantidade de horas pelo campo <i class="far fa-clock"></i>.  
    * Preencha a **Tarifa adicional** caso tenha algum custo adicional de preparação dos pedidos do estoque à doca.
    * Clique em `Salvar Alterações.`
* **Estoque inStore**: marque  <i class="fas fa-toggle-on"></i> para `Ativo` para vincular o estoque a uma loja física que possui inStore. Para que os [pontos de retirada](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E) fiquem disponíveis para associação, eles precisam estar previamente cadastrados. Para saber mais como utilizar essa funcionalidade, consulte o artigo [Lojas físicas como pontos de retirada](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/4hXfgqXxS1lwAfnxgja3xW)

## Editar estoque

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.  
2. Clique na aba `Estoques`.  
3. Selecione qual estoque deseja editar.  
4. Clique em <i class="fas fa-ellipsis-v"></i>.  
5. Clique em `Editar`.  
6. Altere os 
[campos](#campos-de-cadastro) desejados.  
7. Clique em `Salvar alterações`.  

## Excluir estoque

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.  
2. Clique na aba `Estoques`.  
3. No card do estoque desejado, selecione o <i class="fas fa-ellipsis-v"></i>.
4. Selecione a opção `Deletar`.  

>⚠️ Para adicionar itens ao estoque, é preciso cadastrar os itens primeiramente no catálogo. Depois de cadastrar os itens pelo [catálogo](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR), e ter um estoque cadastrado, você deve associar os itens ao seu respectivo estoque pelo [gerenciamento de inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139).
