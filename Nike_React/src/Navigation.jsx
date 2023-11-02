const Navigation = () => {
    return (
        <nav className="container">
            <div className='logo'>
              <img src='/public/brand_logo.png' />
            </div>
            <ul>
              <li href='#'>Menu</li>
              <li href='#'>Location</li>
              <li href='#'>About</li>
              <li href='#'>Contact</li>
            </ul>
            <button className='login'>login</button>
      </nav>
    );
}

export default Navigation;