const telco = {
  mtn: {
    id: 28,
    bankcode: "MTN",
    alias: "MTN",
    prefix: ["024", "054", "055", "059", "025"],
  },
  vodafone: {
    id: 66,
    bankcode: "VOD",
    alias: "Vodafone",
    prefix: ["020", "050"],
  },
  airteltigo: {
    id: 29,
    bankcode: "ATL",
    alias: "AirtelTigo",
    prefix: ["027", "057", "026", "056"],
  },
};

const getTelcoCode = (data) => {
  const slicedPhone = data.slice(0, 3);

  if (telco.mtn.prefix.includes(slicedPhone)) {
    return telco.mtn.bankcode;
  }

  if (telco.vodafone.prefix.includes(slicedPhone)) {
    return telco.vodafone.bankcode;
  }

  return telco.airteltigo.bankcode;
};

const getTelcoName = (data) => {
  if (telco.mtn.prefix.includes(data)) {
    return telco.mtn.alias;
  }

  if (telco.vodafone.prefix.includes(data)) {
    return telco.vodafone.alias;
  }

  return telco.airteltigo.alias;
};

module.exports = {
  getTelcoCode,
  getTelcoName
};
