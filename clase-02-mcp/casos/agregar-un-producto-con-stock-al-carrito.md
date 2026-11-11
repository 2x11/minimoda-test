# Carrito: agregar producto con stock disponible

- **Requisito:** Desde la ficha de un producto con stock disponible, se puede agregar una unidad al carrito y esta queda reflejada en el carrito.
- **Prioridad:** alta
- **Creado:** 2026-11-11T00:32:36.416Z

## Datos

Producto: Body Manga Larga Estrellitas (ID 1), talle 6M, color Azul. Stock visible al preparar el caso: 12. Cantidad a agregar: 1.

## Pasos

1. Abrir la ficha del producto Body Manga Larga Estrellitas en https://minimoda-navy.vercel.app/producto/1.
2. Verificar que la ficha muestre stock disponible (actualmente indica Stock: 12).
3. Presionar «Agregar al carrito» una vez.
4. Abrir el carrito desde el enlace del encabezado.
5. Verificar que el producto figure en el carrito con cantidad 1.

## Resultado esperado

El carrito incorpora Body Manga Larga Estrellitas con cantidad 1 y el indicador del carrito refleja 1 producto. La acción se completa sin mensaje de falta de stock ni error. A verificar en ejecución: el texto exacto de confirmación, si aparece.
