import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;  
  includeNum = false; 
  includeSym = false; 
  pwLength = 0;

  onButtonClick() {
    //this.password = 'Button';
    
    console.log(` 
      Going to generate a password with:
      Letters: ${this.includeLetters}
      Numbers: ${this.includeNum}
      Symbols: ${this.includeSym}
      Length: ${this.pwLength}
    `);

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters){
      validChars += letters;
    }
    if (this.includeNum){
      validChars += numbers;
    }
    if (this.includeSym){
      validChars += symbols;
    }

    let generatedPw = '';
    for (let i=0; i <this.pwLength; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPw += validChars[index];
    }
    this.password = generatedPw;

  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNum() {
    this.includeNum = !this.includeNum;
  }

  onChangeUseSym() {
    this.includeSym = !this.includeSym;
  }
  getPassword() {
    return this.password;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    this.pwLength = parsedValue;
  }
}
