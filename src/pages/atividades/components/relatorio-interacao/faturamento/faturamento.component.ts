import { Atendimento } from './../../../../../models/atendimento';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'faturamento',
  templateUrl: 'faturamento.html',
})
export class FaturamentoComponent {

  @Input()
  public faturamentoForm: FormGroup;

  @Output()
  public addFaturamentoToForm = new EventEmitter();

  @Input()
  public atendimento: Atendimento;

  public showInput: boolean = false;
  public showFaturamento: boolean = false;
  public showInputFaturamento: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.showInputFaturamento = Boolean(this.faturamentoForm);
  }

  addFaturamento() {
    this.addFaturamentoToForm.emit(this.showInputFaturamento);
  }

  equipamentoControl() {
    return this.fb.group({
      modelo_equipamento: ['', Validators.required],
      numero_equipamento: ['', Validators.required],
      pecas: this.fb.array([]),
    });
  }

  addEquipamento() {
    const equipamentos: FormArray =
    (<FormArray>this.faturamentoForm.controls['equipamentos']);
    if (this.showFaturamento) return equipamentos.push(this.equipamentoControl());
    return equipamentos.value.forEach(() => equipamentos.removeAt(0));
  }


  removeEquipamento(index) {
    const equipamento: FormArray =
    (<FormArray>this.faturamentoForm.controls['equipamentos_com_troca_de_peca']);
    equipamento.removeAt(index);
  }

}
