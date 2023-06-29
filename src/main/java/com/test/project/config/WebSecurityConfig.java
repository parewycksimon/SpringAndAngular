

package com.test.project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestHandler;
import org.springframework.security.web.csrf.XorCsrfTokenRequestAttributeHandler;

@Configuration
public class WebSecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Use only the handle() method of XorCsrfTokenRequestAttributeHandler and the
        // default implementation of resolveCsrfTokenValue() from CsrfTokenRequestHandler
        CsrfTokenRequestHandler requestHandler = new XorCsrfTokenRequestAttributeHandler();
        http.csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .csrfTokenRequestHandler(requestHandler)
        );

        return http.build();
    }

    @Bean
    @Order(-1)
    SecurityFilterChain staticResources(HttpSecurity http) throws Exception {
        http.securityMatchers(matches -> matches.requestMatchers("/static/**"))
                .authorizeHttpRequests(authorize -> authorize.anyRequest().permitAll());

        return http.build();
    }
}

