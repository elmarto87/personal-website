export default function DiamondSeparator({ className = '' }) {
  return (
    <div
      className={`diamond-separator ${className}`}
      role="separator"
      aria-hidden="true"
    />
  )
}
