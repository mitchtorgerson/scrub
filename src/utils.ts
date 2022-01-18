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

export const formatForDisplay = (json: object | string) => {
  try {
    if (typeof json === 'string') {
      json = JSON.parse(json);
    }

    return JSON.stringify(json, undefined, 2);
  }
  catch (e: any) {
    return e.toString();
  }
};


