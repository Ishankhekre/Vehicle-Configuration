package com.example.demo;

import java.util.Locale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.AcceptHeaderLocaleResolver;

@SpringBootApplication
@ComponentScan(basePackages="com.example.*")
@EntityScan(basePackages="com.example.*")
@EnableJpaRepositories(basePackages = "com.example.*")
@EnableAspectJAutoProxy

public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class,args);
	}

	 @Bean
	    public LocaleResolver localeResolver() {
	        AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();
	        localeResolver.setDefaultLocale(Locale.ENGLISH); // Default language
	        return localeResolver;
	    }

	    // Configure the MessageSource for i18n
	    @Bean
	    public MessageSource messageSource() {
	        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
	        messageSource.setBasename("classpath:messages");  // Base name of the messages files
	        messageSource.setDefaultEncoding("UTF-8");
	        return messageSource;
	    }
}
