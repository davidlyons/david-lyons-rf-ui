import Logo from '@/icons/logo-rain-focus.svg?react'

export const Sidebar = () => (
  <nav className="sidebar">
    <div className="sidebar-top">
      <button className="sidebar-button">
        <Logo className="sidebar-logo" />
      </button>
      <button className="sidebar-button">
        <img src="/logo-summit.png" alt="RainFocus Summit" />
      </button>
    </div>

    {/* user */}
    <button className="sidebar-button">
      <div className="sidebar-user">FL</div>
    </button>
  </nav>
)
