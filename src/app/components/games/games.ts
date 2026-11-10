import { Component } from '@angular/core';

interface GameInterest {
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Games {
  protected readonly games: GameInterest[] = [
    {
      title: 'Proyecto personal',
      description:
        'Un espacio para presentar un juego, prototipo o idea que quieras desarrollar.',
      category: 'En desarrollo',
    },
    {
      title: 'Diseño de experiencias',
      description:
        'Exploro cómo las mecánicas, el arte y la narrativa pueden trabajar juntas.',
      category: 'Interés',
    },
    {
      title: 'Juegos favoritos',
      description:
        'Aquí puedes compartir los juegos que inspiran tu forma de crear.',
      category: 'Inspiración',
    },
  ];
}