export default function () {
  this.passthrough();
  this.urlPrefix = 'https://jsonplaceholder.typicode.com';
  this.namespace = '';
  // this.get('/posts');
  this.get('/posts/', () => {
    return {
      posts: [
        {
          id: 1,
          title: 'hello',
          body: 'hi kids',
        },
        {
          id: 2,
          title: 'Yo guys',
          body: 'We here',
        },
      ],
    };
  });

  this.get('/posts/:id');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.post('/posts');

    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
