function Header({ itemCount }) {
    return (
      <header className="container">
        <h1>Shopping Cart</h1>
  
        <ul className="breadcrumb">
          <li>Home</li>
          <li>Shopping Cart</li>
        </ul>
  
        <span className="count">{itemCount} items in the bag</span>
      </header>
    );
  }
export default Header;  