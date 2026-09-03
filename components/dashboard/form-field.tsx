"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const OTHER_VALUE = "__OTHER__"

function FormError({ children }: { children?: React.ReactNode }) {
  if (!children) return null
  return (
    <p className="text-sm font-medium text-destructive" role="alert">
      {children}
    </p>
  )
}

/**
 * Plain controlled shadcn/Base UI select (no hidden input). Value changes are
 * reported upward via onValueChange so the parent can mirror them into
 * hidden inputs.
 */
function BaseSelect({
  value,
  onValueChange,
  multiple = false,
  placeholder,
  className,
  children,
}: {
  value: string[] | string | null
  onValueChange: (value: string[] | string | null) => void
  multiple?: boolean
  placeholder?: string
  className?: string
  children: React.ReactNode
}) {
  const isArray = Array.isArray(value)
  const display = isArray
    ? (value as string[]).join(", ")
    : ((value as string | null) ?? "")

  const trigger = (
    <>
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder={placeholder}>
          {display || <span className="text-muted-foreground">{placeholder}</span>}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </>
  )

  if (multiple) {
    return (
      <Select
        multiple
        value={value as string[]}
        onValueChange={(v) => onValueChange(v as string[])}
      >
        {trigger}
      </Select>
    )
  }

  return (
    <Select
      value={value as string}
      onValueChange={(v) => onValueChange(v as string | null)}
    >
      {trigger}
    </Select>
  )
}

const Option = ({
  value: optionValue,
  children,
}: {
  value: string
  children: React.ReactNode
}) => <SelectItem value={optionValue}>{children}</SelectItem>

/**
 * Single-select field with a presets list and an "Other" option that reveals a
 * free-text input. The effective value is mirrored into a hidden input named
 * `name` so the native form submission includes it.
 */
function SelectWithOther({
  name,
  label,
  options,
  defaultValue,
  placeholder,
  error,
  hint,
}: {
  name: string
  label: React.ReactNode
  options: string[]
  defaultValue?: string
  placeholder?: string
  error?: string
  hint?: React.ReactNode
}) {
  const inPresets = defaultValue ? options.includes(defaultValue) : false
  const initialIsOther = !!defaultValue && !inPresets
  const [isOther, setIsOther] = useState(initialIsOther)
  const [presetValue, setPresetValue] = useState<string>(
    !!defaultValue && !initialIsOther ? (defaultValue as string) : ""
  )
  const [otherText, setOtherText] = useState<string>(
    initialIsOther ? (defaultValue as string) : ""
  )

  const effectiveValue = isOther ? otherText : presetValue

  if (isOther) {
    return (
      <div className="space-y-2">
        <Label>{label}</Label>
        <Button
          type="button"
          variant="outline"
          className="w-full justify-start font-normal"
          onClick={() => {
            setIsOther(false)
            setOtherText("")
          }}
        >
          {effectiveValue} <span className="ml-1 text-xs text-muted-foreground">(edit)</span>
        </Button>
        <Input
          name={name}
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          placeholder="Type custom value"
        />
        {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
        <FormError>{error}</FormError>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <BaseSelect
        value={presetValue}
        onValueChange={(v) => {
          const next = v as string | null
          if (next === OTHER_VALUE) {
            setIsOther(true)
          } else if (next) {
            setPresetValue(next)
          }
        }}
        placeholder={placeholder ?? "Select..."}
      >
        {options.map((o) => (
          <Option key={o} value={o}>
            {o}
          </Option>
        ))}
        <Option value={OTHER_VALUE}>Other</Option>
      </BaseSelect>
      <input type="hidden" name={name} value={effectiveValue} />
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      <FormError>{error}</FormError>
    </div>
  )
}

/**
 * Multi-select field with a presets list and an "Other" button that reveals a
 * text input to add custom values. Values are mirrored into hidden inputs.
 */
function MultiSelectWithOther({
  name,
  label,
  options,
  defaultValue,
  placeholder,
  error,
  hint,
}: {
  name: string
  label: React.ReactNode
  options: string[]
  defaultValue?: string[]
  placeholder?: string
  error?: string
  hint?: React.ReactNode
}) {
  const initial = defaultValue ?? []
  const [selected, setSelected] = useState<string[]>(
    initial.filter((v) => options.includes(v))
  )
  const [customs, setCustoms] = useState<string[]>(
    initial.filter((v) => !options.includes(v))
  )
  const [showOtherInput, setShowOtherInput] = useState(false)
  const [otherText, setOtherText] = useState("")

  const allValues = [...selected, ...customs]

  function addCustom() {
    const trimmed = otherText.trim()
    if (trimmed && !allValues.includes(trimmed)) {
      setCustoms((prev) => [...prev, trimmed])
    }
    setOtherText("")
    setShowOtherInput(false)
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <BaseSelect
        value={selected}
        onValueChange={(v) => setSelected(v as string[])}
        multiple
        placeholder={placeholder ?? "Select..."}
      >
        {options.map((o) => (
          <Option key={o} value={o}>
            {o}
          </Option>
        ))}
      </BaseSelect>

      {customs.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {customs.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1 rounded-md border border-input bg-muted px-2 py-0.5 text-xs"
            >
              {c}
              <button
                type="button"
                className="text-muted-foreground hover:text-destructive"
                onClick={() => setCustoms((prev) => prev.filter((x) => x !== c))}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}

      {selected.map((v) => (
        <input key={`sel-${v}`} type="hidden" name={name} value={v} />
      ))}
      {customs.map((v) => (
        <input key={`cust-${v}`} type="hidden" name={name} value={v} />
      ))}

      {showOtherInput ? (
        <div className="flex gap-2">
          <Input
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            placeholder="Type a custom value"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                addCustom()
              }
            }}
          />
          <Button type="button" variant="outline" onClick={addCustom}>
            Add
          </Button>
        </div>
      ) : (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowOtherInput(true)}
        >
          + Other
        </Button>
      )}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      <FormError>{error}</FormError>
    </div>
  )
}

export { FormError, SelectWithOther, MultiSelectWithOther }
