export const updateQuerySearch = (newParams: { [key: string]: string }) => {
    const currentSearchParams = new URLSearchParams(window.location.search);
  
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        currentSearchParams.set(key, value);
      } else {
        currentSearchParams.delete(key);
      }
    });
  
    return currentSearchParams.toString();
  };
  