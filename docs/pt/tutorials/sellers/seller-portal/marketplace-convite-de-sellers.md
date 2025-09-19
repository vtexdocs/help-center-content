---
title: 'Marketplace: Convite de Sellers'
id: 6rb2FkcslmDueJ689Ulb9A
status: PUBLISHED
createdAt: 2021-08-12T12:36:37.703Z
updatedAt: 2025-09-02T16:57:13.864Z
publishedAt: 2025-09-02T16:57:13.864Z
firstPublishedAt: 2021-08-12T15:49:50.572Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: marketplace-invited-sellers
legacySlug: marketplace-convite-de-sellers-beta
locale: pt
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

A página de **Sellers Convidados** do módulo Marketplace é onde operadores de marketplace convidam sellers para se integrarem ao seu marketplace. Para acessar a funcionalidade, em seu Admin, vá para **Marketplace > Convite de Sellers.** A página permite convidar:

- **Lojas já hospedadas na VTEX:** conectam sua conta VTEX como novo seller do marketplace.
- **Lojas que ainda não possuem contas na VTEX:** o convite inclui o fluxo para criação de conta no Seller Portal da VTEX.

Além de enviar convites, a página também conta com a lista de sellers, para que o marketplace tenha visibilidade sobre esse processo. A lista de sellers permite buscar sellers por nome ou email e filtrar resultados por status. Sellers listados podem ter dois possíveis status:

- **Convidados:** sellers que já receberam o convite para vender no marketplace, mas que ainda não criaram sua conta VTEX, ou conectaram sua conta já existente.

- **Aceitos:** sellers que já aceitaram o convite e criaram, ou conectaram sua conta.

Para que novos sellers se integrem ao seu marketplace, algumas ações precisam ser feitas no seu ambiente VTEX: [Convidar](#convidar-seller) e [Conectar](#conectar-seller)

![sellers convidados](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/sellers/seller-portal/marketplace-convite-de-sellers_1.JPG)

## Convidar seller

O convite é feito por meio de um link enviado por email ao seller, que contém todo o processo de integração ao marketplace. Para convidar um seller novo:

1. No Admin VTEX clique em **Marketplace > Convite de sellers.** 
3. Clique em `Convidar Seller`.    
4. Preencha os **Dados Gerais** do Seller:
    - **Nome do Seller:** nome do representante comercial do seller, que vai orquestrar a conexão ao lado do seller. Essa pessoa precisa [ter perfil de acesso para o OMS](/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access).
    - **Email:** email do representante comercial do seller, que receberá o convite para criação de conta, ou conexão de conta existente.      
5. Selecione o tipo de seller entre `Comum` e `Whitelabel`.  
6. Marque a flag **Compartilhar catálogo do marketplace**, se quiser que o seller importe seus produtos e árvore de categorias.   
7. Se você marcou a flag do passo anterior, determine como vai compartilhar seu catálogo com o seller:
    - **Política comercial:** definindo uma [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) associada aos produtos e árvore de categorias que deseja compartilhar com o seller.
    - **Coleção:** definindo uma [coleção](/pt/tutorial/tipos-de-colecao--5tKnhh8tMGIrVL7Fqirq7n) com os produtos e árvore de categorias a serem compartilhados com o seller.
8. Clique em `Enviar Convite`.   

O seller receberá por email o convite para vender em seu marketplace. 

> ℹ️ O link enviado por email para o seller é válido por 7 dias. Uma vez aberto, o seller tem seis horas para completar o formulário de cadastro, sem interrupções. Caso não seja possível concluir o cadastro nesse período, o marketplace precisa enviar o convite novamente. Isso pode ser feito acessando o módulo Marketplace > Convidar sellers > selecione o seller na lista > clique no botão  <i class="fas fa-paper-plane"></i> Reenviar convite.

## Conectar seller

Uma vez que o seller aceitar o convite e finalizar o registro de sua conta, é necessário conectá-lo ao seu marketplace. Conectar o seller faz com que ele deixe de ser um seller com status _Convidado_ e passe a ser um seller com status _Ativo,_ já incluído no módulo Gerenciamento de Sellers. Para isso, siga os passos abaixo.

 1. Em _Marketplace_, acesse a página **Convidar sellers**.  
 2. Na linha do seller desejado, clique no ícone <i class="fas fa-link"></i> Conectar Seller. 
 Note que somente sellers com status `Aceito` terão essa ação disponível.       
 3. Marque a flag **Ativar seller mais tarde** se deseja impossibilitar o seller de receber pedidos. É possível ativá-lo mais tarde, na página de Gerenciamento de sellers.  
 4. Clique em `Adicionar`.  

Uma vez conectado, o perfil do seller desaparecerá da lista de Sellers Convidados e será transferido para a página de Gerenciamento de Sellers. Conectá-lo com a flag "Ativar Seller Mais tarde" marcada fará com que ele seja criado no Gerenciamento de Sellers, porém com status _inativo_.

