import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface AccountStoreContextType {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedClass: string | null;
  setSelectedClass: (cls: string | null) => void;
  toggleClass: (cls: string) => void;
  minPrice: number;
  maxPrice: number;
  setPriceRange: (min: number, max: number) => void;
  levelFilter: string[];
  setLevelFilter: (levels: string[]) => void;
  toggleLevel: (level: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFilters: () => void;
  activeFiltersCount: number;
}

const AccountStoreContext = createContext<AccountStoreContextType | undefined>(undefined);

export const AccountStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search query
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

  // Selected class (single value in URL)
  const [selectedClass, setSelectedClass] = useState<string | null>(
    searchParams.get("class") || null
  );

  // Price range (minPrice, maxPrice in k CPs)
  const [minPrice, setMinPrice] = useState<number>(
    searchParams.get("minPrice") ? parseInt(searchParams.get("minPrice")!) : 0
  );
  const [maxPrice, setMaxPrice] = useState<number>(
    searchParams.get("maxPrice") ? parseInt(searchParams.get("maxPrice")!) : 1000
  );

  // Level filters (comma-separated in URL)
  const [levelFilter, setLevelFilter] = useState<string[]>(
    searchParams.get("level") ? searchParams.get("level")!.split(",").filter(Boolean) : []
  );

  // Sorting
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "newest");

  // Favorites (persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("sellnbuy_favs");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to load favorites", e);
      return [];
    }
  });

  // Sync favorites with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("sellnbuy_favs", JSON.stringify(favorites));
    } catch (e) {
      console.error("Failed to save favorites", e);
    }
  }, [favorites]);

  // Atualização funcional: o "Desfazer" de um toast chama isto depois, com o estado já mudado
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]));
  };

  const isFavorite = (id: string) => favorites.includes(id);

  // Sync state with URL search params. Só mexe nas chaves de filtro, para não apagar
  // outras (ex.: ?conta= da prévia) nem o state da navegação quando nada mudou.
  useEffect(() => {
    const filters: Record<string, string | null> = {
      search: searchQuery || null,
      class: selectedClass,
      minPrice: minPrice !== 0 ? minPrice.toString() : null,
      maxPrice: maxPrice !== 1000 ? maxPrice.toString() : null,
      level: levelFilter.length > 0 ? levelFilter.join(",") : null,
      sort: sortBy !== "newest" ? sortBy : null,
    };
    if (Object.entries(filters).every(([key, value]) => searchParams.get(key) === value)) return;

    const next = new URLSearchParams(searchParams);
    for (const [key, value] of Object.entries(filters)) {
      if (value === null) next.delete(key);
      else next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  }, [searchQuery, selectedClass, minPrice, maxPrice, levelFilter, sortBy, searchParams, setSearchParams]);

  const toggleClass = (cls: string) => {
    setSelectedClass((prev) => (prev === cls ? null : cls));
  };

  const toggleLevel = (lvl: string) => {
    if (levelFilter.includes(lvl)) {
      setLevelFilter(levelFilter.filter((l) => l !== lvl));
    } else {
      setLevelFilter([...levelFilter, lvl]);
    }
  };

  const setPriceRange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedClass(null);
    setMinPrice(0);
    setMaxPrice(1000);
    setLevelFilter([]);
    setSortBy("newest");
  };

  const activeFiltersCount =
    (selectedClass ? 1 : 0) +
    (minPrice !== 0 || maxPrice !== 1000 ? 1 : 0) +
    (levelFilter.length > 0 ? levelFilter.length : 0);

  return (
    <AccountStoreContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedClass,
        setSelectedClass,
        toggleClass,
        minPrice,
        maxPrice,
        setPriceRange,
        levelFilter,
        setLevelFilter,
        toggleLevel,
        sortBy,
        setSortBy,
        favorites,
        toggleFavorite,
        isFavorite,
        clearFilters,
        activeFiltersCount,
      }}
    >
      {children}
    </AccountStoreContext.Provider>
  );
};

export const useAccountStore = () => {
  const context = useContext(AccountStoreContext);
  if (!context) {
    throw new Error("useAccountStore must be used within an AccountStoreProvider");
  }
  return context;
};
