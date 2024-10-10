import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Livro } from './livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})

export class LivrosComponent {
  livro: Livro = {
    id: 1,
    name: 'O idiota'
  };
}