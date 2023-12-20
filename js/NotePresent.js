export default class NotePresent {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
        <div class="notes__sidebar">
            <button class="notes__add">Add note</button>
            <div class="notes__list"></div>

            
        </div>
        <div class="notes__preview">
            <input class="notes__title" type="text" placeholder="New Notes">
            <textarea class="notes__body">Write Note...</textarea>
        </div>
        `;
    }
}