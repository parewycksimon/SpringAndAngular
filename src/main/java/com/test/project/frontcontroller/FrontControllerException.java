

package com.test.project.frontcontroller;

class FrontControllerException extends RuntimeException {

    FrontControllerException(String message) {
        super(message);
    }

    FrontControllerException(String message, Throwable throwable) {
        super(message, throwable);
    }
}
