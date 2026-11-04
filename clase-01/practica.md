# Práctica clase 01: casos del registro de MiniModa con IA

**Sitio:** https://minimoda-navy.vercel.app/registro


## 1. Preparación
- Navegador y fecha: Chrome 4/11/2025

## 2. Superficie elegida
- Elegí (chat o cowork): Gemini - ChatGPT
- Por qué: Gemini (Gemini Flash) porque es la viene integrada en el navegador de Chrome por defecto y ChatGPT para preguntar dudas y hacer comparaciones con las respuestas dadas por Gemini.

## 3. Preguntas a Gemini
| # | Pregunta | Respuesta (resumen) | ¿Acierto o error/invento? |
|---|----------|---------------------|---------------------------|
| 1 | ¿Qué campos pide el formulario de registro de https://minimoda-navy.vercel.app/registro? | El formulario de creación de cuenta de MiniModa solicita los siguientes campos: Nombre, Email, Contraseña (con un mínimo de 8 caracteres), Confirmar contraseña, Edad (número entero entre 13 y 120), País (selector con opciones como Argentina, Chile, Uruguay, Paraguay, Bolivia, Perú, Colombia, México y España), Casilla de aceptación de los términos y condiciones | Acierto: describe tal cual es el formulario de la pagina. |
| 2 | ¿Cuál es el largo mínimo de la contraseña y qué edad se permite? | Según el formulario de registro de MiniModa: Largo mínimo de la contraseña: Debe tener un mínimo de 8 caracteres. Edad permitida: Se requiere un número entero entre 13 y 120. | Acierto: coincide con el formulario |
| 3 | ¿Qué pasa si no acepto los términos? | Si no marcás la casilla de "Acepto los términos y condiciones", el formulario de MiniModa no te permitirá avanzar ni completar el registro, ya que es un campo obligatorio para poder crear la cuenta. | Acierto: Si no se marca la casilla salta un mensaje que dice "Debés aceptar los términos." |

- Un acierto: Gemini identifico correctamente los requerimientos de cada campo del formulario
- Un error o invento: No detecte ninguno. 

## 4. Primer modo
- Superficie y modo: ___tu respuesta aquí___
- Prompt de ejemplo:
  ```
  Sos QA. Vamos a probar el registro de https://minimoda-navy.vercel.app/registro
  Campos: nombre, email, contraseña, confirmar contraseña, edad, país y aceptar términos.
  1. Listá las reglas que se ven, los datos válidos e inválidos y los valores límite.
  2. Escribí 6 casos de prueba con: título, precondiciones, pasos con datos concretos,
     resultado esperado, prioridad (high/medium/low) y tipo (functional/negative/boundary).
  No inventes mensajes: si no sabés el texto exacto, marcalo "A VERIFICAR".
  ```
- Qué devolvió:  




## 5. Otra superficie: comparación en 3 líneas
1. ___tu respuesta aquí___
2. ___tu respuesta aquí___
3. ___tu respuesta aquí___

## 6. Mis 3 mejores casos (cargados en Qase, proyecto MiniModa)
Formato del título: `Registro: <qué se prueba>`
Captura de la suite en Qase con tus casos: `evidencias/qase-suite-casos.png`

### Caso 1: ___tu respuesta aquí___
- Precondiciones: ___tu respuesta aquí___
- Pasos: ___tu respuesta aquí___
- Resultado esperado: ___tu respuesta aquí___
- Evidencia: `evidencias/qase-MM-4-registro-alta-exitosa.png`

### Caso 2: ___tu respuesta aquí___
- Precondiciones: ___tu respuesta aquí___
- Pasos: ___tu respuesta aquí___
- Resultado esperado: ___tu respuesta aquí___
- Evidencia: `evidencias/qase-MM-5-registro-password-7.png`

### Caso 3: ___tu respuesta aquí___
- Precondiciones: ___tu respuesta aquí___
- Pasos: ___tu respuesta aquí___
- Resultado esperado: ___tu respuesta aquí___
- Evidencia: `evidencias/qase-MM-6-registro-edad-12.png`

## 7. Mapa del harness
| Pieza | En lo que usé |
|-------|---------------|
| Modelo | ___tu respuesta aquí___ |
| App | ___tu respuesta aquí___ |
| Harness | ___tu respuesta aquí___ |
| MCP | ___tu respuesta aquí___ |
| Skill | ___tu respuesta aquí___ |

## 8. Entrega
- Link de tu repo (pegalo también en el Telegram): ___tu respuesta aquí___
