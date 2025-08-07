const contentful = require("contentful-management");
require("dotenv").config();

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

module.exports = async function getEnvironment() {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
  return await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT);
};
