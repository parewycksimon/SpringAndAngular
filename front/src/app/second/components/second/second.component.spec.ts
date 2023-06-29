

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondComponent } from './second.component';

describe('SecondComponent', () => {
    let component: SecondComponent;
    let fixture: ComponentFixture<SecondComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SecondComponent],
            imports: [HttpClientTestingModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SecondComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create a component instance', () => {
        expect(component).toBeTruthy();
    });
});
