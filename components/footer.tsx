export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
          Trading involves risk. No guarantees of profit are made or implied. This mentorship is education focused on execution and decision-making, not signals or financial advice. Past performance does not guarantee future results. You are solely responsible for your own trading decisions and outcomes.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} HancockTrades. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
