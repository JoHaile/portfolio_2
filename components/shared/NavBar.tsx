import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b-accent-foreground border-b ">
      <div>Yohannes Haile</div>

      <ul className="flex space-x-4">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/testimonials">Testimonials</a>
        </li>
        <Button variant="default">
          <a href="/contact">Contact</a>
        </Button>
      </ul>
    </nav>
  );
}
