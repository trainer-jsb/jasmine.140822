describe('null check',()=>{
    it('should be defined',()=>{
        var value = 0;
        expect(value).toBeDefined;
    });
    it('should be undefined',()=>{
        var val1;
        expect(val1).toBeUndefined;
    });
    it('should be null',()=>{
        var value = null;
        expect(value).toBeNull;
    });
});