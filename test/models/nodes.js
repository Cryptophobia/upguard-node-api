var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(upguard){
  var NODE_ID = require('./config.js').NODE_ID;
  var createdTestNodeId = 0;

  it('should get all nodes', function(done){
    this.timeout(3000);
    upguard.nodes.list().then(function(nodes){
      //console.log(nodes);  //#debugging
      expect(nodes).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  // Make sure to include the done callback function
  it('should get one page of two nodes (Testing URL params)', function(done){
    this.timeout(3000);
    upguard.nodes.list('page=1&per_page=2').then(function(nodes){
      expect(nodes).to.exist;
      expect(nodes).to.have.lengthOf(2);
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should show a node by id', function(done){
    this.timeout(3000);
    upguard.nodes.show(NODE_ID).then(function(node){
      expect(node).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('get new node skeleton json', function(done){
    this.timeout(3000);
    upguard.nodes.show('new').then(function(newjson){
      expect(newjson).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should create a new node', function(done){
    this.timeout(3000);
    var testName = Math.random().toString(36).substring(7);
    var testMacAddress = null;
    var testNodeType = 'SV';
    var testEnvId = 2;
    var testOSFamId = 2;
    var testOSId = 221;
    var testExtId = null;
    var testMedType = 3;
    var testMedUserName = 'ubuntu';
    var testMedHostName = '10.111.222.333';
    var testMedPort = 22;

    upguard.nodes.create({
      name: testName,
      mac_address: testMacAddress,
      node_type: testNodeType,
      environment_id: testEnvId,
      operating_system_family_id: testOSFamId,
      operating_system_id: testOSId,
      external_id: testExtId,
      medium_type: testMedType,
      medium_username: testMedUserName,
      medium_hostname: testMedHostName,
      medium_port: testMedPort
    }).then(function(data){
      expect(data).to.exist;
      console.log("Create a new node with ID: " + data.id);
      createdTestNodeId = data.id;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should update a node', function(done){
    this.timeout(3000);
    var testName = Math.random().toString(36).substring(7);
    console.log("Updated the node with the new name: " + testName);
    upguard.nodes.update(createdTestNodeId, {
      name: testName
    }).then(function(data){
      console.log("Looking up the name for node with id: " + createdTestNodeId);
      upguard.nodes.show(createdTestNodeId).then(function(node){
        expect(node).to.exist;
        expect(node.name).to.equal(testName);
        console.log("Verifying the node has been updated: " + node.name);
      }).catch(function(err){
        done(err);
      });
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should delete the node', function(done){
    this.timeout(3000);
    upguard.nodes.delete(createdTestNodeId).then(function(result){
      expect(result).to.be.true;
      done();
    }).catch(function(err){
      done(err);
    });
  });
}
