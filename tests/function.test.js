const sum = require('../src/function');
test("add 1 and 2 eqals to 3 ",()=>{
    expect(sum(1,2)).toBe(3);
})