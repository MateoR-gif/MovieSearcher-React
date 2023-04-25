import { useEffect, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState("");

  const handleSearchChange = (event) => {
    updateSearch(event.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setError("Ingrese un nombre ¡De película!");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No me puedes ingresar solo números.");
      return;
    }

    if (search.length < 3) {
      setError("Dame al menos 4 caracteres para buscar.");
      return;
    }

    setError("¡Bien!");
  }, [search]);

  return { search, error, handleSearchChange };
}
