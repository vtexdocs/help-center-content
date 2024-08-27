---
title: 'Integração com Loopi'
id: 2wmap3hWksLxJ0IYe7nYFP
status: DRAFT
createdAt: 2021-12-07T19:49:48.207Z
updatedAt: 2023-03-29T16:35:38.551Z
publishedAt: 
firstPublishedAt: 2021-12-07T20:52:41.626Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: integracao-com-loopi
locale: pt
legacySlug: integracao-com-loopi
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

A [Loopi](https://loopi.shop/) é um marketplace brasileiro especializado em moda, beleza, decoração e _lifestyle_. Trata-se de uma plataforma de ecommerce que incorporou propostas de redes sociais, e dispõe o conteúdo no formato _feed_ de vídeos.

Após firmar uma parceria com a VTEX, a Loopi se tornou um [conector certificado](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro), também chamado de parceiro. Isso significa que agora é mais fácil para uma loja VTEX anunciar e vender seus produtos na Loopi. Este artigo orienta como configurar a integração com o marketplace.

| **SAIBA MAIS** |
| ---------- |
|Um marketplace é um tipo de comércio colaborativo, modelo no qual há vantagens e benefícios para as partes envolvidas. Mais informações sobre parceiros e oportunidades de crescimento no ecossistema VTEX em [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/integrando-com-marketplace--tutorials_402).|

## Antes de começar

É necessário realizar uma etapa prévia antes de dar início à configuração da integração com a Loopi. Primeiro, você deve realizar um cadastro no ambiente do parceiro, o que é feito por meio do [formulário de lojista da Loopi](https://linktr.ee/loopishop). Em até 48 horas, o time da Loopi entrará em contato para confirmar a aprovação do seu cadastro. Em caso de urgência, entre em contato com o parceiro pelo email _comercial@loopi.shop_.

Feito isso, o próximo passo é informar à Loopi os seguintes dados:

- Nome da sua [account name](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) (nome de conta) na VTEX.
- Email usado para fazer login na sua conta no Seller Central da Loopi.
- _Username_ escolhido para o seu perfil na Loopi.
- Dados financeiros, por meio do preenchimento do [formulário de cadastro de informações financeiras](https://bit.ly/lojistaloopi).

É a partir do fornecimento destes dados que a Loopi realiza determinadas configurações no próprio ambiente. Você receberá um email da Loopi confirmando que as configurações foram concluídas, além de ser informado sobre credenciais e próximos passos relacionados ao ambiente do parceiro.

>❗ Se as informações mencionadas não forem concedidas à Loopi, os produtos não serão cadastrados em etapas posteriores.

## Visão geral da integração

Para integrar com a Loopi, há configurações que precisam ser realizadas no seu Admin VTEX, e outras que dependem do parceiro. Além disso, você deve saber sobre funcionamento e condições do marketplace. Portanto, este artigo foi dividido em três seções principais:

- [Condições e funcionamento da Loopi](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#condicoes-e-funcionamento-da-loopi)
- [Configurações na plataforma VTEX](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#configuracoes-na-plataforma-vtex)
- [Comunicar à Loopi a conclusão da integração](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#comunicar-a-loopi-a-conclusao-da-integracao)

## Condições e funcionamento da Loopi

Para configurar a integração e ser capaz de cadastrar e mapear corretamente seus produtos, é necessário saber algumas exigências da Loopi. Além disso, entender o funcionamento do marketplace será necessário em etapas posteriores, como acompanhamento de pedidos. Portanto, esta seção se divide nos seguintes temas:

- [Cadastramento de produtos na Loopi](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#cadastramento-de-produtos-na-loopi)
- [Agrupamento de produtos na Loopi](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#agrupamento-de-produtos-na-loopi)
- [Desativação de produtos na Loopi](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#desativacao-de-produtos-na-loopi)
- [Status de pedidos na Loopi](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#status-de-pedidos-na-loopi)
- [Operação logística na Loopi](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#operacao-logistica-na-loopi)

>ℹ️ Para anunciar e vender na Loopi é necessário estar em conformidade com os [termos e condições legais do marketplace](https://loopi.shop/termos-de-uso).

### Cadastramento de produtos na Loopi

A seguir, algumas considerações importantes sobre condições para o cadastro de produtos no marketplace:

- **Categoria:** somente são cadastrados na Loopi produtos que possuem uma categoria mapeada no seu Admin VTEX.
- **Regra de preço:** não são aceitos preços diferentes para variações de tamanho de um mesmo produto, ou seja, SKUs com tamanhos diferentes devem ter o mesmo preço. Por exemplo, não é aceito o cadastro de um produto com um preço para uma camiseta tamanho P, e outro preço para o produto no tamanho M. 
- **Fotos:** todo produto deve ter uma imagem cadastrada no seu Admin VTEX.

>❗ O descumprimento de qualquer das exigências mencionadas impossibilita o cadastramento do produto.

### Agrupamento de produtos na Loopi

Na Loopi, existem diferentes formas dos seus produtos serem agrupados e visualizados na interface do marketplace, a depender de como foram feitas as configurações do seu catálogo. Este agrupamento varia em função de como foram cadastradas suas [especificações de produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-produto) e [especificações de SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-sku).

Produtos com diferentes especificações de SKU são agrupados, de forma que o usuário tem a possibilidade de ver as opções em uma mesma interface. Já produtos que possuem especificações de produto diferentes, são exibidos de forma independente, e não na mesma interface.

Para ilustrar isso melhor, serão mencionados três exemplos de importação de produtos, sendo que cada um um tipo de agrupamento e visualização possível na Loopi.

#### Cenário 1: atributos cor e tamanho como especificações de SKU

Em determinado catálogo, os atributos _cor_ e _tamanho_ são especificações de SKU. O produto _camiseta manga curta_ está disponível nas cores amarela e verde, e nos tamanhos P, M e G. Neste caso, teremos um único produto com opção para o usuário escolher, na mesma interface, entre tamanhos e cores diferentes.

#### Cenário 2: atributo cor como especificação de produto

Em outro contexto, para o produto _camiseta manga curta,_ o atributo _cor_ é uma especificação de produto, enquanto _tamanho_ é uma especificação de SKU. Temos a _camiseta manga curta_ disponível nas cores verde e amarelo, e nos tamanhos P, M e G.

Neste caso, haverá dois produtos separados, a _camiseta manga curta amarela_ e a _camiseta manga curta verde_, e na interface de cada um dos produtos haverá opções de tamanho P, M e G. 

Ou seja, na Loopi, produtos com especificações de produto diferentes não são agrupados na mesma página de detalhes do produto.

#### Cenário 3: produto sem especificações de SKU ou produto

Digamos que, em um catálogo, exista o produto _brincos_, para o qual não há atributos de _cor_ e _tamanho_. Ao contrário dos cenários anteriores, a única ação possível ao usuário é adicionar um ou mais itens do produto ao carrinho. Ou seja, não há qualquer tipo de agrupamento, pois não existem variações de especificações do produto.

### Desativação de produtos na Loopi

A desativação de produtos e SKUs no marketplace pode ser feita pela exclusão ou inativação de produtos na plataforma VTEX, e significa exclusão desses itens da base de dados da Loopi.

É possível desativar um produto ao desassociá-lo da política comercial utilizada na integração. Caso esse produto seja novamente incluído na política comercial, ele volta a ser ativado na Loopi. Além disso, [SKUs marcados como inativos](https://help.vtex.com/pt/tutorial/inativar-skus-e-produtos-da-loja--4oviRZMwCkSEcugEyEmEwo) são desativados no marketplace.

Na Loopi, a desativação do último SKU de um produto ocasiona automaticamente a exclusão daquele produto da base de dados. Porém, quando existem notificações de criação de SKUs para um produto desativado, esse produto é automaticamente reativado na Loopi.

>⚠️ Só é possível atualizar produtos e SKUs na base de dados da Loopi quando a configuração de um SKU está marcada como <i>ativa</i>.

### Status de pedidos na Loopi

Na Loopi, os usuários podem adquirir produtos de diferentes sellers em um mesmo pedido, sendo que para cada seller é gerado um pedido diferente. É possível que um pedido se encontre em algum dos seguintes _status_:

| **Status na Loopi** | **Descrição** |
| ---------- | ---------- |
| Pendente | O pagamento do pedido ainda não foi aprovado. |
| Aguardando envio | Pedido faturado e pronto para ser enviado. |
| Enviado | Pedido na transportadora, prestes a ser entregue ao consumidor. |
| Entregue | O pedido foi entregue ao consumidor e foi concluído. |
| Aguardando cancelamento | Quando o seller VTEX solicita o cancelamento do pedido. |
| Cancelado | O pedido foi encerrado e está concluído. |

A Loopi faz a gestão da cobrança do pedido em seu ambiente, ou seja, o pedido é integrado na VTEX como já tendo sido pago. Ao ser integrado na VTEX, o pedido se encontra em algum dos seguintes _status_: _Aguardando envio_ ou _Cancelado_. O cancelamento ocorre, por exemplo, quando o checkout envolve múltiplos sellers e algum deles apresenta erro ao finalizar o pedido. Nestes casos, o pedido criado na VTEX é cancelado.

Existe também a possibilidade de um seller VTEX solicitar o cancelamento do pedido, que muda o _status_ do pedido de _Aguardando envio_ para o _status_ _Aguardando cancelamento_. A Loopi se reserva o direito de avaliar o caso, para decidir se é cabível ou não o reembolso ao consumidor. Para saber mais sobre práticas da Loopi, acesse [Política de troca, devolução e reembolso da Loopi](https://loopi.shop/politica-troca-e-devolucao).

O consumidor é notificado sobre todas as mudanças de _status_ de pedidos. As notificações aos consumidores são enviadas via notificação _push_ no app da Loopi, e também por email.

### Operação logística na Loopi

O cálculo de frete e o prazo de entrega dos pedidos é fechado no ambiente da Loopi, no momento da compra. As configurações logísticas serão aquelas que você escolher na Estratégia de Envio definida para a integração. Essa configuração será feita adiante, como parte da etapa de configurações no seu Admin VTEX.

>ℹ️ O fullfilment, ou seja, a responsabilidade da entrega do pedido ao cliente, é responsabilidade da loja VTEX.

## Configurações na plataforma VTEX

Para integrar com a Loopi, é necessário realizar as seguintes etapas no seu Admin VTEX:

- [Definir política comercial](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#definir-politica-comercial)
- [Definir estratégia de envio](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#definir-estrategia-de-envio)
- [Instalar a app Loop](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#instalar-a-app-loopi)
- [Ativar a integração com a Loopi](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#ativar-a-integracao-com-a-loopi)
- [Mapear categorias, variações e atributos](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#mapear-categorias-especificacoes-e-atributos)

### Definir política comercial

A [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio da sua loja VTEX em um canal de venda. Se você deseja que as mesmas configurações da sua loja sejam utilizadas para seus produtos na Loopi, não é necessário [criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) nova, pois uma mesma política comercial pode ser usada para diferentes canais de venda.

Caso seja do seu interesse ter configurações específicas para vender na Loopi, você pode [configurar uma política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace/). Não existe cobrança para a contratação de políticas comerciais adicionais para integrar lojas VTEX com conectores nativos, conectores certificados ou outras lojas VTEX. Saiba mais em [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/integrando-com-marketplace--tutorials_402).

>⚠️ Os produtos que você deseja enviar para a Loopi devem estar [associados à política comercial](https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb) definida. Caso contrário, eles não serão integrados.

### Definir estratégia de envio

Para vender seus produtos na Loopi é preciso determinar uma [Estratégia de Envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), ou seja, informar qual será a logística de entrega dos seus produtos. A Estratégia de Envio é composta de três etapas logísticas: [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), [Estoque ](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)e [Doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).

A Política de Envio estabelece o conjunto de regras das condições de frete, ou seja, informações de custo, transporte e tempo de entrega. Além disso, é também por meio Política de Envio que é feita a associação de qual será o local de armazenamento dos seus produtos (Estoque), e qual será o espaço de escoamento desses produtos (Doca).

Se for do seu interesse utilizar a mesma Estratégia de Envio definida para sua loja VTEX na integração com a Loopi, não é necessário criar novas configurações de logística. Se, no entanto, você deseja criar uma Estratégia de Envio específica para o marketplace, é necessário realizar os seguintes passos:

1. [Cadastrar Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio), associada à política comercial usada na integração.
2. [Cadastrar Doca](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), associada à política comercial usada na integração.
3. [Cadastrar Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137), associado à Doca criada no passo anterior.

Caso você queira conferir se as configurações foram realizadas corretamente, você pode fazer uma [simulação de envio](https://help.vtex.com/pt/tutorial/simulacao-de-frete--tutorials_144). O Simulador de envio é uma ferramenta que possibilita checar as condições de entrega do produto sem de fato abrir um pedido.

### Instalar a app Loopi

Há duas formas de dar início a instalação, buscando a app Loopi na [VTEX App Store](https://apps.vtex.com/), ou no seu Admin VTEX, em **CONFIGURAÇÕES DA CONTA > Aplicativos > Loja de aplicativos**. Para dar início à instalação, siga os passos abaixo:

1. Na página da [app Loopi](), clique em `OBTER APP`.
2. Em _Digite sua conta_, preencha com a [account name](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) da sua loja VTEX.
3. Clique em `CONFIRMAR`.
4. No carrinho do seu pedido na VTEX App Store, clique em `FECHAR PEDIDO`.
5. Clique em `VÁ PARA A PÁGINA DE INSTALAÇÃO`.
6. No Admin VTEX, clique em `INSTALAR`.

Uma vez instalada, a app estará disponível no seu Admin VTEX, em **CONFIGURAÇÕES DA CONTA > Aplicativos > Meus Aplicativos**, na aba **Instaladas**. Além disso, no menu lateral do seu Admin VTEX, em **MARKETPLACE**, será possível identificar o novo campo **Loopi**.  Pode ser necessário atualizar a página para que a opção fique visível.

### Ativar a integração com a Loopi

Para ativação da integração, acesse, no seu Admin VTEX, **MARKETPLACE > Loopi > Configurações**. Será apresentada a seguinte tela:

![loopi_imagem](https://drive.google.com/uc?export=download&id=1XHnasfVZE9jB0SEU7tb9WGmDvp9nlJGX)

Para prosseguir com a integração, siga os passos abaixo:

1. Em `Status da Integração`, mantenha habilitada a opção _Ligado_.
2. Preencha o campo `Política Comercial` com a identificação da política comercial que deseja utilizar na integração com a Loopi. O campo `País` será automaticamente preenchido, conforme sua escolha de política comercial.
3. Preencha o campo `E-mail` com o endereço eletrônico para notificações sobre a integração.
4. Clique em `Save`.

Por padrão, não é necessário se ocupar dos campos **ID do afiliado** e **Endpoint de notificação**, que são gerados de forma automática e aparecem desabilitados para edição. No entanto, caso deseje editar o **ID do afiliado**, clique sobre o ícone <i class="fas fa-cog"></i> engrenagem. Isso fará com que você seja redirecionado para a página de edição de códigos de identificação de [afiliados](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0).

>❗ Conforme mencionado na etapa [Antes de começar](https://help.vtex.com/pt/tutorial/integracao-com-loopi--2wmap3hWksLxJ0IYe7nYFP#antes-de-comecar), para realizar a ativação da integração é necessário já ter concedido à Loopi alguns dados. É a partir disso que o parceiro realiza configurações que possibilitam a integração com a plataforma VTEX.

### Mapear categorias, especificações e atributos

Uma vez ativada a integração, é necessário realizar um mapeamento de categorias e atributos dos seus produtos. Isso permite que exista uma correspondência entre o padrão da sua loja VTEX e o padrão utilizado pela Loopi. Se necessário, consulte a relação entre os campos da Loopi e da VTEX na seguinte tabela:

| **Loopi** | **VTEX** | **Definição** |
| ---------- | ---------- | ---------- |
| Categoria | Categoria | Nível de classificação de produtos que organiza um sortimento de produtos. |
| Marca | Marca | Marca cadastrada em um produto. |
| Nome | Nome do produto ou Nome do SKU | Nome utilizado para designar um produto ou SKU. |
| Descrição | Descrição do produto | Descrição das principais informações de um produto em seu cadastro. |
| Cor | - - - | [Especificações](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) são propriedades adicionais que podem ser cadastradas em um produto ou SKU. No caso da coloração, cada seller possui nome próprio para o atributo, e pode cadastrá-lo como sendo uma especificação de produto ou de SKU. |
| Foto | Imagem | Uma ou mais imagens cadastradas em um SKU. Na integração com a Loopi, as imagens aparecem na interface para o consumidor conforme a ordem na qual foram cadastradas. |
| Preço de | Preço de lista | O [Preço de lista](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) funciona como um preço de venda sugerido para um SKU, que pode ser apresentado junto com um outro preço, de valor reduzido. |
| Preço por | Preço Base | O [Preço Base](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) de um SKU é o preço de referência do item para todas as tabelas de preço. |
| SKU | ID do SKU | Código numérico que identifica um SKU. |
| Largura da embalagem, Altura da embalagem, Comprimento da embalagem e Peso total | Largura para Frete, Altura para Frete, Comprimento para Frete e Peso Real | Nomes de campos correspondentes às dimensões de um SKU em seu cadastro. |

O mapeamento de categorias e atributos é realizado pelo seu Admin VTEX, em **MARKETPLACE > Loopi > Mapeamento de categorias > Loopi Mapper**. É necessário mapear todas as categorias da sua árvore de categorias VTEX de acordo com as categorias utilizadas pela Loopi. Além disso, na Loopi só é possível mapear os atributos _cor_ e _tamanho_ relativos à categoria _Moda_.

#### Interface de mapeamento Loopi Mapper

Na interface de mapeamento, existe o campo de tela **Categorias da loja**, seguido de uma listagem das categorias da sua loja VTEX. Existe um campo de busca, indicando que é possível buscar uma categoria da sua loja VTEX por nome. Ainda na interface de mapeamento, existem os campos de tela **Categoria do marketplace** e **Mapeamento de Atributos**, ambos com uma opção de menu _dropdown_. Ou seja, clicando sobre a seta, aparecem novos campos e informações.

Na lista de categorias da sua loja VTEX, existe um ícone associado a cada categoria. Quando uma categoria ainda não foi mapeada na Loopi, o ícone relativo a ela é uma exclamação de cor esmaecida. Ao arrastar o mouse sobre o ícone, é possível ler o texto **Não mapeado**. Além deste ícone, existem três outros que podem aparecer em diferentes momentos da interface, sendo que cada um indica um estado de mapeamento. São eles:

<img class="shadow-4" src="https://images.contentful.com/alneenqid6w5/6Zu9VaGjbucOthXQsFwTD1/8681ab7d7e4fd12b41daae3c69afd552/mapper_correto.JPG" /> Mapeado
<img class="shadow-4" src="https://images.contentful.com/alneenqid6w5/1C2pYCZ6sl34gLqbrXKanY/f139524a81922210d93bd3f5b88ef329/mapper_atencao.JPG" /> Mapeamento incompleto
<img class="shadow-4" src="https://images.contentful.com/alneenqid6w5/K6HiE5mgImVJ4nFvO8W0L/cddc7566c8cc38a1bf5fe37283a145a3/mapper_erro.JPG" /> Erro no mapeamento

- **Mapeado:** significa que o mapeamento foi bem sucedido. Pode ser um mapeamento a nível de atributo, produto ou categoria.
- **Mapeamento incompleto:** indica que há algum nível não mapeado. Pode ser que existam produtos não mapeados dentro de uma categoria, por exemplo.
- **Erro no mapeamento:** caso a Loopi exclua ou mude o nome de uma categoria, isso pode originar um erro de mapeamento. Para solucioná-lo, basta refazer o mapeamento.

#### Mapeamento de categorias e atributos

Para realizar o mapeamento de uma categoria, selecione seu nível mais profundo. Em seguida, clique em **Categoria do marketplace**, e selecione a opção que mais se aproxima da sua árvore de categorias, até atingir o último nível. Feito isso, clique em **Mapeamento de Atributos**. Na Loopi, só é possível mapear atributos de _cor_ e _tamanho_ dentro da categoria _Moda_. Nos outros casos, aparece a seguinte mensagem: _Não foram encontrados atributos para essa categoria_. Uma vez definido o mapeamento da categoria e atributos, se houver, clique no botão **Salvar Alterações**.

Vale ressaltar que, no mapeamento de atributos, é possível mapear várias cores e tamanhos de uma só vez, pois uma cor ou tamanho na Loopi pode estar associada a inúmeras variações do atributo na sua loja VTEX. Por exemplo, o _azul_ pode estar relacionado às cores _azul_, _azul royal_ e _azul claro_. Para adicionar cores similares da sua loja VTEX de uma só vez, basta escrever os vários nomes no mesmo campo **cor equivalente**.

Dentro do mapeamento de um atributo, seja ele _cor_ ou _tamanho_, existe o campo de tela **Mostrar todos os valores**. Ao clicar sobre ele, aparecem outras opções de valores para o mapeamento. É possível ainda clicar sobre o botão **Adicionar valor personalizado** e criar um nome para como o valor do atributo deve aparecer na interface da Loopi para os usuários.

Para ter certeza de que todas as categorias da sua loja VTEX foram mapeadas corretamente na Loopi, você deve ser capaz de visualizar no _Loopi Mapper_ o ícone de _mapeamento completo_ ao longo de toda a lista de categorias da sua loja VTEX.

>ℹ️ Em seu canal no Youtube, a Loopi disponibiliza o [vídeo Mapeamento de categorias](https://www.youtube.com/watch?v=ryfqmh8qpo4), no qual apresenta um exemplo de item de moda sendo mapeado.

#### Mapeamento de especificações

Conforme mencionado anteriormente, a Loopi só realiza mapeamento dos atributos _cor_ e _tamanho_ na categoria _Moda_. Outras especificações são adicionadas ao final da descrição dos produtos. Por exemplo, se existe uma especificação indicando que uma camiseta é feita de algodão, essa informação sobre a composição do tecido é adicionada na descrição do produto.

## Comunicar à Loopi a conclusão da integração

Após realizar o mapeamento de categorias, variações e atributos dos seus produtos, é necessário informar à Loopi que esse processo foi concluído. Você pode entrar em contato com o marketplace pelo email _comercial@loopi.shop_, ou pelo seu contato comercial. Somente após essa comunicação é que a equipe da Loopi realiza a carga inicial de produtos.

Após a realização da carga inicial, a integração da sua loja VTEX com o marketplace estará concluída.

>ℹ️ Em caso de dúvidas, entre em contato com a Loopi pelo email <i>contato@loopi.shop</i>.

<br></br>
### Saiba mais

- [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
- [Configurar política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)
