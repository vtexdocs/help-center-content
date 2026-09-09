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

Você pode usar essa integração sem o Gerenciador de Negócios verificado. A verificação aumenta os limites de envio e libera recursos extras, mas não é obrigatória para começar.

## Limites da integração

Sem o Gerenciador de Negócios verificado, você pode:

- Iniciar até **50 conversas** pelo negócio com números diferentes no intervalo de 24 horas.
- Ter até **dois números** na WhatsApp Business Account (WABA).

As primeiras **1.000 conversas** de cada mês são gratuitas por WABA. Esse limite vale para a conta inteira, mesmo que haja mais de um número anexado, e inclui conversas iniciadas pela empresa ou pelo usuário. O limite é restaurado todo mês, de acordo com o fuso horário da WABA.
Se o gerenciador não estiver verificado, as conversas iniciadas pela empresa continuam sujeitas ao limite de 50 conversas com números distintos a cada 24 horas.

No plano gratuito do VTEX CX Platform, você pode se comunicar com **200 contatos ativos** (contatos únicos no intervalo de 1 mês) sem custo.
Depois de verificar o Gerenciador de Negócios, você pode:

- Aumentar o nível de conversas iniciadas pelo negócio para 1.000, 10.000, 100.000 ou ilimitado.
- Solicitar o OBA (selo de conta oficial).
- Ter mais de dois números por WABA.
A integração também permite personalizar o canal com fotos, vídeos, envio de arquivos, descrições e mensagens de template.
Para detalhes sobre os níveis de envio, veja [WhatsApp Business API: Limitação de disparos em massa](/pt/docs/tutorials/whatsapp-bussiness-api-limitacao-de-disparos-em-massa-do-whatsapp).

## Antes de começar

Antes de adicionar o número pelo método de Integração Expressa, confira se:

1. Você é administrador do **Gerenciador de Negócios** da empresa na Meta. O gerenciador não precisa estar verificado para iniciar a integração.
2. O número **não** está instalado em outro aplicativo nem vinculado a uma conta do WhatsApp (Business ou pessoal). Se estiver, exclua o número do aplicativo antes de começar. Veja [como excluir o número](https://faq.whatsapp.com/605464643328528/?cms_platform=android&locale=pt_BR).
3. O número está habilitado pela operadora para receber ligação ou SMS, com o chip inserido em um telefone pronto para o código de verificação.

## Integrar o WhatsApp ao projeto

Para iniciar a integração do WhatsApp, siga os passos a seguir:

1. No projeto desejado, acesse **Configurações > Canais**.
2. Clique na aba **Descoberta**.
3. Na seção **Canais de comunicação**, localize o card **WhatsApp**. Você também pode digitar **WhatsApp** no campo **Buscar**.
4. Clique no card **WhatsApp**.
5. Clique em `+ Adicionar`.
6. Na janela **Conectar**, clique em `Continuar`.
A plataforma abre o fluxo de conexão com a Meta. Siga as etapas na tela para vincular o Gerenciador de Negócios, criar ou selecionar a WABA e verificar o número.

## Conectar a conta da Meta

1. Informe as credenciais da conta do Facebook. Você precisa ser administrador do Gerenciador de Negócios da empresa. Se já estiver logado na conta correta, clique em `Continuar`.
2. Clique em `Começar`.
3. Aceite as permissões. Elas são necessárias para o VTEX CX Platform acessar a conta do WhatsApp Business. Nenhum dado é compartilhado.
4. Crie a conta empresarial que será vinculada à Meta ou selecione uma empresa já cadastrada. Clique em `Continuar`.
5. Configure o nome e o fuso horário da WABA. Se você já tiver uma WABA, ela aparece na lista e pode ser selecionada.
6. Clique em `Continuar para o passo 2`.
7. Preencha o nome de exibição do perfil no WhatsApp Business. Se o nome for diferente da razão social, ele precisa aparecer no site da organização. O nome de exibição deve seguir as [regras da Meta](https://www.facebook.com/business/help/338047025165344#display-name-guidelines).
8. Selecione a categoria do negócio. A descrição é opcional.
9. Clique em `Continuar para a etapa 3`.
10. Insira o número do WhatsApp Business e escolha se o código de verificação chega por SMS ou ligação.
11. Aguarde o código de 6 dígitos e preencha o campo na tela.
12. Clique em `Verificar` e, em seguida, em `OK` para confirmar que o número está pronto.
Se a empresa **já tiver verificação de negócios** na Meta, a próxima etapa só pode ser feita depois do e-mail da Meta confirmando o nome de exibição. Quando o e-mail chegar, volte à plataforma para continuar. Se a empresa ainda não estiver verificada, continue imediatamente.

## Criar o canal

Com a conta vinculada à Meta e o número verificado, integre o canal na plataforma:

1. Clique em `Criar canal`.
2. Selecione o número que será vinculado à integração do WhatsApp no VTEX CX Platform.
Se aparecer alguma inconsistência, inicie o processo novamente. As informações já preenchidas são reaproveitadas. Se o problema continuar, entre em contato com o suporte: <suporte@weni.ai>.

O canal fica disponível em **Configurações > Canais > Meus aplicativos**. Ao clicar no card do número, você personaliza foto de perfil, descrição, e-mail e site da empresa.

Para aumentar os limites de envio, inicie a verificação do negócio na Meta. Siga o tutorial [WhatsApp Business API: Como verificar o meu negócio](/pt/docs/tutorials/whatsapp-bussiness-api-como-verificar-o-meu-negocio)
