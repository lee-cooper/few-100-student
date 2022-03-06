import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTeamMemberComponent } from './pokemon-team-member.component';

describe('PokemonTeamMemberComponent', () => {
  let component: PokemonTeamMemberComponent;
  let fixture: ComponentFixture<PokemonTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTeamMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
