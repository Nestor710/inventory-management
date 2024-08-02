'use client'
import { Menu } from "lucide-react"

const Sidebar = () => {
  return (
    <div>
        {/* Top Logo */}
        <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
            <div>Logo</div>
            <h1 className="font-extrabold text-2xl">STOCKIFY</h1>
            <button
                className="md:hidden px-3 py-3 bg-gray-100 hover>bg-blue-100 rounded-full"
                onClick={() => {}}
            >
                <Menu className="w-4 h-4" />
            </button>
        </div>
        {/* Links over here */}
        <div className="flex-grow mt-8">

        </div>

        {/* Footer */}
        <div>
            <p className="text-center text-xs text-gray-500">
                &copy; 2024 STOCKIFY
            </p>
        </div>
    </div>
  )
}

export default Sidebar