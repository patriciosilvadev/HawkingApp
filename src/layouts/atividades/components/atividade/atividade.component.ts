import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AtividadeDetail } from './../../../../components/atividade-detail/atividade-detail.component';
import { Atendimento } from '../../../../models';

@Component({
  selector: 'atividade',
  templateUrl: 'atividade.html',
})
export class Atividade {

  @Input()
  Atividade: Atendimento;

  constructor(
    public navCtrl: NavController,
  ) {  }

  openAtividadeDetail( id ) {
    this.navCtrl.push(AtividadeDetail, { id });
  }

}
