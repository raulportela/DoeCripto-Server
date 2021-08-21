import axios from "axios";
import fs from "fs";
import path from "path";
import https from "https";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const certificate = fs.readFileSync(
  path.resolve(__dirname, `../../../certs/${process.env.GN_CERT}`)
);

const agent = new https.Agent({
  pfx: certificate,
  passphrase: "",
});

export const authenticate = ({ clientID, clientSecret }: any) => {
  //Transformar algo em base64 em node
  const credentials = Buffer.from(`${clientID}:${clientSecret}`).toString(
    "base64"
  );

  return axios({
    method: "POST",
    url: `${process.env.GN_ENDPOINT}/oauth/token`,
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
    httpsAgent: agent,
    data: {
      grant_type: "client_credentials",
    },
  });
};

export const GNRequest = async (credentials: any) => {
  const authResponse = await authenticate(credentials);

  const accessToken = authResponse.data?.access_token;

  return axios.create({
    baseURL: process.env.GN_ENDPOINT,
    httpsAgent: agent,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-type": "application/json",
    },
  });
};
