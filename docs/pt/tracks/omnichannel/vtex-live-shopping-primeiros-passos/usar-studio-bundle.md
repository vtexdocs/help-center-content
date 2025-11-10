---
title: 'Usar studio Bundle'
id: 3GKzrP9nkyRwpUyyeYUaeX
status: PUBLISHED
createdAt: 2025-07-23T18:06:49.325Z
updatedAt: 2025-11-10T23:15:39.786Z
publishedAt: 2025-11-03T23:15:39.786Z
firstPublishedAt: 2025-07-28T15:08:19.382Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: using-bundle-studio
locale: pt
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeiros-passos
order: 8
---

> ℹ️ Se você preferir usar um estúdio diferente do Bundle, veja [Configurar estúdios de transmissão externos](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/Dw0QdKI0aGjmyD5Z6z5JC).

O estúdio de transmissão da VTEX é chamado de **Bundle**. Neste artigo, você aprenderá como configurar todas as definições necessárias em nossa solução de estúdio nativa.

## Estúdio de streaming

Para acessar o estúdio no Admin VTEX e iniciar uma transmissão ao vivo, acesse a seção **Estúdio de streaming** na página **Informações do evento**:

![article_8_streaming_studio_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/usar-studio-bundle_1.png)

> ℹ️ Para ativar os campos, o evento deve ser [iniciado](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq) para ficar com o status `Ao vivo`.

Esta seção tem as seguintes configurações:

* **Copiar convite**: ao clicar neste botão, um link é gerado e copiado para que você possa enviá-lo a influenciadores ou hosts. Ao abrir o link e o [administrador permitir a entrada deles no estúdio](#aprovacao-do-administrador-para-a-entrada-de-convidados-no-estudio), os convidados poderão ligar ou desligar suas câmeras e microfones, bem como ver o chat dentro do estúdio. No entanto, eles não terão acesso a outras ações, conforme explicado na seção [My studio (Meu estúdio)](#my-studio-meu-estudio).
* **Acessar:** redireciona para a página **Device settings** (Configurações do dispositivo) no estúdio Bundle, onde é possível gerenciar câmeras, fazer upload de recursos gráficos, iniciar/encerrar a transmissão, entre outras ações. Essa configuração é restrita a administradores do estúdio de transmissão.

Os administradores que utilizam o botão `Acessar` são redirecionados para a página **Device settings** do Bundle, onde podem selecionar a câmera e o microfone que desejam usar e efetuar testes para garantir que tudo está funcionando corretamente.

Com o link do convite, os hosts e convidados poderão entrar no estúdio depois que o acesso for aprovado por um administrador.

## Aprovação do administrador para a entrada de convidados no estúdio

Para que pessoas externas (como influenciadores) tenham acesso ao estúdio, elas precisam da aprovação de um administrador. Essa medida aumenta a segurança da loja e permite que o lojista tenha maior controle do evento.

Para permitir que uma pessoa externa acesse o Bundle, siga os passos abaixo:

1. Como administrador, compartilhe com o convidado o link de convite para o [estúdio de streaming](#estudio-de-streaming).
2. O convidado acessa o link e solicita acesso ao estúdio. Enquanto aguarda a aprovação do admnistrador, ele vê uma tela como a seguinte:

  ![using-buncle-studio-waiting-approval_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/using-buncle-studio-waiting-approval_PT.png)

3. No Bundle, o administrador vê que o convidado está aguardando sua aprovação na página **My Studio**:

  ![usar-studio-bundle_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/usar-studio-bundle_2.png)

4. O administrador pode escolher uma das opções abaixo:
    * `Approve`: permite que o convidado entre no estúdio.
    * `Deny`: recusa a solicitação do convidado de entrar no estúdio.
5. Ao escolher uma das opções, uma mensagem de confirmação é exibida, respectivamente:
    * {Nome do convidado} has been approved.
    * {Nome do convidado} has been denied.

Se o acesso do convidado for negado e ele achar que foi um erro, ele pode clicar em `Try again` para tentar novamente:

![usar-studio-bundle_3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/usar-studio-bundle_3.png)

No entanto, se o pedido for negado uma segunda vez, será necessário aguardar cinco minutos antes de tentar novamente. Esse tempo será exibido na página com uma contagem regressiva:

![bundle-administrator-approval-flow-image-3_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/usar-studio-bundle_4.png)

## My Studio (Meu estúdio)

Na página **Device settings** (Configurações do dispositivo), ao clicar em `Enter the studio` (Entrar no estúdio), você será redirecionado para a página **My Studio** (Meu estúdio), conforme mostrado no exemplo abaixo com o [layout](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#tipo-de-layout-configuracao-do-estilo) no formato retrato.

![article_8_my_studio_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/usar-studio-bundle_5.png)

> ⚠️ Antes de iniciar a transmissão pelo Bundle, selecione o [tipo de layout](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#tipo-de-layout-configuracao-do-estilo) desejado para a tela. Após entrar na página **My Studio** (Meu estúdio), não será mais possível alterar o layout do evento. Para alterá-lo, será necessário criar um novo evento.

O menu de navegação à esquerda tem as seguintes seções (apenas para administradores, exceto pelo Chat privado):

* [My Studio (Meu estúdio)](#my-studio-meu-estudio)
* [My assets (Meus recursos)](#my-assets-meus-recursos)
* [My destinations (Meus destinos)](#my-destinations-meus-destinos)
* [Chat private (Chat privado)](#chat-private-chat-privado)
* [Settings (Configurações)](#settings-configuracoes)

Na opção **My Studio** (Meu estúdio) do menu, as configurações numeradas de 1 a 5 estão disponíveis para convidados e administradores, enquanto as configurações de 6 a 9 são exclusivas para administradores.

![article_8_my_studio_woman_streaming_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/usar-studio-bundle_6.png)

### Configurações de convidados e administradores

* **1. Invite people (Convidar pessoas):** gera o mesmo link compartilhável criado ao clicar em `Copiar convite` na seção [Estúdio de streaming](#estudio-de-streaming). Esse link pode ser enviado a influenciadores e hosts.
* **2. Ativar/desativar microfone:** permite controlar as configurações do seu próprio microfone.
* **3. Ativar/desativar câmera:** liga ou desliga sua própria câmera.
* **4. Compartilhar tela:** permite que o host (incluindo convidados/influenciadores) compartilhe sua tela e escolha a janela ou tela que deseja exibir.
* **5. Encerrar transmissão:** abre duas opções para finalizar a transmissão — uma que encerra o evento para todos e remove todos os participantes do estúdio, e outra em que apenas o usuário sai do evento. Saiba mais na seção [Finalizar a transmissão](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/69PX90vv4oDWQ34nnBkiQt#finalizar-a-transmissao).

### Configurações exclusivas de administradores

* **6. Gerenciar usuários:** as opções do menu de três pontos verticais permitem que você mute o microfone de um participante e remova uma pessoa ou dispositivo do estúdio Bundle. A caixa de seleção `Ativo` define qual participante está sendo exibido na transmissão ao vivo.
* **7. Ativar/desativar dispositivos conectados/host:** quando a caixa de seleção `Ativo` está marcada, o dispositivo ou participante fica visível ou audível na transmissão. O ícone do microfone indica quem está com o microfone ligado (azul) ou desligado (vermelho).
* **8. Composição da tela:** exibe as opções de exibição disponíveis para organizar participantes e dispositivos. O layout ideal varia conforme o número de participantes e dispositivos na transmissão.
* **9. Go live (Transmitir ao vivo):** inicia ou encerra a transmissão do evento para o público.

## My assets (Meus recursos)

Na opção de menu **My assets** (Meus recursos), você pode criar e gerenciar seus ativos de transmissão ao vivo, conforme detalhado nas seções a seguir:

* [Tipos de recursos](#tipos-de-recursos)
* [Dimensões dos recursos](#dimensoes-dos-recursos)
* [Adicionar um recurso](#adicionar-um-recurso)
* [Remover um recurso](#remover-um-recurso)

### Tipos de recursos

Os tipos de recursos são os seguintes:

* **Banners:** crie o texto e escolha a cor de fundo do banner, que será sempre exibido na parte inferior da transmissão. É possível definir se o banner será móvel ou ficará fixo na tela.
* **Overlay (Sobreposição):** selecione uma imagem para sobrepor à câmera ou a um recurso gráfico (exceto vídeos). Isso permite que o fundo ou o host permaneçam visíveis o tempo todo.
* **Background (Fundo):** escolha uma imagem para ser exibida como fundo da transmissão. O fundo permanece visível, exceto quando um vídeo está sendo reproduzido ou quando a câmera de um participante está ativada e adicionada à transmissão.
* **Video (Vídeo):** faça upload de um vídeo para melhorar a transmissão e sobreponha-o sobre câmeras ou recursos gráficos.
* **Logo (Logotipo):** insira a imagem do logotipo no canto superior direito, sobrepondo-a a qualquer câmera ou recurso gráfico (exceto sobre vídeos).

Existe também a opção <i class="fas fa-toggle-off" aria-hidden="true"></i> **Show display names** (Mostrar nomes de exibição). Ao fazer login no Bundle e preencher o campo **Name** (Nome), ele poderá ser exibido na transmissão ao vivo ao ativar essa configuração.

O nome será exibido em letras brancas sobre um fundo escuro e não poderá ser alterado. Só é possível personalizar a cor inicial da faixa, pois é a mesma usada em **Banners > Theme Color** (Cor do tema). Não é necessário criar um banner para ativar essa opção, você só precisa definir a cor do tema, que é preta por padrão. A imagem abaixo é um exemplo de uma cor de tema rosa:

<p align="center">
  <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/usar-studio-bundle_7.png" alt="article_8_asset_types_EN" width="200" height="30">

### Dimensões dos recursos

A tabela abaixo descreve o formato e o limite de tamanho para cada tipo de recurso no estúdio Bundle, dependendo das configurações de [layout](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#tipo-de-layout-configuracao-do-estilo):

| **Tipo de recurso** | **Informações gerais** | **Visualização horizontal (16:9)** | **Visualização vertical (9:16)** |
| :---: | :--- | :---: | :---: |
| Banners | Você pode personalizar os seguintes aspectos dos banners:<ul><li>Cor</li><li>Texto</li><li>Fixo ou móvel</li></ul> | Igual | Igual |
| Overlay (Sobreposição) | **Limite de tamanho:** 20 MB / **Extensão:** png | **Tamanho do arquivo:** 1280 x 720 pixels | **Tamanho do arquivo:** 720 x 1280 pixels |
| Background (Fundo) | **Limite de tamanho:** 20 MB / **Extensão:** png, jpg, jpeg | **Tamanho do arquivo:** 1280 x 720 pixels | **Tamanho do arquivo:** 720 x 1280 pixels |
| Video (Vídeo) | **Limite de tamanho:** 200 MB / **Extensão:** mov, webm, mp4 | **Tamanho do arquivo:** 1280 x 720 pixels | **Tamanho do arquivo:** 720 x 1280 pixels |
| Logo (Logotipo) | **Tamanho do arquivo:** 200 x 200 pixels / **Extensão:** png | Igual | Igual |

### Adicionar um recurso

Para adicionar um recurso, siga estas etapas:

1. Na opção do tipo de recurso desejado, clique no ícone `+`.
2. Clique para procurar o arquivo.
3. Selecione o arquivo compatível com o formato do tipo de recurso.

Depois disso, será exibida a mensagem de confirmação: *"The asset was saved with success" (Recurso salvo com sucesso)*.

> ℹ️ Os recursos adicionados ao seu ambiente logado no estúdio Bundle ficam salvos para transmissões ao vivo e eventos futuros.

### Remover um recurso

Para remover um recurso, siga estas etapas:

1. Acesse a seção do recurso desejado.
2. Clique no ícone `x` no canto superior direito do recurso.
3. No modal _**"Are you sure you want to delete this asset?"**_ (Tem certeza de que deseja excluir este recurso?), clique em **Delete** (Excluir).

## My destinations (Meus destinos)

Na opção de menu **My destinations** (Meus destinos), é possível conectar sua transmissão a outras plataformas para transmitir o mesmo conteúdo ao vivo em vários canais, como YouTube, Facebook e outras contas VTEX.

> ❗ Os destinos devem ser configurados antes de clicar em **Go live** (Transmitir ao vivo). Após iniciar a transmissão, não será mais possível conectar novas plataformas. Para isso, é necessário criar um novo evento.

### Conectar a outras contas VTEX

Para conectar contas diferentes da VTEX e transmitir o mesmo evento, cada conta deve seguir os passos a seguir. Neste exemplo, a Conta A será o administrador e a Conta B, o participante:

**Conta A:**

1. [Crie](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv) um evento.
2. Na página **Eventos**, clique na seta do evento para acessar a página de **Informações do evento**.
3. [Inicie](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq) o evento.
4. Na seção [Estúdio de streaming](#estudio-de-streaming), clique em `Acessar`.
5. Faça login no estúdio Bundle.
6. Clique em `Enter the studio` (Entrar no estúdio).
7. Na opção de menu **My destinations** (Meus destinos), clique em `Create destination` (Criar destino).
8. Na janela **Create destination** (Criar destino), preencha os campos conforme mostrado abaixo.
    * **Server (Servidor):** informe o valor do **servidor de entrada** da Conta B.
    * **Server Key (Chave do servidor):** informe o valor da **chave do servidor** fornecido pela Conta B.
    * **Platform (Plataforma):** Selecione `VTEX`.
9. Clique em `Add destination` (Adicionar destino).

A seguinte mensagem de confirmação será exibida: *"A new destination has been added"* (Um novo destino foi adicionado). Após alguns instantes, você verá a mensagem *"Ready to stream!"* (Pronto para transmitir!), indicando que as contas estão conectadas e que ambas podem acessar **My Studio** (Meu estúdio) > `Go live` (Transmitir ao vivo).

**Conta B:**

1. [Crie](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv) o evento.
2. Na página **Eventos**, clique na seta do evento para acessar a página de **Informações do evento**.
3. [Inicie](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq) o evento.
4. Na seção [Detalhes](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq#detalhes-do-evento), copie as informações do **servidor de entrada** e a **chave do servidor** e forneça-as à conta à qual você deseja se conectar, que neste caso seria a Conta A. 

### Conectar ao YouTube

Para transmitir o evento no YouTube, siga os passos abaixo:

1. Crie um evento ao vivo no YouTube. Caso precise, você pode consultar esta [documentação](https://support.google.com/youtube/answer/2474026?hl=en-GB&ref_topic=9257984&sjid=17602134671820533599-SA).
2. Copie a chave de transmissão do evento.
3. No Bundle, logo antes de clicar em `Go live` (Transmitir ao vivo), acesse a opção de menu **My destinations** (Meus destinos).
4. Clique em `Create destination` (Criar destino).
5. Na janela **Create destinations** (Criar destinos), preencha os campos **Server** (Servidor) e **Server Key** (Chave do servidor) com as chaves de evento do YouTube.
6. No campo **Plataform** (Plataforma), selecione YouTube.
7. Clique em `Add destination` (Adicionar destino).

Quando você iniciar a transmissão ao vivo, todo o conteúdo exibido no Bundle será automaticamente transmitido no YouTube.

> ❗ Esses destinos devem ser configurados antes de clicar em **Go live** (Transmitir ao vivo).

### Conectar ao Facebook

Para transmitir seu evento no Facebook, siga praticamente os mesmos passos usados para [conectar ao YouTube](#conectar-ao-youTube). A diferença é que, ao criar o destino, você deve fornecer [novas chaves de evento do Facebook](https://www.facebook.com/business/help/184100780068012) e selecionar `Facebook` como a plataforma ao criar o destino. 

Após adicionar o destino do Facebook e iniciar a transmissão ao vivo, todo o conteúdo exibido no Bundle será automaticamente transmitido no Facebook.

## Chat private (Chat privado)

Na opção de menu **Chat private** (Chat privado), há um canal de comunicação interna entre o administrador e os demais apresentadores do evento. O chat privado permite trocar mensagens em tempo real durante a transmissão e é útil para a coordenação e organização internas.

## Settings (Configurações)

No canto inferior esquerdo do menu, você pode clicar em **Settings** (Configurações) para ajustar as configurações de câmera e áudio, tanto antes quanto durante a transmissão. As configurações estão disponíveis para o administrador e para os participantes que estão como hosts do evento.
