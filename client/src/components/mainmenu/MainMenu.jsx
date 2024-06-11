import React from 'react'
import MainMenuItem from './mainmenuitem/MainMenuItem'

const MainMenu = () => {
  return (
    <div className="navbar-collapse collapse flex-grow-0">
        <ul className="navbar-nav d-flex gap-4 ">
            <MainMenuItem iconName={'home'} to={'/'} label={'Home'} />
            <MainMenuItem iconName={'people'} label={'Rete'} />
            <MainMenuItem iconName={'bag-handle'} label={'Lavoro'} />
            <MainMenuItem iconName={'chatbox-ellipses'} label={'Messaggistica'} />
            <MainMenuItem iconName={'notifications'} label={'Notifiche'} />
        </ul>
    </div>
  )
}

export default MainMenu