import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Link({
  page,
  selectedPage,
  setSelectedPage
}) {
  const lowerCasePage = page.toLowerCase().replace(' ', '')
  return (
    <AnchorLink
      className={"item-center" + `${selectedPage === lowerCasePage ? "text-primary-500" : "transition duration-500 hover:text-primary-300"}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
