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
legacySlug: erro-ao-instalar-certificado-ssl-customizado
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - certificados SSL
  - VTEX Shield
---

Alguns erros podem ocorrer durante a instalação de [certificados SSL customizados](/pt/docs/tutorials/certificados-ssl-customizados), funcionalidade disponível no [VTEX Shield](/pt/docs/tutorials/vtex-shield). Confira a seguir os erros possíveis e como solucioná-los.

## Solução

Para identificar o significado e verificar a ação corretiva específica para cada mensagem de erro, consulte a tabela abaixo:

| Tipo de erro | Significado | Ação requerida |
| :---- | :---- | :---- |
| *Esse host não está incluído no certificado* | Você selecionou pelo menos um host que não corresponde aos hosts apresentados nos `AltNames` do certificado.| <ul><li>Remover o host destacado em vermelho para deixar de selecionar o host não mencionado no certificado.</li><li>Revisar o conteúdo dos `AltNames` do certificado utilizando uma ferramenta como o [Certificate Decoder](https://www.sslshopper.com/certificate-decoder.html) e, se necessário, obter outro certificado que inclua os hosts desejados.</li></ul> |
| *Formato inválido*  | O certificado enviado tem formato inválido.   | Revisar o arquivo do certificado e garantir que seja um arquivo .CRT. |
| *Esses hosts não existem mais* | Pelo menos um dos hosts enviados foi excluído da conta antes do certificado ser instalado. Isso pode acontecer, por exemplo, quando outro usuário do Admin apagar o host durante a configuração. Os hosts descritos aparecem destacados em vermelho. | Ao atualizar a página e preencher novamente o formulário, os hosts excluídos não estarão mais entre as opções possíveis. É possível reconfigurar os hosts excluídos antes de instalar o certificado ou não selecionar os hosts excluídos. |
| *Os hosts não estão completamente configurados. Verifique a [documentação](/pt/docs/tutorials/configurar-o-dominio-da-loja) para completar os passos de configuração restantes.* | Pelo menos um dos hosts enviados foi configurado de forma incompleta no passado, possivelmente sem a etapa de apontamento de DNS para a VTEX. | Seguir os passos descritos no guia [Configurar o domínio da loja](/pt/docs/tutorials/configurar-o-dominio-da-loja) e garantir que o DNS do domínio aponta para a VTEX, conforme indicado em [Realizar apontamento de DNS](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dns). |
| *Tamanho inválido* | O arquivo do certificado é maior do que 1MB. | Revisar o arquivo do certificado e garantir que tenha até 1MB. |
| *Certificado inválido* | O conteúdo em XML do certificado é inválido. | Revisar o arquivo do certificado e garantir que o conteúdo em XML está correto. |
| *Acesso não autorizado. Entre em contato com o administrador da sua loja.* | O usuário não tem permissão para instalar um certificado customizado. | Entrar em contato com o administrador da sua loja para revisar a configuração de [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso). <br /><br /> É necessário ser um usuário associado a um perfil de acesso com os [recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager) listados a seguir, para visualizar e gerenciar as informações da página: <ul><li>**Produto:** *CDN API*</li><li>**Categoria:** *Certificate management*</li><li>**Recursos:** *Update certificate* e *View certificate*</li></ul> |
| *Ocorreu um erro ao instalar o certificado* | Erro genérico para causas não determinadas. | Atualizar a página e, se o problema persistir, entrar em contato com o [Suporte](/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex). |
