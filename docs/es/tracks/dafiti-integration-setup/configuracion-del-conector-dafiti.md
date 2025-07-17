---
title: 'Configuración del conector Dafiti'
id: 3PV2OACP2E4O4uOKKW2sMg
status: PUBLISHED
createdAt: 2018-09-27T17:57:53.647Z
updatedAt: 2024-07-02T19:17:57.983Z
publishedAt: 2024-07-02T19:17:57.983Z
firstPublishedAt: 2018-09-27T20:41:13.133Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-dafiti-connector
locale: es
trackId: 4wF4RBx9ygEkimW6SsKw8i
trackSlugES: configurar-la-integracion-de-dafiti
---

La configuración del conector se realiza en el Admin. Para completarla, siga las instrucciones a continuación:

1. Acceda al Admin.
2. En el módulo _MARKETPLACE_, haga clic en `Integraciones`.
3. Haga clic en `Configuración`.
4. En la card de Dafiti, haga clic en `Integrar`.
5. Rellene los campos que aparecen en la pantalla según se describe a continuación y después haga clic en `Guardar configuración` (los campos marcados con el símbolo * son obligatorios).

- **Integración (si elige desactivar la integración, se eliminará toda la configuración, incluyendo la autenticación y la afiliación)*:** marque _Activada_ para que la integración comience a funcionar.

- **Ambiente*:** elija la opción _Producción_ para utilizar el ambiente real de ventas de Dafiti. Esta es la configuración sugerida. Si desea realizar algunas pruebas en la integración, marque _QA_. Dafiti proporciona el _token_ y el acceso al ambiente de prueba.

- **ID del afiliado*:** es el identificador del [afiliado](/es/tutorial/o-que-e-afiliado) que está creando con esta integración. No puede ser igual a ningún afiliado anteriormente registrado en el Admin. Para configurar el ID del afiliado, debe elegir tres consonantes, repetidas o no (sugerencia: DFT). Si tiene una configuración de [integración para multidominios](/es/tutorial/como-criar-multiloja-multidominio), preste mucha atención al ID de afiliado, ya que este campo debe tener un valor diferente para cada dominio.

- **Política comercial*:** es el ID de la política comercial que se utilizará para la integración con Dafiti. Todos los productos vinculados a esta política comercial se enviarán al marketplace.

- **Clave de acceso*:** introduzca el _token_ de identificación de su tienda en el marketplace. Esta información la proporciona Dafiti.

- **Usuario*:** rellene este campo con el usuario generado tras haberse registrado en el portal de Dafiti.

- **Email del afiliado*:** ingrese un email para el afiliado que está creando.

- **Inventario mínimo (si el saldo del SKU es igual o inferior al valor definido, se enviará un saldo 0 al marketplace)*:** valor mínimo de stock de seguridad. Si la cantidad de ítems en stock de un producto es inferior al valor elegido, su anuncio se pausará para evitar que se realicen ventas sin stock durante el tiempo de actualización de Dafiti por VTEX. El valor de stock mínimo se aplica a todos los productos, así que verifique si algún producto dejaría de anunciarse debido a su stock inicial.

- **Permitir HTML en la descripción del producto*:** determina si la descripción de los productos se enviará a Dafiti con etiquetas HTML. Al marcar _Sí_, se enviará la descripción exactamente de la forma en que se registró en la plataforma VTEX, manteniendo la estilización del texto en negrita o en cursiva, por ejemplo. Al marcar _No_, la integración eliminará las etiquetas HTML de las descripciones de sus productos.

- **FOB*:** tipo de flete, denominado _Libre a bordo_, en el que el tipo de entrega del producto, su cobro y la emisión de etiqueta son definidos y realizados por el marketplace. Al marcar _Sí_, Dafiti se hace responsable del flete. Al elegir _No_, el flete se establece de acuerdo con su [estrategia de envío](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/55MezrFTw2limlgT7KUg6l) en VTEX. Si desea más información, lea el artículo [Cómo funciona el flete cuando la entrega es hecha por el marketplace](/es/tutorial/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ).

- **Enviar Kit*:** si selecciona _No_, los SKU [registrados como kits](/es/tutorial/cadastrando-kit--tutorials_215) no se enviarán a Dafiti. Al activar el _Sí_, todos los ítems de su política comercial se enviarán al marketplace, sin filtrar los SKU registrados como kits. Se pueden realizar cambios en la configuración del conector en cualquier momento, y esto no afecta a los SKU que ya han sido enviados. Por ejemplo, si cambiara su configuración de _Sí_ a _No_, los SKU enviados previamente a Dafiti no se eliminarán ni tendrán ningún cambio.

  <div class="alert alert-info">
Si se activa la opción <i>No</i>, los intentos de enviar SKU registrados como kits a Dafiti generarán el siguiente mensaje de advertencia: <i>«El conector está configurado para no enviar los SKU del tipo Kit»</i>. Este mensaje puede verse en Admin, en el módulo <b>MARKETPLACE > Integraciones > Productos,</b> al hacer clic en el SKU.
</div>

- **Nombre de SKU*:** determina cuál será la regla para nombrar los SKU en el portal de Dafiti. Debe seleccionar una de las combinaciones disponibles de los siguientes atributos: _Marca_, _Nombre del Producto_ y _Nombre del SKU._

![print nome exibicao produto es](https://images.ctfassets.net/alneenqid6w5/3MiGbDbIXFGiawLcXjji5w/35e795635bba7aa025facd31d63d76d7/print_nome_exibicao_produto_es.png)

> Ejemplo: mi producto es una zapatilla deportiva negra de Nike. El _Nombre de SKU_ que seleccioné fue _Marca - Nombre del Producto - Nombre del SKU_. Así, el nombre que aparecerá en el portal de Dafiti será Nike zapatilla deportiva negra.

- **NCM:** es la Nomenclatura Común del Mercosur (NCM), que define la tasa impositiva común para el bloque. Para determinados productos, es necesario informar en este campo el nombre único de la especificación del producto o SKU responsable, que contiene la información de NCM en el catálogo.
- **Id. de cliente:** código único asignado a un vendedor para acceder a la integración.
- **Client Secret:** código único utilizado para autenticar la integración.
- **Mapeo de campos personalizados (Nombre y descripción):** Para utilizar este mapeo es necesario crear un campo personalizado. Para saber cómo crear campos personalizados accede a la documentación de [Registrar especificaciones o campos de producto](/es/tutorial/criando-um-campo-de-produto--tutorials_106).

Para que el mapeo funcione, el seller debe seguir los siguientes pasos:

1. Crea un campo de tipo `Texto grande`.  
2. Deshabilite la opción `Mostrar especificación`.  
3. Complete los campos creados en cada producto registrado.  

Este campo debe completarse de la siguiente manera:

1. Complete el campo **DESDE** con el nombre del campo de origen.  
2. Complete el campo **PARA** con el nombre del nuevo campo.  
3. Haga clic en el botón <i class="fas fa-plus" aria-hidden="true"></i> y se agregará una regla de mapeo a tu integración.  

<div class = "alert alert-info">
Cada regla registrada asigna solo un campo.

