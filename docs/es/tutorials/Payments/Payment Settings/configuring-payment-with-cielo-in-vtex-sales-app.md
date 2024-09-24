---
title: 'Configurar pagos con Cielo en VTEX Sales App'
id: 2p8rALKTNojgEl8zKn5BtG
status: CHANGED
createdAt: 2024-08-16T15:15:25.799Z
updatedAt: 2024-09-24T13:59:36.764Z
publishedAt: 2024-09-24T13:42:46.499Z
firstPublishedAt: 2024-08-16T18:22:08.305Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagos-con-cielo-en-vtex-sales-app
locale: es
legacySlug: configurar-pagos-con-cielo-en-vtex-sales-app
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, es posible integrarse con el proveedor de pago Cielo. A través de este conector, su tienda puede ofrecer transacciones de pago en tiendas físicas (VTEX Sales App), utilizando puntos de venta (POS). Para más información acceda [¿Qué es VTEX Sales App?](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

>ℹ️ Para utilizar el proveedor Cielo en su tienda a través de otros canales de venta en línea (excepto VTEX Sales App), visite [Configurar pago con CieloEcommerce](https://help.vtex.com/es/tutorial/configurar-pago-con-cieloecommerce--6zuELBqEo0QzApbU4l7L4).

Para utilizar el proveedor Cielo en la VTEX Sales App, es necesario:

- [Configurar claves en el entorno Cielo](#configurar-claves-en-el-entorno-de-cielo)
- [Configurar el conector Cielo (VTEX Sales App) en VTEX](#configurar-el-conector-cielo-vtex-sales-app-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)

>⚠️ Las configuraciones realizadas en un entorno externo a VTEX puede interrumpirse o modificarse sin previo aviso. Consulta tu cuenta Cielo para obtener información actualizada.

## Configurar claves en el entorno de Cielo

Los siguientes pasos describen las configuraciones mínimas a realizar para que el conector Cielo quede correctamente configurado. Otras configuraciones personalizadas que se apliquen a los clientes, habilitando métodos de pago específicos o características particulares de la plataforma, deberán realizarse de acuerdo con Cielo.

<blockquote><ui>1. Accede al <a href="https://desenvolvedores.cielo.com.br/api-portal/pt-br">portal para desarrolladores de Cielo</a> para crear una nueva cuenta.</ui>

<blockquote><ui>>⚠️ El portal de desarrolladores Cielo permite al usuario obtener información sobre todas las claves necesarias para configurar la conexión entre VTEX y Cielo Lio. Recomendamos que el procedimiento a continuación lo realice un usuario que ya tenga acceso a las otras claves en su cuenta Cielo.</blockquote>

<blockquote><ui>2. Luego de iniciar sesión, solicite la creación de claves de SalesApp a través del enlace <a href="https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108">https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108</a> 
o accediendo <b>Suporte > Cielo Lio > Envie sua pergunta > Token de integração remota</b> dentro del portal. Introduzca los siguientes datos: <i>Assunto: Solicitação de chaves de produção</i> y <i>Nome do PDV: SalesApp</i>.</ui> 

<blockquote><ui>>ℹ️ Las claves estarán disponibles en el portal de desarrolladores Cielo dentro de 2 días hábiles.</blockquote>

## Configurar el conector Cielo (VTEX Sales App) en VTEX

<blockquote><ui>1. No Admin VTEX, acesse <b>Configurações da loja > Pagamentos > Provedores</b>, ou digite <b>Provedores</b> na barra de busca no topo da página.</ui>

<blockquote><ui>2. Na tela de provedores, clique no botão <b>Novo provedor</b>.</ui>

<blockquote><ui>3. Digite o nome <b>CieloEcommerce</b> na barra de busca e clique sobre o nome do provedor.</ui>

<blockquote><ui>4. Em <b>Chave de aplicação</b>, insira o nome da sua <b>MerchantID</b> fornecido pela Cielo.</ui>

<blockquote><ui>5. Em <b>Token de aplicação</b>, insira a chave <b>Client token</b> gerada no portal do desenvolvedor da Cielo.</ui>  

<blockquote><ui>6. Caso deseje modificar o nome de identificação a ser exibido para o provedor Cielo na tela do Admin VTEX, insira a informação no campo <b>Nome</b> em <b>Informações básicas</b>.</ui>

<blockquote><ui>7. Em <b>Controle de pagamento</b>, desative o ambiente de teste ao desmarcar a opção <b>Ativar modo de teste</b>.</ui>

<blockquote><ui>8. Mantenha desmarcada a opção <b>Ativar split de recebíveis e enviar recebedores de pagamento</b>.</ui>   

<blockquote><ui>9. Em <b>Integration</b>, selecione a opção <b>Adquirencia</b> (clientes Cielo 3.0) ou <b>Gateway</b> (clientes Braspag).</ui>

<blockquote><ui>10. Em <b>Provider</b>, selecione a opção <b>Cielo</b> (clientes Cielo 3.0) ou <b>Cielo30</b> (clientes Braspag).</ui>

<blockquote><ui>11. Em <b>IsSplit</b>, selecione a opção <b>False</b>.</ui>

<blockquote><ui>12. Em <b>useCieloMDR</b>, selecione a opção <b>Not Defined</b>.</ui> 

<blockquote><ui>13. Em <b>UseMpi</b>, selecione a opção <b>False</b>.</ui> 

<blockquote><ui>14. Mantenha em branco os seguintes campos: <b>MpiClientId</b>, <b>MpiClientSecret</b>, <b>MpiMerchantName</b>, <b>MpiMCC</b>, <b>MpiEstablishmentCode</b> e <b>SoftDescriptor</b>.</ui>

<blockquote><ui>15. Em <b>AntifraudProvider</b>, selecione a opção <b>Not Defined</b>.</ui>  

<blockquote><ui>16. Em <b>Antifraud</b>, selecione a opção <b>Not Defined</b>.</ui>   

<blockquote><ui>17. Em <b>AntifraudSequenceCriteria</b>, selecione a opção <b>Not Defined</b>.</ui> 

<blockquote><ui>18. Em <b>Captura</b>, selecione a opção <b>Imediatamente</b>.</ui>   

<blockquote><ui>19. Em <b>UseVerifyCard</b>, selecione a opção <b>False</b>.</ui>

<blockquote><ui>20. Em <b>AcceptInternationalCard</b>, selecione a opção <b>True</b>.</ui>

<blockquote><ui>21. Em <b>AcceptPrePaidCard</b>, selecione a opção <b>True</b>.</ui>

<blockquote><ui>22. Em <b>SaveCard</b>, selecione a opção <b>False</b>.</ui>  

<blockquote><ui>23. Em <b>CancelRefundType</b>, selecione a opção <b>Automático Sempre que possível</b>.</ui> 

<blockquote><ui>24. Em <b>CieloLIOClientId</b>, preencha a chave da Lio fornecida pela Cielo.</ui>   

<blockquote><ui>25. Clique em <b>Salvar</b>.</ui>

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Venda Direta Debito** o **Venda Direta Credito**.
4. En **Procesar con proveedor**, seleccione el conector previamente configurado.
5. Active la condición en el campo **Status**.
6. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
7. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
8. Haga clic en `Guardar`.

Tras seguir los pasos indicados, el proveedor Cielo puede tardar hasta 10 minutos para aparecer como opción de pago en la App Ventas VTEX de su tienda.
