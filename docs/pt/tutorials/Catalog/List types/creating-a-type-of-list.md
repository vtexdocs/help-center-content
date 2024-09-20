---
title: 'Criar tipo de lista'
id: tutorials_254
status: PUBLISHED
createdAt: 2017-04-27T22:11:52.502Z
updatedAt: 2023-03-29T19:44:52.284Z
publishedAt: 2023-03-29T19:44:52.284Z
firstPublishedAt: 2017-04-27T23:03:11.198Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: criando-tipo-de-lista
locale: pt
legacySlug: criando-tipo-de-lista
subcategoryId: 6aeeWirCBUwwCmeIWOgIWs
---

A criação de um tipo de lista é a configuração de quais listas o site terá. Exemplo: Lista de Casamento e Lista de Aniversário. Cada uma destas são um tipo de lista diferente, com configurações próprias. Este artigo tem como objetivo ilustrar o processo de criação de um tipo de lista.

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em __Tipos de Lista__.
   Serão listados todos os tipos de lista configurados.
3. Clique no botão `Novo Tipo de Lista`.
4. Preencha os campos conforme as instruções da seção [Campos do formulário](#campos-do-formulario).
5. Clique em `Salvar`.

Após a criação dos tipos de listas, será possível que clientes criem efetivamente suas listas no site.

>⚠️ Não é possível excluir uma lista após ela ter sido gerada.

## Campos do formulário

- **Nome**: Nome do tipo de lista.
- **Descrição**: Descrição do tipo de lista. Exemplo: destinada aos noivos, a lista de casamento é a mais comum entre as listas.
- **Ativo**: Ativar para que esta opção fique disponível no site.

### Configuração

**Visibilidade**

- **Pública**: Permite a qualquer usuário a visualização da lista, além da exibição da mesma em uma busca.
- **Privada**: Permite somente aos participantes a visualização da lista, não é exibida em uma busca por usuários não participantes.
- **Criador da Lista decide**: Permite que a decisão de visibilidade seja feita pelo cliente que criar uma lista do tipo determinado.
- **Participação única** : Define a possibilidade do usuário participar de apenas uma única lista de determinado tipo, caso a opção Sim esteja marcada, ou a possibilidade de participação de mais de uma lista de determinado tipo, caso a opção Não esteja marcada.

**Entrega**

- **Produtos comprados serão entregues ao comprador da lista**: Neste modelo de lista os produtos comprados são enviados fisicamente para o próprio comprador, havendo assim impacto no estoque da loja. Ao selecionar esse tipo de lista para criação, o dono da lista não necessita escolher o endereço de entrega, pois o mesmo será escolhido pelo comprador da lista. Exemplos: Lista de compras, Lista de desejos.
- **Produtos comprados serão entregues ao criador da lista**: Neste modelo de lista os produtos comprados são enviados fisicamente para o dono da lista, havendo assim, impacto no estoque da loja. Ao selecionar este tipo de lista para criação, o dono da lista necessita escolher entre seus endereços cadastrados para que os produtos sejam enviados para este endereço. Exemplos: Lista de casamento, Chá de bebê.
- **Valor dos produtos comprados será convertido em Vale Compras**: Neste modelo de lista os produtos comprados não são enviados fisicamente para o dono, ao invés disso, o crédito é gerado por meio de Vale Compra, no total do valor da compra, para o dono da lista. O mesmo pode utilizar o vale em suas compras na loja. Cada vale é associado a uma lista deste tipo e recebe o valor do total das compras realizadas na lista. Caso o dono da lista possua dois tipos da mesma lista, serão criados dois vales, para receber o valor referente à cada uma das listas deste mesmo tipo.

### Cadastro obrigatório

Utilizado quando o usuário deve fornecer algum documento de identificação para conseguir criar a lista. Exemplo: situações onde o vale compras deve ser expedido para o documento do cliente.

### Evento

O lojista decide se a lista terá evento ou não. Uma vez salvo o tipo de lista esta informação não pode ser editada.

Ao selecionar **POSSUI EVENTO**, o formulário disponibiliza outras opções de configuração para o evento, onde será possível configurar todas as datas limites para criação desse tipo de lista, conforme imagem abaixo.

![eventos.pt](//images.ctfassets.net/alneenqid6w5/KhcZ5meUIwnSqBaekhc9C/b8c2b20e083c529a5ae7b4fc63e8a6ab/eventos.pt.png)

A área de evento é responsável por definir se a lista criada possui ou não um período preestabelecido para a data do evento. Listas de desejo ou listas de compras não necessitam de um período determinado para ocorrência do evento. De forma contrária, listas de casamento ou de chá de bebe, precisam levar em conta a data do evento, para que assim, todos os produtos comprados sejam entregues ao dono em período hábil à data do evento.

### Participantes

As seguintes opções estão disponíveis:

- **Mínimo de participantes**: número de participantes para que a criação de lista seja possível. Exemplo: 2 para listas de casamento.
- **Máximo de participantes**: Número máximo para criação de lista. Exemplo: 1 para chá de bebê.
- **Opções de títulos para os participantes**: Quais serão os nomes dos campos no cadastro da lista. Exemplo: Aniversariante, Bebê, Noiva.
- **Campo livre 1**: Campo adicional para criação da lista. (opcional)
- **Campo livre 2**: Campo adicional para criação da lista. (opcional)

### A listagem

Após a criação do tipo de lista, você será redirecionado para a tela onde aparecem os tipos de listas já cadastrados na loja. Essa tela fornece as seguintes informações e funções:

![listagem.pt](//images.ctfassets.net/alneenqid6w5/5TBHW4MjIqIKMAroEqIKUA/8af47e1d4375b8550a70cb03098adbc0/listagem.pt.png)

- **Exportar para Excel**: Permite exportar os dados de tipos de listas para Excel.
- **Versão**: Identificação de listas criadas na versão antiga da funcionalidade, com limitações. A versão mais atual é a “v2”.
- **Entrega**: Identifica onde o produto será entregue: Ao dono da lista, ao comprador ou [se o valor da compra será revertido em Vale para o dono da lista](/pt/tutorial/configurando-lista-vale);
- **Visibilidade**: Identifica a visibilidade configurada.
- **Única**: Indica se é possível criar mais de uma lista do mesmo tipo.
- **Participante**: Exibe os limites máximo e mínimo configurados para a lista.
- **Status**: Indica se a lista está ativa ou inativa.
- **Listas**: Exibe a quantidade de listas daquele tipo criadas pelos usuários no site.
- **Ver detalhes**: Permite a edição dos campos editáveis.
- **"Setinha"**: Permite a exibição das listas criadas daquele tipo, das compras realizadas nas listas daquele tipo e a exclusão daquele tipo de lista.
