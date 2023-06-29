

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('HttpServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
    });

    it('should create a service instance', () => {
        const service = TestBed.inject(HttpService);
        expect(service).toBeTruthy();
    });
});
