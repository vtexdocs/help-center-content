---
title: 'Integração com a Shopee '
id: 5OV9idUY6fHu3P8grnCnqj
status: PUBLISHED
createdAt: 2022-09-05T19:33:02.717Z
updatedAt: 2024-09-04T13:20:57.644Z
publishedAt: 2024-09-04T13:20:57.644Z
firstPublishedAt: 2022-09-06T01:42:40.106Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: integracao-com-a-shopee
locale: pt
legacySlug: integracao-com-a-shopee-beta
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

>❗ A integração com o marketplace Shopee está temporariamente indisponível para novos sellers desde 03 de setembro de 2024.

A [Shopee](https://shopee.com.br/) é uma plataforma de ecommerce que funciona como marketplace. A plataforma conta com um grande catálogo de produtos que podem ser consultados pelo site oficial ou pelo aplicativo, além de mais de 43 milhões de usuários cadastrados.

Através da integração entre a VTEX e a Shopee, você poderá utilizar a Shopee como canal de vendas.

## Visão geral da integração com a Shopee

Antes de configurar sua loja na plataforma VTEX, você deverá criar uma conta de vendedor na Shopee por meio do cadastro na [Central do Vendedor Shopee](https://seller.shopee.com.br/account/signin?next=%2F).

Depois de criar sua conta na Shopee, você estará apto(a) para realizar as seguintes configurações na plataforma VTEX:

- [Configurar política comercial para Shopee](#configurar-politica-comercial-para-shopee)
- [Definir Doca e Estoque](#definir-doca-e-estoque)
- [Instalar o app Shopee Conector](#instalar-o-app-shopee-conector)
- [Configurações Shopee](#configuracoes-shopee)
- [Mapeamento de Categorias e atributos](#mapeamento-das-categorias-e-atributos)
- [Gerenciar produtos](#gerenciar-produtos)
- [Gerenciamento de pedidos da Shopee na plataforma VTEX](#gerenciamento-de-pedidos-da-shopee-na-plataforma-vtex)

>ℹ️ A integração com a Shopee não consegue integrar pedidos de produtos cujo os anúncios já existem na Shopee. A partir da ativação da integração, os pedidos que serão fechados na Shopee, serão integrados na VTEX.

## Configurar política comercial para Shopee

Na VTEX, uma [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio em um canal de venda. Ou seja, é por meio da política comercial que você define as configurações que serão aplicadas aos seus produtos na Shopee.

Se as mesmas configurações de catálogo, preço e estratégia de envio da sua loja VTEX forem utilizadas no Shopee, não é preciso [criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) nova, porque uma mesma política comercial pode ser usada para diferentes canais de venda.

Só será necessário [configurar uma política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404) específica, se você tiver algum dos seguintes objetivos:

- Oferecer na Shopee uma seleção diferente de produtos.
- Disponibilizar uma quantidade de estoque diferente.
- Enviar preços diferentes para a Shopee.
- Configurar outras condições de pagamento.

Para [contratar políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta psolicitar via ticket em nosso [Suporte](https://help.vtex.com/pt/support) selecionando a opção **Comercial** e o tipo de solicitação `Criação de Política Comercial`.

>ℹ️ A integração com a Shopee não é um [conector certificado (parceiro)](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) da VTEX, fazendo que a contratação de política comercial adicional não seja isenta de taxas.

## Definir Doca e Estoque

Na integração com a Shopee, o envio do produto é responsabilidade do próprio marketplace. Todos os pedidos oriundos da Shopee são [pedidos FOB](https://help.vtex.com/pt/tutorial/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ), a VTEX não controla o preço de frete e prazo de envio dos produtos.

Entretanto, existem 3 passos importantes para a configurar a integração:

1. [Cadastrar Doca](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), associada à política comercial usada na integração.
2. [Cadastrar Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137), associado à Doca criada no passo anterior.
3. Associar a política comercial da Shopee à doca.

## Instalar o app Shopee Conector

Depois de ter feito as pré-configurações da sua loja VTEX, você poderá instalar o **app Shopee Conector** na sua loja VTEX. Para isso, siga os passos a seguir:

1. Acesse a [VTEX App Store](https://apps.vtex.com/). 
2. Procure pelo app **Shopee Conector**.
3. Clique no botão `Obter App`.
4. Preencha o campo **Faça login em sua loja VTEX** com o nome da sua [account name](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) na VTEX. 
5. Clique no botão `Confirmar`.
> Você será direcionado a página de autenticação da sua conta. 
6. Faça a autenticação da sua conta.
> Depois de realizar a autenticação, você será direcionado para outra página.
7. Clique no botão `Fechar Pedido`.
8. Feito o download do app da Shopee, é necessário fazer a instalação do app na sua loja VTEX, clique no botão `Vá para a página de Instalação`.
9. Na página de instalação, clique em `Instalar`.

No final da instalação, o app estará disponível no seu Admin VTEX.

>ℹ️ O acesso ao aplicativo da Shopee pode ser realizado seguindo as instruções acima ou através do caminho **Admin VTEX > Marketplace > Marketplaces e integrações.**

## Configurações Shopee

Depois de instalar o aplicativo, é necessário configurá-lo no Admin VTEX. Acesse **Apps > Shopee > Configurações,** ou digite **Shopee** na barra de busca do Admin.

A página **Configurações Shopee** possui duas abas:

1. [Integração com a Loja](#integracao-com-a-loja)
2. [Configuração de níveis](#configuracao-dos-niveis)

### Integração com a loja

Você deve preencher os campos abaixo para finalizar a configuração da integração com a Shopee.

#### Conexão VTEX e Shopee

1. **Conexão com Shopee:** o primeiro passo para configurar sua integração é conectar sua conta na Shopee com a plataforma VTEX. Para isso, em **Informações da loja**, clique em `Conectar loja`. Você será direcionado ao ambiente da Shopee, faça o login da sua conta na plataforma da Shopee e clique no botão `Confirm Authorization`.

  Feita a conexão entre sua loja VTEX e a plataforma da Shopee, você poderá visualizar o status de login do seu usuário ao lado de *Conexão VTEX e Shopee*. A conexão pode apresentar três status diferentes:

   * **Verde:** Quando a autenticação com a Shopee está concluída.
   * **Amarelo:** Quando há problemas com autenticação com a Shopee. Para solucionar, faça a autenticação novamente.
   * **Vermelho:** Quando a autenticação não foi realizada ou autorizada na Shopee.

  Com o `Status Verde`, você poderá seguir para os próximos passos da configuração. Com os outros status, você deve entrar em contato com o time de suporte da VTEX.

2. **Detalhes da loja:** São preenchidos automaticamente com as informações da sua loja na Shopee, como *Região* e *Nome da loja*.
3. **ID de afiliado:** O [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o identificador de uma loja VTEX em um marketplace, sendo necessário que o seller tenha um ID do afiliado diferente para cada marketplace onde venda seus produtos. A integração cria automaticamente um afiliado chamado `SHP`, por padrão, e você pode selecionar outro afiliado, ou até [configurar](https://help.vtex.com/pt/tutorial/como-configurar-afiliado) um afiliado próprio. Entretanto, sugerimos fortemente que você selecione a opção `SHP` como afiliado.
4. **Canal de vendas a ser sincronizado:** Selecione a opção de política comercial criada na etapa [Configurar política comercial para a Shopee](#configurar-politica-comercial-para-a-shopee).
5. **Status da integração:** Depois que você conectar sua loja VTEX com a Shopee, o status da integração será ligado automaticamente. Você pode desligar a integração caso necessite realizar algum novo mapeamento de produto, ou solucionar algum erro que possa vir acontecer. Ao desligar a integração, você não desconecta sua conta da Shopee e não perde as configurações já realizadas, apenas suspende as atividades da integração.

#### VTEX

1. **Notification e-mail:** Endereço de email da pessoa responsável por gerenciar a integração, ele será associado ao ID do afiliado `SHP`. O e-mail precisa ser o mesmo cadastrado na sua conta Shopee.
2. **Sincronizar produtos sem estoque:** Ativando essa tag para `SIM`, você permitirá que os produtos sem estoque sejam enviados para a Shopee.

#### Marketplace

1. **Idioma do mapeador de categorias:** Idioma nativo do admin da loja VTEX será selecionado automaticamente. Mas você pode selecionar entre duas opções de idiomas:

   * Português (Brasil)
   * Inglês

2. **Tipo de etiqueta de envio:** Selecione o formato de arquivo que deseja receber da etiqueta de envio dos produtos. Existem duas opções de formato de arquivo disponíveis:

   * ZPL 
   * PDF

#### Serviços ERP

Quando um pedido é feito na Shopee, o pedido é faturado no OMS da VTEX após a confirmação de pagamento. Quando a [nota fiscal](https://help.vtex.com/pt/tutorial/como-inserir-a-nota-fiscal--tutorials_193) é inserida no pedido, a integração VTEX envia para o marketplace essa informação para disponibilizar a etiqueta de envio do pedido.

Os Serviços ERP disponibilizam um endpoint para obter o arquivo da etiqueta de envio que será gerada. Para acessar as etiquetas da Shopee, siga os passos abaixo:

1. Clique no botão `Veja serviços`. 
2. No campo `Endpoint`, a URL do endpoint já virá preenchida com um endpoint para uma futura requisição GET.
3. Clique no botão `Gerar uma nova chave de API` para gerar uma chave de autenticação dessa requisição.
4. Em seguida, clique em `Confirmar`.
5. Com a chave de acesso em maõs, faça uma requisição GET no seu provedor com o endpoint do campo `Endpoint`, substituindo `{vtex_order_id}` pelo ID do pedido na VTEX e utilizando no Header a chave de acesso obtida.
6. Na resposta dessa requisição, no campo `base64Encoded` a etiqueta será disponibilizada no formato base64.

  ![postman etiquetas shopee](//images.ctfassets.net/alneenqid6w5/fXwvkIp7rguIH22t04rAy/de4a888cd831e0f60917c30f23fb5602/postman_etiquetas_shopee.png)

7. Selecione o arquivo no campo `base64Encoded`, copie e use um decodificador de arquivos formato base64 para fazer a conversão no formato do arquivo selecionado no campo `Tipo de etiqueta de envio`.
8. No final da conversão, a etiqueta estará pronta para ser utilizada.

### Configuração dos Níveis

Nessa seção, você poderá visualizar como serão exibidas as imagens, o nome, preço, informações sobre envio e especificações dos SKUs que serão enviados para a Shopee para serem comercializados.

A interface apresenta o campo **Opções de exibição das imagens dos níveis**, em que é possível padronizar ou inverter a forma como as especificações do produto irão aparecer no anúncio do produto.

| **Opção** | **Descrição** | 
| ---------- | ---------- |
| **Padrão** | Exibe as especificações de forma padrão. Por exemplo, Especificação 1/Especificação 2 |
| **Reverso** | Exibe as especificações de forma invertida. Por exemplo, Especificação 2/Especificação 1 |

Além de um campo chamado **ID do produto - Nome**, em que você poderá digitar o ID do produto na VTEX para visualizar como ele será exibido e selecionar as especificações que serão exibidas.

Para configurar os níveis, siga os seguintes passos: 

1. Na aba *Configuração dos níveis*, vá até o campo **Opções de exibição das imagens dos níveis**. 
2. No campo **ID do produto - Nome**, selecione o SKU que deseja configurar. 
3. Selecione as opções de exibição das imagens dos níveis entre `Padrão` e `Reverso`.
4. Clique em `Salvar`.

Para que as configurações sejam aplicadas na Shopee, será necessário reenviar os produtos configurados.

Ao final de todas as configurações em **Configurações Shopee**, clique em `Salvar`.

## Mapeamento das categorias e atributos

Feita a integração entre a sua loja e a Shopee, é possível enviar os produtos para o catálogo do marketplace. Para agilizar o processo de catalogação dos seus produtos e permitir que eles fiquem disponíveis para venda, você precisará realizar o mapeamento entre as características dos produtos na sua loja VTEX e as características dos mesmos produtos na sua loja no marketplace.

Para enviar os seus produtos para a Shopee, você deverá: 

1. [Mapear as categorias dos produtos.](#mapear-categorias)
2. [Mapear os atributos dos produtos.](#mapear-atributos)

>ℹ️ Seus produtos precisam ter o [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e [Preço](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) configurados antes de enviá-los ao marketplace.

### Mapear categorias

Para acessar a página de mapeamento, você deverá acessar no Admin VTEX em **Apps > Shopee > Mapear Categorias.**

Você será direcionado a página de mapeamento da Shopee e a página apresentará uma lista com as categorias da sua loja VTEX. O mapeamento das categorias permite que exista uma correspondência entre as categorias da sua loja e as categorias da Shopee. Dessa forma, os produtos enviados serão exibidos na categoria equivalente no marketplace.

Na página de mapeamento, existe uma barra de busca que permite buscar a categoria por nome. Além disso, a seção **Categorias da loja** exibe lista das categorias da sua loja VTEX. 

>ℹ️ A Shopee exige uma especificação para diferenciar um SKU do outro. Caso não haja especificação mapeada em seu produto, a integração utilizará o nome do SKU para criar essa especificação.

A lista de categorias da sua loja VTEX inclui o status de seu  mapeamento  por meio dos ícones:

| **Ícone** | **Status** | **Descrição** |
| ---------- | ---------- | ---------- | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/6Ry65cPvgGmChmE3RipFio/deec73c3e429f63dfa8971ae8c848221/mapeado_mapper.JPG" /> | **Mapeado**| Indica que o mapeamento da categoria foi concluído. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/6v4eFsWHVy8F5VIqTVLQD9/e63d945d60a958a37246f57d919eede8/mapeamentoincompleto_mapper.JPG" /> | **Mapeamento incompleto** | A categoria está parcialmente mapeada, necessitando preencher seus atributos obrigatórios, indicados por meio de um asterisco, para mapeá-la. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/lsN6TxCm1e6frHvIQ8xjt/491ad1e6d99ab858e2a76d0ea31e1a39/erromapeamento_mapper.JPG" /> | **Erro no mapeamento** | O erro no mapeamento ocorre quando o marketplace exclui ou muda a categoria do produto.  Para solucionar esse problema basta refazer o mapeamento da categoria. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/3nVJUJHetaqPHThGGpoG8T/d7f667b269105a5c65aa7b16b1aace21/incompleto_mapper.JPG" /> | **Não mapeado** | Indica que a categoria não foi mapeada. |

Ainda na página de mapeamento, existem as seções, **Categoria do marketplace** e **[Mapeamento de Atributos](#mapear-atributos)**, ambos com uma opção de menu de seleção, onde ao clicar sobre a seta, aparecem novos campos e informações.

### Mapear atributos

O mapeamento dos atributos permite que exista uma correspondência entre o padrão da sua loja VTEX e o padrão utilizado pela Shopee. Cada categoria possui seus atributos obrigatórios pelo marketplace e é necessário preenchê-los para que o mapeamento seja concluído.

Os campos não mapeados não impedem que o mapeamento ocorra, porém, quanto mais atributos enviados para a Shopee seu produto tiver, melhor rankeado ele será no marketplace.

>⚠️ A descrição dos produtos precisa ter, no mínimo, 100 caracteres. Além disso, a Shopee não aceita produtos com menos de 100 gramas, assim como não é possível enviar produtos com dimensões inválidas. Exemplo: Altura = 0 cm , Largura = 0,000001 cm. Em caso de dúvida, acesse o artigo [Dimensões e pesos permitidos para enviar pacotes da Shopee](https://seller.shopee.com.br/edu/article/3305/dimensoes-e-pesos-permitidos-para-enviar-pacotes-na-shopee).

Para realizar o mapeamento de categorias e atributos no Admin VTEX vá em **Apps > Shopee > Mapeamento de categorias** e siga os passos abaixo:

1. Na seção __Categorias da loja__, escolha a categoria que deseja mapear.
2. Na seção __Categoria do marketplace,__ selecione a categoria correspondente no marketplace do produto que você deseja enviar.
3. Preencha os campos dos atributos que deseja mapear (o asterisco indica preenchimento obrigatório).
4. Caso tenha preenchido os atributos **Cor** ou **Tamanho**, na coluna **Valores de Atributo** clique na Cor equivalente ou Tamanho equivalente e selecione a opção de valor correspondente.
5. Se desejar personalizar um atributo, clique no botão Adicionar valor personalizado e crie um nome para o valor do atributo personalizado.
6. Clique em `Salvar Alterações`.

Ao finalizar o mapeamento de categorias e atributos corretamente, o status da categoria mudará para **Mapeado**.

>⚠️ A Shopee só aceita marcas já registradas no seu catálogo de produtos. Quando não houver uma marca cadastrada no produto ou a marca cadastrada no produto não corresponder aos nomes aceitos pelo marketplace, ele será categorizado na Shopee como `NoBrand`.

## Gerenciar produtos

Para acessar a página de gerenciamento, você deverá acessar no Admin **Apps > Shopee > Gerenciar produtos**. 

Você será direcionado a página de gerenciamento de produtos da Shopee e a página apresentará uma lista com os produtos da sua loja VTEX. O gerenciamento de produtos permite inserir políticas comerciais diretamente em produtos do catálogo VTEX antes de serem importados para a plataforma da Shopee. 

Na página de gerenciamento, existe uma barra de busca que permite buscar o produto por nome. Além disso, a página possui campos **Categoria** e **Canais de Venda**, em que é possível filtrar os produtos por categoria ou política comercial (canal de venda) respectivamente. O botão `Ver detalhes` que te leva a página do produto selecionado.

A interface está dividida em três seções, são elas:

| **Nome da seção** | **Descrição** | 
| ---------- | ---------- | 
| **Importar produtos** | Seção com o objetivo de enviar os produtos do seu catálogo VTEX para a Shopee. |
| **Excluir produtos** | Seção com o objetivo de excluir os produtos que foram enviados para a Shopee. |
| **Status de sincronização de produtos** | Seção de acompanhamento da importação dos produtos para a Shopee. |

### Enviar Produtos

Para enviar seus produtos para a Shoope, siga os passos a seguir:

1.Acesse no **Admin VTEX > Apps > Shopee.**
3. Clique em **Gerenciar Produtos**.
4. Selecione o produto que deseja importar.
5. Clique em `Importar produto`.

Ao finalizar a importação, o processo de envio de produtos pode demorar um pouco. Acesse a seção *Status de sincronização de produtos* para visualizar o status do envio.

### Desativar Produtos

Para excluir seus produtos da Shoope, siga os passos a seguir:

1. Acesse no **Admin VTEX > Apps > Shopee**.
3. Clique em **Gerenciar Produtos**.
4. Selecione o produto que deseja excluir.
5. Clique em `Remover produto`.

### Status de Sincronização de Produtos

A lista de status da sincronização das categorias da sua loja VTEX que foram importadas para a Shopee inclui os seguintes status por meio dos ícones:

| **Ícone** | **Status** | **Descrição** |
| ---------- | ---------- | ---------- | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/6Ry65cPvgGmChmE3RipFio/deec73c3e429f63dfa8971ae8c848221/mapeado_mapper.JPG" /> | **Processed**| Indica que o mapeamento da categoria foi concluído. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/2sMPoDbIM0AzJrnpHTCaGB/6ad0cfe1b76db6fe18339ea6f3194feb/status_erro_importacaoshopee.JPG" /> | **Erro** | Indica que a importação da categoria não foi concluída. O motivo do erro será informado para que a correção possa ser realizada. |

## Gerenciamento de pedidos da Shopee na plataforma VTEX

O pedido da Shopee só é criado na VTEX quando o [status do pedido](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#tabela-de-status-de-pedidos) é `Pagamento Aprovado`. Entretanto, a integração já reserva o estoque do produto antes do pagamento. Quando o pagamento é confirmado, a reserva é cancelada e o pedido é criado na VTEX.

Para liberar as etiquetas de envio, a Shopee exige que seja feito o faturamento do pedido e a emissão da Nota fiscal do produto. Para isso, você pode utilizar seu [ERP](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification) ou [inserir a nota fiscal no pedido](https://help.vtex.com/pt/tutorial/como-inserir-a-nota-fiscal--tutorials_193), enviando o campo `invoiceKey (Chave da Nota Fiscal)` preenchido com a chave de acesso da NF-e e o preenchimento obrigatório do campo `embeddedInvoice` com o XML da nota fiscal.
