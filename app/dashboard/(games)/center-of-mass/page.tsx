'use client'

export default function Page() {
  return (
    <div className="flex flex-row m-4 gap-2">
      <div className="h-150 w-250">
        <iframe
          src="/games/center-of-mass/index.html"
          className="h-150 w-250 border rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  )
}
