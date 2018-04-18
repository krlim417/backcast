var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    
    this.listenTo(this.videos, 'sync', this.selectFirstVideo);
    this.videos.search('The Duck Song');
    this.render();
  },

  selectFirstVideo: function() {
    if (this.videos.length) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
