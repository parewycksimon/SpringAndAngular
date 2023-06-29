

import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { FactoryProvider } from '@angular/core';

export const AppBaseHrefWithoutStaticProvider: FactoryProvider = {
    provide: APP_BASE_HREF,
    useFactory: (platformLocation: PlatformLocation) => {
        return platformLocation
            .getBaseHrefFromDOM()
            .replace('static/', '');
    },
    deps: [PlatformLocation]
};

