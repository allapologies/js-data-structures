import { LinkedList } from '../linked-list'

describe('linked list', function () {
    it('should exports', function () {
        expect(LinkedList).toBeDefined();
    });

    it('creates an object of actual shape', function () {
        const expected  = {
            head: null,
            tail: null
        };

        const actual = new LinkedList();
        expect(actual).toEqual(jasmine.objectContaining(expected));
    });
});
