export const testObj = {
  "id": 123,
  "name": "Elsa",
  "username": "xXfrozen_princessXx",
  "email": "elsa@arendelle.com",
  "age": 21,
  "power": "ice ray",
  "friends": [{
    "id": 234,
    "username": "MagicSnowman32"
  }, {
    "id": 456,
    "username": "call_me_anna"
  }]
};

const mask = '******';

const replaceName = ["name", "username", "password"];
const replaceEmail = ["email"];

export const formatForDisplay = (json: object) => {
  return JSON.stringify(json, undefined, 2);
};

export const maskDisplay = (json: object | string) => {
  try {
    if (typeof json === 'string') {
      json = JSON.parse(json);
    }

    json = replaceValues(json as any);
    return JSON.stringify(json, undefined, 2);
  }
  catch (e: any) {
    return e.toString();
  }
};

const replaceValues = (json: any) => {
  Object.keys(json).forEach((k: string) => {
    if (typeof json[k] === 'object') {
      replaceValues(json[k]);
    }
    else {
      if (replaceName.includes(k)) {
        json[k] = mask;
      }

      if (replaceEmail.includes(k)) {
        json[k] = json[k].replace(/.*(@.*)/, `${mask}$1`);
      }
    }
  });
  return json;
};


