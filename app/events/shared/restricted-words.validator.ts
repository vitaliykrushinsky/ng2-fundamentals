import { FormControl, FormGroup, Validators } from '@angular/forms';
export function restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } => {
        if (!words) return null;
        var invalidWords = words.map(item => control.value.includes(item) ? item : null)
            .filter(item => item != null);
        
        return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(', ') } : null;
    }
}