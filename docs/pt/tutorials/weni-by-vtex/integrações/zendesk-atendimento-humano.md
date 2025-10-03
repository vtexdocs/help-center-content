---
title: 'Zendesk - Atendimento Humano'
id: 3FSQwdnzAX3jah8euPD1Ah
status: PUBLISHED
createdAt: 2025-09-15T15:13:03.117Z
updatedAt: 2025-10-03T14:20:32.519Z
publishedAt: 2025-10-03T14:20:32.519Z
firstPublishedAt: 2025-10-03T14:20:32.519Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: zendesk-human-support
legacySlug: zendesk-atendimento-humano
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### Passos para Integração

A integração entre a Plataforma Weni e o Zendesk oferece uma ferramenta poderosa para gerenciar o atendimento ao cliente de forma eficiente e automática. Após concluir a configuração e instalação, é essencial monitorar o funcionamento da integração para garantir que todos os tickets sejam gerenciados corretamente e que os gatilhos automáticos funcionem conforme o esperado.

1. Crie uma conta no Zendesk
Se você ainda não possui uma conta, crie uma no Zendesk. Para este exemplo, estamos usando uma conta de teste gratuita. (https://weni5623\.zendesk.com/)
Acesse: <https://www.zendesk.com/>

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_1.png)

1. Acesse o Projeto na Plataforma Weni
Dentro do seu projeto na plataforma Weni, vá até o módulo **Aplicações > Outros Apps**.
Clique no menu de três linhas (hambúrguer) e selecione **Adicionar Serviço de Tickets**, escolhendo **Zendesk**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_2.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_3.png)

1. Preencha o Subdomínio e Capture a URL da Solicitação

Você será solicitado a inserir seu subdomínio. Antes de clicar no botão **Conectar**, pressione **F12** para abrir o modo de desenvolvedor e acesse o módulo **Network** (Rede).

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_4.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_5.png)

- Preencha o Subdomínio, que é o valor antes de ""zendesk.com"" na URL. Exemplo: weni5623 a partir de https://weni5623\.zendesk.com/.
- Ao clicar em **Conectar**, duas novas linhas aparecerão no modo de desenvolvedor.
- Clique na segunda linha, onde a **URL da Solicitação** começará com seu subdomínio, por exemplo, https://weni5623\...
- Copie a URL completa e abra-a em outra aba do navegador.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_6.gif)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_7.png)

1. Autorize o Uso do Aplicativo
Autorize o uso do aplicativo em sua conta do Zendesk.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_8.png)

- Após a autorização, um guia passo a passo será exibido para você continuar.
- Salve o segredo que for mostrado, pois ele será necessário nas próximas etapas.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_9.png)

1. Instale o Aplicativo Weni no Zendesk
Acesse o [**Zendesk Marketplace**](https://www.zendesk.com/marketplace/apps/) e instale o aplicativo **Weni**.

Se você já possui o aplicativo da Weni instalado no Zendesk, não é necessário instalá-lo novamente. Pule para o próximo passo para **adicionar conta**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_10.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_11.png)

1. Configure a Integração no Zendesk
As configurações da sua conta agora estão no **Admin Center**. Acesse o **Admin Center**.
Em **Aplicativos e Integrações**, adicione o aplicativo **Weni** do **Marketplace** se ainda não o fez.
Após a integração, configure e salve as informações.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_12.png)

1. Clique em **Aplicativos de Canal >** Selecione o seu **Canal > Contas > Adicionar Conta**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_13.png)

Atribua um nome à sua integração/conta e adicione o **segredo** salvo na Etapa 5\.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_14.png)

1. Verifique a Conexão na Plataforma Weni
Se todos os passos foram seguidos corretamente, em **Aplicações > Outros Apps** na Plataforma Weni, o serviço com o Zendesk deverá aparecer como conectado.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_15.png)

1. Use o Card ""**Abrir um Ticket**"" no Fluxo
Agora você pode usar o card **Abrir um Ticket** no seu fluxo na Plataforma Weni.
Consulte: **Criando Campos Personalizados**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_16.png)

1. Configurar Gatilhos
Configure um gatilho para que, quando um ticket for fechado, um fluxo de conclusão seja iniciado para o usuário.
Além disso, crie gatilhos para impedir que os usuários em suporte iniciem outros fluxos indesejados.
Este é um teste para a abertura de tickets no Zendesk:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/zendesk-atendimento-humano_17.png)

#### Próximos Passos:

- Testar a Integração: Realize testes para garantir que a criação de tickets e as respostas automáticas estejam funcionando conforme planejado.
- Monitoramento Contínuo: Estabeleça um processo de revisão regular para gatilhos e fluxos, garantindo que estejam alinhados com as necessidades do negócio.
- Ajustes e Otimização: À medida que o uso do sistema evolui, considere ajustar os fluxos e gatilhos para otimizar o atendimento ao cliente e melhorar a experiência do usuário.
