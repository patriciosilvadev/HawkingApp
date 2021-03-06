import {
  getAtividadesPendentes,
  getAtividadesEmExecucao,
  getAtividadesConcluidas,
  getAtividadesPausadas,
} from './../../redux/reducers/atividade.reduce';
import { Component } from '@angular/core';
import {
  PopoverController,
  AlertController,
} from 'ionic-angular';
import { Observable, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { AtividadeI } from '../../models';
import { State } from '../../redux/reducers';

import {
  RetriveAtendimento,
} from '../../redux/reducers/atendimento.reducer';

import { buttonProperties } from '../../utils/ButtonProperties';
import { PopoverComponent } from './../../components/popover/popover.component';


@Component({
  selector: 'atividades',
  templateUrl: 'atividades.html',
})
export class AtividadesPage {

  public title = 'Atividades';

  public atividades$: Observable<any[]>;
  public atividadesPausadas$: Observable<AtividadeI[]>;
  public atividadesEmExecucao$: Observable<AtividadeI[]>;
  public atividadesPendentes$: Observable<AtividadeI[]>;
  public atividadesConcluidas$: Observable<AtividadeI[]>;

  public changeAtendimentos$: Subject<string> = new Subject<string>();
  public buttonProperties = buttonProperties;

  constructor(
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    private store: Store<State>,
  ) {
    this.atividadesPendentes$ = this.store.select(getAtividadesPendentes);
    this.atividadesEmExecucao$ = this.store.select(getAtividadesEmExecucao);
    this.atividadesConcluidas$ = this.store.select(getAtividadesConcluidas);
    this.atividadesPausadas$ = this.store.select(getAtividadesPausadas);
  }

  ionViewDidLoad() {
    this.store.dispatch(new RetriveAtendimento());
  }

  eventRefresh() {
    this.store.dispatch(new RetriveAtendimento());
  }

  presentPopover(totalExecucao) {
    totalExecucao > 0 ? this.showAlert() : this.showPopOver();
  }


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Atenção!',
      // tslint:disable-next-line:max-line-length
      subTitle: 'Para iniciar uma nova atividade é necessário finalizar ou pausar a atividade em execução!',
      buttons: ['OK'],
    });
    alert.present();
  }

  showPopOver() {
    const options = { cssClass : 'atividade-modal' };
    const popover = this.popoverCtrl.create(
      PopoverComponent,
      { buttonProperties },
      options,
    );
    popover.present();
  }
}
