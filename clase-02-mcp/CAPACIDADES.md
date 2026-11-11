# Capacidades observadas con MCP

## Playwright MCP

Durante esta tarea, el agente pudo abrir MiniModa en el navegador, navegar a la ficha del producto `Body Manga Larga Estrellitas` y consultar su snapshot de accesibilidad. Así identificó el nombre del producto, talle, color, stock visible (`Stock: 12`) y el botón «Agregar al carrito». El snapshot también mostró los enlaces de navegación, incluido el acceso al carrito.

Esto permite relevar información visible y convertirla en pasos y datos concretos para un caso de prueba. En esta ejecución se inspeccionó la ficha, pero no se hizo clic en «Agregar al carrito» ni se comprobó el resultado dentro del carrito: el comportamiento esperado quedó como una verificación para quien ejecute el caso.

## MCP propio (`casos-de-prueba`)

El MCP propio permitió crear y guardar un caso de prueba Markdown con título, requisito, prioridad, datos, pasos ordenados y resultado esperado. Generó un nombre único para el archivo y lo guardó en `clase-02-mcp/casos/`. La herramienta también ofrece listar los casos guardados.

## Ahorro de tiempo estimado

Estimación para esta tarea puntual, no una medición cronometrada: preparar manualmente un caso equivalente —abrir el sitio, inspeccionar el producto, redactar y guardar el Markdown— podría llevar unos **8 a 12 minutos**. Con los MCP, la navegación e inspección y la creación del archivo tomaron aproximadamente **1 a 2 minutos de trabajo efectivo**, además del tiempo de espera de carga. El ahorro estimado es de **6 a 10 minutos (aprox. 75–85%)**. La estimación depende de la velocidad de carga y de cuánto detalle requiera el caso.

## Límites encontrados

- El snapshot expone el contenido accesible de la página, pero algunos valores aparecieron sin texto en la captura. Por eso el caso usa solamente datos visibles y verificables, como el nombre, talle, color y stock.
- El stock es un valor observado al momento de preparar el caso (`12`); puede cambiar. Conviene volver a comprobarlo antes de ejecutar la prueba.
- La generación del caso no equivale a ejecutar ni aprobar la prueba. En esta sesión no se agregó el artículo ni se confirmó que el carrito actualice su cantidad; ese resultado sigue pendiente de verificación.
- El MCP propio guarda el archivo en la carpeta configurada para este proyecto y acepta los campos definidos por su esquema. No administra Qase ni verifica por sí mismo los resultados del sitio.
- El ahorro indicado es aproximado y contempla una tarea sencilla de un solo producto. No se midió frente a una ejecución manual cronometrada.
