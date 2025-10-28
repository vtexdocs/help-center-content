---
title: 'Integração com o Microsoft Teams'
id: 6Of4QOVgAa95Z2QjZZYeDR
status: PUBLISHED
createdAt: 2025-09-15T14:44:39.171Z
updatedAt: 2025-10-03T14:20:32.801Z
publishedAt: 2025-10-03T14:20:32.801Z
firstPublishedAt: 2025-10-03T14:20:32.801Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: creating-a-microsoft-teams-channel
legacySlug: integracao-com-o-microsoft-teams
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### **Integração com o Microsoft Teams**

Devido às recentes atualizações nos serviços da Microsoft Azure, o processo de criação e integração de Bots pelo Portal do Azure passou por diversas modificações, tornando necessário o desenvolvimento de uma nova documentação, atualizada, para a integração com o Microsoft Teams. O objetivo desta documentação é orientar os usuários na criação, implementação e integração do Chatbot no ambiente corporativo, Microsoft Azure e Teams, da Raízen.

As informações e orientações contidas nesta documentação estão sujeitas a alterações conforme futuras atualizações das plataformas e ferramentas da Microsoft.

#### **Etapas para integração do Chatbot no Teams:**

1. Comunicação com a Weni;
2. Registro do aplicativo no Portal da Azure;
3. Criação do Bot no Portal do Azure;
4. Habilitar o Canal de Atendimento do Teams na Weni;
5. Criação da Aplicação na AppStudio;
6. Publicar a Aplicação no Teams.

#### **1. Comunicação com a Weni**

No Microsoft Teams, a comunicação do Chatbot com a Weni ocorre pela URL de callback. Essa URL deve ser pega assim que a integração do canal do Teams na plataforma Weni ocorrer.

#### **2. Registro do aplicativo no Portal do Azure**

A criação do registro do aplicativo no Portal do Azure deve ser realizada pelo cliente, é recomendado que o usuário tenha *permissões administrativas* para criar o Bot. No Portal do Azure, pesquise por **Registros de aplicativo:**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_1.png)

Na seção de Registros de aplicativo, selecione **Novo Registro:**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_2.png)

Na aba de **Registrar um aplicativo**, insira o **Nome do Bot**, e escolha a opção:

• Contas em qualquer diretório organizacional (qualquer locatário do Microsoft Entra ID \- multilocatário) e contas pessoais da Microsoft (por exemplo, Skype, Xbox).

Não é necessário inserir informações no campo de **URI de direcionamento (opcional)**. Após esses passos, realize o registro do aplicativo em ""**Registrar**"":

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_3.png)

Após a criação do aplicativo, acesse o **Registro de aplicativo** e selecione o aplicativo criado. Em Visão geral, copie o **ID do aplicativo (cliente)**, ele será utilizado para a criação e registro do Bot da Azure.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_4.png)

Dentro do aplicativo, selecione **Certificados e segredos**:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_5.png)

Em **Certificados e segredos**, selecione **Novo segredo do cliente**, insira uma **Descrição** e defina o tempo de expiração (**Expira em**, recomendado: 24 meses), clique em **Adicionar:**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_6.png)

Após a criação do **Segredos do cliente**, é gerado um **Valor** e um **ID secreto**, essas informações serão utilizadas para habilitar o canal de atendimento na Weni.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_7.png)

OBS: É recomendando salvar o **Valor** e o **ID secreto**, essas informações são sigilosas e não é possível visualizar seus valores após atualização da página.

#### **3. Criação do Bot no Portal do Azure**

A criação do Bot no Portal do Azure deve ser realizada pelo cliente, é recomendado que o usuário tenha permissões administrativas para criar o Bot.

No campo de pesquisa da página inicial, pesquise por **Azure bot.**

Na seção **Criar um Bot do Azure**, insira um **Identificador do Bot**, selecione a **Assinatura (Avaliação Gratuita)** ou outra de sua opção, também será necessário criar um **Grupo de recursos.** No campo **Novo local do grupo de recursos**, selecione a região **Sul do Brasil**. Altere o **Tipo de preço**, para **Free**, conforme imagem:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_8.png)

Na etapa da **Microsoft App ID**, selecione **Usar registro de aplicativo existente**:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_9.png)

Em **ID do aplicativo**, insira o **ID do aplicativo (cliente)**.

Após inserir a **ID do aplicativo**, clique em **Examinar \+ criar**, após a Azure examinar as credenciais da App ID, clique em **Criar**, conforme imagem:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_10.png)

Com a implementação do Bot concluída, podemos acessar os recursos (**Ir para o recurso**) e alterar alguns parâmetros importantes do Bot, como: Nome, ícone e descrição.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_11.png)

Dentro do Bot, selecione **Perfil de Bot**, escolha um ícone, e o **Nome de exibição** do Bot para os usuários, clique em **Aplicar**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_12.png)

Em **Configuração**, insira a URL de call-back fornecida pela equipe de Onboarding no **Ponto de extremidade de mensagens**, e clique em **Aplicar**, conforme imagem de exemplo:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_13.png)

Em **Canais**, adicione o canal do **Microsoft Teams**, depois clique em Salvar:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_14.png)

Um pop-up sobre os **Termos do Serviço** da Microsoft deve aparecer, com os **Termos de Publicação dos Canais da Microsoft** e **Políticas de Privacidade da Microsoft,** contendo informações de interesse para a equipe de Segurança da Informação.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_15.png)

#### **4. Criação da Aplicação na App**

No momento, o usuário apenas consegue interagir com o Chatbot através do **Link para divulgação do Bot**, para que o Chatbot fique disponível para todos os usuários no Teams é Interno necessário a criação do Aplicativo, através do **Portal de desenvolvimento ou Developer Tools** em inglês.

Temos dois passos: **Portal de Desenvolvimento no Microsoft Teams e Microsoft Teams Admin Center**:

• Portal de Desenvolvimento \= https://teams.microsoft.com ou no aplicativo do Teams

• Microsoft Teams Admin Center \= https://admin.teams.microsoft.com/dashboard

##### **4.1 Portal do Desenvolvimento**

Para criar a app utilizando o **Portal do Desenvolvimento**, é necessário seguir os seguintes passos:

1º \- Acesse o Portal do Desenvolvedor, digitando (Portal de desenvolvimento) no campo pesquisar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_16.png)

2º Clique em Aplicativos.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_17.png)

3º Clique em \+NOVO APLICATIVO

4º Abrirá um pop-up para Adiconar o nome do APP.

Esse nome definirá o nome do Chatbot/assistente virtual, após insierir, clique em adicionar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_18.png)

###### **4.1.1 Informação Básica**

Após adicionar o nome do Bot, abrirá uma sessão para configuração denominada: Informação Básica.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_19.png)

Preencha o campo **Breve descrição**. Você pode usar o exemplo a seguir: (ex: AssistenteVirtual)

• Preencha o campo **Descrição longa**. Você pode usar o exemplo a seguir: (ex: AssistenteVirtual)

• Preencha o campo **Nome do desenvolvedor ou empresa**. Você pode usar o exemplo a seguir ou se preferir usar o nome da sua empresa: (Raízen)

• Preencha o campo **Site**. Você pode usar o exemplo a seguir ou se preferir usar o site da sua empresa: (https://www.raizen.com.br/)

• Preencha o campo **Política de privacidade**. Você pode usar o exemplo a seguir ou se preferir, usar a política da sua empresa: (**ex**: https://raizen.com/sobre-araizen/politicas-e-procedimentos)

• Preencha o campo **Termos de uso**. Você pode usar o exemplo a seguir ou se preferir, usar o Termo de uso da sua empresa: (https://raizen.com/sobre-a-raizen/politicas-eprocedimentos)

• Preencha o campo **ID do Aplicativo (cliente)**. Esse campo ID do Aplicativo, deve ser preenchido com o **ID do Aplicativo criado na AZURE**. Com esse ID, o aplicativo do Teams integra com o aplicativo do Azue. A imagem a seguir representa a inserção dessa informação.

A imagem a seguir representa a inserção dessa informação.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_20.png)

Após o preenchimento das informações básicas, clique em **salvar**. Em seguida, deve-se configurar algumas informações localizadas abaixo do nome do BOT. Iniciando na aba **Configurar**, onde temos os seguintes pontos.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_21.png)

###### **4.1.2 Marca**

Para inserir a Imagem da persona do Bot, clique em Marca, onde abrirá um pop-up para fazer upload das imagens do Bot, o qual tem que obedecer as especificações de tamanho.

###### **4.1.3 Recursos do Aplicativo**

Após inserir as imagens, clique em **Recursos do aplicativo** e em seguida **Bot**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_22.png)

Em seguida, será aberta uma tela para configuração de alguns parâmetros do Bot.

No campo (**Identificar seu bot**), clique em **Insira um ID de bot** e em seguinda preencha com o ID do Aplicativo criado no passo **2 \- Registro do aplicativo no Portal do Azure**. Os demais campos devem ser selecionados seguindo os exemplos do print da imagem abaixo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_23.png)

Ao concluir as configurações, clique em **Salvar**.

#### **5. Publicar a Aplicação no Teams**

Clique no botão publicar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_24.png)

Ao clicarmos em publicar, abrirá um pop-up \- (**Publicar seu aplicativo**) Clique na opção (**Publicar para sua organização**)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_25.png)

Após clicar, abrirá uma janela semelhante à da figura abaixo. Clique no botão **Publicar seu aplicativo.**

Logo em seguida, aparecerá uma mensagem notificando que a **publicação foi enviada** para aprovação.

**O App será enviada para aprovação**, **caso seja aprovado**, estará disponível para os usuários Teams da empresa.

#### **6. Realizar a aprovação da publicação do App no Teams**

Para aprovar a App, acesse: https://admin.teams.microsoft.com/dashboard, em seguida, clique em Teams apps.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_26.png)

Em seguida clique em Manage apps. Após isso, deve-se clicar em Search by name.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_27.png)

Inserir o nome do Bot que foi criado, conforme exemplo abaixo para a realização do filtro. Em seguida, Clique no nome do BOT.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_28.png)

A tela seguinte será para publicar a App. Clique em **Publish**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_29.png)

Um pop-up de confirmação aparecerá na tela, clique em **Publish** novamente.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_30.png)

Após o procedimento, a informação sobre **pendentes para aprovação** fica zerada.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_31.png)

Agora o App está disponível para todos os usuários Teams do ambiente do cliente. Para acessar o aplicativo e começar a conversar com o Chatbot, procure o Catálogo de Aplicativos do Microsoft Teams na barra lateral.

Selecione **Feito para sua organização** e clique em **Adicionar**:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/integracao-com-o-microsoft-teams_32.png)
