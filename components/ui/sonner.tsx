"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
          success:
            "!bg-emerald-50 !text-emerald-900 border !border-emerald-200 [&_[data-icon]]:text-emerald-500 dark:!bg-emerald-950/60 dark:!text-emerald-50 dark:!border-emerald-900",
          error:
            "!bg-red-50 !text-red-900 border !border-red-200 [&_[data-icon]]:text-red-500 dark:!bg-red-950/60 dark:!text-red-50 dark:!border-red-900",
          info: "",
          warning: "",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
