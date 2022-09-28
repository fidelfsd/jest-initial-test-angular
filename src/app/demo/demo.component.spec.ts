import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('2 + 4', () => {
    expect(2 + 4).toBe(6)
  })

  test('Comprueba si son iguales', () => {
    expect(10).toBe(10);
    expect(typeof 10).toBe('number');
    expect(true).toBe(true);
  })

  test('Comprueba que 10 no es 11', () => {
    expect(10).not.toBe(11);
  })

  test('Comparando objetos', () => {
    expect({ name: 'juan' }).toEqual({ name: 'juan' });
  })

  // test('Comparando objetos mal', () => {
  //   expect({ name: 'juan' }).toBe({ name: 'juan' }); // falla
  // })

  test('Comprobando si existe', () => {
    expect(true).toBeTruthy();
    expect({ name: 'Juan' }).not.toBeFalsy();
  })

  test('Comprobando si no existe', () => {
    expect(null).toBeFalsy();
    expect(0).not.toBeTruthy();
  })

  test('.toHaveLength()', () => {
    let arr = [10];
    expect(arr).toHaveLength(1);
    expect(arr).not.toHaveLength(2);
  })

  test('.toBeGraterThan() toBeGraterThanOrEqual()', () => {
    const numero = 100;
    expect(numero).toBeGreaterThan(90);
    expect(numero).toBeGreaterThanOrEqual(100);
  })

  // test('0.2 + 0.1 = 0.3', () => {
  //   expect(0.1 + 0.2).toBe(0.3);
  // })

  test('0.2 + 0.1 aprox 0.3', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  })

  test('.toBleClose()', () => {
    const numero = 0.30004;
    expect(numero).not.toBeCloseTo(0.3, 5);
    expect(numero).toBeCloseTo(0.3, 4);
  })

  test('.toBeDefined() .toBeUndefined()', () => {
    let miVariable;
    expect(miVariable).toBeUndefined();
    expect(miVariable).not.toBeDefined();
    miVariable = true;
    expect(miVariable).toBeDefined();
    expect(miVariable).not.toBeUndefined();
  })

  test('.toMatch(regExp)', () => {
    let miCadena = `Cadena a evaluar n12`
    expect(miCadena).toMatch(/^Cadena( a )?[a-z,A-Z,0-9, ]+/)
    miCadena = `Cadena evaluar n12`
    expect(miCadena).toMatch(/^Cadena( a )?[a-z,A-Z,0-9, ]+/)
    miCadena = 'Otra cadena';
    expect(miCadena).not.toMatch(/^Cadena( a )?[a-z,A-Z,0-9, ]+/)
  })

  test('.toHaveProperty()', () => {
    const obj = {
      name: 'Juan',
      age: 32
    }

    // toHaveProperty(claveDeValor)
    expect(obj).toHaveProperty('name');
    expect(obj).not.toHaveProperty('x');

    // toHaveProperty(claveDeValor, ValorAsociado)
    expect(obj).toHaveProperty('name', 'Juan');
    expect(obj).not.toHaveProperty('name', 'Juan2');
  })

  test('la lista contiene manzana', () => {
    const frutas = ['peras', 'fresas', 'manzanas']

    expect(frutas).toContain('manzanas')
  })


  // exepciones
  test('metodo validar funciona correctamente', () => {

    expect(() => component.validar()).toThrow()
    expect(() => component.validar()).toThrow(Error)

    expect(() => component.validar()).toThrow('Error en la entrada de datos')
    expect(() => component.validar()).toThrow(/datos/)
  })

});
