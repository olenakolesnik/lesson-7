import { useEffect } from "react";
import css from "./Sidebar.module.css";

interface SidebarProps {
    onClose: () => void;
}

function Sidebar({ onClose }: SidebarProps) {
    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            console.log(event.code);
            
            if (event.code === "Escape") {
                onClose();
   }
    
}

        document.addEventListener("keydown", handleKeydown)
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        }
    }, [onClose]);
    return (
        <div className={css.wrapper}>
        <div className={css.sidebar}>
          <button onClick={onClose}>Close</button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            voluptatum culpa modi? Quaerat repellat sit error officia dolore?
            Suscipit nisi aliquam voluptates accusamus repellat illo expedita
            necessitatibus laudantium animi quo?
          </p>
        </div>
      </div>
    )
}

export default Sidebar;