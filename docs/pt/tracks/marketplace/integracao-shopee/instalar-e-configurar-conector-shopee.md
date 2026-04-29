---
title: 'Instalar e Configurar conector Shopee'
id: 2kss3HDVbJwgOOKFgOVhcf
status: PUBLISHED
createdAt: 2025-03-17T15:10:36.951Z
updatedAt: 2025-07-18T00:14:06.512Z
publishedAt: 2025-07-18T00:14:06.512Z
firstPublishedAt: 2025-03-17T15:36:28.899Z
contentType: trackArticle
productTeam: Channels
slugEN: install-and-configure-shopee-connector
locale: pt
trackId: 4CaZCzU9ZO1CByH0haZ9hA
trackSlugEN: integracao-shopee
order: 6
---

Para instalar o conector da Shopee, siga os passos abaixo:

Acesse a [VTEX App Store](https://apps.vtex.com/).
Procure pelo app Shopee.
Clique no botão `Obter App`.
Clique no botão `Confirmar`.
Faça login na VTEX App Store com o seu [account name](/pt/docs/tutorials/o-que-e-account-name) na VTEX.
Clique no botão `Fechar pedido`.
Feito o download do app da Shopee, é necessário fazer a instalação do app na sua loja VTEX, clique no botão `Vá para a página de Instalação`.
Clique no botão `Instalar`.

Configurar o conector

Após instalar o conector, é necessário configurá-lo, para isso, siga os passos abaixo: 

No Admin VTEX vá em  **Aplicativos > Shopee > Configurações,** ou digite **Shopee**  na barra de busca.
Clique no botão `Conectar Shopee`.
 Para confirmar o status da integração, observe qual a cor do círculo que aparece no topo da página ao lado do título **Conexão VTEX e Shopee.** A conexão apresenta três status diferentes:

Verde: Quando a autenticação com a Shopee está concluída.
Amarelo: Quando há problemas com autenticação com a Shopee. Para solucionar, faça a autenticação novamente.
Vermelho: Quando a autenticação não foi realizada ou autorizada na Shopee.

Preencha os campos que aparecerão na tela. Veja na tabela a seguir quais são os campos e como preenchê-los.

| **Campo** | **Descrição** |
| --- | --- |
| Integração Logística do Vendedor do Shopee | Caso você queira utilizar o sistema de logística próprio, é necessário [autenticar essa integração](/pt/tracks/integracao-shopee--4CaZCzU9ZO1CByH0haZ9hA/70xqC5uNOggv51Lb3su45w#cadastrando-logistica-do-vendedor-na-shopee) com a Shopee por meio de login. |
| ID de afiliado | Código identificador para criação de um afiliado que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: SHP. |
| Canal de vendas a ser sincronizado | ID da política comercial que definirá o sortimento de catálogo e os valores dos itens que serão enviados para a Shopee. |
| Email de notificação | Preencha com um email do responsável pela integração. Este é o contato que receberá notificações sobre a integração da sua loja VTEX com a Shopee. O e-mail precisa ser o mesmo cadastrado na sua conta Shopee. |
| Estoque mínimo | Determina o valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização da Shopee pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial. |
| Unidade de peso usada no catálogo | Selecione a unidade de peso que seus produtos estão cadastrados no catálogo VTEX. |
| Idioma do mapeador de categorias | Escolha qual o idioma será utilizado no mapeamento de categorias. |
| Tipo da etiqueta de envio | Selecione qual o tipo de arquivo da etiqueta de envio você quer receber. |

## Prazo da autorização e reautenticação

Ao concluir o fluxo de configuração na Shopee, o marketplace solicita que você defina por quanto tempo vale aquela autorização. As opções são exibidas na tela de configuração da Shopee no momento do login.
Assim que o prazo selecionado nessa configuração expirar, é **necessário reautenticar a integração**.

Quando faltar sete dias para expirar a autorização, o aplicativo da Shopee no Admin VTEX, exibirá um botão de reautenticação. Para realizar o processo, siga os passos abaixo:

Com o app **3.x**, o processo de reautenticação funciona assim:

1. Clique no botão `Autenticar integração`.
2. Faça login na tela da Shopee que aparecerá.
3. Retorne à página do aplicativo no Admin VTEX.

> O aviso com contagem de dias e botão de reautenticação está disponível somente no aplicativo Shopee na versão 3.x. Atualize seu aplicativo na[VTEX App Store](https://apps.vtex.com/).