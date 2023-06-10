const transformText = (data) => {
 if (!data) return;

 if (data.includes("_")) {
  return data.split("_").join(" ").toUpperCase();
 }

 return data.toUpperCase();
};

const getCountryName = new Intl.DisplayNames(["en"], { type: "region" });

export { transformText, getCountryName };
