---
title: 'Configurando PWA em sua loja Store Framework'
id: 1xWVQTONeROlSOXG8lSyKV
status: PUBLISHED
createdAt: 2024-06-18T14:58:53.804Z
updatedAt: 2024-06-20T12:15:54.742Z
publishedAt: 2024-06-20T12:15:54.742Z
firstPublishedAt: 2024-06-18T15:49:26.862Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: configuring-pwa-in-your-store-framework-store
legacySlug: configurando-pwa-em-sua-loja-store-framework
locale: pt
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

Lojas desenvolvidas com o VTEX IO Store Framework possuem nativamente um *Progressive Web App* (PWA), que é um tipo de aplicativo web que oferece uma experiência de usuário semelhante a de um aplicativo nativo, mas executada diretamente em um navegador da web.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Para lojas CMS Portal Legado, consulte o guia [Como transformar o site da minha loja em um PWA](https://help.vtex.com/pt/tutorial/how-to-turn-my-store-website-into-a-pwa--3i8VmYeToAUGKgo2kKK6I2).
</div>

Para configurar um PWA em sua loja, acesse Configurações da Loja > Storefront > Loja no Admin VTEX, e siga as etapas abaixo:

1. Clique na aba **PWA**.
2. Defina a **Cor do tema**, **Cor de fundo** e adicione o **Ícone de logotipo Android  (512x512, PNG)** e **Ícone de logotipo iOS (512x512, PNG)**. As cores devem ser especificadas em código hexadecimal (e.g., #F71963) e os ícones devem ter tamanho 512x512  px e extensão `.png`.

  ![pwa-settings-1-pt](//images.ctfassets.net/alneenqid6w5/2EscgymgyMjCL6nvKedrjk/9bea6f91cd42a70bffb185f1037f43eb/pwa-settings-1-pt.png)

3. Desça a página e vá para o campo **Outras configurações do PWA**. Clique na seta para mostrar as outras configurações.

  ![pwa-settings-2-pt](//images.ctfassets.net/alneenqid6w5/2UJAVrnwSn3NPNxxi42nk8/faa642b4f2c82f837d6c60a319e63dd0/pwa-settings-2-pt.png)

4. Em **Outras configurações de PWA**, preencha os campos conforme orientações abaixo:

    - **URL inicial**: URL da página inicial do PWA.
    - **Orientação da tela**: Formato como o conteúdo é exibido no PWA. Pode ser atribuído um dos seguintes valores: Todas, Natural, Horizontal, Horizontal (primária), Horizontal (secundária), Retrato, Vertical (primária), Vertical (secundária).

    | **Orientação da tela**   | **Descrição** |
    |--------------------------|---------------|
    | Todas                    | A página pode ser visualizada em qualquer orientação, com o conteúdo se ajustando automaticamente para se adaptar à orientação atual do dispositivo. |
    | Natural                  | Configuração padrão de fábrica do dispositivo. |
    | Horizontal               | O conteúdo é exibido apenas na orientação horizontal. É útil para aplicativos ou jogos que são otimizados para uma visualização mais ampla. |
    | Horizontal (primária)    | Orientação horizontal com a parte superior do dispositivo alinhada à esquerda. |
    | Horizontal (secundária)  | Orientação horizontal com a parte superior do dispositivo alinhada à direita. |
    | Retrato                  | O conteúdo é exibido apenas na orientação vertical. É a configuração padrão para a maioria dos aplicativos de telefonia móvel. |
    | Vertical (primária)      | Orientação retrato com o botão `home` ou a parte inferior do dispositivo apontando para baixo. |
    | Vertical (secundária)    | Orientação retrato invertida, com o botão `home` ou a parte inferior do dispositivo apontando para cima. É útil quando os dispositivos são usados de cabeça para baixo. |

    - **Visualização**: Modos de visualização do conteúdo do PWA. Pode ser atribuído um dos seguintes valores: Tela cheia, Aplicativo (adicionar à tela inicial), Minimalista (não suportado pelo Chrome), Navegador.

    | **Visualização** | **Descrição** |
    |------------------|---------------|
    | Tela cheia       | O PWA ocupa toda a tela do dispositivo, ocultando todos os elementos da interface do usuário do navegador, como a barra de endereços e outras notificações do sistema. É ideal para jogos ou aplicativos que necessitam de uma imersão completa, maximizando o espaço de tela disponível. |
    | Aplicativo (adicionar à tela principal) | O PWA se comporta como um app nativo, pois é executado em uma janela separada do navegador e não mostra elementos comuns do navegador como a barra de endereços. Quando adicionado à tela inicial do dispositivo, a presença do PWA é quase indistinguível de um app nativo. |
    | Minimalista (não suportado pelo Chrome) | O PWA mostra um mínimo de elementos de interface do usuário do navegador, como a barra de endereços e alguns controles adicionais. É um meio-termo entre o modo Aplicativo e o Navegador. |
  | Navegador        | O PWA é aberto como uma página comum de navegador, com todas as características usuais do navegador visíveis, como a barra de endereços, abas e outros controles de interface. Não altera a maneira padrão de interação do usuário com o conteúdo web e é menos imersivo em comparação com os demais modos de visualização. |

    - **Adicionar à tela inicial**: quando ativada, permite que o PWA seja instalado pelo usuário.
    - **Exibir prompt “Adicionar à tela inicial”**: define o momento em que a instalação do PWA será sugerida ao usuário. Pode ser atribuído um dos seguintes valores: Na primeira visita, Ao adicionar o primeiro item ao carrinho, ou Ao finalizar a primeira compra. Esta opção é aplicável apenas quando **Adicionar à Tela Inicial** está ativada.

   ![pwa-settings-3-pt](//images.ctfassets.net/alneenqid6w5/2wVkAwUIy6E33I6pUoXMVT/afb78e3e3a3ead92b334b459227ddb0a/pwa-settings-3-pt.png)

 5. Salve suas alterações clicando em `SALVAR`.

## Utilizando um Service Worker personalizado

Nosso service worker suporta os push nativos para instalar o app na primeira visita, no primeiro item adicionado ao carrinho ou na primeira compra. Você pode personalizar as notificações no PWA de sua loja usando um service worker próprio que funcionará junto ao nosso.

Para saber como criar um Service Worker próprio, confira a documentação [Como instalar um Service Worker](https://help.vtex.com/pt/tutorial/como-instalar-um-service-worker--2H057iW0mQGguKAciwAuMe).

Para aprender como aproveitar o Service Worker builder para agrupar vários services workers em sua loja, confira a documentação [Using several service workers in your store](https://developers.vtex.com/docs/guides/vtex-io-documentation-using-several-service-workers-in-your-store).
