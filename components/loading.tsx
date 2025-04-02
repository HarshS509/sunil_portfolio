export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-emerald-500 border-opacity-50 rounded-full animate-spin"></div>
        <p className="mt-4 text-emerald-500 text-xl font-light">Loading 3D Portfolio...</p>
      </div>
    </div>
  )
}

