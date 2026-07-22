import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface AccountStoreContextType {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedClasses: string[];
  setSelectedClasses: (classes: string[]) => void;
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

  // Selected classes (comma-separated in URL)
  const [selectedClasses, setSelectedClasses] = useState<string[]>(
    searchParams.get("class") ? searchParams.get("class")!.split(",").filter(Boolean) : []
  );

  // Price range (minPrice, maxPrice)
  const [minPrice, setMinPrice] = useState<number>(
    searchParams.get("minPrice") ? parseInt(searchParams.get("minPrice")!) : 5000
  );
  const [maxPrice, setMaxPrice] = useState<number>(
    searchParams.get("maxPrice") ? parseInt(searchParams.get("maxPrice")!) : 270000
  );

  // Level filters (comma-separated in URL)
  const [levelFilter, setLevelFilter] = useState<string[]>(
    searchParams.get("level") ? searchParams.get("level")!.split(",").filter(Boolean) : []
  );

  // Sorting
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "newest");

  // Favorites (persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sellnbuy_favs");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load favorites", e);
    }
  }, []);

  // Sync favorites with localStorage
  const saveFavorites = (newFavs: string[]) => {
    setFavorites(newFavs);
    try {
      localStorage.setItem("sellnbuy_favs", JSON.stringify(newFavs));
    } catch (e) {
      console.error("Failed to save favorites", e);
    }
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      saveFavorites(favorites.filter((favId) => favId !== id));
    } else {
      saveFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id: string) => favorites.includes(id);

  // Sync state with URL search params
  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchQuery) params.search = searchQuery;
    if (selectedClasses.length > 0) params.class = selectedClasses.join(",");
    if (minPrice !== 5000) params.minPrice = minPrice.toString();
    if (maxPrice !== 270000) params.maxPrice = maxPrice.toString();
    if (levelFilter.length > 0) params.level = levelFilter.join(",");
    if (sortBy !== "newest") params.sort = sortBy;

    setSearchParams(params, { replace: true });
  }, [searchQuery, selectedClasses, minPrice, maxPrice, levelFilter, sortBy, setSearchParams]);

  const toggleClass = (cls: string) => {
    if (selectedClasses.includes(cls)) {
      setSelectedClasses(selectedClasses.filter((c) => c !== cls));
    } else {
      setSelectedClasses([...selectedClasses, cls]);
    }
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
    setSelectedClasses([]);
    setMinPrice(5000);
    setMaxPrice(270000);
    setLevelFilter([]);
    setSortBy("newest");
  };

  const activeFiltersCount =
    (selectedClasses.length > 0 ? 1 : 0) +
    (minPrice !== 5000 || maxPrice !== 270000 ? 1 : 0) +
    (levelFilter.length > 0 ? levelFilter.length : 0);

  return (
    <AccountStoreContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedClasses,
        setSelectedClasses,
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
