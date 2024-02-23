import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-projetos',
  templateUrl: './card-projetos.component.html',
  styleUrls: ['./card-projetos.component.css']
})
export class CardProjetosComponent implements OnInit {

  @Input()
  descricao:string = ""
  @Input()
  imagemProjeto:string = ""
  @Input()
  imagemPequena:string = ""
  @Input()
  hospedagem:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
