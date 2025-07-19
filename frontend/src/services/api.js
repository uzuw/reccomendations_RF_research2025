export const fetchHotels = async () => {
  const res = await fetch("http://localhost:8000/recommend/?location=Pokhara&feature=wifi&feature=breakfast&price=medium");
  const data = await res.json();
  return data.recommendations;
};
