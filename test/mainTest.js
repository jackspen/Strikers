var expect = chai.expect;

describe( 'MainTest', function () {

  it( 'save current ball score', function () {
    var result = getScore();
    expect( result.length ).to.equal( 1 );
  });
 
});


