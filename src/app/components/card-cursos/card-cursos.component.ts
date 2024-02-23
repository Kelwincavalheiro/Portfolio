import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.css']
})
export class CardCursosComponent implements OnInit {

  @Input()
  nome:string = ""
  @Input()
  aprendizado:string[] = []
  @Input()
  duracao:string = ""
  @Input()
  ensino:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
