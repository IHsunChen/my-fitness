import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "../../assets/Logo.png"
import Link from '../common/Link/Link'
import useMediaQuery from '../../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ActionButton from '../common/ActionButton/ActionButton'

function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage
}) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
      <div className={`${navBackground} flex items-center justify-between fixed z-30 w-full py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
          {/* left side */}
          <div className="flex w-full gap-6">
            <img alt="logo" src={Logo} />
          </div>
          {/* right side */}
          {isAboveMediumScreens ? (<div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-between gap-8 text-sm'>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className='flex items-center justify-between gap-8'>
              <p>Sign in</p>
              <ActionButton
                setSelectedPage={setSelectedPage}
              >
                Become a Member
              </ActionButton>
            </div>
          </div>) : (
            <button
              className='rounded-full bg-secondary-500 p-2'
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className='h-6 w-6 text-white' />
            </button>
          )}
          {/* Mobil Menu Modal */}
          {!isAboveMediumScreens && isMenuToggled && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
              {/* Close Icon */}
              <div className='flex justify-end p-12'>
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className='h-6 w-6 text-gray-400' />
                </button>
              </div>
              {/* Menu Items */}
              <div className='flex flex-col gap-10 ml-[33%] text-2xl'>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
