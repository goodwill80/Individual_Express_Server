var members = require('../../members.json');

module.exports= {
  index: function(req, res){
    console.log("My group members listing");
    res.json(members);
  },


  show: function(req, res){
    console.log("Individual Member");


    for (var i = 0; i < members.length; i++) {
        var user = req.params.name;
      if (members[i].name === user) {
        var teammember = members[i];
        return res.json(teammember);
    }

  }
  return res.status(404);
}
};
