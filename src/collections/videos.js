var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    this.fetch({
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        part: 'snippet',
        q: query,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });
  },

  parse: function(response) {
    return response.items;
  }

});
