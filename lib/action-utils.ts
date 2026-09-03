import type { ZodError } from "zod"

export interface FieldErrorMap {
  success: boolean
  error: string | null
  errors?: Record<string, string>
}

export function zodErrorsToMap<T>(zodError: ZodError<T>): Record<string, string> {
  const map: Record<string, string> = {}
  for (const issue of zodError.issues) {
    const key = String(issue.path[0] ?? "form")
    if (!map[key]) {
      map[key] = issue.message
    }
  }
  return map
}

export function fieldErrors(zodError: ZodError<unknown>): Record<string, string> {
  return zodErrorsToMap(zodError as ZodError<unknown>)
}
