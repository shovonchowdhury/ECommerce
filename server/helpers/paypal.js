const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcMqCrREnHK28GpcwLHOBCsfAN763q_eqOYAkNX0wl_zKKklTcCIq50dSzdumBzwrHcf_QwzYL9uYIQb",
  client_secret: "EBdsERjxJM7nfOPcGsB6nFACBRi5QnAKc_bui6CXAiCt5WMEiMLqCHwnG6QIIiph_nB--aVis6CW2vzP",
});

module.exports = paypal;