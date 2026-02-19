---
title: 'Configurar Alocação de estoque'
id: 1yCEr7xQ0gVsTBB0ktMYVX
status: PUBLISHED
createdAt: 2025-09-19T17:08:56.742Z
updatedAt: 2025-09-19T19:10:28.249Z
publishedAt: 2025-09-19T19:10:28.249Z
firstPublishedAt: 2025-09-19T17:59:52.833Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: configuring-warehouse-assignment
legacySlug: configurar-alocacao-de-estoque
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A funcionalidade **Alocação de estoque** permite sincronizar diferentes pontos logísticos cadastrados na VTEX com as localizações de estoque no Mercado Livre. Neste artigo apresentamos a estrutura da página da funcionalidade, seus requisitos, as ações disponíveis e como atribuir os estoques.  

## Requisitos  

Para utilizar a funcionalidade **Alocação de estoque**, a conta VTEX precisa atender aos três requisitos abaixo:  

- Estar habilitada para [alocação de estoque](/pt/docs/tutorials/alocacao-de-estoque-no-mercado-livre).  
- Estar habilitada para o novo modelo de [cadastro de produto](/pt/announcements/2025-06-30-novo-modelo-de-anuncios-no-mercado-livre) e ter ao menos um anúncio cadastrado no novo modelo.  
- Verifique se os estoques estão ativos no módulo de Estratégias de envio da VTEX.  

## Estrutura da página  

A página da funcionalidade pode ser acessada no **Admin VTEX > Marketplace > Mercado Livre > Preferências > Alocação de estoque.** 

Esta página é composta por:  

- Barra de busca   
- Filtro de status  
- Tabela com os estoques VTEX da loja  

### Barra de busca e filtro

Na barra de busca da página é possível pesquisar por estoques VTEX presentes na lista. Já no filtro, é possível selecionar uma das opções de status, **Pendente** ou **Alocado.**  

Essas opções podem ser utilizadas em conjunto para refinar ainda mais a pesquisa do seller.  

### Tabela de estoques  

A tabela de estoques é composta pelas colunas, **Estoque VTEX, Tipo, Status** e **Estoque do Mercado Livre.**  

- **Estoque VTEX** é a coluna onde aparecem todos os estoques ativos no módulo de [Estratégia de entrega](/pt/docs/tutorials/gerenciar-estoque).   
- **Tipo**  
- **Status** é a coluna que mostra se um estoque VTEX está atribuído a um estoque Mercado Livre ou está pendente.  
- **Estoque Mercado Livre** é a coluna que apresenta o botão `Alocar` se um estoque VTEX tiver o status **Pendente.** Caso o estoque VTEX tenha o status **Alocado,** essa coluna apresenta o nome e o ID do estoque Mercado Livre.  

> ℹ️ Um mesmo estoque Mercado Livre pode estar vinculado a múltiplos estoques VTEX.  

## Alocar estoques

Para vincular um estoque VTEX a um estoque Mercado Livre, siga as etapas abaixo:  

- No Admin VTEX vá em **Marketplace > Marketplace > Mercado Livre>  Preferências > Alocação de estoque.**  
- Localize o estoque VTEX que deseja alocar.  
- Clique em `Alocar`. Uma janela será aberta com a lista de estoques disponíveis no Mercado Livre.  
- Selecione a qual estoque do Mercado Livre deseja vincular.  
- Clique em `Confirmar`. Aparecerá a mensagem **Atribuição de warehouse atualizada com sucesso.**  

> ℹ️ Repita as etapas acima para cada estoque VTEX que deseja atribuir a um estoque do Mercado Livre.  

Cada linha da tabela apresenta informações sobre um único estoque na VTEX. Além das informações citadas acima, há o botão <i class="ph ph-dots-three-vertical"></i> `opções`, com as seguintes opções:  

- Ver detalhes  
- Realocar estoque  
- Configurar capacidade de transporte  
- Gerenciar estoque VTEX  
- Desalocar estoque  

### Ver detalhes

Nesta opção, o seller visualiza as informações de um estoque do Mercado Livre associado a um estoque VTEX.  

1. Localize o estoque VTEX desejado.  
2. No menu de ações <i class="ph ph-dots-three-vertical"></i>, clique em Ver detalhes.  
3. Um modal lateral será aberto com:  

  -  Nome da loja  
  -  Endereço completo  
  -  ID do estoque Mercado Livre  
  -  Coordenadas de latitude e longitude  

### Reatribuir estoque

Nesta opção, o seller troca a associação entre um estoque VTEX e um estoque Mercado Livre.  

1. Localize o estoque VTEX desejado.  
2. No menu de ações  <i class="ph ph-dots-three-vertical"></i> , clique em `Realocar estoque`.  
3. Um modal será aberto com a lista de estoques disponíveis no Mercado Livre.  
4. Selecione um novo estoque.  
> ℹ️ O estoque atualmente atribuído aparecerá como pré-selecionado, mas é necessário escolher outro para efetivar a mudança.  
9. Clique em `Confirmar` para concluir a realocação.  

### Configurar capacidade de envio

Nesta opção, o seller define o tempo de manuseio e o número máximo de pedidos que podem ser processados por dia em cada estoque.  

1. Localize o estoque desejado.  
2. No menu de ações  <i class="ph ph-dots-three-vertical"></i> , clique em Ajustar capacidade de envio.  
3. Você será redirecionado para a tela de gerenciamento de capacidade.  
4. Selecione o estoque desejado.  
5. Configure para cada dia da semana:  
  - Tempo de preparação
  - Capacidade máxima de envios
6. Clique em `Salvar`.

> ⚠️ Alterações feitas após o horário de corte (cutoff) só entram em vigor na próxima semana.  

### Gerenciar estoques VTEX 

Ao selecionar esta opção, você é redirecionado para a tela de configuração do estoque, onde é possível editar os dados logísticos seguindo os passos abaixo.  

1. Selecione o estoque desejado.  
2. No menu de ações <i class="ph ph-dots-three-vertical"></i> , clique em  Gerenciar estoque VTEX.  
3. Você será direcionado ao cadastro do estoque correspondente no [módulo de Logística](/pt/docs/tutorials/fulfillment-logistica-vtex).  
4. Faça as alterações desejadas seguindo o tutorial[Gerenciar Estoque](/pt/docs/tutorials/gerenciar-estoque).  

### Desalocar estoque

Nesta opção, o seller pode desfazer o vínculo entre um estoque VTEX e um estoque do Mercado Livre seguindo os passos abaixo.  

1. Selecione o estoque desejado.  
2. No menu de ações  <i class="ph ph-dots-three-vertical"></i> , clique em Desalocar estoque.  
3. Clique em `Confirmar`.  

> ⚠️ Desalocar um estoque irá zerar o estoque no Mercado Livre, porém não afeta o inventário na VTEX.  

