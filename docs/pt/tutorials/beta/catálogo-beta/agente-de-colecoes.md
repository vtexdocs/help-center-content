---
title: 'Agente de Coleções'
createdAt: 2026-07-14T00:00:00.000Z
updatedAt: 2026-07-14T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: collections-agent
locale: pt
---

> ℹ️ O **Agente de Coleções** está em fase beta, o que significa que estamos trabalhando para aprimorá-la. Atualmente, a disponibilidade é somente para contas selecionadas. Em caso de dúvidas, entre em contato com nosso [Suporte](https://supporticket.vtex.com/support).

O **Agente de Coleções** é um agente de inteligência artificial que permite criar e gerenciar coleções e sortimentos por meio de uma experiência conversacional no Admin VTEX. Este artigo explica o funcionamento do agente e apresenta quais ações em coleções e sortimentos você pode realizar de forma conversacional.

A [coleção](https://help.vtex.com/pt/docs/tutorials/tipos-de-colecao) é o agrupamento de produtos, enquanto o sortimento é a entidade que agrupa coleções em cenários B2B. Com o **Agente de Coleções**, você fornece uma instrução (prompt) em linguagem natural por meio de uma interface conversacional e o agente operacionaliza isso em uma coleção ou sortimento.

> ⚠️ Atualmente, o sortimento é um recurso exclusivo para cenários B2B.

## Diferença entre o agente e a interface legada

Além de permitir realizar tudo o que era feito pela interface legada, o **Agente de Coleções** oferece outras vantagens:

- Uma experiência conversacional intuitiva.
- A possibilidade de criar e gerenciar coleções e sortimentos a partir de regras inclusivas e exclusivas.
- A opção de gerenciar coleções usando como critério especificações de produto e especificações de SKU.

## Avisos da fase beta

O **Agente de Coleções** está em beta, e durante este período a funcionalidade tem as seguintes limitações:

- **Escopo:** inclui para coleções e sortimentos as ações de criação, edição, importação/exportação em massa, e visualização do plano criado pelo agente antes da confirmação do usuário.
- **Sortimento restrito:** a criação e o uso de sortimentos estão disponíveis apenas para cenários B2B.
- **Coleção ou sortimento por vez:** o agente atua sobre uma única coleção ou sortimento em cada operação de visualização, criação ou edição.
- **Tempo de propagação:** uma coleção não fica visível imediatamente após a criação ou edição. O agente informa que a indexação está em andamento e que a propagação dos dados leva cerca de uma hora até que a coleção fique disponível para consulta.
- **Verificação de pertencimento após a criação:** confirmar se um produto específico faz parte de uma coleção é confiável apenas após a criação e a indexação. Verificações de pertencimento antes da criação estão fora do escopo neste momento.

## Pré-requisitos para usar o agente

Não existe um pré-requisito para usar o **Agente de Coleções**, mas como ele atua em coleções e sortimentos, é necessário que a loja tenha cadastrado [marcas](https://help.vtex.com/pt/docs/tutorials/o-que-e-uma-marca), [categorias](https://help.vtex.com/pt/docs/tutorials/cadastrar-uma-categoria), [produtos](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-produto) e [SKUs](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-sku).

## Acessar o agente

No Admin VTEX, acesse **Catálogo > Agente de Coleções** ou digite **Agente de Coleções** na barra de pesquisa no topo da página. A interface apresentada é composta por uma janela conversacional e uma sugestão de instrução (prompt), como a imagem a seguir:

![Interface do agente](linkPlaceholder)

Ao clicar na sugestão `Crie uma coleção`, ou digitar outra instrução na janela de conversa, o agente inicia o atendimento e conduz a interação até a conclusão da ação desejada.

## Regras do funcionamento

O **Agente de Coleções** opera a partir das seguintes regras:

- **Criação estática ou dinâmica:** cria e edita coleções de forma estática (lista explícita de IDs de produto) ou dinâmica (critérios como marcas, categorias, especificações de produto e especificações de SKU).
- **Regras inclusivas e exclusivas:** combina e exclui coleções por meio de regras inclusivas e exclusivas. As regras exclusivas sempre prevalecem sobre as inclusivas.
- **Combinações complexas E/OU:** suporta combinações lógicas complexas entre critérios e regras. Você não precisa montar as subcoleções manualmente — o agente apresenta a estrutura lógica final para aprovação.
- **Propagação automática:** uma mesma coleção pode ser consumida por vários sortimentos. Ao editar uma coleção compartilhada, a alteração é propagada automaticamente para todos os sortimentos que a consomem. Esse é o principal valor do modelo de blocos reutilizáveis.
- **Ajuste incremental:** o agente adiciona ao que já foi definido em vez de substituir, e entende modificadores relativos como "desfaça isso" ou "troque X por Y".
- **Desambiguação conversacional:** quando uma instrução é vaga ou corresponde a mais de uma entidade do catálogo, o agente pausa e apresenta opções em vez de adivinhar.
- **Confirmação antes de mudanças de alto impacto:** antes de alterações relevantes (por exemplo, editar uma coleção compartilhada por muitos sortimentos), o agente mostra o alcance da mudança e solicita a confirmação do usuário.

## Realizar ações em coleções

> ⚠️ Os exemplos de instruções apresentados a seguir são apenas para fins ilustrativos e não a única forma do agente executar uma ação.

Você pode realizar as seguintes ações:

- Criar uma coleção usando linguagem natural
  - Revisar o plano de coleção
  - Aprovar o plano de coleção
- Criar coleção por meio de importação de planilha
- Verificar as relações em coleções
- Editar, revisar e refinar a coleção
- Checar o impacto da edição
- Buscar, filtrar e listar coleções
- Incluir todos os produtos do catálogo em uma coleção

### Criar coleção usando linguagem natural

Para criar uma coleção usando linguagem natural, digite na janela de conversa as instruções (prompt) para a criação da coleção com os produtos que deseja reunir. Alguns exemplos de instruções são:

- "Crie uma coleção com todos os produtos da marca Infotech."
- "Crie uma coleção com os produtos das categorias Eletrônicos e Informática, exceto os da marca Infotech."
- "Crie uma coleção com todos os produtos da categoria Verão que têm a especificação Cor igual a Azul."

Após inserir as intruções no chat, aperte `Enter` ou clique no botão seta para cima no chat. O **Agente de Coleções** vai então interpretar a solicitação e montar a coleção com os critérios e as regras correspondentes. Ao terminar o processamento, o agente pode solicitar informações complementares.

**Exemplo:** o agente recebeu o comando "Monte uma coleção com todos os produtos da categoria de ID 6", e, após o processamento, fez duas solicitações:

1. Um nome para a nova coleção
2. Uma descrição para a coleção

A resposta no chat deve seguir o mesmo padrão numérico, com a identificação dos números:

1. Moda outono/inverno
2. Artigos de moda para o inverno.

A imagem abaixo apresenta um exemplo da criação de uma coleção:

![criacao de colecao com ID de categoria](linkPlaceholder)

Feito isso, o agente vai processar a solicitação e apresentar um plano do que será feito.

#### Revisar o plano de coleção

O plano de coleção apresentado pelo agente é um resumo que você deve revisar antes de confirmar a operação. Neste plano, existem informações como:

- Nome da coleção sendo criada
- Descrição da coleção
- [Regra de criação](#regras-do-funcionamento) a ser utilizada
- Comportamento futuro para a inclusão de produtos na coleção

A imagem abaixo apresenta um exemplo deplano de coleção a ser revisado:

![resumo da colecao](linkPlaceholder)

#### Aprovar o plano de coleção

Depois de revisar o plano, confirme a operação para que o agente aplique as mudanças. Feito isso, o agente finaliza o processamento e termina a conversa, informando:

- Sucesso da operação
- ID na nova coleção
- Nome da coleção

A imagem abaixo apresenta um exemplo operação finalizada:

![sucesso_operacao](linkPlaceholder)

> ❗ A propagação dos dados pode levar até cerca de 1 hora para se refletir no Admin VTEX, a depender do volume de dados sendo processados.

### Criar coleção por meio de importação de planilha

Você pode montar coleções por meio de importação de planilhas em formato `.csv` ou `.xlsx`. A planilha deve ter uma lista de itens com as seguintes colunas de identificação:

- Product ID
- Product Reference ID
- SKU ID
- SKU Reference ID

existem três fluxos possíveis, sempre uma coleção por operação:

Quando os produtos estáticos vêm de uma **planilha**, o plano faz referência ao arquivo; quando são digitados diretamente **no chat**, o plano lista os IDs. O plano é atualizado a cada nova instrução, e você aprova a estrutura final sem precisar montar a lógica interna de subcoleções.

- **Adicionar** itens à lista existente.
- **Remover** itens da lista existente.
- **Substituir** toda a lista.

Durante a importação, o agente processa a planilha inteira: linhas com IDs encontrados são importadas e registradas; linhas com IDs não encontrados são ignoradas, registradas e apresentadas para que você possa corrigi-las (por exemplo, "Linha 5: SKU 'ABC123' não encontrado"). IDs duplicados são ignorados nas linhas seguintes, e a importação nunca é interrompida por falhas em linhas individuais.

### Verificar as relações em coleções

O **Agente de Coleções** pode ser usado para consultar as relações de uma coleção. Você pode, por exempol, perguntar qual o motivo do produto ter sido incluído ou não em determinada coleção, e o agente então explicará o critério ou regra que levou àquela decisão. Exemplo de instrução: "Por que o produto de ID 74 está na coleção Moda Praia?".

### Editar, revisar e refinar a coleção

Você não precisa começar do zero para ajustar uma coleção. Em uma conversa contínua, o agente mantém o estado atual do rascunho e adiciona as novas instruções ao que já foi definido, em vez de substituir tudo. Ele entende modificadores relativos como "desfaça isso" ou "troque a marca X pela marca Y", e o plano é atualizado a cada interação. Esse refinamento vale tanto para coleções já criadas quanto para a coleção que está sendo montada durante a conversa.

### Checar o impacto da edição

Antes de aplicar alterações de alto impacto — como editar uma coleção compartilhada por vários sortimentos —, o agente mostra quais coleções e sortimentos serão afetados e solicita sua confirmação antes de executar.

### Buscar, filtrar e listar coleções

Para localizar e gerenciar a coleção certa, você pode buscá-la por **nome** ou **ID** e ordenar ou filtrar a lista por atributos comuns, como data de criação, nome e ID. Ao abrir uma coleção, é possível visualizar sua definição.

### Incluir todos os produtos do catálogo em uma coleção

Não existe, atualmente, uma forma automática de incluir todos os produtos do catálogo em uma coleção de modo que ela se mantenha sincronizada. É possível incluir todos os produtos usando as regras dinâmicas existentes, mas cada uma tem suas limitações:

- **Por categorias:** ao selecionar todas as categorias do catálogo, como todo produto precisa ter uma categoria, todos os produtos são incluídos.
- **Por marcas:** ao selecionar todas as marcas, como todo produto precisa ter uma marca, todos os produtos são incluídos.
- **Por especificação de produto:** ao selecionar uma especificação com o mesmo valor presente em todos os produtos. A especificação precisa estar ativa e ser obrigatória.

Pontos de atenção comuns a essas opções:

- Categorias, marcas ou especificações **inativas** entram na coleção, mas seus produtos não aparecem na navegação enquanto estiverem inativos. Se forem ativadas depois, os produtos passam a aparecer.
- Se uma categoria, marca ou especificação for **desativada** após a criação da coleção, seus produtos permanecem na coleção, mas deixam de aparecer na navegação.
- Categorias e marcas **criadas após** a coleção não são incluídas automaticamente.
- Uma categoria, marca ou especificação **removida** do catálogo após a criação da coleção retira seus produtos da coleção.
- No caso da especificação de produto, produtos sem a especificação, com o valor em branco ou com valor diferente ficam de fora.

Nenhuma dessas opções é um espelho permanente do catálogo: o que compõe "todos os produtos" hoje pode mudar conforme o catálogo evolui, e nenhum dos caminhos se atualiza sozinho para capturar o que for criado depois. Independentemente da opção escolhida, um plano com a estrutura proposta é gerado para aprovação antes de qualquer alteração ser aplicada.

## Realizar ações em sortimentos

> ⚠️ Os exemplos de instruções sobre sortimentos apresentados são apenas para fins ilustrativos e não a única forma de executar determinada ação com o agente.

> ℹ️ Os sortimentos estão atualmente restritos a cenários **B2B** e são utilizados em contratos B2B.

### Criar um sortimento com linguagem natural

Um sortimento é composto a partir de coleções, com regras inclusivas e exclusivas. Descreva na conversa o conjunto final de produtos que deseja e o agente monta o sortimento correspondente. Exemplos de instruções:

- "Crie um sortimento que inclua as coleções Eletrônicos e Acessórios, mas exclua a coleção Produtos Apple."
- "Use as coleções 2 e 3, mas exclua a coleção 4."

### Visualizar o resultado

Antes de confirmar, o agente apresenta o plano do sortimento, com um resumo das coleções incluídas e excluídas e da lógica aplicada. O plano é atualizado a cada instrução, e o agente atua sobre um sortimento por vez.

### Verificar as relações em sortimentos

O **Agente de Coleções** pode ser usado para consultar as relações de uma coleção, e é possível fazer isso de duas formas distintas:

- Listando todas as coleções relacionadas a um sortimento, agrupadas por incluídas e excluídas.
- Listando todos os sortimentos que consomem uma determinada coleção, agrupados por incluídos e excluídos.
- Perguntando o motivo da coleção estar ou não em um sortimento, e o agente explica qual critério ou regra levou àquela decisão. Exemplo de instrução: "Por que a coleção de ID 463 está no sortimento Filial Norte?".

### Aprovar o plano de sortimento

Após revisar o plano, confirme a operação para que o agente aplique as mudanças no sortimento.

### Editar, revisar e refinar o sortimento

Assim como nas coleções, você pode ajustar um sortimento sem começar do zero. Em uma conversa contínua, o agente adiciona as novas instruções ao rascunho atual em vez de substituí-lo e entende comandos como "desfaça isso" ou "troque a coleção X pela coleção Y". O refinamento vale tanto para sortimentos já criados quanto para o sortimento em construção.

### Checar o impacto da edição

Como uma coleção pode ser consumida por vários sortimentos, editá-la pode afetar todos eles. Antes de mudanças de alto impacto, o agente mostra quais coleções e sortimentos serão afetados e pede confirmação antes de executar.

### Buscar, filtrar e listar sortimentos

Você pode buscar sortimentos por **nome** ou **ID** e ordenar ou filtrar a lista por atributos comuns, como data de criação, nome e ID, para localizar e gerenciar o sortimento desejado.
