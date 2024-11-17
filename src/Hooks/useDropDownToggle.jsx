import { useState, useEffect } from "react";

const useDropDownToggle = (callback) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('[data-dropdown="true"]')) {
        setOpen(false);
        callback?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  const toggleOpen = () => setOpen((prev) => !prev);

  return { open, toggleOpen, setOpen };
};

export default useDropDownToggle;
