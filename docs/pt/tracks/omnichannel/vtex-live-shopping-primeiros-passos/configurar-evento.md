---
title: 'Configurar evento'
id: 125yr6jAfwiiz84JP4ppfO
status: PUBLISHED
createdAt: 2025-07-23T18:02:12.430Z
updatedAt: 2025-11-18T21:13:33.647Z
publishedAt: 2025-09-15T21:13:33.647Z
firstPublishedAt: 2025-07-28T15:08:11.624Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: configuring-event
locale: pt
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeiros-passos
order: 7
---

No Admin VTEX, acesse **Aplicativos > Live Shopping** ou digite **Live Shopping** na barra de busca no topo da página e clique no ícone de seta de um [evento criado](https://help.vtex.com/pt/docs/tracks/criar-evento) para abrir a página de **Informações do evento**. Na página de gerenciamento, você encontrará as seguintes opções de configuração, divididas em seções:

* [Tipo de layout - Configuração do estilo](#tipo-de-layout-configuracao-do-estilo)
* [Chat - Configuração do nome do administrador](#chat-configuracao-do-nome-do-administrador)
* [Promoções - Configuração de cupons e promoções](#promocoes-configuracao-de-cupons-e-promocoes)
* [Configurações - Configuração de funcionalidades](#configuracoes-configuracao-de-funcionalidades)
* [Destaque de produto - Configuração de exibição da coleção](#destaque-de-produto-configuracao-de-exibicao-da-colecao)
* [Configuração do CMS - Configuração da apresentação do conteúdo](#configuracao-do-cms-configuracao-da-apresentacao-do-conteudo)

> ⚠️ Este artigo descreve as principais configurações para um evento, mas não cobre todas as seções da página **Informações do evento**. Para mais informações, acesse [Live Shopping: Eventos](/pt/tutorial/live-shopping-eventos--6aGLiqoKG1UoS30f3FFWch).

## Tipo de layout - Configuração do estilo

O layout define como a tela será exibida aos clientes durante a transmissão e também o formato de gravação do evento.

> ❗ O estúdio de transmissão usa o layout do primeiro administrador que entrar. Por isso, é necessário configurar o layout do evento antes de entrar no estúdio de streaming. Você poderá alterar o layout posteriormente no Admin VTEX, mas não no estúdio de streaming.

### Formato da tela

Na seção **Tipo de layout**, escolha o layout desejado para a transmissão do seu evento ao vivo:

- **Paisagem (16:9):** oferece uma visualização horizontal da transmissão, otimizada para telas de desktop.
- **Retrato (9:16):** oferece uma visualização vertical da transmissão, otimizada para telas de dispositivos móveis.

 ![article_7_screen_format_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/configurar-evento_1.png)

O formato da tela é **Paisagem (16:9)** por padrão, mas você pode alterá-lo clicando em **Retrato (9:16)**. A marcação em azul indica a opção selecionada.

> ℹ️ Assim que a transmissão com o estúdio Bundle começar, não será mais possível alterar o layout da tela. Para isso, você precisará criar um novo evento.

### Customização do estilo

Por padrão, um evento apresenta um estilo visual neutro, adequado para lojas e que não impacta a imagem da marca. No entanto, você pode customizar os seguintes estilos:

- Fonte do texto
- Cores
- Cards de produtos
- Preço do produto
- Botão de adicionar ao carrinho
- Produto em destaque
- Título da seção do produto
- Título do chat
- Botão de enviar mensagem

> ℹ️ As customizações acima são feitas clicando no botão **Personalize a aparência** e preenchendo a página Aparência para alinhar com suas preferências. Para seguir o passo a passo, acesse [Live Shopping: Eventos](/pt/tutorial/live-shopping-eventos--6aGLiqoKG1UoS30f3FFWch).

## Chat - Configuração do nome do administrador

A seção **Chat** é onde você gerencia o chat durante o evento. Se você quiser configurar um nome específico para identificar o administrador que está enviando mensagens, siga os passos abaixo:

1. Na seção **Chat**, clique no ícone do perfil.
2. Na janela **Informações da loja**, informe o nome do administrador desejado.
3. Clique em `Confirmar`.

> ℹ️ Para saber mais como fixar mensagens, bloquear usuários, excluir mensagens, e realizar outras ações no chat do evento, acesse [Live Shopping: Eventos](/pt/tutorial/live-shopping-eventos--6aGLiqoKG1UoS30f3FFWch).

## Promoções - Configuração de cupons e promoções

Nesta seção, você pode configurar cupons e promoções baseados nos espectadores do evento ou nas curtidas, por exemplo. As opções disponíveis serão aquelas previamente configuradas no módulo [Promoções](https://help.vtex.com/pt/docs/tutorials/criar-promocoes).

Para anunciar uma promoção durante o seu evento de **Live Shopping**, siga os passos abaixo:

1. Na seção **Promoções**, clique em `Nova promoção`.  
2. Selecione uma opção de promoção usando o menu suspenso.  
3. Escolha uma variável:

  * Curtidas
  * Comentários  
  * Espectadores  
  * Pedidos

4. No campo **Objetivo**, informe a condição que o público deve atingir para ativar o cupom ou promoção. Essas informações não são visíveis ao público e estão limitadas a 20 caracteres. Veja abaixo um exemplo para cada variável:

  * **Curtidas:** alcançar 100 curtidas.
  * **Comentários:** obter 150 comentários.
  * **Espectadores:** reunir um público com mais de 200 pessoas.
  * **Pedidos:** receber os primeiros 100 pedidos.

  >⚠️ Os cupons são ativados imediatamente assim que o objetivo é alcançado. As promoções são ativadas cinco minutos após o objetivo ser alcançado.

5. No campo **Mensagem para exibir**, digite o texto que será exibido ao público explicando o objetivo que desbloqueia a promoção ou o cupom. Limite de 20 caracteres. Por exemplo: `40% off`.
6. Selecione uma animação para exibir a promoção ou o cupom durante o evento.
7. Clique em `Salvar`.

Depois de criada, a promoção será exibida em uma tabela com as seguintes colunas:

* **Status:** permite ativar ou desativar a promoção usando o botão de ativação. Embora promoções ou cupons sejam ativados automaticamente quando o público atinge o objetivo, é possível gerenciar o status de ativação deles durante o evento.
* **Promoção:** nome que identifica a promoção.
* **Variável:** base da promoção, que pode ser `Curtidas`, `Comentários`, `Espectadores` ou `Pedidos`.
* **Objetivo:** valor da variável que, uma vez atingido, ativa a promoção.
* **Ações:** permite <i class="fa-solid fa-pencil"></i> editar ou <i class="fa-solid fa-trash"></i> excluir a promoção. Todas as configurações da promoção podem ser editadas. Ao excluir, a promoção será removida apenas desta configuração do evento, não do módulo **Promoções**.

## Configurações - Configuração de funcionalidades

Em **Configurações**, você pode ativar ou desativar as seguintes funcionalidades:

| **Funcionalidade** | **Opção** |
| :---: | :--- |
| Chat | <ul><li>**Email obrigatório:** por padrão, para permitir que o público participe do chat ao vivo durante o evento, apenas o nome é obrigatório. Ao ativar este campo, o email também passa a ser obrigatório.</li><li>**Ativar envio de email:** com este campo ativo, se um espectador fizer uma pergunta e o administrador responder através do chat, um email com a resposta será enviado ao espectador. Isso ajuda a manter a interação com o público fora do chat.</li></ul> |
| Reprodutor de mídia | <ul><li>**Número de espectadores:** exibe o número de espectadores assistindo o evento ao vivo. Este número não é cumulativo.</li><li>**Pop-up de transmissão:** permite exibir todo o componente do Live Shopping (chat, reprodutor de mídia e barra lateral do produto) em formato de pop-up, para destacar o evento enquanto o público assiste. O espectador pode fechar o pop-up a qualquer momento clicando no X no canto superior para retornar ao formato original.</li></ul> |
| Produtos | <ul><li>**Aplicar impostos:** permite aplicar impostos a produtos exibidos durante o evento ao vivo. Com essa opção ativa, o módulo **Promoções > Taxas** irá exibir o preço do produto junto com o imposto aplicável.</li></ul> |

## Destaque do produto - Configuração de exibição da coleção

A seção **Destaque do produto** é onde você gerencia os produtos em destaque durante o evento. Os produtos exibidos pertencem à coleção selecionada ao [criar o evento](https://help.vtex.com/pt/docs/tracks/criar-evento) ou à coleção que você adicionar ou atualizar antes ou durante a transmissão.

>⚠️ Para garantir que sua coleção seja exibida corretamente em um evento de **Live Shopping**, recomendamos criá-la com pelo menos algumas horas de antecedência. Assim, a plataforma terá tempo suficiente para indexar as informações. Caso contrário, a página pode ficar armazenada em cache durante o evento, o que pode impedir a exibição correta da coleção.

Para destacar um produto, ative o botão de ativação na coluna Ações. Você pode escolher dois produtos por vez. Depois de selecionado, o produto será exibido acima dos nomes das colunas.

## Configuração do CMS - Configuração da apresentação do conteúdo

Na seção **Configuração do CMS**, você pode configurar como o conteúdo será apresentado durante o evento. As funcionalidades disponíveis são as seguintes:

- **Produtos da barra lateral**: exibe uma barra lateral no reprodutor de vídeo, mostrando os produtos selecionados. Os produtos são exibidos verticalmente no lado esquerdo do reprodutor de mídia.
- **Carrossel de produtos:** exibe um carrossel com um conjunto de produtos em formato paisagem abaixo do reprodutor de vídeo durante o evento ao vivo.
- **Chat:** permite a interação do público via chat durante o evento ao vivo. Atenção: se o chat estiver oculto, a opção de pergunta também ficará oculta, já que essa funcionalidade é exibida acima do chat.
- **Curtida:** permite que os usuários reajam durante o evento ao vivo usando o botão de curtir em formato de coração.

![article_7_cms_configuration_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/configurar-evento_2.png)

* **Carrinho de compras:** disponibiliza o botão “Adicionar ao carrinho” que, quando clicado, abre uma nova aba com o checkout e o produto adicionado ao carrinho de compras do cliente. O modo picture-in-picture (PiP) também será ativado, permitindo que o cliente continue assistindo à transmissão ao vivo enquanto finaliza o pedido.
* **Visualização rápida:** permite que o seu público assista ao evento ao vivo enquanto navega pelas variações de produtos. Quando o cliente clica no botão `Adicionar ao carrinho`, uma visualização rápida do produto é aberta sem que a transmissão do evento fique oculta. Isso permite ao cliente escolher o tamanho e a cor de um produto, por exemplo, enquanto assiste ao evento.
  * Se esta opção estiver desativada, quando o cliente clicar em `Adicionar ao carrinho`, uma nova aba com a página de detalhes do produto (PDP) será aberta e o modo PiP será ativado automaticamente para que o cliente continue assistindo à transmissão ao vivo.
* **Rolagem infinita:** implementa uma rolagem infinita para a opção de produtos da barra lateral que rola automaticamente a cada N segundos, para que seu público possa visualizar todos os produtos sem nenhuma ação adicional.
  * A velocidade de rolagem automática padrão é de 10 segundos, mas você pode alterá-la inserindo o número desejado no campo. Recomendamos configurar entre 3 e 100 segundos.

> ℹ️ Todas as funcionalidades acima são ativadas por padrão, exceto o **Carrossel** de produtos e o **Carrinho de compras**.

### Script para o template

Para integrar o aplicativo de transmissão ao vivo no seu storefront com suas preferências, use a tag HTML encontrada no campo **Script para template**. Para isso, escolha uma das seguintes opções:

- **Template CMS:** para lojas que usam o CMS - Portal Legado.
- **Template externo:** para lojas externas.

### Pré-visualização

Para pré-visualizar o evento, em **Informações do evento** > **Configuração do CMS**, clique no botão `Pré-visualização`. Uma nova aba será aberta e exibirá o evento exatamente como o seu público verá. Esta simulação ajuda a validar que tudo está funcionando corretamente ao exibir elementos como:

- Chat
- Reprodutor de mídia
- Barra lateral de produtos
- Destaque do produto

> ❗ Recomendamos que faça verificações adicionais em todo o site para garantir que tudo esteja funcionando corretamente. A **Pré-visualização** verifica apenas componentes específicos do **Live Shopping**.
