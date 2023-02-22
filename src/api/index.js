export const fetchCountriesData = async () => {
  try {
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();
    const { Countries } = data;
    return Countries;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch countries data");
  }
};
