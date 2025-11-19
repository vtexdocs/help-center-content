---
title: '(Opcional) Usar studios externos'
id: Dw0QdKI0aGjmyD5Z6z5JC
status: PUBLISHED
createdAt: 2025-07-23T18:10:11.675Z
updatedAt: 2025-09-15T21:42:49.757Z
publishedAt: 2025-11-19T21:42:49.757Z
firstPublishedAt: 2025-07-28T15:08:28.675Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: optional-using-external-studios
locale: pt
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeiros-passos
order: 9
---

> ⚠️ Este artigo se aplica apenas a contas que transmitem eventos de estúdios que não sejam o Bundle.

Além do Bundle, eventos de **Live Shopping** podem ser transmitidos por estúdios externos com as mesmas funcionalidades. Veja alguns exemplos:

- StreamYard
- OBS
- Streamlabs
- vMix

>❗ Ao transmitir de um estúdio externo, não tente duplicar a transmissão do evento pelo Bundle ou outro estúdio. O **Live Shopping** permite apenas uma transmissão por estúdio, e a plataforma reconhecerá somente o primeiro estúdio que iniciar o evento.

## Método de transmissão para estúdios externos

1. No Admin VTEX, acesse **Aplicativos > Live Shopping > Eventos**, ou digite **Eventos** na barra de busca no topo da página.
2. Clique no ícone de seta do [evento que você criou](https://help.vtex.com/pt/docs/tracks/criar-evento) para acessar a página de configuração do evento.
3. [Inicie o evento](https://help.vtex.com/pt/docs/tracks/iniciar-evento) clicando no botão de ativação <i class="fa-solid fa-toggle-on"></i> `Iniciar` no canto superior direito.
4. Selecione a aba `Transmissão`.
5. Na página **Stream method** (Método de transmissão), em **Opção 2 - Push stream** (Transmissão push), copie a URL do servidor e os valores de Chave do servidor.
6. Vá até as configurações de transmissão do estúdio externo e cole os valores conforme mostrado abaixo:

  * **Servidor:** informe a `URL do servidor` que você copiou.
  * **Chave do servidor:** informe a `Chave do servidor` que você copiou.

7. (Opcional) Normalmente, clique em um botão de confirmação para salvar as configurações.

Para configurar soluções de externos, siga os passos abaixo:

1. No Admin VTEX, [crie](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv) o evento.
2. Na página **Eventos**, clique na seta do evento para acessar a página **Informações do evento**.
3. Clique em [Iniciar](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq) evento.
4. Em [Detalhes](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq#detalhes-do-evento), copie o **servidor de entrada** e as **informações da chave do servidor**.
5. Nas configurações de transmissão do estúdio externo, preencha os campos conforme indicado abaixo:
    - **Servidor:** informe o valor do servidor de entrada.
    - **Chave do servidor:** informe o valor da chave do servidor.

> ℹ️ Antes de clicar em **Go Live** (Transmitir ao vivo), recomendamos usar uma imagem como placeholder antes de iniciar o evento para validar a transmissão. Isso permite que você faça ajustes finais e evite que uma tela preta seja exibida ao público.

## Configurar uma transmissão de qualidade

Para realizar uma transmissão de alta qualidade, mesmo em dispositivos com sinal de internet limitado, você deve configurar os campos abaixo com os seguintes valores:

- **Output > IngestVideoBitrate:** aproximadamente 2.400.528 bits / 2400.528 kbps / 2.4 Mb/s
- **Output > IngestAudioBitrate:** aproximadamente 150.000 bits / 150 kbps
- **Video > IngestFramerate:** aproximadamente 30 fps
- **Output > KeyframeInterval:** aproximadamente 2 segundos

## Transmitir o evento por um estúdio externo

Depois de [adicionar o componente do Live Shopping](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR) e usar a pré-visualização para garantir que tudo está funcionando corretamente, você pode começar a transmitir o evento. Como as etapas variam de acordo com cada estúdio, recomendamos consultar a documentação oficial do estúdio que estiver usando.

> ❗ Ao usar estúdios externos, não tente duplicar a transmissão via Bundle. O Live Shopping permite apenas uma transmissão por estúdio, e a plataforma reconhecerá somente o primeiro estúdio que iniciar o evento.

## Após a transmissão ao vivo por um estúdio externo

Quando a transmissão terminar e o [status](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#status-do-evento) do evento for `Finalizado`, você deve ocultar o componente **Live Shopping** ou remover o script, dependendo da sua solução de frontend. O público continuará vendo a tela preta no seu site ou landing page até que você preencha esta etapa.

Para o passo a passo completo, veja [Como ocultar ou remover componente do Live Shopping](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/7e3bP6LjFgxXC210jSpl59).
