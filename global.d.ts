declare global {
  function confetti(): () => (value: string, opts?: any) => void
}

export {}
