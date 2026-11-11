# casos-de-prueba

Servidor MCP local hecho en Node.js. Expone `crear_caso_prueba` y `listar_casos` por stdio; los archivos Markdown quedan en `casos/` junto a este proyecto.

## Preparar y ejecutar

Requiere Node.js 18 o posterior y acceso a npm para descargar dependencias:

```powershell
npm install
npm start
```

Codex inicia el servidor automáticamente cuando carga la configuración MCP del proyecto. Para usarlo desde otra instalación, registra el comando `node` con el argumento absoluto `src/index.js` y el directorio de trabajo de este proyecto.

## Herramientas

- `crear_caso_prueba`: recibe `titulo`, `requisito`, `pasos` (lista ordenada), `datos`, `resultado_esperado` y `prioridad` (`alta`, `media` o `baja`). Valida los campos y crea un `.md` único con fecha y UUID.
- `listar_casos`: devuelve el contenido de todos los `.md` de `casos/`, ordenados por nombre.

## Cómo se organiza el código

- `package.json` identifica el proyecto, lo configura como ES modules y declara el SDK oficial y Zod.
- `src/index.js` configura el servidor, declara los esquemas de entrada con Zod, implementa lectura/escritura de Markdown y conecta el transporte stdio.
- `.codex/config.toml` en la raíz del repositorio `minimoda-test` registra el proceso para Codex a nivel de proyecto.
- `casos/` es la carpeta de salida; el proceso la crea si todavía no existe.

El canal stdout queda reservado para el protocolo MCP. Evitá agregar `console.log` al servidor; los mensajes de diagnóstico deberían ir a stderr con `console.error`.
