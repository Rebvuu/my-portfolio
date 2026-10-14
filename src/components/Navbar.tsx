
export default function Navbar() {

return (

<nav>
    <div className="flex items-center justify-center p-4">
      <nav className="flex justify-between max-w-7xl w-full">
        <a href="#about" className="hover:text-primary">
          Rebecca Vuurman
        </a>
        <span>
          2026
        </span>
        <a href="#contact" className="hover:text-primary">
          Contact
        </a>
      </nav>
    </div>
</nav>
)
}
