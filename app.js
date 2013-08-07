(function(){

  return {

    events: {
      'app.activated': 'gotoLinks'
    },

    gotoLinks: function(){
      this.switchTo('links');
    }

  };

}());
