---
title: 'SKUs recebidos'
id: 4hxDUmbgOEVFSTU2Eqi8DK
status: PUBLISHED
createdAt: 2024-04-29T13:48:12.818Z
updatedAt: 2024-09-10T17:43:09.161Z
publishedAt: 2024-09-10T17:43:09.161Z
firstPublishedAt: 2024-04-29T14:16:25.091Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: received-skus-beta
legacySlug: anuncios-recebidos
locale: pt
subcategoryId: 4HBbKdnwneGew2qGGykSM8
---

A página **SKUs recebidos** permite que o [marketplace](https://help.vtex.com/pt/tutorial/visao-geral-marketplace--40Zd0z9h2RXsM9uMUp3kEb) visualize, priorize e catalogue os itens enviados pelos seus sellers. Dessa maneira, é possível criar novos produtos e também associá-los a SKUs ou a produtos já existentes para disponibilizá-los para venda. Acesse a página no Admin VTEX em **Marketplace > SKUs recebidos**  ou digite **SKUs recebidos** na barra de busca do Admin.  

A catalogação pode ser feita manualmente ou automaticamente, [por meio de um ou mais matchers](https://help.vtex.com/pt/tutorial/entendendo-a-pontuacao-do-vtex-matcher?locale=pt), e também pelo [autoApprove](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions/#put-/suggestions/configuration/autoapproval/toggle). Além disso, também existe a possibilidade de usar ferramentas externas para realizar essa operação.  

![Apresentação Anúncios Recebidos-PT](//downloads.ctfassets.net/alneenqid6w5/1qyRLboXsLXCwaoT3xfSwI/9882db31e2a68ebe127532f24cf4bcae/GIF_PT.gif)  

Neste artigo você encontrará uma visão geral sobre a [Estrutura da página](#estrutura-da-pagina), [Priorizando a catalogação](#priorizando-a-catalogacao) e [Catalogação de itens](#catalogacao-de-itens).  

## Estrutura da página

A página **SKUs recebidos** em seções conforme os possíveis status de um anúncio, sendo eles os seguintes:  

- [Pendentes](#pendentes)  
- [Problemas](#problemas)  
- [Aprovados](#aprovados)  
- [Processando](#processando)  
- [Bloqueados](#bloqueados)  

Em cada seção, além da listagem dos SKUs, é possível filtrar os anúncios, visualizar as especificações de cada um e verificar qual a porcentagem dos SKUs recebidos encontram-se naquele status.  

### Pendentes

Na seção **Pendentes,** o marketplace encontra a lista de todos os anúncios enviados por um seller e que ainda não foram aprovados. Os anúncios podem ser filtrados por **Seller, Categoria e Marca.** Também é possível realizar as seguintes ações em anúncios desta seção: **Criar novo produto, Associar a produto ou SKU, Recusar para correção ou Recusar e bloquear.**  

Cada linha da lista representa um produto com as seguintes informações:  

- **Anúncio:** apresenta o nome do produto.  
- **ID do produto:** número que identifica o produto.  
- **Seller:** nome do seller que enviou o anúncio.  
- **Categoria:** categoria na qual o produto está cadastrado, caso a categoria já tenha sido mapeada. Se ainda não foi, aparecerá a mensagem _Não mapeada._  
- **Preço:** preço do produto enviado pelo seller.  
- **Estoque:** quantidade disponível daquele produto.  

Para verificar todas as especificações de um produto, clique sobre o nome do produto desejado e uma nova janela abrirá com todas as informações daquele produto.  

![pendentes-info-produto-PT](//images.ctfassets.net/alneenqid6w5/3QSXyYXqhdAB3R4J3lL749/ea57f537bcad436fad6a45286adc7840/pendentes-info-produto-PT.png)  

### Problemas

Na seção **Problemas,** estão disponíveis todos os anúncios que ainda não foram aprovados, por existirem problemas que precisam ser corrigidos pelo seller. Os filtros, ações e campos de identificação disponíveis na seção **[Pendentes](#pendentes)** são similares aos da seção Problemas.  

> ℹ️ A ação pedir correção não está disponível na seção **Problemas.**  

Para identificar qual o problema de um anúncio, basta clicar no nome do produto desejado. Uma nova janela será exibida com as informações referentes ao produto, a mensagem de erro e o revisor do anúncio.  

![skus-recebidos-janela-problemas-pt](//images.ctfassets.net/alneenqid6w5/4yZtOcq16r6SXvai0lWzau/4e29273e9959579dd2542a84ab29c185/anuncios-problemas-pt.png)

### Aprovados

Na seção **Aprovados,** é possível visualizar os SKUs recebidos e aprovados. Nesta seção, é possível filtrar os anúncios por **Seller, Categoria e Marca.**  

Cada linha da lista representa um produto com as seguintes informações:  

- **Anúncio:** que apresenta o nome do produto.  
- **ID do produto:** número que identifica o produto.  
- **Seller:**  nome do seller que enviou o anúncio.  
- **Categoria:** mostra em qual categoria o produto está incluído.   

### Processando

Na seção **Processando,** estão disponíveis os SKUs recebidos, que estão sendo avaliados pelo sistema VTEX.  Esta é uma seção apenas de visualização com opções de filtros por **Seller** e **Data de envio** do produto.  

Cada linha da lista representa um produto com as seguintes informações:  

- **Anúncio:** que apresenta o nome do produto.  
- **ID do produto:** número que identifica o produto.  
- **Seller:** nome do seller que enviou o anúncio.  
- **Data de envio:** mostra quando o anúncio foi enviado ao marketplace.  

> ℹ️ Os anúncios listados nessa seção estão sendo avaliados pelo Matcher e pelo Offer Quality ou Auto approve, caso tenham sido configurados. Após essa avaliação o anúncio pode ser enviado para as seções **Pendentes, Problemas, Aprovados ou Bloqueados**, a depender do cumprimento de requisitos.  

### Bloqueados

Na seção **Bloqueados,** é possível visualizar os anúncios enviados pelo seller que foram bloqueados pelo marketplace. Nesta seção é possível **Desbloquear** um anúncio e também filtrá-los por **Seller** e **Revisor.**  

Cada linha da lista representa um produto com as seguintes informações:  

- **Anúncio:** apresenta o nome do produto.  
- **ID do produto:** número que identifica o produto.  
- **Seller:** nome do seller que enviou o anúncio.  
- **Revisor:** nome do agente que fez a revisão do anúncio.  

## Priorizando a catalogação

A listagem de SKUs recebidos foi desenvolvida para priorizar e acelerar a catalogação desses itens. Ao clicar em qualquer SKU da lista, você acessa um resumo das principais informações do SKU por meio de uma barra lateral, sem sair da página de listagem. Na barra lateral, também inclui a porcentagem de equivalência que o SKU recebeu pelo matcher instalado em sua loja.  

Algumas das funcionalidades que auxiliam no processo de priorização são:  

### Filtros

Em cada uma das seções apresentadas no tópico anterior, é possível combinar diferentes filtros para montar a visualização desejada de SKUs.  

Por exemplo, se a marca "ABC" e a categoria "Meias" forem selecionadas, a visualização mostrará todos os SKUs da marca “ABC” que sejam da categoria "Meias".  

Vale ressaltar que as opções de filtros se dão conforme os SKUs disponíveis na listagem. Suponhamos, por exemplo, que o marketplace está conectado aos sellers A, B e C, mas somente existem SKUs dos sellers B e C pendentes. Isso significa que a seleção de filtro na seção [Pendente](#pendente) exibirá apenas os resultados dos sellers B e C.  

### Ordenação

Por padrão, os itens com envios mais recentes são os primeiros a serem listados. Contudo, também é possível ordenar por **Preço** e **Estoque.**  

Nesse caso, os itens serão ordenados de forma crescente ou decrescente ao clicar em **"Preço"** ou **"Estoque"** no cabeçalho.  

![ordenacao-PT](//images.ctfassets.net/alneenqid6w5/3Eur3cPCdSTtZjoGIqeq6o/1f5cbbbae8c8b969fcabcfd531e57d95/ordenacao-PT.png)  

## Catalogação de itens

Todos os SKUs exibidos na lista já estão disponíveis para catalogação. Entretanto, recomenda-se realizar o [mapeamento de categorias e marcas](https://help.vtex.com/pt/tutorial/mapeamento-de-categorias-e-marcas-para-marketplace-vtex-beta--6NU8LwR6i0tTb8nk30bnbE) antes desse passo para que o processo de catalogação seja mais rápido.  

> ⚠️ Os anúncios presentes na seção Pendentes permanecem disponíveis por apenas 30 dias. Depois desse período, elas expiram automaticamente e o Seller precisará enviar novamente.  

### Opções de catalogação

Para catalogar um anúncio acesse a página **SKUs recebidos** no Admin VTEX clicando em **Marketplace > SKUs recebidos** ou digite **SKUs recebidos** na barra de busca do Admin.  

> ℹ️ Todos os anúncios da seção Pendentes podem ser catalogados individualmente ou em massa.  

As ações disponíveis para catalogação são:  

#### Criar único produto com diversos SKUs

Cria um novo produto no catálogo associando todos os SKUs selecionados. Recomenda-se usar essa opção para aprovar diversos SKUs de um mesmo produto de uma só vez. Para executar essa ação siga os passos abaixo:

1. Selecione os SKUs desejados.  
2. Clique no botão <i class="fas fa-plus" aria-hidden="true"></i> `Criar único produto`.  
3. Selecione qual SKU da lista dará origem ao produto.  
4.  Preencha os campos **Categoria** e **Marca** para cada produto. Caso o mapeamento tenha sido realizado previamente, esses campos já estarão preenchidos.  
5. Clique em `Aprovar`.  

<div class=”alert alert-info”>
Esta ação pode ser realizada nas seções de anúncios **Pendentes.**
</div>

#### Criar novo produto

Cria um SKU novo no catálogo e, consequentemente, um novo produto. Recomenda-se usar essa opção quando determinado produto ainda não existe no catálogo do marketplace. Para executar essa ação siga os passos abaixo:  

  1. Selecione os SKUs desejados.  
  2. Clique no botão <i class="fas fa-plus" aria-hidden="true"></i> `Criar novo produto`.  
  3. Preencha os campos **Categoria** e **Marca** para cada produto. Caso o mapeamento tenha sido realizado previamente, esses campos já estarão preenchidos.  
  4. Clique em `Aprovar`.  

![criar-novos-produtos-PT](//images.ctfassets.net/alneenqid6w5/4H2vmekbrtbXQXUVrwVoSF/07a3e80b2b4143779da1ebfdd29729a7/criar-novos-produtos-PT.png)  

> ℹ️ Esta ação pode ser realizada nas seções de anúncios **Pendentes** e **Problemas**.  

#### Associar a um produto existente  

Cria uma relação entre o produto do seller e um produto que já existe no catálogo do marketplace. Para executar essa ação siga os passos abaixo:  

  1. Selecione os SKUs desejados.  
  2. Clique no botão <i class="fas fa-link" aria-hidden="true"></i> `Associar a produto`.  
  3. Preencha o ID do produto ao qual será associado.  
  4. Clique em `Aprovar`.  

![associar-a-produto-PT](//images.ctfassets.net/alneenqid6w5/2fAWptfykAdJ3UTDSCpNhW/d2130d8af5d5de678c36a6821316c09a/associar-a-produto-PT.png)  

**Caso de uso**

Imagine que o marketplace já tenha o SKU Camisa Branca nos tamanhos P, M e G. Mas, recentemente, o seller enviou para estoque os tamanhos PP e GG da mesma Camisa Branca.  

Ao criar uma nova associação, os tamanhos novos são agrupados com os demais que já estavam cadastrados. Dessa forma, o produto terá os tamanhos PP, P, M, G e GG disponíveis.  

> ℹ️ Esta ação pode ser realizada nas seções de anúncios **Pendentes** e **Problemas**.  

#### Associar a um SKU existente

Cria uma relação entre o novo SKU do seller e um SKU que já existe no catálogo do marketplace. Para executar essa ação siga os passos abaixo:  

  1. Selecione os produtos desejados.  
  2. Clique no botão <i class="fas fa-link" aria-hidden="true"></i> `Associar a SKUs`.  
  3. Preencha o **ID do SKU** a associar para cada SKU que está sendo aprovado.  
  4. Clique em `Aprovar`.  

![associar-a-sku-PT](//images.ctfassets.net/alneenqid6w5/2326FaqSqhPfQ0qeiD8KWE/9a4c3fdb8049f6825fe752baae239b52/associar-a-sku-PT.png)  

**Caso de uso**

Um possível caso seria o de um marketplace ter o “celular XYZ” com memória de 128GB do “seller1”.  

Agora, digamos que o mesmo marketplace recebeu do “seller2” o mesmo SKU 128GB. Assim, para não duplicar o catálogo, o marketplace precisa associar esses SKUs.  

> ℹ️ Esta ação pode ser realizada nas seções de anúncios **Pendentes** e **Problemas**.  

#### Recusar e bloquear

Bloqueia os anúncios selecionados e estes não serão mais reprocessados automaticamente. Para executar essa ação siga os passos abaixo:  

  1. Selecione os produtos desejados.  
  2. Clique no botão `Recusar e bloquear`.  
  3. Preencha o campo **Motivo de bloqueio.** O preenchimento é opcional.  
  4. Clique em `Recusar`.  

![recusar-e-bloquear-PT](//images.ctfassets.net/alneenqid6w5/3rfJ5AjzArgvv7thlD3keQ/35b8c59c3b4284047fba1882372c8e88/recusar-e-bloquear-PT.png)  

Quando um SKU é bloqueado pelo marketplace, significa que na próxima vez que o seller enviar seus produtos, aqueles que foram bloqueados não estarão mais em meio aos enviados. É possível desbloquear um SKU por API REST, se o marketplace deseja voltar a recebê-lo como sugestão do seller.  

Para saber mais sobre aprovação de SKUs, acesse nossa documentação [Send SKU Suggestion](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerSkuId-).  

> ℹ️ Esta ação pode ser realizada nas seções de anúncios **Pendentes** e **Problemas**. Os anúncios bloqueados serão exibidos na seção **Bloqueados**.  

#### Recusar para correção

Rejeita o anúncio e envia para o seller a solicitação de correção de informação. Para executar essa ação siga os passos abaixo:  

  1. Selecione os SKUs desejados.  
  2. Clique no botão `Recusar para correção`.  
  3. Preencha o campo **correções** com a informação a ser corrigida pelo seller.  
  4. Clique em `Recusar`.  

![recusar-e-corrigir-PT](//images.ctfassets.net/alneenqid6w5/62XmAvuM9luOqmLCwLpW2A/e53cdbf195194a408fb05f790f812083/recusar-e-corrigir-PT.png)  

> ℹ️ Esta ação pode ser realizada nas seções de anúncios **Pendentes**. Os anúncios para correção serão exibidos na seção **Problemas**.  

#### Aprovação automática

Também é possível configurar a aprovação automática de SKUs de um seller específico, independente da sua pontuação do Matcher. Essa ação só pode ser realizada por meio de API Rest. Confira as documentações de [Suggestions](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions), para saber mais.  

