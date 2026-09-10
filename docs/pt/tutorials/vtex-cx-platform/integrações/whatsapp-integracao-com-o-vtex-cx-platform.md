---
title: 'WhatsApp: Integração com o VTEX CX Platform'
createdAt: 2025-09-15T15:02:52.737Z
updatedAt: 2026-09-09T19:40:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: whatsapp-vtex-cx-platform-integration
locale: pt
---

Com a integração do WhatsApp no VTEX CX Platform, você conecta um número comercial do WhatsApp ao projeto e cria fluxos inteligentes para atender os clientes.

## Integrar o WhatsApp ao projeto

Para iniciar a integração do WhatsApp, siga os passos a seguir:

1. No projeto desejado, acesse **Configurações > Canais**.
2. Em **Canais de comunicação**, localize o card **WhatsApp** ou digite **WhatsApp** no campo de busca.
4. Selecione o card **WhatsApp**.
5. Clique em `+ Adicionar`.
6. No pop-up, clique em `Continuar`. A plataforma abre o fluxo de conexão com a Meta. Siga as etapas na tela para vincular a sua conta da Meta com o VTEX CX Platform.

## Criar o canal

Com a conta vinculada à Meta e o número verificado, integre o canal na plataforma:

1. Clique em `Criar canal`.
2. Selecione o número que será vinculado à integração do WhatsApp no VTEX CX Platform.

Esse canal fica disponível em **Configurações > Canais > Meus aplicativos > WhatsApp [número de WhatsApp]**.

## Configurar o canal

Ao clicar no card do número, você pode gerenciar o conteúdo do canal desse número de telefone de WhatsApp, como trocar foto de perfil, ver templates, mudar descrição, conectar com webhook e verificar sua conta.

### Geral

Na aba **Geral**, você consulta os identificadores do número e da conta do WhatsApp Business e acessa os templates do canal. Os campos exibidos nesta aba são somente para leitura. Para modificar, você precisa acessar sua conta da Meta Business.

Na seção **Gerenciar conteúdo**, clique em `Ver meus templates` para abrir os templates de mensagem associados ao número.

A seção **Canal do WhatsApp** exibe os dados da linha conectada. Os campos visíveis são:

| Campo | Descrição |
| --- | --- |
| **Número de telefone** | Número comercial conectado ao canal. |
| **Nome de exibição do WhatsApp** | Nome que o WhatsApp mostra ao usuário. |
| **Idioma padrão para templates** | Idioma padrão dos templates. Se não estiver definido, a interface exibe um traço (`-`). |
| **Certificado** | Certificado associado ao número. Quando não se aplica, a interface exibe `N/A`. |
| **Status de consentimento** | Status de consentimento do número. Se não estiver definido, a interface exibe um traço (`-`). |

A seção **Conta do WhatsApp Business** exibe os identificadores da cona WhatsApp Business vinculada ao canal. Os campos visíveis são:

| Campo | Descrição |
| --- | --- |
| **Nome WABA** | Nome da conta do WhatsApp Business. |
| **ID do WABA** | Identificador do WhatsApp Business na Meta. |
| **Mensagens em nome de** | Identidade em nome de quem as mensagens são enviadas. Se não estiver definido, a interface exibe um traço (`-`). |
| **ID do fuso horário** | Fuso horário da WhatsApp Business, no formato IANA. Exemplo: `America/Sao_Paulo`. |
| **Namespace** | Namespace dos templates da WhatsApp Business. |

### Perfil

Na aba **Perfil**, você define as informações públicas do número, visíveis para o cliente no WhatsApp. Você pode editar os seguintes campos:

- **Imagem de perfil:** imagem associada ao perfil do WhatsApp.
- **Descrição:** descrição da organização ou objetivo do chatbot.
- **Setor da organização:** setor da organização.
- **Websites:** endereços do site da loja. Você pode incluir até dois websites.
- **Email corporativo:** email para contato com os usuários.
- **Endereço:** endereço comercial da sua loja.

Se você modificou algum dos campos e deseja salvar, clique em `Salvar alterações`. Para sair sem gravar, clique em `Configurar depois`.

### Webhook

Na aba **Webhook**, você define o endpoint que recebe as notificações do canal. Use essa aba quando um sistema externo precisa tratar os eventos de mensagem fora do VTEX CX Platform.

Para configurar o webhook, preencha os campos a seguir:

| Campo | Descrição |
| --- | --- |
| **Método** | Método HTTP da requisição. As opções são: `GET`, `POST`, `PUT`, `PATCH` e `DELETE`. |
| **URL do webhook** | URL do serviço que vai receber as notificações. |
| **Chave** | Chave da requisição HTTP. |
| **Valor** | Valor referente à chave. |

Se você modificou algum dos campos e deseja salvar, clique em `Salvar alterações`. Para sair sem gravar, clique em `Configurar depois`.

### Conversas

A aba **Conversas** mostra o volume de conversas do número, agrupado pelas categorias de cobrança do WhatsApp, e permite solicitar um relatório detalhado por email.

Para consultar o volume de conversas, siga os passos abaixo:

1. Em **Filtrar por**, selecione o intervalo de datas no formato `DD/MM/YYYY ~ DD/MM/YYYY`.
2. Após filtrar por intervalo de tempo, a tabela **Número de conversas** mostra a quantidade de conversas de cada categoria.
3. Caso queira receber um relatório detalhado das conversas do intervalo de tempo selecionado, clique em `Solicitar relatório`.
  - Você pode receber detalhamento de mensagens de até 6 meses atrás.

### Verificação da conta

Na aba **Verificação da conta**, você pode fazer a verificação junto à Meta. A verificação desbloqueia limites maiores de envio de mensagens e intervalos menores entre mensagens.

> ⚠️ Você só pode fazer a verificação da conta quando atingir 50 conversas ou 50 templates enviados.

Para verificar sua conta, siga o passo a passo a seguir:

1. Selecione as caixas de seleção a seguir:
  - Essa empresa é uma entidade legal.
  - O administrador da conta é um representante da empresa.
  - A empresa segue a Política do WhatsApp Business.
2. Clique em <i class="fas fa-plus" aria-hidden="true"></i>`Enviar arquivos` para fazer o upload de documentos da sua empresa.
3. Ao final, clique em `Enviar`.

A seguir, destacamos alguns documentos sugeridos na hora de verificar sua conta junto à Meta:

| País | Documentos |
| --- | --- |
| Brasil | - Documento ou licença de registro da empresa (por exemplo, CNPJ) <br> - Documento de associação ou contrato social (por exemplo, MEI). <br> - Comprovante de pagamento de impostos, comprovante bancário ou conta de energia. |
