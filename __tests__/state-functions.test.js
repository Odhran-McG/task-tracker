import InputToDo from "./components/InputToDo";
import EditToDo from "./components/EditToDo";

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });
  });

  describe('Render Caption', () => {
    it('test caption', () => {
      const edit = 'edit';
      expect(edit).toBe('Edit');
    });
  });

describe('')