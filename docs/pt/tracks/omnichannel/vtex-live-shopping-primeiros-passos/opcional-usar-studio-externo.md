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

* StreamYard
* OBS
* Streamlabs
* vMix

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

## Configurações da transmissão - Qualidade da transmissão

Para uma transmissão de alta qualidade, inclusive em dispositivos com conectividade limitada, é necessário configurar a qualidade da transmissão no estúdio. Os valores recomendados estão disponíveis na página **Método de transmissão**, na seção **Configurações da transmissão**, conforme mostrado na imagem abaixo:

![live_shopping_stream_settings_quality_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/omnichannel/vtex-live-shopping-getting-started/live_shopping_stream_settings_quality_EN.png)

Para configurar a qualidade da transmissão do estúdio, no seu estúdio externo, defina os seguintes campos para estes valores:

* **Output = IngestVideoBitrate:** 2.4 Mb/s
* **Output = IngestAudioBitrate:** 150 kbps
* **Video = IngestFramerate:** 30 fps
* **Output = KeyframeInterval:** 2 seconds

## Antes da transmissão ao vivo

Antes de iniciar o evento ao vivo, certifique-se de que tudo está funcionando corretamente:

1. Verifique a pré-visualização para confirmar se o [componente Live Shopping foi adicionado](https://help.vtex.com/pt/docs/tracks/adicionar-componente-do-live-shopping) corretamente.
2. Verifique as [configurações do evento](https://help.vtex.com/pt/docs/tracks/configurar-evento).
3. Verifique a configuração do seu [método de transmissão](#metodo-de-transmissao-para-estudios-externos), incluindo as [configurações da qualidade da transmissão](#configuracoes-da-transmissao-qualidade-da-transmissao).

Depois disso, você pode começar a transmitir o evento. Como as etapas variam de acordo com cada estúdio, recomendamos consultar a documentação oficial do estúdio que estiver usando.

## Após a transmissão ao vivo por um estúdio externo

Quando a transmissão terminar e o [status](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#status-do-evento) do evento for `Finalizado`, você deve ocultar o componente **Live Shopping** ou remover o script, dependendo da sua solução de frontend. O público continuará vendo a tela preta no seu site ou landing page até que você preencha esta etapa.

Para o passo a passo completo, veja [Como ocultar ou remover componente do Live Shopping](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/7e3bP6LjFgxXC210jSpl59).
