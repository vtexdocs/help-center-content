---
title: 'Configurando a importação em massa de dados sobre organizações e centros de custos '
id: 41FwcZHF3GctzKcgyKGaoF
status: PUBLISHED
createdAt: 2024-04-25T11:45:15.945Z
updatedAt: 2024-05-21T14:04:56.238Z
publishedAt: 2024-05-21T14:04:56.238Z
firstPublishedAt: 2024-04-29T18:38:46.485Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slug: configurando-a-importacao-em-massa-de-organizacoes-e-centros-de-custo
locale: pt
legacySlug: configurando-a-importacao-em-massa-de-organizacoes-e-centros-de-custo
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---

A importação em massa de dados permite a simplificação do processo de atualização e manutenção de informações para organizações compradoras, seus usuários (membros) e centros de custo.

>⚠️ Antes de configurar a funcionalidade de importação em massa, é necessário ter instalado em sua loja o aplicativo [B2B Suite](https://developers.vtex.com/docs/apps/vtex.b2b-suite).

Veja abaixo como realizar a importação em massa de dados na plataforma VTEX:

1. No Admin VTEX, acesse **Aplicativos > Organizações e centros de custo B2B > Organizações**, ou digite **Organizações** na barra de busca no topo da página.

2. Na aba Organizações, clique no botão **Novo**, e selecione Importar em massa. Clique no botão **Enviar** e selecione seu arquivo **XLSX**, ou arraste e solte o arquivo na área tracejada. O arquivo importado deve ser menor que 50 MB.

>ℹ️ Caso necessário, baixe um arquivo modelo clicando em VTEX file template no rodapé da janela de importação e preencha os dados de importação.

<ol start="3">
	<li>Após a plataforma realizar uma verificação no arquivo importado e não indicar erros, clique em Importar.</li>
</ol>

>ℹ️ Caso a plataforma encontre algum tipo de erro, verifique a seção **Erros de importação**.

<ol start="4">
	<li>Após o processo de importação ser concluído, você pode clicar em  Exibir detalhes de importação para acessar o relatório de importação.</li>
</ol>

![Importação em massa - PT](https://images.ctfassets.net/alneenqid6w5/3sWvUytkkonIe01tnvXwpK/5957afd8831ee93e55609e2b55b5b552/Bulk_import_vers_o_original-PT.gif)

# Erros de importação

Durante o processo de importação, o sistema realizará uma verificação do arquivo para evitar erros. Em caso de ocorrência de erros, você será notificado por e-mail e receberá um alerta na tela.

Para obter uma visão detalhada dos problemas encontrados, siga os passos abaixo:

1. Clique em Exibir detalhes de importação e acesse o relatório de erros correspondente.

2. Faça o download da planilha revisada clicando no botão **Baixar XLSX revisado**. Nela você encontra os locais com os erros.

3. Após corrigir os erros, você pode reiniciar o processo de importação, fazendo upload do arquivo corrigido novamente.

>ℹ️ Certifique-se de carregar apenas o arquivo contendo as correções dos erros previamente identificados para garantir uma importação bem-sucedida.

![Bulk import - PT](https://images.ctfassets.net/alneenqid6w5/xXZgwvWu4ngsY9D9hjQsO/4ebe7b4b5b1c0d5b2d7feb36134d9a5e/Bulk_import_vers_o_error-gif-PT.gif)

# Importação via API

A importação de informações também pode ser realizada por meio da [API Bulk import](https://developers.vtex.com/docs/api-reference/buyer-organizations?endpoint=overview), permitindo a realização das operações de validação e importação de arquivos, acompanhamento do progresso e resultado da importação.
