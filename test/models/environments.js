var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(upguard){
  var ENV_ID = require('./config.js').ENV_ID;
  var ENV_NAME = require('./config.js').ENV_NAME;
  var createdTestEnvId = 0;

  it('should get all environments', function(done){
    this.timeout(3000);
    upguard.environments.list().then(function(envs){
      expect(envs).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  // Make sure to include the done callback function
  it('should get one page of one envs (Testing URL params)', function(done){
    this.timeout(3000);
    upguard.environments.list('page=1&per_page=1').then(function(envs){
      expect(envs).to.exist;
      expect(envs).to.have.lengthOf(1);
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should show a environment by id', function(done){
    this.timeout(3000);
    upguard.environments.show(ENV_ID).then(function(env){
      expect(env).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('get new environment skeleton json', function(done){
    this.timeout(3000);
    upguard.environments.show('new').then(function(newjson){
      expect(newjson).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should create a new environment', function(done){
    this.timeout(3000);
    var testName = Math.random().toString(36).substring(7);
    var testDescription = "This is a test run for the api wrapper";

    upguard.environments.create({
      name: testName,
      short_description: testDescription
    }).then(function(data){
      expect(data).to.exist;
      console.log("Create a new environment with ID: " + data.id);
      createdTestEnvId = data.id;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should update an environment', function(done){
    this.timeout(3000);
    var testName = Math.random().toString(36).substring(7);
    console.log("Updated the environment with the new name: " + testName);
    upguard.environments.update(createdTestEnvId, {
      name: testName
    }).then(function(data){
      console.log("Looking up the name for environment with id: " + createdTestEnvId);
      upguard.environments.show(createdTestEnvId).then(function(env){
        expect(env).to.exist;
        expect(env.name).to.equal(testName);
        console.log("Verifying the environment has been updated: " + env.name);
      }).catch(function(err){
        done(err);
      });
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should delete the environment', function(done){
    this.timeout(3000);
    upguard.environments.delete(createdTestEnvId).then(function(result){
      expect(result).to.be.true;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should lookup an environment by a name', function(done){
    this.timeout(3000);
    upguard.environments.lookup('?name='+ENV_NAME).then(function(env){
      expect(env).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should get all nodes within an environment', function(done){
    this.timeout(3000);
    upguard.environments.nodes(ENV_ID).then(function(nodes){
      expect(nodes).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should get all nodes within an environment one per page', function(done){
    this.timeout(3000);
    upguard.environments.nodes(ENV_ID, '?page=1&per_page=1').then(function(nodes){
      expect(nodes).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should get a report for an environment', function(done){
    this.timeout(3000);
    upguard.environments.report(ENV_ID).then(function(report){
      expect(report).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });
}
