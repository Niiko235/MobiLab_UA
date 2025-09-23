'use client'

export default function Page() {
  return (
    <div className="h-full flex p-4  justify-center">
      <div className="h-150 w-250">
        <iframe
          src="/games/center-of-mass/index.html"
          className="h-150 w-250 border rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  )
}
