---
title: 'Erro ao instalar certificado SSL customizado'
id: 6hgFzbcc96mcrqXZMmHCTr
status: PUBLISHED
createdAt: 2025-02-28T14:55:08.515Z
updatedAt: 2025-03-07T19:46:32.629Z
publishedAt: 2025-03-07T19:46:32.629Z
firstPublishedAt: 2025-02-28T15:00:43.416Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: error-installing-custom-ssl-certificates
locale: pt
legacySlug: erro-ao-instalar-certificado-ssl-customizado
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: certificados SSL, VTEX Shield
---

Alguns erros podem ocorrer durante a instalação de [certificados SSL customizados](/pt/tutorial/certificados-ssl-customizados--1hoaDEbU50PDZSe6AYep9q), funcionalidade disponível no [VTEX Shield](/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). Confira a seguir os erros possíveis e como solucioná-los.

## Solução

Para identificar o significado e verificar a ação corretiva específica para cada mensagem de erro, consulte a tabela abaixo:

| Tipo de erro | Significado | Ação requerida |
| :---- | :---- | :---- |
| *Esse host não está incluído no certificado* | Você selecionou pelo menos um host que não corresponde aos hosts apresentados nos `AltNames` do certificado.| <ul><li>Remover o host destacado em vermelho para deixar de selecionar o host não mencionado no certificado.</li><li>Revisar o conteúdo dos <code>AltNames</code> do certificado utilizando uma ferramenta como o <a href="https://www.sslshopper.com/certificate-decoder.html" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Certificate Decoder</a> e, se necessário, obter outro certificado que inclua os hosts desejados.</li></ul> |
| *Formato inválido*  | O certificado enviado tem formato inválido.   | Revisar o arquivo do certificado e garantir que seja um arquivo .CRT. |
| *Esses hosts não existem mais* | Pelo menos um dos hosts enviados foi excluído da conta antes do certificado ser instalado. Isso pode acontecer, por exemplo, quando outro usuário do Admin apagar o host durante a configuração. Os hosts descritos aparecem destacados em vermelho. | Ao atualizar a página e preencher novamente o formulário, os hosts excluídos não estarão mais entre as opções possíveis. É possível reconfigurar os hosts excluídos antes de instalar o certificado ou não selecionar os hosts excluídos. |
| *Os hosts não estão completamente configurados. Verifique a [documentação](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450) para completar os passos de configuração restantes.* | Pelo menos um dos hosts enviados foi configurado de forma incompleta no passado, possivelmente sem a etapa de apontamento de DNS para a VTEX. | Seguir os passos descritos no guia [Configurar o domínio da loja](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450) e garantir que o DNS do domínio aponta para a VTEX, conforme indicado em [Realizar apontamento de DNS](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dns). |
| *Tamanho inválido* | O arquivo do certificado é maior do que 1MB. | Revisar o arquivo do certificado e garantir que tenha até 1MB. |
| *Certificado inválido* | O conteúdo em XML do certificado é inválido. | Revisar o arquivo do certificado e garantir que o conteúdo em XML está correto. |
| *Acesso não autorizado. Entre em contato com o administrador da sua loja.* | O usuário não tem permissão para instalar um certificado customizado. | Entrar em contato com o administrador da sua loja para revisar a configuração de [perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc). <br /><br /> É necessário ser um usuário associado a um perfil de acesso com os [recursos do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) listados a seguir, para visualizar e gerenciar as informações da página: <ul><li><strong>Produto:</strong> <em>CDN API</em></li><li><strong>Categoria:</strong> <em>Certificate management</em></li><li><strong>Recursos:</strong> <em>Update certificate</em> e <em>View certificate</em></li></ul> |
| *Ocorreu um erro ao instalar o certificado* | Erro genérico para causas não determinadas. | Atualizar a página e, se o problema persistir, entrar em contato com o [Suporte](/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM). |
