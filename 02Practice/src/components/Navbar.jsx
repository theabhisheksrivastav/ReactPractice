import React from 'react'

export const Navbar = () => {
  return (
    <>
        <div>
            <nav className="bg-amber-300 p-4 flex justify-between top-0">
                <h1 className="text-2xl">Navbar</h1>
                <ul className="flex space-x-4">
                    <li>About</li>
                    <li>Courses</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    </>
  )
}
