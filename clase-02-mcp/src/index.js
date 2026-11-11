import { randomUUID } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const casesDir = path.join(projectDir, 'casos');

function markdownText(value) {
  return value.replaceAll('\\', '\\\\').replaceAll('|', '\\|').replaceAll('\r\n', '\n');
}

const server = new McpServer({
  name: 'casos-de-prueba',
  version: '1.0.0',
});

server.tool(
  'crear_caso_prueba',
  'Crea un caso de prueba y lo guarda como archivo Markdown en la carpeta casos/.',
  {
    titulo: z.string().trim().min(1).describe('Título breve del caso de prueba.'),
    requisito: z.string().trim().min(1).describe('Requisito que se valida.'),
    pasos: z.array(z.string().trim().min(1)).min(1).describe('Pasos para ejecutar el caso, en orden.'),
    datos: z.string().trim().min(1).describe('Datos de entrada necesarios para ejecutar el caso.'),
    resultado_esperado: z.string().trim().min(1).describe('Resultado que debería observarse.'),
    prioridad: z.enum(['alta', 'media', 'baja']).describe('Prioridad del caso.'),
  },
  async ({ titulo, requisito, pasos, datos, resultado_esperado, prioridad }) => {
    await mkdir(casesDir, { recursive: true });
    const createdAt = new Date().toISOString();
    const fileName = `${createdAt.replaceAll(/[:.]/g, '-')}-${randomUUID()}.md`;
    const numberedSteps = pasos.map((step, index) => `${index + 1}. ${markdownText(step)}`).join('\n');
    const document = [
      `# ${markdownText(titulo)}`,
      '',
      `- **Requisito:** ${markdownText(requisito)}`,
      `- **Prioridad:** ${prioridad}`,
      `- **Creado:** ${createdAt}`,
      '',
      '## Datos',
      '',
      markdownText(datos),
      '',
      '## Pasos',
      '',
      numberedSteps,
      '',
      '## Resultado esperado',
      '',
      markdownText(resultado_esperado),
      '',
    ].join('\n');

    const filePath = path.join(casesDir, fileName);
    await writeFile(filePath, document, { encoding: 'utf8', flag: 'wx' });
    return {
      content: [{ type: 'text', text: `Caso creado: ${fileName}\nRuta: ${filePath}` }],
    };
  },
);

server.tool(
  'listar_casos',
  'Lista el contenido de todos los casos de prueba Markdown guardados en casos/.',
  {},
  async () => {
    await mkdir(casesDir, { recursive: true });
    const files = (await readdir(casesDir))
      .filter((file) => file.toLowerCase().endsWith('.md'))
      .sort((a, b) => a.localeCompare(b));

    if (files.length === 0) {
      return { content: [{ type: 'text', text: 'Todavía no hay casos de prueba en casos/.' }] };
    }

    const cases = await Promise.all(files.map(async (file) => {
      const contents = await readFile(path.join(casesDir, file), 'utf8');
      return `### ${file}\n\n${contents.trim()}`;
    }));
    return { content: [{ type: 'text', text: cases.join('\n\n---\n\n') }] };
  },
);

await mkdir(casesDir, { recursive: true });
const transport = new StdioServerTransport();
await server.connect(transport);
