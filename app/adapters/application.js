// import RESTAdapter from '@ember-data/adapter/rest';

// export default RESTAdapter.extend({
//   host: "https://jsonplaceholder.typicode.com",
//   },
// );

import JSONAPIAdapter from "@ember-data/adapter/json-api";

export default JSONAPIAdapter.extend({
  host: "https://jsonplaceholder.typicode.com",
});