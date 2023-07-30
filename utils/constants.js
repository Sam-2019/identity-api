const telco = {
 mtn: {
  id: 28,
  bankcode: "MTN",
  alias: "MTN",
  prefix: ["024", "053", "054", "055", "059", "025"],
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
 if (data === telco.mtn.id) {
  return telco.mtn.alias;
 }

 if (data === telco.vodafone.id) {
  return telco.vodafone.alias;
 }

 if (data === telco.airteltigo.id) {
  return telco.airteltigo.alias;
 }

 return null;
};

const getTelcoNameII = (data) => {
 const slicedPhone = data.slice(0, 3);

 if (telco.mtn.prefix.includes(slicedPhone)) {
  return telco.mtn.alias;
 }

 if (telco.vodafone.prefix.includes(slicedPhone)) {
  return telco.vodafone.alias;
 }

 if (telco.airteltigo.prefix.includes(slicedPhone)) {
  return telco.airteltigo.alias;
 }

 return null;
};

const success = "success";
const failed = "failed";
const notFound = "ID not found";
const defaultMessage = "Konnichiwa";
const tooManyRequests = "Request failed with status code 429";
const invalidNumber = "Invalid mobile number. Please check and ty again!";
const stackNotFound =
 "Could not resolve account name. Check parameters or try again.";

export {
 success,
 failed,
 notFound,
 getTelcoCode,
 getTelcoName,
 stackNotFound,
 invalidNumber,
 getTelcoNameII,
 defaultMessage,
 tooManyRequests,
};
