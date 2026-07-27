function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="size-2 rounded-full bg-primary" />
          <span className="text-sm font-semibold text-foreground">
            yohannes.dev
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Designed &amp; built with precision. &copy; 2026
        </p>
      </div>
    </footer>
  )
}

export { Footer }
