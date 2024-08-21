---
title: 'Recupere checkouts abandonados com WhatsApp AI Campaigns'
id: 20i0zLQHt72LKzVEmk1CRZ
status: PUBLISHED
createdAt: 2024-06-25T11:27:41.160Z
updatedAt: 2024-06-25T16:27:45.935Z
publishedAt: 2024-06-25T16:27:45.935Z
firstPublishedAt: 2024-06-25T15:29:15.011Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slug: recupere-checkouts-abandonados-com-whatsapp-ai-campaigns
locale: pt
legacySlug: recupere-checkouts-abandonados-com-whatsapp-ai-campaigns
subcategory: 4SC2gPmUH3cHD5HjGfQ5Vg
---

O WhatsApp AI Campaigns, é uma funcionalidade desenvolvida pela VTEX,  para recuperar checkouts abandonados. 

Quando um usuário abandona a página de pagamento de compras, a plataforma identifica essa ação. Se o usuário não retornar para concluir a compra no período de 1 hora, a funcionalidade envia uma mensagem de lembrete ao usuário por meio do WhatsApp.

Os principais benefícios dessa funcionalidade são:

- **Melhoria na experiência do cliente:** É possível personalizar  mensagens para aumentar a relevância e fortalecer a relação com a marca.

- **Aumento nas taxas de conversão e vendas:** incentiva que os clientes retornem à página de pagamento para finalizar sua compra, aumentando desta forma as vendas e taxas de conversão para lojistas.

<div class = "alert alert-info">
O WhatsApp AI Campaigns está disponível  apenas para lojas que utilizam <a href="https://help.vtex.com/tracks/store-development--3fHF3GIjK8UugnQKIakpl9/5DTcawNjc5MovtD7HNqURl#store-framework">Store Framework</a> que não tenham customizações no Checkout.
</div>

## Ativando WhatsApp AI Campaigns

Para ativar a funcionalidade WhatsApp AI Campaigns você deve [instalar o aplicativo Connectly](#instalando-o-app-conectly) e depois [configurar um número de whatsapp no app](#configurando-novo-numero-de-whatsapp).

### Instalando o App Connectly

Para instalar o App Connectly, siga os passos abaixo:

1. Acesse a [App Store](https://apps.vtex.com/) da VTEX.
2. Na barra de busca digite connectly.
3. Clique no app Connectly, em seguida clique em `Obter App`.
4. Clique em `Realizar Pedido`.
5. Clique em `Ir para a página de instalação`, e você será redirecionado para a seção **My Apps** do Admin VTEX.
6. Na página de instalação do App Connectlyvtex clique em `instalar`
7. Clique em `Salvar`.

### Configurando novo número de WhatsApp

Para configurar um novo número de WhatsApp você precisará ter acesso de administrador ao perfil do Facebook. Siga as instruções para configurar um novo número e concluir a vinculação:

<ol start="1">
  <li>No Admin VTEX, acesse <strong>Promoções &gt; Campanhas de WhatsApp &gt; Visão geral</strong>, ou digite <strong>Visão geral Campanhas de WhatsApp</strong> na barra de busca no topo da página.</li>
  <li>Clique em <code>Configurar Conta</code>.</li>
  <li>Selecione <strong>Sim, quero um número gratuito</strong>, e clique em <code>Próximo</code>.</li>
  <li>Copie o número de telefone fornecido, e clique em <code>Conectar</code> para vincular este número à sua conta do <a href="https://www.facebook.com/business/news/what-is-meta-for-business">Facebook empresarial</a>.</li>
  <li>Clique em <code>Continuar como Usuário</code>.</li>
  <li>Clique em <code>Começar</code>.</li>
  <li>Confirme se as informações de <strong>Portfólio Empresarial</strong>, <strong>Nome da Empresa</strong>, <strong>Site</strong> ou <strong>Perfil Comercial da Empresa</strong> e <strong>País</strong> estão corretas.</li>
  <li>Clique em <code>Avançar</code>.</li>
</ol>

<p>Criando uma conta do WhatsApp Business:</p>

<ol start="9">
  <li>Selecione <strong>Criar uma conta do WhatsApp Business</strong> e <strong>Criar um novo perfil do WhatsApp Business</strong>.</li>
  <li>Clique em <code>Avançar</code>.</li>
  <li>Preencha os campos abaixo:
    <ul>
      <li><strong>Nome da conta do WhatsApp Business (interno)</strong>, exemplo: Nome da Loja VTEX.</li>
      <li><strong>Nome de exibição do WhatsApp Business (visível aos clientes)</strong>, exemplo: Nome da loja.</li>
      <li><strong>Categoria.</strong></li>
      <li>Clique em <code>Avançar</code>.</li>
    </ul>
  </li>
  <li>Cole o número de telefone copiado na etapa anterior, e selecione a opção de <strong>SMS</strong>, clique em <code>Avançar</code>.</li>
</ol>

>⚠️ O número gerado pode ser americano, mas se a sua página do Facebook for verificada, seus clientes verão o nome da empresa. Caso não esteja verificada, recomendamos seguir o [processo de verificação com a Meta](https://www.facebook.com/business/help/2058515294227817?id=180505742745347).

<ol start="13">
  <li>Copie o código de verificação exibido no Admin VTEX.</li>
  <li>Cole o código de verificação no campo dentro do popup do Facebook, e clique em <code>Avançar</code>.</li>
  <li>Clique em <code>Continuar</code>.</li>
  <li>Clique em <code>Concluir</code>.</li>
  <li>Escolha um logo de 400x400 px para o seu novo número de WhatsApp. A imagem não precisa estar em alta qualidade.</li>
</ol>

<p>Aceitando os termos e condições:</p>

<ol start="18">
  <li>Revise as páginas dos Termos e Condições.</li>
  <li>Clique em <code>Concordo e Aceito</code>.</li>
  <li>Clique em <code>Finalizar</code>.</li>
</ol>

>⚠️ Após ativada uma campanha de recuperação de checkout abandonado, pode levar até 48 horas para as métricas de análise começarem a ser exibidas.

<div class = "alert alert-info">
Saiba mais sobre o <a href="https://help.vtex.com/pt/tutorial/gerenciamento-e-detalhes-do-whatsapp-ai-campaigns--q9JqDErMqGV4zvsYqkD4s">Gerenciamento e detalhes do WhatsApp AI Campaigns</a>.
</div>

