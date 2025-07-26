import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* theme toggle */}
        <ThemeToggle />


        {/* bg  */}

        {/* NavBar */}
        <Navbar />


        {/* content */}


        
        {/* footer */}
    </div>
  )
}
