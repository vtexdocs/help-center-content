---
title: 'Adicionando mídias ao cartão de Enviar Mensagem'
id: 6XfWIo7fpN4VJLzZTud2UP
status: PUBLISHED
createdAt: 2025-09-17T13:56:46.780Z
updatedAt: 2025-10-03T14:20:03.799Z
publishedAt: 2025-10-03T14:20:03.799Z
firstPublishedAt: 2025-10-03T14:20:03.799Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-media-to-the-message
legacySlug: adicionando-midias-ao-cartao-de-enviar-mensagem
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Você pode adicionar mídias à sua mensagem na nossa plataforma. Sejam **imagens, áudios ou vídeos**, existem duas maneiras diferentes de adicioná-los: **usando uma URL** ou **fazendo upload do arquivo** direto do seu computador.

### **Usando uma URL**
  1. Dentro do seu projeto, clique no **Módulo de Fluxos**;

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/adicionando-midias-ao-cartao-de-enviar-mensagem_1.png)

  2. **Escolha um fluxo** pré-existente ou crie um novo;
  3. Adicione uma nova carta de ação, clique em **Arquivos** , escolha entre as opções **URL da imagem** , **URL do áudio,** **URL do v ídeo, PDF documento URL** ou **insira a URL** da mídia escolhida;

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/adicionando-midias-ao-cartao-de-enviar-mensagem_2.png)

### **Usando um arquivo do seu computador**
Adicione uma nova carta de ação, clique em **Arquivos** , escolha a opção **Enviar Arquivo** e **selecione o arquivo direto do seu computador**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/adicionando-midias-ao-cartao-de-enviar-mensagem_3.png)

#### **Limitações**

Existe uma limitação no tamanho do arquivo que pode ser enviado, pois toda requisição leva um certo tempo e pode acontecer um _timeout_ tentando executar essa requisição. Sendo assim, **o permitido é até 32MB**, mas existem algumas ressalvas:

  * São 32mb de upload máximo OU 30 segundos tentando realizar o upload. Logo, se o arquivo possuir menos que 32mb, mas a internet for lenta o suficiente para não anexar em 30 segundos, não vai anexar pois excedeu o tempo de requisição.
  * Se o canal de comunicação for o **WhatsApp** , ele tem suas próprias regras, como mostra a [documentação](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#supported-media-types). Podemos ver que vídeos e áudios possuem tamanho **máximo de 16mb** (se upar um vídeo de 20mb na plataforma Weni, o vídeo será salvo na plataforma, mas na hora de enviar, o WhatsApp não executa o envio) e documentos têm o limite máximo de 100mb cada (porém a Weni plataforma suporta até 32mb).
