const transformText = (data) => {
 return data.split(" ").join("_").toLowerCase();
};

const getCountryName = new Intl.DisplayNames(["en"], { type: "region" });

export { transformText, getCountryName };
