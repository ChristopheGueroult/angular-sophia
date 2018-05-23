import {Directive, HostBinding, Input, OnChanges} from '@angular/core';
import {State} from "../../shared/enums/state.enum";


@Directive({
  selector: '[appState]'
})

/**
 * 1 récupérer la valeur de item.state
 * 2 construire un nom de class en fonction de item.state
 * 3 binder la propriété class de l'element sur lequel on applique cette directive avec
 *   un string construit à partir de item.state
 */
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') myClassName: string;
  constructor() {
    // console.log(this.appState); // trop tot, angular utilise le cycle de vie ngOnInit
    // pour initialiser l'input appState
  }

  ngOnChanges(): void {
    console.log(this.appState);
    this.myClassName = this.formatCssClass(this.appState);
  }

  removeAccentents(state: string): string {
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  formatCssClass(state: State): string {
    return `state-${
      this.removeAccentents(state)
        .toLowerCase()
        .replace(' ', '')
    }`;
  }

}
