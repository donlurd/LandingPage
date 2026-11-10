import { Component } from '@angular/core';

interface BlogPost {
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  publishedLabel: string;
}

@Component({
  selector: 'app-blogs',
  imports: [],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {
  protected readonly posts: BlogPost[] = [
    {
      title: 'Lo que estoy aprendiendo al crear mi portafolio',
      summary:
        'Ideas, decisiones y pequeños aprendizajes durante la construcción de esta página.',
      category: 'Desarrollo web',
      publishedAt: '2026-11-09',
      publishedLabel: '9 de noviembre de 2026',
    },
    {
      title: 'Por qué me interesan los videojuegos',
      summary:
        'Una reflexión sobre creatividad, diseño y las experiencias que dejan los juegos.',
      category: 'Juegos',
      publishedAt: '2026-11-09',
      publishedLabel: '9 de noviembre de 2026',
    },
  ];
}