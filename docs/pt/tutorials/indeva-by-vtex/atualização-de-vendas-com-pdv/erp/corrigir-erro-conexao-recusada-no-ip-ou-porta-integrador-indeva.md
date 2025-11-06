---
title: 'Corrigir erro “Conexão recusada no IP ou porta” no Integrador Indeva'
id: 3He6MxaQ9xKI4fiZ4t5TqE
status: PUBLISHED
createdAt: 2025-09-18T12:13:41.742Z
updatedAt: 2025-10-17T11:30:40.632Z
publishedAt: 2025-10-17T11:30:40.632Z
firstPublishedAt: 2025-09-18T12:48:39.385Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: fix-connection-refused-error-ip-or-port-integrator-indeva
legacySlug: corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva
locale: pt
subcategoryId: 2TvvbKyvcItxWiM018erXt
---

Este procedimento orienta como resolver situações em que a integração do **Desktop** apresenta a mensagem **“Conexão recusada no IP ou porta”**.

Esse erro geralmente ocorre após a formatação do computador ou quando um novo equipamento é configurado.

Nos casos de integração com **SQL Server**, quando a conexão no IP ou porta é recusada, é necessário habilitar a conexão **TCP/IP** por meio do **SQL Server Configuration Manager**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualização-de-vendas-com-pdv/erp/corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva_1.png)

## Abrir o SQL Server Configuration Manager

No computador da loja ou servidor, abra o **SQL Server Configuration Manager**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualização-de-vendas-com-pdv/erp/corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva_2.png)

Se o **SQL Server Configuration Manager** não estiver disponível no menu **Iniciar**, acesse pelo caminho:  
`C:\Windows\SysWow64\SQLServerConfigurationManager`

Em alguns computadores, podem existir duas versões do **SQL Server** e do **Configuration Manager**.  
Nesse caso, utilize a versão mais recente ou teste para identificar a correta.

**Exemplo com duas versões instaladas:**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualização-de-vendas-com-pdv/erp/corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva_3.png)

## Configurar o SQL Server Network Configuration

No **SQL Server Network Configuration**, selecione o cliente do banco de dados que contém a tabela desejada — geralmente `MSSQLSERVER`, mas pode ter outro nome.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualização-de-vendas-com-pdv/erp/corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva_4.png)

Verifique se os protocolos `TCP/IP` e `VIA` estão com o status **Enabled**.  
Para isso, clique duas vezes ou use o botão direito do mouse e altere o status de **No** para **Yes**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualização-de-vendas-com-pdv/erp/corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva_5.png)

## Definir porta TCP

Na janela **Propriedades TCP/IP**, abra a aba **IP Addresses**.  
Role até o final e, em `IPAII`, configure o campo **TCP Port** com a porta de acesso do banco de dados — geralmente `1433`.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualização-de-vendas-com-pdv/erp/corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva_6.png)

## Reiniciar o serviço do SQL Server

As alterações só são aplicadas após reiniciar o serviço do banco de dados.  
Acesse a aba **SQL Server Services** e identifique o serviço — por exemplo, `MSSQLSERVER`, que pode ter outro nome.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualização-de-vendas-com-pdv/erp/corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva_7.png)

Clique com o botão direito sobre o serviço e selecione **Reiniciar**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualização-de-vendas-com-pdv/erp/corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva_8.png)

## Reiniciar o Integrador Indeva

Após ajustar as configurações, reinicie o **Integrador Indeva**.  
Se a conexão ainda for recusada:

- Verifique se a configuração foi aplicada ao serviço correto em **SQL Server Network Configuration**.  
- Teste se, em alguma versão listada no campo `SQL Native Client` (não necessariamente 10.0), a subopção `VIA` está com o status **Enabled**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualiza%C3%A7%C3%A3o-de-vendas-com-pdv/erp/corrigir-erro-conexao-recusada-no-ip-ou-porta-integrador-indeva_1.png)-ZPw.png)

