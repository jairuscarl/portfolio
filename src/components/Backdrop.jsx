// Slow-drifting color fields that give the glass something to blur and bend.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
    </div>
  )
}
