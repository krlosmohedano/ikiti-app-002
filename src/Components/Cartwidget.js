import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline'

export default function Cartwidget() {
  return (
    <button
    type="button"
    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
  >
    <span className="sr-only">CartWidget</span>
    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
  </button>
  )
}
