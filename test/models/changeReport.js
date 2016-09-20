var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(upguard){

  it('should get a change report', function(done){
    this.timeout(20000);
    upguard.changeReport.list().then(function(report){
      console.log(report);  
      expect(report).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });
}