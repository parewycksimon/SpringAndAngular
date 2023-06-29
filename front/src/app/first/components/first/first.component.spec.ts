

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first.component';

describe('FirstComponent', () => {
    let component: FirstComponent;
    let fixture: ComponentFixture<FirstComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FirstComponent],
            imports: [HttpClientTestingModule, FormsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FirstComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create a component instance', () => {
        expect(component).toBeTruthy();
    });
});
