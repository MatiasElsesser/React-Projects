import { EVENTS, BUTTONS } from './const'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // crear evento para avisar que se cambio la pag
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === BUTTONS.primary // primary click
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault()
      navigate(to) // navegacion con SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {... props} />
}
