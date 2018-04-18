var SearchView = Backbone.View.extend({

  events: {
    "click button": 'initiateSearch',
    'keyup input': 'handleKeyUp',
  },

  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.initiateSearch();
    }
  },

  initiateSearch: function() {
    const query = this.$('input').val().trim();
    if (query) {
      this.collection.search(query);
    }
    // this.$('input').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
