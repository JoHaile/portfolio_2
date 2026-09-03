import { writeFile } from "fs/promises"
import { join } from "path"

const DATA_DIR = join(process.cwd(), "data")

// Serialize a data value into a `export const` TS file body.
function serializeValue(value: unknown, depth = 0): string {
  const pad = "  ".repeat(depth)
  if (value === null) return "null"
  if (value === undefined) return "undefined"
  if (typeof value === "string") {
    return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value)
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]"
    if (value.every((v) => typeof v === "string")) {
      return `[\n${pad}    ${value.map((v) => serializeValue(v)).join(",\n" + pad + "    ")},\n${pad}  ]`
    }
    return `[\n${pad}    ${value.map((v) => serializeValue(v, depth + 2)).join(",\n" + pad + "    ")},\n${pad}  ]`
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([, v]) => v !== undefined)
    if (entries.length === 0) return "{}"
    return `{\n${pad}    ${entries
      .map(([k, v]) => `${k}: ${serializeValue(v, depth + 2)}`)
      .join(",\n" + pad + "    ")},\n${pad}  }`
  }
  return "undefined"
}

/**
 * Write a value into a `data/*.ts` file, preserving the existing interface
 * declaration if one is present. The `varName` and `typeName` must match what
 * the frontend imports.
 */
export async function writeDataFile(params: {
  filename: string
  typeName: string
  varName: string
  data: unknown
  interfaceBody?: string
}): Promise<void> {
  const { filename, typeName, varName, data, interfaceBody } = params
  const body = `export const ${varName}: ${typeName} = ${serializeValue(data)};
`

  let content = ""
  if (interfaceBody) {
    content = `export interface ${typeName.replace("[]", "")} ${interfaceBody}\n\n${body}`
  } else {
    content = body
  }

  const filePath = join(DATA_DIR, filename)
  await writeFile(filePath, content, "utf-8")
}

export interface DataFileVar {
  typeName: string
  varName: string
  data: unknown
  interfaceBody: string
}

/**
 * Write multiple `export const` variables into a single `data/*.ts` file,
 * each with its own interface declaration. Preserves no other content.
 */
export async function writeDataFileMulti(params: {
  filename: string
  vars: DataFileVar[]
}): Promise<void> {
  const { filename, vars } = params
  const parts: string[] = []
  for (const v of vars) {
    parts.push(`export interface ${v.typeName.replace("[]", "")} ${v.interfaceBody}`)
    parts.push(
      `export const ${v.varName}: ${v.typeName} = ${serializeValue(v.data)};`
    )
  }
  const content = parts.join("\n\n") + "\n"
  const filePath = join(DATA_DIR, filename)
  await writeFile(filePath, content, "utf-8")
}
