describe('inequality check',()=>{
    var value = 10;
    it('should pass for greater than', ()=>{
        expect(value).toBeGreaterThan(8);
    });
    it('should pass for less than', ()=>{
        expect(value).toBeLessThan(12);
    });
});